<template>
  <div class="group-list">
    <section v-if="group.isAdmin">
      <h3>メンバーリスト</h3>
      <div class="search-user-name">
        <p>以下の入力欄でユーザーを検索できます。</p>
        <p>
          <input
            type="text"
            v-model="filterText"
            placeholder="ユーザー名 または ID を入力"
          />
        </p>
      </div>
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
            <tr v-for="(member, index) in resultFilter" :key="index">
              <td>{{ member.name }}</td>
              <td>{{ member.id }}</td>
              <td>{{ member.email }}</td>
            </tr>
            <tr v-if="resultFilter.length === 0">
              <td>該当するユーザーがありません</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import maskEmail from "../../util/maskEmail";

export default {
  data() {
    return {
      filterText: "",
      group: {
        isAdmin: false,
        members: [],
      },
      sort: {
        key: "",
        isAsc: false,
      },
    };
  },
  computed: {
    resultFilter() {
      return this.group.members.filter((item) => {
        if (this.filterText) {
          return (
            item.name.toLowerCase().indexOf(this.filterText) >= 0 ||
            item.id.toLowerCase().indexOf(this.filterText) >= 0
          );
        } else {
          return true;
        }
      });
    },
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
      const adminRef = database.ref("admin-users");

      // 管理者リストを表示する
      adminRef.get().then((snapshot) => {
        const adminList = snapshot.val();

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

      unsubscribe();
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/mixin";

.search-user-name {
  input {
    @include input();
    margin: 0 20px;
    width: 300px;
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

        &:hover {
          background-color: rgba(181, 216, 235, 0.65);
        }

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

@media (max-width: $responsiveMainWidth) {
  .search-user-name {
    input {
      margin: 0;
      width: 90%;
    }
  }
}
</style>
