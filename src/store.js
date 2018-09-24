import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boxview: false,
    menu: false,
    status: {menu: "hello", step: "", data: {}}
  },
  getters: {
    isMenu: state => state.status.menu,
    isStep: state => state.status.step,
    data: state => state.status.data
  },
  mutations: {
    boxview(state, payload) {
      state.boxview = payload;
    },
    menu(state, payload) {
      state.menu = payload;
    },
    SET_MENU(state, payload){
      state.status.menu = payload;
    },
    SET_STEP(state, payload){
      state.status.step = payload;
    },
    SET_DATA(state, payload){
      state.status.data = payload;
    }
  },
  actions: {
    setMenu: ({ commit }, payload) => commit("SET_MENU", payload),
    setStep: ({ commit }, payload) => commit("SET_STEP", payload),
    setData: ({ commit }, payload) => commit("SET_DATA", payload),
  }
})
