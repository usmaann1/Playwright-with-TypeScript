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
      this.arrowBtnLeftSideBar = this.page.locator(Locators.arrowBtnLeftSideBar);
      this.invite_StudentsBtn = this.page.locator(Locators.inviteStudentsBtn);
    
      this.copy_InviteStudentsBtn = this.page.locator(Locators.copyInviteStudentsBtn);
      this.Publish_AssignmentBtn = this.page.locator(Locators.PublishAssignmentBtn);
      this.PageLockedText = this.page.locator(Locators.PageLockedText);
      this.waitingForTeacherText = this.page.locator(Locators.waitingForTeacherText);

      this.addnewitem_btn = this.page.locator(Locators.addnewitem_btn);

    this.Presentation_btn = this.page.locator(Locators.Presentation_btn);
    this.Gotit_btn = this.page.locator(Locators.Gotit_btn);
    this.ViewStuPreview_btn = this.page.locator(Locators.ViewStuPreview_btn);
    this.ExitStudentView_btn = this.page.locator(Locators.ExitStudentView_btn);
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
        await PlaywrightCore.fill(this.CodingAssignmentName, 'Modue 7');
      }

      async AssignmentCreateBtn(){
        await PlaywrightCore.click(this.CodingAssignmentCreateBtn);
      }

      async Publish(){
        await PlaywrightCore.click(this.PublishButton);
    }
      async leftsidebarArrowBtn(){
        await PlaywrightCore.click(this.arrowBtnLeftSideBar);
    }

      async InviteStudentsbtn(){
        await PlaywrightCore.click(this.invite_StudentsBtn);
    }

      async CopyinviteStudentsbtn(){
          await PlaywrightCore.click(this.copy_InviteStudentsBtn);
      }
      async publishAssignmentbtn(){
        await PlaywrightCore.click(this.Publish_AssignmentBtn);
      }

      async AddNewItemBtn(){
        await PlaywrightCore.click(this.addnewitem_btn);
      }

      async waitForFunction(){
        await this.page.waitForTimeout(2000);
      }

      async PresentationMode(){
        await PlaywrightCore.click(this.Presentation_btn);
      }
      async GotItButton(){
        await PlaywrightCore.click(this.Gotit_btn);
      }
      async ExitStudentView(){
        await PlaywrightCore.click(this.ExitStudentView_btn);
    }
  };
  