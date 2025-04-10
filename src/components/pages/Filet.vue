<template>

  <TemplatePage :videos="videos" title="Techniques au Filet"
    description="Maîtrisez les coups au filet et améliorez votre jeu proche du filet" />
</template>

<script setup>
import TemplatePage from '../TemplatePage.vue';


const videos = [
  {
    title: "Tir Déceptif",
    videoSrc: `${import.meta.env.BASE_URL}videos/filet/deceptive_shoot.mp4`,
    author: "rupeshp_bad",
    source: "",
    description: "Apprenez à masquer vos intentions au filet"
  },
  {
    title: "Variations Coup Droit",
    videoSrc: `${import.meta.env.BASE_URL}videos/filet/forehand_straight_drop.mp4`,
    author: "rupeshp_bad",
    source: "",
    description: "Différentes techniques de coup droit au filet"
  },
  {
    title: "Variations Revers",
    videoSrc: `${import.meta.env.BASE_URL}videos/filet/forehead_straight_drop.mp4`,
    author: "rupeshp_bad",
    source: "",
    description: "Maîtrisez les variations de revers au filet"
  },
  {
    title: "Déceptions Fluides",
    videoSrc: `${import.meta.env.BASE_URL}videos/filet/smooth_deception.mp4`,
    author: "rupeshp_bad",
    source: "",
    description: "Techniques avancées de déception au filet"
  }
];
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.min-h-screen {
  animation: fadeIn 0.8s ease-out;
}
</style>