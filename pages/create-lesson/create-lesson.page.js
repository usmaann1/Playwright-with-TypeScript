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
        this.list = this.page.locator(Locators.lessonPage.textEditor.list)
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
        this.parentQuotetag = this.page.locator(Locators.lessonPage.textEditor.parentQuotetag)
        this.quoteTag = this.page.locator(Locators.lessonPage.textEditor.quoteTag)
        this.quoteCaptionTag = this.page.locator(Locators.lessonPage.textEditor.quoteCaptionTag)
        this.placeHolderTag = this.page.locator(Locators.lessonPage.textEditor.placeHolderTag)
        this.code = this.page.locator(Locators.lessonPage.textEditor.code)
        this.table = this.page.locator(Locators.lessonPage.textEditor.table)
        this.row = this.page.locator(Locators.lessonPage.textEditor.row)
        this.col = this.page.locator(Locators.lessonPage.textEditor.col)
        this.inputBox = this.page.locator(Locators.lessonPage.textEditor.inputBox)
        this.checkBox = this.page.locator(Locators.lessonPage.textEditor.checkBox)
        this.uploadImageContainer = this.page.locator(Locators.lessonPage.textEditor.uploadImageContainer)
        this.Image = this.page.locator(Locators.lessonPage.textEditor.uploadImage)


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
    async selectElementFromDropdown() {
        const subParent = this.subParent
        const btn = subParent.locator(this.child, { hasText: 'Heading 1' }).nth(0)
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
        const btn = subParent.getByRole('button', { name: val, exact: true })
        await this.page.waitForTimeout(1000);
        await PlaywrightCore.click(btn)
    }
    async validateElementsExistOnEditor(ele) {
        const parent = this.textEditor
        const child = parent.locator(ele)
        await this.page.waitForTimeout(2000);
        await expect(child).toBeVisible()
    }
    async validateElementsToAcceptInputOnEditor(ele, txt) {
        const parent = this.textEditor
        const child = parent.locator(ele)
        // const text = clTD.textForEditor
        await this.page.waitForTimeout(1000);
        await PlaywrightCore.fill(child, txt)
    }
    async validateAddingMultipleBulletOnEditor(ele) {
        const parent = this.textEditor
        const child = parent.locator(ele)
        const row = child.locator(this.list)
        const text = clTD.textForEditor
        await PlaywrightCore.fill(child, text)
        await PlaywrightCore.click(row)
        await PlaywrightCore.press(row, 'Enter')
        await this.page.waitForTimeout(2000);

        // const inputSelector = child.locator(this.list); // Replace with your actual selector
        // const position = 4; // 0-based index, so 4 means the 5th character

        // // Locate the input field and focus on it
        // await PlaywrightCore.click(inputSelector);

        // // Set the cursor position using evaluate, wrapping arguments in an object
        // await this.page.evaluate(({ selector, pos }) => {
        //     const input = document.querySelector(selector);
        //     if (input) {
        //         input.setSelectionRange(pos, pos);
        //     } else {
        //         throw new Error('Element not found or not interactable');
        //     }
        // }, { selector: inputSelector, pos: position });

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
    async validateTagExistOnEditorHavingTag(ele, tag) {
        const parent = this.textEditor
        const child = parent.locator(ele)
        await this.page.waitForTimeout(2000);
        await expect(child.locator(tag)).toBeVisible()
    }
    async validatePlaceHoldersOnQuoteElement() {
        const parent = this.textEditor
        const child = parent.locator(this.parentQuotetag)
        const quo = child.locator(this.quoteTag)
        const tag = quo.locator(this.quoteCaptionTag)
        const ph = tag.locator(this.placeHolderTag).textContent();
    }
    async valiadteYoutubeVideoHeading(name){
        const iframeElement = this.page.frameLocator(Locators.IFrameLocatorYoutube);         
        await expect(iframeElement.locator(Locators.YoutubeVideoHeading)).toHaveText(name)
        await this.page.waitForTimeout(2000);
        await expect(ph).toEqual(clTD.placeHolder.quote)
    }
    async enterTextInQuoteAndAuthorFields() {
        const parent = this.textEditor
        const child = parent.locator(this.parentQuotetag)
        const quote = child.locator(this.quoteTag)
        const author = child.locator(this.quoteCaptionTag)
        await PlaywrightCore.fill(quote, clTD.text.Quote)

        await PlaywrightCore.fill(author, clTD.text.Author)

    }
    async fillTableRowsAndColumns() {
        const parent = this.textEditor
        const table = parent.locator(this.table)
        const tRow = this.row
        const tCol = this.col
        await this.page.waitForTimeout(1000)
        // Get the count of rows and columns
        const rowCount = await table.locator(tRow).count()
        const colCount = await table.locator(tRow).first().locator(tCol).count()
        console.log(`Row count: ${rowCount}`)
        console.log(`Column count: ${colCount}`)
        for (let row = 0; row < rowCount; row++) {
            for (let col = 0; col < colCount; col++) {
                const targetCell = table.locator(tRow).nth(row).locator(tCol).nth(col)
                await targetCell.fill('row:'+ row + ' ' + 'col: ' + col  )
            }
        }
    }
    async valdiateCheckboxSelection(dataType,typeValue) {
        const parent = this.textEditor
        const child = parent.locator(this.taskList)
        const input = child.locator(this.inputBox)
        await this.page.waitForTimeout(2000);
        await expect(input).toHaveAttribute(dataType, typeValue)
        await PlaywrightCore.click(input)
        const verifyChecked = child.locator('li')
        await expect(verifyChecked).toHaveAttribute(clTD.attributes.datachecked, clTD.attributes.checkedTrue)
    }
    async uploadImage() {
        await this.Image.setInputFiles('./test-environment/test-assets/test-resource-files/corolla.jpg')
        await this.page.waitForTimeout(3000);
    }
}