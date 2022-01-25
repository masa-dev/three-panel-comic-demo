<template>
  <div id="log">
    <h2>ログ</h2>
    <div class="log-user-info">
      <p>
        <strong>{{ userInfo.name }}</strong> さんのログ
      </p>
    </div>
    <div class="log-process">
      <p>進行度表</p>
      <table class="log-process-table">
        <thead>
          <tr>
            <th>タイトル</th>
            <th>進捗</th>
            <th>閲覧数</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(process, index) in processList"
            :key="index"
            v-show="process"
            :class="index === 1 ? 'first-child' : ''"
          >
            <td>
              <router-link :to="`/comics/${process.comicId}`">{{
                process.comicTitle
              }}</router-link>
            </td>
            <td :class="process.executed ? 'log-done' : 'log-yet'">
              {{ process.executedText }}
            </td>
            <td>{{ process.viewCount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="log-input">
      <label for="sort-option-select">ソートする項目 : </label>
      <select
        v-model="sortOption.type"
        @change="sortLog()"
        id="sort-option-select"
      >
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
      <div class="log-item" v-if="logs.length === 0">
        <p>ログがありません</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import parseToBoolean from "@/util/parseToBoolean";

export default {
  data() {
    return {
      originalPath: "https://buturi.heteml.net/student/2021/toda/comics/",
      logs: [],
      userInfo: {
        name: "",
      },
      sortOption: {
        type: "startDate",
        isDesc: true, // 降順かどうか
      },
      titles: [],
      processList: [],
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
    setProcess() {
      const comicLength = this.titles.length;

      this.processList.push(false);

      for (let i = 1; i <= comicLength - 1; i++) {
        const comicId = i.toString();
        const viewCount = this.countComicViews(comicId);
        const executed = viewCount > 0;

        this.processList.push({
          comicId: comicId,
          comicTitle: this.titles[i],
          executed: executed,
          executedText: executed ? "終了済み" : "未完了",
          viewCount: viewCount,
        });
      }
    },
    countComicViews(comicId = "") {
      const filteredArray = this.logs.filter((item) => {
        return item.done === true && item.comicId === comicId;
      });

      return filteredArray.length;
    },
  },
  async mounted() {
    let unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        let uid;
        let comicLength = 0;

        if (this.$route.query.has_uid) {
          let has_uid = parseToBoolean(this.$route.query.has_uid);

          if (has_uid && this.$store.state.log.searchId) {
            uid = this.$store.state.log.searchId;
          } else {
            uid = user.uid;
          }
        } else {
          uid = user.uid;
        }

        // ログの指定があるかどうか
        if (this.$store.state.log.searchId) {
          uid = this.$store.state.log.searchId;
        } else {
          uid = user.uid;
        }

        const userRef = firebase.database().ref(`users/${uid}`);
        userRef.get().then((snapshot) => {
          this.userInfo.name = snapshot.val().username;
        });

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
        // ログをソートする
        this.sortLog();
        // 進行度を表示する
        this.setProcess();
      }

      unsubscribe();
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables";
@import "../styles/mixin";

$doneColor: rgb(6, 148, 230);
$yetColor: rgb(235, 95, 31);

.log-user-info {
  width: 90%;
  margin: 0 auto;
  font-size: 1.1rem;
}

.log-process {
  margin: 15px 20px;

  > p {
    margin-bottom: 5px;
  }

  table.log-process-table {
    background-color: rgb(250, 249, 249);
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 10px;
    box-shadow: 0.5px 0.5px gray, -0.5px 0.5px gray, 0.5px -0.5px gray,
      -0.5px -0.5px gray;

    thead {
      tr > th {
        background-color: rgba(207, 234, 247, 0.65);
        font-size: 0.9em;
        text-align: left;
        user-select: none;
        position: relative;

        &:first-child {
          border-radius: 10px 0 0 0;
        }
        &:last-child {
          border-radius: 0 10px 0 0;
        }
      }
    }

    th,
    td {
      padding: 0.7rem 1rem;
      border-left: 1px solid rgb(219, 219, 219);

      &:first-child {
        border-left: none;
      }
    }

    th {
      border-bottom: 1px solid gray;
    }

    td {
      border-top: 1px solid rgb(219, 219, 219);

      &.log-done {
        color: $doneColor;
      }
      &.log-yet {
        color: $yetColor;
      }
    }

    tr.first-child > td {
      border-top: none;
    }
  }
}

.log-input {
  width: 90%;
  margin: 0 auto;
  font-size: 1.1rem;

  select {
    @include input();
    width: 80%;
    margin: 10px 0;
    cursor: pointer;
  }

  #sort-option {
    input[type="radio"] {
      accent-color: $inputColor;
      margin-right: 0;
      cursor: pointer;
    }
    label {
      padding: 0 0.3rem;
      margin-right: 15px;
      cursor: pointer;
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
          color: $doneColor;
        }

        &yet {
          color: $yetColor;
        }
      }
    }
  }
}

@media (max-width: $responsiveMainWidth) {
  .log-process {
    margin: 15px 0;

    > p {
      margin-left: 10px;
    }

    table.log-process-table {
      width: 95%;
      margin: 0 auto;
    }
  }
}
</style>
