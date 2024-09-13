const { PlaywrightCore } = require("../../module-imports/helperFunctions.imports");
import { expect } from "@playwright/test";
  import Locators from "./projects.locator.json";

  
  exports.projects = class projects {
    constructor(page) {
      this.intializePage(page);
    }
    intializePage(page) {
      this.page = page;
      this.baseURL = "./"
      this.DelimetersFrq = this.page.locator(Locators.DelimetersFrq);
      this.DelimetersParagraph = this.page.locator(Locators.DelimeterParagraph);
      this.GotItButton = this.page.locator(Locators.GotItBtn);
      this.StartCourseButton = this.page.locator(Locators.StartCourseBtn);
      this.ConfirmButton = this.page.locator(Locators.ConfirmBtn);
      this.TeamDropDown = this.page.locator(Locators.TeamDropDown);
      this.TeamOption = this.page.locator(Locators.TeamOption);
      this.ApCalendarfrq = this.page.locator(Locators.ApCalendarFrq);
      this.WordMatchfrq = this.page.locator(Locators.WordMatchFrq);
      this.CombinedTablefrq = this.page.locator(Locators.CombinedTableFrq)
      this.ClubMembersfrq = this.page.locator(Locators.ClubMembersFrq)
      this.ArrayResizerfrq = this.page.locator(Locators.ArrayResizerFrq)
      this.TextBookfrq = this.page.locator(Locators.TextBookFrq)
      this.ReviewAnalysisfrq = this.page.locator(Locators.ReviewAnalysisFrq)
      this.AppointmentBookfrq = this.page.locator(Locators.AppointmentBookFrq)
      this.SignFrq = this.page.locator(Locators.SignFrq)
      this.WeatherDataFrq = this.page.locator(Locators.WeatherDataFrq)
      this.BoxOfCandyFrq = this.page.locator(Locators.BoxOfCandyFrq)

      this.ProjectsButton = this.page.locator(Locators.ProjectsButton)
      this.PictureLabButton = this.page.locator(Locators.PictureLabButton)


    }

    async ClickPictureLabButton(){
     await PlaywrightCore.click(this.PictureLabButton);
    }

    async ClickProjects(){
      await PlaywrightCore.click(this.ProjectsButton);
     }

    async ClickWordMatch(){
      await PlaywrightCore.click(this.WordMatchfrq);
     }

     async ClickCombibnedTableFrq(){
      await PlaywrightCore.click(this.CombinedTablefrq);
     }

    async ClickApCalendarFrq(){
      await PlaywrightCore.click(this.ApCalendarfrq);
     }
    async ClickGotIt(){
      await PlaywrightCore.click(this.GotItButton);
     }

     async ClickStartCourseButton(){
      await PlaywrightCore.click(this.StartCourseButton);
     }

     async ClickConfirmButton(){
      await PlaywrightCore.click(this.ConfirmButton);
     }


     async ClickTeamDropDown(){
      await PlaywrightCore.click(this.TeamDropDown);
     }

     async SelectTeam(){
      await PlaywrightCore.click(this.TeamOption);
     }

    async FillTextInParagraph(text){
     
      await PlaywrightCore.fill(this.DelimetersParagraph, text)

    }

    // Function to click the Combined Table element
    async ClickCombinedTable() {
      await PlaywrightCore.click(this.CombinedTablefrq);
    }

    // Function to click the Club Members element
    async ClickClubMembers() {
      await PlaywrightCore.click(this.ClubMembersfrq);
    }

    // Function to click the Array Resizer element
    async ClickArrayResizer() {
      await PlaywrightCore.click(this.ArrayResizerfrq);
    }

    // Function to click the Text Book element
    async ClickTextBook() {
      await PlaywrightCore.click(this.TextBookfrq);
    }

    // Function to click the Review Analysis element
    async ClickReviewAnalysis() {
      await PlaywrightCore.click(this.ReviewAnalysisfrq);
    }

    // Function to click the Appointment Book element
    async ClickAppointmentBook() {
      await PlaywrightCore.click(this.AppointmentBookfrq);
    }

    // Function to click the Sign element
    async ClickSignFrq() {
      await PlaywrightCore.click(this.SignFrq);
    }

    // Function to click the Weather Data element
    async ClickWeatherData() {
      await PlaywrightCore.click(this.WeatherDataFrq);
    }

    // Function to click the Box Of Candy element
    async ClickBoxOfCandy() {
      await PlaywrightCore.click(this.BoxOfCandyFrq);
    }

    async WaitforLocator(page) {
      await page.waitForTimeout(30000);
     
    }


};
