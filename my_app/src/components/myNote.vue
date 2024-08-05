<script setup>
import { ref, onUpdated, onUnmounted } from 'vue';
const note = ref('')
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
  <p :style="textStyle">
    我的筆記: {{ note }}
  </p>
  <p :class=note>
    {{ 50 * 10 }}
  </p>
</template>

<style scoped>
.font50 {
  color: aquamarine;
  font-size: 50px;
}

.font40 {
  color: lightpink;
  font-size: 40px;
}
</style>