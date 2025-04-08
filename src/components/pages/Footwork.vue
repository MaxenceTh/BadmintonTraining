<template>
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-4">Déplacement et vitesse de pied</h1>
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
          title: "Déplacement après un smash",
          videoSrc: `${import.meta.env.BASE_URL}videos/footwork/fast_after_a_smash.mp4`,
          author: "birdie_badminton",
          source: ""
        },
        {
          title: "Footwork",
          videoSrc: `${import.meta.env.BASE_URL}videos/footwork/footwork1.mp4`,
          author: "rupeshp_bad",
          source: ""
        },
        {
          title: "Footwork",
          videoSrc: `${import.meta.env.BASE_URL}videos/footwork/footwork2.mp4`,
          author: "rupeshp_bad",
          source: ""
        },
        {
          title: "Exercice en shadow",
          videoSrc: `${import.meta.env.BASE_URL}videos/footwork/shadow_training.mp4`,
          author: "rupeshp_bad",
          source: ""
        }
      ]
    };
  }
};
  </script>
  