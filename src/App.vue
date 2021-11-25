<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

import firebaseConfig from "@/util/firebaseConfig.js";
import firebase from "firebase/compat/app";

firebase.initializeApp(firebaseConfig);

export default {
  components: {
    Header: Header,
    Main: Main,
    Footer: Footer,
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setAuth", true);
        this.$store.commit("updateUserProfile", {
          userName: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        this.$store.commit("setAuth", false);
        this.$store.commit("updateUserProfile");
        console.log(this.$router);
        if (this.$router.currentRoute.name !== "Login")
          this.$router.push({ path: "login" });
      }
    });
  },
  watch: {
    $route(to) {
      // ログインしていない場合、loginページにリダイレクトする
      if (this.$store.state.auth.isAuth) return;

      if (to && to.name !== "Login") {
        firebase.auth().onAuthStateChanged((user) => {
          if (!user) {
            this.$router.push({ path: "/login" });
          }
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap");

body {
  margin: 0;
  font-family: "Kosugi Maru", "Meiryo", serif;
  background-color: rgba(255, 228, 196, 0.199);
}
</style>
