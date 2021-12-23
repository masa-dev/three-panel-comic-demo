import Vue from "vue";
import Vuex from "vuex";

import firebaseConfig from "@/util/firebaseConfig.js";
import firebase from "firebase/compat/app";

Vue.use(Vuex);
firebase.initializeApp(firebaseConfig);

export default new Vuex.Store({
  state: {
    auth: {
      isAuth: null,
    },
    user: {
      userName: null,
      uid: null,
      photoURL: require("@/assets/no_user.png"),
    },
  },
  mutations: {
    /**
     * @param {Boolean} isAuth 認証状態
     */
    setAuth(state, isAuth) {
      state.auth.isAuth = isAuth;
    },
    /**
     *
     * @param {{userName: String, photoURL: String}} user ユーザー情報
     */
    updatePhotoURL(state, url) {
      state.user.photoURL = url ? url : null;
    },
    updateUserName(state, name) {
      state.user.userName = name ? name : null;
    },
    updateUserId(state, id) {
      state.user.uid = id ? id : null;
    },
  },
  actions: {},
  modules: {},
});
