<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-white mb-8">Assistant d'Entraînement IA</h1>

        <!-- Configuration API -->
        <div class="bg-gray-800 rounded-lg p-6 mb-6">
            <h2 class="text-xl font-bold text-white mb-4">Configuration API</h2>
            <div class="mb-4">
                <label class="block text-white mb-2">Clé API HuggingFace:</label>
                <input 
                    type="password" 
                    v-model="apiKey" 
                    class="w-full bg-gray-700 text-white rounded p-2"
                    placeholder="Entrez votre clé API"
                />
            </div>
            <button 
                @click="updateApiKey" 
                class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Mettre à jour la clé API
            </button>
            <p v-if="apiKeyStatus" class="mt-2 text-sm" :class="apiKeyStatus.color">
                {{ apiKeyStatus.message }}
            </p>
        </div>
        
        <!-- Compteur de générations -->
        <div class="bg-blue-900 rounded-lg p-4 mb-6">
            <p class="text-white">
                Générations ce mois-ci: {{ monthlyCount }}/30
                <span class="text-sm text-gray-300 block mt-1">
                    (Limite mensuelle: 30 générations)
                </span>
            </p>
        </div>

        <div class="bg-gray-800 rounded-lg p-6">
            <div class="mb-4">
                <label class="block text-white mb-2">Spécificité de l'entraînement:</label>
                <select v-model="focusArea" class="w-full bg-gray-700 text-white rounded p-2">
                    <option value="technique">Technique</option>
                    <option value="physique">Physique</option>
                    <option value="tactique">Tactique</option>
                    <option value="mixte">Entraînement complet</option>
                </select>
            </div>

            <div class="mb-4">
                <label class="block text-white mb-2">Durée (minutes):</label>
                <input 
                    type="number" 
                    v-model="duration" 
                    class="w-full bg-gray-700 text-white rounded p-2" 
                    min="30"
                    max="180" 
                />
            </div>

            <button 
                @click="generateWorkout" 
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                :disabled="loading || !hf">
                {{ loading ? 'Génération en cours...' : 'Générer un entraînement' }}
            </button>

            <div v-if="workout" class="mt-6 bg-gray-700 p-4 rounded">
                <div v-html="formattedWorkout" class="text-white"></div>
            </div>

            <div v-if="error" class="mt-4 text-red-500">
                {{ error }}
            </div>
        </div>
    </div>
</template>

<script>
import { HfInference } from '@huggingface/inference'

export default {
    name: 'GptTraining',
    data() {
        return {
            focusArea: 'technique',
            duration: 60,
            workout: null,
            loading: false,
            error: null,
            hf: null,
            apiKey: '',
            apiKeyStatus: null,
            monthlyCount: 0,
            monthKey: new Date().toISOString().slice(0, 7)
        }
    },
    created() {
        const savedKey = localStorage.getItem('hf_api_key')
        if (savedKey) {
            this.apiKey = savedKey
            this.initializeHf(savedKey)
        }
        this.loadMonthlyCount()
    },
    computed: {
        formattedWorkout() {
            if (!this.workout) return ''
            return this.workout.replace(/\n/g, '<br>')
        }
    },
    methods: {
        initializeHf(key) {
            try {
                this.hf = new HfInference(key)
                this.apiKeyStatus = {
                    message: 'Clé API configurée avec succès',
                    color: 'text-green-400'
                }
            } catch (err) {
                this.apiKeyStatus = {
                    message: 'Erreur de configuration de la clé API',
                    color: 'text-red-400'
                }
                console.error(err)
            }
        },
        updateApiKey() {
            if (!this.apiKey) {
                this.apiKeyStatus = {
                    message: 'Veuillez entrer une clé API',
                    color: 'text-red-400'
                }
                return
            }
            localStorage.setItem('hf_api_key', this.apiKey)
            this.initializeHf(this.apiKey)
        },
        loadMonthlyCount() {
            const currentMonth = new Date().toISOString().slice(0, 7)
            const savedData = localStorage.getItem('workoutGeneration')
            if (savedData) {
                const data = JSON.parse(savedData)
                if (data.month === currentMonth) {
                    this.monthlyCount = data.count
                } else {
                    this.monthlyCount = 0
                    this.saveMonthlyCount()
                }
            }
        },
        saveMonthlyCount() {
            localStorage.setItem('workoutGeneration', JSON.stringify({
                month: this.monthKey,
                count: this.monthlyCount
            }))
        },
        async generateWorkout() {
            if (!this.hf) {
                this.error = "Veuillez configurer votre clé API d'abord"
                return
            }

            if (this.monthlyCount >= 30) {
                this.error = "Limite mensuelle de générations atteinte"
                return
            }

            this.loading = true
            this.error = null

            const prompt = `En tant qu'entraîneur de badminton national, génère un programme d'entraînement structuré avec les paramètres suivants:
    
    Informations générales:
    - Durée totale: ${this.duration} minutes
    - Type d'entraînement: ${this.focusArea}
    - Niveau: National
    
    Structure requise:
    1. Échauffement (15 minutes):
       - Échauffement articulaire
       - Déplacements spécifiques
       - Shadow boxing progressive
    
    2. Corps de séance (${this.duration - 20} minutes):
       Inclure 3 exercices parmi les types suivants:
    
       A. Routine technique:
       - Exemple: "6 coins" - 1 dégagé fond / 1 amorti / 1 lob / 1 smash / 1 contre-amorti
       - Préciser: nombre de séries, durée, intensité
    
       B. Multi-volants:
       - Exemple: "20 volants d'attaque" - alternance smash/amorti, zones ciblées
       - Préciser: nombre de volants, récupération, nombre de séries
    
       C. Matchs à thème:
       - Exemple: "Match 30 points" - perte de 5 points si volant au sol
       - Préciser: règles spéciales, objectifs techniques
    
    3. Retour au calme (5 minutes):
       - Étirements
       - Débriefing
    
    Pour chaque exercice, détailler:
    - Durée exacte
    - Nombre de répétitions/séries
    - Temps de récupération
    - Points techniques à surveiller
    - Objectifs spécifiques`

            try {
                const response = await this.hf.textGeneration({
                    model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
                    inputs: prompt,
                    parameters: {
                        max_new_tokens: 500,
                        temperature: 0.7
                    }
                })
                
                const responseText = response.generated_text
                this.workout = responseText.substring(responseText.indexOf('Programme d\'entraînement:'))
                
                if (!this.workout) {
                    this.workout = responseText.substring(prompt.length).trim()
                }

                // Incrémenter le compteur après une génération réussie
                this.monthlyCount++
                this.saveMonthlyCount()
            } catch (err) {
                this.error = "Erreur lors de la génération de l'entraînement."
                console.error(err)
            } finally {
                this.loading = false
            }
        }
    }
}
</script>