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
        this.exitStudentView = this.page.locator(Locators.exitStudentView)
        this.textField = this.page.locator(Locators.textField)
        this.obtainedPoints = this.page.locator(Locators.lessonPage.mainPage.obtainedPoints)
        this.lineError = this.page.locator(Locators.lessonPage.mainPage.lineError)
        this.closeBtn = this.page.locator(Locators.lessonPage.mainPage.closeBtn)
        this.checkAnswerBtn = this.page.locator(Locators.lessonPage.mainPage.checkAnswerBtn)
        this.inputTag = this.page.locator(Locators.lessonPage.mainPage.input)
        this.PresentationMode = this.page.locator(Locators.lessonPage.mainPage.presnetationMode)
        this.gotItBtn = this.page.locator(Locators.lessonPage.mainPage.gotItBtn)
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
        this.container = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.container)
        this.setupBtn = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.setupBtn)
        this.OptionsBtn = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.Option)
        this.browseOptionInput = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.browseOptionInput)
        this.addBlankBtn = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.addBlankBtn)
        this.textInputField = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.textInputField)
        this.BlankType = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.BlankType)
        this.answer = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.answer)
        this.pointsInputField = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.pointsInputField)
        this.item1 = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.options.item1)
        this.checkBox1 = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.options.checkBox1)
        this.text1 = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.options.text1)
        this.item2 = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.options.item2)
        this.checkBox2 = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.options.checkBox2)
        this.text2 = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.options.text2)
        // File upload
        this.fileUpload = this.page.locator(Locators.lessonPage.textEditor.fileUpload.dragDrop)
        this.optTextEle = this.page.locator(Locators.lessonPage.textEditor.fileUpload.optionText)
        this.optTextCb = this.page.locator(Locators.lessonPage.textEditor.fileUpload.optionCheckBox)
        this.unSubmittedFileName = this.page.locator(Locators.lessonPage.textEditor.fileUpload.unSubmittedFileName)
        this.correctLabelIcon = this.page.locator(Locators.lessonPage.textEditor.fileUpload.correctLabelIcon)
        this.deleteIcon = this.page.locator(Locators.lessonPage.textEditor.fileUpload.deleteIcon)
        this.undoDeleteIcon = this.page.locator(Locators.lessonPage.textEditor.fileUpload.undoDeleteIcon)
        this.points = this.page.locator(Locators.lessonPage.textEditor.fileUpload.points)
        // short answer
        this.promptInput = this.page.locator(Locators.lessonPage.textEditor.shortAnswer.promptInput)
        this.answerTemplate = this.page.locator(Locators.lessonPage.textEditor.shortAnswer.answerTemplate)
        this.modelSolutionTab = this.page.locator(Locators.lessonPage.textEditor.shortAnswer.modelSolutionTab)
        this.modelSolutionInput = this.page.locator(Locators.lessonPage.textEditor.shortAnswer.modelSolutionInput)
        this.resetTotemplateBtn = this.page.locator(Locators.lessonPage.textEditor.shortAnswer.resetTotemplateBtn)
        this.optionTxt1 = this.page.locator(Locators.lessonPage.textEditor.shortAnswer.optionTxt1)
        this.optionTxt2 = this.page.locator(Locators.lessonPage.textEditor.shortAnswer.optionTxt2)
        this.optionCb1 = this.page.locator(Locators.lessonPage.textEditor.shortAnswer.optionCb1)
        this.optionCb2 = this.page.locator(Locators.lessonPage.textEditor.shortAnswer.optionCb2)
        this.PresentationInput = this.page.locator(Locators.lessonPage.textEditor.shortAnswer.PresentationInput)
        this.submitBtn = this.page.locator(Locators.lessonPage.textEditor.shortAnswer.submitBtn)
        this.submitSucces = this.page.locator(Locators.lessonPage.textEditor.shortAnswer.submitSucces)
        // Drag and drop
        this.section = this.page.locator(Locators.lessonPage.textEditor.dragDrop.section)
        this.optionList = this.page.locator(Locators.lessonPage.textEditor.dragDrop.optionList)
        this.optionContainer = this.page.locator(Locators.lessonPage.textEditor.dragDrop.optionContainer)
        this.option = this.page.locator(Locators.lessonPage.textEditor.dragDrop.option)
        this.threeDot = this.page.locator(Locators.lessonPage.textEditor.dragDrop.threeDot)
        this.deleteButton = this.page.locator(Locators.lessonPage.textEditor.dragDrop.deleteButton)
        //Tip element
        this.infoIcon = this.page.locator(Locators.lessonPage.textEditor.tip.infoIcon)
        this.tipEle = this.page.locator(Locators.lessonPage.textEditor.tip.tipEle)
        this.typeDropDown = this.page.locator(Locators.lessonPage.textEditor.tip.typeDropDown)


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
        this.PresentationModePopUpHeading = this.page.locator(Locators.PresentationModePopUpHeading)
        this.PresentationModePopUpDescription = this.page.locator(Locators.PresentationModePopUpDescription)
        this.GotItBtn = this.page.locator(Locators.GotItBtn)
        this.ViewingStudentModeTxt = this.page.locator(Locators.ViewingStudentModeTxt)
        this.ExitStudentModeBtn = this.page.locator(Locators.ExitStudentModeBtn)
        this.CheckAnswerBtn = this.page.locator(Locators.CheckAnswerBtn)
        this.OptionsCheckBox1 = this.page.locator(Locators.OptionsCheckBox1)
        this.OptionsCheckBox3 = this.page.locator(Locators.OptionsCheckBox3)
        this.OptionsCheckBox4 = this.page.locator(Locators.OptionsCheckBox4)
        this.OptionsCheckBox5 = this.page.locator(Locators.OptionsCheckBox5)
        this.IncorrectTxtBox = this.page.locator(Locators.IncorrectTxtBox)
        this.OnePlus1TxtPresentationMode = this.page.locator(Locators.OnePlus1TxtPresentationMode)
        this.OneTxtPresentationMode = this.page.locator(Locators.OneTxtPresentationMode)
        this.TwoTxtPresentationMode = this.page.locator(Locators.TwoTxtPresentationMode)
        this.ThreeTxtPresentationMode = this.page.locator(Locators.ThreeTxtPresentationMode)
        this.FourTxtPresentationMode = this.page.locator(Locators.FourTxtPresentationMode)
        this.PresentationModeOptionWrong = this.page.locator(Locators.PresentationModeOptionWrong)
        this.PresentationModeOpt1CheckBox = this.page.locator(Locators.PresentationModeOpt1CheckBox)
        this.IncorrectAndCorrectAnswerHeading = this.page.locator(Locators.IncorrectAndCorrectAnswerHeading)
        this.PointScoreMsg = this.page.locator(Locators.PointScoreMsg)
        this.CloseBtn = this.page.locator(Locators.CloseBtn)
        this.IncorrectMsg = this.page.locator(Locators.IncorrectMsg)
        this.CorrectMsg = this.page.locator(Locators.CorrectMsg)
        this.PresentationModeOpt2 = this.page.locator(Locators.PresentationModeOpt2)
        this.InviteStudentBtn = this.page.locator(Locators.InviteStudentBtn)
        this.CopyURLBtn = this.page.locator(Locators.CopyURLBtn)
        this.Opt2StudentMode = this.page.locator(Locators.Opt2StudentMode)
        this.HideRevealTextBox = this.page.locator(Locators.HideRevealTextBox)
        this.HideContentBtn = this.page.locator(Locators.HideContentBtn)
        this.RevealContentButton = this.page.locator(Locators.RevealContentButton)
        this.StudentModeHideContentText = this.page.locator(Locators.StudentModeHideContentText)
        this.SelectTableHeadingTxtBox = this.page.locator(Locators.SelectTableHeadingTxtBox)
        this.SelectSolutionHeading = this.page.locator(Locators.SelectSolutionHeading)
        this.SelectSolutionToggle = this.page.locator(Locators.SelectSolutionToggle)
        this.ShuffleTableHeading = this.page.locator(Locators.ShuffleTableHeading)
        this.ShuffleTableBtn = this.page.locator(Locators.ShuffleTableBtn)
        this.SelectTableRow1Box1 = this.page.locator(Locators.SelectTableRow1Box1)
        this.SelectTableRow1Box2 = this.page.locator(Locators.SelectTableRow1Box2)
        this.SelectTableRow1Box3 = this.page.locator(Locators.SelectTableRow1Box3)
        this.SelectTableRow2Box1 = this.page.locator(Locators.SelectTableRow2Box1)
        this.SelectTableRow2Box2 = this.page.locator(Locators.SelectTableRow2Box2)
        this.SelectTableRow2Box3 = this.page.locator(Locators.SelectTableRow2Box3)
        this.SelectTableRow3Box1 = this.page.locator(Locators.SelectTableRow3Box1)
        this.SelectTableRow3Box2 = this.page.locator(Locators.SelectTableRow3Box2)
        this.SelectTableRow3Box3 = this.page.locator(Locators.SelectTableRow3Box3)
        this.AddRowBtn = this.page.locator(Locators.AddRowBtn)
        this.AddColumnBtn = this.page.locator(Locators.AddColumnBtn)
        this.SelectTableDeleteNewRowAndColumn = this.page.locator(Locators.SelectTableDeleteNewRowAndColumn )
        this.SelectTableOpt1AllowLearner = this.page.locator(Locators.SelectTableOpt1AllowLearner)
        this.SelectTableOpt2LeanersCan = this.page.locator(Locators.SelectTableOpt2LeanersCan)
        this.SelectTableSelectBox1 = this.page.locator(Locators.SelectTableSelectBox1)
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
        await this.page.getByRole('button', { name: 'Delete' }).first().click()
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
    async valiadteYoutubeVideoHeading(name) {
        const iframeElement = this.page.frameLocator(Locators.IFrameLocatorYoutube);
        await expect(iframeElement.locator(Locators.YoutubeVideoHeading)).toHaveText(name)
        await this.page.waitForTimeout(2000);
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
                await targetCell.fill('row:' + row + ' ' + 'col: ' + col)
            }
        }
    }
    async valdiateCheckboxSelection(dataType, typeValue) {
        const parent = this.textEditor
        const child = parent.locator(this.taskList)
        const input = child.locator(this.inputBox)
        await this.page.waitForTimeout(2000);
        await expect(input).toHaveAttribute(dataType, typeValue)
        await PlaywrightCore.click(input)
        await this.page.waitForTimeout(2000);
        const verifyChecked = child.locator('li')
        await expect(verifyChecked).toHaveAttribute(clTD.attributes.datachecked, clTD.attributes.checkedTrue)
    }
    async uploadImage() {
        await this.Image.setInputFiles('./test-environment/test-assets/test-resource-files/corolla.jpg')
        await this.page.waitForTimeout(3000);
    }
    async validateAllFillInTheBlankFields() {
        const parent = this.textEditor.locator(this.container)
        var subParent = parent.locator(this.setupBtn)
        await expect(subParent).toBeVisible()
        subParent = parent.locator(this.OptionsBtn)
        await expect(subParent).toBeVisible()
        subParent = parent.locator(this.browseOptionInput)
        await expect(subParent).toBeVisible()
        subParent = parent.locator(this.addBlankBtn)
        await expect(subParent).toBeVisible()
        subParent = parent.locator(this.textInputField).first()
        await expect(subParent).toBeVisible()
        subParent = parent.locator(this.BlankType)
        await expect(subParent).toBeVisible()
        subParent = parent.locator(this.answer)
        await expect(subParent).toBeVisible()
        subParent = parent.locator(this.pointsInputField)
        await expect(subParent).toBeVisible()
        // option tab items
        subParent = parent.locator(this.OptionsBtn)
        PlaywrightCore.click(subParent)
        subParent = parent.locator(this.checkBox1)
        await expect(subParent).toBeVisible()
        subParent = parent.locator(this.text1)
        await expect(subParent).toBeVisible()
        subParent = parent.locator(this.checkBox2)
        PlaywrightCore.click(subParent)
        await expect(subParent).toBeVisible()
        subParent = parent.locator(this.text2)
        await expect(subParent).toBeVisible()
        subParent = parent.locator(this.checkBox2)
        PlaywrightCore.click(subParent)
    }
    async validateFillInTheBlankFunctionality() {
        const parent = this.textEditor.locator(this.container)
        var subParent = parent.locator(this.browseOptionInput)
        await PlaywrightCore.fill(subParent, '/')
        await this.selectElementFromDropdown(clTD.elements.heading1)
        await this.validateElementsToAcceptInputOnEditor(this.heading1, clTD.textForEditor)
        subParent = parent.locator(this.answer)
        await PlaywrightCore.fill(subParent, clTD.Answer)
        await PlaywrightCore.click(this.PresentationMode)
        await PlaywrightCore.click(this.gotItBtn)
        const verifyAnswer = parent.locator(this.inputTag)
        await PlaywrightCore.click(verifyAnswer)
        await PlaywrightCore.fill(verifyAnswer, clTD.wrongAnswer)
        await PlaywrightCore.click(this.checkAnswerBtn)
        await PlaywrightCore.click(this.closeBtn)
        await expect(this.lineError).toHaveText(clTD.validationError)
        await this.page.waitForTimeout(3000);
        await PlaywrightCore.fill(verifyAnswer, clTD.Answer)
        await this.page.waitForTimeout(3000);
        await PlaywrightCore.click(this.checkAnswerBtn)
        await PlaywrightCore.click(this.closeBtn)
        const toVerify = await parent.locator(this.obtainedPoints).nth(1).textContent()
        expect(toVerify).toContain('1')
    }
    async uploadFIle(ele, filePath) {
        await ele.setInputFiles(filePath)
    }
    async checkBackgroundColor(selector, expectedColor) {
        const backgroundColor = await selector.evaluate(el => getComputedStyle(el).backgroundColor);
        expect(backgroundColor).toBe(expectedColor);
    }
    async validateFileUploadFunctionality() {
        const parent = this.textEditor
        var ele = parent.locator(this.fileUpload)
        const tab = parent.locator(this.OptionsBtn)
        await PlaywrightCore.click(tab)
        const optText = parent.locator(this.optTextEle)
        await expect(optText).toHaveText(clTD.fileUpload.optionField)
        const optCb = parent.locator(this.optTextCb)
        await PlaywrightCore.click(optCb)
        await this.page.waitForTimeout(3000);
        await PlaywrightCore.click(optCb)
        const setupTab = parent.locator(this.setupBtn)
        await PlaywrightCore.click(setupTab)
        await PlaywrightCore.click(this.PresentationMode)
        await PlaywrightCore.click(this.gotItBtn)
        await this.uploadFIle(ele, './test-environment/test-assets/test-resource-files/corolla.jpg')
        await this.page.waitForTimeout(4000);
        expect(this.unSubmittedFileName).toBeVisible()
        await this.page.waitForTimeout(10000);
        const asnwerBtn = this.checkAnswerBtn
        await PlaywrightCore.click(asnwerBtn)
        await this.page.waitForTimeout(10000);
        await expect(this.correctLabelIcon).toBeVisible()
        await this.checkBackgroundColor(this.correctLabelIcon, clTD.fileUpload.correctOptionColorVal)
        const toVerify = await this.points.textContent()
        expect(toVerify).toContain('1')
    

    }
    async validateShortAnswerFunctionality() {
        const parent = this.textEditor
        const prompt = parent.locator(this.promptInput)
        await PlaywrightCore.fill(prompt, clTD.shortAnswer.promptTxt)
        var type = await parent.locator(this.answerTemplate).nth(2)
        await PlaywrightCore.fill(type, clTD.shortAnswer.answerTemplateTxt)
        await this.page.waitForTimeout(3000);
        const solTab = parent.locator(this.modelSolutionTab)
        await PlaywrightCore.click(solTab)
        await this.page.waitForTimeout(3000);
        type = parent.locator(this.modelSolutionInput).nth(1)
        await PlaywrightCore.fill(type, clTD.teamName)
        await this.page.waitForTimeout(3000);
        const clickReset = parent.locator(this.resetTotemplateBtn)
        await PlaywrightCore.click(clickReset)
        await this.page.waitForTimeout(3000);
        const val = await parent.locator(this.modelSolutionInput).first().locator('p').getByText('Raul')
        expect(val).toBeVisible()
        const tab = parent.locator(this.OptionsBtn)
        await PlaywrightCore.click(tab)
        const optText1 = this.optionTxt1
        await expect(optText1).toBeVisible()
        const optText2 = this.optionTxt2
        await expect(optText2).toBeVisible()
        const optCb1 = this.optionCb1
        await expect(optCb1).toBeVisible()
        await PlaywrightCore.click(optCb1)
        const optCb2 = this.optionCb2
        await expect(optCb2).toBeVisible()
        await PlaywrightCore.click(optCb2)
        await PlaywrightCore.click(this.PresentationMode)
        await PlaywrightCore.click(this.gotItBtn)
        await this.page.waitForTimeout(3000);
        const txt = this.PresentationInput.nth(2).locator('p')
        await PlaywrightCore.fill(txt,'randomtext')
        await this.page.waitForTimeout(3000);
        await PlaywrightCore.click(this.resetTotemplateBtn)
        const resetTxt = this.PresentationInput.nth(2).locator('p').getByText('Raul')
        await expect(resetTxt).toBeVisible()
        await expect(this.submitBtn).toBeVisible()
        await PlaywrightCore.click(this.submitBtn)
        await this.checkBackgroundColor(this.submitSucces, clTD.shortAnswer.successLabelColor)
    }
    async validateDragAndDropFunctionality() {
        const parent = this.textEditor
        const dSection = parent.locator(this.section).first()
        const option1 = dSection.locator(this.optionContainer).nth(0)
        await PlaywrightCore.click(option1)
    }
    async validateTipFunctionality() {
        const parent = this.textEditor
        const outerTip = parent.locator(this.textField).first()
        const innerTip = parent.locator(this.textField).last()
        await expect(outerTip).toBeVisible()
        await expect(this.tipEle).toBeVisible()
        await expect(this.infoIcon).toBeVisible()
        await PlaywrightCore.fill(innerTip,clTD.teamName)
        const test = parent.locator(this.tipEle)
        await this.checkBackgroundColor(test,clTD.tip.backgroundYellow)
        await PlaywrightCore.click(this.typeDropDown,{ force: true })

        await PlaywrightCore.click(this.PresentationMode)
        await PlaywrightCore.click(this.gotItBtn)
        await this.checkBackgroundColor(test,clTD.tip.backgroundYellow)
        await PlaywrightCore.click(this.exitStudentView)

        const subParent = this.typeDropDown
        await subParent.selectOption([clTD.tip.optionTip])
        await this.page.waitForTimeout(1000);
        await this.checkBackgroundColor(test,clTD.tip.backgroundBlue)

        await PlaywrightCore.click(this.PresentationMode)
        await PlaywrightCore.click(this.gotItBtn)
        await this.checkBackgroundColor(test,clTD.tip.backgroundBlue)
        await PlaywrightCore.click(this.exitStudentView)

        await subParent.selectOption([clTD.tip.optionWarning])
        await this.page.waitForTimeout(1000);
        await this.checkBackgroundColor(test,clTD.tip.backgroundPink)

        await PlaywrightCore.click(this.PresentationMode)
        await PlaywrightCore.click(this.gotItBtn)
        await this.checkBackgroundColor(test,clTD.tip.backgroundPink)
        await PlaywrightCore.click(this.exitStudentView)
    }
    async verifyStudentViewForTipElement() {
        const parent = this.textEditor
        const test = parent.locator(this.tipEle)
        await this.checkBackgroundColor(test,clTD.tip.backgroundPink)
    }
}
