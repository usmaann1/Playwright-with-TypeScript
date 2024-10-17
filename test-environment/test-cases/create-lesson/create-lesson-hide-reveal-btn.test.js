const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import CLtd from '../../test-assets/test-data-files/create-lesson/create-lesson-testData.json'
import CLHRtd from '../../test-assets/test-data-files/create-lesson/create-lesson-hide-reveal-testData.json'
import CTtd from '../../test-assets/test-data-files/create-teams/create-teams-testData.json'
const { TeamCoursesPage } = require("../../../pages/team-courses/team-courses.page")
const { CreateLesson } = require("../../../pages/create-lesson/create-lesson.page");
import TeamCoursesData from "../../test-assets/test-data-files/team-courses/team-courses-testData.json";
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";

test.describe('TestSuite: Hide and Reveal Button', () => {

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

    test('Umair - TC-01 - Verify Hide & Reveal Button Functionality', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.hideAndRevealButton)
        // hide text 
        await createLesson.hideText()
        // assertion after hiding text
        await createLesson.assertionsAfterHidingText()
        // reveal text 
        await PlaywrightCore.click(createLesson.RevealContentButton)
        // assertion after revealing text 
        await createLesson.assertionsAfterRevealingText()
        // delete element
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-02 - Verify Hide & Reveal Button Functionality in Presentation Mode', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.hideAndRevealButton)
        // hide text 
        await createLesson.hideText()
        // assertion after hiding text
        await createLesson.assertionsAfterHidingText()
        // reveal text
        await PlaywrightCore.click(createLesson.RevealContentButton)
        // assertion after revealing text 
        await createLesson.assertionsAfterRevealingText()
        // navigate to presentation mode
        await createLesson.navigateToPresentationMode()
        // assertion in presentation mode
        await expect(createLesson.ExitStudentModeBtn).toHaveText(CLtd.ExitStudentModeBtnValue)
        await expect(createLesson.StudentModeHideContentText).toHaveText(CLHRtd.HideRevealTxtHeadingValue)
        await PlaywrightCore.click(createLesson.HideContentBtn)
        await expect(createLesson.HideRevealTextBox).not.toBeVisible()
        await expect(createLesson.RevealContentButton).toHaveText(CLHRtd.RevealContentTxt)
        await PlaywrightCore.click(createLesson.RevealContentButton)
        await expect(createLesson.RevealContentButton).not.toBeVisible()
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // delete element
        await PlaywrightCore.hover(createLesson.HideContentBtn)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-03 - Verify Hide & Reveal Button Functionality as Student', async ({ createLesson, teamCoursesPage, browser }) => {
        const randomEmail = UserFunctions.generateRandomEmail(userEmail)
        await createLesson.selectElementFromDropdown(CLtd.elements.hideAndRevealButton)
        // hide text 
        await createLesson.hideText()
        // assertion after hiding text
        await createLesson.assertionsAfterHidingText()
        // reveal text
        await PlaywrightCore.click(createLesson.RevealContentButton)
        // assertion after revealing text 
        await createLesson.assertionsAfterRevealingText()
        // navigate to presentation mode
        await createLesson.navigateToPresentationMode()
        // assertion in presentation mode
        await expect(createLesson.ExitStudentModeBtn).toHaveText(CLtd.ExitStudentModeBtnValue)
        await expect(createLesson.StudentModeHideContentText).toHaveText(CLHRtd.HideRevealTxtHeadingValue)
        await PlaywrightCore.click(createLesson.HideContentBtn)
        await expect(createLesson.HideRevealTextBox).not.toBeVisible()
        await expect(createLesson.RevealContentButton).toHaveText(CLHRtd.RevealContentTxt)
        await PlaywrightCore.click(createLesson.RevealContentButton)
        await expect(createLesson.RevealContentButton).not.toBeVisible()
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // join invite as a student
        const link = await teamCoursesPage.PublishAndInviteCreateLesson()
        const newPage = await browser.newPage()
        const newTeamCoursesPageInstance = new TeamCoursesPage(newPage)
        const newCreateLessonPageInstance = new CreateLesson(newPage)
        await newTeamCoursesPageInstance.afterInviteSignUp(link,randomEmail,userPwd,TeamCoursesData.firstName,TeamCoursesData.LastName)
        // hide and reveal text as a student
        await expect(newCreateLessonPageInstance.StudentModeHideContentText).toHaveText(CLHRtd.HideRevealTxtHeadingValue)
        await PlaywrightCore.click(newCreateLessonPageInstance.HideContentBtn)
        await expect(newCreateLessonPageInstance.HideRevealTextBox).not.toBeVisible()
        await expect(newCreateLessonPageInstance.RevealContentButton).toHaveText(CLHRtd.RevealContentTxt)
        await PlaywrightCore.click(newCreateLessonPageInstance.RevealContentButton)
        await expect(newCreateLessonPageInstance.RevealContentButton).not.toBeVisible()
    });

})