import axios from "axios";
import qs from "qs";
import { MessageBox,Toast } from "mint-ui";

import store from "../vuex/store";
import router from "../router";

const instance = axios.create({
  timeout:10000,
  baseURL:"/api"
})


instance.interceptors.request.use((config)=>{
  if(config.method.toUpperCase() === "POST" && config.data instanceof Object){
    config.data = qs.stringify(config.data)
  }
  const token = store.state.user.token
  if(token){
    config.headers['Authorization'] = token
  }else{
    if (config.headers.needToken){
      throw new Error('请登录')
    }
  }
  
  return config
})

instance.interceptors.response.use(
  (response)=>{
    return response.data
  },
  (error)=>{
    if (!error.response){
      if(router.currentRoute.path !== '/login'){
        router.replace('/login')
      }
      Toast(error.message)
    }else{
      if(error.response.status == 401){
        store.dispatch('logout')
        if (router.currentRoute.path !== '/login') {
          router.replace('/login')
        }
        MessageBox(error.message)
      } else if (error.response.status == 404){
        MessageBox('此资源不存在')
      }
      MessageBox(error.message)
    }
    return new Promise(() => {})
  }
)

export default instance