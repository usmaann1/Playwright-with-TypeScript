const { UserFunctions } = require("../../../module-imports/helperFunctions.imports");
const { test } = require("../../../module-imports/testFixtures.imports");
const { TeamCoursesPage } = require("../../../pages/team-courses/team-courses.page");
import TeamCoursesData from "../../test-assets/test-data-files/team-courses/team-courses-testData.json";
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";

test.describe("TestSuite: Team/Courses", () => {
  const email = Credentials.EMAIL_NUMAIR;
  const password = Credentials.PASSWORD_NUMAIR;
  test("TC: Flow Test Python1", async ({ teamCoursesPage, browser }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email);
    await teamCoursesPage.signInUser(email, password);
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

  test("TC: Flow Test Java", async ({ teamCoursesPage, browser }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email);
    await teamCoursesPage.signInUser(email, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption9,
      true
    );
    await teamCoursesPage.simpleJava();
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
      TeamCoursesData.javaTestInput,
      true
    );
    await teamCoursesPage.assertingUserAnswered(TeamCoursesData.completeName);
  });



  
});
