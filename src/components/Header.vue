<template>
  <header>
    <div class="header-div">
      <div class="title-bar">
        <h1>3コマ漫画アプリ</h1>
      </div>
      <div class="user-bar">
        <div class="user-link"></div>
        <div class="login-link">
          <router-link to="login">
            <button>ログイン</button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
$button-color: rgb(24, 120, 230);

header {
  background-color: wheat;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);

  .header-div {
    display: flex;
    max-width: 900px;
    text-align: center;
    padding: 5px 20px;
    margin: 0 auto;
    margin-bottom: 10px;
    justify-content: space-between;

    h1 {
      font-size: 1.6em;
      margin: {
        top: 10px;
        bottom: 10px;
      }
    }

    .user-bar {
      display: flex;
      align-items: center;

      .login-link {
        button {
          font-weight: bold;
          color: $button-color;
          padding: 0.5rem 0.75rem;
          background-color: white;
          border: 1px solid $button-color;
          border-radius: 5px;
          transition: 0.3s;

          &:hover {
            color: white;
            background-color: $button-color;
          }

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
