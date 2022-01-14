<template>
  <div class="group-info">
    <section>
      <h3>グループ情報</h3>
      <table class="group-info-table">
        <tbody>
          <tr>
            <td>グループ名</td>
            <td>:</td>
            <td>{{ group.name }}</td>
          </tr>
          <tr>
            <td>説明</td>
            <td>:</td>
            <td>{{ group.description }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h3>管理者一覧</h3>
      <ul>
        <li v-for="(admin, index) in group.admins" :key="index">{{ admin }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/database";

export default {
  data() {
    return {
      group: {
        isAdmin: false,
        name: "",
        description: "",
        admins: [],
      },
    };
  },
  mounted() {
    const unsubscribe = firebase.auth().onAuthStateChanged(() => {
      const database = firebase.database();
      const userRef = database.ref("users");
      const groupRef = database.ref("group");
      const adminRef = database.ref("admin-users");

      // 管理者リストを表示する
      adminRef.get().then((snapshot) => {
        const adminList = snapshot.val();
        this.group.admins.splice(0);

        for (let adminName in adminList) {
          if (adminList[adminName]) {
            userRef
              .child(adminName)
              .child("username")
              .get()
              .then((adminSnapshot) => {
                this.group.admins.push(adminSnapshot.val());
              });
          }
        }
      });

      // グループ情報を取得する
      groupRef.get().then((snapshot) => {
        const groupInfo = snapshot.val();
        this.group.name = groupInfo.name;
        this.group.description = groupInfo.description;
      });

      unsubscribe();
    });
  },
};
</script>

<style lang="scss" scoped>
table.group-info-table {
  tr > td {
    font-size: 1.1rem;
    padding: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
}
</style>
