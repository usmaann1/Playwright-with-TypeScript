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

    test('TC - Create Lesson Insert - Multiple Choice', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.multipleChoice)
        await PlaywrightCore.click(createLesson.MultipleChoiceQuestionHeadingBox)
        await PlaywrightCore.fill(createLesson.MultipleChoiceQuestionHeadingBox, CLtd.Heading1plus1)
        await PlaywrightCore.click(createLesson.MultipleChoiceFormBox4DeleteBtn)
        await PlaywrightCore.fill(createLesson.MultipleChoiceFormBox1, CLtd.One)
        await PlaywrightCore.fill(createLesson.MultipleChoiceFormBox2, CLtd.Two)
        await PlaywrightCore.fill(createLesson.MultipleChoiceFormBox3, CLtd.Three)
        await PlaywrightCore.click(createLesson.MultipleChoiceAddChoiceBtn)
        await PlaywrightCore.fill(createLesson.MultipleChoiceFormBox4, CLtd.Four)
        await PlaywrightCore.click(createLesson.MultipleChoiceSelectBox2)
        await expect(createLesson.MultipleChoiceSelectBox2).toBeVisible()
        await expect(createLesson.MultipleChoiceFormBox1).toHaveText(CLtd.One)
        await expect(createLesson.MultipleChoiceFormBox2).toHaveText(CLtd.Two)
        await expect(createLesson.MultipleChoiceFormBox3).toHaveText(CLtd.Three)
        await expect(createLesson.MultipleChoiceFormBox4).toHaveText(CLtd.Four)
        await PlaywrightCore.click(createLesson.OptionsBtn)
        await expect(createLesson.MultipleChoiceOptionsRule1).toHaveText(CLtd.MultipleChoiceOptionsRule1Value)
        await expect(createLesson.MultipleChoiceOptionsRule2).toHaveText(CLtd.MultipleChoiceOptionsRule2Value)
        await expect(createLesson.MultipleChoiceOptionsRule3).toHaveText(CLtd.MultipleChoiceOptionsRule3Value)
        await expect(createLesson.MultipleChoiceOptionsRule4).toHaveText(CLtd.MultipleChoiceOptionsRule4Value)
        await expect(createLesson.MultipleChoiceOptionsRule5).toHaveText(CLtd.MultipleChoiceOptionsRule5Value)
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.click(createLesson.presnetationMode)

        // await expect(createLesson.EmbedSubmitBtn).toHaveText(CLtd.EmbedSubmitBtnValue)
        // await PlaywrightCore.fill(createLesson.EmbedEnterURL, CLtd.EmbedLink)
        // await PlaywrightCore.click(createLesson.EmbedSubmitBtn)
        // await expect(createLesson.YoutubePlayBtn).toBeVisible()
        // await expect(createLesson.WatchOnYoutubeBtn).toBeVisible()
        // await expect(createLesson.SetupBtn).toHaveText(CLtd.SetupBtnValue)
        // await expect(createLesson.OptionsBtn).toHaveText(CLtd.OptionsBtnValue)
        // await createLesson.valiadteYoutubeVideoHeading(CLtd.RelaxingRecitationVideoHeadingValue)
    });

    test.afterEach(async ({ createLesson }) => {
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

})