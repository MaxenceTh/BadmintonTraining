<template>
    <div class="min-h-screen bg-white p-8">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 mb-4">
          {{ title }}
        </h1>
        <p class="text-gray-400 max-w-2xl mx-auto">
          {{ description }}
        </p>
      </div>
  
      <!-- Videos Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <VideoPlayer 
          v-for="(video, index) in videos" 
          :key="index" 
          :title="video.title" 
          :videoSrc="video.videoSrc"
          :author="video.author" 
          :source="video.source"
          class="transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import VideoPlayer from './VideoPlayer.vue';
  
  defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    videos: {
      type: Array,
      required: true
    }
  });
  </script>
  
  <style scoped>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .min-h-screen {
    animation: fadeIn 0.8s ease-out;
  }
  </style>