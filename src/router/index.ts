import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Todos from "@/views/tabs/Todos.vue";
import Post from "@/views/tabs/Post.vue";
import Info from "@/views/tabs/Info.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      { path: "todos", component: Todos },
      { path: "post", component: Post },
      { path: "info", component: Info },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
