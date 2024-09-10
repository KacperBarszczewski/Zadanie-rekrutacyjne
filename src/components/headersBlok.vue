<script setup lang="ts">
import GalleryBlock from './galleryBlock.vue';
import { ref } from 'vue';

const selectedOption = ref('radio1');

</script>

<template>
    <div>
        <section class="md:p-20 ">
            <h2 class="font-robotoCondensed text-xl sm:text-[21.5px] text-secondary">Prezentacja firmy</h2>
            <h3 class="font-bebasNeue text-4xl sm:text-[40px] pt-2 pb-6">Zobacz naszą Galerię zdjęć</h3>

            <form>
                <fieldset class="flex gap-7">
                    <legend class="sr-only">Wybierz opcję</legend>
                    <div>
                        <input v-model="selectedOption" type="radio" id="radio1" name="radioGroup" value="radio1"
                            class="peer sr-only" />
                        <label for="radio1"
                            class="text-[0.938rem] font-semibold border-secondary peer-checked:text-secondary peer-checked:border-b cursor-pointer">Samochody
                            osobowe
                        </label>
                    </div>

                    <div>
                        <input v-model="selectedOption" type="radio" id="radio2" name="radioGroup" value="radio2"
                            class="peer sr-only" />
                        <label for="radio2"
                            class="text-[0.938rem] font-semibold border-secondary peer-checked:text-secondary peer-checked:border-b cursor-pointer">Samochody
                            dostawcze
                        </label>
                    </div>

                </fieldset>
            </form>
        </section>

        <GalleryBlock v-if="selectedOption === 'radio1'" />
        <GalleryBlock v-else-if="selectedOption === 'radio2'" />

    </div>
</template>