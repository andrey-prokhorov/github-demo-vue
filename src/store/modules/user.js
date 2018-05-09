import { getGithubUser } from '@/api'

export const state = {
  users: []
}

export const getters = {
  users: state => state.users,
  hasUsers: state => state.users.length > 0,
  numberOfUsers: state => state.users.length
}

export const mutations = {
  saveNewUser(state, user) {
    state.users.push(user)
  }
}

export const actions = {
  getUser({ commit }, username) {
    return new Promise((resolve, reject) => {
      getGithubUser(username)
        .then(res => {
          const user = res.data
          commit('saveNewUser', user)
          resolve(user)
        })
        .catch(error => reject(error))
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
