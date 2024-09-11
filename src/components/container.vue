<script setup lang="ts">

const scrollTo = (id: string) => {
    const Element = document.getElementById(id);
    if (Element) {
        Element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
};

</script>

<template>

    <section class="p-6 sm:p-[120px]">

        <h1 class="font-bebasNeue text-5xl md:text-[4.768rem] md:leading-[5.245rem] ">Sprzedajemy samochody<br> z europy
        </h1>
        <p class="font-robotoCondensed pt-8">Kup komfortowy pojazd, aby każda podróż<br> była wyjątkowym przeżyciem.</p>

        <div class="pt-12 flex gap-6 flex-col sm:flex-row items-center">
            <button @click="scrollTo('gallery')"
                class="bg-secondary hover:bg-opacity-70 text-font-white font-semibold text-[15px] py-3 px-6 rounded-lg">
                Zobacz zdjęcia
            </button>
            <button
                class="bg-opacity-90 bg-slate-50 lg:bg-transparent hover:bg-secondary hover:bg-opacity-20 text-secondary font-semibold text-[15px] py-3 px-6 rounded-lg border border-secondary">
                Zadzwoń do nas
            </button>
        </div>

    </section>

</template>