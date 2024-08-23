const { PlaywrightCore } = require('../../module-imports/helperFunctions.imports')
import Locators from './create-teams.locator.json'

exports.CreateTeams = class CreateTeams {

    constructor(page) {
      this.intializePage(page)
    }

    intializePage(page)
    {
      this.page = page;
      this.TeamsCoursesBtn = this.page.locator(Locators.TeamsCoursesBtn)
      this.CreateNewTeamBtn = this.page.locator(Locators.CreateNewTeamBtn)
      this.StartFromScratchBtn = this.page.locator(Locators.StartFromScratchBtn)
      this.StartFromScratchDescription = this.page.locator(Locators.StartFromScratchDescription)
      this.CSAwseomeBtn = this.page.locator(Locators.CSAwseomeBtn)
      this.CSAwseomeDescription = this.page.locator(Locators.CSAwseomeDescription)
      this.TeamNameTxtBox = this.page.locator(Locators.TeamNameTxtBox)
      this.CancelBtn = this.page.locator(Locators.CancelBtn)
      this.SubmitBtn = this.page.locator(Locators.SubmitBtn)
      this.CrossBtn = this.page.locator(Locators.CrossBtn)
      this.ATeamIsANewClassroomDescription = this.page.locator(Locators.ATeamIsANewClassroomDescription)
      this.BackBtn = this.page.locator(Locators.BackBtn)
      this.TeamCreatedHeading = this.page.locator(Locators.TeamCreatedHeading)
      this.BackToTheTeamsBtn = this.page.locator(Locators.BackToTheTeamsBtn)
      this.CreateNewTeamImportCoursesLogo = this.page.locator(Locators.CreateNewTeamImportCoursesLogo)
      this.CreateNewTeamImportCodingRoomsHeading = this.page.locator(Locators.CreateNewTeamImportCodingRoomsHeading)
      this.CreateNewTeamImportCoursesBtn = this.page.locator(Locators.CreateNewTeamImportCoursesBtn)
      this.CreateNewTeamSyncReplitLogo = this.page.locator(Locators.CreateNewTeamSyncReplitLogo)
      this.CreateNewTeamSyncReplitHeading = this.page.locator(Locators.CreateNewTeamSyncReplitHeading)
      this.CreateNewTeamImportTeamsBtn = this.page.locator(Locators.CreateNewTeamImportTeamsBtn)
      this.OrHeading = this.page.locator(Locators.OrHeading)
      this.CreateNewTeamHeading = this.page.locator(Locators.CreateNewTeamHeading)
      this.UnlockWithJuiceMindPremiumBox = this.page.locator(Locators.UnlockWithJuiceMindPremiumBox)
      this.LockIcon = this.page.locator(Locators.LockIcon)
      this.UnlockWithJuiceMindPremiumHeading = this.page.locator(Locators.UnlockWithJuiceMindPremiumHeading)
      this.GetAQuoteBtn = this.page.locator(Locators.GetAQuoteBtn)
      this.ThreeDots = this.page.locator(Locators.ThreeDots)
      this.DeleteTeamBtn = this.page.locator(Locators.DeleteTeamBtn)
      this.DeleteConfirmBtn = this.page.locator(Locators.DeleteConfirmBtn)
      this.CancelDeleteTeamBtn = this.page.locator(Locators.CancelDeleteTeamBtn)
      this.ConfirmDeleteHeading = this.page.locator(Locators.ConfirmDeleteHeading)
      this.ConfirmDeleteDescription = this.page.locator(Locators.ConfirmDeleteDescription)
      this.EditTeamBtn = this.page.locator(Locators.EditTeamBtn)
      this.ArchiveTeamBtn = this.page.locator(Locators.ArchiveTeamBtn)
      this.CreatingTeamLoder = this.page.locator(Locators.CreatingTeamLoder)
      this.GettingStartedHeading = this.page.locator(Locators.GettingStartedHeading)
      this.LoaderCreatingTeam = this.page.locator(Locators.LoaderCreatingTeam)
      this.JoinQuizBtn = this.page.locator(Locators.JoinQuizBtn)
      this.ReportIssueHeading = this.page.locator(Locators.ReportIssueHeading)
      this.ReverToOldSIteHeading = this.page.locator(Locators.ReverToOldSIteHeading)
      this.HowItWOrksHeading = this.page.locator(Locators.HowItWOrksHeading)
      this.JuiceMindLogo = this.page.locator(Locators.JuiceMindLogo)
      this.CreateBtn = this.page.locator(Locators.CreateBtn)
      this.ExploreBtn = this.page.locator(Locators.ExploreBtn)
      this.MyQuizzesBtn = this.page.locator(Locators.MyQuizzesBtn)
      this.SmartDoorBellBtn = this.page.locator(Locators.SmartDoorBellBtn)
      this.ReportsBtn = this.page.locator(Locators.ReportsBtn)
      this.MyStudentBtn = this.page.locator(Locators.MyStudentBtn)
      this.JuiceMindRoadMapBtn = this.page.locator(Locators.JuiceMindRoadMapBtn)
      this.MyTeamsHeading = this.page.locator(Locators.MyTeamsHeading)
      this.ImportCodingRoomsCoursesBtn = this.page.locator(Locators.ImportCodingRoomsCoursesBtn)
      this.ImportCoursesBtnMainPageTeamsCourses = this.page.locator(Locators.ImportCoursesBtnMainPageTeamsCourses)
      this.ImportTeamBtnMainPageTeamsCourses = this.page.locator(Locators.ImportTeamBtnMainPageTeamsCourses)
      this.ImportCodingMainPageTeamsCoursesDescription = this.page.locator(Locators.ImportCodingMainPageTeamsCoursesDescription)
      this.SyncTeamsHeadingMainPage = this.page.locator(Locators.SyncTeamsHeadingMainPage)
      this.SyncTeamsHeadingMainPageDescription = this.page.locator(Locators.SyncTeamsHeadingMainPageDescription)
      this.ArchivedTeamHeading = this.page.locator(Locators.ArchivedTeamHeading)
      this.UpgradeBtn = this.page.locator(Locators.UpgradeBtn)
      this.ImportCodingRoomDotComHeading = this.page.locator(Locators.ImportCodingRoomDotComHeading)
    }

    async navigateToTeamsCoursesPage(){
      await PlaywrightCore.click(this.TeamsCoursesBtn)
    }
    
    async createNewTeamFromScratch(teamName){
        await PlaywrightCore.click(this.CreateNewTeamBtn)
        await PlaywrightCore.click(this.StartFromScratchBtn)
        await PlaywrightCore.fill(this.TeamNameTxtBox, teamName)
        await PlaywrightCore.click(this.SubmitBtn)
    }

    async createNewTeamCSAwesome(teamName){
        await PlaywrightCore.click(this.CreateNewTeamBtn)
        await PlaywrightCore.click(this.CSAwseomeBtn)
        await PlaywrightCore.fill(this.TeamNameTxtBox, teamName)
        await PlaywrightCore.click(this.SubmitBtn)
    }

    async deleteFirstTeamInList(){
        await PlaywrightCore.click(this.ThreeDots)
        await PlaywrightCore.click(this.DeleteTeamBtn)
        await PlaywrightCore.click(this.DeleteConfirmBtn)
    }

}