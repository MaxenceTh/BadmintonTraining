<template>
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-4">Le Coup Droit</h1>
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
          title: "Smash avec saut en ciseaux",
          videoSrc: require("@/videos/coupdroit/forehead_scissor_jump.mp4"),
          author: "rupeshp_bad",
          source: ""
        },
        {
          title: "Coup droit en retard",
          videoSrc: "/videos/coupdroit/late_forehead_cross_clear.mp4",
          author: "rupeshp_bad",
          source: ""
        },
        {
          title: "Puissance dans le smash",
          videoSrc: "/videos/coupdroit/power_smash.mp4",
          author: "rupeshp_bad",
          source: ""
        },
        {
          title: "Précision dans le smash",
          videoSrc: "/videos/coupdroit/smash_accuracy.mp4",
          author: "rupeshp_bad",
          source: ""
        }
      ]
    };
  }
};
  </script>
  