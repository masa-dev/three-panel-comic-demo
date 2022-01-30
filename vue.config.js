module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/three-panel-comic-demo/" : "/", //GitHub Pages用
  //process.env.NODE_ENV === "production" ? "/student/2021/toda/threePanelComic/" : "/", //heteml用
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },
  pages: {
    index: {
      entry: "src/main.js",
      title: "認知行動療法３コマ漫画",
    },
  },
};
