import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import path from 'path';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
   // Timeout per test
  timeout: 30 * 1000,
  // Test directory
  testDir: path.join(__dirname, '__tests__/e2e'),
  // If a test fails, retry it additional 2 times
  retries: 1,
  // Artifacts folder where screenshots, videos, and traces are stored.
  outputDir: 'test-results/',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  // Run your local dev server before starting the tests:
  // https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests
  webServer: {
    command: 'react-scripts start',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI
  },



  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retry-with-trace',

    // enable/disable headless usage
    headless: true
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    }/*,

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
*/
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

export default config;
