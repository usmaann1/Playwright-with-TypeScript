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
        await createLesson.selectElementFromDropdown(CLtd.elements.multipleChoice)
        await expect(createLesson.SetupBtn).toHaveText(CLtd.SetupBtnValue)
        await expect(createLesson.OptionsBtn).toHaveText(CLtd.OptionsBtnValue)
        await expect(createLesson.AddChoiceBtn).toHaveText(CLtd.AddChoiceBtnValue)
        //create mcq
        await PlaywrightCore.fill(createLesson.MCQQuestion, CLtd.MCQQuestionValue)
        await PlaywrightCore.fill(createLesson.MCQOption1, CLtd.MCQOption1Value)
        await PlaywrightCore.fill(createLesson.MCQOption2, CLtd.MCQOption2Value)
        await PlaywrightCore.fill(createLesson.MCQOption3, CLtd.MCQOption3Value)
        await PlaywrightCore.fill(createLesson.MCQOption4, CLtd.MCQOption4Value)
        // define marks
        await PlaywrightCore.fill(createLesson.MCQTotalPoints, CLtd.MCQTotalMarks)
        // select correct mcq answer
        await PlaywrightCore.click(createLesson.MCQCorrectOption)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Mark and check answer in Presentation Mode
        await PlaywrightCore.click(createLesson.MCQCorrectOption)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await expect(createLesson.PresentationModeCorrectAnswerPopup).toHaveText(CLtd.PresentationModeCorrectAnswerHeading)
        await PlaywrightCore.click(createLesson.PresentationModeCorrectAnswerPopupClose)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // Revisit Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Revisit Presentation mode, mark and check answer
        await PlaywrightCore.click(createLesson.MCQWrongOption)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await expect(createLesson.PresentationModeCorrectAnswerPopup).toHaveText(CLtd.PresentationModeCorrectAnswerHeading)
        await PlaywrightCore.click(createLesson.PresentationModeCorrectAnswerPopupClose)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
        // Delete Element 
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-02 - Verify Fill in the Blanks Functionality - Revisit Presentation Mode and Check Answer', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.fillInBlank)
        await expect(createLesson.SetupBtn).toHaveText(CLtd.SetupBtnValue)
        await expect(createLesson.OptionsBtn).toHaveText(CLtd.OptionsBtnValue)
        await expect(createLesson.AddBlankBtn).toHaveText(CLtd.AddBlankBtnValue)
        //create fill in the blank
        await PlaywrightCore.fill(createLesson.FillInBlankTitle, CLtd.FillInBlankTitleValue)
        await PlaywrightCore.fill(createLesson.FillInBlankQues, CLtd.FillInBlankQuesValue)
        await PlaywrightCore.click(createLesson.AddBlankBtn)
        await PlaywrightCore.fill(createLesson.FillInBlankAnswer1, CLtd.FillInBlankAnswer1Value)
        // define marks
        await PlaywrightCore.fill(createLesson.FillInBlankTotalPoints, CLtd.FillInBlankTotalpointsValue)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Write and check answer in Presentation Mode
        await PlaywrightCore.fill(createLesson.PresentationModeFillInBlank, CLtd.FillInBlankAnswer1Value)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await expect(createLesson.PresentationModeCorrectAnswerPopup).toHaveText(CLtd.PresentationModeCorrectAnswerHeading)
        await PlaywrightCore.click(createLesson.PresentationModeCorrectAnswerPopupClose)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // Revisit Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
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
        await createLesson.selectElementFromDropdown(CLtd.elements.shortAnswer)
        await expect(createLesson.SetupBtn).toHaveText(CLtd.SetupBtnValue)
        await expect(createLesson.ModelSolutionBtn).toHaveText(CLtd.ModelSolutionBtnValue)
        await expect(createLesson.OptionsBtn).toHaveText(CLtd.OptionsBtnValue)
        //create short question and answer
        await PlaywrightCore.fill(createLesson.ShortAnswerPromptField, CLtd.ShortAnswerPromptFieldValue)
        await PlaywrightCore.fill(createLesson.ShortAnswerTemplateField, CLtd.ShortAnswerTemplateFieldValue)
        await PlaywrightCore.click(createLesson.ModelSolutionBtn)
        await PlaywrightCore.fill(createLesson.ShortAnswerField, CLtd.ShortAnswerFieldValue)
        // define marks
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.fill(createLesson.ShortAnswerTotalPoints, CLtd.ShortAnswerTotalpointsValue)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Write and check answer in Presentation Mode
        await PlaywrightCore.fill(createLesson.PresentationModeAnswerField, CLtd.ShortAnswerFieldValue)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await expect(createLesson.PresentationModeCorrectAnswerPopup).toHaveText(CLtd.PresentationModeCorrectAnswerHeading)
        await PlaywrightCore.click(createLesson.PresentationModeCorrectAnswerPopupClose)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // Revisit Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Revisit Presentation mode, mark and check answer
        await PlaywrightCore.fill(createLesson.PresentationModeAnswerField, CLtd.ShortAnswerFieldValue)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await expect(createLesson.PresentationModeCorrectAnswerPopup).toHaveText(CLtd.PresentationModeCorrectAnswerHeading)
        await PlaywrightCore.click(createLesson.PresentationModeCorrectAnswerPopupClose)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
        // Delete Element 
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-04 - Verify JuiceMind IDE Functionality - Unit Test - Revisit Presentation Mode and Check Answer', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.JuiceMindIDE)
        await expect(createLesson.InitializeJuiceMindIDEBtn).toHaveText(CLtd.InitializeJuiceMindIDEBtnValue)
        await PlaywrightCore.click(createLesson.InitializeJuiceMindIDEBtn)
        await PlaywrightCore.fill(createLesson.ProjectNameField, CLtd.ProjectNameFieldValue)
        await PlaywrightCore.click(createLesson.ProjectTypeField)
        await PlaywrightCore.click(createLesson.ProjectTypePythonValue)
        await PlaywrightCore.click(createLesson.CreateProjectSubmitBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await PlaywrightCore.fill(createLesson.IDEFirstLine, CLtd.IDEFirstLineValue)
        await PlaywrightCore.click(createLesson.CodeRunBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 3000)
        await expect(createLesson.CodeOutputFirstLine).toHaveText(CLtd.CodeOutputFirstLineValue)
        // create test
        await PlaywrightCore.click(createLesson.IDETestsBtn)
        await PlaywrightCore.click(createLesson.IDETestsAddTestBtn)
        await PlaywrightCore.click(createLesson.CreateTestTestTypeField)
        await PlaywrightCore.click(createLesson.CreateTestUnitTestType)
        await PlaywrightCore.fill(createLesson.CreateTestTestNameField, CLtd.CreateTestTestNameFieldValue)
        await PlaywrightCore.click(createLesson.CreateTestAddInnerTestBtn)
        await PlaywrightCore.fill(createLesson.CreateTestTestNameField2, CLtd.CreateTestTestNameFieldValue)
        await PlaywrightCore.click(createLesson.CreateTestCodeTextbox)
        // await createLesson.CreateTestCodeTextbox.press('Backspace'.repeat(20));
        await PlaywrightCore.click(createLesson.CreateTestAddTestBtn)
        await PlaywrightCore.click(createLesson.CreateTestAddTestBtn2)
        await PlaywrightCore.click(createLesson.IDETemplateBtn)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Check answer in Presentation Mode
        await PlaywrightCore.click(createLesson.CreateStarterCodeBtn)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // Revisit Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Revisit Presentation mode, and check answer
        await PlaywrightCore.click(createLesson.CreateStarterCodeBtn)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.IDETemplateBtn)
        // Delete Element 
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-05 - Verify JuiceMind IDE Functionality - Input Output Test - Revisit Presentation Mode and Check Answer', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.JuiceMindIDE)
        await expect(createLesson.InitializeJuiceMindIDEBtn).toHaveText(CLtd.InitializeJuiceMindIDEBtnValue)
        await PlaywrightCore.click(createLesson.InitializeJuiceMindIDEBtn)
        await PlaywrightCore.fill(createLesson.ProjectNameField, CLtd.ProjectNameFieldValue)
        await PlaywrightCore.click(createLesson.ProjectTypeField)
        await PlaywrightCore.click(createLesson.ProjectTypePythonValue)
        await PlaywrightCore.click(createLesson.CreateProjectSubmitBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await PlaywrightCore.fill(createLesson.IDEFirstLine, CLtd.IDEFirstLineValue)
        await PlaywrightCore.click(createLesson.CodeRunBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 3000)
        await expect(createLesson.CodeOutputFirstLine).toHaveText(CLtd.CodeOutputFirstLineValue)
        // create test
        await PlaywrightCore.click(createLesson.IDETestsBtn)
        await PlaywrightCore.click(createLesson.IDETestsAddTestBtn)
        await PlaywrightCore.click(createLesson.CreateTestTestTypeField)
        await PlaywrightCore.click(createLesson.CreateTestInputOutputTestType)
        await PlaywrightCore.fill(createLesson.CreateTestTestNameField, CLtd.CreateTestTestNameFieldValue)
        await PlaywrightCore.fill(createLesson.CreateTestInputField, CLtd.CreateTestInputFieldValue)
        await PlaywrightCore.fill(createLesson.CreateTestOutputField, CLtd.CreateTestOutputFieldValue)
        await PlaywrightCore.click(createLesson.CreateTestAddTestBtn2)
        await PlaywrightCore.click(createLesson.IDETemplateBtn)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Check answer in Presentation Mode
        await PlaywrightCore.click(createLesson.CreateStarterCodeBtn)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        // Revisit Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Revisit Presentation mode, and check answer
        await PlaywrightCore.click(createLesson.CreateStarterCodeBtn)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.IDETemplateBtn)
        // Delete Element 
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-06 - Verify JuiceMind IDE Functionality - Unit Test - Correct answer result and marks obtained', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.JuiceMindIDE)
        await expect(createLesson.InitializeJuiceMindIDEBtn).toHaveText(CLtd.InitializeJuiceMindIDEBtnValue)
        await PlaywrightCore.click(createLesson.InitializeJuiceMindIDEBtn)
        await PlaywrightCore.fill(createLesson.ProjectNameField, CLtd.ProjectNameFieldValue)
        await PlaywrightCore.click(createLesson.ProjectTypeField)
        await PlaywrightCore.click(createLesson.ProjectTypePythonValue)
        await PlaywrightCore.click(createLesson.CreateProjectSubmitBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await PlaywrightCore.fill(createLesson.IDEFirstLine, CLtd.IDEFirstLineValue)
        await PlaywrightCore.click(createLesson.CodeRunBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 3000)
        await expect(createLesson.CodeOutputFirstLine).toHaveText(CLtd.CodeOutputFirstLineValue)
        // create test
        await PlaywrightCore.click(createLesson.IDETestsBtn)
        await PlaywrightCore.click(createLesson.IDETestsAddTestBtn)
        await PlaywrightCore.click(createLesson.CreateTestTestTypeField)
        await PlaywrightCore.click(createLesson.CreateTestUnitTestType)
        await PlaywrightCore.fill(createLesson.CreateTestTestNameField, CLtd.CreateTestTestNameFieldValue)
        await PlaywrightCore.click(createLesson.CreateTestAddInnerTestBtn)
        await PlaywrightCore.fill(createLesson.CreateTestTestNameField2, CLtd.CreateTestTestNameFieldValue)
        await PlaywrightCore.click(createLesson.CreateTestCodeTextbox)
        await createLesson.CreateTestCodeTextbox.click({clickCount: 3})
        await PlaywrightCore.fill(createLesson.CreateTestCodeTextbox, CLtd.IDEFirstLineValue)
        await PlaywrightCore.click(createLesson.CreateTestAddTestBtn)
        await PlaywrightCore.click(createLesson.CreateTestAddTestBtn2)
        await PlaywrightCore.click(createLesson.IDETemplateBtn)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Check answer in Presentation Mode
        await PlaywrightCore.click(createLesson.CreateStarterCodeBtn)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)    
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        // verify the result of correct answer and marks obtained
        await expect(createLesson.CorrectAnswerText).toHaveText(CLtd.CorrectAnswerTextValue)
        await expect(createLesson.IDETestObtainedMarks).toHaveText(CLtd.IDETestObtainedMarksValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.IDETemplateBtn)
        // Delete Element 
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-07 - Verify JuiceMind IDE Functionality - Input Output Test - Correct answer result and marks obtained', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.JuiceMindIDE)
        await expect(createLesson.InitializeJuiceMindIDEBtn).toHaveText(CLtd.InitializeJuiceMindIDEBtnValue)
        await PlaywrightCore.click(createLesson.InitializeJuiceMindIDEBtn)
        await PlaywrightCore.fill(createLesson.ProjectNameField, CLtd.ProjectNameFieldValue)
        await PlaywrightCore.click(createLesson.ProjectTypeField)
        await PlaywrightCore.click(createLesson.ProjectTypePythonValue)
        await PlaywrightCore.click(createLesson.CreateProjectSubmitBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await PlaywrightCore.fill(createLesson.IDEFirstLine, CLtd.IDEFirstLineValue)
        await PlaywrightCore.click(createLesson.CodeRunBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 3000)
        await expect(createLesson.CodeOutputFirstLine).toHaveText(CLtd.CodeOutputFirstLineValue)
        // create test
        await PlaywrightCore.click(createLesson.IDETestsBtn)
        await PlaywrightCore.click(createLesson.IDETestsAddTestBtn)
        await PlaywrightCore.click(createLesson.CreateTestTestTypeField)
        await PlaywrightCore.click(createLesson.CreateTestInputOutputTestType)
        await PlaywrightCore.fill(createLesson.CreateTestTestNameField, CLtd.CreateTestTestNameFieldValue)
        await PlaywrightCore.fill(createLesson.CreateTestInputField, CLtd.CreateTestInputFieldValue)
        await PlaywrightCore.fill(createLesson.CreateTestOutputField, CLtd.CreateTestOutputFieldValue)
        await PlaywrightCore.click(createLesson.CreateTestAddTestBtn2)
        await PlaywrightCore.click(createLesson.IDETemplateBtn)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Check answer in Presentation Mode
        await PlaywrightCore.click(createLesson.CreateStarterCodeBtn)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)    
        await PlaywrightCore.waitTimeout(createLesson.page, 8000)
        // verify the result of correct answer and marks obtained
        await expect(createLesson.CorrectAnswerText).toHaveText(CLtd.CorrectAnswerTextValue)
        await expect(createLesson.InputOutputTestObtainedMarks).toHaveText(CLtd.IDETestObtainedMarksValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.IDETemplateBtn)
        await PlaywrightCore.click(createLesson.IDETestsBtn)
        // Delete Element 
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });


    test('Umair - TC-08 - Verify Short Answer Functionality - Correct answer result and marks obtained', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.shortAnswer)
        await expect(createLesson.SetupBtn).toHaveText(CLtd.SetupBtnValue)
        await expect(createLesson.ModelSolutionBtn).toHaveText(CLtd.ModelSolutionBtnValue)
        await expect(createLesson.OptionsBtn).toHaveText(CLtd.OptionsBtnValue)
        //create short question and answer
        await PlaywrightCore.fill(createLesson.ShortAnswerPromptField, CLtd.ShortAnswerPromptFieldValue)
        await PlaywrightCore.fill(createLesson.ShortAnswerTemplateField, CLtd.ShortAnswerTemplateFieldValue)
        await PlaywrightCore.click(createLesson.ModelSolutionBtn)
        await PlaywrightCore.fill(createLesson.ShortAnswerField, CLtd.ShortAnswerFieldValue)
        // define marks
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.fill(createLesson.ShortAnswerTotalPoints, CLtd.ShortAnswerTotalpointsValue)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Write and check answer in Presentation Mode
        await PlaywrightCore.fill(createLesson.PresentationModeAnswerField, CLtd.ShortAnswerFieldValue)
        await PlaywrightCore.click(createLesson.CheckAnswerButton)
        await expect(createLesson.PresentationModeCorrectAnswerPopup).toHaveText(CLtd.PresentationModeCorrectAnswerHeading)
        await PlaywrightCore.click(createLesson.PresentationModeCorrectAnswerPopupClose)   
        await expect(createLesson.ShortAnswerTestObtainedMarks).toHaveText(CLtd.ShortAnswerTotalpointsValue) 
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
        // Delete Element 
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-09 - Verify Fill in the Blanks Functionality - Correct answer result and marks obtained', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.fillInBlank)
        await expect(createLesson.SetupBtn).toHaveText(CLtd.SetupBtnValue)
        await expect(createLesson.OptionsBtn).toHaveText(CLtd.OptionsBtnValue)
        await expect(createLesson.AddBlankBtn).toHaveText(CLtd.AddBlankBtnValue)
        //create fill in the blank
        await PlaywrightCore.fill(createLesson.FillInBlankTitle, CLtd.FillInBlankTitleValue)
        await PlaywrightCore.fill(createLesson.FillInBlankQues, CLtd.FillInBlankQuesValue)
        await PlaywrightCore.click(createLesson.AddBlankBtn)
        await PlaywrightCore.fill(createLesson.FillInBlankAnswer1, CLtd.FillInBlankAnswer1Value)
        // define marks
        await PlaywrightCore.fill(createLesson.FillInBlankTotalPoints, CLtd.FillInBlankTotalpointsValue)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
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

    test('Umair - TC-10 - Verify Multiple Choice Functionality - Correct answer result and marks obtained', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.multipleChoice)
        await expect(createLesson.SetupBtn).toHaveText(CLtd.SetupBtnValue)
        await expect(createLesson.OptionsBtn).toHaveText(CLtd.OptionsBtnValue)
        await expect(createLesson.AddChoiceBtn).toHaveText(CLtd.AddChoiceBtnValue)
        //create mcq
        await PlaywrightCore.fill(createLesson.MCQQuestion, CLtd.MCQQuestionValue)
        await PlaywrightCore.fill(createLesson.MCQOption1, CLtd.MCQOption1Value)
        await PlaywrightCore.fill(createLesson.MCQOption2, CLtd.MCQOption2Value)
        await PlaywrightCore.fill(createLesson.MCQOption3, CLtd.MCQOption3Value)
        await PlaywrightCore.fill(createLesson.MCQOption4, CLtd.MCQOption4Value)
        // define marks
        await PlaywrightCore.fill(createLesson.MCQTotalPoints, CLtd.MCQTotalMarks)
        // select correct mcq answer
        await PlaywrightCore.click(createLesson.MCQCorrectOption)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
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