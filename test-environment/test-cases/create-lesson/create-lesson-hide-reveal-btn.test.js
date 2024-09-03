const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import CLtd from '../../test-assets/test-data-files/create-lesson/create-lesson-testData.json'
import CLHRtd from '../../test-assets/test-data-files/create-lesson/create-lesson-hide-reveal-testData.json'
import CTtd from '../../test-assets/test-data-files/create-teams/create-teams-testData.json'
const { TeamCoursesPage } = require("../../../pages/team-courses/team-courses.page")
const { CreateLesson } = require("../../../pages/create-lesson/create-lesson.page");
import TeamCoursesData from "../../test-assets/test-data-files/team-courses/team-courses-testData.json";
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";
require('dotenv').config()

test.describe('TestSuite: Create Lesson Multiple Choice', () => {

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

    test('TC - Create Lesson Insert - Hide & Reveal Button', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.hideAndRevealButton)
        await expect(createLesson.HideRevealTextBox).toBeVisible()
        await PlaywrightCore.fill(createLesson.HideRevealTextBox, CLHRtd.HideRevealTxtHeadingValue)
        await expect(createLesson.HideContentBtn).toHaveText(CLHRtd.HideContentTxt)
        await PlaywrightCore.click(createLesson.HideContentBtn)
        await expect(createLesson.HideRevealTextBox).not.toBeVisible()
        await expect(createLesson.RevealContentButton).toHaveText(CLHRtd.RevealContentTxt)
        await PlaywrightCore.click(createLesson.RevealContentButton)
        await expect(createLesson.RevealContentButton).not.toBeVisible()
        await expect(createLesson.HideRevealTextBox).toBeVisible()
        await expect(createLesson.HideContentBtn).toHaveText(CLHRtd.HideContentTxt)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('TC - Create Lesson Insert - Hide & Reveal Button - Presentation Mode', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.hideAndRevealButton)
        await expect(createLesson.HideRevealTextBox).toBeVisible()
        await PlaywrightCore.fill(createLesson.HideRevealTextBox, CLHRtd.HideRevealTxtHeadingValue)
        await expect(createLesson.HideContentBtn).toHaveText(CLHRtd.HideContentTxt)
        await PlaywrightCore.click(createLesson.HideContentBtn)
        await expect(createLesson.HideRevealTextBox).not.toBeVisible()
        await expect(createLesson.RevealContentButton).toHaveText(CLHRtd.RevealContentTxt)
        await PlaywrightCore.click(createLesson.RevealContentButton)
        await expect(createLesson.RevealContentButton).not.toBeVisible()
        await expect(createLesson.HideRevealTextBox).toBeVisible()
        await expect(createLesson.HideContentBtn).toHaveText(CLHRtd.HideContentTxt)
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        await expect(createLesson.ExitStudentModeBtn).toHaveText(CLtd.ExitStudentModeBtnValue)
        await expect(createLesson.StudentModeHideContentText).toHaveText(CLHRtd.HideRevealTxtHeadingValue)
        await PlaywrightCore.click(createLesson.HideContentBtn)
        await expect(createLesson.HideRevealTextBox).not.toBeVisible()
        await expect(createLesson.RevealContentButton).toHaveText(CLHRtd.RevealContentTxt)
        await PlaywrightCore.click(createLesson.RevealContentButton)
        await expect(createLesson.RevealContentButton).not.toBeVisible()
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test('TC - Create Lesson Insert - Hide & Reveal Button - Student Login Check', async ({ createLesson, teamCoursesPage, browser }) => {
        const randomEmail = UserFunctions.generateRandomEmail(userEmail)
        await createLesson.selectElementFromDropdown(CLtd.elements.hideAndRevealButton)
        await expect(createLesson.HideRevealTextBox).toBeVisible()
        await PlaywrightCore.fill(createLesson.HideRevealTextBox, CLHRtd.HideRevealTxtHeadingValue)
        await expect(createLesson.HideContentBtn).toHaveText(CLHRtd.HideContentTxt)
        await PlaywrightCore.click(createLesson.HideContentBtn)
        await expect(createLesson.HideRevealTextBox).not.toBeVisible()
        await expect(createLesson.RevealContentButton).toHaveText(CLHRtd.RevealContentTxt)
        await PlaywrightCore.click(createLesson.RevealContentButton)
        await expect(createLesson.RevealContentButton).not.toBeVisible()
        await expect(createLesson.HideRevealTextBox).toBeVisible()
        await expect(createLesson.HideContentBtn).toHaveText(CLHRtd.HideContentTxt)
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        await expect(createLesson.ExitStudentModeBtn).toHaveText(CLtd.ExitStudentModeBtnValue)
        await expect(createLesson.StudentModeHideContentText).toHaveText(CLHRtd.HideRevealTxtHeadingValue)
        await PlaywrightCore.click(createLesson.HideContentBtn)
        await expect(createLesson.HideRevealTextBox).not.toBeVisible()
        await expect(createLesson.RevealContentButton).toHaveText(CLHRtd.RevealContentTxt)
        await PlaywrightCore.click(createLesson.RevealContentButton)
        await expect(createLesson.RevealContentButton).not.toBeVisible()
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        const link = await teamCoursesPage.PublishAndInviteCreateLesson()
        const newPage = await browser.newPage()
        const newTeamCoursesPageInstance = new TeamCoursesPage(newPage)
        const newCreateLessonPageInstance = new CreateLesson(newPage)
        await newTeamCoursesPageInstance.afterInviteSignUp(link,randomEmail,userPwd,TeamCoursesData.firstName,TeamCoursesData.LastName)
        await PlaywrightCore.click(createLesson.HideContentBtn)
        await expect(newCreateLessonPageInstance.StudentModeHideContentText).toHaveText(CLHRtd.HideRevealTxtHeadingValue)
        await PlaywrightCore.click(newCreateLessonPageInstance.HideContentBtn)
        await expect(newCreateLessonPageInstance.HideRevealTextBox).not.toBeVisible()
        await expect(newCreateLessonPageInstance.RevealContentButton).toHaveText(CLHRtd.RevealContentTxt)
        await PlaywrightCore.click(newCreateLessonPageInstance.RevealContentButton)
        await expect(newCreateLessonPageInstance.RevealContentButton).not.toBeVisible()
    });

})