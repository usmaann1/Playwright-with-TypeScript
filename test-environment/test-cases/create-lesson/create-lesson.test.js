const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import CLtd from '../../test-assets/test-data-files/create-lesson/create-lesson-testData.json'
import CTtd from '../../test-assets/test-data-files/create-teams/create-teams-testData.json'
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";
const { TeamCoursesPage } = require("../../../pages/team-courses/team-courses.page")
const { CreateLesson } = require("../../../pages/create-lesson/create-lesson.page");
import TeamCoursesData from "../../test-assets/test-data-files/team-courses/team-courses-testData.json";

test.describe('TestSuite: Create Lesson', () => {
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
    });

    test('TC - Validate UI of Create New Lesson Screen', async ({ createLesson }) => {
        await expect(createLesson.backButton).toBeVisible()
        await expect(createLesson.createBtn).toBeVisible()
        await expect(createLesson.lessonNameTxtBox).toBeVisible()
        await expect(createLesson.title).toBeVisible()
    });
    test('TC - Validate creation of New lesson', async ({ createLesson }) => {
        await createLesson.createALesson(lessonName)
        await expect(createLesson.lessonTitle).toHaveText(lessonName)
    });
    test('TC - Validate new Lesson UI fields', async ({ createLesson }) => {
        await createLesson.createALesson(lessonName)
        // covers side menus
        await expect(createLesson.backToTeamButton).toBeVisible()
        await expect(createLesson.studentGradesBtn).toBeVisible()
        await expect(createLesson.PublishMultiple).toBeVisible()
        await expect(createLesson.deleteMultiple).toBeVisible()
        await expect(createLesson.SideMenuLessonName).toHaveText(lessonName)
        await expect(createLesson.AddNewItem).toBeVisible()
        await expect(createLesson.ShareItems).toBeVisible()
        // covers right side menu buttons
        await expect(createLesson.rightSIdeMenu).toBeVisible()
        await expect(createLesson.InviteStudents).toBeVisible()
        await expect(createLesson.bouncingMsg).toBeVisible()
        await expect(createLesson.bouncingMsgCloseBtn).toBeVisible()
        await expect(createLesson.userListTitle).toBeVisible()
        await expect(createLesson.userEmail).toBeVisible()
        await expect(createLesson.userType).toBeVisible()

        // covers main page
        await expect(createLesson.lessonTitle).toHaveText(lessonName)
        await expect(createLesson.addLessonPlan).toBeVisible()
        await expect(createLesson.presnetationMode).toBeVisible()
        await expect(createLesson.PublishToggle).toBeVisible()
        await expect(createLesson.textEditor).toBeVisible()
        // covers Editor Options
        createLesson.setVisibility()
        createLesson.hoverOverFirstRow()
        await expect(createLesson.plusIcon).toBeVisible()
        await expect(createLesson.menuIcon).toBeVisible()

    });
    test('TC - validate adding new Header element inside the editor', async ({ createLesson }) => {
        await createLesson.createALesson(lessonName)
        await createLesson.setVisibility()
        // Heading 1
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.heading1)
        await createLesson.validateElementsExistOnEditor(createLesson.heading1)
        await createLesson.validateElementsToAcceptInputOnEditor(createLesson.heading1, CLtd.textForEditor)
        await createLesson.hoverOverAnyElement(createLesson.heading1)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
        // Heading 2
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.heading2)
        await createLesson.validateElementsExistOnEditor(createLesson.heading2)
        await createLesson.validateElementsToAcceptInputOnEditor(createLesson.heading2, CLtd.textForEditor)
        await createLesson.hoverOverAnyElement(createLesson.heading2)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
        // Heading 3
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.heading3)
        await createLesson.validateElementsExistOnEditor(createLesson.heading3)
        await createLesson.validateElementsToAcceptInputOnEditor(createLesson.heading3, CLtd.textForEditor)
        await createLesson.hoverOverAnyElement(createLesson.heading3)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)


    });
    test('TC - validate adding new Bullet element inside the editor', async ({ createLesson }) => {
        await createLesson.createALesson(lessonName)
        await createLesson.setVisibility()
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.bulletList)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.bulletList)
        await createLesson.validateElementsExistOnEditor(createLesson.bulletList)
        await createLesson.validateAddingMultipleBulletOnEditor(createLesson.bulletList)
        await createLesson.hoverOverAnyElement(createLesson.bulletList)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });
    test('TC - validate adding new Numbered list element inside the editor', async ({ createLesson }) => {
        await createLesson.createALesson(lessonName)
        await createLesson.setVisibility()
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.NumberedList)
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.NumberedList)
        await createLesson.validateElementsExistOnEditor(createLesson.NumberedList)
        await createLesson.validateElementsToAcceptInputOnEditor(createLesson.NumberedList, CLtd.textForEditor)
        await createLesson.hoverOverAnyElement(createLesson.NumberedList)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });
    test('TC - validate adding new Task list element inside the editor', async ({ createLesson }) => {
        await createLesson.createALesson(lessonName)
        await createLesson.setVisibility()
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.taskList)
        await createLesson.validateElementExistOnEditorHavingAttribute(createLesson.taskList, CLtd.attributes.dataType, CLtd.attributes.value)
        await createLesson.validateElementsToAcceptInputOnEditor(createLesson.taskList, CLtd.textForEditor)
        await createLesson.valdiateCheckboxSelection(CLtd.type, CLtd.valueCb)
        await createLesson.hoverOverAnyElement(createLesson.taskList)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });
    test('TC - validate adding new Quote element inside the editor', async ({ createLesson }) => {
        await createLesson.createALesson(lessonName)
        await createLesson.setVisibility()
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.quote)

        await createLesson.validateTagExistOnEditorHavingTag(createLesson.parentQuotetag, createLesson.quoteTag) // Quote
        await createLesson.validateTagExistOnEditorHavingTag(createLesson.parentQuotetag, createLesson.quoteCaptionTag) // Author
        await createLesson.enterTextInQuoteAndAuthorFields()
        // await createLesson.validatePlaceHoldersOnQuoteElement()// place holder value not showing up on console hene its not getting fetched.
        await createLesson.hoverOverAnyElement(createLesson.quoteTag)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });
    test('TC - validate adding new Code element inside the editor', async ({ createLesson }) => {
        await createLesson.createALesson(lessonName)
        await createLesson.setVisibility()
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.codeBlock)
        await createLesson.validateElementsExistOnEditor(createLesson.code)
        await createLesson.validateElementsToAcceptInputOnEditor(createLesson.code, CLtd.text.code)
        await createLesson.hoverOverAnyElement(createLesson.code)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });
    test('TC - validate adding new Table element inside the editor', async ({ createLesson }) => {
        await createLesson.createALesson(lessonName)
        await createLesson.setVisibility()
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.table)
        await createLesson.validateElementsExistOnEditor(createLesson.table)
        await createLesson.fillTableRowsAndColumns()
        await createLesson.hoverOverAnyElement(createLesson.table)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });
    test('TC - validate adding new Image element inside the editor', async ({ createLesson }) => {
        await createLesson.createALesson(lessonName)
        await createLesson.setVisibility()
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.uploadImage)
        await createLesson.uploadImage()

        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });
    test('TC - validate adding new Fill in Blank element inside the editor Ui validations', async ({ createLesson }) => {
        await createLesson.createALesson(lessonName)
        await createLesson.setVisibility()
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.fillInBlank)
        createLesson.validateAllFillInTheBlankFields()
    });
    test('TC - validate adding new Fill in Blank functionality', async ({ createLesson }) => {
        await createLesson.createALesson(lessonName)
        await createLesson.setVisibility()
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.fillInBlank)
        await createLesson.validateFillInTheBlankFunctionality()
    });
    test.only('TC - validate adding File upload element inside the editor', async ({ createLesson }) => {
        await createLesson.createALesson(lessonName)
        await createLesson.setVisibility()
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.fileUpload)
        await createLesson.validateFileUploadFunctionality()
    });
    test('TC - validate adding short answer element inside the editor', async ({ createLesson }) => {
        await createLesson.createALesson(lessonName)
        await createLesson.setVisibility()
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.shortAnswer)
        await createLesson.validateShortAnswerFunctionality()
    });
    test('TC - validate adding tip element inside the editor', async ({ createLesson, teamCoursesPage, browser }) => {
        const randomEmail = UserFunctions.generateRandomEmail(userEmail)
        await createLesson.createALesson(lessonName)
        await createLesson.setVisibility()
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.tip.tipElement)
        await createLesson.validateTipFunctionality()

        const link = await teamCoursesPage.PublishAndInviteCreateLesson()
        const newPage = await browser.newPage()
        const newTeamCoursesPageInstance = new TeamCoursesPage(newPage)
        const newCreateLessonPageInstance = new CreateLesson(newPage)
        await newTeamCoursesPageInstance.afterInviteSignUp(link,randomEmail,userPwd,TeamCoursesData.firstName,TeamCoursesData.LastName)

        await newCreateLessonPageInstance.verifyStudentViewForTipElement()
    });
    test('TC - validate adding Parsons Problem element inside the editor', async ({ createLesson, teamCoursesPage, browser }) => {
        const randomEmail = UserFunctions.generateRandomEmail(userEmail)
        await createLesson.createALesson(lessonName)
        await createLesson.setVisibility()
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.parsonProblem.element)
        await createLesson.validateParsonsFunctionality()

    });
    test('TC - validate adding Code Select element inside the editor', async ({ createLesson, teamCoursesPage, browser }) => {
        const randomEmail = UserFunctions.generateRandomEmail(userEmail)
        await createLesson.createALesson(lessonName)
        await createLesson.setVisibility()
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.codeSelect.element)
        await createLesson.validateCodeSelectFunctionality()

        const link = await teamCoursesPage.PublishAndInviteCreateLesson()
        const newPage = await browser.newPage()
        const newTeamCoursesPageInstance = new TeamCoursesPage(newPage)
        const newCreateLessonPageInstance = new CreateLesson(newPage)
        await newTeamCoursesPageInstance.afterInviteSignUp(link,randomEmail,userPwd,TeamCoursesData.firstName,TeamCoursesData.LastName)

        await newCreateLessonPageInstance.verifyStudentViewForCorrectCodeSelectElement()
    });

})