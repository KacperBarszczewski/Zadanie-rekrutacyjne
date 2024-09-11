<script setup lang="ts">

</script>

<template>

    <div class=" w-full h-screen relative">

        <img alt="linie" aria-hidden="true" src="../../public/linie.png"
            class="w-[46.4vw] h-[73.2vh] absolute top-0 right-16" />
        <img alt="samochody" aria-hidden="true" src="../../public/cars.png"
            class="w-[74vw] absolute bottom-20 right-0" />
        <img alt="cień samochodów" aria-hidden="true" src="../../public/cień.png"
            class="w-[74vw] absolute bottom-20 right-0" />

        <div class="absolute top-0 left-0">
            <slot></slot>
        </div>

    </div>


</template>
