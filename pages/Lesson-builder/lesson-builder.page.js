const { PlaywrightCore } = require("../../module-imports/helperFunctions.imports");
  import Locators from "./lesson-builder.locator.json";
  
  exports.LessonBuilder = class LessonBuilder {
    constructor(page) {
      this.intializePage(page);
    }
    intializePage(page) {
      this.page = page;
      this.baseURL = "./"
      this.TeamCoursesBtn = this.page.locator(Locators.TeamCoursesBtn);
      this.CreateNewTeamBtnValue = this.page.locator(Locators.CreateNewTeamBtnValue);
      this.StartfromScratch = this.page.locator(Locators.StartfromScratch);
      this.TeamNametxtbox = this.page.locator(Locators.TeamNametxtbox);
      this.SubmitBtn = this.page.locator(Locators.SubmitBtn);
      this.CreatenewassignmentBtn = this.page.locator(Locators.CreatenewassignmentBtn);
      this.CodingAssignmentBtn = this.page.locator(Locators.CodingAssignmentBtn);
      this.CodingAssignmentName = this.page.locator(Locators.CodingAssignmentName);
      this.CodingAssignmentCreateBtn = this.page.locator(Locators.CodingAssignmentCreateBtn);
    }

    async NavigateToTeamCoursesPage(){
     await PlaywrightCore.click(this.TeamCoursesBtn);
    }

    async NavigateToCreateNewTeam(){
        await PlaywrightCore.click(this.CreateNewTeamBtnValue);
    }

    async NavigateToStartFromScratch(){
        await PlaywrightCore.click(this.StartfromScratch);
        
    }

    async NavigateToTeamnametxtbox(){
        
        //await PlaywrightCore(this.TeamNametxtbox);
        await PlaywrightCore.fill(this.TeamNametxtbox, 'Java Class');
    }
  
  };
  