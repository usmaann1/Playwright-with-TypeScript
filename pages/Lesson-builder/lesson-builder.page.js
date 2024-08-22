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
      this.CreateNewTeamBtn = this.page.locator(Locators.CreateNewTeamBtn);
      this.StartfromScratch = this.page.locator(Locators.StartfromScratch);
      this.TeamNametxtbox = this.page.locator(Locators.TeamNametxtbox);
      this.SubmitBtn = this.page.locator(Locators.SubmitBtn);
      this.CreatenewassignmentBtn = this.page.locator(Locators.CreatenewassignmentBtn);
      this.CodingAssignmentBtn = this.page.locator(Locators.CodingAssignmentBtn);
      this.CodingAssignmentName = this.page.locator(Locators.CodingAssignmentName);
      this.CodingAssignmentCreateBtn = this.page.locator(Locators.CodingAssignmentCreateBtn);
      this.PublishButton = this.page.locator(Locators.PublishButton);
      this.thirdsixdot = this.page.locator(Locators.thirdsixdotsixdot);
      this.PresentationModeBtn = this.page.locator(Locators.PresentationMoeBtn);
      


    }

    async NavigateToTeamCoursesPage(){
     await PlaywrightCore.click(this.TeamCoursesBtn);
    }

    async ClickOnCreateNewTeamBtn(){
      await PlaywrightCore.click(this.CreateNewTeamBtn);
    }

    async ClickOnStartFromScratch(){
      await PlaywrightCore.click(this.StartfromScratch);
    }

    async FillTeamNameTxtBox(){
      await PlaywrightCore.fill(this.TeamNametxtbox, 'Java Class');
    }

    async Submitbtn(){
        await PlaywrightCore.click(this.SubmitBtn);
      }
    async CreateAssignmentbtn(){
        await PlaywrightCore.click(this.CreatenewassignmentBtn);
      }

      async CodingAssignmentbtn(){
        await PlaywrightCore.click(this.CodingAssignmentBtn);
      }

      async CodingAssignment(){
        await PlaywrightCore.fill(this.CodingAssignmentName, 'Java Assignment');
      }

      async AssignmentCreateBtn(){
        await PlaywrightCore.click(this.CodingAssignmentCreateBtn);
      }
  
      async thirdsixdotbtn(){
        await PlaywrightCore.click(this.thirdsixdot);
      }

      async PresentationMode(){
        await PlaywrightCore.click(this.PresentationModeBtn);
      }
  };
  