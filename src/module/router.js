import { createRouter, createWebHistory } from "vue-router";
import ChangeDivColor from "../components/ChangeDivColor.vue";
import HelloWorld from "../components/HelloWorld.vue";
import MyButton from "../components/myButton.vue";
import MyNote from "../components/myNote.vue";
import Pinia from "../components/pinia.vue";
import Register from "../components/register.vue";
import Test from "../components/test.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";

import Note from "../components/note.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: DefaultLayout,
  },
  {
    path: "/note",
    name: "note",
    component: Note,
  },
  {
    path: "/change-div-color",
    name: "ChangeDivColor",
    component: ChangeDivColor,
  },
  {
    path: "/hello-world",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/my-button",
    name: "MyButton",
    component: MyButton,
  },
  {
    path: "/my-note",
    name: "MyNote",
    component: MyNote,
  },
  {
    path: "/pinia",
    name: "Pinia",
    component: Pinia,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
