<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
      <!-- Configuration Panel -->
      <div class="mb-8 space-y-4 bg-gray-700 p-4 rounded-lg" v-if="!isRunning">
        <div class="flex space-x-4">
          <div>
            <label class="block text-white mb-2">Intervalle (ms)</label>
            <input 
              type="number" 
              v-model="interval" 
              class="w-24 px-2 py-1 rounded bg-white"
              min="500"
              step="100"
            >
          </div>
          <div>
            <label class="block text-white mb-2">Afficher opposé</label>
            <input 
              type="checkbox" 
              v-model="showOpposite"
              class="w-5 h-5"
            >
          </div>
        </div>
        <button 
          @click="startTraining" 
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Démarrer
        </button>
      </div>
  
      <!-- Arrow Display -->
      <div v-if="isRunning" class="relative">
        <!-- Timer Display -->
        <div class="absolute -top-16 left-1/2 transform -translate-x-1/2 text-3xl text-white font-mono">
          {{ formatTime(elapsedTime) }}
        </div>
  
        <!-- Arrow -->
        <svg 
          :class="[
            'w-64 h-64 transition-transform duration-200',
            currentColor,
            getRotationClass
          ]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
  
        <!-- Opposite Direction Text -->
        <div 
          v-if="showOpposite" 
          class="mt-8 text-4xl font-bold text-white text-center"
        >
          {{ getOppositeText }}
        </div>
      </div>
  
      <!-- Controls -->
      <div v-if="isRunning" class="mt-8 space-x-4">
        <button 
          @click="togglePause" 
          :class="[
            'px-4 py-2 rounded text-white',
            isPaused ? 'bg-green-500 hover:bg-green-600' : 'bg-yellow-500 hover:bg-yellow-600'
          ]"
        >
          {{ isPaused ? 'Reprendre' : 'Pause' }}
        </button>
        <button 
          @click="stopTraining" 
          class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Arrêter
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onUnmounted } from 'vue';
  
  // State
  const interval = ref(1000);
  const showOpposite = ref(false);
  const isRunning = ref(false);
  const isPaused = ref(false);
  const currentDirection = ref('up');
  const currentColor = ref('text-white');
  const elapsedTime = ref(0);
  let timer = null;
  let elapsedTimer = null;
  
  // Directions and colors
  const directions = ['up', 'up-right', 'right', 'down-right', 'down', 'down-left', 'left', 'up-left'];
  const colors = ['text-white', 'text-blue-400', 'text-green-400', 'text-yellow-400', 'text-red-400', 'text-purple-400'];
  
  // Format time to MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  // Computed
  const getRotationClass = computed(() => {
    const rotations = {
      'up': 'rotate-0',
      'up-right': 'rotate-45',
      'right': 'rotate-90',
      'down-right': 'rotate-135',
      'down': 'rotate-180',
      'down-left': '-rotate-135',
      'left': '-rotate-90',
      'up-left': '-rotate-45'
    };
    return rotations[currentDirection.value];
  });
  
  const getOppositeText = computed(() => {
    const opposites = {
      'up': 'BAS',
      'up-right': 'BAS-GAUCHE',
      'right': 'GAUCHE',
      'down-right': 'HAUT-GAUCHE',
      'down': 'HAUT',
      'down-left': 'HAUT-DROITE',
      'left': 'DROITE',
      'up-left': 'BAS-DROITE'
    };
    return opposites[currentDirection.value];
  });
  
  // Methods
  const updateDirection = () => {
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    currentDirection.value = randomDirection;
    currentColor.value = randomColor;
  };
  
  const startTraining = () => {
    isRunning.value = true;
    isPaused.value = false;
    elapsedTime.value = 0;
    updateDirection();
    timer = setInterval(updateDirection, interval.value);
    elapsedTimer = setInterval(() => {
      if (!isPaused.value) {
        elapsedTime.value++;
      }
    }, 1000);
  };
  
  const togglePause = () => {
    isPaused.value = !isPaused.value;
    if (isPaused.value) {
      clearInterval(timer);
      timer = null;
    } else {
      timer = setInterval(updateDirection, interval.value);
    }
  };
  
  const stopTraining = () => {
    clearInterval(timer);
    clearInterval(elapsedTimer);
    timer = null;
    elapsedTimer = null;
    isRunning.value = false;
    isPaused.value = false;
    elapsedTime.value = 0;
  };
  
  // Cleanup
  onUnmounted(() => {
    if (timer) clearInterval(timer);
    if (elapsedTimer) clearInterval(elapsedTimer);
  });
  </script>
  
  <style scoped>
  /* Smooth transitions */
  .transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  </style>