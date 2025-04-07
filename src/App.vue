<template>
  <div>
    <Navigation />
    <router-view />

    <div class="flex justify-center items-center h-screen text-center px-4">
  <div class="max-w-xl w-full">
    <h1 class="text-2xl font-semibold mb-4 sm:text-3xl md:text-4xl">Vidéo entraînement de badminton</h1>
    
    <div class="text-lg sm:text-xl">
      <p class="mb-2">Source:</p>
      <div class="space-y-2">
        <a href="https://www.instagram.com/rupeshp_bad/" target="_blank" class="text-blue-500 hover:underline">
          rupeshp_bad
        </a>
        <a href="https://www.instagram.com/birdie_badminton/reels/" target="_blank" class="text-blue-500 hover:underline">
          birdie_badminton
        </a>
      </div>
    </div>
  </div>
</div>



  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
</script>