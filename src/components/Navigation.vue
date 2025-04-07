<template>
    <nav class="bg-gray-800 p-4 relative z-50">
        <div class="flex items-center justify-between">
            <h1 class="text-white text-xl font-bold">Entraînement</h1>

            <!-- Burger button -->
            <button @click="menuOpen = !menuOpen" class="text-white md:hidden">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- Menu desktop -->
            <ul class="hidden md:flex space-x-4 text-white">
                <li><router-link to="/revers">Revers</router-link></li>
                <li><router-link to="/coup-droit">Coup Droit</router-link></li>
                <li><router-link to="/service&retour">Service&Retour</router-link></li>
                <li><router-link to="/filet">Filet</router-link></li>
                <li><router-link to="/footwork">Footwork</router-link></li>
                <li><router-link to="/tactique">Tactique</router-link></li>
                <li><router-link to="/musculation">Musculation</router-link></li>
            </ul>
        </div>

        <!-- Menu mobile (full screen slide down) -->
        <transition name="slide-fade">
            <ul v-if="menuOpen"
                class="absolute top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 md:hidden">

                <li><router-link @click="closeMenu" to="/revers">Revers</router-link></li>
                <li><router-link @click="closeMenu" to="/coup-droit">Coup Droit</router-link></li>
                <li><router-link @click="closeMenu" to="/service&retour">Service&Retour</router-link></li>
                <li><router-link @click="closeMenu" to="/filet">Filet</router-link></li>
                <li><router-link @click="closeMenu" to="/footwork">Footwork</router-link></li>
                <li><router-link @click="closeMenu" to="/tactique">Tactique</router-link></li>
                <li><router-link @click="closeMenu" to="/musculation">Musculation</router-link></li>


                <button @click="closeMenu"
                    class="mt-12 w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-white text-2xl font-bold leading-none hover:bg-white hover:text-gray-900 transition duration-300"
                    aria-label="Fermer le menu">
                    &times;
                </button>
            </ul>


        </transition>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
const menuOpen = ref(false);
const closeMenu = () => (menuOpen.value = false);
</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease;
}

.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter-from {
    transform: translateY(-100%);
    opacity: 0;
}

.slide-fade-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.slide-fade-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.slide-fade-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style>