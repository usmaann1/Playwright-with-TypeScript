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
        await lessonBuilder.NavigateToTeamCoursesPage()
        await expect(lessonBuilder.CreateNewTeamBtn).toHaveText(LessonBuilderTestData.CreateNewTeamBtnValue)
        await lessonBuilder.ClickOnCreateNewTeamBtn()
        await lessonBuilder.ClickOnStartFromScratch()
        await lessonBuilder.FillTeamNameTxtBox()
    });

})