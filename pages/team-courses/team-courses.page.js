const {
  PlaywrightCore,
} = require("../../module-imports/helperFunctions.imports");
const dayjs = require('dayjs');
const AdmZip = require("adm-zip");
import { expect } from "@playwright/test";
import Locators from "./team-courses.locator.json";
import { UserFunctions } from "../../helper-functions/userFunctions";
import TeamCoursesData from "../../test-environment/test-assets/test-data-files/team-courses/team-courses-testData.json";

exports.TeamCoursesPage = class TeamCoursesPage {
  constructor(page) {
    this.intializePage(page);
  }

  async intializePage(page) {
    this.page = page;
    this.baseURL = "./";
    this.LoginURL = "./login";
    const { SelectAll, Copy } = await this.page.evaluate(() => {
      const isMac = navigator.userAgent.includes("Mac");
      return {
        SelectAll: isMac ? "Meta+A" : "Control+A",
        Copy: isMac ? "Meta+c" : "Control+c",
      };
    });
    this.GreenColorStyle = /background-color:\s*(rgb\(0,\s*255,\s*0\))/;
    this.GreenColor = "rgb(0, 255, 0)";
    this.RedColor = "#FF0000";
    this.RedColor1 = "#fc0404";
    this.RedColor2 = "#9a0909";
    this.ArrLeft = "ArrowLeft";
    this.ArrRight = "ArrowRight";
    this.SelectAll = SelectAll;
    this.Copy = Copy;
    this.Slider = Locators.Slider;
    this.BackSpace = "Backspace";
    this.History = Locators.History;
    this.BlackMatch = /black/g;
    this.BtnClickedMatch = /Greet/g;
    this.JavaSwing = /Color.BLACK/g;
    this.JavaSwingReplace = "Color.RED";
    this.CreateNewFile = "CreateNewFolderIcon";
    this.ProjectType = Locators.ProjectType;
    this.TestType = Locators.TestType;
    this.CreateCourse = Locators.CreateCourse;
    this.IndexJs = Locators.IndexFile;
    this.MainPy = Locators.MainPy;
    this.ZipUpload = this.page.locator(Locators.ZipUpload);
    this.PlayArrowIcon = this.page.getByTestId(Locators.PlayArrowIcon).first();
    this.SignInBtn = this.page.locator(Locators.SignInBtn);
    this.SignUpNavigationBtn = this.page.locator(Locators.SignUpNavigationBtn);
    this.SignUpBtn = this.page.locator(Locators.SignUpBtn);
    this.VertIcon = this.page.locator(Locators.VertIcons);
    this.EmailAddressTxtBox = this.page.locator(Locators.EmailAddressTxtBox);
    this.PasswordTxtBox = this.page.locator(Locators.PasswordTxtBox);
    this.CoursesBtn = this.page.locator(Locators.CoursesBtn);
    this.CreateNewTeam = this.page.locator(Locators.CreateNewTeam);
    this.StartFromScratch = this.page.locator(Locators.StartFromScratch);
    this.StartFromScratchText = this.page.locator(
      Locators.StartFromScratchText
    );
    this.TeamNameInput = this.page.locator(Locators.TeamNameInput);
    this.SubmitBtn = this.page.locator(Locators.SubmitBtn);
    this.CreateAssignmentBtn = this.page.locator(Locators.CreateAssignmentBtn);
    this.CodingAssignmentBtn = this.page.locator(Locators.CodingAssignmentBtn);
    this.CodingAssignmentInput = this.page.locator(
      Locators.CodingAssignmentInput
    );
    this.CodingAssignmentCreateBtn = this.page.locator(
      Locators.CodingAssignmentCreateBtn
    );
    this.IntializeIDEBtn = this.page.locator(Locators.IntializeIDEBtn);
    this.ProjectNameInput = this.page.locator(Locators.ProjectNameInput);
    this.ProjectTypeSelect = this.page.locator(Locators.ProjectTypeSelect);
    this.TemplateBtn = this.page.locator(Locators.TemplateBtn);
    this.FileExplorerBtnOpen = this.page.locator(Locators.FileExplorerBtnOpen);
    this.OverWriteFile = this.page.locator(Locators.OverWriteFile);
    this.FileExplorerBtnClose = this.page.locator(
      Locators.FileExplorerBtnClose
    );
    this.TestBtn = this.page.locator(Locators.TestBtn);
    this.AddTestBtn = this.page.locator(Locators.AddTestBtn);
    this.TestName = this.page.locator(Locators.TestName);
    this.TestInput = this.page.locator(Locators.TestInput);
    this.TestOutput = this.page.locator(Locators.TestOutput);
    this.PublishCheckBox = this.page.locator(Locators.PublishCheckBox).first();
    this.CreateTestBtn = this.page.locator(Locators.CreateTestBtn);
    this.InviteStudentBtn = this.page.locator(Locators.InviteStudent);
    this.CopyBtn = this.page.locator(Locators.CopyBtn);
    this.StudentBtn = this.page.locator(Locators.StudentBtn);
    this.FirstNameInput = this.page.locator(Locators.FirstNameInput);
    this.LastNameInput = this.page.locator(Locators.LastNameInput);
    this.FinishBtn = this.page.locator(Locators.FinishBtn);
    this.CreateStarterCode = this.page.locator(Locators.CreateStarterCode);
    this.EditorTextBox = this.page.locator(Locators.EditorTextBox);
    this.ModalCloseBtn = this.page.locator(Locators.ModalCloseBtn);
    this.EditorSubmit = this.page.locator(Locators.EditorSubmit);
    this.UserText = this.page.locator(Locators.UserText);
    this.EditorTextBox = this.page.locator(Locators.EditorTextBox);
    this.UploadFile = this.page.locator(Locators.UploadFile);
    this.IndexFile = this.page.locator(Locators.IndexFile);
    this.AddNewItem = this.page.locator(Locators.AddNewItem);
    this.CloudIcon = this.page.locator(Locators.CloudIcon);
    this.EditorPlayButton = this.page.locator(Locators.EditorPlayButton);
    this.EditorStopBtn = this.page.locator(Locators.EditorStopBtn);
    this.FullScreenBtn = this.page.locator(Locators.FullScreenBtn);
    this.CloseFullScreenBtn = this.page.locator(Locators.CloseFullScreenBtn);
    this.HtmlWebView = this.page.locator(Locators.HtmlWebView);
    this.OverRideProjectFiles = this.page.locator(
      Locators.OverRideProjectFiles
    );
    this.ImageEditor = this.page.locator(Locators.ImageEditor);
    this.PillowImage = this.page.locator(Locators.PillowImage);
    this.FileUploadJS = this.page.locator(Locators.FileUploadJS);
    this.FileStructure = {
      javascript: this.page.locator(Locators.FileUploadJS),
      python: this.page.locator(Locators.FileUploadPython),
      java: this.page.locator(Locators.FileUploadJava),
      csharp: this.page.locator(Locators.FileUploadCS),
      cpp: this.page.locator(Locators.FileUploadCpp),
      html: this.page.locator(Locators.FileUploadHTML),
      swing: this.page.locator(Locators.FileUploadSwing),
    };
    this.SettingBtn = this.page.locator(Locators.SettingBtn);
    this.CodeSourceFile = this.page.locator(Locators.CodeMainFile);
    this.CodeTargetFile = this.page.locator(Locators.CodeTargetFolder);
    this.MenuBar = this.page.locator(Locators.MenuBar);
    this.FullScreenMinimize = this.page.locator(Locators.FullScreenMinimize).first();
    this.ClosePopUp = this.page.locator(Locators.ClosePopUp);
    this.DueDateBtn = this.page.locator(Locators.DueDateBtn);
    this.DisableSubmitBtn = this.page.locator(Locators.DisableSubmitBtn);
  }

  async NavigateToSignUpPage() {
    await PlaywrightCore.goTo(this.page, this.baseURL);
    await PlaywrightCore.click(this.SignUpNavigationBtn);
  }

  async signUpUser(username, password) {
    username && (await PlaywrightCore.fill(this.EmailAddressTxtBox, username));
    password && (await PlaywrightCore.fill(this.PasswordTxtBox, password));
    await PlaywrightCore.waitFor(this.SignUpBtn);
    await PlaywrightCore.click(this.SignUpBtn);
  }

  async signInUser(username, password) {
    await PlaywrightCore.goTo(this.page, this.LoginURL);
    await this.zoomOut();
    username && (await PlaywrightCore.fill(this.EmailAddressTxtBox, username));
    password && (await PlaywrightCore.fill(this.PasswordTxtBox, password));
    await PlaywrightCore.waitFor(this.SignInBtn);
    await PlaywrightCore.click(this.SignInBtn);
  }

  async CreateTeam(teamName) {
    await this.zoomOut();
    await PlaywrightCore.waitTimeout(this.page, 5000);
    await PlaywrightCore.click(this.CoursesBtn);
    await PlaywrightCore.click(this.CoursesBtn);
    await PlaywrightCore.click(this.CreateNewTeam);
    await PlaywrightCore.click(this.StartFromScratch);
    await PlaywrightCore.fill(this.TeamNameInput, teamName);
    await PlaywrightCore.click(this.SubmitBtn);
  }

  async CreateAssignment(assignmentName, isAddNewItem = false) {
    if (!isAddNewItem) {
      await PlaywrightCore.click(this.CreateAssignmentBtn);
    } else {
      await PlaywrightCore.click(this.AddNewItem);
    }
    const textExists = await this.page.isVisible(this.CreateCourse);
    if (textExists) await PlaywrightCore.click(this.CodingAssignmentBtn);
    await PlaywrightCore.fill(this.CodingAssignmentInput, assignmentName);
    await PlaywrightCore.click(this.CodingAssignmentCreateBtn);
  }

  async IntializeIDE(ProjecttName, option, isExact = false) {
    await PlaywrightCore.click(this.IntializeIDEBtn);
    await PlaywrightCore.fill(this.ProjectNameInput, ProjecttName);
    if (!isExact) {
      await PlaywrightCore.selectingDropDownByLabel(
        this.page,
        this.ProjectType,
        option
      );
    } else {
      await PlaywrightCore.selectingDropDownByLabelExact(
        this.page,
        this.ProjectType,
        option
      );
    }
    await PlaywrightCore.click(this.SubmitBtn);
  }

  async createTest(type, oldTestType, newTestType, testName, input, output) {
    await PlaywrightCore.waitTimeout(this.page, 5000);
    await PlaywrightCore.click(this.TestBtn);
    await PlaywrightCore.click(this.AddTestBtn);
    await PlaywrightCore.selectingDropDownByLabel(
      this.page,
      this.TestType,
      type
    );
    await PlaywrightCore.fill(this.TestName, testName);
    await PlaywrightCore.fill(this.TestInput, input);
    await PlaywrightCore.fill(this.TestOutput, output);
    await PlaywrightCore.selectingDropDownByText(
      this.page,
      oldTestType,
      newTestType
    );
    await PlaywrightCore.click(this.CreateTestBtn);
  }

  async PublishAndInvite() {
    await PlaywrightCore.check(this.PublishCheckBox);
    await PlaywrightCore.click(this.InviteStudentBtn);
    await PlaywrightCore.click(this.CopyBtn);
    const handle = await this.page.evaluateHandle(() =>
      navigator.clipboard.readText()
    );
    const clipboardContent = await handle.jsonValue();
    await PlaywrightCore.click(this.ModalCloseBtn);
    return clipboardContent;
  }

  async PublishAndInviteCreateLesson() {
    await PlaywrightCore.check(this.PublishCheckBox.nth(0));
    await PlaywrightCore.click(this.InviteStudentBtn);
    await PlaywrightCore.click(this.CopyBtn);
    const handle = await this.page.evaluateHandle(() =>
      navigator.clipboard.readText()
    );
    const clipboardContent = await handle.jsonValue();
    await PlaywrightCore.click(this.ModalCloseBtn);
    return clipboardContent;
  }

  async afterInviteSignUp(url, userName, password, firstName, lastName) {
    await this.page.goto(url);
    await this.signUpUser(userName, password);
    await PlaywrightCore.click(this.StudentBtn);
    await PlaywrightCore.fill(this.FirstNameInput, firstName);
    await PlaywrightCore.fill(this.LastNameInput, lastName);
    await PlaywrightCore.click(this.FinishBtn);
    await PlaywrightCore.waitTimeout(this.page, 5000);
    await PlaywrightCore.click(this.FinishBtn);
  }

  async createStarterCode(code, isIgnore = false) {
    await PlaywrightCore.click(this.CreateStarterCode);
    await PlaywrightCore.waitTimeout(this.page, 10000);
    if (!isIgnore) {
      await this.page.getByText(Locators.IndexJs).nth(1).click();
      await PlaywrightCore.waitTimeout(this.page, 10000);
    }
    const textBox = await this.EditorTextBox.nth(1);
    await textBox.click({ clickCount: 1 });
    await textBox.press(this.SelectAll);
    await textBox.press(this.BackSpace);
    if (!isIgnore) {
      for (const char of code) {
        await textBox.type(char);
      }
    } else {
      await textBox.fill(code);
    }
    if (isIgnore) {
      await PlaywrightCore.waitTimeout(this.page, 20000);
      await this.PlayArrowIcon.click();
      await PlaywrightCore.waitTimeout(this.page, 20000);
      const element = await this.page.$(Locators.Terminal);
      await PlaywrightCore.waitTimeout(this.page, 20000);
      const innerText = await element.innerText();
      const isValid = await innerText.includes(TeamCoursesData.AssertionText);
      expect(isValid).toBe(true);
    }
    await PlaywrightCore.waitTimeout(this.page, 5000);
    await PlaywrightCore.click(this.EditorSubmit);
    await PlaywrightCore.waitTimeout(this.page, 10000);
    await PlaywrightCore.click(this.SubmitBtn);
  }

  async commonClipBoardSteps(isTrue = true) {
    await PlaywrightCore.waitTimeout(this.page, 10000);
    if (isTrue) await this.page.getByText(this.MainPy).nth(1).click();
    await PlaywrightCore.waitTimeout(this.page, 10000);
    await expect(this.CloudIcon.nth(1)).toBeVisible();
    await PlaywrightCore.waitTimeout(this.page, 20000);
    await PlaywrightCore.click(this.EditorPlayButton);
    await PlaywrightCore.waitTimeout(this.page, 10000);
    await PlaywrightCore.click(this.EditorStopBtn);
    await PlaywrightCore.waitTimeout(this.page, 5000);
    const codeEditorContent = await this.EditorTextBox.nth(1);
    await codeEditorContent.press(this.SelectAll);
    await codeEditorContent.press(this.Copy);
    const clipboardContent = await this.page.evaluate(async () => {
      return await navigator.clipboard.readText();
    });
    return { clipboardContent, codeEditorContent };
  }

  async normalCommonSteps(file, input, output, isHtml = false) {
    await PlaywrightCore.waitTimeout(this.page, 20000);
    await expect(this.CloudIcon.nth(1)).toBeVisible();
    const codeEditorContent = await this.EditorTextBox.nth(1);
    await codeEditorContent.press(this.SelectAll);
    await codeEditorContent.press(this.BackSpace);
    await codeEditorContent.fill(input);
    await PlaywrightCore.waitTimeout(this.page, 20000);
    await PlaywrightCore.click(this.EditorPlayButton);
    await PlaywrightCore.waitTimeout(this.page, 20000);
    if (!isHtml) {
      const element = await this.page.$(Locators.Terminal);
      await PlaywrightCore.waitTimeout(this.page, 20000);
      const innerText = await element.innerText();
      const isValid = await innerText.includes(TeamCoursesData.AssertionText);
      expect(isValid).toBe(true);
      await this.createTest(
        TeamCoursesData.createTestType,
        TeamCoursesData.createTestOldType,
        TeamCoursesData.createTestNewType,
        TeamCoursesData.createTestName,
        input,
        output
      );
    } else {
      await PlaywrightCore.waitTimeout(this.page, 20000);
      const src = await this.HtmlWebView.evaluate((el) => el.src);
      return src;
    }
  }

  async simplePython() {
    await this.normalCommonSteps(
      this.MainPy,
      TeamCoursesData.pythonTestInput,
      TeamCoursesData.pythonTestOutput
    );
  }

  async simpleJava() {
    await this.normalCommonSteps(
      this.MainJava,
      TeamCoursesData.javaTestInput,
      TeamCoursesData.javaTestOutput
    );
  }

  async simpleCsharp() {
    await this.normalCommonSteps(
      this.MainCS,
      TeamCoursesData.csharpTestInput,
      TeamCoursesData.csharpTestOutput
    );
  }

  async simpleCPP() {
    await this.normalCommonSteps(
      this.MainCPP,
      TeamCoursesData.cppTestInput,
      TeamCoursesData.cppTestOutput
    );
  }

  async simpleHTML() {
    const url = await this.normalCommonSteps(
      this.MainCPP,
      TeamCoursesData.HTMLTestInput,
      TeamCoursesData.HTMLTestOutput,
      true
    );
    return url;
  }

  async getHtmlData(data, url) {
    await this.page.goto(url);
    await PlaywrightCore.waitTimeout(this.page, 5000);
    const htmlContent = await this.page.content();
    const isValid = await htmlContent.includes(data);
    expect(isValid).toBe(true);
  }
  async getHtmlData2(page, data, url) {
    await this.page.goto(url);
    await PlaywrightCore.waitTimeout(page, 5000);
    const htmlContent = await this.page.content();
    const isValid = await htmlContent.includes(data);
    expect(isValid).toBe(true);
  }

  async pythonWithTurtle() {
    const { clipboardContent, codeEditorContent } =
      await this.commonClipBoardSteps();
    const updatedCode = clipboardContent.replace(
      this.BlackMatch,
      TeamCoursesData.RedColor
    );
    await codeEditorContent.press(this.BackSpace);
    await codeEditorContent.fill(updatedCode);
    await PlaywrightCore.waitTimeout(this.page, 5000);
    await PlaywrightCore.click(this.EditorPlayButton);
    await PlaywrightCore.waitTimeout(this.page, 10000);
    await PlaywrightCore.click(this.FullScreenBtn.nth(1));
    const Colors = await UserFunctions.getAllColorsFromCanvas(
      this.page,
      TeamCoursesData.AssetsPaths
    );
    const hasShadeOfRed = await Colors.some((color) =>
      UserFunctions.isShadeOfRed(color)
    );
    await PlaywrightCore.waitTimeout(this.page, 5000);
    await PlaywrightCore.click(this.CloseFullScreenBtn);
    await expect(hasShadeOfRed).toBe(true);
  }

  async pythonWithMatplotlib() {
    const { clipboardContent, codeEditorContent } =
      await this.commonClipBoardSteps();
    const updatedCode = clipboardContent.replace(6, 10).replace(250, 140);
    await codeEditorContent.press(this.BackSpace);
    await codeEditorContent.fill(updatedCode);
    await PlaywrightCore.waitTimeout(this.page, 5000);
    await PlaywrightCore.click(this.EditorPlayButton);
    await PlaywrightCore.waitTimeout(this.page, 10000);
    await PlaywrightCore.click(this.FullScreenBtn.nth(1));
    await PlaywrightCore.waitTimeout(this.page, 5000);
    const isValid = await UserFunctions.getCanvasValidations(
      this.page,
      TeamCoursesData.AssetsPaths,
      10,
      140
    );
    await expect(isValid).toBe(true);
  }

  async pythonWithPillow() {
    await PlaywrightCore.waitTimeout(this.page, 10000);
    const codeEditorContent = await this.EditorTextBox.nth(1);
    await codeEditorContent.press(this.SelectAll);
    await codeEditorContent.press(this.Copy);
    const clipboardContent = await this.page.evaluate(async () => {
      return await navigator.clipboard.readText();
    });
    const updatedCode = clipboardContent.replace("'purple'", "'red'");
    await codeEditorContent.press(this.BackSpace);
    await codeEditorContent.fill(updatedCode);
    await PlaywrightCore.waitTimeout(this.page, 5000);
    await PlaywrightCore.click(this.EditorPlayButton);
    await PlaywrightCore.waitTimeout(this.page, 15000);
    await PlaywrightCore.click(this.FileExplorerBtnOpen);
    await PlaywrightCore.waitTimeout(this.page, 5000);
    await this.page
      .getByText(TeamCoursesData.TestGeneratedFile)
      .first()
      .click();
    await PlaywrightCore.waitTimeout(this.page, 20000);
    const Colors = await UserFunctions.getAllColorsFromImage(
      this.PillowImage,
      TeamCoursesData.AssetsPaths
    );
    const hasShadeOfRed = await Colors.some((color) =>
      UserFunctions.isShadeOfRed(color)
    );
    await expect(hasShadeOfRed).toBe(true);
  }

  async javaWithSwing() {
    const { clipboardContent, codeEditorContent } =
      await this.commonClipBoardSteps(false);
    const updatedCode = clipboardContent.replace(
      this.JavaSwing,
      this.JavaSwingReplace
    );
    await codeEditorContent.press(this.BackSpace);
    await codeEditorContent.fill(updatedCode);
    await PlaywrightCore.waitTimeout(this.page, 5000);
    await PlaywrightCore.click(this.EditorPlayButton);
    await PlaywrightCore.waitTimeout(this.page, 10000);
    await PlaywrightCore.click(this.FullScreenBtn.nth(1));
    await PlaywrightCore.waitTimeout(this.page, 5000);
    const Colors = await UserFunctions.getAllColorsFromCanvas(
      this.page,
      TeamCoursesData.AssetsPaths
    );
    const hasShadeOfRed = await Colors.some((color) =>
      UserFunctions.isShadeOfRed(color)
    );
    await expect(hasShadeOfRed).toBe(true);
  }

  async pythonWithTkinter() {
    const { clipboardContent, codeEditorContent } =
      await this.commonClipBoardSteps();
    const updatedCode = clipboardContent.replace(
      this.BtnClickedMatch,
      TeamCoursesData.BtnClickedTest
    );
    await codeEditorContent.press(this.BackSpace);
    await codeEditorContent.fill(updatedCode);
    await PlaywrightCore.waitTimeout(this.page, 5000);
    await PlaywrightCore.click(this.EditorPlayButton);
    await PlaywrightCore.waitTimeout(this.page, 10000);
    await PlaywrightCore.click(this.FullScreenBtn.nth(1));
    await PlaywrightCore.waitTimeout(this.page, 5000);
    const isValid = await UserFunctions.getCanvasValidations(
      this.page,
      TeamCoursesData.AssetsPaths,
      TeamCoursesData.BtnClickedTest
    );
    await expect(isValid).toBe(true);
  }

  async assertingUserAnswered(name) {
    await this.page.bringToFront();
    const xpath = await Locators.UserSubmissionSuccessFull.replace(
      "###REPLACE###",
      name
    );
    const greenButton = await this.page.locator(xpath);
    const styleAttribute = await greenButton.getAttribute("style");
    const backgroundColorStyle = styleAttribute.match(this.GreenColorStyle)[1];
    await expect(backgroundColorStyle).toBe(this.GreenColor);
  }

  async assertingUserAnswerHistory(name, textAssertion, duration = null) {
    await PlaywrightCore.ClickByText(this.page, name);
    await PlaywrightCore.waitTimeout(this.page, 10000);
    if (!duration) {
      await this.page.getByText(Locators.IndexJs).nth(1).click();
    }
    await PlaywrightCore.waitTimeout(this.page, 10000);
    await PlaywrightCore.ClickByText(this.page, this.History);
    await PlaywrightCore.slidingElement(
      this.page,
      this.Slider,
      this.ArrLeft,
      textAssertion,
      duration
    );
    await PlaywrightCore.slidingElement(
      this.page,
      this.Slider,
      this.ArrRight,
      textAssertion,
      duration
    );
    const textBox = await this.EditorTextBox.nth(1);
    const editorText = await textBox.textContent();
    await expect(editorText).toBe(textAssertion);
  }

  async uploadFile(path) {
    await PlaywrightCore.click(this.FileExplorerBtnOpen);
    await PlaywrightCore.waitTimeout(this.page, 10000);
    await PlaywrightCore.fileUpload(this.UploadFile, path);
  }

  async uploadProgrammingFile(path = null, isHtml = false) {
    await PlaywrightCore.waitTimeout(this.page, 5000);
    if (!isHtml) {
      await PlaywrightCore.click(this.OverWriteFile);
      await PlaywrightCore.waitTimeout(this.page, 20000);
      await this.PlayArrowIcon.click();
      await PlaywrightCore.waitTimeout(this.page, 20000);
      const element = await this.page.$(Locators.Terminal);
      await PlaywrightCore.waitTimeout(this.page, 20000);
      const innerText = await element.innerText();
      const isValid = await innerText.includes(1);
      await expect(isValid).toBe(true);
    } else {
      await PlaywrightCore.click(this.FileExplorerBtnOpen);
      await PlaywrightCore.waitTimeout(this.page, 5000);
      await this.VertIcon.first().click();
      await PlaywrightCore.waitTimeout(this.page, 5000);
      await PlaywrightCore.getByRoleItem(
        this.page,
        TeamCoursesData.MenuItem,
        TeamCoursesData.UploadZip
      );
      await PlaywrightCore.waitTimeout(this.page, 10000);
      await PlaywrightCore.fileUpload(this.ZipUpload, path);
      await PlaywrightCore.click(this.OverRideProjectFiles);
      await PlaywrightCore.waitTimeout(this.page, 20000);
      await this.PlayArrowIcon.click();
      await PlaywrightCore.waitTimeout(this.page, 20000);
      const src = await this.HtmlWebView.evaluate((el) => el.src);
      return src;
    }
  }

  async uploadCSV(path) {
    await PlaywrightCore.waitTimeout(this.page, 5000);
    await this.page.getByText(TeamCoursesData.CSVFileName).first().click();
    await PlaywrightCore.waitTimeout(this.page, 10000);
    const textBox = await this.EditorTextBox.nth(1);
    const editorText = await textBox.textContent();
    const isValid = await editorText.includes(5);
    await expect(isValid).toBe(true);
  }

  async AssertImages(fileName) {
    await PlaywrightCore.waitTimeout(this.page, 5000);
    await this.page.getByText(fileName).first().click();
    await PlaywrightCore.waitTimeout(this.page, 20000);
    const text = await UserFunctions.imageTextValidation(
      this.ImageEditor,
      TeamCoursesData.AssetsPaths,
      TeamCoursesData.ImagesTextAssertion
    );
    const isValid = await text.includes(TeamCoursesData.ImagesTextAssertion);
    await expect(isValid).toBe(true);
  }

  async TraditionalJava(name, option, input, output) {
    await PlaywrightCore.click(this.IntializeIDEBtn);
    await PlaywrightCore.fill(this.ProjectNameInput, name);
    await this.page.getByLabel(this.ProjectType).click();
    await this.page.getByRole("option", { name: option }).click();
    await PlaywrightCore.click(this.SubmitBtn);
    await PlaywrightCore.waitTimeout(this.page, 20000);
    await expect(this.CloudIcon.nth(1)).toBeVisible();
    const codeEditorContent = await this.EditorTextBox.nth(1);
    await codeEditorContent.press(this.SelectAll);
    await codeEditorContent.press(this.BackSpace);
    await codeEditorContent.fill(input);
    await PlaywrightCore.waitTimeout(this.page, 20000);
    await PlaywrightCore.click(this.EditorPlayButton);
    await PlaywrightCore.waitTimeout(this.page, 20000);
    const element = await this.page.$(Locators.Terminal);
    await PlaywrightCore.waitTimeout(this.page, 20000);
    const innerText = await element.innerText();
    const isValid = await innerText.includes(output);
    expect(isValid).toBe(true);
  }

  async setPerviousDueDate() {
    await this.page.addStyleTag({ content: '* { transition: none !important; animation: none !important; transform: none !important }' });
    await PlaywrightCore.click(this.ClosePopUp);
    // await this.page.locator('div').filter({ hasText: /^Due Date$/ }).getByLabel('controlled').check();
    await PlaywrightCore.click(this.DueDateBtn);
    const previousDay = dayjs().subtract(1, 'day').format('MM/DD/YYYY');
    await this.page.getByPlaceholder('MM/DD/YYYY hh:mm aa').fill(`${previousDay} 11:00 AM`);
  }

  async isSubmitDisabled() {
    await PlaywrightCore.click(this.CreateStarterCode);
    const isDisabled = await this.DisableSubmitBtn.isDisabled();
    expect(isDisabled).toBe(true);
  }

  async fileStructureJSPYCPP(
    intialFile,
    intialFileName,
    path,
    newFile,
    newFileName,
    key,
    changedPath,
    source,
    target,
    file,
    folder,
    matchArray,
    checkAllFiles = true
  ) {
    await PlaywrightCore.click(this.FileExplorerBtnOpen);
    await PlaywrightCore.createfile(
      this.page,
      this.CreateNewFile,
      intialFileName,
      intialFile
    );
    await PlaywrightCore.waitTimeout(this.page, 5000);
    await PlaywrightCore.createfile(
      this.page,
      this.CreateNewFile,
      newFileName,
      newFile
    );
    await PlaywrightCore.waitTimeout(this.page, 5000);
    const fileLocator = this.FileStructure[key];
    await PlaywrightCore.fileUpload(fileLocator, path);
    if (key === "csharp") {
      await this.page
        .locator("div")
        .filter({ hasText: /^SettingsTestsConsole$/ })
        .getByTestId("SettingsIcon")
        .click();
    } else {
      await this.SettingBtn.click();
    }
    await this.page.getByLabel("File").click();
    await this.page.getByRole("option", { name: changedPath }).click();
    await PlaywrightCore.waitTimeout(this.page, 20000);
    await PlaywrightCore.click(this.EditorPlayButton);
    await PlaywrightCore.waitTimeout(this.page, 20000);
    const element = await this.page.$(Locators.Terminal);
    await PlaywrightCore.waitTimeout(this.page, 20000);
    const innerText = await element.innerText();
    const isValid = await innerText.includes(TeamCoursesData.ChangedFileOutput);
    expect(isValid).toBe(true);
    await PlaywrightCore.waitTimeout(this.page, 20000);
    await this.page.getByText(folder).first().click();
    const fileHandle = await this.page.locator(source);
    const folderHandle = await this.page.locator(target);
    await fileHandle.dragTo(folderHandle);
    await PlaywrightCore.click(this.MenuBar);
    const [download] = await Promise.all([
      this.page.waitForEvent("download"),
      this.page.locator("text=Download Project").click(),
    ]);
    await download.saveAs(TeamCoursesData.ChangedFilePath);
    const zip = new AdmZip(TeamCoursesData.ChangedFilePath);
    const zipEntries = zip.getEntries();
    const entryNames = zipEntries.map((entry) => entry.entryName);
    let allFilesHaveData = false
    if (checkAllFiles) {
      allFilesHaveData = zipEntries.every((entry) => {
        if (!entry.isDirectory) {
          const fileContent = entry.getData().toString('utf8');
          return fileContent.length > 0;
        }
        return true;
      });
    } else {
      allFilesHaveData = zipEntries.some((entry) => {
        if (!entry.isDirectory) {
          const fileContent = entry.getData().toString('utf8');
          return fileContent.length > 0;
        }
        return true;
      });
    }
    const allMatch = entryNames.every((entryName) => matchArray.includes(entryName));
    await expect(allFilesHaveData).toBe(true);
    await expect(allMatch).toBe(true);
  }

  async fileStructureJAVACSHTML(
    intialFile,
    intialFileName,
    path,
    newFile,
    newFileName,
    key,
    changedPath,
    source,
    target,
    file,
    folder,
    changedMainFile,
    matchArray,
    checkAllFiles = true

  ) {
    await PlaywrightCore.waitTimeout(this.page, 20000);
    const codeEditorContent = await this.EditorTextBox.nth(1);
    await codeEditorContent.press(this.SelectAll);
    await codeEditorContent.press(this.BackSpace);
    await codeEditorContent.fill(changedMainFile);
    await PlaywrightCore.click(this.FileExplorerBtnOpen);
    await PlaywrightCore.createfile(
      this.page,
      this.CreateNewFile,
      intialFileName,
      intialFile
    );
    await PlaywrightCore.waitTimeout(this.page, 5000);
    await PlaywrightCore.createfile(
      this.page,
      this.CreateNewFile,
      newFileName,
      newFile
    );
    await PlaywrightCore.waitTimeout(this.page, 5000);
    const fileLocator = this.FileStructure[key];
    await PlaywrightCore.fileUpload(fileLocator, path);
    await PlaywrightCore.waitTimeout(this.page, 20000);
    await PlaywrightCore.click(this.EditorPlayButton);
    await PlaywrightCore.waitTimeout(this.page, 20000);
    if (key === "html") {
      const src = await this.HtmlWebView.evaluate((el) => el.src);
      return src;
    } else if (key === "swing") {
      await PlaywrightCore.click(this.FullScreenBtn.nth(1));
      await PlaywrightCore.waitTimeout(this.page, 5000);
      const Colors = await UserFunctions.getAllColorsFromCanvas(
        this.page,
        TeamCoursesData.AssetsPaths
      );
      const hasShadeOfRed = await Colors.some((color) =>
        UserFunctions.isShadeOfRed(color)
      );
      await expect(hasShadeOfRed).toBe(true);
      await PlaywrightCore.click(this.FullScreenMinimize);
    } else {
      const element = await this.page.$(Locators.Terminal);
      await PlaywrightCore.waitTimeout(this.page, 20000);
      const innerText = await element.innerText();
      const isValid = await innerText.includes(
        TeamCoursesData.ChangedFileOutput
      );
      expect(isValid).toBe(true);
    }
    await this.page.getByText(folder).first().click();
    const fileHandle = await this.page.locator(source);
    const folderHandle = await this.page.locator(target);
    await fileHandle.dragTo(folderHandle);
    await PlaywrightCore.click(this.MenuBar);
    const [download] = await Promise.all([
      this.page.waitForEvent("download"),
      this.page.locator("text=Download Project").click(),
    ]);
    await download.saveAs(TeamCoursesData.ChangedFilePath);
    const zip = new AdmZip(TeamCoursesData.ChangedFilePath);
    const zipEntries = zip.getEntries();
    const entryNames = zipEntries.map((entry) => entry.entryName);
    let allFilesHaveData = false
    if (checkAllFiles) {
      allFilesHaveData = zipEntries.every((entry) => {
        if (!entry.isDirectory) {
          const fileContent = entry.getData().toString('utf8');
          return fileContent.length > 0;
        }
        return true;
      });
    } else {
      allFilesHaveData = zipEntries.some((entry) => {
        if (!entry.isDirectory) {
          const fileContent = entry.getData().toString('utf8');
          return fileContent.length > 0;
        }
        return true;
      });
    }
    const allMatch = entryNames.every((entryName) => matchArray.includes(entryName));
    await expect(allFilesHaveData).toBe(true);
    await expect(allMatch).toBe(true);
  }

  async fileStructureHTMLRemaining(
    intialFile,
    intialFileName,
    path,
    newFile,
    newFileName,
    key,
    changedPath,
    source,
    target,
    file,
    folder,
    changedMainFile,
    matchArray,
    checkAllFiles = true
  ) {
    await this.page.getByText(folder).first().click();
    const fileHandle = await this.page.locator(source);
    const folderHandle = await this.page.locator(target);
    await fileHandle.dragTo(folderHandle);
    await PlaywrightCore.click(this.MenuBar);
    const [download] = await Promise.all([
      this.page.waitForEvent("download"),
      this.page.locator("text=Download Project").click(),
    ]);
    await download.saveAs(TeamCoursesData.ChangedFilePath);
    const zip = new AdmZip(TeamCoursesData.ChangedFilePath);
    const zipEntries = zip.getEntries();
    const entryNames = zipEntries.map((entry) => entry.entryName);
    let allFilesHaveData = false
    if (checkAllFiles) {
      allFilesHaveData = zipEntries.every((entry) => {
        if (!entry.isDirectory) {
          const fileContent = entry.getData().toString('utf8');
          return fileContent.length > 0;
        }
        return true;
      });
    } else {
      allFilesHaveData = zipEntries.some((entry) => {
        if (!entry.isDirectory) {
          const fileContent = entry.getData().toString('utf8');
          return fileContent.length > 0;
        }
        return true;
      });
    }
    const allMatch = entryNames.every((entryName) => matchArray.includes(entryName));
    await expect(allFilesHaveData).toBe(true);
    await expect(allMatch).toBe(true);
  }

  async breakPoint() {
    await this.page.pause();
  }

  async zoomOut() {
    await this.page.evaluate(() => {
      document.body.style.zoom = "50%";
    });
  }

  async waitFortime(time) {
    await PlaywrightCore.waitTimeout(this.page, time);
  }
};
