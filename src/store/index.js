import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'

Vue.use(Vuex)

export const state = {}
export const getters = {}
export const mutations = {}
export const actions = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  }
})
