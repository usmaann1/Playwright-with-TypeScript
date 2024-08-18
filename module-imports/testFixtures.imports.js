const base = require('@playwright/test');
const { LoginPage } = require('../pages/login/login.page')
const { JoinQuizPage } = require('../pages/join-quiz/join-quiz.page')

exports.test = base.test.extend({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    joinQuizPage: async ({ page }, use) => {
        await use(new JoinQuizPage(page));
    },
    
});

exports.expect = base.expect;