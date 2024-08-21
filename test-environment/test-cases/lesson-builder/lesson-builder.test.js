const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')

import JoinQuizTestData from '../../test-assets/test-data-files/lesson-builder/lesson-builder-testData.json'

test.describe('TestSuite: Lesson Builder', () => {

    test('TC - Validate UI of Join Quiz Page', async ({joinQuizPage}) => {
        await joinQuizPage.navigateToJoinQuizPage()
        await expect(joinQuizPage.Logo).toBeVisible()
        await expect(joinQuizPage.JoinQuizHeading).toHaveText(JoinQuizTestData.JoinQuizHeadingValue)
        await expect(joinQuizPage.GamePinInputField).toBeVisible()
        await expect(joinQuizPage.EnterBtn).toHaveText(JoinQuizTestData.EnterBtnValue)
        await expect(joinQuizPage.AreYouAteacherText).toHaveText(JoinQuizTestData.AreYouAteacherTextValue)
        await expect(joinQuizPage.SignUpHereBtn).toHaveText(JoinQuizTestData.SignUpHereBtnValue)
    });

})