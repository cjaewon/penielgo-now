module.exports = {
  env: {
    assetPrefix:     
      process.env.NODE_ENV === 'production'
        ? 'https://cjaewon.github.io/penielgo-now'
        : '', // for public folder
  },
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://cjaewon.github.io/penielgo-now'
      : '',
};