import {
  RECIVE_USER,
  RECIVE_TOKEN,
  LOGOUT,
} from "../mutation-type";

import {
  reqAutoLogin,
} from "../../api";


const state = {
  user: {},
  token: localStorage.getItem('token_key'),
}

const mutations = {
  [RECIVE_USER] (state,{user}){
    state.user = user
  },
  [RECIVE_TOKEN] (state,{token}){
    state.token = token
  },
  [LOGOUT] (state){
    state.user = {}
    state.token = ''
  },
}

const actions = {
  saveUser ({commit},user){
    const token = user.token
    localStorage.setItem('token_key',token)
    delete user.token
    commit(RECIVE_USER,{user})
    commit(RECIVE_TOKEN, {token})
  },
  async autoLogin ({commit}){
    const result = await reqAutoLogin()
    if (result.code === 0){
      const user = result.data
      commit(RECIVE_USER,{user})
    }
  },
  logout ({commit}){
    localStorage.removeItem('token_key')
    commit(LOGOUT)
  },
}

const getters = {
  
}

export default {
  state,
  mutations,
  actions,
  getters
}