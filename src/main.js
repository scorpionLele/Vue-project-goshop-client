import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import { Button } from "mint-ui";
import VueLazyload from "vue-lazyload";

import loading from "./common/images/loading.gif";
import "./mock/mockServer";
import "./validate";
import router from "./router";
import Header from "./components/Header/Header.vue";
import Star from "./components/Star/Star.vue";
import CartControl from "./components/CartControl/CartControl.vue";
import store from "./vuex/store";
import * as Api from "./api";

Vue.config.productionTip = false
Vue.use(VeeValidate)
Vue.use(VueLazyload,{
  loading
})
Vue.prototype.$Api = Api

Vue.component(Button.name, Button)
Vue.component('Header',Header)
Vue.component('Star', Star)
Vue.component('CartControl', CartControl)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
