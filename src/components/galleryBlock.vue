<script setup lang="ts">
import { ref } from 'vue';

const images = ["/car1.png", "/car2.png", "/car3.png", "/car3.png", "/car3.png"];
const activeIndex = ref(0);

const scrollToImage = (id: string, index: number) => {
    const imageElement = document.getElementById(id);
    if (imageElement) {
        imageElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        activeIndex.value = index;
    }
};

</script>

<template>
    <section class="pb-20">

        <div class="w-screen flex overflow-x-hidden snap-x scroll-smooth px-20 ">
            <div v-for="(image, index) in images" :key="index" :id="'car' + index"
                class="snap-center flex-shrink-0 ml-16 first:ml-0">
                <img :src="image" class="h-[27.875rem] w-[37.5rem]" />
            </div>
        </div>

        <div class="flex justify-center gap-2 p-12 ">
            <button v-for="(, index) in images" :key="index" @click="scrollToImage('car' + index, index)"
                :class="['h-2 w-2 rounded-full block', activeIndex === index ? 'bg-secondary' : 'bg-gray-300']">
            </button>
        </div>

    </section>
</template>
