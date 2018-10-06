import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: { menu: "hello", step: "", isOpen: false, data: {passcode: '', repasscode: ''} },
    selectedBox: [],
    peripheral: null,
    faceID: null,
    tel: null,
    boxs: [],
    transactions: [],
    updateBoxs: false,
    updateTransactions: false
  },
  getters: {
    isMenu: state => state.status.menu,
    isStep: state => state.status.step,
    isOpen: state => state.status.isOpen,
    getData: state => state.status.data,
    getPasscode: state => state.status.data.passcode,
    getRepasscode: state => state.status.data.repasscode,
    getSelectedBox: state => state.selectedBox[0],
    getPeripheral: state => state.peripheral,
    getFaceID: state => state.faceID,
    getTel: state => state.tel,
    getBoxs: state => state.boxs,
    getTransactions: state => state.transactions,
    updateBoxs: state => state.updateBoxs,
    updateTransactions: state => state.updateTransactions
  },
  mutations: {
    SET_UPDATEBOXS(state, payload){
      state.updateBoxs = payload;
    },
    SET_UPDATETRANSACTIONS(state, payload){
      state.updateTransactions = payload;
    },
    CLEAR_DETAILS(state){
      state.status.menu = '';
      state.status.data.passcode = '';
      state.status.data.repasscode = '';
      state.peripheral = null;
      state.faceID = null;
      state.tel = null;
      state.selectedBox = [];
    },
    SET_BOXS(state, payload){
      state.boxs = payload
    },
    SET_TEL(state, payload){
      state.tel = payload;
    },
    SET_FACEID(state, payload){
      state.faceID = payload;
    },
    SET_PERIPHERAL(state, payload){
      state.peripheral = payload;
    },
    CLEAR_PERIPHERAL(state){
      state.peripheral = [];
    },
    ADDSELECTED_BOX(state, payload){
      state.selectedBox.push(payload)
    },
    CLEAR_SELECTEDBOX(state){
      state.selectedBox = [];
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
    SET_ISOPEN(state, payload){
      state.status.isOpen = payload;
    },
    SET_TRANSACTIONS(state, payload){
      state.transactions = payload;
    }
  },
  actions: {
    setUpdateBoxs: ({ commit }, payload) => commit("SET_UPDATEBOXS", payload),
    setUpdateTransactions: ({ commit }, payload) => commit("SET_UPDATETRANSACTIONS", payload),
    clearDetails: ( {commit} ) => commit("CLEAR_DETAILS"),
    setMenu: ({ commit }, payload) => commit("SET_MENU", payload),
    setStep: ({ commit }, payload) => commit("SET_STEP", payload),
    setData: ({ commit }, payload) => commit("SET_DATA", payload),
    setPasscode: ({ commit }, payload) => commit("SET_PASSCODE", payload),
    setRepasscode: ({ commit }, payload) => commit("SET_REPASSCODE", payload),
    setSelectedBox: ({ commit }, payload) => commit("ADDSELECTED_BOX", payload),
    setPeripheral: ({ commit }, payload) => commit("SET_PERIPHERAL", payload),
    clearPeripheral: ({ commit }, payload) => commit("CLEAR_PERIPHERAL"),
    setFaceID: ({ commit }, payload) => commit("SET_FACEID", payload),
    setTel: ({ commit }, payload) => commit("SET_TEL", payload),
    setBoxs: async ({ commit }, payload) => {
        commit("SET_BOXS", payload);
        console.log("BOX_FETCHED")
    },
    setIsOpen: ( {commit }, payload) => commit("SET_ISOPEN", payload),
    clearSelectedBox: ( {commit }) => commit("CLEAR_SELECTEDBOX"),
    setTransactions: ( {commit }, payload) => commit("SET_TRANSACTIONS", payload)
  }
})
