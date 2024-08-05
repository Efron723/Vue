<script setup>
import { ref, onUpdated, onUnmounted, watch } from 'vue';
const note = ref('')
const placeholder = ref('請輸入樣式名稱')
const textStyle = ref({ color: 'tomato', fontSize: '26px', fontWeight: 'bolder' })
const imgStyle = ref({ width: '500px' })
const text = ref('現在文字是原始大小')
const fruits = ['蘋果', '香蕉', '榴槤', '葡萄']

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

const handleClick = (fruit, index) => {
  alert(`你現在選擇的是第 ${index + 1} 個水果 : ${fruit}`)
}

const updateText = () => {
  if (note.value === 'font50') {
    text.value = '現在文字大小是 50px'
  } else if (note.value === 'font40') {
    text.value = '現在文字大小是 40px'
  } else {
    text.value = '現在文字是原始大小'
  }
}

const handleSelectChange = (event) => {
  const selectedFruit = event.target.value
  const index = fruits.indexOf(selectedFruit)
  alert(`你現在選擇的是第 ${index + 1} 個水果 : ${selectedFruit}`)
}

watch(note, updateText)
</script>

<template>
  <h1>我的Note</h1>
  <input v-model="note" type="text" :placeholder="placeholder" />
  <p :style="textStyle">
    我的筆記長度: {{ note.length }}
  </p>
  <img v-show="note.length > 10" :style="imgStyle" src="../assets/animal.jpg" alt="" />
  <p :class='note'>
    {{ 50 * 10 }}
  </p>
  <p>{{ text }}</p>
  <ul>
    <li v-for="(fruit, index) in fruits" :key="index" @click="handleClick(fruit, index)">{{ index + 1 }}. {{ fruit }}
    </li>
  </ul>
  <form action="">
    <select name="fruit" id="fruits" @change="handleSelectChange">
      <option v-for="(fruit, index) in fruits" :key="index" :value="fruit">{{ fruit }}</option>
    </select>
    <br />
    <input type="radio" name="gender" checked /> 男
    <input type="radio" name="gender" /> 女
  </form>
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

ul {
  list-style-type: none;
}

li {
  transition: all 0.3s ease;
  cursor: pointer;
  margin: 15px 0;
}

li:hover {
  font-size: 20px;
  color: tomato;
  font-weight: bolder;
}
</style>