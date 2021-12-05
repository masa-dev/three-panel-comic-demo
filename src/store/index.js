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
    updateUserProfile(state, user) {
      console.log(user);
      if (user) {
        state.user.userName = user.userName;
        state.user.photoURL = user.photoURL;
      } else {
        state.user.userName = null;
        state.user.photoURL = null;
      }
    },
  },
  actions: {},
  modules: {},
});
