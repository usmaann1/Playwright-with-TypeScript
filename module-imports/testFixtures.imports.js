const base = require('@playwright/test');
const { LoginPage } = require('../pages/login/login.page')
const { JoinQuizPage } = require('../pages/join-quiz/join-quiz.page')
const { SignUpPage } = require('../pages/sign-up/sign-up.page')
const { LessonBuilder } = require('../pages/Lesson-builder/lesson-builder.page')
const { frq } = require('../pages/frq/frq.page')
const { projects } = require('../pages/projects/projects.page')
const { grouping } = require('../pages/grouping/grouping.page')
const { csawsome } = require('../pages/csawesome-questions-validation/csawesome-questions-validation.page')
const { quizzes } = require('../pages/quizzes/quizzes.page')
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

    lessonBuilder: async ({ page }, use) => {
        await use(new LessonBuilder(page));
    },

    frq: async ({ page }, use) => {
        await use(new frq(page));
    },

    projects: async ({ page }, use) => {
        await use(new projects(page));
    },
    
    grouping: async ({ page }, use) => {
        await use(new grouping(page));
    },

    csawsome: async ({ page }, use) => {
        await use(new csawsome(page));
    },

    quizzes: async ({ page }, use) => {
        await use(new quizzes(page));
    },

    teamCoursesPage: async ({ page, context}, use) => {
        await context.grantPermissions(['clipboard-read', 'clipboard-write']);
        await use(new TeamCoursesPage(page));
    },    

    createTeams: async ({ page }, use) => {
        await use(new CreateTeams(page));
    },

    createLesson: async ({ page, context }, use) => {
        await context.grantPermissions(['clipboard-read', 'clipboard-write']);
        await use(new CreateLesson(page));
    },
    
});

exports.expect = base.expect;