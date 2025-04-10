<template>

  <TemplatePage :videos="videos" title="Le Coup Droit"
    description="Perfectionnez votre technique de coup droit et améliorez votre puissance de frappe" />

</template>

<script setup>
import TemplatePage from '../TemplatePage.vue';


const videos = [
  {
    title: "Smash avec saut en ciseaux",
    videoSrc: `${import.meta.env.BASE_URL}videos/coupdroit/forehead_scissor_jump.mp4`,
    author: "rupeshp_bad",
    source: "",
    description: "Maîtrisez la technique du smash avec saut en ciseaux"
  },
  {
    title: "Coup droit en retard",
    videoSrc: `${import.meta.env.BASE_URL}videos/coupdroit/late_forehead_cross_clear.mp4`,
    author: "rupeshp_bad",
    source: "",
    description: "Techniques pour gérer les situations de retard"
  },
  {
    title: "Puissance dans le smash",
    videoSrc: `${import.meta.env.BASE_URL}videos/coupdroit/power_smash.mp4`,
    author: "rupeshp_bad",
    source: "",
    description: "Développez la puissance de vos smashs"
  },
  {
    title: "Précision dans le smash",
    videoSrc: `${import.meta.env.BASE_URL}videos/coupdroit/smash_accuracy.mp4`,
    author: "rupeshp_bad",
    source: "",
    description: "Améliorez la précision de vos smashs"
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