<script setup>
import { useNoteStore } from '../stores/noteStore.js'
import { computed } from 'vue';

const noteStore = useNoteStore();
const pinnedNotes = computed(() => noteStore.pinnedNotes);
</script>

<template>

  <div class="container py-5">

    <div class="row">
      <div class="col-xl-3 col-md-6 mb-4 notecard" v-for="note in pinnedNotes" :key="note.id">
        <div class="lc-block">
          <div class="lc-block p-4">
            <div editable="rich">
              <h2>{{ note.title }}</h2>
              <p>{{ note.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>

</template>

<style scoped>
.notecard {
  transition: all 0.3s ease;
  border: 2px solid gray;
  border-radius: 10px;
  margin-right: 30px;
  cursor: pointer;
}

.notecard:hover {
  box-shadow: 0 5px 10px gray;
  transform: scale(1.01);
  background-color: rgba(250, 128, 114, 0.288);
}
</style>