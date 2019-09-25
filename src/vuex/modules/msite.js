import {
  RECIVE_ADDRESS,
  RECIVE_CATEGORYS,
  RECIVE_SHOPS,
} from "../mutation-type";

import {
  reqAddress,
  reqCategorys,
  reqShops,
} from "../../api";

const state = {
  latitude: 31.38098,
  longitude: 121.50146,
  address: {},
  categorys: [],
  shops: [],
}

const mutations = {
  [RECIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },
  [RECIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
}

const actions = {
  async getAddress ({commit,state}){
    const {latitude,longitude} = state
    const result = await reqAddress(latitude, longitude)
    if (result.code === 0){
      const address = result.data
      commit(RECIVE_ADDRESS,{address})
    }
  },
  async getCategorys ({commit}){
    const result = await reqCategorys()
    if(result.code === 0){
      const categorys = result.data
      commit(RECIVE_CATEGORYS,{categorys})
    }
  },
  async getShops ({commit,state}) {
    const {latitude,longitude} = state
    const result = await reqShops(latitude, longitude)
    if (result.code === 0){
      const shops = result.data
      commit(RECIVE_SHOPS,{shops})
    }
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