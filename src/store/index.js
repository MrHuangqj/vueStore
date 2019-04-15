// const store = new Vuex.Store({
//     state: {
//       count: 0
//     },
//     mutations: {
//       increment (state) {
//         state.count++
//       }
//     }
//   })
// module.exports= store;
/**
 * 全局引入vuex
 */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 状态
const state = {
  showBar: true,//导航栏显示控制符
  id: 1,//商品id
  good: []//添加到购物车商品
}
// 可以对状态进行改变
const getters = {
  getShowBar(state) { // 获取导航栏显示控制符
    return state.showBar
  },
  getId(state) { // 获取商品id
    return state.id
  },
  getGood(state){//获取购物车商品
    return state.good
  }
}
// 同步设置状态
const mutations = {
  addGood(state, good) { //  添加商品到购物车
    if (good.number <= 0)//数量为0时不添加
      return;
    for (let i = 0; i < state.good.length; i++)
      if (state.good[i].id == good.id) {
        if(state.good[i].color!=good.color){//如果手机颜色不一样添加商品
          state.good.push(good);
          return;
        }
        if (state.good[i].number < good.number) {//如果数量更大,修改数量
          state.good[i].number = good.number;
          return;
        } else {
          console.log(state.good);
          return;
        }
      }
    state.good.push(good);
    console.log(state.good);
  },
  setShowBar(state, show) { // 设置导航栏展示
    state.showBar = show;
    console.log(state.showBar);
  },
  setId(state, id) {
    state.id = id;
    console.log(state.id);
  },
}
//异步获取状态
const actions = {

};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
