import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';
import { on } from 'events';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./test-environment/test-cases/",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries:0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['json-summary', { outputFile: 'summary.json' }],
    ['playwright-json-summary-reporter'],
    ['html'], // other reporters
    ['dot']
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 8 * 60 * 1000,
  use: {
    viewport: { width: 1920, height: 1080 },
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "https://play.juicemind.com/",
    headless:true,
    actionTimeout: 15000,
    permissions: ['notifications'],
    screenshot: 'on',
    permissions: ['clipboard-read', 'clipboard-write'], // Grant clipboard permissions
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace:
    {
      mode: 'retain-on-failure',
      attachments: true,
      screenshots: true,
      snapshots: true,
      sources: true
    }
  },
  reporter: [['html', { open: 'never' }]],
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
