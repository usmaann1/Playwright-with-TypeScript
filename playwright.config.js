// playwright.config.js
module.exports = {
  testDir: './test-environment/test-cases/',
  timeout: 600 * 1000,
  expect: {
    timeout: 15000,
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 1,
  workers: process.env.CI ? 1 : 3,
  outputDir: './test-environment/test-reports/trace-output/',
  reporter: [
    ['html', { outputFolder: './test-environment/test-reports/playwright-report/' }],
  ],
  globalSetup: require.resolve('./test-environment/test-assets/global-setup'),
  use: {
    viewport: { width: 1920, height: 1080 },
    browserName: 'chromium',
    storageState: 'loginState.json',
    actionTimeout: 15000,
    baseURL: 'https://play.juicemind.com/',
    ignoreHTTPSErrors: true,
    headless: true,
    permissions: ['clipboard-read'],
    video: 'on', // Enable video recording
    trace: 'on',
    launchOptions: {
      slowMo: 500,
      args: [],
    },
  },
};
