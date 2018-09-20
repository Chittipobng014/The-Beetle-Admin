import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boxview: false,
    menu: false,
    faceRegStatus: "",    
  },
  mutations: {
    boxview(state, payload) {
      state.boxview = payload;
    },
    menu(state, payload) {
      state.menu = payload;
    },
    setFaceRegState(state, payload) {
      state.faceReg = payload
    }
  },
  actions: {

  }
})
