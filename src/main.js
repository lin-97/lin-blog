import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入http组件
import axios from "axios";
//全局引入element-UI组件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.prototype.axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
