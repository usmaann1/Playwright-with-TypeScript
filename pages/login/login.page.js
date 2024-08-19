const { PlaywrightCore } = require("../../module-imports/helperFunctions.imports");
import Locators from "./login.locator.json";

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.intializePage(page);
  }
  intializePage(page) {
    this.page = page;
    this.baseURL = "./"
    this.Logo = this.page.locator(Locators.Logo);
    this.GmailLogo = this.page.locator(Locators.GmailLogo);
    this.LoginHeading = this.page.locator(Locators.LoginHeading);
    this.EmailAddressTxtBox = this.page.locator(Locators.EmailAddressTxtBox);
    this.PasswordTxtBox = this.page.locator(Locators.PasswordTxtBox);
    this.SignInBtn = this.page.locator(Locators.SignInBtn);
    this.UserNamePasswordValidationError = this.page.locator(Locators.UserNamePasswordValidationError);
    this.PasswordIsRequiredValidationError = this.page.locator(Locators.PasswordIsRequiredValidationError);
    this.EmailIsRequiredValidationError = this.page.locator(Locators.EmailIsRequiredValidationError);
    this.PleaseEnterAValidEmailValidationError = this.page.locator(Locators.PleaseEnterAValidEmailValidationError);
    this.OrLoginUsingText = this.page.locator(Locators.OrLoginUsingText);
    this.DontHaveAnAccountText = this.page.locator(Locators.DontHaveAnAccountText);
    this.SignUpWithJuicMindBtn = this.page.locator(Locators.SignUpWithJuicMindBtn);
    this.ForgotPasswordBtn = this.page.locator(Locators.ForgotPasswordBtn);
    this.LogInNavigationBtn = this.page.locator(Locators.LogInNavigationBtn);
    this.SignUpNavigationBtn = this.page.locator(Locators.SignUpNavigationBtn);
    this.ProfilePicture = this.page.locator(Locators.ProfilePicture);
    this.ResetPasswordBtn = this.page.locator(Locators.ResetPasswordBtn);
    this.SignUpHeading = this.page.locator(Locators.SignUpHeading);
  }

  async fillCredentialsAndLogin(username, password) {
    username && (await PlaywrightCore.fill(this.EmailAddressTxtBox, username));
    password && (await PlaywrightCore.fill(this.PasswordTxtBox, password));
    await this.clickLoginButton();
  }

  async clickLoginButton() {
    await PlaywrightCore.waitFor(this.SignInBtn);
    await PlaywrightCore.click(this.SignInBtn);
  }

  async NavigateToLoginPage(){
    await this.NavigateToSignUpPage();
    await PlaywrightCore.click(this.LogInNavigationBtn);
  }

  async NavigateToSignUpPage(){
    await PlaywrightCore.goTo(this.page, this.baseURL)
    await PlaywrightCore.click(this.SignUpNavigationBtn);
  }

  async NavigateToForgotPasswordPage(){
    await PlaywrightCore.click(this.ForgotPasswordBtn);
  }

};