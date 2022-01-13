<template>
  <div id="log">
    <h2>ログ</h2>
    <div class="log-input">
      <span>ソートする項目 : </span>
      <select v-model="sortOption.type" @change="sortLog()">
        <option value="startDate" selected>日時</option>
        <option value="comicId">漫画ID</option>
      </select>
      <div id="sort-option">
        <span>並び順 : </span>
        <input
          type="radio"
          id="sort-option-asc"
          checked
          :value="false"
          v-model="sortOption.isDesc"
          @change="sortLog()"
        /><label for="sort-option-asc">昇順</label>
        <input
          type="radio"
          id="sort-option-desc"
          :value="true"
          v-model="sortOption.isDesc"
          @change="sortLog()"
        /><label for="sort-option-desc">降順</label>
      </div>
    </div>
    <div class="log-item-wrapper">
      <div
        class="log-item"
        v-show="logs.length !== 0"
        v-for="(log, index) in logs"
        :key="index"
      >
        <p>漫画ID: {{ log.comicId }}</p>
        <p>
          リンク:
          <router-link :to="`./comics/${log.comicId}`">{{
            titles[log.comicId]
          }}</router-link>
        </p>
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
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/database";

export default {
  data() {
    return {
      originalPath: "https://buturi.heteml.net/student/2021/toda/comics/",
      logs: [],
      sortOption: {
        type: "startDate",
        isDesc: true, // 降順かどうか
      },
      titles: [],
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
    // 更新を手動でできるように関数化する
    fetchLogData(uid) {
      return new Promise((resolve) => {
        const database = firebase.database();
        const logRef = database.ref(`logs/toda/${uid}`);

        logRef.once("value", (snapshot) => {
          this.logs.splice(0);

          snapshot.forEach((childSnapshot) => {
            let childData = childSnapshot.val();
            this.logs.push(childData);
          });

          resolve();
        });
      });
    },
    sortLog() {
      const type = this.sortOption.type;
      const isDesc = this.sortOption.isDesc;

      this.logs.sort((a, b) => {
        return isDesc ? b[type] - a[type] : a[type] - b[type];
      });
    },
  },
  async mounted() {
    let unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        let uid = user.uid;
        let comicLength = 0;

        // 漫画数を取得
        await fetch(`${this.originalPath}countComic.php`)
          .then((res) => res.json())
          .then((data) => {
            comicLength = data.count;
          })
          .catch((e) => console.error(e));

        // タイトルの取得
        for (let i = 1; i <= comicLength; i++) {
          await fetch(`${this.originalPath}getData.php?comic=${i}`)
            .then((res) => res.json())
            .then((data) => {
              if (data.status === false) {
                console.error("fetch error: getData file throw error");
              } else {
                this.titles[i] = data.title;
              }
            })
            .catch((e) => console.error(e));
        }

        // ログを表示
        await this.fetchLogData(uid);
      }

      unsubscribe();
    });
  },
};
</script>

<style lang="scss" scoped>
$input-border-color: rgb(60, 161, 255);
$input-shadow-color: rgb(60, 161, 255, 0.3);

.log-input {
  width: 90%;
  margin: 0 auto;
  font-size: 1.1rem;

  select {
    width: 80%;
    font-size: 1rem;
    background-color: white;
    padding: 10px 20px;
    border: 1px solid gray;
    border-radius: 7px;
    margin: 10px 0;

    &:hover,
    &:focus {
      border-color: $input-border-color;
      box-shadow: 0 0 0 3px $input-shadow-color;
    }

    &:focus {
      outline: none;
    }
  }
  #sort-option {
    label {
      margin-right: 15px;
    }
  }
}

.log-item-wrapper {
  width: 95%;
  max-height: 700px;
  margin: 10px auto;
  overflow-y: auto;

  .log-item {
    background-color: rgb(238, 226, 192);
    padding: 15px 20px;
    border-radius: 15px;
    margin: 20px 0;

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
}
</style>
