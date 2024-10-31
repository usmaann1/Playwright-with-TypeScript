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

  test("[Numair] - TC-2 - Flow Test Java - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
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

  test("[Numair] - TC-3 - Flow Test CSharp - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
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
      TeamCoursesData.projectTypeOption10,
      true
    );
    await teamCoursesPage.simpleCsharp();
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
      TeamCoursesData.csharpTestInput,
      true
    );
    await teamCoursesPage.assertingUserAnswered(TeamCoursesData.completeName);
  });

  test("[Numair] - TC-4 - Flow Test C++ - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
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
      TeamCoursesData.projectTypeOption11,
      true
    );
    await teamCoursesPage.simpleCPP();
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
      TeamCoursesData.cppTestInput,
      true
    );
    await teamCoursesPage.assertingUserAnswered(TeamCoursesData.completeName);
  });

  test("[Numair] - TC-5 - Flow Test JavaScript - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomEmail = await UserFunctions.generateRandomEmail(email1);
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email1, password);
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
  });

  test("[Numair] - TC-6 - Flow Test HTML - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email2);
    await teamCoursesPage.signInUser(email2, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.ProjectTypeOption12,
      true
    );
    const link = await teamCoursesPage.simpleHTML();
    const newPage = await browser.newPage();
    const newTeamCoursesPageInstance = new TeamCoursesPage(newPage);
    await newTeamCoursesPageInstance.getHtmlData(
      TeamCoursesData.HTMLTestOutput,
      link
    );
  });

  test("[Numair] - TC-7 - Flow Test Python with Turtle  - Change background color to red and verify the change", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email2, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption2
    );
    await teamCoursesPage.pythonWithTurtle();
  });

  test("[Numair] - TC-8 - Flow Test Python with Tkinter -  - Change text and verify the change", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email2, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption4
    );
    await teamCoursesPage.pythonWithTkinter();
  });

  test("[Numair] - TC-9 - Flow Test Java with Swing- - Change slider color to red and verify the change", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email2, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.ProjectTypeOption13
    );
    await teamCoursesPage.javaWithSwing();
  });

  test("[Numair] - TC-10 - Flow Test Python with Matplotlib - Change X and Y axis of the graph and verify the change", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email2, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption6
    );
    await teamCoursesPage.pythonWithMatplotlib();
  });

  test("[Numair] - TC-11 - Flow Test Python with pillow - - Change background color from purple to red and verify the change from the generated image", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email2, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOPtion14
    );
    await teamCoursesPage.pythonWithPillow();
  });

  test("[Numair] - TC-12 - Upload Python file - Sign in, create team, create assignment, initialize IDE, upload main file, execute, and verify output", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email3, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption8,
      true
    );
    await teamCoursesPage.waitFortime(10000);
    await teamCoursesPage.uploadFile(TeamCoursesData.PythonFile);
    await teamCoursesPage.uploadProgrammingFile();
  });

  test("[Numair] - TC-13 - Upload JAVA file - Sign in, create team, create assignment, initialize IDE, upload main file, execute, and verify output", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email3, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption9,
      true
    );
    await teamCoursesPage.waitFortime(10000);
    await teamCoursesPage.uploadFile(TeamCoursesData.JavaFile);
    await teamCoursesPage.uploadProgrammingFile();
  });

  test("[Numair] - TC-14 - Upload CSharp file - Sign in, create team, create assignment, initialize IDE, upload main file, execute, and verify output", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email3, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption10,
      true
    );
    await teamCoursesPage.waitFortime(10000);
    await teamCoursesPage.uploadFile(TeamCoursesData.CSharpFile);
    await teamCoursesPage.uploadProgrammingFile();
  });

  test("[Numair] - TC-15 - Upload CPP file - Sign in, create team, create assignment, initialize IDE, upload main file, execute, and verify output", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email3, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption11,
      true
    );
    await teamCoursesPage.waitFortime(10000);
    await teamCoursesPage.uploadFile(TeamCoursesData.CPPFile);
    await teamCoursesPage.uploadProgrammingFile();
  });

  /* test("[Numair] - TC-16 - Upload JavaScript file - Sign in, create team, create assignment, initialize IDE, upload main file, execute, and verify output", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email3, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption1
    );
    await teamCoursesPage.waitFortime(10000);
    await teamCoursesPage.uploadFile(TeamCoursesData.JSFile);
    await teamCoursesPage.uploadProgrammingFile();
  });

  test("[Numair] - TC-17 - Upload HTML file - Sign in, create team, create assignment, initialize IDE, upload main file, execute, and verify output", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email4, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.ProjectTypeOption12,
      true
    );
    await teamCoursesPage.waitFortime(10000);
    const link = await teamCoursesPage.uploadProgrammingFile(
      TeamCoursesData.HTMLFile,
      true
    );
    const newPage = await browser.newPage();
    const newTeamCoursesPageInstance = new TeamCoursesPage(newPage);
    await newTeamCoursesPageInstance.getHtmlData(
      TeamCoursesData.HTMLFileUploadTest,
      link
    );
  });

  test("[Numair] - TC-18 - Upload CSV file - Sign in, create team, create assignment, initialize IDE, upload csv file and verify file", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email4, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption1
    );
    await teamCoursesPage.waitFortime(10000);
    await teamCoursesPage.uploadFile(TeamCoursesData.CSVFile);
    await teamCoursesPage.uploadCSV();
  });

  test("[Numair] - TC-19 - Upload JPG file - Sign in, create team, create assignment, initialize IDE, upload JPG file and verify file", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email4, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption1
    );
    await teamCoursesPage.uploadFile(TeamCoursesData.JPGFile);
    await teamCoursesPage.AssertImages(TeamCoursesData.TestJPG);
  });

  test("[Numair] - TC-20 - Upload PNG file - Sign in, create team, create assignment, initialize IDE, upload main file and verify file", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email4, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption1
    );
    await teamCoursesPage.uploadFile(TeamCoursesData.PNGFile);
    await teamCoursesPage.AssertImages(TeamCoursesData.TestPNG);
  }); */

  /* test("[Numair] - TC-21 - Flow Traditional Java - Sign in, create team, create assignment, initialize IDE, upload main file, excute and verify output", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email5);
    await teamCoursesPage.signInUser(email5, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);

    await teamCoursesPage.TraditionalJava(
      randomName,
      TeamCoursesData.projectTypeOPtion16,
      TeamCoursesData.TestJavaTraditional,
      TeamCoursesData.TestTraditonalOutput
    );
  }); */

  /* test("[Numair] - TC-21 - Folder and file structure verifcation/JavaScript Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email5, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption1
    );
    await teamCoursesPage.fileStructureJSPYCPP(
      /^Filesindex\.js$/,
      "testjs",
      TeamCoursesData.NewFileJS,
      /^Filesindex\.jstestjs$/,
      "testjsnew",
      "javascript",
      TeamCoursesData.ChangeJSFile,
      'text="testjs.js"',
      'text="testjsnew"',
      "testjs.js",
      "testjs",
      ["index.js", "testjs/", "testjsnew/", "testjsnew/testjs.js"],
      true
    );
  });

  test("[Numair] - TC-22 - Folder and file structure verifcation/Python - Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email5, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption8,
      true
    );
    await teamCoursesPage.fileStructureJSPYCPP(
      /^Filesmain\.py$/,
      "testpy",
      TeamCoursesData.NewFilePY,
      /^Filesmain\.pytestpy$/,
      "testpynew",
      "python",
      TeamCoursesData.ChangePYFile,
      'text="testpy.py"',
      'text="testpynew"',
      "testpy.py",
      "testpy",
      ["main.py", "testpy/", "testpynew/", "testpynew/testpy.py"],
      false
    );
  });

  test("[Numair] - TC-23 - Folder and file structure verifcation/Java - Sign in, create team, create assignment, initialize IDE, create two folders and one file, import file into main, execute to verify output, drag and drop file into folder, and verify download.", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email5, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption9,
      true
    );
    await teamCoursesPage.fileStructureJAVACSHTML(
      /^FilesMain\.java$/,
      "Helper",
      TeamCoursesData.NewFileJAVA,
      /^FilesHelperMain\.java$/,
      "Helpernew",
      "java",
      TeamCoursesData.ChangeJAVAFile,
      'text="Helper.java"',
      'text="Helpernew"',
      "Helper.java",
      "Helper",
      TeamCoursesData.FileStructureJava,
      ["Helper/", "Helpernew/", "Helpernew/Helper.java", "Main.java"],
      true
    );
  });

  test("[Numair] - TC-24 - Folder and file structure verifcation/CSharp -Sign in, create team, create assignment, initialize IDE, create two folders and one file, import file into main, execute to verify output, drag and drop file into folder, and verify download.", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email5, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption10,
      true
    );
    await teamCoursesPage.fileStructureJAVACSHTML(
      /^Filesmain\.csmain\.csproj$/,
      "Helper",
      TeamCoursesData.NewFileCSHARP,
      /^Filesmain\.csmain\.csprojHelper$/,
      "Helpernew",
      "csharp",
      TeamCoursesData.ChangeCSFile,
      'text="Helper.cs"',
      'text="Helpernew"',
      "Helper.cs",
      "Helper",
      TeamCoursesData.FileStructureCSharp,
      [
        "Helper/",
        "Helpernew/",
        "Helpernew/Helper.cs",
        "main.cs",
        "main.csproj",
      ],
      true
    );
  });

  test("[Numair] - TC-25 - Folder and file structure verifcation/CPP - Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email5, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption11,
      true
    );
    await teamCoursesPage.fileStructureJSPYCPP(
      /^Filesmain\.cpp$/,
      "testcpp",
      TeamCoursesData.NewFileCPP,
      /^Filesmain\.cpptestcpp$/,
      "testcppnew",
      "cpp",
      TeamCoursesData.ChangeCPPFile,
      'text="testcpp.cpp"',
      'text="testcppnew"',
      "testcpp.cpp",
      "testcpp",
      ["main.cpp", "testcpp/", "testcppnew/", "testcppnew/testcpp.cpp"],
      true
    );
  });

  test("[Numair] - TC-26 - Folder and file structure verifcation/HTML - Sign in, create team, create assignment, initialize IDE, create two folders and one file, import file into main, execute to verify output, drag and drop file into folder, and verify download.", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email6, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.ProjectTypeOption12,
      true
    );
    const baseURL = config.use.baseURL;
    let link;
    if (!baseURL.includes("play")) {
      link = await teamCoursesPage.fileStructureJAVACSHTML(
        /^Filesindex\.htmlscript\.jsstyles\.css$/,
        "Helper",
        TeamCoursesData.NewFileHTML,
        /^FilesHelperindex\.htmlscript\.jsstyles\.css$/,
        "Helpernew",
        "html",
        TeamCoursesData.ChangeCSFile,
        'text="Helper.js"',
        'text="Helpernew"',
        "Helper.js",
        "Helper",
        TeamCoursesData.FileStructureHTML,
        [
          "Helper/",
          "Helpernew/",
          "Helpernew/Helper.js",
          "index.html",
          "script.js",
          "styles.css",
        ],
        true
      );
    } else {
      link = await teamCoursesPage.fileStructureJAVACSHTML(
        /^Filesindex\.htmlstyles\.cssscript\.js$/,
        "Helper",
        TeamCoursesData.NewFileHTML,
        /^Filesindex\.htmlstyles\.cssscript\.jsHelper$/,
        "Helpernew",
        "html",
        TeamCoursesData.ChangeCSFile,
        'text="Helper.js"',
        'text="Helpernew"',
        "Helper.js",
        "Helper",
        TeamCoursesData.FileStructureHTML,
        [
          "Helper/",
          "Helpernew/",
          "Helpernew/Helper.js",
          "index.html",
          "script.js",
          "styles.css",
        ],
        true
      );
    }
    const newPage = await browser.newPage();
    const newTeamCoursesPageInstance = new TeamCoursesPage(newPage);
    await newTeamCoursesPageInstance.getHtmlData2(
      newPage,
      TeamCoursesData.ChangedFileOutput,
      link
    );
    if (!baseURL.includes("play")) {
      await teamCoursesPage.fileStructureHTMLRemaining(
        /^Filesindex\.htmlstyles\.cssscript\.js$/,
        "Helper",
        TeamCoursesData.NewFileHTML,
        /^Filesindex\.htmlstyles\.cssscript\.jsHelper$/,
        "Helpernew",
        "html",
        TeamCoursesData.ChangeCSFile,
        'text="Helper.js"',
        'text="Helpernew"',
        "Helper.js",
        "Helper",
        TeamCoursesData.FileStructureHTML,
        [
          "Helper/",
          "Helpernew/",
          "Helpernew/Helper.js",
          "index.html",
          "script.js",
          "styles.css",
        ],
        true
      );
    } else {
      await teamCoursesPage.fileStructureHTMLRemaining(
        /^Filesindex\.htmlstyles\.cssscript\.js$/,
        "Helper",
        TeamCoursesData.NewFileHTML,
        /^Filesindex\.htmlstyles\.cssscript\.jsHelper$/,
        "Helpernew",
        "html",
        TeamCoursesData.ChangeCSFile,
        'text="Helper.js"',
        'text="Helpernew"',
        "Helper.js",
        "Helper",
        TeamCoursesData.FileStructureHTML,
        [
          "Helper/",
          "Helpernew/",
          "Helpernew/Helper.js",
          "index.html",
          "script.js",
          "styles.css",
        ],
        true
      );
    }
  });

  test("[Numair] - TC-27 - Folder and file structure verifcation/Python-turtle -Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email6, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption2,
      true
    );
    await teamCoursesPage.fileStructureJSPYCPP(
      /^Filesmain\.py$/,
      "testpy",
      TeamCoursesData.NewFilePY,
      /^Filesmain\.pytestpy$/,
      "testpynew",
      "python",
      TeamCoursesData.ChangePYFile,
      'text="testpy.py"',
      'text="testpynew"',
      "testpy.py",
      "testpy",
      ["main.py", "testpy/", "testpynew/", "testpynew/testpy.py"],
      true
    );
  });

  test("[Numair] - TC-28 - Folder and file structure verifcation/Python-matplotlib Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email6, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption6,
      true
    );
    await teamCoursesPage.fileStructureJSPYCPP(
      /^Filesmain\.py$/,
      "testpy",
      TeamCoursesData.NewFilePY,
      /^Filesmain\.pytestpy$/,
      "testpynew",
      "python",
      TeamCoursesData.ChangePYFile,
      'text="testpy.py"',
      'text="testpynew"',
      "testpy.py",
      "testpy",
      ["main.py", "testpy/", "testpynew/", "testpynew/testpy.py"],
      true
    );
  });

  test("[Numair] - TC-29 - Folder and file structure verifcation/java-swing -Sign in, create team, create assignment, initialize IDE, create two folders and one file, import file into main, execute to verify output, drag and drop file into folder, and verify download.", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email6, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.ProjectTypeOption13,
      true
    );
    await teamCoursesPage.fileStructureJAVACSHTML(
      /^FilesMain\.java$/,
      "HelperSwing",
      TeamCoursesData.NewFileJAVASwing,
      /^FilesHelperSwingMain\.java$/,
      "HelperSwingnew",
      "swing",
      TeamCoursesData.ChangeJAVAFile,
      'text="HelperSwing.java"',
      'text="HelperSwingnew"',
      "HelperSwing.java",
      "HelperSwing",
      TeamCoursesData.FileStructureSwing,
      [
        "HelperSwing/",
        "HelperSwingnew/",
        "HelperSwingnew/HelperSwing.java",
        "Main.java",
      ],
      true
    );
  });

  test("[Numair] - TC-30 - Folder and file structure verifcation/Python-pillow0-Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email6, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOPtion14,
      true
    );
    await teamCoursesPage.fileStructureJSPYCPP(
      /^Filesmain\.py$/,
      "testpy",
      TeamCoursesData.NewFilePY,
      /^Filesmain\.pytestpy$/,
      "testpynew",
      "python",
      TeamCoursesData.ChangePYFile,
      'text="testpy.py"',
      'text="testpynew"',
      "testpy.py",
      "testpy",
      ["main.py", "testpy/", "testpynew/", "testpynew/testpy.py"],
      true
    );
  });

  test("[Numair] - TC-31 - After due date python- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email7);
    await teamCoursesPage.signInUser(email7, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption8,
      true
    );
    await teamCoursesPage.simplePython();
    await teamCoursesPage.setPerviousDueDate();
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
    await newTeamCoursesPageInstance.isSubmitDisabled();
  });

  test("[Numair] - TC-32 - After due date java- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email7);
    await teamCoursesPage.signInUser(email7, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption9,
      true
    );
    await teamCoursesPage.simpleJava();
    await teamCoursesPage.setPerviousDueDate();
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
    await newTeamCoursesPageInstance.isSubmitDisabled();
  });

  test("[Numair] - TC-33 - After due date csharp- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email7);
    await teamCoursesPage.signInUser(email7, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption10,
      true
    );
    await teamCoursesPage.simpleCsharp();
    await teamCoursesPage.setPerviousDueDate();
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
    await newTeamCoursesPageInstance.isSubmitDisabled();
  });

  test("[Numair] - TC-34 - After due date C++- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email7);
    await teamCoursesPage.signInUser(email7, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption11,
      true
    );
    await teamCoursesPage.simpleCPP();
    await teamCoursesPage.setPerviousDueDate();
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
    await newTeamCoursesPageInstance.isSubmitDisabled();
  });

  test("[Numair] - TC-35 - After due date JavaScript- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomEmail = await UserFunctions.generateRandomEmail(email7);
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email7, password);
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
    await teamCoursesPage.setPerviousDueDate();
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
    await newTeamCoursesPageInstance.isSubmitDisabled();
  });

  test("[Numair] - TC-36 - After due date HTML- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email7);
    await teamCoursesPage.signInUser(email7, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.ProjectTypeOption12,
      true
    );
    const link = await teamCoursesPage.simpleHTML();
    const newPage = await browser.newPage();
    const newTeamCoursesPageInstance = new TeamCoursesPage(newPage);
    await newTeamCoursesPageInstance.getHtmlData(
      TeamCoursesData.HTMLTestOutput,
      link
    );
    await teamCoursesPage.setPerviousDueDate();
    const link2 = await teamCoursesPage.PublishAndInvite();
    const newPage2 = await browser.newPage();
    const newTeamCoursesPageInstance2 = new TeamCoursesPage(newPage2);
    await newTeamCoursesPageInstance2.afterInviteSignUp(
      link2,
      randomEmail,
      password,
      TeamCoursesData.firstName,
      TeamCoursesData.LastName
    );
    await newTeamCoursesPageInstance2.isSubmitDisabled();
  });

  test("[Numair] - TC-37 - After due date Python with Turtle  - Change background color to red and verify the change and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email8);
    await teamCoursesPage.signInUser(email8, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption2
    );
    await teamCoursesPage.pythonWithTurtle();
    await teamCoursesPage.setPerviousDueDate();
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
    await newTeamCoursesPageInstance.isSubmitDisabled();
  });

  test("[Numair] - TC-38 - After due date Python with Tkinter -  - Change text and verify the change and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email8);
    await teamCoursesPage.signInUser(email8, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption4
    );
    await teamCoursesPage.pythonWithTkinter();
    await teamCoursesPage.setPerviousDueDate();
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
    await newTeamCoursesPageInstance.isSubmitDisabled();
  });

  test("[Numair] - TC-39 - After due date Java with Swing- - Change slider color to red and verify the change and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email8);
    await teamCoursesPage.signInUser(email8, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.ProjectTypeOption13
    );
    await teamCoursesPage.javaWithSwing();
    await teamCoursesPage.setPerviousDueDate();
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
    await newTeamCoursesPageInstance.isSubmitDisabled();
  });

  test("[Numair] - TC-40 - After due date Python with Matplotlib - Change X and Y axis of the graph and verify the change and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email8);
    await teamCoursesPage.signInUser(email8, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption6
    );
    await teamCoursesPage.pythonWithMatplotlib();
    await teamCoursesPage.setPerviousDueDate();
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
    await newTeamCoursesPageInstance.isSubmitDisabled();
  });

  test("[Numair] - TC-41 - After due date Python with pillow - - Change background color from purple to red and verify the change from the generated image and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email8);
    await teamCoursesPage.signInUser(email8, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOPtion14
    );
    await teamCoursesPage.pythonWithPillow();
    await teamCoursesPage.setPerviousDueDate();
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
    await newTeamCoursesPageInstance.isSubmitDisabled();
  });

  test("[Numair] - TC-42 - Before due date python- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email8);
    await teamCoursesPage.signInUser(email8, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption8,
      true
    );
    await teamCoursesPage.simplePython();
    await teamCoursesPage.setDueDate();
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

  test("[Numair] - TC-43 - Before due date java- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email8);
    await teamCoursesPage.signInUser(email8, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption9,
      true
    );
    await teamCoursesPage.simpleJava();
    await teamCoursesPage.setDueDate();
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

  test("[Numair] - TC-44 - Before due date csharp- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email8);
    await teamCoursesPage.signInUser(email8, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption10,
      true
    );
    await teamCoursesPage.simpleCsharp();
    await teamCoursesPage.setDueDate();
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
      TeamCoursesData.csharpTestInput,
      true
    );
    await teamCoursesPage.assertingUserAnswered(TeamCoursesData.completeName);
  });

  test("[Numair] - TC-45 - Before due date C++- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email8);
    await teamCoursesPage.signInUser(email8, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption11,
      true
    );
    await teamCoursesPage.simpleCPP();
    await teamCoursesPage.setDueDate();
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
      TeamCoursesData.cppTestInput,
      true
    );
    await teamCoursesPage.assertingUserAnswered(TeamCoursesData.completeName);
  });

  test("[Numair] - TC-46 - Before due date JavaScript- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomEmail = await UserFunctions.generateRandomEmail(email8);
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email8, password);
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
    await teamCoursesPage.setDueDate();
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
  });

  test("[Numair] - TC-47 - Before due date HTML- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email9);
    await teamCoursesPage.signInUser(email9, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.ProjectTypeOption12,
      true
    );
    const link = await teamCoursesPage.simpleHTML();
    const newPage = await browser.newPage();
    const newTeamCoursesPageInstance = new TeamCoursesPage(newPage);
    await newTeamCoursesPageInstance.getHtmlData(
      TeamCoursesData.HTMLTestOutput,
      link
    );
    await teamCoursesPage.setDueDate();
    const link2 = await teamCoursesPage.PublishAndInvite();
    const newPage2 = await browser.newPage();
    const newTeamCoursesPageInstance2 = new TeamCoursesPage(newPage2);
    await newTeamCoursesPageInstance2.afterInviteSignUp(
      link2,
      randomEmail,
      password,
      TeamCoursesData.firstName,
      TeamCoursesData.LastName
    );
    await newTeamCoursesPageInstance2.isSubmitDisabled(false);
  });

  test("[Numair] - TC-48 - Before due date Python with Turtle  - Change background color to red and verify the change and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email9);
    await teamCoursesPage.signInUser(email9, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption2
    );
    await teamCoursesPage.pythonWithTurtle();
    await teamCoursesPage.setDueDate();
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
    await newTeamCoursesPageInstance.isSubmitDisabled(false);
  });

  test("[Numair] - TC-49 - Before due date Python with Tkinter -  - Change text and verify the change and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email9);
    await teamCoursesPage.signInUser(email9, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption4
    );
    await teamCoursesPage.pythonWithTkinter();
    await teamCoursesPage.setDueDate();
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
    await newTeamCoursesPageInstance.isSubmitDisabled(false);
  });

  test("[Numair] - TC-50 - Before due date Java with Swing- - Change slider color to red and verify the change and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email9);
    await teamCoursesPage.signInUser(email9, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.ProjectTypeOption13
    );
    await teamCoursesPage.javaWithSwing();
    await teamCoursesPage.setDueDate();
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
    await newTeamCoursesPageInstance.isSubmitDisabled(false);
  });

  test("[Numair] - TC-51 - Before due date Python with Matplotlib - Change X and Y axis of the graph and verify the change and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email9);
    await teamCoursesPage.signInUser(email9, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption6
    );
    await teamCoursesPage.pythonWithMatplotlib();
    await teamCoursesPage.setDueDate();
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
    await newTeamCoursesPageInstance.isSubmitDisabled(false);
  });

  test("[Numair] - TC-52 - Before due date Python with pillow - - Change background color from purple to red and verify the change from the generated image and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email9);
    await teamCoursesPage.signInUser(email9, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOPtion14
    );
    await teamCoursesPage.pythonWithPillow();
    await teamCoursesPage.setDueDate();
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
    await newTeamCoursesPageInstance.isSubmitDisabled(false);
  });

  test("[Numair] - TC-53 - Allow resubmission python- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email10);
    await teamCoursesPage.signInUser(email10, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption8,
      true
    );
    await teamCoursesPage.simplePython();
    await teamCoursesPage.allowResubmission();
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
    await newTeamCoursesPageInstance.isResubmissonAllowed(false);
  });

  test("[Numair] - TC-54 - Allow resubmission java- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email10);
    await teamCoursesPage.signInUser(email10, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption9,
      true
    );
    await teamCoursesPage.simpleJava();
    await teamCoursesPage.allowResubmission();
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
    await newTeamCoursesPageInstance.isResubmissonAllowed(false);
  });

  test("[Numair] - TC-55 - Allow resubmission csharp- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email10);
    await teamCoursesPage.signInUser(email10, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption10,
      true
    );
    await teamCoursesPage.simpleCsharp();
    await teamCoursesPage.allowResubmission();
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
    await newTeamCoursesPageInstance.isResubmissonAllowed(false);
  });

  test("[Numair] - TC-56 - Allow resubmission C++- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email10);
    await teamCoursesPage.signInUser(email10, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption11,
      true
    );
    await teamCoursesPage.simpleCPP();
    await teamCoursesPage.allowResubmission();
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
    await newTeamCoursesPageInstance.isResubmissonAllowed(false);
  });

  test("[Numair] - TC-57 - Allow resubmission JavaScript- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomEmail = await UserFunctions.generateRandomEmail(email10);
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email10, password);
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
    await teamCoursesPage.allowResubmission();
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
    await newTeamCoursesPageInstance.isResubmissonAllowed(false);
  });

  test("[Numair] - TC-58 - Allow resubmission HTML- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email10);
    await teamCoursesPage.signInUser(email10, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.ProjectTypeOption12,
      true
    );
    const link = await teamCoursesPage.simpleHTML();
    const newPage = await browser.newPage();
    const newTeamCoursesPageInstance = new TeamCoursesPage(newPage);
    await newTeamCoursesPageInstance.getHtmlData(
      TeamCoursesData.HTMLTestOutput,
      link
    );
    await teamCoursesPage.allowResubmission();
    const link2 = await teamCoursesPage.PublishAndInvite();
    const newPage2 = await browser.newPage();
    const newTeamCoursesPageInstance2 = new TeamCoursesPage(newPage2);
    await newTeamCoursesPageInstance2.afterInviteSignUp(
      link2,
      randomEmail,
      password,
      TeamCoursesData.firstName,
      TeamCoursesData.LastName
    );
    await newTeamCoursesPageInstance2.isResubmissonAllowed(false);
  });

  test("[Numair] - TC-59 - Allow resubmission Python with Turtle  - Change background color to red and verify the change and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email10);
    await teamCoursesPage.signInUser(email10, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption2
    );
    await teamCoursesPage.pythonWithTurtle();
    await teamCoursesPage.allowResubmission();
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
    await newTeamCoursesPageInstance.isResubmissonAllowed(false);
  });

  test("[Numair] - TC-60 - Allow resubmission Python with Tkinter -  - Change text and verify the change and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email10);
    await teamCoursesPage.signInUser(email10, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption4
    );
    await teamCoursesPage.pythonWithTkinter();
    await teamCoursesPage.allowResubmission();
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
    await newTeamCoursesPageInstance.isResubmissonAllowed(false);
  });

  test("[Numair] - TC-61 - Allow resubmission Java with Swing- - Change slider color to red and verify the change and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email10);
    await teamCoursesPage.signInUser(email10, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.ProjectTypeOption13
    );
    await teamCoursesPage.javaWithSwing();
    await teamCoursesPage.allowResubmission();
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
    await newTeamCoursesPageInstance.isResubmissonAllowed(false);
  });

  test("[Numair] - TC-62 - Allow resubmission Python with Matplotlib - Change X and Y axis of the graph and verify the change and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email10);
    await teamCoursesPage.signInUser(email10, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption6
    );
    await teamCoursesPage.pythonWithMatplotlib();
    await teamCoursesPage.allowResubmission();
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
    await newTeamCoursesPageInstance.isResubmissonAllowed(false);
  });

  test("[Numair] - TC-63 - Allow resubmission Python with pillow - - Change background color from purple to red and verify the change from the generated image and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email10);
    await teamCoursesPage.signInUser(email10, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOPtion14
    );
    await teamCoursesPage.pythonWithPillow();
    await teamCoursesPage.allowResubmission();
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
    await newTeamCoursesPageInstance.isResubmissonAllowed(false);
  });

  test("[Numair] - TC-64 - Allow Late Submission python- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email11);
    await teamCoursesPage.signInUser(email11, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption8,
      true
    );
    await teamCoursesPage.simplePython();
    await teamCoursesPage.allowLateSubmission();
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
    await newTeamCoursesPageInstance.isLateSubmissionAllowed(false);
  });

  test("[Numair] - TC-65 - Allow Late Submission java - Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email11);
    await teamCoursesPage.signInUser(email11, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption9,
      true
    );
    await teamCoursesPage.simpleJava();
    await teamCoursesPage.allowLateSubmission();
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
    await newTeamCoursesPageInstance.isLateSubmissionAllowed(false);
  });

  test("[Numair] - TC-66 - Allow Late Submission csharp- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email11);
    await teamCoursesPage.signInUser(email11, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption10,
      true
    );
    await teamCoursesPage.simpleCsharp();
    await teamCoursesPage.allowLateSubmission();
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
    await newTeamCoursesPageInstance.isLateSubmissionAllowed(false);
  });

  test("[Numair] - TC-67 - Allow Late Submission C++- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email11);
    await teamCoursesPage.signInUser(email11, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption11,
      true
    );
    await teamCoursesPage.simpleCPP();
    await teamCoursesPage.allowLateSubmission();
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
    await newTeamCoursesPageInstance.isLateSubmissionAllowed(false);
  });

  test("[Numair] - TC-68 - Allow Late Submission JavaScript- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomEmail = await UserFunctions.generateRandomEmail(email11);
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email11, password);
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
    await teamCoursesPage.allowLateSubmission();
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
    await newTeamCoursesPageInstance.isLateSubmissionAllowed(true);
  });

  test("[Numair] - TC-69 - Allow Late Submission HTML- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email11);
    await teamCoursesPage.signInUser(email11, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.ProjectTypeOption12,
      true
    );
    const link = await teamCoursesPage.simpleHTML();
    const newPage = await browser.newPage();
    const newTeamCoursesPageInstance = new TeamCoursesPage(newPage);
    await newTeamCoursesPageInstance.getHtmlData(
      TeamCoursesData.HTMLTestOutput,
      link
    );
    await teamCoursesPage.allowLateSubmission();
    const link2 = await teamCoursesPage.PublishAndInvite();
    const newPage2 = await browser.newPage();
    const newTeamCoursesPageInstance2 = new TeamCoursesPage(newPage2);
    await newTeamCoursesPageInstance2.afterInviteSignUp(
      link2,
      randomEmail,
      password,
      TeamCoursesData.firstName,
      TeamCoursesData.LastName
    );
    await newTeamCoursesPageInstance2.isLateSubmissionAllowed(false);
  });

  test("[Numair] - TC-70 - Allow Late Submission Python with Turtle  - Change background color to red and verify the change and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email11);
    await teamCoursesPage.signInUser(email11, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption2
    );
    await teamCoursesPage.pythonWithTurtle();
    await teamCoursesPage.allowLateSubmission();
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
    await newTeamCoursesPageInstance.isLateSubmissionAllowed(false);
  });

  test("[Numair] - TC-71 - Allow Late Submission Python with Tkinter -  - Change text and verify the change and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email11);
    await teamCoursesPage.signInUser(email11, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption4
    );
    await teamCoursesPage.pythonWithTkinter();
    await teamCoursesPage.allowLateSubmission();
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
    await newTeamCoursesPageInstance.isLateSubmissionAllowed(false);
  });

  test("[Numair] - TC-72 - Allow Late Submission Java with Swing- - Change slider color to red and verify the change and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email11);
    await teamCoursesPage.signInUser(email11, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.ProjectTypeOption13
    );
    await teamCoursesPage.javaWithSwing();
    await teamCoursesPage.allowLateSubmission();
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
    await newTeamCoursesPageInstance.isLateSubmissionAllowed(false);
  });

  test("[Numair] - TC-73 - Allow Late Submission Python with Matplotlib - Change X and Y axis of the graph and verify the change and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email11);
    await teamCoursesPage.signInUser(email11, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption6
    );
    await teamCoursesPage.pythonWithMatplotlib();
    await teamCoursesPage.allowLateSubmission();
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
    await newTeamCoursesPageInstance.isLateSubmissionAllowed(false);
  });

  test("[Numair] - TC-74 - Allow Late Submission Python with pillow - - Change background color from purple to red and verify the change from the generated image and check student able to submit", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email11);
    await teamCoursesPage.signInUser(email11, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOPtion14
    );
    await teamCoursesPage.pythonWithPillow();
    await teamCoursesPage.allowLateSubmission();
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
    await newTeamCoursesPageInstance.isLateSubmissionAllowed(false);
  });
 */
});
