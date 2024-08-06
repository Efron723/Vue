<script setup>
import { ref } from 'vue'
const msg = ref('')
const showMsg = () => {
  alert(msg.value)
}
</script>

<template>

  <div id="box"></div>

  <div class="container">
    <div class="buttons">
      <button>Red</button>
      <button>Green</button>
      <button>Yellow</button>
      <button>Tomato</button>
      <button>按滑鼠滾輪變成Orange</button>
      <button>Purple只能變一次</button>
      <button>Pink</button>
      <input type="text" v-model="msg" @keydown.enter="showMsg" />
    </div>
  </div>

</template>

<style scoped>
#box {
  margin-bottom: 20px;
}

button {
  background-color: rgb(194, 240, 242);
  margin-right: 10px;
  color: black;
}
</style>