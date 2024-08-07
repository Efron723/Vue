<script setup></script>

<template>
  <div class="mt-5">
    <input type="text" class="form-control first" placeholder="標題" />
    <textarea type="text" class="form-control second" placeholder="內文"></textarea>
  </div>
  <div class="text-end">
    <button type="button" class="btn btn-outline-success mt-5 ">
      <div class="d-inline">更新</div><i class="fa-solid fa-floppy-disk ms-2"></i>
    </button>
  </div>
</template>

<style scoped>
.first {
  margin-bottom: 50px;
  height: 50px;
}

.second {
  height: 420px;
  resize: none;
}

button {
  padding: 10px 20px;
  font-size: 22px;
  font-weight: bolder;
}
</style>