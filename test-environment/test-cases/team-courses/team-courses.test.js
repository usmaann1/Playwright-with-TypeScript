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
  test("[Numair] - TC: Flow Test Python - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
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

  test("[Numair] - TC: Flow Test Java - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
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

  test("[Numair] - TC: Flow Test CSharp - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
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

  test("[Numair] - TC: Flow Test C++ - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
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

  test("[Numair] - TC: Flow Test JavaScript - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
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

  test("[Numair] - TC: Flow Test HTML - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
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

  test("[Numair] - TC: Flow Test Python with Turtle  - Change background color to red and verify the change", async ({
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

  test("[Numair] - TC: Flow Test Python with Tkinter -  - Change text and verify the change", async ({
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

  test("[Numair] - TC: Flow Test Java with Swing- - Change slider color to red and verify the change", async ({
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

  test("[Numair] - TC: Flow Test Python with Matplotlib - Change X and Y axis of the graph and verify the change", async ({
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

  test("[Numair] - TC: Flow Test Python with pillow - - Change background color from purple to red and verify the change from the generated image", async ({
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

  test("[Numair] - TC: Upload Python file - Sign in, create team, create assignment, initialize IDE, upload main file, execute, and verify output", async ({
    teamCoursesPage,
  }) => {
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

  test("[Numair] - TC: Upload JAVA file - Sign in, create team, create assignment, initialize IDE, upload main file, execute, and verify output", async ({
    teamCoursesPage,
  }) => {
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

  test("[Numair] - TC: Upload CSharp file - Sign in, create team, create assignment, initialize IDE, upload main file, execute, and verify output", async ({
    teamCoursesPage,
  }) => {
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

  test("[Numair] - TC: Upload CPP file - Sign in, create team, create assignment, initialize IDE, upload main file, execute, and verify output", async ({
    teamCoursesPage,
  }) => {
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

  test("[Numair] - TC: Upload JavaScript file - Sign in, create team, create assignment, initialize IDE, upload main file, execute, and verify output", async ({
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

  test("[Numair] - TC: Upload HTML file - Sign in, create team, create assignment, initialize IDE, upload main file, execute, and verify output", async ({
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

  test("[Numair] - TC: Upload CSV file - Sign in, create team, create assignment, initialize IDE, upload csv file and verify file", async ({
    teamCoursesPage,
  }) => {
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

  test("[Numair] - TC: Upload JPG file - Sign in, create team, create assignment, initialize IDE, upload JPG file and verify file", async ({
    teamCoursesPage,
  }) => {
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

  test("[Numair] - TC: Upload PNG file - Sign in, create team, create assignment, initialize IDE, upload main file and verify file", async ({
    teamCoursesPage,
  }) => {
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

  test("[Numair] - TC: Flow Traditional Java - Sign in, create team, create assignment, initialize IDE, upload main file, excute and verify output", async ({
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
  });

  test("[Numair] - Folder and file structure verifcation/JavaScript Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
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

  test("[Numair] - Folder and file structure verifcation/Python - Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
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

  test("[Numair] - Folder and file structure verifcation/Java - Sign in, create team, create assignment, initialize IDE, create two folders and one file, import file into main, execute to verify output, drag and drop file into folder, and verify download.", async ({
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

  test("[Numair] - Folder and file structure verifcation/CSharp -Sign in, create team, create assignment, initialize IDE, create two folders and one file, import file into main, execute to verify output, drag and drop file into folder, and verify download. ", async ({
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

  test("[Numair] - Folder and file structure verifcation/CPP - Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
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

  test("[Numair] - Folder and file structure verifcation/HTML - Sign in, create team, create assignment, initialize IDE, create two folders and one file, import file into main, execute to verify output, drag and drop file into folder, and verify download.", async ({
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
  });

  test("[Numair] - Folder and file structure verifcation/Python-turtle -Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
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

  test("[Numair] - Folder and file structure verifcation/Python-matplotlib Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
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

  test("[Numair] - Folder and file structure verifcation/java-swing -Sign in, create team, create assignment, initialize IDE, create two folders and one file, import file into main, execute to verify output, drag and drop file into folder, and verify download.", async ({
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

  test("[Numair] - Folder and file structure verifcation/Python-pillow0-Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
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

  test("[Numair] - TC: after due date python- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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

  test("[Numair] - TC: after due date java- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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

  test("[Numair] - TC: after due date csharp- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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

  test("[Numair] - TC: after due date C++- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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

  test("[Numair] - TC: after due date JavaScript- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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

  test("[Numair] - TC: after due date HTML- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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

  test("[Numair] - TC: after due date Python with Turtle  - Change background color to red and verify the change and check student able to submit", async ({
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

  test("[Numair] - TC: after due date Python with Tkinter -  - Change text and verify the change and check student able to submit", async ({
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

  test("[Numair] - TC: after due date Java with Swing- - Change slider color to red and verify the change and check student able to submit", async ({
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

  test("[Numair] - TC: after due date Python with Matplotlib - Change X and Y axis of the graph and verify the change and check student able to submit", async ({
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

  test("[Numair] - TC: after due date Python with pillow - - Change background color from purple to red and verify the change from the generated image and check student able to submit", async ({
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

  test("[Numair] - TC: before due date python- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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

  test("[Numair] - TC: before due date java- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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

  test("[Numair] - TC: before due date csharp- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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

  test("[Numair] - TC: before due date C++- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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

  test("[Numair] - TC: before due date JavaScript- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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

  test("[Numair] - TC: before due date HTML- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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

  test("[Numair] - TC: before due date Python with Turtle  - Change background color to red and verify the change and check student able to submit", async ({
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

  test("[Numair] - TC: before due date Python with Tkinter -  - Change text and verify the change and check student able to submit", async ({
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

  test("[Numair] - TC: before due date Java with Swing- - Change slider color to red and verify the change and check student able to submit", async ({
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

  test("[Numair] - TC: before due date Python with Matplotlib - Change X and Y axis of the graph and verify the change and check student able to submit", async ({
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

  test("[Numair] - TC: before due date Python with pillow - - Change background color from purple to red and verify the change from the generated image and check student able to submit", async ({
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

  test("[Numair] - TC: Allow resubmission python- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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
    await newTeamCoursesPageInstance.isSubmitDisabled(false);
  });

  test("[Numair] - TC: Allow resubmission java- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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
    await newTeamCoursesPageInstance.isSubmitDisabled(false);
  });

  test("[Numair] - TC: Allow resubmission csharp- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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
    await newTeamCoursesPageInstance.isSubmitDisabled(false);
  });

  test("[Numair] - TC: Allow resubmission C++- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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
    await newTeamCoursesPageInstance.isSubmitDisabled(false);
  });

  test("[Numair] - TC: Allow resubmission JavaScript- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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
    await newTeamCoursesPageInstance.isSubmitDisabled(false);
  });

  test("[Numair] - TC: Allow resubmission HTML- Create Assignment, project, add test, set due date before currnt date, publish, share, join as student, verify student able to submit test", async ({
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
    await newTeamCoursesPageInstance2.isSubmitDisabled(false);
  });

  test("[Numair] - TC: Allow resubmission Python with Turtle  - Change background color to red and verify the change and check student able to submit", async ({
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
    await newTeamCoursesPageInstance.isSubmitDisabled(false);
  });

  test("[Numair] - TC: Allow resubmission Python with Tkinter -  - Change text and verify the change and check student able to submit", async ({
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
    await newTeamCoursesPageInstance.isSubmitDisabled(false);
  });

  test("[Numair] - TC: Allow resubmission Java with Swing- - Change slider color to red and verify the change and check student able to submit", async ({
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
    await newTeamCoursesPageInstance.isSubmitDisabled(false);
  });

  test("[Numair] - TC: Allow resubmission Python with Matplotlib - Change X and Y axis of the graph and verify the change and check student able to submit", async ({
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
    await newTeamCoursesPageInstance.isSubmitDisabled(false);
  });

  test("[Numair] - TC: Allow resubmission Python with pillow - - Change background color from purple to red and verify the change from the generated image and check student able to submit", async ({
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
    await newTeamCoursesPageInstance.isSubmitDisabled(false);
  });

});
