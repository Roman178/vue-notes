import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import App from "../App.vue";
import NoteContent from "../components/NoteContent.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // {
  //   path: "/",
  //   name: "App",
  //   component: App,
  // },
  {
    path: "/notes/:noteId",
    name: "NoteContent",
    component: NoteContent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
