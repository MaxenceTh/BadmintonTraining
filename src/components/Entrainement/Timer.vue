<template>
    <div class="flex flex-col items-center p-4 justify-center bg-gray-700  h-screen text-white">
        <!-- Timer Image -->
        <div class="mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-blue-400 opacity-90" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <!-- Presets -->
        <div v-if="!isRunning" class="mb-4 ">
            <div class="flex space-x-2 ">
                <button v-for="(preset, index) in presets" :key="index" @click="applyPreset(preset)"
                    class="px-3 py-1 bg-blue-500 rounded hover:bg-blue-600 text-sm">
                    {{ preset.name }}
                </button>
            </div>
        </div>

        <!-- Configuration -->
        <div v-if="!isRunning" class="mb-4 space-y-4">
            <div class="flex space-x-4">
                <div>
                    <label class="block text-sm">Temps de travail (s)</label>
                    <input type="number" v-model="workTime" class="w-24 px-2 py-1 text-black bg-white rounded" min="1">
                </div>
                <div>
                    <label class="block text-sm">Temps de repos (s)</label>
                    <input type="number" v-model="restTime" class="w-24 px-2 py-1 text-black bg-white rounded" min="1">
                </div>
                <div>
                    <label class="block text-sm">Nombre de séries</label>
                    <input type="number" v-model="rounds" class="w-24 px-2 py-1 text-black bg-white rounded" min="1">
                </div>
            </div>
        </div>

        <!-- Countdown or Timer Display -->
        <div class="text-6xl font-bold mb-4">
            <template v-if="isCountingDown">
                {{ countDown }}
            </template>
            <template v-else>
                {{ formatTime(currentTime) }}
            </template>
        </div>

        <!-- Status -->
        <div class="text-xl mb-4">
            <template v-if="isCountingDown">
                <span class="text-yellow-500">PRÉPARATION</span>
            </template>
            <template v-else-if="isRunning">
                <span v-if="isWork" class="text-green-500">TRAVAIL</span>
                <span v-else class="text-red-500">REPOS</span>
                <span>- Série {{ currentRound }}/{{ rounds }}</span>
            </template>
        </div>

        <!-- Controls -->
        <div class="space-x-4">
            <button @click="() => { initAudioContext(); startTimer(); }" v-if="!isRunning && !isCountingDown"
                class="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
                Démarrer
            </button>
            <button @click="pauseTimer" v-if="isRunning && !isCountingDown"
                class="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600">
                Pause
            </button>
            <button @click="resetTimer" class="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
                Reset
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';

// Presets
const presets = [
    { name: '30/30', work: 30, rest: 30, rounds: 5 },
    { name: '45/15', work: 45, rest: 15, rounds: 6 },
    { name: '20/10', work: 20, rest: 10, rounds: 8 },
    { name: '40/20', work: 40, rest: 20, rounds: 4 }
];

// State
const workTime = ref(30);
const restTime = ref(30);
const rounds = ref(5);
const currentTime = ref(0);
const currentRound = ref(1);
const isWork = ref(true);
const isRunning = ref(false);
const isCountingDown = ref(false);
const countDown = ref(5);
let interval = null;

// Audio Context
const audioContext = ref(null);

// Initialize Audio Context
const initAudioContext = () => {
    if (!audioContext.value) {
        audioContext.value = new (window.AudioContext || window.webkitAudioContext)();
    }
};

// Create beep sound
const createBeep = (frequency = 800, duration = 200, volume = 0.5) => {
    if (!audioContext.value) return;

    const oscillator = audioContext.value.createOscillator();
    const gainNode = audioContext.value.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.value.destination);

    oscillator.frequency.value = frequency;
    gainNode.gain.value = volume;

    oscillator.start(audioContext.value.currentTime);
    oscillator.stop(audioContext.value.currentTime + duration / 1000);
};

// Audio functions
const playStartBeep = () => createBeep(800, 200, 0.5);  // High pitch
const playEndBeep = () => createBeep(600, 400, 0.5);    // Lower pitch
const playCountBeep = () => createBeep(700, 100, 0.3);  // Short beep

// Apply preset
const applyPreset = (preset) => {
    workTime.value = preset.work;
    restTime.value = preset.rest;
    rounds.value = preset.rounds;
};

// Format time to MM:SS
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

// Initial countdown
const startCountdown = () => {
    isCountingDown.value = true;
    countDown.value = 5;

    const countInterval = setInterval(() => {
        if (countDown.value > 0) {
            playCountBeep();
            countDown.value--;
        } else {
            clearInterval(countInterval);
            isCountingDown.value = false;
            startMainTimer();
        }
    }, 1000);
};

// Timer logic
const startTimer = () => {
    if (!isRunning.value && !isCountingDown.value) {
        startCountdown();
    }
};

const startMainTimer = () => {
    isRunning.value = true;
    currentTime.value = workTime.value;
    isWork.value = true;
    playStartBeep();
    interval = setInterval(updateTimer, 1000);
};

const updateTimer = () => {
    if (currentTime.value > 0) {
        currentTime.value--;
    } else {
        if (isWork.value) {
            playEndBeep();
            isWork.value = false;
            currentTime.value = restTime.value;
        } else {
            if (currentRound.value < rounds.value) {
                playStartBeep();
                currentRound.value++;
                isWork.value = true;
                currentTime.value = workTime.value;
            } else {
                playEndBeep();
                resetTimer();
            }
        }
    }
};

const pauseTimer = () => {
    clearInterval(interval);
    isRunning.value = false;
};

const resetTimer = () => {
    clearInterval(interval);
    isRunning.value = false;
    isCountingDown.value = false;
    currentTime.value = 0;
    currentRound.value = 1;
    isWork.value = true;
};

// Cleanup
onUnmounted(() => {
    clearInterval(interval);
});
</script>