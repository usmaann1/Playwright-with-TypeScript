const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import CLtd from '../../test-assets/test-data-files/create-lesson/create-lesson-testData.json'
import CLHRtd from '../../test-assets/test-data-files/create-lesson/create-lesson-hide-reveal-testData.json'
import CTtd from '../../test-assets/test-data-files/create-teams/create-teams-testData.json'
const { TeamCoursesPage } = require("../../../pages/team-courses/team-courses.page")
const { CreateLesson } = require("../../../pages/create-lesson/create-lesson.page");
import TeamCoursesData from "../../test-assets/test-data-files/team-courses/team-courses-testData.json";
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";
import { FAILED_TEST_CASES } from '../../../failed-test-cases/failed-test-cases'

test.describe('TestSuite: Hide and Reveal Button', () => {

    const randomNumber = UserFunctions.generateRandomString(5)
    const userEmail = Credentials.HideReveal_Email
    const userPwd = Credentials.HideReveal_Password
    const teamName = CLtd.teamName + randomNumber
    const lessonName = CLtd.lessonName + '-' + randomNumber

    test.beforeEach(async ({ loginPage, createTeams, createLesson }, testInfo) => {
        if (FAILED_TEST_CASES.length !== 0) {
            if (!FAILED_TEST_CASES.includes(testInfo.title)) {
              test.skip('Test case not included in the list');
            }
          }
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
        await expect(createLesson.HideRevealTextBox).toBeVisible()
        await PlaywrightCore.fill(createLesson.HideRevealTextBox, CLHRtd.HideRevealTxtHeadingValue)
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
        await expect(createLesson.HideRevealTextBox).toBeVisible()
        await PlaywrightCore.fill(createLesson.HideRevealTextBox, CLHRtd.HideRevealTxtHeadingValue)
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
        await expect(createLesson.HideRevealTextBox).toBeVisible()
        await PlaywrightCore.fill(createLesson.HideRevealTextBox, CLHRtd.HideRevealTxtHeadingValue)
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
        await PlaywrightCore.click(newCreateLessonPageInstance.StudentViewLessonName)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await expect(newCreateLessonPageInstance.StudentModeHideContentText).toHaveText(CLHRtd.HideRevealTxtHeadingValue)
        await PlaywrightCore.click(newCreateLessonPageInstance.HideContentBtn)
        await expect(newCreateLessonPageInstance.HideRevealTextBox).not.toBeVisible()
        await expect(newCreateLessonPageInstance.RevealContentButton).toHaveText(CLHRtd.RevealContentTxt)
        await PlaywrightCore.click(newCreateLessonPageInstance.RevealContentButton)
        await expect(newCreateLessonPageInstance.RevealContentButton).not.toBeVisible()
    });

    test('Umair - TC-04 - Verify Hide & Reveal Button Functionality - Hide content should show as hided on presentation mode', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.hideAndRevealButton)
        await expect(createLesson.HideRevealTextBox).toBeVisible()
        await PlaywrightCore.fill(createLesson.HideRevealTextBox, CLHRtd.HideRevealTxtHeadingValue)
        // hide text 
        await createLesson.hideText()
        // assertion after hiding text
        await createLesson.assertionsAfterHidingText()
        // navigate to presentation mode
        await createLesson.navigateToPresentationMode()
        // assertion in presentation mode
        await expect(createLesson.ExitStudentModeBtn).toHaveText(CLtd.ExitStudentModeBtnValue)
        await expect(createLesson.HideContentBtn).not.toBeVisible()
        await expect(createLesson.HideRevealTextBox).not.toBeVisible()
        await expect(createLesson.RevealContentButton).toBeVisible()
        await expect(createLesson.RevealContentButton).toHaveText(CLHRtd.RevealContentTxt)
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // delete element
        await PlaywrightCore.hover(createLesson.RevealContentButton)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-05 - Verify Hide & Reveal Button Functionality - Reveal content should show as revealed on presentation mode', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.hideAndRevealButton)
        await expect(createLesson.HideRevealTextBox).toBeVisible()
        await PlaywrightCore.fill(createLesson.HideRevealTextBox, CLHRtd.HideRevealTxtHeadingValue)
        // assertion after revealing text 
        await createLesson.assertionsAfterRevealingText()
        // navigate to presentation mode
        await createLesson.navigateToPresentationMode()
        // assertion in presentation mode
        await expect(createLesson.ExitStudentModeBtn).toHaveText(CLtd.ExitStudentModeBtnValue)
        await expect(createLesson.StudentModeHideContentText).toHaveText(CLHRtd.HideRevealTxtHeadingValue)
        await expect(createLesson.HideContentBtn).toBeVisible()
        await expect(createLesson.RevealContentButton).not.toBeVisible()
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // delete element
        await PlaywrightCore.hover(createLesson.HideContentBtn)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-06 - Verify Hide & Reveal Button Functionality - Reveal hided content on presentation mode to show as revealed on main screen.', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.hideAndRevealButton)
        await expect(createLesson.HideRevealTextBox).toBeVisible()
        await PlaywrightCore.fill(createLesson.HideRevealTextBox, CLHRtd.HideRevealTxtHeadingValue)
        // hide text 
        await createLesson.hideText()
        // assertion after hiding text
        await createLesson.assertionsAfterHidingText()
        // navigate to presentation mode
        await createLesson.navigateToPresentationMode()
        // assertion in presentation mode
        await expect(createLesson.ExitStudentModeBtn).toHaveText(CLtd.ExitStudentModeBtnValue)
        await expect(createLesson.HideRevealTextBox).not.toBeVisible()
        await expect(createLesson.RevealContentButton).toBeVisible()
        await expect(createLesson.RevealContentButton).toHaveText(CLHRtd.RevealContentTxt)
        await PlaywrightCore.click(createLesson.RevealContentButton)
        await expect(createLesson.RevealContentButton).not.toBeVisible()
        await expect(createLesson.HideContentBtn).toBeVisible()
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // assertion on main screen
        await expect(createLesson.HideContentBtn).toBeVisible()
        await expect(createLesson.HideRevealTextBox).toBeVisible()
        await expect(createLesson.RevealContentButton).not.toBeVisible()
        // delete element
        await PlaywrightCore.hover(createLesson.HideContentBtn)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-07 - Verify Hide & Reveal Button Functionality - Hide revealed content on presentation mode to show as hided on main screen.', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.hideAndRevealButton)
        await expect(createLesson.HideRevealTextBox).toBeVisible()
        await PlaywrightCore.fill(createLesson.HideRevealTextBox, CLHRtd.HideRevealTxtHeadingValue)
        // navigate to presentation mode
        await createLesson.navigateToPresentationMode()
        // assertion in presentation mode
        await expect(createLesson.ExitStudentModeBtn).toHaveText(CLtd.ExitStudentModeBtnValue)
        await expect(createLesson.StudentModeHideContentText).toHaveText(CLHRtd.HideRevealTxtHeadingValue)
        await expect(createLesson.RevealContentButton).not.toBeVisible()
        await expect(createLesson.HideContentBtn).toBeVisible()
        await expect(createLesson.HideContentBtn).toHaveText(CLHRtd.HideContentTxt)
        await PlaywrightCore.click(createLesson.HideContentBtn)
        await expect(createLesson.RevealContentButton).toBeVisible()
        await expect(createLesson.HideContentBtn).not.toBeVisible()
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // assertion on main screen
        await expect(createLesson.RevealContentButton).toBeVisible()
        await expect(createLesson.HideRevealTextBox).not.toBeVisible()
        await expect(createLesson.HideContentBtn).not.toBeVisible()
        // delete element
        await PlaywrightCore.hover(createLesson.RevealContentButton)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

})