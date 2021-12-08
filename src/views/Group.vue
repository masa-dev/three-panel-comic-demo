<template>
  <div id="group">
    <div v-if="group.isJoin">
      <h2>所属グループ</h2>
    </div>
    <div v-if="!group.isJoin">
      <h2>グループ</h2>
      <p>現在、グループに所属していません。</p>
    </div>
  </div>
</template>

<script>
import firebaseConfig from "@/util/firebaseConfig.js";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

export default {
  data() {
    return {
      group: {
        isJoin: false,
        name: "",
      },
    };
  },
  mounted() {
    firebase.initializeApp(firebaseConfig);

    let unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let user = firebase.auth().currentUser;
        let userGroupRef = firebase.database().ref(`users/${user.uid}/group`);

        userGroupRef.on("value", (snapshot) => {
          let groupId = snapshot.val();

          if (groupId) {
            console.log(groupId);
            this.group.isJoin = true;
          }

          // グループに所属していない場合
          else {
            this.group.isJoin = false;
          }
        });
        console.log(user, userGroupRef, user.uid);
      }

      unsubscribe();
    });
  },
};
</script>
