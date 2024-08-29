const { PlaywrightCore } = require('../../module-imports/helperFunctions.imports')

import { expect } from '@playwright/test';
import Locators from './create-lesson.locator.json'
import clTD from '../../test-environment/test-assets/test-data-files/create-lesson/create-lesson-testData.json'

exports.CreateLesson = class CreateLesson {

    constructor(page) {
        this.intializePage(page)
    }

    intializePage(page) {
        this.page = page;
        this.addNewItem = this.page.locator(Locators.addNewItem)
        this.itemContainer = this.page.locator(Locators.itemContainer)
        this.addItemLesson = this.page.locator(Locators.addItemLesson)
        this.lessonNameTxtBox = this.page.locator(Locators.createLessonUI.lessonNameTxtBox)
        this.backButton = this.page.locator(Locators.createLessonUI.backButton)
        this.title = this.page.locator(Locators.createLessonUI.title)
        this.createBtn = this.page.locator(Locators.createLessonUI.createBtn)
        this.lessonTitle = this.page.locator(Locators.lessonPage.lessonTitle)
        this.backToTeamButton = this.page.locator(Locators.lessonPage.sideMenu.backToTeamBtn)
        this.viewStudentsBtn = this.page.locator(Locators.lessonPage.sideMenu.viewStudentsBtn)
        this.studentGradesBtn = this.page.locator(Locators.lessonPage.sideMenu.studentGradesBtn)
        this.PublishMultiple = this.page.locator(Locators.lessonPage.sideMenu.PublishMultiple)
        this.deleteMultiple = this.page.locator(Locators.lessonPage.sideMenu.deleteMultiple)
        this.SideMenuLessonName = this.page.locator(Locators.lessonPage.sideMenu.SideMenuLessonName)
        this.AddNewItem = this.page.locator(Locators.lessonPage.sideMenu.AddNewItem)
        this.ShareItems = this.page.locator(Locators.lessonPage.sideMenu.ShareItems)
        this.addLessonPlan = this.page.locator(Locators.lessonPage.mainPage.addLessonPlan)
        this.presnetationMode = this.page.locator(Locators.lessonPage.mainPage.presnetationMode)
        this.PublishToggle = this.page.locator(Locators.lessonPage.mainPage.PublishToggle)
        this.textEditor = this.page.locator(Locators.lessonPage.mainPage.textEditor)
        this.plusIcon = this.page.locator(Locators.lessonPage.textEditor.plusIcon)
        this.menuIcon = this.page.locator(Locators.lessonPage.textEditor.menuIcon)
        this.firstRow = this.page.locator(Locators.lessonPage.textEditor.emptyEditorLine)
        this.hideRightSideMenuBtn = this.page.locator(Locators.lessonPage.sideMenu.hideRightSideMenuBtn)
        this.rightSIdeMenu = this.page.locator(Locators.lessonPage.sideMenu.rightSIdeMenu)
        this.stdntGradesBtn = this.rightSIdeMenu.locator(Locators.lessonPage.sideMenu.studentGradesBtn)
        this.InviteStudents = this.page.locator(Locators.lessonPage.sideMenu.InviteStudents)
        this.bouncingMsg = this.page.locator(Locators.lessonPage.sideMenu.bouncingMsg)
        this.bouncingMsgCloseBtn = this.page.locator(Locators.lessonPage.sideMenu.bouncingMsgCloseBtn)
        this.userListTitle = this.page.locator(Locators.lessonPage.sideMenu.userListTitle)
        this.userEmail = this.page.locator(Locators.lessonPage.sideMenu.userEmail)
        this.userType = this.page.locator(Locators.lessonPage.sideMenu.userType)
        this.dropDownContainer = this.page.locator(Locators.lessonPage.textEditor.dropDownContainer)
        this.optionDropdownContainer = this.page.locator(Locators.lessonPage.textEditor.optionDropdownContainer)
        this.subParent = this.page.locator(Locators.lessonPage.textEditor.subParent)
        this.child = this.page.locator(Locators.lessonPage.textEditor.child)
        this.buttonTag = this.page.locator(Locators.lessonPage.textEditor.button)
        this.heading1 = this.page.locator(Locators.lessonPage.textEditor.heading1)
        this.heading2 = this.page.locator(Locators.lessonPage.textEditor.heading2)
        this.heading3 = this.page.locator(Locators.lessonPage.textEditor.heading3)
        this.bulletList = this.page.locator(Locators.lessonPage.textEditor.bulletList)
        this.NumberedList = this.page.locator(Locators.lessonPage.textEditor.NumberedList)
        this.unOrdered = this.page.locator(Locators.lessonPage.textEditor.unOrdered)
        this.taskList = this.page.locator(Locators.lessonPage.textEditor.taskList)
        this.dataType = this.page.locator(Locators.lessonPage.textEditor.dataType)
        this.value = this.page.locator(Locators.lessonPage.textEditor.value)
        this.EmbedEnterURL = this.page.locator(Locators.EmbedEnterURL) 
        this.EmbedInsertURLHeading = this.page.locator(Locators.EmbedInsertURLHeading) 
        this.EmbedSubmitBtn = this.page.locator(Locators.EmbedSubmitBtn) 
        this.YoutubePlayBtn = this.page.locator(Locators.YoutubePlayBtn) 
        this.WatchOnYoutubeBtn = this.page.locator(Locators.WatchOnYoutubeBtn) 
        this.SetupBtn = this.page.locator(Locators.SetupBtn)
        this.OptionsBtn = this.page.locator(Locators.OptionsBtn)
        this.CurrentEmbedURLHeading = this.page.locator(Locators.CurrentEmbedURLHeading)
        this.ReplaceHeading = this.page.locator(Locators.ReplaceHeading)
        this.ReplaceEmbedTxtBox = this.page.locator(Locators.ReplaceEmbedTxtBox)
        this.SaveBtn = this.page.locator(Locators.SaveBtn)
        this.YoutubeVideoHeading = this.page.locator(Locators.YoutubeVideoHeading)
        this.ChooseFileBox = this.page.locator(Locators.ChooseFileBox)
        this.JuiceMindZipAfterUploaded = this.page.locator(Locators.JuiceMindZipAfterUploaded)
        this.DeleteBtnAfterUpload = this.page.locator(Locators.DeleteBtnAfterUpload)
        this.HTMLNode = this.page.locator(Locators.HTMLNode)
        this.HTMLTextBox = this.page.locator(Locators.HTMLTextBox)
        this.MultipleChoiceQuestionHeadingBox = this.page.locator(Locators.MultipleChoiceQuestionHeadingBox)
        this.MultipleChoiceFormBox1 = this.page.locator(Locators.MultipleChoiceFormBox1)
        this.MultipleChoiceFormBox2 = this.page.locator(Locators.MultipleChoiceFormBox2)
        this.MultipleChoiceFormBox3 = this.page.locator(Locators.MultipleChoiceFormBox3)
        this.MultipleChoiceFormBox4DeleteBtn = this.page.locator(Locators.MultipleChoiceFormBox4DeleteBtn)
        this.MultipleChoiceAddChoiceBtn = this.page.locator(Locators.MultipleChoiceAddChoiceBtn)
        this.MultipleChoiceFormBox4 = this.page.locator(Locators.MultipleChoiceFormBox4)
        this.MultipleChoicePointsInput = this.page.locator(Locators.MultipleChoicePointsInput)
        this.PointsTxt = this.page.locator(Locators.PointsTxt)
        this.PublishToggleBtn = this.page.locator(Locators.PublishToggleBtn)
        this.MultipleChoiceOptionsRule1 = this.page.locator(Locators.MultipleChoiceOptionsRule1)
        this.MultipleChoiceOptionsRule2 = this.page.locator(Locators.MultipleChoiceOptionsRule2)
        this.MultipleChoiceOptionsRule3 = this.page.locator(Locators.MultipleChoiceOptionsRule3)
        this.MultipleChoiceOptionsRule4 = this.page.locator(Locators.MultipleChoiceOptionsRule4)
        this.MultipleChoiceOptionsRule5 = this.page.locator(Locators.MultipleChoiceOptionsRule5)
        this.MultipleChoiceSelectBox2 = this.page.locator(Locators.MultipleChoiceSelectBox2)
    }
   
    async clickOnAddNewItem() {
        const item = this.addNewItem
        await this.page.waitForTimeout(3000);
        await PlaywrightCore.waitFor(item)
        await PlaywrightCore.click(item)
    }
    async selectLessonItemType() {
        const container = this.itemContainer
        const item = container.locator(this.addItemLesson)
        await PlaywrightCore.click(item)
        await this.page.waitForTimeout(3000);
    }
    async createALesson(lessonName) {
        await PlaywrightCore.fill(this.lessonNameTxtBox, lessonName)
        await PlaywrightCore.click(this.createBtn)
        await this.page.waitForTimeout(3000);
    }
    async setVisibility() {
        await this.page.addStyleTag({
            content: `
                .tippy-content {
                    data-state=visible
                }
            `,
        });
    }
    async hoverOverFirstRow() {
        const ele = this.firstRow
        await ele.hover()
    }
    async hoverOverAnyElement(val) {
        const edit = this.textEditor
        const ele = edit.locator(val)
        await ele.hover()
    }
    async selectElementFromDropdown(val) {
        const subParent = this.subParent
        const btn = subParent.locator(this.child, { hasText: 'Heading 1' })
        await this.page.waitForTimeout(3000);
        await PlaywrightCore.click(btn)
    }
    async enterTextOnEditor(text) {
        await PlaywrightCore.fill(this.firstRow, 'teamName')
    }
    async hoverAndClickOnPlusBtn() {
        const ele = this.plusIcon
        await ele.hover()
        await PlaywrightCore.click(this.plusIcon)
        await this.page.waitForTimeout(1000);
    }
    async DeleteElementFromEditor(val) {
        const ele = this.menuIcon
        await ele.hover()
        await PlaywrightCore.click(this.menuIcon)
        await this.page.waitForTimeout(1000);
        const subParent = this.optionDropdownContainer
        const btn = subParent.locator(this.child, { hasText: val }).first()
        await this.page.waitForTimeout(1000);
        await PlaywrightCore.click(btn)
        await this.page.getByRole('button', { name: 'Delete' }).click()
    }
    async selectElementFromDropdown(val) {
        const subParent = this.subParent
        const btn = subParent.locator(this.child, { hasText: val })
        await this.page.waitForTimeout(1000);
        await PlaywrightCore.click(btn)
    }
    async validateElementsExistOnEditor(ele) {
        const parent = this.textEditor
        const child = parent.locator(ele)
        await this.page.waitForTimeout(2000);
        await expect(child).toBeVisible()
    }
    async validateElementsToAcceptInputOnEditor(ele) {
        const parent = this.textEditor
        const child = parent.locator(ele)
        const text = clTD.textForEditor
        await PlaywrightCore.fill(child, text)
    }
    async validateRemovingOfElementEditor(ele) {
        const parent = this.textEditor
        const child = parent.locator(ele)
        await PlaywrightCore.click(child)
        await child.press('Backspace')
        await child.press('Backspace')
        await child.press('Backspace')
        await this.page.waitForTimeout(1000);
        await expect(child).toHaveValue('');
    }
    async validateElementExistOnEditorHavingAttribute(ele, dataType, typeValue) {
        const parent = this.textEditor
        const child = parent.locator(ele)
        await this.page.waitForTimeout(2000);
        await expect(child).toHaveAttribute(dataType, typeValue)
    }

    async valiadteYoutubeVideoHeading(name){
        const iframeElement = this.page.frameLocator(Locators.IFrameLocatorYoutube);         
        await expect(iframeElement.locator(Locators.YoutubeVideoHeading)).toHaveText(name)
    }
}