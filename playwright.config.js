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
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 5,
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
    trace: "on",
    viewport: null,
    launchOptions: {
      slowMo: 500, //
      args: ["--start-maximized"],
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment to test against mobile viewports or branded browsers
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  // Uncomment if you need to run your local dev server before starting the tests
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
};

module.exports = config;
