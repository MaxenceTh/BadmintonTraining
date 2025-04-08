<template>
    <nav class="bg-gray-800 p-4 relative z-50">
        <div class="flex items-center justify-between">
            <router-link to="/">
                <h1 class="text-white text-xl font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </h1>
            </router-link>

            <!-- Burger button -->
            <button @click="menuOpen = !menuOpen" class="text-white md:hidden">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- Menu desktop -->
            <ul class="hidden md:flex space-x-4 text-white">
                <li class="py-2"><router-link to="/revers">Revers</router-link></li>
                <li class="py-2"><router-link to="/coup-droit">Coup Droit</router-link></li>
                <li class="py-2"><router-link to="/service&retour">Service&Retour</router-link></li>
                <li class="py-2"><router-link to="/filet">Filet</router-link></li>
                <li class="py-2"><router-link to="/footwork">Footwork</router-link></li>
                <li class="py-2"><router-link to="/tactique">Tactique</router-link></li>
                <li class="py-2"><router-link to="/musculation">Musculation</router-link></li>
                <li class="py-2 px-2 bg-indigo-600 text-white rounded-lg font-semibold 
               hover:bg-indigo-500 transition-all duration-300 
               shadow-lg hover:shadow-indigo-500/50"><router-link to="/entrainement">Entraînement</router-link></li>
            </ul>
        </div>

        <!-- Menu mobile (full screen slide down) -->
        <transition name="slide-fade">
            <ul v-if="menuOpen"
                class="absolute top-0 left-0 w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 md:hidden">

                <li><router-link @click="closeMenu" to="/revers">Revers</router-link></li>
                <li><router-link @click="closeMenu" to="/coup-droit">Coup Droit</router-link></li>
                <li><router-link @click="closeMenu" to="/service&retour">Service&Retour</router-link></li>
                <li><router-link @click="closeMenu" to="/filet">Filet</router-link></li>
                <li><router-link @click="closeMenu" to="/footwork">Footwork</router-link></li>
                <li><router-link @click="closeMenu" to="/tactique">Tactique</router-link></li>
                <li><router-link @click="closeMenu" to="/musculation">Musculation</router-link></li>
                <li class="py-2 px-2 bg-indigo-600 text-white rounded-lg font-semibold 
               hover:bg-indigo-500 transition-all duration-300 
               shadow-lg hover:shadow-indigo-500/50"><router-link @click="closeMenu" to="/entrainement">Entraînement</router-link></li>


                <button @click="closeMenu"
                    class="mt-12 w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-white text-2xl font-bold leading-none hover:bg-white hover:text-gray-900 transition duration-300"
                    aria-label="Fermer le menu">
                    &times;
                </button>
            </ul>


        </transition>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
const menuOpen = ref(false);
const closeMenu = () => (menuOpen.value = false);
</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease;
}

.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter-from {
    transform: translateY(-100%);
    opacity: 0;
}

.slide-fade-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.slide-fade-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.slide-fade-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style>