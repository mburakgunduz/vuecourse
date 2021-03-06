import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProductList from "../components/ProductList.vue";
import ProductAdd from "../components/ProductAdd.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path:"/products",
    name:"ProductList",
    component:ProductList
  },
  {
    path:"/products/category/:id", 
    name:"ProductListByCategory",
    component:ProductList
  },
  {
    path:"/product/add",
    name:"ProductAdd",
    component:ProductAdd
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes:routes,
});

export default router;
