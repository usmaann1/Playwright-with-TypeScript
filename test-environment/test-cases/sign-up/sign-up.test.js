const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')

import SignUpTestData from '../../test-assets/test-data-files/sign-up/sign-up-testData.json'
import LoginTestData from '../../test-assets/test-data-files/login/login-testData.json'

test.describe('TestSuite: Sign Up', () => {

    test('TC - Validate UI of Sign Up Page', async ({signUpPage, loginPage}) => {
        await loginPage.NavigateToSignUpPage()
        await expect(loginPage.Logo).toBeVisible()
        await expect(signUpPage.SignUpHeading).toHaveText(LoginTestData.SignUpHeadingValue)
        await expect(loginPage.EmailAddressTxtBox).toBeVisible()
        await expect(loginPage.PasswordTxtBox).toBeVisible()
        await expect(signUpPage.SignUpBtn).toHaveText(LoginTestData.SignUpHeadingValue)
        await expect(signUpPage.OrSignUpUsing).toHaveText(SignUpTestData.OrSignUpUsingValue)
        await expect(loginPage.GmailLogo).toBeVisible()
        await expect(signUpPage.BySigningUPMessage).toHaveText(SignUpTestData.BySigningUPMessageValue)
        await expect(signUpPage.ExplorePlatformBtn).toHaveText(SignUpTestData.ExplorePlatformBtnValue)
        await expect(signUpPage.AlreadyHaveAnAccountText).toHaveText(SignUpTestData.AlreadyHaveAnAccountTextValue)
        await expect(loginPage.LogInNavigationBtn).toHaveText(SignUpTestData.LoginTxt)
    });

})