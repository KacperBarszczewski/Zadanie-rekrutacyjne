<script setup lang="ts">
import { ref } from 'vue';

const images = ["/car1.png", "/car2.png", "/car3.png", "/car3.png", "/car3.png"];
const activeIndex = ref(0);

const scrollToImage = (id: string, index: number) => {
    const imageElement = document.getElementById(id);
    if (imageElement) {
        imageElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        activeIndex.value = index;
    }
};

</script>

<template>
    <section id="gallery" class="pb-20">

        <div class="w-screen max-w-full flex overflow-x-hidden snap-x scroll-smooth px-20 ">
            <div v-for="(image, index) in images" :key="index" :id="'car' + index"
                class="snap-center flex-shrink-0 ml-16 first:ml-0">
                <img :src="image" alt="zdjęcie samochodu" class="w-screen sm:w-[37.5rem] sm:h-[27.875rem]" />
            </div>
        </div>

        <div class="flex justify-center gap-2 p-12 h-2">
            <button v-for="(_, index) in images" :key="index" @click="scrollToImage('car' + index, index)"
                :class="['h-2 w-2 rounded-full block hover:h-3 hover:w-3', activeIndex === index ? 'bg-secondary' : 'bg-gray-300']"
                :aria-label="`przycisk do zdjęcia numer ${index}`">
            </button>
        </div>

    </section>
</template>
