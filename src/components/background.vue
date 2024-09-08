<script setup lang="ts">

</script>

<template>

    <div class=" w-screen h-screen relative overflow-hidden">

        <img alt="" aria-hidden="true" src="../../public/linie.png"
            class="w-[46.4%] h-[73.2%] absolute top-0 right-16" />
        <img alt="" aria-hidden="true" src="../../public/cars.png" class="w-[74%] absolute bottom-20 right-0" />
        <img alt="" aria-hidden="true" src="../../public/cień.png" class="w-[74%] absolute bottom-20 right-0" />

        <div class="absolute top-0 left-0">
            <slot></slot>
        </div>

    </div>


</template>
