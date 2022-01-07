<template>
  <div id="group">
    <h2>グループ設定</h2>
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
    <section v-if="group.isAdmin">
      <h3>メンバーリスト</h3>
      <div class="user-table-wrapper">
        <table class="group-member-list">
          <thead>
            <tr>
              <th @click="sortMemberBy('name')" :class="addClass('name')">
                ユーザー名
                <b-icon-caret-down-fill></b-icon-caret-down-fill
                ><b-icon-caret-up-fill></b-icon-caret-up-fill>
              </th>
              <th @click="sortMemberBy('id')" :class="addClass('id')">
                ユーザーID
                <b-icon-caret-down-fill></b-icon-caret-down-fill>
                <b-icon-caret-up-fill></b-icon-caret-up-fill>
              </th>
              <th @click="sortMemberBy('email')" :class="addClass('email')">
                メール
                <b-icon-caret-down-fill></b-icon-caret-down-fill
                ><b-icon-caret-up-fill></b-icon-caret-up-fill>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(member, index) in group.members" :key="index">
              <td>{{ member.name }}</td>
              <td>{{ member.id }}</td>
              <td>{{ member.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
//import firebaseConfig from "@/util/firebaseConfig.js";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import maskEmail from "../util/maskEmail";

export default {
  data() {
    return {
      group: {
        isAdmin: false,
        name: "",
        description: "",
        members: [],
        admins: [],
      },
      sort: {
        key: "",
        isAsc: false,
      },
    };
  },
  methods: {
    sortMemberBy(key) {
      if (this.sort.key === key) {
        this.sort.isAsc = !this.sort.isAsc;
      } else {
        this.sort.key = key;
        this.sort.isAsc = true;
      }

      this.group.members.sort((a, b) => {
        if (this.sort.isAsc) {
          if (a[key] > b[key]) return 1;
          else if (a[key] < b[key]) return -1;
          else return 0;
        } else {
          if (a[key] < b[key]) return 1;
          else if (a[key] > b[key]) return -1;
          else return 0;
        }
      });
    },
    addClass(key) {
      return {
        asc: this.sort.key === key && this.sort.isAsc,
        desc: this.sort.key === key && !this.sort.isAsc,
      };
    },
  },
  mounted() {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
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

        // 管理者チェック
        if (adminList[user.uid]) {
          this.group.isAdmin = true;
          const userHideRef = database.ref("users-hide");

          userRef.get().then((userSnapshot) => {
            let users = userSnapshot.val();
            for (let uid in users) {
              userHideRef
                .child(uid)
                .get()
                .then((userHideSnapshot) => {
                  let email = userHideSnapshot.val().email;

                  this.group.members.push({
                    name: users[uid].username,
                    id: uid,
                    email: maskEmail(email),
                  });
                })
                .catch(() => {
                  this.group.members.push({
                    name: users[uid].username,
                    id: uid,
                    email: "メールアドレスがありません",
                  });
                });
            }
          });
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
  }
}

.user-table-wrapper {
  overflow-x: auto;
  table.group-member-list {
    width: 100%;
    min-width: 600px;
    background-color: rgb(250, 249, 249);
    border-collapse: collapse;
    border-radius: 10px;

    thead {
      border-bottom: 1px solid gray;

      tr > th {
        background-color: rgba(207, 234, 247, 0.65);
        font-size: 0.9em;
        text-align: left;
        user-select: none;
        cursor: pointer;
        position: relative;

        &:first-child {
          border-radius: 10px 0 0 0;
        }
        &:last-child {
          border-radius: 0 10px 0 0;
        }

        svg.b-icon {
          position: absolute;
          right: 10px;
          width: 13px;
          height: 13px;
          display: none;
        }

        &.asc,
        &.desc {
          padding-right: 1.5rem;
        }

        &.asc > .bi-caret-down-fill,
        &.desc > .bi-caret-up-fill {
          display: inline-block;
        }
      }
    }

    th,
    td {
      padding: 0.7rem 1rem;
      border-left: 1px solid rgb(219, 219, 219);

      &:first-child {
        border: none;
      }
    }

    tr {
      border-top: 1px solid rgb(219, 219, 219);

      &:first-child {
        border: none;
      }
    }
  }
}
</style>
