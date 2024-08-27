const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import CLtd from '../../test-assets/test-data-files/create-lesson/create-lesson-testData.json'
import CTtd from '../../test-assets/test-data-files/create-teams/create-teams-testData.json'
require('dotenv').config()

test.describe('TestSuite: Create Lesson Insert', () => {

    const randomNumber = UserFunctions.generateRandomString(5)
    const userEmail = process.env.EMAIL_HASSAAN
    const userPwd = process.env.PASSWORD_HASSAAN
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

    test('TC - Create Lesson Insert - Embed', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.embed)
        await expect(createLesson.EmbedEnterURL).toBeVisible()
        await expect(createLesson.EmbedInsertURLHeading).toHaveText(CLtd.EmbedInsertURLHeadingValue)
        await expect(createLesson.EmbedSubmitBtn).toHaveText(CLtd.EmbedSubmitBtnValue)
        await PlaywrightCore.fill(createLesson.EmbedEnterURL, CLtd.EmbedLink)
        await PlaywrightCore.click(createLesson.EmbedSubmitBtn)
        await expect(createLesson.YoutubePlayBtn).toBeVisible()
        await expect(createLesson.WatchOnYoutubeBtn).toBeVisible()
        await expect(createLesson.SetupBtn).toHaveText(CLtd.SetupBtnValue)
        await expect(createLesson.OptionsBtn).toHaveText(CLtd.OptionsBtnValue)
        await createLesson.valiadteYoutubeVideoHeading(CLtd.RelaxingRecitationVideoHeadingValue)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('TC - Create Lesson Insert - Embed Replace URL', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.embed)
        await expect(createLesson.EmbedEnterURL).toBeVisible()
        await expect(createLesson.EmbedInsertURLHeading).toHaveText(CLtd.EmbedInsertURLHeadingValue)
        await expect(createLesson.EmbedSubmitBtn).toHaveText(CLtd.EmbedSubmitBtnValue)
        await PlaywrightCore.fill(createLesson.EmbedEnterURL, CLtd.EmbedLink)
        await PlaywrightCore.click(createLesson.EmbedSubmitBtn)
        await expect(createLesson.YoutubePlayBtn).toBeVisible()
        await expect(createLesson.WatchOnYoutubeBtn).toBeVisible()
        await expect(createLesson.SetupBtn).toHaveText(CLtd.SetupBtnValue)
        await expect(createLesson.OptionsBtn).toHaveText(CLtd.OptionsBtnValue)
        await createLesson.valiadteYoutubeVideoHeading(CLtd.RelaxingRecitationVideoHeadingValue)
        await PlaywrightCore.click(createLesson.OptionsBtn)
        await expect(createLesson.ReplaceEmbedTxtBox).toBeVisible()
        await expect(createLesson.CurrentEmbedURLHeading).toHaveText(CLtd.CurrentEmbedURLHeadingValue)
        await expect(createLesson.ReplaceHeading).toHaveText(CLtd.ReplaceHeadingValue)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.fill(createLesson.ReplaceEmbedTxtBox, CLtd.EmbedLinkReplace)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
        await createLesson.valiadteYoutubeVideoHeading(CLtd.WayOfTearsVideoHeadingValue)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

})