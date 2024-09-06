const { UserFunctions } = require("../../../module-imports/helperFunctions.imports");
const { test, expect } = require("../../../module-imports/testFixtures.imports");
const { TeamCoursesPage } = require("../../../pages/team-courses/team-courses.page");
import TeamCoursesData from "../../test-assets/test-data-files/team-courses/team-courses-testData.json";
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";

test.describe("TestSuite: Team/Courses", () => {
  const email = Credentials.EMAIL_NUMAIR;
  const password = Credentials.PASSWORD_NUMAIR;
  test('Google title should be correct', async ({ page }) => {
    await page.goto('https://www.google.com');

        // Verify the page title
    await expect(page).toHaveTitle(/Google/);
  });
  
  test('Google title should be correct1gh5', async ({ page }) => {
    await page.goto('https://www.google.com');

        // Verify the page title
    await expect(page).toHaveTitle(/Google/);
  });

  test('Google title should be correct185561', async ({ page }) => {
    await page.goto('https://www.google.com');

        // Verify the page title
    await expect(page).toHaveTitle(/Google/);
  });

  test('Google title should be correct1133481', async ({ page }) => {
    await page.goto('https://www.google.com');

        // Verify the page title
    await expect(page).toHaveTitle(/Google/);
  });
  test('Google title should be correct1778111', async ({ page }) => {
    await page.goto('https://www.google.com');

        // Verify the page title
    await expect(page).toHaveTitle(/Google/);
  });
  test('Google title should be correct1451', async ({ page }) => {
    await page.goto('https://www.google.com');

        // Verify the page title
    await expect(page).toHaveTitle(/Google/);
  });

  test('Google title should be correct674111', async ({ page }) => {
    await page.goto('https://www.google.com');

        // Verify the page title
    await expect(page).toHaveTitle(/Google/);
  });
  test('Google title should be correct345671111', async ({ page }) => {
    await page.goto('https://www.google.com');

        // Verify the page title
    await expect(page).toHaveTitle(/Google/);
  });
  test('Google title should be correct1123421111', async ({ page }) => {
    await page.goto('https://www.google.com');

        // Verify the page title
    await expect(page).toHaveTitle(/Gole/);
  });
  test('Google title should be correct114568111', async ({ page }) => {
    await page.goto('https://www.google.com');

        // Verify the page title
    await expect(page).toHaveTitle(/Gole/);
  });
  test('Google title should be correct11567111', async ({ page }) => {
    await page.goto('https://www.google.com');

        // Verify the page title
    await expect(page).toHaveTitle(/Gole/);
  });
  test('Google title should be correct1111342341', async ({ page }) => {
    await page.goto('https://www.google.com');

        // Verify the page title
    await expect(page).toHaveTitle(/Gole/);
  });
  test('Google title should be correct111343211', async ({ page }) => {
    await page.goto('https://www.google.com');

        // Verify the page title
    await expect(page).toHaveTitle(/Gole/);
  });
  test('Google title should be correct11x123411', async ({ page }) => {
    await page.goto('https://www.google.com');

        // Verify the page title
    await expect(page).toHaveTitle(/Gole/);
  });
});
