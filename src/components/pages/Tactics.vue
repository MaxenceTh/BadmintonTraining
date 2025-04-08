<template>
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-4">Tips tactiques</h1>
      <VideoPlayer 
        v-for="(video, index) in videos" 
        :key="index"
        :title="video.title"
        :videoSrc="video.videoSrc"
        :author="video.author"
        :source="video.source"
      />
      
    </div>
  </template>
  
  <script>
 import VideoPlayer from '../VideoPlayer.vue';
  
 export default {
  components: { VideoPlayer },
  data() {
    return {
      videos: [
        {
          title: "Tactiques",
          videoSrc: `${import.meta.env.BASE_URL}videos/tactique/match_tactics.mp4`,
          author: "rupeshp_bad",
          source: ""
        },
       
      ]
    };
  }
};
  </script>
  