<template>
  <footer>
    <div class="footer-container">
      <div class="footer-col">
        <h4>使用ライブラリ</h4>
        <ul>
          <li>
            <a
              href="https://naver.github.io/egjs-flicking/"
              target="_blank"
              rel="noopener noreferrer"
              >Flicking</a
            >
          </li>
          <li>
            <a
              href="https://github.com/naver/egjs-flicking-plugins"
              target="_blank"
              rel="noopener noreferrer"
              >Flicking Plugins</a
            >
          </li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>使用フォント</h4>
        <ul>
          <li>
            <a
              href="https://fonts.google.com/specimen/Kosugi+Maru"
              target="_blank"
              rel="noopener noreferrer"
              >Kosugi Maru</a
            >
          </li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>研究室サイトリンク</h4>
        <ul>
          <li>
            <a href="https://buturi.heteml.net/student/2021/">2021研究室</a>
          </li>
          <li>
            <a href="https://buturi.heteml.net/student/2021/toda/"
              >戸田の卒研サイト</a
            >
          </li>
        </ul>
      </div>
    </div>
    <p>2021年 卒業研究進捗</p>
  </footer>
</template>

<style lang="scss">
@import "../styles/variables";

footer {
  padding: 5px;
  background-color: rgb(241, 186, 114);
  text-align: center;

  .footer-container {
    width: 800px;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 0 auto;
    display: flex;
    text-align: left;
  }

  .footer-col {
    width: calc(100% / 3);
    padding: 0 20px;

    &:nth-child(n + 2) {
      border-left: 1px solid rgb(141, 101, 49);
    }

    h4 {
      margin: 10px 0;
      font-size: 1.15rem;
    }

    ul {
      padding: 0;
    }

    ul li {
      font-size: 1rem;
      padding: 5px 0 0;
      list-style: none;
    }
  }

  > p {
    margin: 5px 0;
  }
}
@media only screen and (max-width: $responsiveMainWidth) {
  footer {
    .footer-container {
      padding: 10px 5px;
      width: 95%;
    }

    .footer-col {
      padding: 0 10px;

      h4 {
        margin: 10px 0;
        font-size: 1rem;
      }

      ul li {
        font-size: 1rem;
      }
    }
  }
}
</style>
