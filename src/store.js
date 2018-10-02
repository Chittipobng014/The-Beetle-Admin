import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boxview: false,
    menu: false,
    status: { menu: "hello", step: "", data: {passcode: '', repasscode: ''} },
    selectedBox: [],
    peripheral: null,
  },
  getters: {
    isMenu: state => state.status.menu,
    isStep: state => state.status.step,
    getData: state => state.status.data,
    getPasscode: state => state.status.data.passcode,
    getRepasscode: state => state.status.data.repasscode,
    getSelectedBox: state => state.selectedBox[0],
    getPeripheral: state => state.peripheral
  },
  mutations: {
    SET_PERIPHERAL(state, payload){
      state.peripheral = payload;
    },
    CLEAR_PERIPHERAL(state){
      state.peripheral = [];
    },
    ADDSELECTED_BOX(state, payload){
      state.selectedBox.push(payload)
    },
    boxview(state, payload) {
      state.boxview = payload;
    },
    menu(state, payload) {
      state.menu = payload;
    },
    SET_MENU(state, payload) {
      state.status.menu = payload;
    },
    SET_STEP(state, payload) {
      state.status.step = payload;
    },
    SET_DATA(state, payload) {
      state.status.data = payload;
    },
    SET_PASSCODE(state, payload) {
      state.status.data.passcode = payload;
    },
    SET_REPASSCODE(state, payload) {
      state.status.data.repasscode = payload;
    },
    CLEAR_SELECTED_BOX(state){
      state.selectedBox = [];
    }
  },
  actions: {
    setMenu: ({ commit }, payload) => commit("SET_MENU", payload),
    setStep: ({ commit }, payload) => commit("SET_STEP", payload),
    setData: ({ commit }, payload) => commit("SET_DATA", payload),
    setPasscode: ({ commit }, payload) => commit("SET_PASSCODE", payload),
    setRepasscode: ({ commit }, payload) => commit("SET_REPASSCODE", payload),
    setSelectedBox: ({ commit }, payload) => commit("ADDSELECTED_BOX", payload),
    clearSelectedBox: ({ commit }) => commit("CLEAR_SELECTED_BOX"),
    setPeripheral: ({ commit }, payload) => commit("SET_PERIPHERAL", payload),
    clearPeripheral: ({ commit }, payload) => commit("CLEAR_PERIPHERAL")
  }
})
