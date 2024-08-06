import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./module/router";

createApp(App).use(createPinia()).use(router).mount("#app");
