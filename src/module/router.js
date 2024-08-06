import { createRouter, createWebHashHistory } from "vue-router";
import ChangeDivColor from "../components/ChangeDivColor.vue";
import DataSend from "../components/DataSend.vue";
import HelloWorld from "../components/HelloWorld.vue";
import MyButton from "../components/myButton.vue";
import MyNote from "../components/myNote.vue";
import Pinia from "../components/pinia.vue";
import Register from "../components/register.vue";
import Test from "../components/test.vue";
const routes = [
  {
    path: "/ChangeDivColor",
    name: "ChangeDivColor",
    components: ChangeDivColor,
  },
  {
    path: "/ChangeDivColor",
    name: "ChangeDivColor",
    components: DataSend,
  },
  {
    path: "/ChangeDivColor",
    name: "ChangeDivColor",
    components: HelloWorld,
  },
  {
    path: "/ChangeDivColor",
    name: "ChangeDivColor",
    components: MyButton,
  },
  {
    path: "/ChangeDivColor",
    name: "ChangeDivColor",
    components: MyNote,
  },
  {
    path: "/ChangeDivColor",
    name: "ChangeDivColor",
    components: Pinia,
  },
  {
    path: "/ChangeDivColor",
    name: "ChangeDivColor",
    components: Register,
  },
  {
    path: "/ChangeDivColor",
    name: "ChangeDivColor",
    components: Test,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
