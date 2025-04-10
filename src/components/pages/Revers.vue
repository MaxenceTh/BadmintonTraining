<template>
 

  <TemplatePage
    title="Le Revers"
    description="Découvrez les techniques essentielles pour maîtriser votre revers au badminton"
    :videos="videos"
    />
</template>

<script setup>
import TemplatePage from '../TemplatePage.vue';


const videos = [
  {
    title: "Améliorer son amortie au fond de court",
    videoSrc: `${import.meta.env.BASE_URL}/videos/revers/backhand_close.mp4`,
    author: "birdie_badminton",
    source: "",
    description: "Techniques et exercices pour perfectionner vos amorties revers"
  },
  {
    title: "Quand prendre son revers",
    videoSrc: `${import.meta.env.BASE_URL}/videos/revers/when_take_backhand.mp4`,
    author: "birdie_badminton",
    source: "",
    description: "Apprenez à identifier les situations idéales pour utiliser votre revers"
  }
];
</script>

<style scoped>
/* Add a smooth fade-in animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.min-h-screen {
  animation: fadeIn 0.8s ease-out;
}
</style>