const {
  UserFunctions,
} = require("../../../module-imports/helperFunctions.imports");
const { test } = require("../../../module-imports/testFixtures.imports");
const {
  TeamCoursesPage,
} = require("../../../pages/team-courses/team-courses.page");
import TeamCoursesData from "../../test-assets/test-data-files/team-courses/team-courses-testData.json";
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";
import { FAILED_TEST_CASES } from "../../../failed-test-cases/failed-test-cases";
import config from "../../../playwright.config";

test.describe("TestSuite: Team/Courses", () => {
  const email1 = Credentials.EMAIL_NUMAIR1;
  const email2 = Credentials.EMAIL_NUMAIR2;
  const email3 = Credentials.EMAIL_NUMAIR3;
  const email4 = Credentials.EMAIL_NUMAIR4;
  const email5 = Credentials.EMAIL_NUMAIR5;
  const email6 = Credentials.EMAIL_NUMAIR6;
  const email7 = Credentials.EMAIL_NUMAIR7;
  const email8 = Credentials.EMAIL_NUMAIR8;
  const email9 = Credentials.EMAIL_NUMAIR9;
  const email10 = Credentials.EMAIL_NUMAIR10;
  const email11 = Credentials.EMAIL_NUMAIR11;
  const password = Credentials.PASSWORD_NUMAIR;

  test.beforeEach(async ({}, testInfo) => {
    if (FAILED_TEST_CASES.length !== 0) {
      if (!FAILED_TEST_CASES.includes(testInfo.title)) {
        test.skip("Test case not included in the list");
      }
    }
  });

  test("[Numair] - TC-1 - Flow Test Python - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email1);
    await teamCoursesPage.signInUser(email1, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption8,
      true
    );
    await teamCoursesPage.simplePython();
    const link = await teamCoursesPage.PublishAndInvite();
    const newPage = await browser.newPage();
    const newTeamCoursesPageInstance = new TeamCoursesPage(newPage);
    await newTeamCoursesPageInstance.afterInviteSignUp(
      link,
      randomEmail,
      password,
      TeamCoursesData.firstName,
      TeamCoursesData.LastName
    );
    await newTeamCoursesPageInstance.createStarterCode(
      TeamCoursesData.pythonTestInput,
      true
    );
    await teamCoursesPage.assertingUserAnswered(TeamCoursesData.completeName);
  });
});
