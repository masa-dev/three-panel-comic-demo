<template>
  <div id="log">
    <h2>ログ</h2>
    <div class="log-item" v-for="(log, index) in logs" :key="index">
      <p>漫画ID: {{ log.comicId }}</p>
      <p>
        実行状況:
        <span :class="log.done ? 'log-done' : 'log-yet'">{{
          log.done ? "終了済み" : "未完了"
        }}</span>
      </p>
      <p>開始日時: {{ convertDate(log.startDate) }}</p>
      <p v-if="log.endDate">終了日時: {{ convertDate(log.endDate) }}</p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/database";

export default {
  data() {
    return {
      logs: [],
    };
  },
  methods: {
    convertDate(timestamp) {
      let date = new Date(timestamp);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();

      let str = `${year}年 ${month}月${day}日 ${hours}:${minutes} ${seconds}秒`;

      return str;
    },
  },
  mounted() {
    let unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let uid = user.uid;
        const database = firebase.database();
        const logRef = database.ref(`logs/toda/${uid}`);

        logRef.on("value", (snapshot) => {
          this.logs.splice(0);

          snapshot.forEach((childSnapshot) => {
            let childData = childSnapshot.val();
            this.logs.push(childData);
          });
        });
      }

      unsubscribe();
    });
  },
};
</script>

<style lang="scss" scoped>
.log-item {
  padding: 15px 20px;
  margin: 20px 0;
  background-color: rgb(238, 226, 192);
  border-radius: 15px;

  p {
    margin: {
      top: 0px;
      bottom: 0px;
    }

    span.log- {
      &done {
        color: rgb(6, 148, 230);
      }

      &yet {
        color: rgb(235, 95, 31);
      }
    }
  }
}
</style>
