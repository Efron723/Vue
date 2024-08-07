<script setup>
import TopBar from './topBar.vue';
import LeftBar from './leftBar.vue';
import NoteList from './noteList.vue';
import editNote from './editNote.vue';
</script>

<template>
  <TopBar />
  <div class="row m-0 p-0 mt-5 ms-5">
    <div class="col-2 m-0 p-0 mt-5 ms-5 me-5">
      <LeftBar />
    </div>
    <div class="col-8 m-0 p-0 ms-5">
      <!-- <NoteList /> -->
      <editNote />
    </div>
  </div>
</template>

<style scoped></style>