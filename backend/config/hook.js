module.exports = {
  settings: {
    // ...
    algolia: {
      enabled: true,
      applicationId: 'VY1QDMCLPW',
      apiKey: '010f9f0bf7a16d7b98149442c61c291f',
      debug: true,
      prefix: (process.env.ALGOLIA_ENV || "dev"),
    },
  }
};
