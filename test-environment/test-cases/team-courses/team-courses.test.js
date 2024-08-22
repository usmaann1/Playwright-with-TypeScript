const {
  PlaywrightCore,
  UserFunctions,
} = require("../../../module-imports/helperFunctions.imports");
const {
  test,
  expect,
} = require("../../../module-imports/testFixtures.imports");
const {
  TeamCoursesPage,
} = require("../../../pages/team-courses/team-courses.page");
const {
  TeamCoursesData,
} = require("../../test-assets/test-data-files/team-courses/team-courses.js");
require("dotenv").config();


test.describe("TestSuite: Team/Courses", () => {
  test.only("TC: Flow Test", async ({ teamCoursesPage, browser }) => {
    const email = TeamCoursesData.email;
    const password = TeamCoursesData.password;
    const randomEmail = await UserFunctions.generateRandomEmail(email);
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();

    await teamCoursesPage.signInUser(email, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(randomName);
    await teamCoursesPage.createTest(
      TeamCoursesData.createTestType,
      TeamCoursesData.createTestOldType,
      TeamCoursesData.createTestNewType,
      TeamCoursesData.createTestName,
      TeamCoursesData.testInput,
      TeamCoursesData.testOutput
    );
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
      TeamCoursesData.testInput
    );
    // await newPage.close();
    await teamCoursesPage.assertingUserAnswered(TeamCoursesData.completeName);
    await teamCoursesPage.assertingUserAnswerHistory(
      TeamCoursesData.completeName,
      TeamCoursesData.testInput
    );
    await teamCoursesPage.uploadFile(TeamCoursesData.uploadFilePath);
    await teamCoursesPage.breakPoint();
  });
});
