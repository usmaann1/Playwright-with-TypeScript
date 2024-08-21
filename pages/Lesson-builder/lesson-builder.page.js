const {
    PlaywrightCore,
  } = require("../../module-imports/helperFunctions.imports");
  import Locators from "./lesson-builder.locator.json";
  
  exports.LoginPage = class LoginPage {
    constructor(page) {
      this.intializePage(page);
    }
    intializePage(page) {
      this.page = page;
      this.baseURL = "./"
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
      await PlaywrightCore.goTo(this.page, this.baseURL)
      await PlaywrightCore.click(this.SignUpNavigationBtn);
      await PlaywrightCore.click(this.LogInNavigationBtn);
    }
  
  };
  