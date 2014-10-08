module.exports = {
  unit: {
    options: {
      reporter: 'spec',
      require: 'test/config/blanket.conf'
    },
    src: [
      './test/config/mocha.conf.js',
      './test/**/*.uspec.js'
    ]
  },
  cov: {
    options: {
      reporter: 'html-cov',
      quiet: true,
      captureFile: 'test/reports/server_test_coverage.html'
    },
    src: [
      './test/config/mocha.conf.js',
      './test/**/*.uspec.js'
    ]
  }
};