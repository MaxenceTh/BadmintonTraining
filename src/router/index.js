import { createRouter, createWebHistory } from 'vue-router';
import Revers from '../components/pages/Revers.vue';
import CoupDroit from '../components/pages/CoupDroit.vue';
import Footwork from '../components/pages/Footwork.vue';
import Service from '../components/pages/Service&Return.vue';
import Tactics from '../components/pages/Tactics.vue';
import Filet from '../components/pages/Filet.vue';
import Muscu from '../components/pages/Muscu.vue';

const routes = [
  { path: '/revers', component: Revers },
  { path: '/coup-droit', component: CoupDroit },
  { path: '/filet', component: Filet },
  { path: '/footwork', component: Footwork },
  { path: '/service&retour', component: Service },
  { path: '/tactique', component: Tactics },
  { path: '/musculation', component: Muscu },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
