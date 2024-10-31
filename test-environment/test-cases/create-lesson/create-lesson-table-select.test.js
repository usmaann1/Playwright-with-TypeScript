const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import CLtd from '../../test-assets/test-data-files/create-lesson/create-lesson-testData.json'
import CLSTtd from '../../test-assets/test-data-files/create-lesson/create-lesson-select-table-testData.json'
import CTtd from '../../test-assets/test-data-files/create-teams/create-teams-testData.json'
const { TeamCoursesPage } = require("../../../pages/team-courses/team-courses.page")
const { CreateLesson } = require("../../../pages/create-lesson/create-lesson.page");
import TeamCoursesData from "../../test-assets/test-data-files/team-courses/team-courses-testData.json";
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";
import { FAILED_TEST_CASES } from '../../../failed-test-cases/failed-test-cases'

test.describe('TestSuite: Create Lesson Table Select', () => {

    const randomNumber = UserFunctions.generateRandomString(5)
    const userEmail = Credentials.EMAIL_HASSAAN
    const userPwd = Credentials.PASSWORD_HASSAAN
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

   test('Umair - TC-01 - Verify Table Select UI', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.tableSelect)
        await expect(createLesson.SelectTableHeadingTxtBox).toBeVisible()
        await expect(createLesson.SelectSolutionHeading).toHaveText(CLSTtd.SelectSolutionHeadingValue)
        await expect(createLesson.SelectSolutionToggle).toBeVisible()
        await expect(createLesson.ShuffleTableHeading).toHaveText(CLSTtd.ShuffleTableHeadingValue)
        await expect(createLesson.ShuffleTableBtn).toBeVisible()
        await expect(createLesson.SelectTableRow1Box1).toBeVisible()
        await expect(createLesson.SelectTableRow1Box2).toBeVisible()
        await expect(createLesson.SelectTableRow1Box3).toBeVisible()
        await expect(createLesson.SelectTableRow2Box1).toBeVisible()
        await expect(createLesson.SelectTableRow2Box2).toBeVisible()
        await expect(createLesson.SelectTableRow2Box3).toBeVisible()
        await expect(createLesson.SelectTableRow3Box1).toBeVisible()
        await expect(createLesson.SelectTableRow3Box2).toBeVisible()
        await expect(createLesson.SelectTableRow3Box3).toBeVisible()
        await expect(createLesson.AddRowBtn).toHaveText(CLSTtd.AddRowBtnValue)
        await expect(createLesson.AddColumnBtn).toHaveText(CLSTtd.AddColumnBtnValue)
        await PlaywrightCore.click(createLesson.OptionsBtn)
        await expect(createLesson.SelectTableOpt1AllowLearner).toHaveText(CLSTtd.SelectTableOpt1AllowLearnerValue)
        await expect(createLesson.SelectTableOpt2LeanersCan).toHaveText(CLSTtd.SelectTableOpt2LeanersCanValue)
    });

   test('Umair - TC-02 - Verify Table Select Functionality', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.tableSelect)
        await expect(createLesson.SelectTableHeadingTxtBox).toBeVisible()
        await PlaywrightCore.fill(createLesson.SelectTableHeadingTxtBox, CLtd.Heading1plus1)
        await PlaywrightCore.click(createLesson.AddRowBtn)
        await PlaywrightCore.click(createLesson.SelectTableDeleteNewRowAndColumn)
        await PlaywrightCore.click(createLesson.AddColumnBtn)
        await PlaywrightCore.click(createLesson.SelectTableDeleteNewRowAndColumn)
        await PlaywrightCore.fill(createLesson.SelectTableRow1Box1, CLSTtd.SelectTableRow1Box1Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow1Box2, CLSTtd.SelectTableRow1Box2Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow1Box3, CLSTtd.SelectTableRow1Box3Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow2Box1, CLSTtd.SelectTableRow2Box1Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow2Box2, CLSTtd.SelectTableRow2Box2Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow2Box3, CLSTtd.SelectTableRow2Box3Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow3Box1, CLSTtd.SelectTableRow3Box1Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow3Box2, CLSTtd.SelectTableRow3Box2Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow3Box3, CLSTtd.SelectTableRow3Box3Value)
        await PlaywrightCore.click(createLesson.SelectSolutionToggle)
        await PlaywrightCore.click(createLesson.SelectTableSelectBox1)
    });

   test('Umair - TC-03 - Verify Table Select Functionality in Presentation Mode', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.tableSelect)
        await expect(createLesson.SelectTableHeadingTxtBox).toBeVisible()
        await PlaywrightCore.fill(createLesson.SelectTableHeadingTxtBox, CLtd.Heading1plus1)
        await PlaywrightCore.click(createLesson.AddRowBtn)
        await PlaywrightCore.click(createLesson.SelectTableDeleteNewRowAndColumn)
        await PlaywrightCore.click(createLesson.AddColumnBtn)
        await PlaywrightCore.click(createLesson.SelectTableDeleteNewRowAndColumn)
        await PlaywrightCore.fill(createLesson.SelectTableRow1Box1, CLSTtd.SelectTableRow1Box1Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow1Box2, CLSTtd.SelectTableRow1Box2Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow1Box3, CLSTtd.SelectTableRow1Box3Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow2Box1, CLSTtd.SelectTableRow2Box1Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow2Box2, CLSTtd.SelectTableRow2Box2Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow2Box3, CLSTtd.SelectTableRow2Box3Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow3Box1, CLSTtd.SelectTableRow3Box1Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow3Box2, CLSTtd.SelectTableRow3Box2Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow3Box3, CLSTtd.SelectTableRow3Box3Value)
        await PlaywrightCore.click(createLesson.SelectSolutionToggle)
        await PlaywrightCore.click(createLesson.SelectTableSelectBox1)
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        await expect(createLesson.ExitStudentModeBtn).toHaveText(CLtd.ExitStudentModeBtnValue)
        await PlaywrightCore.click(createLesson.SelectTableSelectBox1)
        await PlaywrightCore.click(createLesson.SubmitBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await expect(createLesson.IncorrectAndCorrectAnswerHeading).toHaveText(CLtd.CorrectAnswerTxt)
        await expect(createLesson.PointScoreMsg).toHaveText(CLtd.PointScore1Txt)
    });

   test('Umair - TC-04 - Verify Table Select Functionality as a Student', async ({ createLesson, teamCoursesPage, browser }) => {
        const randomEmail = UserFunctions.generateRandomEmail(userEmail)
        await createLesson.selectElementFromDropdown(CLtd.elements.tableSelect)
        await expect(createLesson.SelectTableHeadingTxtBox).toBeVisible()
        await PlaywrightCore.fill(createLesson.SelectTableHeadingTxtBox, CLtd.Heading1plus1)
        await PlaywrightCore.click(createLesson.AddRowBtn)
        await PlaywrightCore.click(createLesson.SelectTableDeleteNewRowAndColumn)
        await PlaywrightCore.click(createLesson.AddColumnBtn)
        await PlaywrightCore.click(createLesson.SelectTableDeleteNewRowAndColumn)
        await PlaywrightCore.fill(createLesson.SelectTableRow1Box1, CLSTtd.SelectTableRow1Box1Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow1Box2, CLSTtd.SelectTableRow1Box2Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow1Box3, CLSTtd.SelectTableRow1Box3Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow2Box1, CLSTtd.SelectTableRow2Box1Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow2Box2, CLSTtd.SelectTableRow2Box2Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow2Box3, CLSTtd.SelectTableRow2Box3Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow3Box1, CLSTtd.SelectTableRow3Box1Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow3Box2, CLSTtd.SelectTableRow3Box2Value)
        await PlaywrightCore.fill(createLesson.SelectTableRow3Box3, CLSTtd.SelectTableRow3Box3Value)
        await PlaywrightCore.click(createLesson.SelectSolutionToggle)
        await PlaywrightCore.click(createLesson.SelectTableSelectBox1)
        await PlaywrightCore.click(createLesson.PublishToggleBtn)
        const link = await teamCoursesPage.InviteCreateLesson()
        const newPage = await browser.newPage()
        const newTeamCoursesPageInstance = new TeamCoursesPage(newPage)
        const newCreateLessonPageInstance = new CreateLesson(newPage)
        await newTeamCoursesPageInstance.afterInviteSignUp(link,randomEmail,userPwd,TeamCoursesData.firstName,TeamCoursesData.LastName)
        await PlaywrightCore.click(newCreateLessonPageInstance.StudentViewLessonName)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await PlaywrightCore.click(newCreateLessonPageInstance.SelectTableSelectBox1)
        await PlaywrightCore.click(newCreateLessonPageInstance.SubmitBtn)
        await expect(newCreateLessonPageInstance.IncorrectAndCorrectAnswerHeading).toHaveText(CLtd.CorrectAnswerTxt)
        await expect(newCreateLessonPageInstance.PointScoreMsg).toHaveText(CLtd.PointScore1Txt)
    });

})