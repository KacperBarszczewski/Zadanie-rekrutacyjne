<script setup lang="ts">

</script>

<template>

    <section class="md:p-20 ">
        <h2 class="font-robotoCondensed text-xl sm:text-[21.5px] text-secondary">Prezentacja firmy</h2>
        <h3 class="font-bebasNeue text-4xl sm:text-[40px] pt-2 pb-6">Zobacz naszą Galerię zdjęć</h3>

        <form>
            <fieldset class="flex gap-7">
                <legend class="sr-only">Wybierz opcję</legend>
                <div>
                    <input type="radio" id="radio1" name="radioGroup" value="radio1" class="peer sr-only" checked />
                    <label for="radio1"
                        class="text-[0.938rem] font-semibold border-secondary peer-checked:text-secondary peer-checked:border-b">Samochody
                        osobowe</label>
                </div>

                <div>
                    <input type="radio" id="radio2" name="radioGroup" value="radio2" class="peer sr-only" />
                    <label for="radio2"
                        class="text-[0.938rem] font-semibold border-secondary peer-checked:text-secondary peer-checked:border-b">Samochody
                        dostawcze</label>
                </div>

            </fieldset>
        </form>

    </section>

</template>