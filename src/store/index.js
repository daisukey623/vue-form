import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
    todos(state) {
      return state.text
    }
  },
  mutations: {
    setTodo(state, data) {
      state.text = data
    }
  },
  actions: {
    updateTodos({ commit }, data) {
      commit('setTodo', data)
    }
  }
})
