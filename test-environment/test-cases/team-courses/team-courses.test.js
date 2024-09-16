const {
  UserFunctions,
} = require("../../../module-imports/helperFunctions.imports");
const { test } = require("../../../module-imports/testFixtures.imports");
const {
  TeamCoursesPage,
} = require("../../../pages/team-courses/team-courses.page");
import TeamCoursesData from "../../test-assets/test-data-files/team-courses/team-courses-testData.json";
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";

test.describe("TestSuite: Team/Courses", () => {
  const email = Credentials.EMAIL_NUMAIR;
  const password = Credentials.PASSWORD_NUMAIR;
  test("TC: Flow Test Python", async ({ teamCoursesPage, browser }) => {
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

  test("TC: Flow Test CSharp", async ({ teamCoursesPage, browser }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email);
    await teamCoursesPage.signInUser(email, password);
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

  test("TC: Flow Test C++", async ({ teamCoursesPage, browser }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email);
    await teamCoursesPage.signInUser(email, password);
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

  test("TC: Flow Test JavaScript", async ({ teamCoursesPage, browser }) => {
    const randomEmail = await UserFunctions.generateRandomEmail(email);
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();

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
  });

  test("TC: Flow Test HTML", async ({ teamCoursesPage, browser }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email);
    await teamCoursesPage.signInUser(email, password);
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

  test("TC: Flow Test Python with Turtle", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption2
    );
    await teamCoursesPage.pythonWithTurtle();
  });

  test("TC: Flow Test Python with Tkinter", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption4
    );
    await teamCoursesPage.pythonWithTkinter();
  });

  test("TC: Flow Test Java with Swing", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.ProjectTypeOption13
    );
    await teamCoursesPage.javaWithSwing();
  });

  test("TC: Flow Test Python with Matplotlib", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption6
    );
    await teamCoursesPage.pythonWithMatplotlib();
  });

  test("TC: Flow Test Python with pillow", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOPtion14
    );
    await teamCoursesPage.pythonWithPillow();
  });

  test("TC: Upload Python file", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
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

  test("TC: Upload JAVA file", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
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

  test("TC: Upload CSharp file", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
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

  test("TC: Upload CPP file", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
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

  test("TC: Upload JavaScript file", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
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

  test("TC: Upload HTML file", async ({ teamCoursesPage, browser }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
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

  test("TC: Upload CSV file", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
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

  test("TC: Upload JPG file", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption1
    );
    await teamCoursesPage.uploadFile(TeamCoursesData.JPGFile);
    await teamCoursesPage.AssertImages(TeamCoursesData.TestJPG);
  });

  test("TC: Upload PNG file", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.projectTypeOption1
    );
    await teamCoursesPage.uploadFile(TeamCoursesData.PNGFile);
    await teamCoursesPage.AssertImages(TeamCoursesData.TestPNG);
  });

  test("TC: Flow Traditional Java", async ({ teamCoursesPage }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    const randomEmail = await UserFunctions.generateRandomEmail(email);
    await teamCoursesPage.signInUser(email, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);

    await teamCoursesPage.TraditionalJava(
      randomName,
      TeamCoursesData.projectTypeOPtion16,
      TeamCoursesData.TestJavaTraditional,
      TeamCoursesData.TestTraditonalOutput
    );
  });

  test("Folder and file structure verifcation/JavaScript", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
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
      "testjs"
    );
  });

  test("Folder and file structure verifcation/Python", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
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
      "testpy"
    );
  });

  test.skip("Folder and file structure verifcation/Java", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
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
      TeamCoursesData.FileStructureJava
    );
  });

  test("Folder and file structure verifcation/CSharp", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
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
      TeamCoursesData.FileStructureCSharp
    );
  });

  test("Folder and file structure verifcation/CPP", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
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
      "testcpp"
    );
  });

  test("Folder and file structure verifcation/HTML", async ({
    teamCoursesPage,
    browser,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.ProjectTypeOption12,
      true
    );
    const link = await teamCoursesPage.fileStructureJAVACSHTML(
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
      TeamCoursesData.FileStructureHTML
    );
    const newPage = await browser.newPage();
    const newTeamCoursesPageInstance = new TeamCoursesPage(newPage);
    await newTeamCoursesPageInstance.getHtmlData2(
      newPage,
      TeamCoursesData.ChangedFileOutput,
      link
    );
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
      TeamCoursesData.FileStructureHTML
    );
  });

  test("Folder and file structure verifcation/Python-turtle", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
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
      "testpy"
    );
  });

  test("Folder and file structure verifcation/Python-matplotlib", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
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
      "testpy"
    );
  });

  test.skip("Folder and file structure verifcation/java-swing", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
    await teamCoursesPage.CreateTeam(randomName);
    await teamCoursesPage.CreateAssignment(randomAssignment);
    await teamCoursesPage.IntializeIDE(
      randomName,
      TeamCoursesData.ProjectTypeOption13,
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
      "testpy"
    );
  });

  test.only("Folder and file structure verifcation/Python-pillow", async ({
    teamCoursesPage,
  }) => {
    const randomName = await UserFunctions.generateName();
    const randomAssignment = await UserFunctions.generateName();
    await teamCoursesPage.signInUser(email, password);
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
      "testpy"
    );
  });
});
