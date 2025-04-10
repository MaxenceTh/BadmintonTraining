<template>
  

  <TemplatePage 
    title="Service et Retour"
    description="Maîtrisez les techniques de service et améliorez vos retours"
    :videos="videos"
  />

</template>

<script setup>
import TemplatePage from '../TemplatePage.vue';


const videos = [
  {
    title: "Service Lobé",
    videoSrc: `${import.meta.env.BASE_URL}videos/service/flick_servce.mp4`,
    author: "rupeshp_bad",
    source: "",
    description: "Maîtrisez la technique du service lobé"
  },
  {
    title: "Retour de Service",
    videoSrc: `${import.meta.env.BASE_URL}videos/service/service_receive.mp4`,
    author: "rupeshp_bad",
    source: "",
    description: "Les fondamentaux du retour de service"
  },
  {
    title: "Retour de Service",
    videoSrc: `${import.meta.env.BASE_URL}videos/service/service_receive2.mp4`,
    author: "rupeshp_bad",
    source: "",
    description: "Techniques avancées pour améliorer vos retours"
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