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
});
