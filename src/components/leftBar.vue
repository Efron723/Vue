<script setup>
import { useNoteStore } from '../stores/noteStore.js'
import { computed } from 'vue';

const noteStore = useNoteStore();
const pinnedNotes = computed(() => noteStore.pinnedNotes);
const allNotes = computed(() => noteStore.allNotes);
</script>

<template>
  <h1 class="title mb-4">
    <i class="fa-solid fa-book-tanakh me-5"></i>重要
  </h1>
  <ul class="list-group">
    <li v-for="note in allNotes" :key="note.id"
      class="noteTitle fs-5 list-group-item py-3 px-4 d-flex justify-content-between">
      <div>
        {{ note.title }}
      </div>
      <div>
        <i class="fa-solid fa-pen-to-square me-4"></i>
        <i class="fa-solid fa-trash-can"></i>
      </div>
    </li>
  </ul>

  <h1 class="title mb-4 mt-4">
    <i class="fa-solid fa-book-tanakh me-5"></i>精選
  </h1>
  <ul class="list-group">
    <li v-for="note in pinnedNotes" :key="note.id"
      class="noteTitle fs-5 list-group-item py-3 px-4 d-flex justify-content-between">
      <div>
        {{ note.title }}
      </div>
      <div>
        <i class="fa-solid fa-pen-to-square me-4"></i>
        <i class="fa-solid fa-trash-can"></i>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.noteTitle {
  font-weight: bolder;
}

.title {
  text-align: center;
  font-weight: bolder;
}

.fa-pen-to-square {
  cursor: pointer;
  transition: all 0.3s ease;
}

.fa-pen-to-square:hover {
  color: steelblue;
}

.fa-trash-can {
  cursor: pointer;
  transition: all 0.3s ease;
}

.fa-trash-can:hover {
  color: red;
}
</style>
