// @ts-check
const { devices } = require("@playwright/test");

let outputDirectory = String("./test-environment/test-reports/");

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: "./test-environment/test-cases/",

  /* Maximum time one test can run for. */
  timeout: 600 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 15000,
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  outputDir: `${outputDirectory}/trace-output/`,
  reporter: [
    ["html", { outputFolder: `${outputDirectory}/playwright-report/` }],
  ],
  /* Login session storage */
  globalSetup: require.resolve("./test-environment/test-assets/global-setup"),
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: "chromium",
    storageState: "loginState.json",
    actionTimeout: 15000,
    baseURL: "https://play.juicemind.com/",
    ignoreHTTPSErrors: true,
    headless: true,
    permissions: ["clipboard-read"],
    video: "on",
    trace: "on",
    viewport: null,
    launchOptions: {
      slowMo: 500, //
      args: ["--start-maximized"],
    },
  },
};

module.exports = config;
