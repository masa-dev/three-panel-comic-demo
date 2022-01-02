<template>
  <div id="user">
    <h2>ユーザー情報</h2>

    <div class="user-info-wrap">
      <label for="user-name-input">ユーザー名</label>
      <input
        type="text"
        id="user-name-input"
        :value="userName"
        maxlength="10"
      />
    </div>
    <div class="user-info-wrap">
      <label for="user-mail-input">メールアドレス(変更不可)</label>
      <input type="email" id="user-mail-input" :value="email" readonly />
    </div>
    <div class="user-info-wrap">
      <button @click="updateProfile">変更を更新する</button>
    </div>

    <h3>アイコンの変更</h3>
    <div class="user-info-wrap">
      <label for="user-icon-input">
        <input
          type="file"
          id="user-icon-input"
          style="display: none"
          @change="selectedImage"
          accept="image/*"
        />
        <div class="user-icon-wrap">
          <img
            :src="photoURL"
            alt=""
            width="110"
            height="110"
            id="user-icon-input-img"
          />
          <div class="select-image-icon">
            <b-icon-camera-fill></b-icon-camera-fill>
          </div>
        </div>
      </label>
    </div>
    <div class="user-info-wrap">
      <button @click="submitIcon">送信</button>
    </div>

    <h3>ログアウト</h3>
    <p>
      <button class="logout" @click="logout">ログアウトする</button>
    </p>
  </div>
</template>

<script>
import firebaseConfig from "../util/firebaseConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/database";
import checkNgWords from "../util/checkNgWords";

export default {
  data() {
    return {
      email: "",
      iconImage: null,
    };
  },
  methods: {
    updateProfile() {
      let userName = document.getElementById("user-name-input").value;
      if (userName.length === 0) {
        alert("名前の最小文字数は1文字です。");
        return;
      }
      if (userName.length > 10) {
        alert("名前の最大文字数は10文字です。");
        return;
      }

      if (checkNgWords(userName)) {
        alert("NGワードが含まれています。");
        return;
      }

      let unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const database = firebase.database();
          const userRef = database
            .ref()
            .child("users")
            .child(user.uid)
            .child("username");
          userRef.set(userName);

          this.$store.commit("updateUserName", userName);
        }
        unsubscribe();
      });
    },
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
    selectedImage(e) {
      if (e.target.files[0]) {
        this.iconImage = e.target.files[0];

        let img = document.getElementById("user-icon-input-img");
        img.src = URL.createObjectURL(this.iconImage);
      }
    },
    submitIcon() {
      if (!this.iconImage) {
        return;
      }

      const user = firebase.auth().currentUser;
      const storage = firebase.storage();
      let fileType;

      switch (this.iconImage.type) {
        case "image/jpeg":
          fileType = "jpg";
          break;
        case "image/png":
          fileType = "png";
          break;
        default:
          alert("pngまたはjpegファイル形式のみ可能です");
          return;
      }

      const iconRef = storage
        .ref("users")
        .child(user.uid)
        .child(`icon.${fileType}`);

      iconRef.put(this.iconImage).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
          user.updateProfile({ photoURL: url });
          this.$store.commit("updatePhotoURL", url);
          alert("アップロードしました");
        });
      });
    },
  },
  computed: {
    photoURL() {
      return this.$store.state.user.photoURL;
    },
    userName() {
      return this.$store.state.user.userName;
    },
  },
  mounted() {
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.isAnonymous === false) {
          this.email = user.email;
          return;
        }
      } else {
        this.email = "";
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";

$inputColor: rgb(60, 161, 255);
$inputShadowColor: rgba(60, 161, 255, 0.3);

#user {
  p {
    margin-left: 2rem;
  }

  .user-icon-wrap {
    position: relative;
    display: inline-block;
    width: 110px;
    height: 110px;
    border-radius: 100%;
    cursor: pointer;

    &:hover {
      .select-image-icon {
        color: rgb(7, 143, 255);
      }
    }

    img {
      object-fit: cover;
      border-radius: 100%;
      vertical-align: top;
      overflow: hidden;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }

    .select-image-icon {
      position: absolute;
      right: 0px;
      bottom: 0px;
      padding: 8px;
      vertical-align: center;
      color: rgb(65, 65, 65);
      background-color: rgb(194, 202, 204);
      border-radius: 50%;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      transition: 0.3s;

      &:hover {
        color: rgb(7, 143, 255);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  button {
    color: white;
    background-color: $inputColor;
    font-weight: bold;
    font-size: 0.9rem;
    padding: 0.4rem 0.75rem;
    border: 1px solid $inputColor;
    border-radius: 5px;
    transition: 0.3s;
    cursor: pointer;

    &:hover,
    &:focus {
      outline: none;
      border-color: $inputColor;
      box-shadow: 0 0 0 2px $inputShadowColor;
    }

    &.logout {
      color: $inputColor;
      background-color: white;

      &:hover,
      &:focus {
        color: white;
        background-color: $inputColor;
      }
    }
  }

  .user-info-wrap {
    margin: {
      left: 2em;
      top: 1em;
      bottom: 1em;
    }

    input[type="text"],
    input[type="email"] {
      display: block;
      width: 400px;
      font-size: 0.85em;
      margin: {
        top: 0.5em;
        bottom: 0.5em;
      }
      padding: {
        top: 0.8em;
        left: 1em;
        bottom: 0.7em;
      }
      border: 1px solid rgb(182, 182, 182);
      border-radius: 5px;
      transition: 0.3s;

      &:hover,
      &:focus {
        outline: none;
        border-color: $inputColor;
        box-shadow: 0 0 0 2px $inputShadowColor;
      }
    }

    input[readonly] {
      background-color: rgb(233, 233, 233);

      &:hover,
      &:focus {
        outline: none;
        border-color: gray;
        box-shadow: 0 0 0 2px rgba(128, 128, 128, 0.3);
      }
    }
  }
}
@media only screen and (max-width: $responsiveMainWidth) {
  #user {
    p {
      margin-left: 1em;
    }

    .user-info-wrap {
      margin-left: 1em;

      input[type="text"],
      input[type="email"] {
        width: 90%;
      }
    }
  }
}
</style>
