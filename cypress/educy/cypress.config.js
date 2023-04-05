const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  requestTimeout: 60000,
  responseTimeout: 60000
})
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false
  },
});
// module.exports = defineConfig({
//   e2e: {
//     testIsolation: false,
//   },
// })