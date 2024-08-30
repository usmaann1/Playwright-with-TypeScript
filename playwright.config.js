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
    timeout: 30000,
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
    ["html", { outputFolder: `${outputDirectory}` }],
  ],
  /* Login session storage */
  globalSetup: require.resolve("./test-environment/test-assets/global-setup"),
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    storageState: "loginState.json",
    actionTimeout: 15000,
    baseURL: "https://play.juicemind.com/",
    ignoreHTTPSErrors: true,
    headless: true,
    permissions: ["clipboard-read"],
    video: "on",
    trace: "on",
    viewport: { width: 3280, height: 1672 },
    trace: {
      mode: 'retain-on-failure',
      attachments: true,
      screenshots: true,
      snapshots: true,
      sources: true,
    },
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
};

module.exports = config;
