<script setup>
import { ref, onBeforeMount, onMounted } from 'vue';
const text = ref('Click Me')

function handleClick() {
  alert('Hello, world!')
}

onBeforeMount(() => {
  alert('啟動 mounted')
})

onMounted(() => {
  console.log('已經載入元件');
})
</script>

<template>
  <button id="show" @click="handleClick">{{ text }}</button>
</template>

<style scoped>
#show {
  border: 1px solid tomato;
  transition: all 1s ease;
}

#show:hover {
  background-color: salmon;
}
</style>
