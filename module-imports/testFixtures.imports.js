const base = require('@playwright/test');
const { LoginPage } = require('../pages/login/login.page')
const { JoinQuizPage } = require('../pages/join-quiz/join-quiz.page')
const { SignUpPage } = require('../pages/sign-up/sign-up.page')
const { LessonBuilder } = require('../pages/Lesson-builder/lesson-builder.page')

exports.test = base.test.extend({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    joinQuizPage: async ({ page }, use) => {
        await use(new JoinQuizPage(page));
    },

    signUpPage: async ({ page }, use) => {
        await use(new SignUpPage(page));
    },

    lessonBuilder: async ({ page }, use) => {
        await use(new LessonBuilder(page));
    },
    
});

exports.expect = base.expect;