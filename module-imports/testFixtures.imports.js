const base = require('@playwright/test');
const { LoginPage } = require('../pages/login/login.page')
const { JoinQuizPage } = require('../pages/join-quiz/join-quiz.page')
const { SignUpPage } = require('../pages/sign-up/sign-up.page')
const { LessonBuilder } = require('../pages/Lesson-builder/lesson-builder.page')
const{frq} = require('../pages/frq/frq.page')
const{projects} = require('../pages/projects/projects.page')
const{quizzes} = require('../pages/quizzes/quizzes.page')


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

    frq: async ({ page }, use) => {
        await use(new frq(page));
    },

    projects: async ({ page }, use) => {
        await use(new projects(page));
    },

    quizzes: async ({ page }, use) => {
        await use(new quizzes(page));
    },
    
});

exports.expect = base.expect;