<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-white mb-8 text-center">Zone d'Entraînement</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Timer Block -->
        <router-link to="/timer" 
          class="block bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300">
          <div class="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 class="text-xl font-semibold text-white ml-3">Timer d'Entraînement</h2>
          </div>
          <p class="text-gray-400">
            Configurez vos intervalles d'entraînement avec des temps de travail et de repos personnalisés.
          </p>
        </router-link>
  
        <!-- Workout Block -->
        <router-link to="/shadow"  class="block bg-gray-800 rounded-lg p-6">
          <div class="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <h2 class="text-xl font-semibold text-white ml-3">Shadow</h2>
          </div>
          <p class="text-gray-400">
            Entraînement shadow avec direction aléatoire.
          </p>
        </router-link>
  
       
      </div>
    </div>
  </template>
