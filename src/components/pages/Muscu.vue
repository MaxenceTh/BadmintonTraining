<template>


  <TemplatePage
    title="Exercices de Musculation"
    description="Renforcez votre condition physique avec des exercices spécifiques pour le badminton"
    :videos="videos"
    />
</template>

<script setup>
import TemplatePage from '../TemplatePage.vue';


const videos = [
  {
    title: "Fentes Bulgares",
    videoSrc: `${import.meta.env.BASE_URL}videos/gym/gymExercice1.mp4`,
    author: "birdie_badminton",
    source: "",
    description: "Renforcez vos jambes avec cet exercice efficace"
  },
  {
    title: "Rotation de la Hanche",
    videoSrc: `${import.meta.env.BASE_URL}videos/gym/hips_rotation_exercise.mp4`,
    author: "birdie_badminton",
    source: "",
    description: "Améliorez votre mobilité et votre stabilité"
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