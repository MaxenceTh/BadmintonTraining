<template>
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-4">Exercice de musculation</h1>
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
          title: "fentes bulgare",
          videoSrc: `${import.meta.env.BASE_URL}videos/gym/gymExercice1.mp4`,
          author: "birdie_badminton",
          source: ""
        },
        {
          title: "Rotation de la hanche",
          videoSrc: `${import.meta.env.BASE_URL}videos/gym/hips_rotation_exercise.mp4`,
          author: "birdie_badminton",
          source: ""
        },
       
      ]
    };
  }
};
  </script>
  