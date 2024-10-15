const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import { FAILED_TEST_CASES } from '../../../failed-test-cases/failed-test-cases'
import CLtd from '../../test-assets/test-data-files/create-lesson/create-lesson-testData.json'
import CTtd from '../../test-assets/test-data-files/create-teams/create-teams-testData.json'
import CreateTeamsTestData from '../../test-assets/test-data-files/create-teams/create-teams-testData.json'
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";

test.describe('TestSuite: Insert File', () => {

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

    test('Umair - TC-01 - Verify Insert File Functionality - Zip File', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.insertFiles)
        await PlaywrightCore.fileUpload(createLesson.ChooseFileBox, CreateTeamsTestData.ReplitTeamsZipPath)
        await PlaywrightCore.waitFor(createLesson.JuiceMindZipAfterUploaded)
        await expect(createLesson.JuiceMindZipAfterUploaded).toHaveText(CLtd.JuiceMindZipAfterUploadedValue)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.JuiceMindZipAfterUploaded).toHaveText(CLtd.JuiceMindZipAfterUploadedValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test('Umair - TC-02 - Verify Insert File Functionality - JPG File', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.insertFiles)
        await PlaywrightCore.fileUpload(createLesson.ChooseFileBox, CreateTeamsTestData.CorollaJPGFilePath)
        await PlaywrightCore.waitFor(createLesson.JPGFileAfterUploaded)
        await expect(createLesson.JPGFileAfterUploaded).toHaveText(CLtd.JPGFileAfterUploadedValue)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.JPGFileAfterUploaded).toHaveText(CLtd.JPGFileAfterUploadedValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test('Umair - TC-03 - Verify Insert File Functionality - CSV File', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.insertFiles)
        await PlaywrightCore.fileUpload(createLesson.ChooseFileBox, CreateTeamsTestData.FileTestCSVPath)
        await PlaywrightCore.waitFor(createLesson.FileTestCSVAfterUploaded)
        await expect(createLesson.FileTestCSVAfterUploaded).toHaveText(CLtd.FileTestCSVAfterUploadedValue)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.FileTestCSVAfterUploaded).toHaveText(CLtd.FileTestCSVAfterUploadedValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test('Umair - TC-04 - Verify Insert File Functionality - PNG File', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.insertFiles)
        await PlaywrightCore.fileUpload(createLesson.ChooseFileBox, CreateTeamsTestData.FileTestPNGPath)
        await PlaywrightCore.waitFor(createLesson.FileTestPNGAfterUploaded)
        await expect(createLesson.FileTestPNGAfterUploaded).toHaveText(CLtd.FileTestPNGAfterUploadedValue)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.FileTestPNGAfterUploaded).toHaveText(CLtd.FileTestPNGAfterUploadedValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test('Umair - TC-05 - Verify Insert File Functionality - JS File', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.insertFiles)
        await PlaywrightCore.fileUpload(createLesson.ChooseFileBox, CreateTeamsTestData.HelperJSPath)
        await PlaywrightCore.waitFor(createLesson.HelperJSAfterUploaded)
        await expect(createLesson.HelperJSAfterUploaded).toHaveText(CLtd.HelperJSAfterUploadedValue)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.HelperJSAfterUploaded).toHaveText(CLtd.HelperJSAfterUploadedValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test('Umair - TC-06 - Verify Insert File Functionality - HTML File', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.insertFiles)
        await PlaywrightCore.fileUpload(createLesson.ChooseFileBox, CreateTeamsTestData.IndexHTMLPath)
        await PlaywrightCore.waitFor(createLesson.IndexHTMLAfterUploaded)
        await expect(createLesson.IndexHTMLAfterUploaded).toHaveText(CLtd.IndexHTMLAfterUploadedValue)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.IndexHTMLAfterUploaded).toHaveText(CLtd.IndexHTMLAfterUploadedValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test('Umair - TC-07 - Verify Insert File Functionality - Java File', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.insertFiles)
        await PlaywrightCore.fileUpload(createLesson.ChooseFileBox, CreateTeamsTestData.MainJAVAPath)
        await PlaywrightCore.waitFor(createLesson.MainJAVAAfterUploaded)
        await expect(createLesson.MainJAVAAfterUploaded).toHaveText(CLtd.MainJAVAAfterUploadedValue)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.MainJAVAAfterUploaded).toHaveText(CLtd.MainJAVAAfterUploadedValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test('Umair - TC-08 - Verify Insert File Functionality - PY File', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.insertFiles)
        await PlaywrightCore.fileUpload(createLesson.ChooseFileBox, CreateTeamsTestData.MainPYPath)
        await PlaywrightCore.waitFor(createLesson.MainPYAfterUploaded)
        await expect(createLesson.MainPYAfterUploaded).toHaveText(CLtd.MainPYAfterUploadedValue)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.MainPYAfterUploaded).toHaveText(CLtd.MainPYAfterUploadedValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test('Umair - TC-09 - Verify Insert File Functionality - CPP File', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.insertFiles)
        await PlaywrightCore.fileUpload(createLesson.ChooseFileBox, CreateTeamsTestData.MainCPPPath)
        await PlaywrightCore.waitFor(createLesson.MainCPPAfterUploaded)
        await expect(createLesson.MainCPPAfterUploaded).toHaveText(CLtd.MainCPPAfterUploadedValue)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.MainCPPAfterUploaded).toHaveText(CLtd.MainCPPAfterUploadedValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test('Umair - TC-10 - Verify Insert File Functionality - CS File', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.insertFiles)
        await PlaywrightCore.fileUpload(createLesson.ChooseFileBox, CreateTeamsTestData.MainCSPath)
        await PlaywrightCore.waitFor(createLesson.MainCSAfterUploaded)
        await expect(createLesson.MainCSAfterUploaded).toHaveText(CLtd.MainCSAfterUploadedValue)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.MainCSAfterUploaded).toHaveText(CLtd.MainCSAfterUploadedValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test('Umair - TC-11 - Verify Insert File Functionality - DOCX File', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.insertFiles)
        await PlaywrightCore.fileUpload(createLesson.ChooseFileBox, CreateTeamsTestData.TestDOCXPath)
        await PlaywrightCore.waitFor(createLesson.TestDOCXAfterUploaded)
        await expect(createLesson.TestDOCXAfterUploaded).toHaveText(CLtd.TestDOCXAfterUploadedValue)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.TestDOCXAfterUploaded).toHaveText(CLtd.TestDOCXAfterUploadedValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test('Umair - TC-12 - Verify Insert File Functionality - PDF File', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.insertFiles)
        await PlaywrightCore.fileUpload(createLesson.ChooseFileBox, CreateTeamsTestData.TestPDFPath)
        await PlaywrightCore.waitFor(createLesson.TestPDFAfterUploaded)
        await expect(createLesson.TestPDFAfterUploaded).toHaveText(CLtd.TestPDFAfterUploadedValue)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.TestPDFAfterUploaded).toHaveText(CLtd.TestPDFAfterUploadedValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test.afterEach(async ({ loginPage, createTeams, createLesson }, testInfo) => {
        if (FAILED_TEST_CASES.length !== 0) {
            if (!FAILED_TEST_CASES.includes(testInfo.title)) {
                test.skip('Test case not included in the list');
            }
        }
        await expect(createLesson.DeleteBtnAfterUpload).toHaveText(CLtd.DeleteBtnAfterUploadValue)
        await PlaywrightCore.click(createLesson.DeleteBtnAfterUpload)
        await expect(createLesson.DeleteBtnAfterUpload).not.toBeVisible()
    });

})