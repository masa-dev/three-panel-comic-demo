module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/three-panel-comic-demo/" : "/",
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
