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

  test("[Numair] - TC-1 - Test Flow Python", async ({
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

  test("[Numair] - TC-2 - Test Flow Java", async ({
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

  test("[Numair] - TC-3 - Test Flow CSharp", async ({
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

  test("[Numair] - TC-4 - Test Flow CPP", async ({
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

  test("[Numair] - TC-5 - Test Flow JavaScript", async ({
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

  test("[Numair] - TC-6 - Test Flow HTML", async ({
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

  test("[Numair] - TC-7 - Test Flow Python with Turtle", async ({
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

  test("[Numair] - TC-8 - Test Flow Python with Tkinter", async ({
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

  test("[Numair] - TC-9 - Test Flow Java with Swing", async ({
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

  test("[Numair] - TC-10 - Test Flow Python with Matplotlib", async ({
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

  test("[Numair] - TC-11 - Test Flow Python with Pillow", async ({
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

  test("[Numair] - TC-12 - Python Upload File", async ({ teamCoursesPage }) => {
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

  test("[Numair] - TC-13 - Java Upload File", async ({ teamCoursesPage }) => {
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

  test("[Numair] - TC-14 - CSharp Upload File", async ({ teamCoursesPage }) => {
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

  test("[Numair] - TC-15 - CPP Upload File", async ({ teamCoursesPage }) => {
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

  test("[Numair] - TC-16 - JavaScript Upload File", async ({
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

  test("[Numair] - TC-17 - HTML Upload File", async ({
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

  test("[Numair] - TC-18 - CSV Upload File", async ({ teamCoursesPage }) => {
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

  test("[Numair] - TC-19 - JPG Upload File", async ({ teamCoursesPage }) => {
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

  test("[Numair] - TC-20 - PNG Upload File", async ({ teamCoursesPage }) => {
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
  });

  /* test("[Numair] - TC-21 - Test Flow Traditional Java", async ({
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

  test("[Numair] - TC-21 - Folder and File Structure Verification JavaScript", async ({
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

  test("[Numair] - TC-22 - Folder and File Structure Verification Python", async ({
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

  test("[Numair] - TC-23 - Folder and File Structure Verification Java", async ({
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

  test("[Numair] - TC-24 - Folder and File Structure Verification CSharp", async ({
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

  test("[Numair] - TC-25 - Folder and File Structure Verification CPP", async ({
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

  test("[Numair] - TC-26 - Folder and File Structure Verification HTML", async ({
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

  test("[Numair] - TC-27 - Folder and File Structure Verification Python with turtle", async ({
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

  test("[Numair] - TC-28 - Folder and File Structure Verification Pyjton with Matplotlib", async ({
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

  test("[Numair] - TC-29 - Folder and File Structure Verification Java With Swing", async ({
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

  test("[Numair] - TC-30 - Folder and File Structure Verification Python with pillow", async ({
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

  test("[Numair] - TC-31 - After Due Date Python", async ({
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

  test("[Numair] - TC-32 - After Due Date Java", async ({
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

  test("[Numair] - TC-33 - After Due Date CSharp", async ({
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

  test("[Numair] - TC-34 - After Due Date CPP", async ({
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

  test("[Numair] - TC-35 - After Due Date JavaScript", async ({
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

  test("[Numair] - TC-36 - After Due Date HTML", async ({
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

  test("[Numair] - TC-37 - After Due Date Python with Turtle", async ({
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

  test("[Numair] - TC-38 - After Due Date Python with Tkinter", async ({
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

  test("[Numair] - TC-39 - After Due Date Java with Swing", async ({
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

  test("[Numair] - TC-40 - After Due Date Python with matplotlib", async ({
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

  test("[Numair] - TC-41 - After Due Date Python with Pillow", async ({
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

  test("[Numair] - TC-42 - Before Due Date Python", async ({
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

  test("[Numair] - TC-43 - Before Due Date Java", async ({
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

  test("[Numair] - TC-44 - Before Due Date CSharp", async ({
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

  test("[Numair] - TC-45 - Before Due Date CPP", async ({
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

  test("[Numair] - TC-46 - Before Due Date JavaScript", async ({
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

  test("[Numair] - TC-47 - Before Due Date HTML", async ({
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

  test("[Numair] - TC-48 - Before Due Date Python with Turtle", async ({
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

  test("[Numair] - TC-49 - Before Due Date Python With Tkinter", async ({
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

  test("[Numair] - TC-50 - Before Due Date Java with Swing", async ({
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

  test("[Numair] - TC-51 - Before Due Date Python with matplotlib", async ({
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

  test("[Numair] - TC-52 - Before Due Date Python with Pillow", async ({
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

  test("[Numair] - TC-53 - Allow Resubmission Python", async ({
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

  test("[Numair] - TC-54 - Allow Resubmission Java", async ({
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

  test("[Numair] - TC-55 - Allow Resubmission CSharp", async ({
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

  test("[Numair] - TC-56 - Allow Resubmission CPP", async ({
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

  test("[Numair] - TC-57 - Allow Resubmission JavaScript", async ({
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

  test("[Numair] - TC-58 - Allow Resubmission HTML", async ({
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

  test("[Numair] - TC-59 - Allow Resubmission Python with Turtle", async ({
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

  test("[Numair] - TC-60 - Allow Resubmission Python with Tkinter", async ({
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

  test("[Numair] - TC-61 - Allow Resubmission Java with Swing", async ({
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

  test("[Numair] - TC-62 - Allow Resubmission python with matplotlib", async ({
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

  test("[Numair] - TC-63 - Allow Resubmission Pyton with pillow", async ({
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

  test("[Numair] - TC-64 - Allow Late Submission Python", async ({
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

  test("[Numair] - TC-65 - Allow Late Submission Java", async ({
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

  test("[Numair] - TC-66 - Allow Late Submission CSharp", async ({
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

  test("[Numair] - TC-67 - Allow Late Submission CPP", async ({
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

  test("[Numair] - TC-68 - Allow Late Submission JavaScript", async ({
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

  test("[Numair] - TC-69 - Allow Late Submission HTML", async ({
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

  test("[Numair] - TC-70 - Allow Late Submission Python with turtle", async ({
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

  test("[Numair] - TC-71 - Allow Late Submission Python with Tkinter", async ({
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

  test("[Numair] - TC-72 - Allow Late Submission Java with Swing", async ({
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

  test("[Numair] - TC-73 - Allow Late Submission Python with Matplotlib", async ({
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

  test("[Numair] - TC-74 - Allow Late Submission Python with Pillow", async ({
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
});
