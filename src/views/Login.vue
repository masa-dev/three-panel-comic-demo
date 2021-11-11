<template>
  <div id="login">
    <div id="firebaseui-auth-container"></div>
    <button @click="logout">Logout</button><br />
    <router-link to="/">TOP</router-link>
  </div>
</template>

<script>
import firebaseConfig from "@/util/firebaseConfig.js";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("ログアウトしました");
        });
    },
  },
  mounted() {
    firebase.initializeApp(firebaseConfig);

    let ui = new firebaseui.auth.AuthUI(firebase.auth());

    ui.start("#firebaseui-auth-container", {
      signInSuccessUrl: "./",
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          // アカウント作成時にログインメールを送信する
          // 事前に承認済みドメインに指定する必要があるかも
          signInMethod:
            firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
          forceSameDevice: false,
        },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        uiShown: () => {
          const loginBtnElements = document.getElementsByClassName(
            "firebaseui-idp-text-long"
          );

          for (let element of loginBtnElements) {
            element.innerHTML = changeBtnToJa(element.innerHTML);
          }

          function changeBtnToJa(enText) {
            if (enText.match(/(google|Google)/)) {
              return "Googleでログイン";
            } else if (enText.match(/(email|Email)/)) {
              return "Eメールでログイン";
            } else if (enText.match(/(guest|Guest)/)) {
              return "ゲストとして続ける";
            } else {
              return enText;
            }
          }
        },
      },
    });
  },
};
</script>
