<script setup lang="ts">
import Nav from './components/nav.vue'
import Background from './components/background.vue';
import Container from './components/container.vue'

</script>

<template>
  <div>
    <Background>
      <div>
        <Nav />
        <Container />
      </div>
    </Background>
    
  </div>
</template>