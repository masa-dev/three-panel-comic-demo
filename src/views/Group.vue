<template>
  <div id="group">
    <h2>グループ設定</h2>
    <nav class="group-nav" v-if="isAdmin">
      <div class="group-nav-inner">
        <router-link to="/group">グループ情報</router-link>
        <router-link to="/group/members">メンバーリスト</router-link>
        <router-link to="/group/custom">グループの編集</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    isAdmin() {
      return this.$store.state.user.isAdmin;
    },
  },
};
</script>

<style lang="scss" scoped>
nav.group-nav {
  position: relative;
  margin: 20px 5px 30px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 1px;
    background-color: rgb(180, 180, 180);
    z-index: -1;
  }

  .group-nav-inner {
    display: flex;
    z-index: 999;
    overflow-x: auto;

    // スクロールバーを消す
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    a {
      color: rgb(66, 66, 66);
      font-weight: bold;
      padding: 10px 0;
      margin-right: 20px;
      text-decoration: none;
      white-space: nowrap;

      &:hover {
        color: rgb(128, 128, 128);
      }

      &.router-link-exact-active {
        color: rgb(252, 149, 31);
        border-bottom: 2px solid rgb(252, 149, 31);
      }
    }
  }
}
</style>
