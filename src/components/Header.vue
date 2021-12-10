<template>
  <header>
    <div class="header-div">
      <div class="title-bar">
        <router-link to="/">
          <h1>３コマ漫画アプリ</h1>
        </router-link>
      </div>
      <div class="user-bar">
        <div class="user-link" v-if="isLogin">
          <button class="header-user-photo" @click="openModal">
            <img :src="photoURL" alt="" />
          </button>
          <button class="header-user-name" @click="openModal">
            {{ userName
            }}<svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
              />
            </svg>
          </button>
          <div class="modal-portal" v-if="modalSeen">
            <div class="portal-backdrop" @click="closeModal"></div>
            <div
              class="portal-popover"
              v-bind:style="modalPosition"
              @click="closeModal"
            >
              <router-link to="/">トップページ</router-link>
              <router-link to="/user">ユーザー設定</router-link>
              <router-link to="/group">グループ設定</router-link>
              <router-link to="/about">このサイトについて</router-link>
              <a @click="reload">更新</a>
            </div>
          </div>
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
      modalSeen: false,
      modalPosition: {
        top: "0px",
        right: "0px",
      },
      //photoURL: this.$store.state.user.photoURL,
    };
  },
  methods: {
    openModal() {
      this.modalSeen = true;
      this.changeModalStyle();
    },
    closeModal() {
      this.modalSeen = false;
    },
    changeModalStyle() {
      if (!this.modalSeen) {
        return;
      }
      let position = document
        .getElementsByClassName("user-link")[0]
        .getBoundingClientRect();

      this.modalPosition.top = position.bottom + 5 + "px";
      this.modalPosition.right = window.innerWidth - position.right + "px";
    },
    reload() {
      window.navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => {
          for (let registration of registrations) {
            registration.unregister();
          }
        });

      window.location.reload(true);
    },
  },
  computed: {
    photoURL() {
      return this.$store.state.user.photoURL;
    },
  },
  mounted() {
    window.addEventListener("resize", this.changeModalStyle);
    this.changeModalStyle();

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
  beforeDestroy() {
    window.addEventListener("resize", this.changeModalStyle);
  },
  watch: {
    $route() {
      this.modalSeen = false;
    },
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

            svg {
              height: 100%;
              width: 10px;
              vertical-align: middle;
            }
          }
        }

        // modal
        .modal-portal {
          .portal-popover {
            position: absolute;
            width: 200px;
            border-radius: 5px;
            background-color: rgb(245, 243, 235);
            box-shadow: 0 3px 12px -1px #04253f40;
            z-index: 100;

            a {
              padding: 0.7em 0.9em;
              display: flex;
              align-items: center;
              flex-wrap: wrap;
              // width: 100%;
              text-align: left;
              color: black;
              outline: 0;
              line-height: 1.5;
              font-size: 15px;
              text-decoration: none;
              border-top: solid rgb(182, 182, 182) 1px;
              transition: 0.2s;
              cursor: pointer;

              &:first-child {
                border: none;
              }

              &:hover {
                background-color: rgb(240, 237, 226);
              }
            }
          }

          .portal-backdrop {
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            inset: 0px;
            cursor: auto;
            z-index: 99px;
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
