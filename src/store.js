import Vue from 'vue'
import Vuex from 'vuex'
import api from './API/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: 'mainMenu',
    registeredBoxes: [],
    unRegisteredBoxes: [],
    isBoxFetching: true,
    loading: false,
    bleScaning: false
  },
  getters: {
    bleScaning: state => state.bleScaning,
    unRegisteredBoxes: state => {
      try {
        state.unRegisteredBoxes.forEach((unRegist, i) => {
          state.registeredBoxes.forEach(registerd => {
            if (unRegist.id == registerd.id) {
              state.unRegisteredBoxes.splice(i, 1);
            }
          })
        })
        let unRegisteredBoxes = removeDuplicates(state.unRegisteredBoxes, 'id')
        return unRegisteredBoxes
      } catch (error) {
        console.log(error)
      }
    },
    loading: state => state.loading,
    menu: state => state.menu,
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
    UPDATE_UNREGISTER_BOX(state, payload) {
      state.unRegisteredBoxes = payload
    },
    SET_MENU(state, payload) {
      state.menu = payload
    },
    ADD_BOX(state, payload) {
      state.unRegisteredBoxes.push(payload)
    },
    FETCH_BOXES(state, payload) {
      state.registeredBoxes = payload
    },
    SET_BOXFETCHING(state, payload) {
      state.isBoxFetching = payload
    },
    SET_LOADING_STATE(state, payload) {
      state.loading = payload
    },
    SET_BLE_STATE(state, payload) {
      state.bleScaning = payload
    }
  },
  actions: {
    setBleState: ({ commit }, payload) => commit("SET_BLE_STATE", payload),
    setMenu: ({ commit }, payload) => commit("SET_MENU", payload),
    addScannedBoxes: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        if (payload.hasOwnProperty("name") && payload.name.startsWith("Beetle")) {
          commit("ADD_BOX", payload)
        }
        resolve(true)
      })
    },
    fetchBoxes: async ({ commit }) => {
      try {
        console.log('Fetching')
        commit("SET_BOXFETCHING", true)
        const boxes = await api.boxes({ branchid: 1 })
        console.log("​boxes", boxes)
        commit("FETCH_BOXES", boxes)
        commit("SET_BOXFETCHING", false)
      } catch (error) {
        console.log(error)
      }
    },
    showLoading: ({ commit }) => commit("SET_LOADING_STATE", true),
    hideLoading: ({ commit }) => commit("SET_LOADING_STATE", false),
    addUnRegisterBox: ({ commit }, payload) => commit("UPDATE_UNREGISTER_BOX", payload)
  }
})

function removeDuplicates( arr, prop ) {
  let obj = {};
  return Object.keys(arr.reduce((prev, next) => {
    if(!obj[next[prop]]) obj[next[prop]] = next; 
    return obj;
  }, obj)).map((i) => obj[i]);
}