const { UserFunctions } = require("../../../module-imports/helperFunctions.imports");
const { test } = require("../../../module-imports/testFixtures.imports");
const { TeamCoursesPage } = require("../../../pages/team-courses/team-courses.page");
import TeamCoursesData from "../../test-assets/test-data-files/team-courses/team-courses.json";
require("dotenv").config();

test.describe("TestSuite: Team/Courses", () => {

  test.only("TC: Flow Test", async ({ teamCoursesPage, browser }) => {
    const email = process.env.EMAIL_NUMAIR;
    const password = process.env.PASSWORD_NUMAIR;
    const randomEmail = await UserFunctions.generateRandomEmail(email);
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomAssignment2 = await UserFunctions.generateName();

    await teamCoursesPage.signInUser(email, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption1
    );
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
    await teamCoursesPage.assertingUserAnswered(TeamCoursesData.completeName);
    await teamCoursesPage.assertingUserAnswerHistory(
      TeamCoursesData.completeName,
      TeamCoursesData.testInput
    );
    await teamCoursesPage.uploadFile(TeamCoursesData.uploadFilePath);
    await teamCoursesPage.CreateAssignment(randomAssignment2, true);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption2
    );
    await teamCoursesPage.pythonWithTurtle();
    // await teamCoursesPage.breakPoint();
  });

});
