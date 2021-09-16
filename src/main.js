import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 本地测试： npm link ansheng-lib
import AnshengLib from 'ansheng-lib'
Vue.use(AnshengLib)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
