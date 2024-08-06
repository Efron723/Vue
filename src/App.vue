<script setup>
import HelloWorld from './components/HelloWorld.vue'
import MyButton from './components/myButton.vue'
import MyNote from './components/myNote.vue';
import Register from './components/register.vue';
import Test from './components/test.vue';
import ChangeDivColor from './components/ChangeDivColor.vue';
import Pinia from './components/pinia.vue';
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <MyButton/> -->
  <!-- <MyNote /> -->
  <!-- <Register /> -->
  <!-- <Test /> -->
  <!-- <ChangeDivColor /> -->
  <Pinia />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
