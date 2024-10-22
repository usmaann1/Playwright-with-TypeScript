const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import CLtd from '../../test-assets/test-data-files/create-lesson/create-lesson-testData.json'
import CTtd from '../../test-assets/test-data-files/create-teams/create-teams-testData.json'
const { TeamCoursesPage } = require("../../../pages/team-courses/team-courses.page")
const { CreateLesson } = require("../../../pages/create-lesson/create-lesson.page");
import TeamCoursesData from "../../test-assets/test-data-files/team-courses/team-courses-testData.json";
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";
import { FAILED_TEST_CASES } from '../../../failed-test-cases/failed-test-cases'

test.describe('TestSuite: Multiple Choice', () => {

    const randomNumber = UserFunctions.generateRandomString(5)
    const userEmail = Credentials.MultipleChoice_Email
    const userPwd = Credentials.MultipleChoice_Password
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

    test('Umair - TC-01 - Verify Multiple Choice Functionality', async ({ createLesson }) => {
        // create mcq test
        await createLesson.createMultipleChoiceTest()
        // assertions on Options screen
        await createLesson.assertionsOnOptionsScreenForMCQTest()
        // options selection for test on options screen
        await createLesson.optionsSelectionForMCQTest()
        // delete element
        await PlaywrightCore.click(createLesson.SetupBtn)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-02 - Verify Multiple Choice Functionality in Presentation Mode for Wrong Answer', async ({ createLesson }) => {
        // create mcq test
        await createLesson.createMultipleChoiceTest()
        // assertions on Options screen
        await createLesson.assertionsOnOptionsScreenForMCQTest()
        // options selection for test on options screen
        await createLesson.optionsSelectionForMCQTest()
        // define test marks 
        await PlaywrightCore.click(createLesson.SetupBtn)
        await expect(createLesson.PointsTxt).toHaveText(CLtd.PointsTxtValue)
        await PlaywrightCore.fill(createLesson.MultipleChoicePointsInput, CLtd.Four)
        // navigate to presentation mode 
        await createLesson.navigateToPresentationMode()
        // assertions and check answer on presentation mode
        await expect(createLesson.ExitStudentModeBtn).toHaveText(CLtd.ExitStudentModeBtnValue)
        await expect(createLesson.CheckAnswerBtn).toHaveText(CLtd.CheckAnswerBtnValue)
        await PlaywrightCore.click(createLesson.PresentationModeOpt1CheckBox)
        await PlaywrightCore.click(createLesson.CheckAnswerBtn)
        // assertions on presentation mode for incorrect mcq answer
        await createLesson.assertionsOnPresentationModeForIncorrectMCQAnswer()
        // exit presentation mode 
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // delete element
        await PlaywrightCore.click(createLesson.SetupBtn)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-03 - Verify Multiple Choice Functionality in Presentation Mode for Correct Answer', async ({ createLesson }) => {
        // create mcq test
        await createLesson.createMultipleChoiceTest()
        // assertions on Options screen
        await createLesson.assertionsOnOptionsScreenForMCQTest()
        // options selection for test on options screen
        await createLesson.optionsSelectionForMCQTest()
        // define test marks 
        await PlaywrightCore.click(createLesson.SetupBtn)
        await expect(createLesson.PointsTxt).toHaveText(CLtd.PointsTxtValue)
        await PlaywrightCore.fill(createLesson.MultipleChoicePointsInput, CLtd.One)
        // navigate to presentation mode
        await createLesson.navigateToPresentationMode()
        // assertions and check answer on presentation mode
        await expect(createLesson.ExitStudentModeBtn).toHaveText(CLtd.ExitStudentModeBtnValue)
        await expect(createLesson.CheckAnswerBtn).toHaveText(CLtd.CheckAnswerBtnValue)
        await PlaywrightCore.click(createLesson.PresentationModeOpt2)
        await PlaywrightCore.click(createLesson.CheckAnswerBtn)
        // assertions on presentation mode for correct mcq answer
        await createLesson.assertionsOnPresentationModeForCorrectMCQAnswer()
        // exit presentation mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // delete element 
        await PlaywrightCore.click(createLesson.SetupBtn)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-04 - Verify Multiple Choice Functionality in Presentation Mode for Correct Answer and check if it allows Multiple Selections in answer', async ({ createLesson }) => {
        // create mcq test
        await createLesson.createMultipleChoiceTest()
        // assertions on Options screen
        await createLesson.assertionsOnOptionsScreenForMCQTest()
        // options selection for test on options screen
        await createLesson.optionsSelectionForMCQTest()
        await PlaywrightCore.click(createLesson.OptionsCheckBox4.nth(0))
        // define marks and second correct answer
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.click(createLesson.PresentationModeOpt1CheckBox)
        await expect(createLesson.PointsTxt).toHaveText(CLtd.PointsTxtValue)
        await PlaywrightCore.fill(createLesson.MultipleChoicePointsInput, CLtd.One)
        // navigate to presentation mode
        await createLesson.navigateToPresentationMode()
        // assertions and check answer on presentation mode
        await expect(createLesson.ExitStudentModeBtn).toHaveText(CLtd.ExitStudentModeBtnValue)
        await expect(createLesson.CheckAnswerBtn).toHaveText(CLtd.CheckAnswerBtnValue)
        await PlaywrightCore.click(createLesson.PresentationModeOpt2)
        await PlaywrightCore.click(createLesson.PresentationModeOpt1CheckBox)
        await PlaywrightCore.click(createLesson.CheckAnswerBtn)
        // assertions on presentation mode for correct mcq answer
        await createLesson.assertionsOnPresentationModeForCorrectMCQAnswer()
        // exit presentation mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // delete element
        await PlaywrightCore.click(createLesson.SetupBtn)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-05 - Verify Multiple Choice Functionality in Presentation Mode for Correct Answer and check if Multiple Selection is Allowed as a Student', async ({ createLesson, teamCoursesPage, browser }) => {
        const randomEmail = UserFunctions.generateRandomEmail(userEmail)
        // create mcq test
        await createLesson.createMultipleChoiceTest()
        // assertions on Options screen
        await createLesson.assertionsOnOptionsScreenForMCQTest()
        // options selection for test on options screen
        await createLesson.optionsSelectionForMCQTest()
        await PlaywrightCore.click(createLesson.OptionsCheckBox4.nth(0))
        // define marks and second correct answer
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.click(createLesson.PresentationModeOpt1CheckBox)
        await expect(createLesson.PointsTxt).toHaveText(CLtd.PointsTxtValue)
        await PlaywrightCore.fill(createLesson.MultipleChoicePointsInput, CLtd.One)
        // navigate to presentation mode
        await createLesson.navigateToPresentationMode()
        // assertions and check answer on presentation mode
        await expect(createLesson.ExitStudentModeBtn).toHaveText(CLtd.ExitStudentModeBtnValue)
        await expect(createLesson.CheckAnswerBtn).toHaveText(CLtd.CheckAnswerBtnValue)
        await PlaywrightCore.click(createLesson.PresentationModeOpt2)
        await PlaywrightCore.click(createLesson.PresentationModeOpt1CheckBox)
        await PlaywrightCore.click(createLesson.CheckAnswerBtn)
        // assertions on presentation mode for correct mcq answer
        await createLesson.assertionsOnPresentationModeForCorrectMCQAnswer()
        // exit presentation mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // join invite as a student
        const link = await teamCoursesPage.PublishAndInviteCreateLesson()
        const newPage = await browser.newPage()
        const newTeamCoursesPageInstance = new TeamCoursesPage(newPage)
        const newCreateLessonPageInstance = new CreateLesson(newPage)
        await newTeamCoursesPageInstance.afterInviteSignUp(link,randomEmail,userPwd,TeamCoursesData.firstName,TeamCoursesData.LastName)
        // assertions as a student to check mcq test
        await expect(newCreateLessonPageInstance.OnePlus1TxtPresentationMode).toHaveText(CLtd.Heading1plus1)
        await expect(newCreateLessonPageInstance.OneTxtPresentationMode).toHaveText(CLtd.One)
        await expect(newCreateLessonPageInstance.TwoTxtPresentationMode).toHaveText(CLtd.Two)
        await expect(newCreateLessonPageInstance.ThreeTxtPresentationMode).toHaveText(CLtd.Three)
        await expect(newCreateLessonPageInstance.FourTxtPresentationMode).toHaveText(CLtd.Four)
        await expect(newCreateLessonPageInstance.CheckAnswerBtn).toHaveText(CLtd.CheckAnswerBtnValue)
        // check answer as a student 
        await PlaywrightCore.click(newCreateLessonPageInstance.Opt2StudentMode)
        await PlaywrightCore.click(newCreateLessonPageInstance.PresentationModeOptionWrong)
        await PlaywrightCore.click(newCreateLessonPageInstance.CheckAnswerBtn)
        // assertions as a student for correct mcq answer
        await expect(newCreateLessonPageInstance.IncorrectAndCorrectAnswerHeading).toHaveText(CLtd.CorrectAnswerTxt)
        await expect(newCreateLessonPageInstance.PointScoreMsg).toHaveText(CLtd.PointScore1Txt)
        await expect(newCreateLessonPageInstance.CloseBtn).toHaveText(CLtd.CloseBtnValue)
        await PlaywrightCore.click(newCreateLessonPageInstance.CloseBtn)
        await expect(newCreateLessonPageInstance.CorrectMsg).toHaveText(CLtd.CorrectMsgValue)
    });
})