import Vue from "vue";
import {
  RECIVE_GOODS,
  RECIVE_RATINGS,
  RECIVE_INFO,
  ADD_FOOD_COUNT,
  REMOVE_FOOD_COUNT,
  CLEAR_CART
} from "../mutation-type";

import {
  reqGoods,
  reqRatings,
  reqInfo
} from "../../api";



const state = {
  goods: [],
  ratings: [],
  info: {},
  cartFoods:[],
}

const mutations = {
  [RECIVE_GOODS] (state,{goods}){
    state.goods = goods
  },
  [RECIVE_RATINGS] (state,{ratings}){
    state.ratings = ratings
  },
  [RECIVE_INFO] (state,{info}){
    state.info = info
  },
  [ADD_FOOD_COUNT] (state,{food}){
    if(!food.count){
      Vue.set(food,'count',1)
      state.cartFoods.push(food)
    }else{
      food.count++
    }
  },
  [REMOVE_FOOD_COUNT](state,{food}) {
    food.count--
    if (food.count === 0){
      state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
    }
  },
  [CLEAR_CART](state){
    state.cartFoods.forEach(food => {
      food.count = 0
    });
    state.cartFoods = []
  }
}

const actions = {
  async getShopGoods ({commit}){
    const result = await reqGoods()
    if(result.code === 0){
      const goods = result.data
      commit(RECIVE_GOODS,{goods})
    }
  },
  async getShopRatings ({commit}){
    const result = await reqRatings()
    if(result.code === 0){
      const ratings = result.data
      commit(RECIVE_RATINGS,{ratings})
    }
  },
  async getShopInfo ({commit}){
    const result = await reqInfo()
    if(result.code === 0){
      const info = result.data
      commit(RECIVE_INFO,{info})
    }
  },
  updateFoodCount ({commit},{isAdd,food}){
    if(isAdd){
      commit(ADD_FOOD_COUNT,{food})
    }else{
      commit(REMOVE_FOOD_COUNT,{food})
    }
  }
}

const getters = {
  totalCount (state){
    return state.cartFoods.reduce((pre,food) => {
      pre += food.count
      return pre
    },0)
  },
  totalPrice (state){
    return state.cartFoods.reduce((pre, food) => {
      pre += food.count * food.price
      return pre
    }, 0)
  },
  ratingsNum (state){
    return state.ratings.length
  },
  goodRatings (state){
    return state.ratings.reduce((pre,rating)=>{
      if (rating.score >= 3){
        pre++
      }
      return pre
    },0)
  },
  badRatings(state) {
    return state.ratings.reduce((pre, rating) => {
      if (rating.score < 3) {
        pre++
      }
      return pre
    }, 0)
  }
}

export default  {
  state,
  mutations,
  actions,
  getters
}