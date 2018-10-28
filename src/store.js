import Vue from 'vue'
import Vuex from 'vuex'
import api from './API/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    view: 'start',
    registeredBoxes: [],
    allBoxes:[],
    isBoxFetching: true
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
    },
    isBoxFetching: state => state.isBoxFetching
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
    },
    SET_BOXFETCHING(state, payload){
      state.isBoxFetching = payload
    }
  },
  actions: {
    setView: ({ commit }, payload) => commit("SET_VIEW", payload),
    addScanedBoxes: ({ commit }, payload) => commit("ADD_BOX", payload),
    fetchBoxes: async ({ commit }) => {
      try {
        commit("SET_BOXFETCHING", true)
        const boxes = await api.boxes({branchid: 1})
        console.log(boxes)
        commit("FETCH_BOXES", boxes)
        commit("SET_BOXFETCHING", false)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
