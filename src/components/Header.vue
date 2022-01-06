<template>
  <header>
    <div class="header-div">
      <div class="title-bar">
        <router-link to="/">
          <h1>認知行動療法３コマ漫画</h1>
        </router-link>
      </div>
      <div class="user-bar">
        <div class="user-link" v-if="isAuth">
          <button class="header-user-photo" @click="openModal">
            <img :src="photoURL" alt="" />
          </button>
          <button class="header-user-name" @click="openModal">
            {{ userName
            }}<b-icon-caret-down-fill
              :class="{ rotated: modalSeen }"
            ></b-icon-caret-down-fill>
          </button>
          <div class="modal-portal" v-if="modalSeen">
            <div class="portal-backdrop" @click="closeModal"></div>
            <div
              class="portal-popover"
              v-bind:style="modalPosition"
              @click="closeModal"
            >
              <router-link to="/user">
                <span class="header-shortcut-icon"
                  ><b-icon-person-circle></b-icon-person-circle></span
                >ユーザー設定</router-link
              >
              <router-link to="/group">
                <span class="header-shortcut-icon"
                  ><b-icon-people-fill></b-icon-people-fill></span
                >グループ設定</router-link
              >
              <router-link to="/log">
                <span class="header-shortcut-icon"
                  ><b-icon-clock-history></b-icon-clock-history></span
                >ログ</router-link
              >
              <router-link to="/" class="shortcut-top-bordered">
                <span class="header-shortcut-icon"
                  ><b-icon-house-fill></b-icon-house-fill></span
                >トップページ</router-link
              >
              <router-link to="/about">
                <span class="header-shortcut-icon"
                  ><b-icon-info-circle></b-icon-info-circle></span
                >このサイトについて</router-link
              >
              <a @click="logout" class="shortcut-top-bordered">
                <span class="header-shortcut-icon"
                  ><b-icon-box-arrow-right></b-icon-box-arrow-right></span
                >ログアウト</a
              >
              <a @click="reload">
                <span class="header-shortcut-icon"
                  ><b-icon-arrow-clockwise></b-icon-arrow-clockwise></span
                >サイトの更新</a
              >
            </div>
          </div>
        </div>
        <div class="login-link" v-if="!isAuth">
          <router-link to="/login">
            <button>ログイン</button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  data() {
    return {
      modalSeen: false,
      modalPosition: {
        top: "0px",
        right: "0px",
      },
    };
  },
  methods: {
    logout() {
      if (confirm("ログアウトしますか？")) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            alert("ログアウトしました");
          });
      }
    },
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
    userName() {
      return this.$store.state.user.userName;
    },
    isAuth() {
      return this.$store.state.auth.isAuth;
    },
  },
  mounted() {
    window.addEventListener("resize", this.changeModalStyle);
    this.changeModalStyle();
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
              width: inherit;
              height: inherit;
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
              width: 13px;
              margin-left: 5px;
              vertical-align: baseline;
              transition: transform 0.15s linear;

              &.rotated {
                transform: rotate(180deg);
              }
            }
          }
        }

        // modal
        .modal-portal {
          .portal-popover {
            position: absolute;
            width: 220px;
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
              transition: 0.2s;
              cursor: pointer;

              &:first-child {
                border: none;
                border-radius: 6px 6px 0 0;
              }
              &:last-child {
                border-radius: 0 0 6px 6px;
              }

              &:hover {
                background-color: rgb(233, 229, 217);
              }

              &.shortcut-top-bordered {
                border-top: solid rgb(182, 182, 182) 1px;
              }

              span.header-shortcut-icon {
                margin-right: 15px;

                svg {
                  color: rgb(231, 86, 86);
                  height: 18px;
                  width: 18px;
                  vertical-align: middle;
                }
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
            z-index: 99;
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
