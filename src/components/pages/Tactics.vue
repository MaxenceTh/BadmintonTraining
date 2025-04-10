<template>
 

  <TemplatePage
    title="Tactiques de Match"
    description="Découvrez les stratégies et tactiques essentielles pour améliorer votre jeu"
    :videos="videos"
  />

</template>

<script setup>
import TemplatePage from '../TemplatePage.vue';

const videos = [
  {
    title: "Tactiques de Match",
    videoSrc: `${import.meta.env.BASE_URL}videos/tactique/match_tactics.mp4`,
    author: "rupeshp_bad",
    source: "",
    description: "Stratégies essentielles pour dominer vos matchs"
  }
];
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