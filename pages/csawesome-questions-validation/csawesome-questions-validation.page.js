const { PlaywrightCore } = require("../../module-imports/helperFunctions.imports");
import { expect } from "@playwright/test";
  import Locators from "./csawesome-questions-validation.locator.json";

  
  exports.csawsome = class csawsome {
    constructor(page) {
      this.intializePage(page);
    }
    intializePage(page) {
      this.page = page;
      this.baseURL = "./"
      this.TeamCoursesBtn = this.page.locator(Locators.TeamCoursesBtn);
      this.CreateNewTeamBtn = this.page.locator(Locators.CreateNewTeamBtn);
      this.csawesome = this.page.locator(Locators.csawesome);
      this.TeamNametxtbox = this.page.locator(Locators.TeamNametxtbox);
      this.SubmitBtn = this.page.locator(Locators.SubmitBtn);
      this.GetStartedFolderClick = this.page.locator(Locators.GetStartedFolder)
      this.UsingObjectsClick = this.page.locator(Locators.UsingObjectsFolder)
      this.BooExpAndIf = this.page.locator(Locators.BoolExpAndIfStatement)
      this.Iterations = this.page.locator(Locators.IterationsClick)
      this.writingclasses = this.page.locator(Locators.WritingClassesClick)
      this.arrays = this.page.locator(Locators.ArraysClick)
      this.arraylist = this.page.locator(Locators.ArrayListClick)
      this.TwoDArray = this.page.locator(Locators.TwoDArrayClick)
      this.Inheritence = this.page.locator(Locators.InheritenceClick)
      this.Recursion = this.page.locator(Locators.RescursionClick)


    }

    async NavigateToTeamCoursesPage(){
     await PlaywrightCore.click(this.TeamCoursesBtn);
    }

    async ClickOnCreateNewTeamBtn(){
      await PlaywrightCore.click(this.CreateNewTeamBtn);
    }

    async ClickOnCSawesome(){
      await PlaywrightCore.click(this.csawesome);
    }

    async FillTeamNameTxtBox(){
      await PlaywrightCore.fill(this.TeamNametxtbox, 'Java Class');

    }
    async Submitbtn(){
      await PlaywrightCore.click(this.SubmitBtn);
    }
    async ClickGetStartedButton(){
      await PlaywrightCore.click(this.GetStartedFolderClick);
    }
    async ClickUsingObjectsButton(){
      await PlaywrightCore.click(this.UsingObjectsClick);
    }
    async ClickBoolExpAndIfButton(){
      await PlaywrightCore.click(this.BooExpAndIf);
    }
    async ClickIterationsButton(){
      await PlaywrightCore.click(this.Iterations);
    }
    async ClickWritingClassesButton(){
      await PlaywrightCore.click(this.writingclasses);
    }
    async ClickArraysButton(){
      await PlaywrightCore.click(this.arrays);
    }
    async ClickArraysListButton(){
      await PlaywrightCore.click(this.ArrayListClick);
    }
    async ClickTwoDArraysButton(){
      await PlaywrightCore.click(this.TwoDArray);
    }
    async ClickInheritenceButton(){
      await PlaywrightCore.click(this.Inheritence);
    }
    async ClickRecursionButton(){
      await PlaywrightCore.click(this.Recursion);
    }


};
