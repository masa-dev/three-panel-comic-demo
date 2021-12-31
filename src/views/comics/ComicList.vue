<template>
  <div class="comic-list">
    <h2>漫画一覧</h2>
    <ul class="comic-link-list">
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link"
          ><div class="comic-link">{{ titles[index] }}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      originalPath: "https://buturi.heteml.net/student/2021/toda/comics/",
      comicLength: 0,
      links: [],
      titles: [],
    };
  },
  async mounted() {
    await fetch(`${this.originalPath}countComic.php`)
      .then((res) => res.json())
      .then((data) => {
        this.comicLength = data.count;
      })
      .catch((e) => console.error(e));

    for (let i = 1; i <= this.comicLength; i++) {
      this.links.push(`comics/${i}`);
      await fetch(`${this.originalPath}getData.php?num=${i}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === false) {
            console.error("fetch error: getData file throw error");
          } else {
            this.titles.push(data.title);
          }
        })
        .catch((e) => console.error(e));
    }
  },
};
</script>

<style lang="scss" scoped>
.comic-link-list {
  padding: 0 !important;
  margin-left: 0 !important;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  li {
    width: 49%;
    box-sizing: border-box;
    background-color: rgb(253, 229, 198);
    border: 1px solid rgb(218, 184, 140);
    border-radius: 10px;
    &:nth-child(2n-1) {
      margin-right: 2%;
    }

    &:hover {
      background-color: rgb(241, 215, 184);
    }
  }

  .comic-link {
    padding: 0.7rem 1rem;
  }
}
</style>
