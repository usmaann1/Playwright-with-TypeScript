const { PlaywrightCore } = require("../../module-imports/helperFunctions.imports");
import { expect } from "@playwright/test";
import Locators from "./quizzes.locator.json";

exports.quizzes = class quizzes {
    constructor(page) {
        this.intializePage(page);
    }

    intializePage(page) {
        this.page = page;
        this.baseURL = "./";
        
        this.QuizzesButton = this.page.locator(Locators.Quizzes);
        this.JavaProgrammingButton = this.page.locator(Locators.JavaProgramming);
        this.EasyQuizButton = this.page.locator(Locators.EasyQuizz);
        this.StartQuizButton = this.page.locator(Locators.StartQuiz);
        this.StartQuizDialogButton = this.page.locator(Locators.StartQuizzDialoug);
        this.ImReadyButton = this.page.locator(Locators.ImreadyDialoug);
        this.JoinQuizButton = this.page.locator(Locators.JoinQuiz);
        this.StartQuizAfterJoin = this.page.locator(Locators.StartQuizAfterJoinplayers);
        this.NextButton = this.page.locator(Locators.Next)
        
    }

    async ClickQuizzesButton() {
        await PlaywrightCore.click(this.QuizzesButton);
    }
    
    async ClickJavaProgrammingButton() {
        await PlaywrightCore.click(this.JavaProgrammingButton);
    }
    
    async ClickEasyQuizButton() {
        await PlaywrightCore.click(this.EasyQuizButton);
    }
    
    async ClickStartQuizButton() {
        await PlaywrightCore.click(this.StartQuizButton);
    }
    
    async ClickStartQuizDialogButton() {
        await PlaywrightCore.click(this.StartQuizDialogButton);
    }
    async ClickImReadyDialogButton() {
        await PlaywrightCore.click(this.ImReadyButton);
    }

    async ClickStartQuizAfterPlayerJoined() {
        await PlaywrightCore.click(this.StartQuizAfterJoin);
    }
    
    async ClickNextButton() {
        await PlaywrightCore.click(this.NextButton);
    }
    
    async fillstudentsignin(newPage) {
        await newPage.fill(Locators.EmailStudentSignin_textfield, 'student01@gmail.com');
        await newPage.fill(Locators.PasswordStudentSignin_textfield, '98769876');
        await newPage.click(Locators.ClickSignin_btn);
    }

    async fillstudentsignin_2(newPage) {
        await newPage.fill(Locators.EmailStudentSignin_textfield, 'student02@gmail.com');
        await newPage.fill(Locators.PasswordStudentSignin_textfield, '98769876');
        await newPage.click(Locators.ClickSignin_btn);
    }

    async fillstudentsignin_3(newPage) {
        await newPage.fill(Locators.EmailStudentSignin_textfield, 'student03@gmail.com');
        await newPage.fill(Locators.PasswordStudentSignin_textfield, '98769876');
        await newPage.click(Locators.ClickSignin_btn);
    }

    async clickJoinQuiz(newPage) {
        await newPage.click(Locators.JoinQuiz);
    }
    async EnterGamePin(newPage, pin) {
        await newPage.fill(Locators.GamePin, pin);
        await newPage.click(Locators.Enter)

    }

    async EnterNickName(newPage, name) {
        await newPage.fill(Locators.Nickname, name);
        await newPage.click(Locators.LetsGo)

    }

    async CLickFirstAnswer(newPage) {
        await newPage.click(Locators.AnswerChoice_1)
    }

    async CLickSecondAnswer(newPage) {
        await newPage.click(Locators.AnswerChoice_2)

    }
    async CLickThirdAnswer(newPage) {
        await newPage.click(Locators.AnswerChoice_3)

    }
    async CLickForuthAnswer(newPage) {
        await newPage.click(Locators.AnswerChoice_4)

    }
    async CLickErrorLine(newPage) {
        await newPage.click(Locators.ErrorLine)

    }
    async ClickExecute(newPage) {
        await newPage.click(Locators.ExecuteButton)

    }
    async EnterGamePin(newPage, pin) {
        await newPage.fill(Locators.GamePin, pin);
        await newPage.click(Locators.Enter)

    }

    async WriteCode(newPage, code) {
        await newPage.click(Locators.WriteCodeInEditor)

        await newPage.fill(Locators.WriteCodeInEditor, code);

    }


       
};
