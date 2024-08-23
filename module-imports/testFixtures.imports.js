const base = require('@playwright/test');
const { LoginPage } = require('../pages/login/login.page')
const { JoinQuizPage } = require('../pages/join-quiz/join-quiz.page')
const { SignUpPage } = require('../pages/sign-up/sign-up.page')
const { CreateTeams } = require('../pages/create-teams/create-teams.page')

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

    createTeams: async ({ page }, use) => {
        await use(new CreateTeams(page));
    },
    
});

exports.expect = base.expect;