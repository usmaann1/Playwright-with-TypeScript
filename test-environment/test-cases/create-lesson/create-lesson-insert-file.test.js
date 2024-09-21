const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import CLtd from '../../test-assets/test-data-files/create-lesson/create-lesson-testData.json'
import CTtd from '../../test-assets/test-data-files/create-teams/create-teams-testData.json'
import CreateTeamsTestData from '../../test-assets/test-data-files/create-teams/create-teams-testData.json'
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";

test.describe('TestSuite: Insert File', () => {

    const randomNumber = UserFunctions.generateRandomString(5)
    const userEmail = Credentials.EMAIL_HASSAAN
    const userPwd = Credentials.PASSWORD_HASSAAN
    const teamName = CLtd.teamName + randomNumber
    const lessonName = CLtd.lessonName + '-' + randomNumber

    test.beforeEach(async ({ loginPage, createTeams, createLesson }) => {
        await loginPage.NavigateToLoginPage()
        await loginPage.fillCredentialsAndLogin(userEmail, userPwd)
        await expect(loginPage.ProfilePicture).toBeVisible()
        await expect(createTeams.TeamsCoursesBtn).toHaveText(CTtd.TeamsCoursesBtnValue)
        await PlaywrightCore.click(createTeams.TeamsCoursesBtn)
        await createTeams.createNewTeamFromScratch(teamName)
        await createLesson.clickOnAddNewItem()
        await createLesson.selectLessonItemType()
        await createLesson.createALesson(lessonName)
        await createLesson.setVisibility()
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
    });

    test('Umair - TC-01 - Verify Insert File Functionality', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.insertFiles)
        await PlaywrightCore.fileUpload(createLesson.ChooseFileBox, CreateTeamsTestData.ReplitTeamsZipPath)
        await PlaywrightCore.waitFor(createLesson.JuiceMindZipAfterUploaded)
        await expect(createLesson.JuiceMindZipAfterUploaded).toHaveText(CLtd.JuiceMindZipAfterUploadedValue)
        await expect(createLesson.DeleteBtnAfterUpload).toHaveText(CLtd.DeleteBtnAfterUploadValue)
        await PlaywrightCore.click(createLesson.DeleteBtnAfterUpload)
        await expect(createLesson.DeleteBtnAfterUpload).not.toBeVisible()
        await expect(createLesson.JuiceMindZipAfterUploaded).not.toBeVisible()
    });

})