const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import CLtd from '../../test-assets/test-data-files/create-lesson/create-lesson-testData.json'
import CTtd from '../../test-assets/test-data-files/create-teams/create-teams-testData.json'
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";

test.describe('TestSuite: Bugs Recreation Link', () => {

    const randomNumber = UserFunctions.generateRandomString(5)
    const userEmail = Credentials.EMAIL
    const userPwd = Credentials.PASSWORD
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

    test('Umair - TC-01 - Verify Multiple Choice Functionality - Revisit Presentation Mode and Check Answer', async ({ createLesson }) => {
        //create mcq
        await createLesson.createMCQTest()
        // define marks
        await PlaywrightCore.fill(createLesson.MCQTotalPoints, CLtd.MCQTotalMarks)
        // select correct mcq answer
        await PlaywrightCore.click(createLesson.MCQCorrectOption)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Mark and check answer in Presentation Mode
        await PlaywrightCore.click(createLesson.MCQCorrectOption)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await expect(createLesson.PresentationModeCorrectAnswerPopup).toHaveText(CLtd.PresentationModeCorrectAnswerHeading)
        await PlaywrightCore.click(createLesson.PresentationModeCorrectAnswerPopupClose)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // Revisit Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Revisit Presentation mode, mark and check answer
        await PlaywrightCore.click(createLesson.MCQWrongOption)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await expect(createLesson.PresentationModeCorrectAnswerPopup).toHaveText(CLtd.PresentationModeCorrectAnswerHeading)
        await PlaywrightCore.click(createLesson.PresentationModeCorrectAnswerPopupClose)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
        // Delete Element 
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-02 - Verify Fill in the Blanks Functionality - Revisit Presentation Mode and Check Answer', async ({ createLesson }) => {
        //create fill in the blank
        await createLesson.createFillInTheBlankTest()
        // define marks
        await PlaywrightCore.fill(createLesson.FillInBlankTotalPoints, CLtd.FillInBlankTotalpointsValue)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Write and check answer in Presentation Mode
        await PlaywrightCore.fill(createLesson.PresentationModeFillInBlank, CLtd.FillInBlankAnswer1Value)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await expect(createLesson.PresentationModeCorrectAnswerPopup).toHaveText(CLtd.PresentationModeCorrectAnswerHeading)
        await PlaywrightCore.click(createLesson.PresentationModeCorrectAnswerPopupClose)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // Revisit Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Revisit Presentation mode, mark and check answer
        await PlaywrightCore.fill(createLesson.PresentationModeFillInBlank, CLtd.FillInBlankAnswer2Value)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await expect(createLesson.PresentationModeCorrectAnswerPopup).toHaveText(CLtd.PresentationModeCorrectAnswerHeading)
        await PlaywrightCore.click(createLesson.PresentationModeCorrectAnswerPopupClose)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
        // Delete Element 
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-03 - Verify Short Answer Functionality - Revisit Presentation Mode and Check Answer', async ({ createLesson }) => {
        //create short question and answer
        await createLesson.createShortAnswerTest()
        // define marks
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.fill(createLesson.ShortAnswerTotalPoints, CLtd.ShortAnswerTotalpointsValue)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Write and check answer in Presentation Mode
        await PlaywrightCore.fill(createLesson.PresentationModeAnswerField, CLtd.ShortAnswerFieldValue)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await expect(createLesson.PresentationModeCorrectAnswerPopup).toHaveText(CLtd.PresentationModeCorrectAnswerHeading)
        await PlaywrightCore.click(createLesson.PresentationModeCorrectAnswerPopupClose)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // Revisit Presentation Mode
        await createLesson.navigateToPresentationMode()
        await PlaywrightCore.waitTimeout(createLesson.page, 3000)
        // Revisit Presentation mode, mark and check answer
        await PlaywrightCore.fill(createLesson.PresentationModeAnswerField, CLtd.ShortAnswerFieldValue)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await PlaywrightCore.waitTimeout(createLesson.page, 3000)
        await expect(createLesson.PresentationModeCorrectAnswerPopup).toHaveText(CLtd.PresentationModeCorrectAnswerHeading)
        await PlaywrightCore.click(createLesson.PresentationModeCorrectAnswerPopupClose)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
        // Delete Element 
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-04 - Verify Short Answer Functionality - Correct answer result and marks obtained', async ({ createLesson }) => {
        //create short question and answer
        await createLesson.createShortAnswerTest()
        // define marks
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.fill(createLesson.ShortAnswerTotalPoints, CLtd.ShortAnswerTotalpointsValue)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Write and check answer in Presentation Mode
        await PlaywrightCore.fill(createLesson.PresentationModeAnswerField, CLtd.ShortAnswerFieldValue)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await expect(createLesson.PresentationModeCorrectAnswerPopup).toHaveText(CLtd.PresentationModeCorrectAnswerHeading)
        await PlaywrightCore.click(createLesson.PresentationModeCorrectAnswerPopupClose)   
        await expect(createLesson.ShortAnswerTestObtainedMarks).toHaveText(CLtd.ShortAnswerTotalpointsValue) 
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
        // Delete Element 
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-05 - Verify Fill in the Blanks Functionality - Correct answer result and marks obtained', async ({ createLesson }) => {
        //create fill in the blank
        await createLesson.createFillInTheBlankTest()
        // define marks
        await PlaywrightCore.fill(createLesson.FillInBlankTotalPoints, CLtd.FillInBlankTotalpointsValue)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Write and check answer in Presentation Mode
        await PlaywrightCore.fill(createLesson.PresentationModeFillInBlank, CLtd.FillInBlankAnswer1Value)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await expect(createLesson.PresentationModeCorrectAnswerPopup).toHaveText(CLtd.PresentationModeCorrectAnswerHeading)
        await PlaywrightCore.click(createLesson.PresentationModeCorrectAnswerPopupClose)
        await expect(createLesson.FillInBlanksTestObtainedMarks).toHaveText(CLtd.FillInBlankTotalpointsValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
        // Delete Element 
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-06 - Verify Multiple Choice Functionality - Correct answer result and marks obtained', async ({ createLesson }) => {
        //create mcq
        await createLesson.createMCQTest()
        // define marks
        await PlaywrightCore.fill(createLesson.MCQTotalPoints, CLtd.MCQTotalMarks)
        // select correct mcq answer
        await PlaywrightCore.click(createLesson.MCQCorrectOption)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Mark and check answer in Presentation Mode
        await PlaywrightCore.click(createLesson.MCQCorrectOption)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await expect(createLesson.PresentationModeCorrectAnswerPopup).toHaveText(CLtd.PresentationModeCorrectAnswerHeading)
        await PlaywrightCore.click(createLesson.PresentationModeCorrectAnswerPopupClose)
        await expect(createLesson.MCQTestObtainedMarks).toHaveText(CLtd.MCQTotalMarks)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
        // Delete Element 
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

});