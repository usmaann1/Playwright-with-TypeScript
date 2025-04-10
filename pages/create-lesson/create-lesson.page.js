const { PlaywrightCore } = require('../../module-imports/helperFunctions.imports')
import { expect } from '@playwright/test';
import Locators from './create-lesson.locator.json';
import clTD from '../../test-environment/test-assets/test-data-files/create-lesson/create-lesson-testData.json';
import CLHRtd from '../../test-environment/test-assets/test-data-files/create-lesson/create-lesson-hide-reveal-testData.json'

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
        this.itemContainer = this.page.locator(Locators.itemContainer)
        this.addItemLesson = this.page.locator(Locators.addItemLesson)
        this.lessonNameTxtBox = this.page.locator(Locators.createLessonUI.lessonNameTxtBox)
        this.backButton = this.page.locator(Locators.createLessonUI.backButton)
        this.title = this.page.locator(Locators.createLessonUI.title)
        this.createBtn = this.page.locator(Locators.createLessonUI.createBtn)
        this.lessonTitle = this.page.locator(Locators.lessonPage.lessonTitle)
        this.backToTeamButton = this.page.locator(Locators.lessonPage.sideMenu.backToTeamBtn)
        this.viewStudentsBtn = this.page.locator(Locators.lessonPage.sideMenu.viewStudentsBtn)
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
        this.rightSIdeMenu = this.page.locator(Locators.lessonPage.sideMenu.rightSIdeMenu).last()
        this.studentGradesBtn = this.rightSIdeMenu.locator(Locators.lessonPage.sideMenu.studentGradesBtn)
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
        this.tasklistElement = this.page.locator(Locators.lessonPage.textEditor.tasklistElement)
        this.unOrdered = this.page.locator(Locators.lessonPage.textEditor.unOrdered)
        this.list = this.page.locator(Locators.lessonPage.textEditor.list)
        this.taskList = this.page.locator(Locators.lessonPage.textEditor.taskList)
        this.dataType = this.page.locator(Locators.lessonPage.textEditor.dataType)
        this.value = this.page.locator(Locators.lessonPage.textEditor.value)
        this.EmbedEnterURL = this.page.locator(Locators.EmbedEnterURL)
        this.EmbedInsertURLHeading = this.page.locator(Locators.EmbedInsertURLHeading)
        this.EmbedSubmitBtn = this.page.locator(Locators.EmbedSubmitBtn)
        this.YoutubePlayBtn = this.page.locator(Locators.YoutubePlayBtn)
        this.PresentationYoutubePlayBtn = this.page.locator(Locators.PresentationYoutubePlayBtn)
        this.WatchOnYoutubeBtn = this.page.locator(Locators.WatchOnYoutubeBtn)
        this.PresentationWatchOnYoutubeBtn = this.page.locator(Locators.PresentationWatchOnYoutubeBtn)

        this.DailyMotionHeading = this.page.locator(Locators.DailyMotionHeading)

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
        this.itemList = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.options.itemList)
        this.checkBox1 = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.options.checkBox1)
        this.text1 = this.page.locator(Locators.lessonPage.textEditor.fillInBlankContainer.options.text1)
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
        // Parsons Problem Element
        this.parsonEle = this.page.locator(Locators.lessonPage.textEditor.parson.parsonEle)
        this.techDropDown = this.page.locator(Locators.lessonPage.textEditor.parson.techDropDown)
        this.distractorRow = this.page.locator(Locators.lessonPage.textEditor.parson.distractorRow)
        this.distractorTextBox = this.page.locator(Locators.lessonPage.textEditor.parson.distractorTextBox)
        this.activeTexBox = this.page.locator(Locators.lessonPage.textEditor.parson.activeTexBox)
        this.Section = this.page.locator(Locators.lessonPage.textEditor.parson.Section)
        this.line = this.page.locator(Locators.lessonPage.textEditor.parson.line)
        this.optionsColumn = this.page.locator(Locators.lessonPage.textEditor.parson.optionsColumn)
        this.option1 = this.page.locator(Locators.lessonPage.textEditor.parson.option1)
        this.option2 = this.page.locator(Locators.lessonPage.textEditor.parson.option2)
        this.answerColumn = this.page.locator(Locators.lessonPage.textEditor.parson.answerColumn)
        // code select element
        this.codeEle = this.page.locator(Locators.lessonPage.textEditor.codeSelect.codeEle)
        this.languageDropDown = this.page.locator(Locators.lessonPage.textEditor.codeSelect.languageDropDown)
        this.selectableTab = this.page.locator(Locators.lessonPage.textEditor.codeSelect.selectableTab)
        this.correctTab = this.page.locator(Locators.lessonPage.textEditor.codeSelect.correctTab)
        this.clearTab = this.page.locator(Locators.lessonPage.textEditor.codeSelect.clearTab)
        this.codeEditor = this.page.locator(Locators.lessonPage.textEditor.codeSelect.codeEditor)
     
      

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
        this.H1HeadingLocator = this.page.locator(Locators.H1HeadingLocator)
        this.H2HeadingLocator = this.page.locator(Locators.H2HeadingLocator)
        this.H3HeadingLocator = this.page.locator(Locators.H3HeadingLocator)
        this.H4HeadingLocator = this.page.locator(Locators.H4HeadingLocator)
        this.ParagraphOneLocator = this.page.locator(Locators.ParagraphOneLocator)
        this.ParagraphTwoLocator = this.page.locator(Locators.ParagraphTwoLocator)
        this.ParagraphThreeLocator = this.page.locator(Locators.ParagraphThreeLocator)
        this.LinksLocator = this.page.locator(Locators.LinksLocator)
        this.ModifiedParagraphOne = this.page.locator(Locators.ModifiedParagraphOne)
        this.ModifiedParagraphTwo = this.page.locator(Locators.ModifiedParagraphTwo)
        this.ModifiedParagraphThree = this.page.locator(Locators.ModifiedParagraphThree)
        this.JPGFileAfterUploaded = this.page.locator(Locators.JPGFileAfterUploaded)
        this.FileTestCSVAfterUploaded = this.page.locator(Locators.FileTestCSVAfterUploaded)
        this.FileTestPNGAfterUploaded = this.page.locator(Locators.FileTestPNGAfterUploaded)
        this.HelperJSAfterUploaded = this.page.locator(Locators.HelperJSAfterUploaded)
        this.IndexHTMLAfterUploaded = this.page.locator(Locators.IndexHTMLAfterUploaded)
        this.MainJAVAAfterUploaded = this.page.locator(Locators.MainJAVAAfterUploaded)
        this.MainPYAfterUploaded = this.page.locator(Locators.MainPYAfterUploaded)
        this.MainCPPAfterUploaded = this.page.locator(Locators.MainCPPAfterUploaded)
        this.MainCSAfterUploaded = this.page.locator(Locators.MainCSAfterUploaded)
        this.TestDOCXAfterUploaded = this.page.locator(Locators.TestDOCXAfterUploaded)
        this.TestPDFAfterUploaded = this.page.locator(Locators.TestPDFAfterUploaded)
        this.AddChoiceBtn = this.page.locator(Locators.AddChoiceBtn)
        this.MCQQuestion = this.page.locator(Locators.MCQQuestion)
        this.MCQOption1 = this.page.locator(Locators.MCQOption1)
        this.MCQOption2 = this.page.locator(Locators.MCQOption2)
        this.MCQOption3 = this.page.locator(Locators.MCQOption3)
        this.MCQOption4 = this.page.locator(Locators.MCQOption4)
        this.MCQTotalPoints = this.page.locator(Locators.MCQTotalPoints)
        this.MCQCorrectOption = this.page.locator(Locators.MCQCorrectOption)
        this.MCQWrongOption = this.page.locator(Locators.MCQWrongOption)
        this.CheckAnswerButton = this.page.locator(Locators.CheckAnswerButton)
        this.PresentationModeCorrectAnswerPopup = this.page.locator(Locators.PresentationModeCorrectAnswerPopup)
        this.PresentationModeCorrectAnswerPopupClose = this.page.locator(Locators.PresentationModeCorrectAnswerPopupClose)
        this.AddBlankBtn = this.page.locator(Locators.AddBlankBtn)
        this.FillInBlankTitle = this.page.locator(Locators.FillInBlankTitle)
        this.FillInBlankQues = this.page.locator(Locators.FillInBlankQues)
        this.FillInBlankAnswer1 = this.page.locator(Locators.FillInBlankAnswer1)
        this.FillInBlankTotalPoints = this.page.locator(Locators.FillInBlankTotalPoints)
        this.PresentationModeFillInBlank = this.page.locator(Locators.PresentationModeFillInBlank)
        this.ModelSolutionBtn = this.page.locator(Locators.ModelSolutionBtn)
        this.ShortAnswerPromptField = this.page.locator(Locators.ShortAnswerPromptField)
        this.ShortAnswerTemplateField = this.page.locator(Locators.ShortAnswerTemplateField)
        this.ShortAnswerField = this.page.locator(Locators.ShortAnswerField)
        this.ShortAnswerTotalPoints = this.page.locator(Locators.ShortAnswerTotalPoints)
        this.PresentationModeAnswerField = this.page.locator(Locators.PresentationModeAnswerField)
        this.InitializeJuiceMindIDEBtn = this.page.locator(Locators.InitializeJuiceMindIDEBtn)
        this.ProjectNameField = this.page.locator(Locators.ProjectNameField)
        this.ProjectTypeField = this.page.locator(Locators.ProjectTypeField)
        this.CreateProjectSubmitBtn = this.page.locator(Locators.CreateProjectSubmitBtn)
        this.ProjectTypePythonValue = this.page.locator(Locators.ProjectTypePythonValue)
        this.IDEFirstLine = this.page.locator(Locators.IDEFirstLine)
        this.CodeRunBtn = this.page.locator(Locators.CodeRunBtn)
        this.CodeOutputFirstLine = this.page.locator(Locators.CodeOutputFirstLine)
        this.IDETestsBtn = this.page.locator(Locators.IDETestsBtn)
        this.IDETestsAddTestBtn = this.page.locator(Locators.IDETestsAddTestBtn)
        this.CreateTestTestTypeField = this.page.locator(Locators.CreateTestTestTypeField)
        this.CreateTestUnitTestType = this.page.locator(Locators.CreateTestUnitTestType)
        this.CreateTestTestNameField = this.page.locator(Locators.CreateTestTestNameField)
        this.CreateTestAddInnerTestBtn = this.page.locator(Locators.CreateTestAddInnerTestBtn)
        this.CreateTestTestNameField2 = this.page.locator(Locators.CreateTestTestNameField2)
        this.CreateTestCodeTextbox = this.page.locator(Locators.CreateTestCodeTextbox)
        this.CreateTestAddTestBtn = this.page.locator(Locators.CreateTestAddTestBtn)
        this.CreateTestAddTestBtn2 = this.page.locator(Locators.CreateTestAddTestBtn2)
        this.IDETemplateBtn = this.page.locator(Locators.IDETemplateBtn)
        this.CreateStarterCodeBtn = this.page.locator(Locators.CreateStarterCodeBtn)
        this.CorrectAnswerText = this.page.locator(Locators.CorrectAnswerText)
        this.IDETestObtainedMarks = this.page.locator(Locators.IDETestObtainedMarks)
        this.ShortAnswerTestObtainedMarks = this.page.locator(Locators.ShortAnswerTestObtainedMarks)
        this.FillInBlanksTestObtainedMarks = this.page.locator(Locators.FillInBlanksTestObtainedMarks)
        this.MCQTestObtainedMarks = this.page.locator(Locators.MCQTestObtainedMarks)
        this.CreateTestInputOutputTestType = this.page.locator(Locators.CreateTestInputOutputTestType)
        this.CreateTestInputField = this.page.locator(Locators.CreateTestInputField)
        this.CreateTestOutputField = this.page.locator(Locators.CreateTestOutputField)
        this.InputOutputTestObtainedMarks = this.page.locator(Locators.InputOutputTestObtainedMarks)
        this.StudentViewLessonName = this.page.locator(Locators.StudentViewLessonName)
        this.SubmitBtn = this.page.locator(Locators.SubmitBtn)
    }

    async clickOnAddNewItem() {
        const item = this.AddNewItem
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
        const row = this.list
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

    async valiadteDailyMotionVideoHeading(name) {
        const iframeElement = this.page.frameLocator(Locators.IFrameLocatorYoutube);
        await expect(iframeElement.locator(Locators.DailyMotionHeading)).toHaveText(name)
        await this.page.waitForTimeout(2000);
    }

    async valiadteBitChuteVideoHeading(name) {
        const iframeElement = this.page.frameLocator(Locators.IFrameLocatorYoutube);
        await expect(iframeElement.locator(Locators.BitChuteVideoHeading)).toHaveText(name)
        await this.page.waitForTimeout(2000);
    }

    async valiadteVeohVideoHeading(name) {
        const iframeElement = this.page.frameLocator(Locators.IFrameLocatorYoutube);
        await expect(iframeElement.locator(Locators.VeohVideoHeading)).toHaveText(name)
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
    async valdiateClickingCheckbox(dataType, typeValue) {
        const parent = this.textEditor
        const child = parent.locator(this.taskList)
        const input = child.locator(this.inputBox)
        await this.page.waitForTimeout(2000);
        await expect(input).toHaveAttribute(dataType, typeValue)
        await PlaywrightCore.click(input)
        await this.page.waitForTimeout(2000);
    }
    async validateCheckBoxCheckedState() {
        const parent = this.textEditor
        const child = parent.locator(this.taskList)
        const verifyChecked = child.locator('li')
        await expect(verifyChecked).toHaveAttribute(clTD.attributes.datachecked, clTD.attributes.checkedTrue)
    }
    async validateCheckBoxUnCheckedState() {
        const parent = this.textEditor
        const child = parent.locator(this.taskList)
        const verifyChecked = child.locator('li')
        await expect(verifyChecked).toHaveAttribute(clTD.attributes.datachecked, clTD.attributes.checkedFalse)
    }
    async uploadImage() {
        await this.Image.setInputFiles('./test-environment/test-assets/test-resource-files/corolla.jpg')
        await this.page.waitForTimeout(10000);
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
    async validateFillInTheBlankFunctionalityWithCorrectAnswer() {
        const parent = this.textEditor.locator(this.container)
        var subParent = parent.locator(this.browseOptionInput)
        await PlaywrightCore.fill(subParent, '/')
        await this.selectElementFromDropdown(clTD.elements.heading1)
        await this.validateElementsToAcceptInputOnEditor(this.heading1, clTD.textForEditor)
        subParent = parent.locator(this.answer)
        await PlaywrightCore.fill(subParent, clTD.Answer)
        await this.page.waitForTimeout(5000);
        await PlaywrightCore.click(this.PresentationMode)
        await PlaywrightCore.click(this.gotItBtn)
        const verifyAnswer = parent.locator(this.inputTag)
        await PlaywrightCore.click(verifyAnswer)

        await PlaywrightCore.fill(verifyAnswer, clTD.Answer)
        await this.page.waitForTimeout(3000);
        await PlaywrightCore.click(this.checkAnswerBtn)
        await PlaywrightCore.click(this.closeBtn)
        await this.page.waitForTimeout(10000);
        const toVerify = await parent.locator(this.obtainedPoints).nth(1).textContent()
        expect(toVerify).toContain('1')
        // await PlaywrightCore.click(this.closeBtn)
    }
    async verifyCorrectAnswerOnPublishing() {
        const parent = this.textEditor.locator(this.container)
        const verifyAnswer = parent.locator(this.inputTag)
        await PlaywrightCore.fill(verifyAnswer, clTD.Answer)
        await this.page.waitForTimeout(3000);
        await PlaywrightCore.click(this.checkAnswerBtn)
        await PlaywrightCore.click(this.closeBtn)
        await this.page.waitForTimeout(10000);
        const toVerify = await parent.locator(this.obtainedPoints).nth(1).textContent()
        expect(toVerify).toContain('1')
    }
    async validateFillInTheBlankFunctionalityWithInCorrectAnswer() {
        const parent = this.textEditor.locator(this.container)
        var subParent = parent.locator(this.browseOptionInput)
        await PlaywrightCore.fill(subParent, '/')
        await this.selectElementFromDropdown(clTD.elements.heading1)
        await this.validateElementsToAcceptInputOnEditor(this.heading1, clTD.textForEditor)
        subParent = parent.locator(this.answer)
        await PlaywrightCore.fill(subParent, clTD.Answer)
        await this.page.waitForTimeout(5000);
        await PlaywrightCore.click(this.PresentationMode)
        await PlaywrightCore.click(this.gotItBtn)
        const verifyAnswer = parent.locator(this.inputTag)
        await PlaywrightCore.click(verifyAnswer)

        await PlaywrightCore.fill(verifyAnswer, clTD.wrongAnswer)
        await PlaywrightCore.click(this.checkAnswerBtn)
        await PlaywrightCore.click(this.closeBtn)
        await this.page.waitForTimeout(3000);
        await expect(this.lineError).toHaveText(clTD.validationError)
        await this.page.waitForTimeout(5000);

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
        await this.page.waitForTimeout(5000);
        await PlaywrightCore.click(this.PresentationMode)
        await this.page.waitForTimeout(5000);
        await PlaywrightCore.click(this.gotItBtn)
        await this.uploadFIle(ele, './test-environment/test-assets/test-resource-files/corolla.jpg')
        await this.page.waitForTimeout(4000);
        expect(this.unSubmittedFileName).toBeVisible()
        await this.page.waitForTimeout(5000);
        const asnwerBtn = this.checkAnswerBtn
        await PlaywrightCore.click(asnwerBtn)
        await this.page.waitForTimeout(5000);
        await expect(this.correctLabelIcon).toBeVisible()
        await this.checkBackgroundColor(this.correctLabelIcon, clTD.fileUpload.correctOptionColorVal)
        // await PlaywrightCore.click(asnwerBtn)
        await this.page.waitForTimeout(5000);
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
        await expect(txt).toBeVisible()
        expect("Raul").toBe(await PlaywrightCore.textContent(txt))
        await PlaywrightCore.clear(txt)
        await PlaywrightCore.fill(txt,'Raul')
        // await this.page.waitForTimeout(3000);
        // await PlaywrightCore.click(this.resetTotemplateBtn)
        const textxt = this.PresentationInput.nth(2).locator('p').getByText('Raul')
        await expect(textxt).toBeVisible()
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
    async verifyStudentViewForTipElement(lesson) {
        const parent = this.textEditor
        const lessonEle = await this.page.locator('//h2[contains(text(), "'+ lesson +'")]');
        await PlaywrightCore.click(lessonEle)
        const test = parent.locator(this.tipEle)
        await this.checkBackgroundColor(test,clTD.tip.backgroundPink)
    }
    async dragAndDrop( sourceSelector, targetSelector) {
        await sourceSelector.dragTo(targetSelector);
    }
    async validateParsonsFunctionality() {
        const parent = this.textEditor
        const ele = parent.locator(this.parsonEle)
        const distractorSection = ele.locator(this.Section).first()
        const solutionSection = ele.locator(this.Section).last()
        await expect(ele).toBeVisible()
        const textField1 = ele.locator(this.textField)
        await PlaywrightCore.fill(textField1,clTD.parsonProblem.Heading)
        const tdd = this.techDropDown
        await tdd.selectOption([clTD.parsonProblem.techStack])

        var row = distractorSection.locator(this.distractorTextBox).first()
        var activeLine =row.locator(this.line).first()
        await PlaywrightCore.fill(row,clTD.parsonProblem.distractor2)
        await PlaywrightCore.press(row,'Enter')
        activeLine =distractorSection.locator(this.line).nth(1)
        row = distractorSection.locator(this.distractorTextBox).nth(0)
        await PlaywrightCore.fill(activeLine,clTD.parsonProblem.distractor1)
        await PlaywrightCore.press(row,'Enter')
        activeLine =distractorSection.locator(this.line).nth(2)
        await PlaywrightCore.fill(activeLine,clTD.parsonProblem.distractor4)
        await PlaywrightCore.press(row,'Enter')
        activeLine =distractorSection.locator(this.line).nth(3)
        await PlaywrightCore.fill(activeLine,clTD.parsonProblem.distractor3)
        var solRow = solutionSection.locator(this.distractorTextBox).first()
        var solActiveLine =row.locator(this.line).first()
        await PlaywrightCore.fill(solRow,clTD.parsonProblem.solutiion1)
        await PlaywrightCore.press(solRow,'Enter')
        solActiveLine =solutionSection.locator(this.line).nth(1)
        solRow = solutionSection.locator(this.distractorTextBox).nth(0)
        await PlaywrightCore.fill(solActiveLine,clTD.parsonProblem.solutiion2)
        await PlaywrightCore.press(solRow,'Enter')
        solActiveLine =solutionSection.locator(this.line).nth(2)
        await PlaywrightCore.fill(solActiveLine,clTD.parsonProblem.solutiion3)
        await PlaywrightCore.press(solRow,'Enter')
        solActiveLine =solutionSection.locator(this.line).nth(3)
        await PlaywrightCore.fill(solActiveLine,clTD.parsonProblem.solutiion4)
        await PlaywrightCore.click(this.PresentationMode)
        await PlaywrightCore.click(this.gotItBtn)
        await expect(this.answerColumn).toBeVisible()
        await this.page.waitForTimeout(5000);
        const parentOption = this.optionsColumn
        const from = this.option2
        const to = this.answerColumn

        await this.page.waitForTimeout(3000);
        await from.dragTo(to)
        await this.page.waitForTimeout(5000);
        await PlaywrightCore.click(this.checkAnswerBtn)
    }
    async validateCodeSelectFunctionality() {
        const parent = this.textEditor
        const ele = parent.locator(this.textField).nth(1)
        await this.page.waitForTimeout(3000);
        await expect(this.codeEle).toBeVisible()
        await PlaywrightCore.fill(ele,clTD.codeSelect.heading)
        const language = this.languageDropDown
        await language.selectOption([clTD.codeSelect.language])
        const editor = this.codeEditor
        const editorLine1 = editor.locator(this.line).nth(3)
        await PlaywrightCore.click(this.selectableTab)
        await editorLine1.selectText()
        await this.page.waitForTimeout(3000);
        await PlaywrightCore.doubleClickByText(this.page,'return')
        await this.page.waitForTimeout(3000);
        await PlaywrightCore.click(this.correctTab)
        await PlaywrightCore.ClickByText(this.page,'return')
        await PlaywrightCore.click(this.PresentationMode)
        await PlaywrightCore.click(this.gotItBtn)
        await editorLine1.selectText()
        await PlaywrightCore.ClickByText(this.page,'return')
        await PlaywrightCore.click(this.checkAnswerBtn)
        await PlaywrightCore.click(this.closeBtn)
        await expect(this.correctLabelIcon).toBeVisible()
        await PlaywrightCore.click(this.exitStudentView)
    }
    async verifyStudentViewForCorrectCodeSelectElement(lesson) {
        const editor = this.codeEditor
        const lessonEle = await this.page.locator('//h2[contains(text(), "'+ lesson +'")]');
        await PlaywrightCore.click(lessonEle)
        const editorLine1 = editor.locator(this.line).nth(3)
        await editorLine1.selectText()
        await PlaywrightCore.ClickByText(this.page,'return n')
        await PlaywrightCore.click(this.checkAnswerBtn)
        await PlaywrightCore.click(this.closeBtn)
        await expect(this.correctLabelIcon).toBeVisible()
    }
    async validateHeadinElementOnPresentationView() {
        await PlaywrightCore.click(this.PresentationMode)
        await PlaywrightCore.click(this.gotItBtn)
    }
    async validateNumberedList() {
        const parent = this.NumberedList
        const child = parent.locator(this.list)
        await PlaywrightCore.press(child, 'Enter')
    }

    async createMCQTest() {
        await this.selectElementFromDropdown(clTD.elements.multipleChoice)
        await expect(this.SetupBtn).toHaveText(clTD.SetupBtnValue)
        await expect(this.OptionsBtn).toHaveText(clTD.OptionsBtnValue)
        await expect(this.AddChoiceBtn).toHaveText(clTD.AddChoiceBtnValue)
        await PlaywrightCore.fill(this.MCQQuestion, clTD.MCQQuestionValue)
        await PlaywrightCore.fill(this.MCQOption1, clTD.MCQOption1Value)
        await PlaywrightCore.fill(this.MCQOption2, clTD.MCQOption2Value)
        await PlaywrightCore.fill(this.MCQOption3, clTD.MCQOption3Value)
        await PlaywrightCore.fill(this.MCQOption4, clTD.MCQOption4Value)
    }

    async navigateToPresentationMode() {
        await PlaywrightCore.click(this.presnetationMode)
        await expect(this.PresentationModePopUpHeading).toHaveText(clTD.PresentationModePopUpHeadingValue)
        await expect(this.PresentationModePopUpDescription).toHaveText(clTD.PresentationModePopUpDescriptionValue)
        await expect(this.GotItBtn).toHaveText(clTD.GotItBtnValue)
        await PlaywrightCore.click(this.GotItBtn)
    }

    async createFillInTheBlankTest() {
        await this.selectElementFromDropdown(clTD.elements.fillInBlank)
        await expect(this.SetupBtn).toHaveText(clTD.SetupBtnValue)
        await expect(this.OptionsBtn).toHaveText(clTD.OptionsBtnValue)
        await expect(this.AddBlankBtn).toHaveText(clTD.AddBlankBtnValue)
        await PlaywrightCore.fill(this.FillInBlankTitle, clTD.FillInBlankTitleValue)
        await PlaywrightCore.fill(this.FillInBlankQues, clTD.FillInBlankQuesValue)
        await PlaywrightCore.click(this.AddBlankBtn)
        await PlaywrightCore.fill(this.FillInBlankAnswer1, clTD.FillInBlankAnswer1Value)
    }

    async createShortAnswerTest() {
        await this.selectElementFromDropdown(clTD.elements.shortAnswer)
        await expect(this.SetupBtn).toHaveText(clTD.SetupBtnValue)
        await expect(this.ModelSolutionBtn).toHaveText(clTD.ModelSolutionBtnValue)
        await expect(this.OptionsBtn).toHaveText(clTD.OptionsBtnValue)
        await PlaywrightCore.fill(this.ShortAnswerPromptField, clTD.ShortAnswerPromptFieldValue)
        await PlaywrightCore.fill(this.ShortAnswerTemplateField, clTD.ShortAnswerTemplateFieldValue)
        await PlaywrightCore.click(this.ModelSolutionBtn)
        await PlaywrightCore.fill(this.ShortAnswerField, clTD.ShortAnswerFieldValue)
    }

    async createJuiceMindIDEProject() {
        await this.selectElementFromDropdown(clTD.elements.JuiceMindIDE)
        await expect(this.InitializeJuiceMindIDEBtn).toHaveText(clTD.InitializeJuiceMindIDEBtnValue)
        await PlaywrightCore.click(this.InitializeJuiceMindIDEBtn)
        await PlaywrightCore.fill(this.ProjectNameField, clTD.ProjectNameFieldValue)
        await PlaywrightCore.click(this.ProjectTypeField)
        await PlaywrightCore.click(this.ProjectTypePythonValue)
        await PlaywrightCore.click(this.CreateProjectSubmitBtn)
        await PlaywrightCore.waitTimeout(this.page, 5000)
        await PlaywrightCore.fill(this.IDEFirstLine, clTD.IDEFirstLineValue)
        await PlaywrightCore.click(this.CodeRunBtn)
        await PlaywrightCore.waitTimeout(this.page, 3000)
        await expect(this.CodeOutputFirstLine).toHaveText(clTD.CodeOutputFirstLineValue)
    }

    async createJuiceMindIDEUnitTest() {
        await PlaywrightCore.click(this.IDETestsBtn)
        await PlaywrightCore.click(this.IDETestsAddTestBtn)
        await PlaywrightCore.click(this.CreateTestTestTypeField)
        await PlaywrightCore.click(this.CreateTestUnitTestType)
        await PlaywrightCore.fill(this.CreateTestTestNameField, clTD.CreateTestTestNameFieldValue)
        await PlaywrightCore.click(this.CreateTestAddInnerTestBtn)
        await PlaywrightCore.fill(this.CreateTestTestNameField2, clTD.CreateTestTestNameFieldValue)
        await PlaywrightCore.click(this.CreateTestCodeTextbox)
        await this.CreateTestCodeTextbox.click({clickCount: 3})
        await PlaywrightCore.fill(this.CreateTestCodeTextbox, clTD.IDEFirstLineValue)
        await PlaywrightCore.click(this.CreateTestAddTestBtn)
        await PlaywrightCore.click(this.CreateTestAddTestBtn2)
        await PlaywrightCore.click(this.IDETemplateBtn)
    }

    async createJuiceMindIDEInputOutputTest() {
        await PlaywrightCore.click(this.IDETestsBtn)
        await PlaywrightCore.click(this.IDETestsAddTestBtn)
        await PlaywrightCore.click(this.CreateTestTestTypeField)
        await PlaywrightCore.click(this.CreateTestInputOutputTestType)
        await PlaywrightCore.fill(this.CreateTestTestNameField, clTD.CreateTestTestNameFieldValue)
        await PlaywrightCore.fill(this.CreateTestInputField, clTD.CreateTestInputFieldValue)
        await PlaywrightCore.fill(this.CreateTestOutputField, clTD.CreateTestOutputFieldValue)
        await PlaywrightCore.click(this.CreateTestAddTestBtn2)
        await PlaywrightCore.click(this.IDETemplateBtn)
    }

    async uploadEmbedVideo(video_name) {
        await this.selectElementFromDropdown(clTD.elements.embed)
        await expect(this.EmbedEnterURL).toBeVisible()
        await expect(this.EmbedInsertURLHeading).toHaveText(clTD.EmbedInsertURLHeadingValue)
        await expect(this.EmbedSubmitBtn).toHaveText(clTD.EmbedSubmitBtnValue)
        await PlaywrightCore.fill(this.EmbedEnterURL, video_name)
        await PlaywrightCore.click(this.EmbedSubmitBtn)
        await PlaywrightCore.waitTimeout(this.page, 8000)
        await expect(this.SetupBtn).toHaveText(clTD.SetupBtnValue)
        await expect(this.OptionsBtn).toHaveText(clTD.OptionsBtnValue)
    }

    async replaceEmbedVideo(replaced_link) {
        await PlaywrightCore.click(this.OptionsBtn)
        await expect(this.ReplaceEmbedTxtBox).toBeVisible()
        await expect(this.CurrentEmbedURLHeading).toHaveText(clTD.CurrentEmbedURLHeadingValue)
        await expect(this.ReplaceHeading).toHaveText(clTD.ReplaceHeadingValue)
        await expect(this.SaveBtn).toHaveText(clTD.SaveBtnValue)
        await PlaywrightCore.fill(this.ReplaceEmbedTxtBox, replaced_link)
        await PlaywrightCore.click(this.SaveBtn)
    }

    async createHTMLText(Text) {
        await this.selectElementFromDropdown(clTD.elements.html)
        await expect(this.HTMLNode).toBeVisible()
        await PlaywrightCore.click(this.HTMLNode)
        await PlaywrightCore.fill(this.HTMLTextBox, Text)
        await expect(this.SaveBtn).toHaveText(clTD.SaveBtnValue)
        await PlaywrightCore.click(this.SaveBtn)
    }

    async hideText(Text) {
        await expect(this.HideRevealTextBox).toBeVisible()
        await expect(this.HideContentBtn).toBeVisible()
        await expect(this.HideContentBtn).toHaveText(CLHRtd.HideContentTxt)
        await PlaywrightCore.click(this.HideContentBtn)
    }

    async assertionsAfterHidingText(Text) {
        await expect(this.HideContentBtn).not.toBeVisible()
        await expect(this.HideRevealTextBox).not.toBeVisible()
        await expect(this.RevealContentButton).toBeVisible()
        await expect(this.RevealContentButton).toHaveText(CLHRtd.RevealContentTxt)
    }

    async assertionsAfterRevealingText(Text) {
        await expect(this.RevealContentButton).not.toBeVisible()
        await expect(this.HideRevealTextBox).toBeVisible()
        await expect(this.HideContentBtn).toBeVisible()
        await expect(this.HideContentBtn).toHaveText(CLHRtd.HideContentTxt)
    }

    async createMultipleChoiceTest() {
        await this.selectElementFromDropdown(clTD.elements.multipleChoice)
        await PlaywrightCore.click(this.MultipleChoiceQuestionHeadingBox)
        await PlaywrightCore.fill(this.MultipleChoiceQuestionHeadingBox, clTD.Heading1plus1)
        await PlaywrightCore.click(this.MultipleChoiceFormBox4DeleteBtn)
        await PlaywrightCore.click(this.MultipleChoiceAddChoiceBtn)
        await PlaywrightCore.fill(this.MultipleChoiceFormBox1, clTD.One)
        await PlaywrightCore.fill(this.MultipleChoiceFormBox2, clTD.Two)
        await PlaywrightCore.fill(this.MultipleChoiceFormBox3, clTD.Three)
        await PlaywrightCore.fill(this.MultipleChoiceFormBox4.nth(0), clTD.Four)
        await expect(this.MultipleChoiceFormBox1).toHaveText(clTD.One)
        await expect(this.MultipleChoiceFormBox2).toHaveText(clTD.Two)
        await expect(this.MultipleChoiceFormBox3).toHaveText(clTD.Three)
        await expect(this.MultipleChoiceFormBox4.nth(0)).toHaveText(clTD.Four)
        await expect(this.MultipleChoiceSelectBox2).toBeVisible()
        await PlaywrightCore.click(this.MultipleChoiceSelectBox2)
    }

    async assertionsOnOptionsScreenForMCQTest() {
        await PlaywrightCore.click(this.OptionsBtn)
        await expect(this.MultipleChoiceOptionsRule1).toHaveText(clTD.MultipleChoiceOptionsRule1Value)
        await expect(this.MultipleChoiceOptionsRule2).toHaveText(clTD.MultipleChoiceOptionsRule2Value)
        await expect(this.MultipleChoiceOptionsRule3).toHaveText(clTD.MultipleChoiceOptionsRule3Value)
        await expect(this.MultipleChoiceOptionsRule4).toHaveText(clTD.MultipleChoiceOptionsRule4Value)
        await expect(this.MultipleChoiceOptionsRule5).toHaveText(clTD.MultipleChoiceOptionsRule5Value)
    }

    async optionsSelectionForMCQTest() {
        await PlaywrightCore.click(this.OptionsCheckBox1)
        await PlaywrightCore.click(this.OptionsCheckBox3)
        await PlaywrightCore.click(this.OptionsCheckBox4.nth(0))
        await PlaywrightCore.click(this.OptionsCheckBox5.nth(0))
        await PlaywrightCore.click(this.OptionsCheckBox1)
        await PlaywrightCore.click(this.OptionsCheckBox3)
        await PlaywrightCore.click(this.OptionsCheckBox4.nth(0))
        await PlaywrightCore.click(this.OptionsCheckBox5.nth(0))
    }
    async assertionsOnPresentationModeForIncorrectMCQAnswer() {
        await expect(this.IncorrectAndCorrectAnswerHeading).toHaveText(clTD.IncorrectAnswerTxt)
        await expect(this.PointScoreMsg).toHaveText(clTD.PointScore0Txt)
        await expect(this.CloseBtn).toHaveText(clTD.CloseBtnValue)
        await PlaywrightCore.click(this.CloseBtn)
        await expect(this.IncorrectMsg).toHaveText(clTD.IncorrectMsgValue)
    }

    async assertionsOnPresentationModeForCorrectMCQAnswer() {
        await expect(this.IncorrectAndCorrectAnswerHeading).toHaveText(clTD.CorrectAnswerTxt)
        await expect(this.PointScoreMsg).toHaveText(clTD.PointScore1Txt)
        await expect(this.CloseBtn).toHaveText(clTD.CloseBtnValue)
        await PlaywrightCore.click(this.CloseBtn)
        await expect(this.CorrectMsg).toHaveText(clTD.CorrectMsgValue)
    }
}
