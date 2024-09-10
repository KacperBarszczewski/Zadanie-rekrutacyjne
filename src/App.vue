<script setup lang="ts">
import Nav from './components/nav.vue'
import Background from './components/background.vue';
import Container from './components/container.vue'
import HeadersBlok from './components/headersBlok.vue';
import SEO from './components/SEO.vue';

</script>

<template>
  <div class="max-w-screen overflow-hidden">
    <Background>
      <div>
        <Nav />
        <Container />
      </div>
    </Background>
    <HeadersBlok />
    <SEO />
  </div>
</template>