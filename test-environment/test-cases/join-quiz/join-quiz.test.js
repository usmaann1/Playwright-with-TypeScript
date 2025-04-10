const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')

import { FAILED_TEST_CASES } from '../../../failed-test-cases/failed-test-cases';
import JoinQuizTestData from '../../test-assets/test-data-files/join-quiz/join-quiz-testData.json'

test.describe('TestSuite: Join Quiz', () => {
    test.beforeEach(async ({ }, testInfo) => {
        if (FAILED_TEST_CASES.length !== 0) {
          if (!FAILED_TEST_CASES.includes(testInfo.title)) {
            test.skip('Test case not included in the list');
          }
        }
      });

    test('Umair - TC-01 - Validate UI of Join Quiz Page', async ({joinQuizPage}) => {
        await joinQuizPage.navigateToJoinQuizPage()
        await expect(joinQuizPage.Logo).toBeVisible()
        await expect(joinQuizPage.JoinQuizHeading).toHaveText(JoinQuizTestData.JoinQuizHeadingValue)
        await expect(joinQuizPage.GamePinInputField).toBeVisible()
        await expect(joinQuizPage.EnterBtn).toHaveText(JoinQuizTestData.EnterBtnValue)
        await expect(joinQuizPage.AreYouAteacherText).toHaveText(JoinQuizTestData.AreYouAteacherTextValue)
        await expect(joinQuizPage.SignUpHereBtn).toHaveText(JoinQuizTestData.SignUpHereBtnValue)
    });

})