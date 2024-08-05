<script setup>
import { ref, onUpdated, onUnmounted } from 'vue';
const note = ref('My Note')
const textStyle = ref({ color: 'tomato', fontSize: '26px', fontWeight: 'bolder' })
onUpdated(() => {
  updateLocalStorage()
  console.log('資料已更新');
})

onUnmounted(() => {
  updateLocalStorage()
  console.log('onUnmounted');
})

const updateLocalStorage = () => {
  localStorage.setItem('note', note.value)
}
</script>

<template>
  <h1>我的Note</h1>
  <input v-model="note" type="text" placeholder="請輸入筆記內容" />
  <p v-bind:style="textStyle">
    我的筆記: {{ note }}
  </p>
</template>

<style scoped></style>