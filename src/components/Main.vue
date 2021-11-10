<template>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
main {
  width: 900px;
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 0 auto 20px;
  border: 1px solid rgb(146, 107, 58);
  background-color: rgba(255, 228, 196, 0.3);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2), -5px 5px 5px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 1.5rem;
    padding: 10px 15px;
    margin: 15px auto;
    background-color: rgb(250, 207, 151);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }

  h3 {
    font-size: 1.17rem;
    padding: 10px;
    padding-left: 5px;
    margin-left: 10px;
    border-left: 5px solid rgb(238, 158, 54);

    &::before {
      content: "： ";
    }
  }

  p {
    line-height: 1.4em;
  }
}
</style>
