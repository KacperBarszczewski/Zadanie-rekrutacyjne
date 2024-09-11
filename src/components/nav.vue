<script setup lang="ts">

const scrollTo = (id: string) => {
    const Element = document.getElementById(id);
    if (Element) {
        Element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
};

</script>

<template>
    <header class="flex justify-center py-4 w-screen">
        <nav class="flex justify-between items-center w-5/6 flex-col sm:flex-row gap-2">
            <img src="../../public/logo.png" alt="Logo CarsSpot" />
            <div class="flex gap-6">
                <a href="#" @click="scrollTo('gallery')">Galeria zdjęć</a>
                <a href="#" @click="scrollTo('SEO')">FaQ</a>
            </div>
            <button class="bg-secondary hover:bg-opacity-70 text-font-white font-semibold text-[0.938rem] py-3 px-6 rounded-lg w-full sm:w-auto">Zadzwoń do nas</button>
        </nav>
    </header>

</template>