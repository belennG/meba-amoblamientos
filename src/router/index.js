import Vue from "vue";
import VueRouter from "vue-router";
import Contacto from "@/views/Contacto.vue";
import Inicio from "@/views/Inicio.vue";
import NuestrosProyectos from "@/views/NuestrosProyectos.vue";
import QuienesSomos from "@/views/QuienesSomos.vue";
// import Photo from "@/views/Photo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto,
  },
  {
    path: "/nuestros-proyectos",
    name: "NuestrosProyectos",
    component: NuestrosProyectos,
  },
  {
    path: "/quienes-somos",
    name: "QuienesSomos",
    component: QuienesSomos,
  },
  // {
  //   path: "/photo/:id",
  //   name: "photo",
  //   component: Photo,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
