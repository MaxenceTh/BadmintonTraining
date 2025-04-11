import { createRouter, createWebHistory } from 'vue-router';
import Revers from '../components/pages/Revers.vue';
import CoupDroit from '../components/pages/CoupDroit.vue';
import Footwork from '../components/pages/Footwork.vue';
import Service from '../components/pages/Service&Return.vue';
import Tactics from '../components/pages/Tactics.vue';
import Filet from '../components/pages/Filet.vue';
import Muscu from '../components/pages/Muscu.vue';
import Accueil from '../components/Accueil.vue';
import Timer from '../components/Entrainement/Timer.vue';
import Entrainement from '../components/pages/Entrainement.vue';
import Shadow from '../components/Entrainement/Shadow.vue';
import GptTraining from '../components/Entrainement/GptTraining.vue';

const routes = [
  { path : '/', component: Accueil },
  { path: '/revers', component: Revers },
  { path: '/coup-droit', component: CoupDroit },
  { path: '/filet', component: Filet },
  { path: '/footwork', component: Footwork },
  { path: '/service&retour', component: Service },
  { path: '/tactique', component: Tactics },
  { path: '/musculation', component: Muscu },
  { path: '/timer', component: Timer },
  { path: '/entrainement', component: Entrainement },
  { path: '/shadow', component: Shadow },
  { path: '/gpt-training', component: GptTraining },
];

const router = createRouter({
  history: createWebHistory('/BadmintonTraining/'), // Base URL for the application
  routes
});

export default router;
