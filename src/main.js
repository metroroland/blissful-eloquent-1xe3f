import Vue from "vue";
import App from "./App.vue";

import VueOnsen from "vue-onsenui";
Vue.use(VueOnsen);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
