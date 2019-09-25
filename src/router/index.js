import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";
import store from "../vuex/store";
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

const pathes = ['/a','/b']
router.beforeEach((to,from,next)=>{
  if (pathes.indexOf(to.path) !== -1){
    if (!store.state.user.token) {
      next('/login')
    }
  }
  next()
})

export default router