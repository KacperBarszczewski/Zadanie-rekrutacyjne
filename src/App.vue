<script setup lang="ts">
import Nav from './components/nav.vue'
import Background from './components/background.vue';
import Container from './components/container.vue'
import HeadersBlok from './components/headersBlok.vue';

</script>

<template>
  <div>
    <Background>
      <div>
        <Nav />
        <Container />
      </div>
    </Background>
    <HeadersBlok/>
  </div>
</template>