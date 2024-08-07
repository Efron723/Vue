<template>
  <div class="home">
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <nav>
      <ul>
        <li><router-link to="/change-div-color">ChangeDivColor</router-link></li>
        <li><router-link to="/hello-world">HelloWorld</router-link></li>
        <li><router-link to="/my-button">MyButton</router-link></li>
        <li><router-link to="/my-note">MyNote</router-link></li>
        <li><router-link to="/pinia">Pinia</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
        <li><router-link to="/note">Note</router-link></li>
      </ul>
    </nav>
  </div>
  <router-view />
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>