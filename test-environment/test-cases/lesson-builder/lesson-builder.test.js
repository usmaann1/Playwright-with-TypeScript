const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import LessonBuilderTestData from '../../test-assets/test-data-files/lesson-builder/lesson-builder-testData.json'
require('dotenv').config()


test.describe('TestSuite: Lesson Builder', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.NavigateToLoginPage()
        await loginPage.fillCredentialsAndLogin(process.env.EMAIL, process.env.PASSWORD)
      });

    test('TC - Validate UI of Lesson Builder Page', async ({lessonBuilder}) => {
        lessonBuilder.NavigateToTeamCoursesPage()
        await expect(lessonBuilder.CreateNewTeamBtnValue).toHaveText(LessonBuilderTestData.CreateNewTeamBtnValue)
        lessonBuilder.NavigateToCreateNewTeam()
        lessonBuilder.NavigateToStartFromScratch()
        lessonBuilder.NavigateToTeamnametxtbox()
        
        
    });

})