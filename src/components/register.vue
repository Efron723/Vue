<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
  birthday: '',
  gender: '',
})

const errors = ref({
  name: false,
  phone: false,
  birthday: false,
  gender: false,
})

const validateForm = () => {
  errors.value.name = !form.value.name;
  errors.value.phone = !form.value.phone;
  errors.value.birthday = !form.value.birthday;
  errors.value.gender = !form.value.gender;

  return !errors.value.name && !errors.value.phone && !errors.value.birthday && !errors.value.gender
}

const handleSubmit = () => {
  if (validateForm()) {
    alert(`姓名: ${form.value.name}\n電話: ${form.value.phone}\n生日: ${form.value.birthday}\n性別: ${form.value.gender}`)
  }
}
</script>

<template>

  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">姓名&nbsp;&nbsp;:&nbsp;&nbsp;</label>
      <input id="name" type="text" name="name" v-model="form.name" :class="{ 'input-error': errors.name }"
        placeholder='請輸入姓名' />
      <p v-if="errors.name" class="error-message">姓名為必填項目</p>
    </div>
    <div>
      <label for="phone">電話&nbsp;&nbsp;:&nbsp;&nbsp;</label>
      <input id="phone" type="text" name="phone" v-model="form.phone" :class="{ 'input-error': errors.phone }"
        placeholder='請輸入電話' />
      <p v-if="errors.phone" class="error-message">電話為必填項目</p>
    </div>
    <div>
      <label for="birthday">生日&nbsp;&nbsp;:&nbsp;&nbsp;</label>
      <input id="birthday" type="date" name="birthday" v-model="form.birthday"
        :class="{ 'input-error': errors.birthday }" />
      <p v-if="errors.birthday" class="error-message">生日為必填項目</p>
    </div>
    <div>
      <label>性別&nbsp;&nbsp;:&nbsp;&nbsp;</label>
      <input id="gender-male" type="radio" value="男" name="gender" v-model="form.gender" />
      <label for="gender-male">男</label>
      <input id="gender-female" type="radio" value="女" name="gender" v-model="form.gender" />
      <label for="gender-female">女</label>
      <p v-if="errors.gender" class="error-message">性別為必填項目</p>
    </div>

    <button type="submit">送出</button>

  </form>

</template>

<style scoped>
.input-error {
  border: 1px solid salmon;
}

.error-message {
  color: salmon;
  font-size: 12px;
  position: absolute;
  top: 25px;
}

div {
  display: flex;
  margin-bottom: 50px;
  position: relative;
}
</style>