<template>
  <h1>Pinia狀態管理</h1>
  <div class="container">
    <input type="text" v-model="newTodoText" placeholder="輸入待辦事項">
    <button @click="addTodo">新增待辦事項</button>
    <ul class="list">
      <li class="item" v-for="item in list.todos" :key="item.id">{{ item.text }}</li>
    </ul>
    <p>已完成購買</p>
    <ul class="list">
      <li v-for="finish_item in list.finishedTodos" :key="finish_item.id">{{ finish_item.text }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { listStore } from '../stores/list'

const list = listStore();
const newTodoText = ref("");

function addTodo() {
  if (newTodoText.value.trim()) {
    list.addTodo(newTodoText.value.trim());
    newTodoText.value = "";
  }
}
</script>

<style scoped>
input {
  background-color: white;
  color: black;
  width: 100%;
}

button {
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;
  color: black;
  border: 2px solid salmon;
  transition: all 0.3s ease;
}

button:hover {
  background-color: tomato;
  color: white;
}

li {
  list-style-type: s;
}
</style>
