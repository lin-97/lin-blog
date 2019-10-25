import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "",
          name: "home",
          component: () =>
            import(/* webpackChunkName: "home" */ "./views/home.vue")
        },
        {
          path: "/home",
          name: "home",
          component: () =>
            import(/* webpackChunkName: "home" */ "./views/home.vue")
        },
        {
          path: "/wallpaper",
          name: "wallpaper",
          component: () =>
            import(/* webpackChunkName: "wallpaper" */ "./views/wallpaper.vue")
        },
        {
          path: "/message",
          name: "message",
          component: () =>
            import(/* webpackChunkName: "message" */ "./views/message.vue")
        },
        {
          path: "/about",
          name: "about",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/about.vue")
        }
      ]
    }
  ]
});

export default router;
