<template>
  <div id="user">
    <h2>ユーザー情報</h2>
    <p>ユーザー名： {{ userName }}</p>
    <p>メールアドレス： {{ email }}</p>

    <h3>ログアウト</h3>
    <p>
      <button @click="logout">ログアウトする</button>
    </p>

    <h3>アイコンの変更</h3>
    <p>
      <input
        type="file"
        id="user-icon-input"
        @change="selectedImage"
        accept="image/*"
      />
      <button @click="submitIcon">送信</button>
    </p>
  </div>
</template>

<script>
import firebaseConfig from "../util/firebaseConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";

export default {
  data() {
    return {
      userName: "",
      email: "",
      iconImage: null,
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
    selectedImage(e) {
      this.iconImage = e.target.files[0];
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
  mounted() {
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.providerData.length !== 0) {
          this.email = user.email;
          this.userName = user.displayName;
          return;
        }
      } else {
        this.email = "";
        this.userName = "";
      }
    });
  },
};
</script>

<style lang="scss" scoped>
#user {
  p {
    margin-left: 2rem;
  }
}
</style>
