<template>
  <div id="login">
    <div id="firebaseui-auth-container"></div>
    <router-link ref="redirectHome" to="/" style="display: none"></router-link>
  </div>
</template>

<script>
import firebaseConfig from "@/util/firebaseConfig.js";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import checkNgWords from "@/util/checkNgWords";

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
    goToTop() {
      this.$refs.redirectHome.$el.click();
    },
  },
  mounted() {
    const goToTop = this.goToTop;

    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user && user.isAnonymous === false) {
        goToTop();
      }
    });

    let ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());

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
        // ログイン成功時にデータベースにemailを追加
        signInSuccessWithAuthResult(authResult) {
          const user = authResult.user;

          if (user && user.isAnonymous === false) {
            const userRef = firebase.database().ref(`users/${user.uid}`);
            const userHideRef = firebase
              .database()
              .ref(`users-hide/${user.uid}`);

            userHideRef.update({ email: user.email });
            userRef
              .child("username")
              .get()
              .then((snapshot) => {
                // 名前がない場合
                if (snapshot.val() == null) {
                  // 認証情報に名前があり、それがNGワード出ない場合
                  // 認証情報の名前をデータベースに保存する
                  if (user.displayName && !checkNgWords(user.displayName)) {
                    const userName = user.displayName.slice(0, 10);
                    userRef.update({ username: userName });
                  }
                  // 認証情報にも名前がない場合
                  else {
                    userRef.update({ username: "名無しさん" });
                  }
                }
              });
          }
          goToTop();
        },
      },
    });
  },
};
</script>
