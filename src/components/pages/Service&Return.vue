<template>
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-4">Le service et retour de service</h1>
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
          title: "Service lobé",
          videoSrc: "/videos/service/flick_servce.mp4",
          author: "rupeshp_bad",
          source: ""
        },
        {
          title: "Service retour",
          videoSrc: "/videos/service/service_receive.mp4",
          author: "rupeshp_bad",
          source: ""
        },
        {
          title: "Service retour",
          videoSrc: "/videos/service/service_receive2.mp4",
          author: "rupeshp_bad",
          source: ""
        }
      ]
    };
  }
};
  </script>
  