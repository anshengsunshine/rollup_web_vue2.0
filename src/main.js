import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 本地测试： npm link ansheng-lib
import AnshengLib from 'ansheng-lib'
Vue.use(AnshengLib)
// npm 测试：npm i asl-big-screen-v2.0
import { AslFrame, AslTest} from "asl-big-screen-v2.0";
Vue.use(AslFrame)
Vue.use(AslTest)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
