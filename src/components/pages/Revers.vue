<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4">Le Revers</h1>
    <VideoPlayer v-for="(video, index) in videos" :key="index" :title="video.title" :videoSrc="video.videoSrc"
      :author="video.author" :source="video.source" />

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
          title: "Améliorer son amortie au fond de court",
          videoSrc: "/videos/revers/backhand_close.mp4",
          author: "birdie_badminton",
          source: ""
        },
        {
          title: "Qaund prendre son revers",
          videoSrc: "/videos/revers/when_take_backhand.mp4",
          author: "birdie_badminton",
          source: ""
        },

      ]
    };
  }
};
</script>