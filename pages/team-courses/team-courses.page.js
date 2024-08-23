const { PlaywrightCore } = require("../../module-imports/helperFunctions.imports");
import { expect } from "@playwright/test";
import Locators from "./team-courses.locator.json";

exports.TeamCoursesPage = class TeamCoursesPage {
  constructor(page) {
    this.intializePage(page);
  }

  intializePage(page) {
    this.page = page;
    this.baseURL = "./";
    this.LoginURL = "./login";
    this.SignInBtn = this.page.locator(Locators.SignInBtn);
    this.SignUpNavigationBtn = this.page.locator(Locators.SignUpNavigationBtn);
    this.SignUpBtn = this.page.locator(Locators.SignUpBtn);
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
    this.FileExplorerBtnClose = this.page.locator(
      Locators.FileExplorerBtnClose
    );
    this.TestBtn = this.page.locator(Locators.TestBtn);
    this.AddTestBtn = this.page.locator(Locators.AddTestBtn);
    this.TestName = this.page.locator(Locators.TestName);
    this.TestInput = this.page.locator(Locators.TestInput);
    this.TestOutput = this.page.locator(Locators.TestOutput);
    this.PublishCheckBox = this.page.locator(Locators.PublishCheckBox);
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
    username && (await PlaywrightCore.fill(this.EmailAddressTxtBox, username));
    password && (await PlaywrightCore.fill(this.PasswordTxtBox, password));
    await PlaywrightCore.waitFor(this.SignInBtn);
    await PlaywrightCore.click(this.SignInBtn);
  }

  async CreateTeam(teamName) {
    await PlaywrightCore.click(this.CoursesBtn);
    await PlaywrightCore.click(this.CoursesBtn);
    await PlaywrightCore.click(this.CreateNewTeam);
    await PlaywrightCore.click(this.StartFromScratch);
    await PlaywrightCore.fill(this.TeamNameInput, teamName);
    await PlaywrightCore.click(this.SubmitBtn);
  }

  async CreateAssignment(assignmentName) {
    await PlaywrightCore.click(this.CreateAssignmentBtn);
    const textExists = await this.page.isVisible('text="Create a course item"');
    if (textExists) await PlaywrightCore.click(this.CodingAssignmentBtn);
    await PlaywrightCore.fill(this.CodingAssignmentInput, assignmentName);
    await PlaywrightCore.click(this.CodingAssignmentCreateBtn);
  }

  async IntializeIDE(ProjecttName) {
    await PlaywrightCore.click(this.IntializeIDEBtn);
    await PlaywrightCore.fill(this.ProjectNameInput, ProjecttName);
    await PlaywrightCore.selectingDropDownByLabel(this.page, "Project type", "Javascript (Node.js)");
    await PlaywrightCore.click(this.SubmitBtn);
  }

  async IDEInteraction() {
    const page = this.page;
    await page.waitForTimeout(10000);
    await PlaywrightCore.click(this.FileExplorerBtnOpen);
    await page.getByTestId("NoteAddIcon").click();
    const file = await page.locator("div").filter({ hasText: /^Filesindex\.js$/ }).getByRole("textbox");
    await file.fill("abc.js");
    await file.press("Enter");
    // await PlaywrightCore.click(this.CreateNewFolder);
    await page.getByTestId("CreateNewFolderIcon").click();
    const folder = await page.locator("div").filter({ hasText: /^Filesindex\.jsabc\.js$/ }).getByRole("textbox");
    await folder.fill("test");
    await folder.press("Enter");
  }

  async createTest(type, oldTestType, newTestType, testName, input, output) {
    await this.page.waitForTimeout(5000);
    await PlaywrightCore.click(this.TestBtn);
    await PlaywrightCore.click(this.AddTestBtn);
    await PlaywrightCore.selectingDropDownByLabel(this.page, "Test Type", type);
    await PlaywrightCore.fill(this.TestName, testName);
    await PlaywrightCore.fill(this.TestInput, input);
    await PlaywrightCore.fill(this.TestOutput, output);
    await PlaywrightCore.selectingDropDownByText(this.page, oldTestType, newTestType);
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

  async afterInviteSignUp(url, userName, password, firstName, lastName) {
    await this.page.goto(url);
    await this.signUpUser(userName, password);
    await PlaywrightCore.click(this.StudentBtn);
    await PlaywrightCore.fill(this.FirstNameInput, firstName);
    await PlaywrightCore.fill(this.LastNameInput, lastName);
    await PlaywrightCore.click(this.FinishBtn);
    // for joined team finsh btn
    await PlaywrightCore.click(this.FinishBtn);
  }

  async createStarterCode(code) {
    await PlaywrightCore.click(this.CreateStarterCode);
    await this.page.waitForTimeout(10000);
    await this.page.getByText("index.js").nth(1).click();
    await this.page.waitForTimeout(10000);
    // Locate the text box
    const textBox = await this.EditorTextBox.nth(1);
    // Focus on the text box
    await textBox.click({ clickCount: 1 });
    await textBox.press("Control+A");
    await textBox.press("Backspace");
    for (const char of code) {
      await textBox.type(char);
    }
    await PlaywrightCore.click(this.EditorSubmit);
    await this.page.waitForTimeout(10000);
    await PlaywrightCore.click(this.SubmitBtn);
  }

  async assertingUserAnswered(name) {
    await this.page.bringToFront();
    const xpath = await Locators.UserSubmissionSuccessFull.replace("###REPLACE###", name);
    const greenButton = await this.page.locator(xpath);
    await expect(greenButton).toBeVisible();
  }

  async assertingUserAnswerHistory(name, textAssertion) {
    await PlaywrightCore.ClickByText(this.page, name);
    await this.page.waitForTimeout(10000);
    await this.page.locator(this.IndexFile).click();
    await this.page.waitForTimeout(10000);
    await PlaywrightCore.ClickByText(this.page, "History");
    await PlaywrightCore.slidingElement(this.page, "slider", "ArrowLeft", textAssertion);
    await PlaywrightCore.slidingElement(this.page, "slider", "ArrowRight", textAssertion);
    const textBox = await this.EditorTextBox.nth(1);
    const editorText = await textBox.textContent();
    expect(editorText).toBe(textAssertion);
  }

  async uploadFile(path) {
    await PlaywrightCore.click(this.FileExplorerBtnOpen);
    await PlaywrightCore.fileUpload(this.UploadFile, path);
  }

  async breakPoint() {
    await this.page.pause();
  }

};