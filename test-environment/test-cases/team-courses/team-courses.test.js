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
  test("[Numair] - TC: Flow Test Python - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
    teamCoursesPage,
    browser,
  }) => {
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

  test("[Numair] - TC: Flow Test Java - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
    teamCoursesPage,
    browser,
  }) => {
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

  test("[Numair] - TC: Flow Test CSharp - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
    teamCoursesPage,
    browser,
  }) => {
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

  test("[Numair] - TC: Flow Test C++ - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
    teamCoursesPage,
    browser,
  }) => {
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

  test("[Numair] - TC: Flow Test JavaScript - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
    teamCoursesPage,
    browser,
  }) => {
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
  });

  test("[Numair] - TC: Flow Test HTML - Create Assignment, project, add test, publish, share, join as student, submit test, verify answers", async ({
    teamCoursesPage,
    browser,
  }) => {
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

  test("[Numair] - TC: Flow Test Python with Turtle  - Change background color to red and verify the change", async ({
    teamCoursesPage,
  }) => {
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

  test("[Numair] - TC: Flow Test Python with Tkinter -  - Change text and verify the change", async ({
    teamCoursesPage,
  }) => {
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

  test("[Numair] - TC: Flow Test Java with Swing- - Change slider color to red and verify the change", async ({
    teamCoursesPage,
  }) => {
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

  test("[Numair] - TC: Flow Test Python with Matplotlib - Change X and Y axis of the graph and verify the change", async ({
    teamCoursesPage,
  }) => {
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

  test("[Numair] - TC: Flow Test Python with pillow - - Change background color from purple to red and verify the change from the generated image", async ({
    teamCoursesPage,
  }) => {
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

  test("[Numair] - TC: Upload Python file - Sign in, create team, create assignment, initialize IDE, upload main file, execute, and verify output", async ({
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
    await teamCoursesPage.waitFortime(10000);
    await teamCoursesPage.uploadFile(TeamCoursesData.PythonFile);
    await teamCoursesPage.uploadProgrammingFile();
  });

  test("[Numair] - TC: Upload JAVA file - Sign in, create team, create assignment, initialize IDE, upload main file, execute, and verify output", async ({
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
    await teamCoursesPage.waitFortime(10000);
    await teamCoursesPage.uploadFile(TeamCoursesData.JavaFile);
    await teamCoursesPage.uploadProgrammingFile();
  });

  test("[Numair] - TC: Upload CSharp file - Sign in, create team, create assignment, initialize IDE, upload main file, execute, and verify output", async ({
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
    await teamCoursesPage.waitFortime(10000);
    await teamCoursesPage.uploadFile(TeamCoursesData.CSharpFile);
    await teamCoursesPage.uploadProgrammingFile();
  });

  test("[Numair] - TC: Upload CPP file - Sign in, create team, create assignment, initialize IDE, upload main file, execute, and verify output", async ({
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
    await teamCoursesPage.waitFortime(10000);
    await teamCoursesPage.uploadFile(TeamCoursesData.CPPFile);
    await teamCoursesPage.uploadProgrammingFile();
  });

  test("[Numair] - TC: Upload JavaScript file - Sign in, create team, create assignment, initialize IDE, upload main file, execute, and verify output", async ({
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

  test("[Numair] - TC: Upload CSV file - Sign in, create team, create assignment, initialize IDE, upload csv file and verify file", async ({
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
    await teamCoursesPage.waitFortime(10000);
    await teamCoursesPage.uploadFile(TeamCoursesData.CSVFile);
    await teamCoursesPage.uploadCSV();
  });

  test("[Numair] - TC: Upload JPG file - Sign in, create team, create assignment, initialize IDE, upload JPG file and verify file", async ({
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
    await teamCoursesPage.uploadFile(TeamCoursesData.JPGFile);
    await teamCoursesPage.AssertImages(TeamCoursesData.TestJPG);
  });

  test("[Numair] - TC: Upload PNG file - Sign in, create team, create assignment, initialize IDE, upload main file and verify file", async ({
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
    await teamCoursesPage.uploadFile(TeamCoursesData.PNGFile);
    await teamCoursesPage.AssertImages(TeamCoursesData.TestPNG);
  });

  test("[Numair] - TC: Flow Traditional Java - Sign in, create team, create assignment, initialize IDE, upload main file, excute and verify output", async ({
    teamCoursesPage,
  }) => {
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

  test("[Numair] - Folder and file structure verifcation/JavaScript Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
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
      "testjs",
      ["index.js", "testjs/", "testjsnew/", "testjsnew/testjs.js"]
    );
  });

  test("[Numair] - Folder and file structure verifcation/Python - Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
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
      "testpy",
      ["main.py", "testpy/", "testpynew/", "testpynew/testpy.py"]
    );
  });

  test("[Numair] - Folder and file structure verifcation/Java - Sign in, create team, create assignment, initialize IDE, create two folders and one file, import file into main, execute to verify output, drag and drop file into folder, and verify download.", async ({
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
      TeamCoursesData.FileStructureJava,
      ["Helper/", "Helpernew/", "Helpernew/Helper.java", "Main.java"]
    );
  });

  test("[Numair] - Folder and file structure verifcation/CSharp -Sign in, create team, create assignment, initialize IDE, create two folders and one file, import file into main, execute to verify output, drag and drop file into folder, and verify download. ", async ({
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
      TeamCoursesData.FileStructureCSharp,
      ["Helper/", "Helpernew/", "Helpernew/Helper.cs", "main.cs", "main.csproj"]
    );
  });

  test("[Numair] - Folder and file structure verifcation/CPP - Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
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
      "testcpp",
      ["main.cpp", "testcpp/", "testcppnew/", "testcppnew/testcpp.cpp"]
    );
  });

  test("[Numair] - Folder and file structure verifcation/HTML - Sign in, create team, create assignment, initialize IDE, create two folders and one file, import file into main, execute to verify output, drag and drop file into folder, and verify download.", async ({
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
      TeamCoursesData.FileStructureHTML,
      [
        "Helper/",
        "Helpernew/",
        "Helpernew/Helper.js",
        "index.html",
        "script.js",
        "styles.css",
      ]
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
      ]
    );
  });

  test("[Numair] - Folder and file structure verifcation/Python-turtle -Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
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
      "testpy",
      ["main.py", "testpy/", "testpynew/", "testpynew/testpy.py"]
    );
  });

  test("[Numair] - Folder and file structure verifcation/Python-matplotlib Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
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
      "testpy",
      ["main.py", "testpy/", "testpynew/", "testpynew/testpy.py"]
    );
  });

  test("[Numair] - Folder and file structure verifcation/java-swing -Sign in, create team, create assignment, initialize IDE, create two folders and one file, import file into main, execute to verify output, drag and drop file into folder, and verify download.", async ({
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
      ]
    );
  });

  test("[Numair] - Folder and file structure verifcation/Python-pillow0-Sign in, create team, create assignment, initialize IDE, create two folders and one file, change entry point, execute to verify output, drag and drop the file into a folder, and verify download.", async ({
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
      "testpy",
      ["main.py", "testpy/", "testpynew/", "testpynew/testpy.py"]
    );
  });
});
