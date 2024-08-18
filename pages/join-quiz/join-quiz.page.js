const { PlaywrightCore } = require('../../module-imports/helperFunctions.imports')
import Locators from './join-quiz.locator.json'

exports.JoinQuizPage = class JoinQuizPage {
    constructor(page) {
      this.intializePage(page)
    }
    intializePage(page)
    {
      this.page = page;
      this.baseURL = "./"
      this.SignUpHereBtn = this.page.locator(Locators.SignUpHereBtn)
      this.AreYouAteacherText = this.page.locator(Locators.AreYouAteacherText)
      this.EnterBtn = this.page.locator(Locators.EnterBtn)
      this.GamePinInputField = this.page.locator(Locators.GamePinInputField)
      this.JoinQuizHeading = this.page.locator(Locators.JoinQuizHeading)
      this.Logo = this.page.locator(Locators.Logo)
    }
    async navigateToJoinQuizPage(){
      await PlaywrightCore.goTo(this.page, this.baseURL)
    }
}