const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { preprendTransformerToOptions } = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  return config;
}


module.exports = defineConfig({
  defaultCommandTimeout: 15000,

  env: {
    url: "https://magento.softwaretestingboard.com/",
  },
  reporter: 'cypress-mochawesome-reporter',

  retries: {
    runMode: 1,

  },
  projectId: "",


  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/*.feature'
  },
});
