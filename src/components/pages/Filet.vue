<template>
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-4">Filet</h1>
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
          title: "Deceptive Shoot",
          videoSrc: `${import.meta.env.BASE_URL}videos/filet/deceptive_shoot.mp4`,
          author: "rupeshp_bad",
          source: ""
        },
        {
          title: "Variations coup droit",
          videoSrc: `${import.meta.env.BASE_URL}videos/filet/forehand_straight_drop.mp4`,
          author: "rupeshp_bad",
          source: ""
        },
        {
          title: "Variations revers",
          videoSrc: `${import.meta.env.BASE_URL}videos/filet/forehead_straight_drop.mp4`,
          author: "rupeshp_bad",
          source: ""
        },
        {
          title: "",
          videoSrc: `${import.meta.env.BASE_URL}videos/filet/smooth_deception.mp4`,
          author: "rupeshp_bad",
          source: ""
        }
      ]
    };
  }
};
  </script>
  