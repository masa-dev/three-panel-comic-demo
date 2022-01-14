<template>
  <article>
    <h2>泣きっ面に蜂</h2>

    <div class="flex-container">
      <div class="text-wrap flex-left-item">
        <h3>出来事</h3>
        <p>起こった出来事のスライドです。</p>
      </div>
      <div class="page-wrapper flex-right-item">
        <div class="comic-page">
          <img v-bind:src="imageUrl.first" alt="" />
        </div>
      </div>
    </div>

    <div class="flex-container">
      <div class="text-wrap flex-left-item">
        <h3>認識</h3>
        <p id="slide-message">{{ selected.secondText }}</p>
        <p style="color: #28a745">右のスライドを動かして選んでください。</p>
      </div>
      <Flicking
        class="flex-right-item"
        ref="flicking"
        :options="{
          autoInit: false,
          align: 'center',
          circular: true,
          deceleration: 0.05,
          duration: 350,
          bound: false,
          renderOnlyVisible: true,
        }"
        :plugins="plugins"
        @changed="changePanel"
      >
        <div
          v-for="(url, index) in imageUrl.second"
          :key="index"
          :id="`page-${index}`"
          class="panel comic-page"
        >
          <img :src="url" alt="" />
        </div>
        <span slot="viewport" class="flicking-arrow-prev is-circle"></span>
        <span slot="viewport" class="flicking-arrow-next is-circle"></span>
        <div slot="viewport" class="flicking-pagination"></div>
      </Flicking>
    </div>
    <p style="text-align: center; display: none">
      選択番号: <span id="selected-index">1</span>
    </p>

    <div class="flex-container">
      <div class="text-wrap flex-left-item">
        <h3>感情</h3>
        <p>認識に対応したスライドが表示されます。</p>
      </div>
      <div class="page-wrapper flex-right-item">
        <div class="comic-page">
          <img
            id="emotional-image"
            :src="imageUrl.third[selected.index]"
            alt=""
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
//import firebaseConfig from "@/util/firebaseConfig.js";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { Flicking } from "@egjs/vue-flicking";
import { Arrow, Pagination } from "@egjs/flicking-plugins";

export default {
  data() {
    return {
      originalPath: "https://buturi.heteml.net/student/2021/toda/comics/",
      pageLength: 0,
      imageUrl: {
        first: "",
        second: [],
        third: [],
      },
      selected: {
        index: null,
      },
      log: {
        key: null,
        finished: [true],
        isSend: false,
      },
      plugins: [new Arrow(), new Pagination({ type: "fraction" })],
    };
  },
  components: {
    Flicking: Flicking,
  },
  methods: {
    changePanel(e) {
      this.selected.index = e.index;
      let count = 0;

      if (this.pageLength > 0) {
        this.log.finished[e.index] = true;
      }

      for (let i = 0; i < this.pageLength; i++) {
        if (this.log.finished[i] === true) {
          count++;
        }
      }

      if (count === this.pageLength) {
        this.sendLog(true);
      }
    },
    sendLog(isDone) {
      if (this.log.isSend) return;

      const comicId = this.$route.params.id;
      const uid = this.$store.state.user.uid;
      const database = firebase.database();

      if (this.$store.state.auth.isAuth) {
        let logRef;
        let currentDate = new Date();

        // ログの参照設定
        // ログを作成する際は自動でIDを振る
        if (this.log.key) {
          logRef = database.ref(`logs/toda/${uid}/${this.log.key}`);
        } else {
          logRef = database.ref(`logs/toda/${uid}`).push();
          this.log.key = logRef.key;
        }

        // ログの送信
        if (isDone === false) {
          logRef.set({
            comicId: comicId,
            startDate: currentDate.getTime(),
            done: false,
          });
        } else {
          logRef.update({
            endDate: currentDate.getTime(),
            done: true,
          });

          this.log.isSend = true;
        }
      }
    },
  },
  async mounted() {
    const comicId = this.$route.params.id;
    this.selected.index = 0;
    this.imageUrl.first = `${this.originalPath}/${comicId}/1.png`;

    // ページの長さを取得する
    await fetch(`${this.originalPath}countPage.php?comic=${comicId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === false) {
          alert("漫画が存在しません");
        } else {
          this.pageLength = data.count;
        }
      })
      .catch((e) => console.error(e));

    for (let i = 1; i <= this.pageLength; i++) {
      this.imageUrl.second.push(`${this.originalPath}${comicId}/2-${i}.png`);
      this.imageUrl.third.push(`${this.originalPath}${comicId}/3-${i}.png`);
    }

    // 短時間待機する
    await sleep(100);
    this.$refs.flicking.init();

    // ログの初期化
    this.sendLog(false);

    // スリープ関数
    function sleep(ms = 1000) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";
@import url("../../../node_modules/@egjs/vue-flicking/dist/flicking.css");
@import url("../../../node_modules/@egjs/flicking-plugins/dist/arrow.css");

h2 {
  font-size: 1.3rem;
  margin: 0;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;

  .flex-left-item {
    box-sizing: border-box;
    width: 40%;
    padding-right: 10px;
  }

  .flex-right-item {
    padding-bottom: 10px;
    width: 60%;

    &.flicking-viewport {
      position: relative;

      .flicking-pagination {
        width: 100%;
        position: absolute;
        bottom: 0;
        text-align: center;
      }

      .flicking-camera {
        height: unset;
      }

      .flicking-pagination-bullet {
        padding: 2px;
      }

      .flicking-arrow-next {
        animation-name: arrow-next;
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }

      .flicking-arrow-prev {
        animation-name: arrow-prev;
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
    }
  }
}

.panel,
.comic-page {
  display: inline-block;
  vertical-align: top;
  height: 200px;
  width: 280px;
  margin: 10px;
  text-align: center;
  background-color: bisque;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(70, 39, 0, 0.301);

  > img {
    pointer-events: none;
    height: 100%;
    width: auto;
    margin: 0 auto;
    border-radius: inherit;
  }

  > p {
    margin: 0;
  }
}

.page-wrapper {
  text-align: center;
}

/* アニメーションの軌道の調整部分 */

@keyframes arrow-next {
  /* 0% */
  from {
    transform: translateX(-10px) translateY(-50%);
  }
  80% {
    transform: translateX(-10px) translateY(-50%);
  }
  90% {
    transform: translateX(0px) translateY(-50%);
  }
  /* 100% */
  to {
    transform: translateX(-10px) translateY(-50%);
  }
}

@keyframes arrow-prev {
  from {
    transform: translateX(10px) translateY(-50%);
  }
  80% {
    transform: translateX(10px) translateY(-50%);
  }
  90% {
    transform: translateX(0px) translateY(-50%);
  }
  to {
    transform: translateX(10px) translateY(-50%);
  }
}

@media only screen and (max-width: $responsiveMainWidth) {
  .panel,
  .comic-page {
    height: 200px;
    width: 280px;
    margin: 10px;
    text-align: center;
    background-color: bisque;
    border-radius: 20px;

    .flicking-arrow-prev,
    .flicking-arrow-next {
      transform: scale(0.7, 0.7);
      top: 35%;
    }

    .flicking-pagination-bullet {
      padding: 1px;
    }
  }

  .flex-container {
    display: unset;
    flex-wrap: unset;

    .flex-left-item {
      width: 100%;
    }

    .flex-right-item {
      width: 100%;
    }
  }
}
</style>
