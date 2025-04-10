<template>

  <TemplatePage
    title="Déplacements et Footwork"
    description="Améliorez votre rapidité et votre agilité sur le terrain avec ces exercices de déplacement"
    :videos="videos"
  />

</template>

<script setup>
import TemplatePage from '../TemplatePage.vue';


const videos = [
  {
    title: "Déplacement après un smash",
    videoSrc: `${import.meta.env.BASE_URL}videos/footwork/fast_after_a_smash.mp4`,
    author: "birdie_badminton",
    source: "",
    description: "Optimisez votre repositionnement après un smash"
  },
  {
    title: "Exercices de Footwork",
    videoSrc: `${import.meta.env.BASE_URL}videos/footwork/footwork1.mp4`,
    author: "rupeshp_bad",
    source: "",
    description: "Techniques fondamentales de déplacement"
  },
  {
    title: "Exercices de Footwork",
    videoSrc: `${import.meta.env.BASE_URL}videos/footwork/footwork2.mp4`,
    author: "rupeshp_bad",
    source: "",
    description: "Techniques avancées pour améliorer votre mobilité"
  },
  {
    title: "Exercice en shadow",
    videoSrc: `${import.meta.env.BASE_URL}videos/footwork/shadow_training.mp4`,
    author: "rupeshp_bad",
    source: "",
    description: "Entraînement shadow pour perfectionner vos déplacements"
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