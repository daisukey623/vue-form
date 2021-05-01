import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// ストアの定義
const store = new Vuex.Store({
  // ステート、ミューテーションなどをここに記載
  state: {
    message: '',
    gender: '',
    birthdayYear:2000,
    birthdayMonth:1,
    birthdayDate:1,
    q01:'',
    q02:'',
    q03:'',
    consultation:''
  },
  getters:{
    getGender:function(state){
      return state.gender
    },
    getBirthdayYear:function(state){ 
      return state.birthdayYear
    },
    getBirthdayMonth:function(state){ 
      return state.birthdayMonth
    },
    getBirthdayDate:function(state){ 
      return state.birthdayDate
    },
  },
  mutations:{
    updateGender(state,gender) {
      state.gender = gender;
    },
    updateBirthdayYear(state,birthdayYear) {
      state.birthdayYear = birthdayYear;
    },
    updateBirthdayMonth(state,birthdayMonth) {
      state.birthdayMonth = birthdayMonth;
    },
    updateBirthdayDate(state,birthdayDate) {
      state.birthdayDate = birthdayDate;
    },
    updateq01(state,q01) {
      state.q01 = q01;
    },
    updateq02(state,q02) {
      state.q02 = q02;
    },
    updateq03(state,q03) {
      state.q03 = q03;
    },
    updateConsultation(state,consultation){
      state.consultation = consultation;
    }
    
  },
  actions: {},
  modules: {},
});

// ストアをエクスポート
export default store;
