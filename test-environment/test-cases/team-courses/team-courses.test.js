const {
  PlaywrightCore,
  UserFunctions,
} = require("../../../module-imports/helperFunctions.imports");
const {
  test,
  expect,
} = require("../../../module-imports/testFixtures.imports");
import LoginCredentials from "../../test-assets/test-data-files/login/login-testData.json";
require("dotenv").config();

test.describe("TestSuite: Team/Courses", () => {
  test.only("TC: Flow Test", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser("numair@test.com", "Test@123");
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(randomName);
    await teamCoursesPage.IDEInteraction();
    await teamCoursesPage.Publish();
  });
});
