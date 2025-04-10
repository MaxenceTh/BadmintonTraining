<template>
    <nav class="bg-gradient-to-r from-gray-900 to-gray-800 p-4 relative z-50 shadow-lg border-b border-gray-700">
        <div class="container mx-auto flex items-center justify-between px-4">
            <!-- Logo and Title -->
            <router-link to="/" class="group">
                <h1 class="text-white text-xl font-bold flex items-center space-x-3 transition-transform duration-300 transform group-hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                        class="w-8 h-8 text-indigo-400">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span class="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                        BadmintonTraining
                    </span>
                </h1>
            </router-link>

            <!-- Burger Menu Button -->
            <button @click="menuOpen = !menuOpen" 
                class="md:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- Desktop Menu -->
            <ul class="hidden md:flex items-center space-x-6 text-gray-300">
                <li v-for="(item, index) in menuItems" :key="index">
                    <router-link :to="item.path" 
                        class="px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 transition-all duration-200">
                        {{ item.name }}
                    </router-link>
                </li>
                <li>
                    <router-link to="/entrainement" 
                        class="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg 
                               font-semibold transition-all duration-300 hover:from-indigo-500 hover:to-indigo-400 
                               shadow-lg hover:shadow-indigo-500/50 transform hover:scale-105">
                        Entraînement
                    </router-link>
                </li>
            </ul>
        </div>

        <!-- Mobile Menu -->
        <transition name="slide-fade">
            <div v-if="menuOpen"
                class="fixed inset-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center z-50">
                <ul class="flex flex-col items-center space-y-8">
                    <li v-for="(item, index) in menuItems" :key="index">
                        <router-link @click="closeMenu" :to="item.path"
                            class="text-gray-300 text-xl hover:text-white transition-colors duration-200">
                            {{ item.name }}
                        </router-link>
                    </li>
                    <li>
                        <router-link @click="closeMenu" to="/entrainement"
                            class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white 
                                   rounded-lg font-semibold text-xl shadow-lg hover:shadow-indigo-500/50 
                                   transition-all duration-300 hover:from-indigo-500 hover:to-indigo-400">
                            Entraînement
                        </router-link>
                    </li>
                </ul>

                <button @click="closeMenu"
                    class="mt-12 w-12 h-12 flex items-center justify-center rounded-full border-2 
                           border-white/80 text-white text-2xl hover:bg-white hover:text-gray-900 
                           transition-all duration-300 transform hover:rotate-90 focus:outline-none">
                    &times;
                </button>
            </div>
        </transition>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);
const closeMenu = () => (menuOpen.value = false);

const menuItems = [
    { name: 'Revers', path: '/revers' },
    { name: 'Coup Droit', path: '/coup-droit' },
    { name: 'Service&Retour', path: '/service&retour' },
    { name: 'Filet', path: '/filet' },
    { name: 'Footwork', path: '/footwork' },
    { name: 'Tactique', path: '/tactique' },
    { name: 'Musculation', path: '/musculation' },
];
</script>

<style scoped>


.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
    opacity: 1;
    transform: scale(1);
}
</style>