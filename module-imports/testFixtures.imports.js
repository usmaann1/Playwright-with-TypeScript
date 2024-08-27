const base = require('@playwright/test');
const { LoginPage } = require('../pages/login/login.page')
const { JoinQuizPage } = require('../pages/join-quiz/join-quiz.page')
const { SignUpPage } = require('../pages/sign-up/sign-up.page')
const { TeamCoursesPage } = require('../pages/team-courses/team-courses.page')
const { CreateTeams } = require('../pages/create-teams/create-teams.page')
const { CreateLesson } = require('../pages/create-lesson/create-lesson.page')

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

    teamCoursesPage: async ({ page, context}, use) => {
        await context.grantPermissions(['clipboard-read', 'clipboard-write']);
        await use(new TeamCoursesPage(page));
    },    

    createTeams: async ({ page }, use) => {
        await use(new CreateTeams(page));
    },
    createLesson: async ({ page }, use) => {
        await use(new CreateLesson(page));
    },
    
});

exports.expect = base.expect;