import Vue from 'vue'
import Vuex from 'vuex'
import api from './API/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    view: 'start',
    registeredBoxes: [],
    allBoxes:[]
  },
  getters: {
    view: state => state.view,
    registeredBoxes: state => state.registeredBoxes,
    unregisrerBoxes: state => {
      const unregis = state.allBoxes.filter(box => {
        state.registeredBoxes.filter(registeredBox => {
          return box.uuid != registeredBox.uuid
        })
      })
      return unregis
    }
  },
  mutations: {
    SET_VIEW(state, payload){
      state.view = payload
    },
    ADD_BOX(state, payload){
      state.allBoxes.push(payload)
    },
    FETCH_BOXES(state, payload){
      state.registeredBoxes = payload
    }
  },
  actions: {
    setView: ({ commit }, payload) => commit("SET_VIEW", payload),
    addScanedBoxes: ({ commit }, payload) => commit("ADD_BOX", payload),
    fetchBoxes: async ({ commit }) => {
      try {
        const boxes = await api.boxes({branchid: 1})
        console.log(boxes)
        commit("FETCH_BOXES", boxes)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
