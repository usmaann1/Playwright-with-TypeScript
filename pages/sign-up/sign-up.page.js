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
  }

};