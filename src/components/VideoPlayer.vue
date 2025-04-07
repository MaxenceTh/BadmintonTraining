<template>
    <div class="flex flex-col items-center text-center max-w-4xl mx-auto border-b border-black-300 pb-8 mb-8">
        <h2 class="text-2xl font-semibold mb-4">{{ title }}</h2>


        <div class="flex flex-col md:flex-row items-center md:items-start gap-6 w-full justify-center">

            <video controls class="rounded-lg shadow-lg w-80">
                <source :src="videoSrc" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
            </video>

            <p class="text-left text-gray-700 max-w-md">
                Auteur: {{ author }}
                
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        videoSrc: String,
        source: String,
        author: String
    }
};
</script>
