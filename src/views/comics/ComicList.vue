<template>
  <div class="comic-list">
    <h2>漫画一覧</h2>
    <ul class="comic-link-list">
      <li>
        <router-link to="comics/1"
          ><div class="comic-link">泣きっ面に蜂</div>
        </router-link>
      </li>
      <li>
        <router-link to="comics/1"
          ><div class="comic-link">泣きっ面に蜂</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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
    border: 1px solid gray;
    border-radius: 10px;
    &:nth-child(2n-1) {
      margin-right: 2%;
    }
  }

  .comic-link {
    padding: 0.7rem 1rem;
  }
}
</style>
