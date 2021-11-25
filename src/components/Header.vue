<template>
  <header>
    <div class="header-div">
      <div class="title-bar">
        <router-link to="/">
          <h1>3コマ漫画アプリ</h1>
        </router-link>
      </div>
      <div class="user-bar">
        <div class="user-link" v-if="isLogin">
          <router-link to="/user">
            <button class="header-user-photo">
              <img :src="photoURL" alt="" />
            </button>
          </router-link>
          <router-link to="/user">
            <button class="header-user-name">{{ userName }}</button>
          </router-link>
        </div>
        <div class="login-link" v-if="!isLogin">
          <router-link to="/login">
            <button>ログイン</button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import firebaseConfig from "../util/firebaseConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  data() {
    return {
      isLogin: false,
      userName: "",
      //photoURL: this.$store.state.user.photoURL,
    };
  },
  computed: {
    photoURL() {
      return this.$store.state.user.photoURL;
    },
  },
  mounted() {
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.providerData.length !== 0) {
          this.isLogin = true;
          this.userName = user.displayName;
          return;
        }
      }
      this.isLogin = false;
    });
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap");

$button-color: rgb(24, 120, 230);

header {
  background-color: wheat;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);

  .header-div {
    display: flex;
    max-width: 900px;
    text-align: center;
    padding: 5px 20px;
    margin: 0 auto;
    margin-bottom: 5px;
    justify-content: space-between;

    .title-bar > a {
      color: black;
      text-decoration: none;
      h1 {
        font-size: 1.6em;
        margin: {
          top: 7px;
          bottom: 8px;
        }
      }
    }

    .user-bar {
      display: flex;
      align-items: center;

      .user-link {
        display: flex;
        align-items: center;

        button {
          background-color: transparent;
          border: none;
          cursor: pointer;

          &.header-user-photo {
            width: 35px;
            height: 35px;
            padding: 0;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 100%;
              vertical-align: top;
              overflow: hidden;
            }
          }

          &.header-user-name {
            padding: 0.5rem 0.5rem;
            font-size: 1rem;
            font-family: "Kosugi Maru", "Meiryo", serif;
            font-weight: bold;
          }
        }
      }

      .login-link {
        button {
          font-weight: bold;
          color: $button-color;
          padding: 0.5rem 0.75rem;
          background-color: white;
          border: 1px solid $button-color;
          border-radius: 5px;
          transition: 0.3s;

          &:hover {
            color: white;
            background-color: $button-color;
          }

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
