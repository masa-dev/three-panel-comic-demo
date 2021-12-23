<template>
  <div id="group">
    <h2>グループ</h2>
    <div v-if="group.isJoin === true">
      <h3>グループ情報</h3>
      <p>グループ名 : {{ group.name }}</p>
      <p>管理者</p>
      <ul>
        <li v-for="(admin, index) in group.admins" :key="index">
          {{ admin }}
        </li>
      </ul>
      <p>メンバー</p>
      <ul>
        <li v-for="(member, index) in group.members" :key="index">
          {{ member }}
        </li>
      </ul>
      <div v-if="group.isAdmin">
        <p>あなたは管理者です</p>
      </div>
    </div>
    <div v-if="group.isJoin === false">
      <p>現在、グループに所属していません。</p>
      <div class="create-group">
        <h3>グループを作成する</h3>
        <input
          type="text"
          placeholder="作成するグループ名"
          v-model="input.groupName"
        />
        <button @click="createNewGroup">グループを作成する</button>
      </div>
      <div class="joinGroup">
        <h3>グループに所属する</h3>
      </div>
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
      user: {
        uid: "",
      },
      group: {
        isJoin: false,
        isAdmin: false,
        name: "",
        members: [],
        admins: [],
      },
      input: {
        groupName: "",
      },
    };
  },
  methods: {
    createNewGroup() {
      // 入力されていない場合
      if (!this.input.groupName) {
        return;
      }

      const database = firebase.database();
      const newGroupRef = database.ref("groups").push();
      const userRef = database.ref("users").child(this.user.uid);
      const groupKey = newGroupRef.key;

      newGroupRef.set({
        name: this.input.groupName,
        admins: {
          [this.user.uid]: true,
        },
        members: {
          [this.user.uid]: true,
        },
      });

      userRef.update({
        group: groupKey,
      });
    },
  },
  mounted() {
    firebase.initializeApp(firebaseConfig);

    let unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let user = firebase.auth().currentUser;
        let database = firebase.database();
        let usersRef = database.ref("users");
        let userGroupRef = database.ref(`users/${user.uid}/group`);

        this.user.uid = user.uid;

        userGroupRef.on("value", (userSnapshot) => {
          let groupId = userSnapshot.val();

          // グループに所属していない場合
          if (!groupId) {
            this.group.isJoin = false;
            return;
          }

          let joinGroupRef = database.ref(`groups/${groupId}`);

          joinGroupRef.on("value", (groupSnapshot) => {
            let group = groupSnapshot.val();
            this.group.name = group.name;

            if (group.members[user.uid]) {
              this.group.isAdmin = group.admins[user.uid] ? true : false;

              const memberIdArray = Object.keys(group.members);
              const adminIdArray = Object.keys(group.admins);

              this.group.isJoin = true;

              // 管理者一覧の取得
              this.group.admins.splice(0);

              for (let adminId of adminIdArray) {
                if (group.admins[adminId]) {
                  usersRef
                    .child(adminId)
                    .child("username")
                    .get()
                    .then((userSnapshot) => {
                      let userName = userSnapshot.val();
                      if (userName) {
                        this.group.admins.push(userName);
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              }

              // メンバー一覧の取得
              this.group.members.splice(0);
              for (let memberId of memberIdArray) {
                if (group.members[memberId]) {
                  usersRef
                    .child(memberId)
                    .child("username")
                    .get()
                    .then((usersSnapshot) => {
                      let userName = usersSnapshot.val();
                      if (userName) {
                        this.group.members.push(userName);
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              }
            } else {
              this.group.isJoin = false;
            }
          });
        });
      }

      unsubscribe();
    });
  },
};
</script>
