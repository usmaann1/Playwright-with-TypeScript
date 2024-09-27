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

    test('Umair - TC-01 - Verify HTML Functionality - <h1> tag Heading', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.H1HeadingLocator).toHaveText(CLtd.HTMLNodeValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test('Umair - TC-02 - Verify HTML Functionality - <h2> tag Heading', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText2)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue2)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.H2HeadingLocator).toHaveText(CLtd.HTMLNodeValue2)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test('Umair - TC-03 - Verify HTML Functionality - <h3> tag Heading', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText3)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue3)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.H3HeadingLocator).toHaveText(CLtd.HTMLNodeValue3)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test('Umair - TC-04 - Verify HTML Functionality - <h4> tag Heading', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText4)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue4)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.H4HeadingLocator).toHaveText(CLtd.HTMLNodeValue4)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test('Umair - TC-05 - Verify HTML Functionality - Multiple tags Headings', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText5)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue5)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.H1HeadingLocator).toHaveText(CLtd.HTMLNodeValue)
        await expect(createLesson.H2HeadingLocator).toHaveText(CLtd.HTMLNodeValue2)
        await expect(createLesson.H3HeadingLocator).toHaveText(CLtd.HTMLNodeValue3)
        await expect(createLesson.H4HeadingLocator).toHaveText(CLtd.HTMLNodeValue4)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.HTMLNode) 
    });

    test('Umair - TC-06 - Verify HTML Functionality - Single Paragraph', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText6)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue6)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ParagraphOneLocator).toHaveText(CLtd.HTMLNodeValue6)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        
    });

    test('Umair - TC-07 - Verify HTML Functionality - Multiple Paragraphs', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText7)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue7)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ParagraphOneLocator).toHaveText(CLtd.HTMLNodeValue6)
        await expect(createLesson.ParagraphTwoLocator).toHaveText(CLtd.HTMLNodeValuePara2)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        
    });

    test('Umair - TC-08 - Verify HTML Functionality - Single heading and single Paragraph', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText8)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue8)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.H1HeadingLocator).toHaveText(CLtd.HTMLNodeValue)
        await expect(createLesson.ParagraphOneLocator).toHaveText(CLtd.HTMLNodeValue6)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        
    });

    test('Umair - TC-09 - Verify HTML Functionality - Single heading and multiple Paragraphs', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText9)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue9)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.H1HeadingLocator).toHaveText(CLtd.HTMLNodeValue)
        await expect(createLesson.ParagraphOneLocator).toHaveText(CLtd.HTMLNodeValue6)
        await expect(createLesson.ParagraphTwoLocator).toHaveText(CLtd.HTMLNodeValuePara2)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        
    });

    test('Umair - TC-10 - Verify HTML Functionality - Multiple headings and single Paragraph', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText10)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue10)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.H1HeadingLocator).toHaveText(CLtd.HTMLNodeValue)
        await expect(createLesson.H2HeadingLocator).toHaveText(CLtd.HTMLNodeValue2)
        await expect(createLesson.ParagraphOneLocator).toHaveText(CLtd.HTMLNodeValue6)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.HTMLNode) 
        
    });

    test('Umair - TC-11 - Verify HTML Functionality - Multiple headings and multiple Paragraphs', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText11)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue11)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.H1HeadingLocator).toHaveText(CLtd.HTMLNodeValue)
        await expect(createLesson.ParagraphOneLocator).toHaveText(CLtd.HTMLNodeValue6)
        await expect(createLesson.H2HeadingLocator).toHaveText(CLtd.HTMLNodeValue2)
        await expect(createLesson.ParagraphTwoLocator).toHaveText(CLtd.HTMLNodeValuePara2)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.HTMLNode)  
        
    });

    test('Umair - TC-12 - Verify HTML Functionality - Single paragraph with line break', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText12)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue12)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ParagraphOneLocator).toHaveText(CLtd.HTMLNodeValue12)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        
    });

    test('Umair - TC-13 - Verify HTML Functionality - Multiple paragraphs with line break', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText13)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue13)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ParagraphOneLocator).toHaveText(CLtd.HTMLNodeValue12)
        await expect(createLesson.ParagraphTwoLocator).toHaveText(CLtd.HTMLNodeValuePara02)
        await expect(createLesson.ParagraphThreeLocator).toHaveText(CLtd.HTMLNodeValuePara03)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.HTMLNode)        
    });

    // used div locator as cannot find any other

    test('Umair - TC-14 - Verify HTML Functionality - Single Link', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText14)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue14)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.LinksLocator).toHaveText(CLtd.HTMLNodeValue14)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    // used div locator as cannot find any other

    test('Umair - TC-15 - Verify HTML Functionality - Multiple Links', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText15)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue15)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.LinksLocator).toHaveText(CLtd.HTMLNodeValue15)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        
    });

    test('Umair - TC-16 - Verify HTML Functionality - Single Paragraph with defined Text color', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText16)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue16)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ParagraphOneLocator).toHaveText(CLtd.HTMLNodeValue16)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        
    });

    test('Umair - TC-17 - Verify HTML Functionality - Multiple Paragraphs with defined Text colors', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText17)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue17)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue16)
        await expect(createLesson.ModifiedParagraphTwo).toHaveText(CLtd.HTMLNodeValue16_2)
        await expect(createLesson.ModifiedParagraphThree).toHaveText(CLtd.HTMLNodeValue16_3)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
    });

    test('Umair - TC-18 - Verify HTML Functionality - Single Paragraph with defined font size', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText18)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue18)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ParagraphOneLocator).toHaveText(CLtd.HTMLNodeValue18)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.HTMLNode)        
    });

    test('Umair - TC-19 - Verify HTML Functionality - Multiple Paragraphs with defined font sizes', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText19)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue19)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue18)
        await expect(createLesson.ModifiedParagraphTwo).toHaveText(CLtd.HTMLNodeValue18_2)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.HTMLNode) 
        
    });

    test('Umair - TC-20 - Verify HTML Functionality - Multiple Paragraphs with thematic break', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText20)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue20)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue6)
        await expect(createLesson.ModifiedParagraphTwo).toHaveText(CLtd.HTMLNodeValuePara2)
        await expect(createLesson.ModifiedParagraphThree).toHaveText(CLtd.HTMLNodeValuePara3)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)      
    });

    test('Umair - TC-21 - Verify HTML Functionality - Multiple headings with thematic break', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText21)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue21)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.H1HeadingLocator).toHaveText(CLtd.HTMLNodeValue)
        await expect(createLesson.H2HeadingLocator).toHaveText(CLtd.HTMLNodeValue2)
        await expect(createLesson.H3HeadingLocator).toHaveText(CLtd.HTMLNodeValue3)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn) 
        await PlaywrightCore.click(createLesson.HTMLNode)       
    });

    test('Umair - TC-22 - Verify HTML Functionality - Multiple headings and paragraphs with thematic break', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText22)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue22)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.H1HeadingLocator).toHaveText(CLtd.HTMLNodeValue)
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue6)
        await expect(createLesson.H2HeadingLocator).toHaveText(CLtd.HTMLNodeValue2)
        await expect(createLesson.ModifiedParagraphTwo).toHaveText(CLtd.HTMLNodeValuePara2)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn) 
        await PlaywrightCore.click(createLesson.HTMLNode)  
        
    });

    test('Umair - TC-23 - Verify HTML Functionality - Single paragraph with bold text', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText23)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue23)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue23)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn) 
        
    });

    test('Umair - TC-24 - Verify HTML Functionality - Multiple paragraphs with bold text', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText24)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue24)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue23)
        await expect(createLesson.ModifiedParagraphTwo).toHaveText(CLtd.HTMLNodeValue23_2)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn) 
        
    });

    test('Umair - TC-25 - Verify HTML Functionality - Single paragraph with italic text', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText25)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue25)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue25)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        
    });

    test('Umair - TC-26 - Verify HTML Functionality - Multiple paragraphs with italic text', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText26)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue26)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue25)
        await expect(createLesson.ModifiedParagraphTwo).toHaveText(CLtd.HTMLNodeValue25_2)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        
    });

    test('Umair - TC-27 - Verify HTML Functionality - Single paragraph with highlighted word', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText27)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue27)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue27)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        
    });

    test('Umair - TC-28 - Verify HTML Functionality - Multiple paragraphs with highlighted words', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText28)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue28)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue27_1)
        await expect(createLesson.ModifiedParagraphTwo).toHaveText(CLtd.HTMLNodeValue27_2)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        
    });

    test('Umair - TC-29 - Verify HTML Functionality - Single highlighted paragraph', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText29)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue29)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue29)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)        
    });

    test('Umair - TC-30 - Verify HTML Functionality - Multiple highlighted paragraphs', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText30)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue30)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue29)
        await expect(createLesson.ModifiedParagraphTwo).toHaveText(CLtd.HTMLNodeValue29_2)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)    
    });

    test('Umair - TC-31 - Verify HTML Functionality - Single highlighted heading', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText31)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue31)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.H1HeadingLocator).toHaveText(CLtd.HTMLNodeValue31)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn) 
    });

    test('Umair - TC-32 - Verify HTML Functionality - Multiple highlighted headings', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText32)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue32)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.H1HeadingLocator).toHaveText(CLtd.HTMLNodeValue31)
        await expect(createLesson.H2HeadingLocator).toHaveText(CLtd.HTMLNodeValue31_2)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)  
    });

    test('Umair - TC-33 - Verify HTML Functionality - Single highlighted heading and paragraph', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText33)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue33)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.H1HeadingLocator).toHaveText(CLtd.HTMLNodeValue31)
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue29)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)  
        
    });

    test('Umair - TC-34 - Verify HTML Functionality - Multiple highlighted headings and paragraphs', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText34)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue34)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.H1HeadingLocator).toHaveText(CLtd.HTMLNodeValue40)
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue41)
        await expect(createLesson.H2HeadingLocator).toHaveText(CLtd.HTMLNodeValue42)
        await expect(createLesson.ModifiedParagraphTwo).toHaveText(CLtd.HTMLNodeValue43)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)  
        await PlaywrightCore.click(createLesson.HTMLNode)
    });

    test('Umair - TC-35 - Verify HTML Functionality - Single paragraph with strike through word', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText35)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue35)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue35)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)  
    });

    test('Umair - TC-36 - Verify HTML Functionality - Multiple paragraph with strike through word', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText36)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue36)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue45)
        await expect(createLesson.ModifiedParagraphTwo).toHaveText(CLtd.HTMLNodeValue46)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)  
    });

    test('Umair - TC-37 - Verify HTML Functionality - Single strike through paragraph', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText37)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue37)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue37)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)  
    });

    test('Umair - TC-38 - Verify HTML Functionality - Multiple strike through paragraphs', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText38)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue38)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue47)
        await expect(createLesson.ModifiedParagraphTwo).toHaveText(CLtd.HTMLNodeValue48)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)  
    });

    test('Umair - TC-39 - Verify HTML Functionality - Single strike through heading and paragraph', async ({ createLesson }) => {
        await createLesson.selectElementFromDropdown(CLtd.elements.html)
        await expect(createLesson.HTMLNode).toBeVisible()
        await PlaywrightCore.click(createLesson.HTMLNode)
        await PlaywrightCore.fill(createLesson.HTMLTextBox, CLtd.HTMLText39)
        await expect(createLesson.SaveBtn).toHaveText(CLtd.SaveBtnValue)
        await PlaywrightCore.click(createLesson.SaveBtn)
        await expect(createLesson.HTMLNode).toHaveText(CLtd.HTMLNodeValue39)
        // Navigate to Presentation Mode
        await PlaywrightCore.click(createLesson.presnetationMode)
        await expect(createLesson.PresentationModePopUpHeading).toHaveText(CLtd.PresentationModePopUpHeadingValue)
        await expect(createLesson.PresentationModePopUpDescription).toHaveText(CLtd.PresentationModePopUpDescriptionValue)
        await expect(createLesson.GotItBtn).toHaveText(CLtd.GotItBtnValue)
        await PlaywrightCore.click(createLesson.GotItBtn)
        // Assertion in Presentation Mode
        await expect(createLesson.H1HeadingLocator).toHaveText(CLtd.HTMLNodeValue49)
        await expect(createLesson.ModifiedParagraphOne).toHaveText(CLtd.HTMLNodeValue47)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)  
    });

    test.afterEach(async ({ loginPage, createTeams, createLesson }) => {
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

})