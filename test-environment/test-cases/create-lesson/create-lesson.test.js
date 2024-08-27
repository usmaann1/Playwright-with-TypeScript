const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import CLtd from '../../test-assets/test-data-files/create-lesson/create-lesson-testData.json'
import CTtd from '../../test-assets/test-data-files/create-teams/create-teams-testData.json'
require('dotenv').config()

test.describe('TestSuite: Create Lesson', () => {
    const randomNumber = UserFunctions.generateRandomString(5)
    const userEmail = process.env.EMAIL_HASSAAN
    const userPwd = process.env.PASSWORD_HASSAAN
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
        await expect(createLesson.viewStudentsBtn).toBeVisible()
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
        await createLesson.validateElementsToAcceptInputOnEditor(createLesson.heading1)
        await createLesson.hoverOverAnyElement(createLesson.heading1)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
        // Heading 2
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.heading2)
        await createLesson.validateElementsExistOnEditor(createLesson.heading2)
        await createLesson.validateElementsToAcceptInputOnEditor(createLesson.heading2)
        await createLesson.hoverOverAnyElement(createLesson.heading2)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
        // Heading 3
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.heading3)
        await createLesson.validateElementsExistOnEditor(createLesson.heading3)
        await createLesson.validateElementsToAcceptInputOnEditor(createLesson.heading3)
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
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
        await createLesson.selectElementFromDropdown(CLtd.elements.bulletList)
        await createLesson.validateElementsExistOnEditor(createLesson.bulletList)
        await createLesson.validateElementsToAcceptInputOnEditor(createLesson.bulletList)
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
        await createLesson.validateElementsToAcceptInputOnEditor(createLesson.NumberedList)
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
        await createLesson.validateElementExistOnEditorHavingAttribute(createLesson.taskList,CLtd.attributes.dataType,CLtd.attributes.value)
        await createLesson.validateElementsToAcceptInputOnEditor(createLesson.taskList)
        await createLesson.hoverOverAnyElement(createLesson.taskList)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });
})