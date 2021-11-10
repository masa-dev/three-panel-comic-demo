<template>
  <article>
    <h2>泣きっ面に蜂</h2>

    <div class="flex-container">
      <div class="text-wrap flex-left-item">
        <h3>状況</h3>
        <p style="white-space: pre-line">{{ firstImage.longText }}</p>
      </div>
      <div class="page-wrapper flex-right-item">
        <div class="comic-page">
          <img v-bind:src="firstImage.url" alt="" />
          <p>{{ firstImage.shortText }}</p>
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
        :options="{
          align: 'center',
          circular: true,
          deceleration: 0.05,
          duration: 350,
          bound: false,
          renderOnlyVisible: true,
        }"
        :plugins="plugins"
        class="flex-right-item"
        @changed="changePanel"
      >
        <div
          v-for="page in secondImages"
          :key="page.id"
          :id="`page-${page.id}`"
          class="panel comic-page"
        >
          <img :src="page.url" alt="" />
          <p>{{ page.shortText }}</p>
        </div>
        <span slot="viewport" class="flicking-arrow-prev is-circle"></span>
        <span slot="viewport" class="flicking-arrow-next is-circle"></span>
        <div slot="viewport" class="flicking-pagination"></div>
      </Flicking>
    </div>
    <p style="text-align: center; display: none">
      選択番号：<span id="selected-index">1</span>
    </p>

    <div class="flex-container">
      <div class="text-wrap flex-left-item">
        <h3>感情</h3>
        <p>{{ selected.thirdText }}</p>
      </div>
      <div class="page-wrapper flex-right-item">
        <div class="comic-page">
          <img id="emotional-image" :src="selected.imageUrl" alt="" />
          <p id="emotional-text">{{ selected.thirdText }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import firebaseConfig from "@/util/firebaseConfig.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import { Flicking } from "@egjs/vue-flicking";
import { Arrow, Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import axios from "axios";

export default {
  data() {
    return {
      firstImage: {
        url: "",
        shortText: "",
        longText: "",
      },
      secondImages: [],
      thirdImages: [],
      selected: {
        index: null,
        imageUrl: "",
        secondText: "",
        thirdText: "",
      },
      plugins: [new Arrow(), new Pagination({ type: "fraction" })],
    };
  },
  components: {
    Flicking: Flicking,
  },
  methods: {
    changePanel(e) {
      this.selectedIndex = e.index;
      if (this.thirdImages.length > 0) {
        this.selected.imageUrl = this.thirdImages[e.index].url;
        this.selected.thirdText = this.thirdImages[e.index].text;
      }
      if (this.secondImages.length > 0) {
        this.selected.secondText = this.secondImages[e.index].longText;
      }
    },
  },
  async mounted() {
    const comicId = this.$route.params.id;

    firebase.initializeApp(firebaseConfig);
    firebase.auth();

    const comicStorageRef = firebase
      .storage()
      .ref()
      .child("comics")
      .child(comicId.toString());

    comicStorageRef
      .child("0.png")
      .getDownloadURL()
      .then((url) => {
        this.firstImage.url = url;
      });

    // スライド用の画像を取得
    for (let i = 0; i < 4; i++) {
      let url = await getImageUrl(comicId, `1-${i}.png`);
      this.secondImages.push({
        fileName: `1-${i}.png`,
        url: url,
        shortText: "",
        longText: "",
      });
    }

    // 感情の画像取得
    for (let i = 0; i < 4; i++) {
      let url = await getImageUrl(comicId, `2-${i}.png`);

      this.thirdImages.push({
        url: url,
        text: "",
      });
    }
    this.selected.imageUrl = this.thirdImages[0].url;

    // テキストの取得
    comicStorageRef
      .child("text.json")
      .getDownloadURL()
      .then((url) => {
        axios(url).then(({ data }) => {
          this.firstImage.shortText = data.first.short;
          this.firstImage.longText = data.first.long;
          for (let i = 0; i < 4; i++) {
            this.secondImages[i].shortText = data.second[i].short;
            this.secondImages[i].longText = data.second[i].long;
            this.thirdImages[i].text = data.third[i];
          }
          this.selected.secondText = data.second[0].long;
          this.selected.thirdText = data.third[0];
        });
      });

    // "flicking-arrow-disabled" classの削除
    const deleteClassName = "flicking-arrow-disabled";
    const arrowElement = document.getElementsByClassName(deleteClassName);
    for (let i = 0; i < 2; i++) {
      arrowElement[0].classList.remove(deleteClassName);
    }
    // スタイルの調整
    document.getElementsByClassName("flicking-camera")[0].style.height =
      "unset";

    function getImageUrl(refId, name) {
      return new Promise((resolve) => {
        const comicStorageRef = firebase
          .storage()
          .ref()
          .child("comics")
          .child(refId.toString());

        comicStorageRef
          .child(name)
          .getDownloadURL()
          .then((url) => {
            resolve(url);
          });
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@import url("../../../node_modules/@egjs/vue-flicking/dist/flicking.css");

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
    width: 60%;
  }

  .flicking-pagination {
    text-align: center;
  }

  .flicking-camera {
    height: unset;
  }
}

.panel,
.comic-page {
  height: 220px;
  width: 308px;
  margin: 10px;
  text-align: center;
  background-color: bisque;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(70, 39, 0, 0.301);
}

.comic-page img {
  pointer-events: none;
}

.comic-page > img {
  height: 90%;
  width: auto;
  margin: 0 auto;
}

.page-wrapper {
  text-align: center;
}

.page-wrapper > .comic-page {
  display: inline-block;
  vertical-align: top;
}

.comic-page > p {
  margin: 0;
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

@media only screen and (max-width: 600px) {
  .panel,
  .comic-page {
    height: 200px;
    width: 300px;
    margin: 10px;
    text-align: center;
    background-color: bisque;
    border-radius: 20px;
  }
  .flicking-arrow-prev,
  .flicking-arrow-next {
    transform: scale(0.7, 0.7);
    top: 35%;
  }
  .flicking-pagination-bullet {
    padding: 1px;
  }
}
</style>
