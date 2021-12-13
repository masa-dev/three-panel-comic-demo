module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/three-panel-comic-demo/" : "/",
  pwa: {
    workboxOptions: {
      skipWaiting: true
    }
  }
};
