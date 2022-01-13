import Vue from "vue";
import Vuex from "vuex";

import firebaseConfig from "@/util/firebaseConfig.js";
import firebase from "firebase/compat/app";

Vue.use(Vuex);
firebase.initializeApp(firebaseConfig);

export default new Vuex.Store({
  state: {
    auth: {
      isAuth: false,
    },
    user: {
      userName: null,
      uid: null,
      photoURL: require("@/assets/no_user.png"),
      isAdmin: false,
    },
  },
  mutations: {
    /**
     * @param {Boolean} isAuth 認証状態
     */
    setAuth(state, isAuth) {
      if (typeof isAuth !== "boolean") {
        console.log("setAuthの入力値が正しくありません");
        return;
      }
      state.auth.isAuth = isAuth;
    },
    setAdmin(state, isAdmin) {
      if (typeof isAdmin !== "boolean") {
        console.log("setAdminの入力値が正しくありません");
        return;
      }
      state.user.isAdmin = isAdmin;
    },
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
