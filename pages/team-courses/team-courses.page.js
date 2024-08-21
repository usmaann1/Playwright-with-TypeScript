const {
  PlaywrightCore,
} = require("../../module-imports/helperFunctions.imports");
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
    // await PlaywrightCore.isTextPresent(this.StartFromScratch, this.StartFromScratchText);
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
    await PlaywrightCore.selectingDropDown(
      this.page,
      "Project type",
      "Javascript (Node.js)"
    );
    await PlaywrightCore.click(this.SubmitBtn);
  }

  async IDEInteraction() {
    const page = this.page;
    await page.waitForTimeout(10000);
    await PlaywrightCore.click(this.FileExplorerBtnOpen);
    await page.getByTestId("NoteAddIcon").click();
    const file = await page
      .locator("div")
      .filter({ hasText: /^Filesindex\.js$/ })
      .getByRole("textbox");
    await file.fill("abc.js");
    await file.press("Enter");
    // await PlaywrightCore.click(this.CreateNewFolder);
    await page.getByTestId("CreateNewFolderIcon").click();
    const folder = await page
      .locator("div")
      .filter({ hasText: /^Filesindex\.jsabc\.js$/ })
      .getByRole("textbox");
    await folder.fill("test");
    await folder.press("Enter");
  }

  async createTest(testType, testName, input, output) {
    await PlaywrightCore.click(this.TestBtn);
    await PlaywrightCore.click(this.AddTestBtn);
    await PlaywrightCore.selectingDropDown(this.page, "Test Type", testType);
    await PlaywrightCore.fill(this.TestName, testName);
    await PlaywrightCore.fill(this.TestInput, input);
    await PlaywrightCore.fill(this.TestOutput, output);
    await PlaywrightCore.selectingDropDown(this.page, "Type", testType);
  }

  async PublishAndInvite() {
    await PlaywrightCore.check(this.PublishCheckBox);
  }

};
