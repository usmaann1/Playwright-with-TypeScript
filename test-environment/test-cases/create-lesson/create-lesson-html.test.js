const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import CLtd from '../../test-assets/test-data-files/create-lesson/create-lesson-testData.json'
import CTtd from '../../test-assets/test-data-files/create-teams/create-teams-testData.json'
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";

test.describe('TestSuite: HTML', () => {

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

    test('Umair - TC-01 - Verify HTML Functionality - Heading H1', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-02 - Verify HTML Functionality - Multiple Headings H1 H2', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText2)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue2)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

})