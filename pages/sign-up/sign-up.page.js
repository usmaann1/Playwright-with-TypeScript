const { PlaywrightCore } = require("../../module-imports/helperFunctions.imports");
import Locators from "./sign-up.locator.json";

exports.SignUpPage = class SignUpPage {

  constructor(page) {
    this.intializePage(page);
  }
  
  intializePage(page) {
    this.page = page;
    this.SignUpHeading = this.page.locator(Locators.SignUpHeading);
    this.SignUpBtn = this.page.locator(Locators.SignUpBtn);
    this.OrSignUpUsing = this.page.locator(Locators.OrSignUpUsing);
    this.BySigningUPMessage = this.page.locator(Locators.BySigningUPMessage);
    this.ExplorePlatformBtn = this.page.locator(Locators.ExplorePlatformBtn);
    this.AlreadyHaveAnAccountText = this.page.locator(Locators.AlreadyHaveAnAccountText);
    this.PasswordMustBe6DigitsValidationError = this.page.locator(Locators.PasswordMustBe6DigitsValidationError);
    this.EmailIsRequiredValidationError = this.page.locator(Locators.EmailIsRequiredValidationError);
    this.IamAHeading = this.page.locator(Locators.IamAHeading);
    this.StudentBox = this.page.locator(Locators.StudentBox);
    this.RocketLogo = this.page.locator(Locators.RocketLogo);
    this.StudentHeading = this.page.locator(Locators.StudentHeading);
    this.IamExploringStudentTxt = this.page.locator(Locators.IamExploringStudentTxt);
    this.TeacherBox = this.page.locator(Locators.TeacherBox);
    this.TeacherClassLogo = this.page.locator(Locators.TeacherClassLogo);
    this.TeacherHeading = this.page.locator(Locators.TeacherHeading);
    this.IamExploringTeacherTxt = this.page.locator(Locators.IamExploringTeacherTxt);
  }

  async fillCredentialsAndSignUp(page, username, password) {
    username && (await PlaywrightCore.fill(page.EmailAddressTxtBox, username));
    password && (await PlaywrightCore.fill(page.PasswordTxtBox, password));
    await PlaywrightCore.waitFor(this.SignUpBtn);
    await PlaywrightCore.click(this.SignUpBtn);
  }

};