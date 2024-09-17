const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import CreateTeamsTestData from '../../test-assets/test-data-files/create-teams/create-teams-testData.json'
import JoinQuizTestData from '../../test-assets/test-data-files/join-quiz/join-quiz-testData.json'
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";

test.describe('TestSuite: Create Teams', () => {

    test.beforeEach(async ({ loginPage, createTeams }) => {
        await loginPage.NavigateToLoginPage()
        await loginPage.fillCredentialsAndLogin(Credentials.EMAIL, Credentials.PASSWORD)
        await expect(loginPage.ProfilePicture).toBeVisible()
        await expect(createTeams.TeamsCoursesBtn).toHaveText(CreateTeamsTestData.TeamsCoursesBtnValue)
        await createTeams.navigateToTeamsCoursesPage()
        await expect(createTeams.CreateNewTeamBtn).toHaveText(CreateTeamsTestData.CreateNewTeamBtnValue)
        await createTeams.clickOnCrossMessage()
      });

    test('TC - UI Validation Teams/Courses Page', async ({ createTeams }) => {
        await expect(createTeams.JuiceMindLogo).toBeVisible()
        await expect(createTeams.ReportIssueHeading).toHaveText(CreateTeamsTestData.ReportIssueHeadingValue)
        await expect(createTeams.ReverToOldSIteHeading).toHaveText(CreateTeamsTestData.ReverToOldSIteHeadingValue)
        await expect(createTeams.HowItWOrksHeading).toHaveText(CreateTeamsTestData.HowItWOrksHeadingValue)
        await expect(createTeams.CreateBtn).toHaveText(CreateTeamsTestData.CreateBtnValue)
        await expect(createTeams.ExploreBtn).toHaveText(CreateTeamsTestData.ExploreBtnValue)
        await expect(createTeams.MyQuizzesBtn).toHaveText(CreateTeamsTestData.MyQuizzesBtnValue)
        await expect(createTeams.SmartDoorBellBtn).toHaveText(CreateTeamsTestData.SmartDoorBellBtnValue)
        await expect(createTeams.ReportsBtn).toHaveText(CreateTeamsTestData.ReportsBtnValue)
        await expect(createTeams.MyStudentBtn).toHaveText(CreateTeamsTestData.MyStudentBtnValue)
        await expect(createTeams.JuiceMindRoadMapBtn).toHaveText(CreateTeamsTestData.JuiceMindRoadMapBtnValue)
        await expect(createTeams.MyTeamsHeading).toHaveText(CreateTeamsTestData.MyTeamsHeadingValue)
        await expect(createTeams.ImportCodingRoomsCoursesBtn).toHaveText(CreateTeamsTestData.ImportCodingRoomsCoursesBtnValue)
        await expect(createTeams.ImportCoursesBtnMainPageTeamsCourses).toHaveText(CreateTeamsTestData.CreateNewTeamImportCoursesBtnValue)
        await expect(createTeams.ImportTeamBtnMainPageTeamsCourses).toHaveText(CreateTeamsTestData.CreateNewTeamImportTeamsBtnValue)
        await expect(createTeams.ImportCodingMainPageTeamsCoursesDescription).toHaveText(CreateTeamsTestData.ImportCodingMainPageTeamsCoursesDescriptionValue)
        await expect(createTeams.SyncTeamsHeadingMainPage).toHaveText(CreateTeamsTestData.CreateNewTeamSyncReplitHeadingValue)
        await expect(createTeams.SyncTeamsHeadingMainPageDescription).toHaveText(CreateTeamsTestData.SyncTeamsHeadingMainPageDescriptionValue)
        await expect(createTeams.ArchivedTeamHeading).toHaveText(CreateTeamsTestData.ArchivedTeamHeadingValue)
        await expect(createTeams.UpgradeBtn).toHaveText(CreateTeamsTestData.UpgradeBtnValue)
        await expect(createTeams.ImportCodingRoomDotComHeading).toHaveText(CreateTeamsTestData.CreateNewTeamImportCodingRoomsHeadingValue)
    });  

    test('TC - Validate UI of Create New Team Pop Up', async ({ createTeams }) => {
        await PlaywrightCore.click(createTeams.CreateNewTeamBtn)
        await expect(createTeams.StartFromScratchBtn).toHaveText(CreateTeamsTestData.StartFromScratchBtnValue)
        await expect(createTeams.StartFromScratchDescription).toHaveText(CreateTeamsTestData.StartFromScratchDescriptionValue)
        await expect(createTeams.CSAwseomeBtn).toHaveText(CreateTeamsTestData.CSAwseomeBtnValue)
        await expect(createTeams.CSAwseomeDescription).toHaveText(CreateTeamsTestData.CSAwseomeDescriptionValue)
        await expect(createTeams.CreateNewTeamImportCoursesLogo).toBeVisible()
        await expect(createTeams.CreateNewTeamImportCodingRoomsHeading).toHaveText(CreateTeamsTestData.CreateNewTeamImportCodingRoomsHeadingValue)
        await expect(createTeams.CreateNewTeamImportCoursesBtn).toHaveText(CreateTeamsTestData.CreateNewTeamImportCoursesBtnValue)
        await expect(createTeams.CreateNewTeamSyncReplitLogo).toBeVisible()
        await expect(createTeams.CreateNewTeamSyncReplitHeading).toHaveText(CreateTeamsTestData.CreateNewTeamSyncReplitHeadingValue)
        await expect(createTeams.CreateNewTeamImportTeamsBtn).toHaveText(CreateTeamsTestData.CreateNewTeamImportTeamsBtnValue)
        await expect(createTeams.OrHeading).toHaveText(CreateTeamsTestData.OrHeadingValue)
        await expect(createTeams.CreateNewTeamHeading).toHaveText(CreateTeamsTestData.CreateNewTeamBtnValue)
        await expect(createTeams.UnlockWithJuiceMindPremiumBox).toBeVisible()
        await expect(createTeams.LockIcon).toBeVisible()
        await expect(createTeams.UnlockWithJuiceMindPremiumHeading).toHaveText(CreateTeamsTestData.UnlockWithJuiceMindPremiumHeadingValue)
        await expect(createTeams.GetAQuoteBtn).toHaveText(CreateTeamsTestData.GetAQuoteBtnValue)
    });

    test('TC - Create a New Team From Scratch', async ({ createTeams }) => {
        await createTeams.createNewTeamFromScratch(CreateTeamsTestData.TeamCreatedHeadingValue)
        await expect(createTeams.TeamCreatedHeading).toHaveText(CreateTeamsTestData.TeamCreatedHeadingValue)
        await expect(createTeams.FolderIconNoDataImage).toBeVisible()
        await expect(createTeams.YouDontHaveAnyDataTxt.nth(0)).toHaveText(CreateTeamsTestData.YouDontHaveAnyDataTxtValue)
        await expect(createTeams.CreateNewAssignmentOrLessonBtn).toHaveText(CreateTeamsTestData.CreateNewAssignmentOrLessonBtnValue)
        await PlaywrightCore.click(createTeams.BackToTheTeamsBtn)
        await createTeams.deleteFirstTeamInList()
    });

    test('TC - Delete a Newly Create Team - From Scratch', async ({ createTeams }) => {
        await createTeams.deleteAllTeams(CreateTeamsTestData.TeamCreatedHeadingValue)
        const threeDotsCount = await createTeams.ThreeDots.count()
        await createTeams.createNewTeamFromScratch(CreateTeamsTestData.TeamCreatedHeadingValue)
        await expect(createTeams.TeamCreatedHeading).toHaveText(CreateTeamsTestData.TeamCreatedHeadingValue)
        await expect(createTeams.FolderIconNoDataImage).toBeVisible()
        await expect(createTeams.YouDontHaveAnyDataTxt.nth(0)).toHaveText(CreateTeamsTestData.YouDontHaveAnyDataTxtValue)
        await expect(createTeams.CreateNewAssignmentOrLessonBtn).toHaveText(CreateTeamsTestData.CreateNewAssignmentOrLessonBtnValue)
        await PlaywrightCore.click(createTeams.BackToTheTeamsBtn)
        await createTeams.deleteFirstTeamInList()
        await expect(createTeams.ThreeDots).toHaveCount(threeDotsCount)
    });

    test.skip('TC - Create a New Team CS Awesome', async ({ createTeams }) => {
        await createTeams.createNewTeamCSAwesome(CreateTeamsTestData.TeamCreatedHeadingValue)
        await PlaywrightCore.waitTimeout(createTeams.page, 3000)
        await PlaywrightCore.waitForElementToDisappear(createTeams, createTeams.LoaderCreatingTeam)
        await PlaywrightCore.waitTimeout(createTeams.page, 10000)
        await expect(createTeams.PresentationMode).toHaveText(CreateTeamsTestData.PresentationModeValue)
        await expect(createTeams.NextBtnCSAwesome).toHaveText(CreateTeamsTestData.NextBtnCSAwesomeValue)
        await expect(createTeams.PublishMultipleBtn).toHaveText(CreateTeamsTestData.PublishMultipleBtnValue)
        await expect(createTeams.DeleteMultipleBtn).toHaveText(CreateTeamsTestData.DeleteMultipleBtnValue)
        await expect(createTeams.StudentsGradesBtn.nth(0)).toHaveText(CreateTeamsTestData.StudentsGradesBtnValue)
        if(!createTeams.InviteStudentsBtn.isVisible()){ await PlaywrightCore.click(createTeams.ViewStudentsBtn) }
        await expect(createTeams.InviteStudentsBtn).toHaveText(CreateTeamsTestData.InviteStudentsBtnValue)
        await expect(createTeams.UsersHeading).toHaveText(CreateTeamsTestData.UsersHeadingValue)
        await expect(createTeams.GettingStartedANdPrimitiveTypeTxt).toHaveText(CreateTeamsTestData.GettingStartedANdPrimitiveTypeTxtValue)
        await PlaywrightCore.click(createTeams.BackToTheTeamsBtn)
        await createTeams.deleteFirstTeamInList()
    });

    test.skip('TC - Delete a Newly Create Team - CS Awesome', async ({ createTeams }) => {
        await createTeams.deleteAllTeams(CreateTeamsTestData.TeamCreatedHeadingValue)
        const threeDotsCount = await createTeams.ThreeDots.count()
        await createTeams.createNewTeamCSAwesome(CreateTeamsTestData.TeamCreatedHeadingValue)
        await PlaywrightCore.waitTimeout(createTeams.page, 3000)
        await PlaywrightCore.waitForElementToDisappear(createTeams, createTeams.LoaderCreatingTeam)
        await PlaywrightCore.waitTimeout(createTeams.page, 10000)
        await expect(createTeams.PresentationMode).toHaveText(CreateTeamsTestData.PresentationModeValue)
        await expect(createTeams.NextBtnCSAwesome).toHaveText(CreateTeamsTestData.NextBtnCSAwesomeValue)
        await expect(createTeams.PublishMultipleBtn).toHaveText(CreateTeamsTestData.PublishMultipleBtnValue)
        await expect(createTeams.DeleteMultipleBtn).toHaveText(CreateTeamsTestData.DeleteMultipleBtnValue)
        await expect(createTeams.StudentsGradesBtn.nth(0)).toHaveText(CreateTeamsTestData.StudentsGradesBtnValue)
        if(!createTeams.InviteStudentsBtn.isVisible()){ await PlaywrightCore.click(createTeams.ViewStudentsBtn) }
        await expect(createTeams.InviteStudentsBtn).toHaveText(CreateTeamsTestData.InviteStudentsBtnValue)
        await expect(createTeams.UsersHeading).toHaveText(CreateTeamsTestData.UsersHeadingValue)
        await expect(createTeams.GettingStartedANdPrimitiveTypeTxt).toHaveText(CreateTeamsTestData.GettingStartedANdPrimitiveTypeTxtValue)
        await PlaywrightCore.click(createTeams.BackToTheTeamsBtn)
        await createTeams.deleteFirstTeamInList()
        await expect(createTeams.ThreeDots).toHaveCount(threeDotsCount)
    });

    test('TC - Delete a Newly Create Team UI Validations', async ({ createTeams }) => {
        await createTeams.deleteAllTeams(CreateTeamsTestData.TeamCreatedHeadingValue)
        const threeDotsCount = await createTeams.ThreeDots.count()
        await createTeams.createNewTeamFromScratch(CreateTeamsTestData.TeamCreatedHeadingValue)
        await expect(createTeams.TeamCreatedHeading).toHaveText(CreateTeamsTestData.TeamCreatedHeadingValue)
        await PlaywrightCore.click(createTeams.BackToTheTeamsBtn)
        await PlaywrightCore.click(createTeams.ThreeDots)
        await PlaywrightCore.click(createTeams.DeleteTeamBtn)
        await expect(createTeams.DeleteConfirmBtn).toHaveText(CreateTeamsTestData.DeleteTxt)
        await expect(createTeams.CancelDeleteTeamBtn).toHaveText(CreateTeamsTestData.CancelBtnValue)
        await expect(createTeams.ConfirmDeleteHeading).toHaveText(CreateTeamsTestData.ConfirmDeleteHeadingValue)
        await expect(createTeams.ConfirmDeleteDescription).toHaveText(CreateTeamsTestData.ConfirmDeleteDescriptionValue)
        await PlaywrightCore.click(createTeams.DeleteConfirmBtn)
        await expect(createTeams.ThreeDots).toHaveCount(threeDotsCount)
    });

    test('TC - UI Validation of Write Team Name Pop Up Box - From Scratch', async ({ createTeams }) => {
        await PlaywrightCore.click(createTeams.CreateNewTeamBtn)
        await PlaywrightCore.click(createTeams.StartFromScratchBtn)
        await expect(createTeams.TeamNameTxtBox).toBeVisible()
        await expect(createTeams.ATeamIsANewClassroomDescription).toHaveText(CreateTeamsTestData.ATeamIsANewClassroomDescriptionValue)
        await expect(createTeams.BackBtn).toHaveText(CreateTeamsTestData.BackTxt)
        await expect(createTeams.CrossBtn).toBeVisible()
        await expect(createTeams.CancelBtn).toHaveText(CreateTeamsTestData.CancelBtnValue)
        await expect(createTeams.SubmitBtn).toHaveText(CreateTeamsTestData.SubmitBtnValue)
    });

    test('TC - UI Validation of Write Team Name Pop Up Box - CS Awesome', async ({ createTeams }) => {
        await PlaywrightCore.click(createTeams.CreateNewTeamBtn)
        await PlaywrightCore.click(createTeams.CSAwseomeBtn)
        await expect(createTeams.TeamNameTxtBox).toBeVisible()
        await expect(createTeams.ATeamIsANewClassroomDescription).toHaveText(CreateTeamsTestData.ATeamIsANewClassroomDescriptionValue)
        await expect(createTeams.BackBtn).toHaveText(CreateTeamsTestData.BackTxt)
        await expect(createTeams.CrossBtn).toBeVisible()
        await expect(createTeams.CancelBtn).toHaveText(CreateTeamsTestData.CancelBtnValue)
        await expect(createTeams.SubmitBtn).toHaveText(CreateTeamsTestData.SubmitBtnValue)
        await expect(createTeams.CSAwesomeCreationNoteTxt).toHaveText(CreateTeamsTestData.CSAwesomeCreationNoteTxtValue)
    });

    test('TC - Join Quiz Re-direction and UI Validation', async ({ joinQuizPage, createTeams }) => {
        await PlaywrightCore.click(createTeams.JoinQuizBtn)
        await expect(joinQuizPage.Logo).toBeVisible()
        await expect(joinQuizPage.JoinQuizHeading).toHaveText(JoinQuizTestData.JoinQuizHeadingValue)
        await expect(joinQuizPage.GamePinInputField).toBeVisible()
        await expect(joinQuizPage.EnterBtn).toHaveText(JoinQuizTestData.EnterBtnValue)
    });

    test.skip('TC - Import Course CS Awesome From Team/Courses Page', async ({ createTeams }) => {
        await PlaywrightCore.click(createTeams.ImportCoursesBtnMainPageTeamsCourses)
        await expect(createTeams.UploadCodingRoomZipFileHeading).toHaveText(CreateTeamsTestData.UploadCodingRoomZipFileHeadingValue)
        await PlaywrightCore.fileUpload(createTeams.UploadZip, CreateTeamsTestData.CSAwesomeCourseZipPath)
        await expect(createTeams.ImportCourseFinalBtn).toHaveText(CreateTeamsTestData.ImportCourseFinalBtnValue)
        await PlaywrightCore.click(createTeams.ImportCourseFinalBtn)
        await expect(createTeams.LoaderUnzippingFile).toBeVisible()
        await expect(createTeams.ImportingCourse).toHaveText(CreateTeamsTestData.ImportingCourseValue)
        await PlaywrightCore.waitForElementToDisappear(createTeams, createTeams.LoaderUnzippingFile)
        await PlaywrightCore.waitTimeout(createTeams.page, 3000)
        await expect(createTeams.AddALessonBtn).toHaveText(CreateTeamsTestData.AddALessonBtnValue)
        await expect(createTeams.PresentationMode).toHaveText(CreateTeamsTestData.PresentationModeValue)
        await expect(createTeams.NextBtnCSAwesome).toHaveText(CreateTeamsTestData.NextBtnCSAwesomeValue)
        await expect(createTeams.PublishMultipleBtn).toHaveText(CreateTeamsTestData.PublishMultipleBtnValue)
        await expect(createTeams.DeleteMultipleBtn).toHaveText(CreateTeamsTestData.DeleteMultipleBtnValue)
        await expect(createTeams.GettingStartedANdPrimitiveTypeTxt).toHaveText(CreateTeamsTestData.GettingStartedANdPrimitiveTypeTxtValue)
        await PlaywrightCore.click(createTeams.BackToTheTeamsBtn)
        await createTeams.deleteFirstTeamInList()
    });

    test.skip('TC - Import Course CS Awesome From Import Coding Rooms Courses Button', async ({ createTeams }) => {
        await PlaywrightCore.click(createTeams.ImportCodingRoomsCoursesBtn)
        await expect(createTeams.UploadCodingRoomZipFileHeading) .toHaveText(CreateTeamsTestData.UploadCodingRoomZipFileHeadingValue)
        await PlaywrightCore.fileUpload(createTeams.UploadZip, CreateTeamsTestData.CSAwesomeCourseZipPath)
        await expect(createTeams.ImportCourseFinalBtn).toHaveText(CreateTeamsTestData.ImportCourseFinalBtnValue)
        await PlaywrightCore.click(createTeams.ImportCourseFinalBtn)
        await expect(createTeams.LoaderUnzippingFile).toBeVisible()
        await expect(createTeams.ImportingCourse).toHaveText(CreateTeamsTestData.ImportingCourseValue)
        await PlaywrightCore.waitForElementToDisappear(createTeams, createTeams.LoaderUnzippingFile)
        await PlaywrightCore.waitTimeout(createTeams.page, 3000)
        await expect(createTeams.AddALessonBtn).toHaveText(CreateTeamsTestData.AddALessonBtnValue)
        await expect(createTeams.PresentationMode).toHaveText(CreateTeamsTestData.PresentationModeValue)
        await expect(createTeams.NextBtnCSAwesome).toHaveText(CreateTeamsTestData.NextBtnCSAwesomeValue)
        await expect(createTeams.PublishMultipleBtn).toHaveText(CreateTeamsTestData.PublishMultipleBtnValue)
        await expect(createTeams.DeleteMultipleBtn).toHaveText(CreateTeamsTestData.DeleteMultipleBtnValue)
        await expect(createTeams.GettingStartedANdPrimitiveTypeTxt).toHaveText(CreateTeamsTestData.GettingStartedANdPrimitiveTypeTxtValue)
        await PlaywrightCore.click(createTeams.BackToTheTeamsBtn)
        await createTeams.deleteFirstTeamInList()
    });

    test.skip('TC - Import Course CS Awesome From New Teams Import Courses Button', async ({ createTeams }) => {
        await PlaywrightCore.click(createTeams.CreateNewTeamBtn)
        await PlaywrightCore.click(createTeams.CreateNewTeamImportCoursesBtn)
        await expect(createTeams.UploadCodingRoomZipFileHeading) .toHaveText(CreateTeamsTestData.UploadCodingRoomZipFileHeadingValue)
        await PlaywrightCore.fileUpload(createTeams.UploadZip, CreateTeamsTestData.CSAwesomeCourseZipPath)
        await expect(createTeams.ImportCourseFinalBtnCrateTeams).toHaveText(CreateTeamsTestData.ImportCourseFinalBtnValue)
        await PlaywrightCore.click(createTeams.ImportCourseFinalBtnCrateTeams)
        await expect(createTeams.ImportingCourse).toHaveText(CreateTeamsTestData.ImportingCourseValue)
        await PlaywrightCore.waitForElementToDisappear(createTeams, createTeams.LoaderCreateTeamsImportCourse)
        await PlaywrightCore.waitTimeout(createTeams.page, 3000)
        await expect(createTeams.AddALessonBtn).toHaveText(CreateTeamsTestData.AddALessonBtnValue)
        await expect(createTeams.PresentationMode).toHaveText(CreateTeamsTestData.PresentationModeValue)
        await expect(createTeams.NextBtnCSAwesome).toHaveText(CreateTeamsTestData.NextBtnCSAwesomeValue)
        await expect(createTeams.PublishMultipleBtn).toHaveText(CreateTeamsTestData.PublishMultipleBtnValue)
        await expect(createTeams.DeleteMultipleBtn).toHaveText(CreateTeamsTestData.DeleteMultipleBtnValue)
        await expect(createTeams.GettingStartedANdPrimitiveTypeTxt).toHaveText(CreateTeamsTestData.GettingStartedANdPrimitiveTypeTxtValue)
        await PlaywrightCore.click(createTeams.BackToTheTeamsBtn)
        await createTeams.deleteFirstTeamInList()
    });

    test.skip('TC - Import Replit Team From Teams/Courses Page', async ({ createTeams }) => {
        await PlaywrightCore.click(createTeams.ImportTeamBtnMainPageTeamsCourses)
        await expect(createTeams.UploadReplitTeamZipFileHeading) .toHaveText(CreateTeamsTestData.UploadReplitTeamZipFileHeadingValue)
        await PlaywrightCore.fileUpload(createTeams.UploadZip, CreateTeamsTestData.ReplitTeamsZipPath)
        await expect(createTeams.ImportTeamFinalBtn).toHaveText(CreateTeamsTestData.ImportTeamFinalBtnValue)
        await PlaywrightCore.click(createTeams.ImportTeamFinalBtn)
        await expect(createTeams.ImportingCoursesHeading).toHaveText(CreateTeamsTestData.ImportingCoursesHeadingValue)
        await PlaywrightCore.waitForElementToDisappear(createTeams, createTeams.LoaderUnzippingFile, 20000)
        await PlaywrightCore.waitTimeout(createTeams.page, 3000)
        await expect(createTeams.IndexHTMLFileName).toHaveText(CreateTeamsTestData.IndexHTMLFileNameValue)
        await expect(createTeams.HTMLCSSHeading).toHaveText(CreateTeamsTestData.HTMLCSSHeadingValue)
        await expect(createTeams.PresentationMode).toHaveText(CreateTeamsTestData.PresentationModeValue)
        await expect(createTeams.NextBtnCSAwesome).toHaveText(CreateTeamsTestData.NextBtnCSAwesomeValue)
        await expect(createTeams.PublishMultipleBtn).toHaveText(CreateTeamsTestData.PublishMultipleBtnValue)
        await expect(createTeams.DeleteMultipleBtn).toHaveText(CreateTeamsTestData.DeleteMultipleBtnValue)
        await expect(createTeams.AddNewItemBtn).toHaveText(CreateTeamsTestData.AddNewItemBtnValue)
        await expect(createTeams.TemplateBtn).toHaveText(CreateTeamsTestData.TemplateBtnValue)
        await expect(createTeams.SolutionBtn).toHaveText(CreateTeamsTestData.SolutionBtnValue)
        await expect(createTeams.TestBtn).toHaveText(CreateTeamsTestData.TestBtnValue)
        await expect(createTeams.OptionsBtn).toHaveText(CreateTeamsTestData.OptionsBtnValue)
        await PlaywrightCore.click(createTeams.BackToTheTeamsBtn)
        await createTeams.deleteFirstTeamInList()
    });

    test.skip('TC - Import Replit Team From Create Team Pop Up Page', async ({ createTeams }) => {
        await PlaywrightCore.click(createTeams.CreateNewTeamBtn)
        await PlaywrightCore.click(createTeams.CreateNewTeamImportTeamsBtn)
        await expect(createTeams.UploadReplitTeamZipFileHeading) .toHaveText(CreateTeamsTestData.UploadReplitTeamZipFileHeadingValue)
        await PlaywrightCore.fileUpload(createTeams.UploadZip, CreateTeamsTestData.ReplitTeamsZipPath)
        await expect(createTeams.ImportTeamFinalBtnCreateTeam).toHaveText(CreateTeamsTestData.ImportTeamFinalBtnValue)
        await PlaywrightCore.click(createTeams.ImportTeamFinalBtnCreateTeam)
        await expect(createTeams.ImportingCoursesHeading).toHaveText(CreateTeamsTestData.ImportingCoursesHeadingValue)
        await PlaywrightCore.waitForElementToDisappear(createTeams, createTeams.LoaderUnzippingFile, 20000)
        await PlaywrightCore.waitTimeout(createTeams.page, 3000)
        await expect(createTeams.IndexHTMLFileName).toHaveText(CreateTeamsTestData.IndexHTMLFileNameValue)
        await expect(createTeams.HTMLCSSHeading).toHaveText(CreateTeamsTestData.HTMLCSSHeadingValue)
        await expect(createTeams.PresentationMode).toHaveText(CreateTeamsTestData.PresentationModeValue)
        await expect(createTeams.NextBtnCSAwesome).toHaveText(CreateTeamsTestData.NextBtnCSAwesomeValue)
        await expect(createTeams.PublishMultipleBtn).toHaveText(CreateTeamsTestData.PublishMultipleBtnValue)
        await expect(createTeams.DeleteMultipleBtn).toHaveText(CreateTeamsTestData.DeleteMultipleBtnValue)
        await expect(createTeams.AddNewItemBtn).toHaveText(CreateTeamsTestData.AddNewItemBtnValue)
        await expect(createTeams.TemplateBtn).toHaveText(CreateTeamsTestData.TemplateBtnValue)
        await expect(createTeams.SolutionBtn).toHaveText(CreateTeamsTestData.SolutionBtnValue)
        await expect(createTeams.TestBtn).toHaveText(CreateTeamsTestData.TestBtnValue)
        await expect(createTeams.OptionsBtn).toHaveText(CreateTeamsTestData.OptionsBtnValue)
        await PlaywrightCore.click(createTeams.BackToTheTeamsBtn)
        await createTeams.deleteFirstTeamInList()
    });

})