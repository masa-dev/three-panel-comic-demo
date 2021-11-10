<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header: Header,
    Main: Main,
    Footer: Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap");

body {
  margin: 0;
  font-family: "Kosugi Maru", "Meiryo", serif;
  background-color: rgba(255, 228, 196, 0.199);
}
</style>
