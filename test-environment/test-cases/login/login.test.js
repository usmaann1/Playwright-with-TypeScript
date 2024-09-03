const { PlaywrightCore } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import LoginCredentials from '../../test-assets/test-data-files/login/login-testData.json'
require('dotenv').config()

test.describe('TestSuite: Login', () => {

    test.use({storageState: Object.create(null)});

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.NavigateToLoginPage()
      });

    test('TC: UI Validations', async ({loginPage}) => {
        await expect(loginPage.Logo).toBeVisible()
        await expect(loginPage.LoginHeading).toHaveText(LoginCredentials.LoginHeadingValue)
        await expect(loginPage.EmailAddressTxtBox).toBeVisible()
        await expect(loginPage.PasswordTxtBox).toBeVisible()
        await expect(loginPage.SignInBtn).toHaveText(LoginCredentials.SignInBtnValue)
        await expect(loginPage.OrLoginUsingText).toHaveText(LoginCredentials.OrLoginUsingTextValue)
        await expect(loginPage.GmailLogo).toBeVisible()
        await expect(loginPage.DontHaveAnAccountText).toHaveText(LoginCredentials.DontHaveAnAccountTextValue)
        await expect(loginPage.SignUpWithJuicMindBtn).toHaveText(LoginCredentials.SignUpWithJuicMindBtnValue)
        await expect(loginPage.ForgotPasswordBtn).toHaveText(LoginCredentials.ForgotPasswordBtnValue)
    }); 

    test('TC: Valid Login', async ({loginPage}) => {
        await loginPage.fillCredentialsAndLogin(Credentials.EMAIL, Credentials.PASSWORD)
        await expect(loginPage.ProfilePicture).toBeVisible()
    }); 

    for(const InvalidLoginCredentials of LoginCredentials.InvalidLoginCredentials) {
        const loginUserName = InvalidLoginCredentials.UserName
        const loginPassword = InvalidLoginCredentials.Password
       
        test('TC-InvalidLoginErrorAssertion - UserName: '+loginUserName+', Password '+loginPassword, async ({loginPage}) => {
            await loginPage.fillCredentialsAndLogin(loginUserName,loginPassword)
            if(loginUserName != Credentials.EMAIL && loginUserName == "")
            {
                await expect(loginPage.EmailIsRequiredValidationError).toHaveText(LoginCredentials.EmailIsRequiredValidationErrorValue)
            }
            else if(loginUserName != Credentials.EMAIL && !loginUserName.includes(LoginCredentials.AtGmailDotCom) ){
                await PlaywrightCore.waitFor(loginPage.PleaseEnterAValidEmailValidationError);
                await expect(loginPage.PleaseEnterAValidEmailValidationError).toHaveText(LoginCredentials.PleaseEnterAValidEmailValidationErrorValue)
            }
            else if(loginUserName != Credentials.EMAIL){
                await expect(loginPage.UserNamePasswordValidationError).toHaveText(LoginCredentials.UserNameValidationErrorTextValue)
            }

            if(loginPassword != Credentials.PASSWORD && loginPassword == "")
            {
                await expect(loginPage.PasswordIsRequiredValidationError).toHaveText(LoginCredentials.PasswordIsRequiredValidationErroValue)
            }  
            else if(loginUserName == Credentials.EMAIL && loginPassword != Credentials.PASSWORD){
                await expect(loginPage.UserNamePasswordValidationError).toHaveText(LoginCredentials.PasswordValidationErrorTextValue)
            }          
        });
    }

    test('TC: Login Page to Sign Up Page Redirection', async ({loginPage}) => {
        PlaywrightCore.click(loginPage.SignUpWithJuicMindBtn)
        await expect(loginPage.SignUpHeading).toHaveText(LoginCredentials.SignUpHeadingValue)
        PlaywrightCore.click(loginPage.LogInNavigationBtn)
        await expect(loginPage.LoginHeading).toHaveText(LoginCredentials.LoginHeadingValue)
    }); 

    test('TC: Forgot Password UI Validations & Navigation', async ({loginPage}) => {
        await loginPage.NavigateToForgotPasswordPage()
        await expect(loginPage.Logo).toBeVisible()
        await expect(loginPage.LoginHeading).toHaveText(LoginCredentials.LoginHeadingValue)
        await expect(loginPage.EmailAddressTxtBox).toBeVisible()
        await expect(loginPage.ResetPasswordBtn).toHaveText(LoginCredentials.ResetPasswordBtnValue)
        await expect(loginPage.LogInNavigationBtn).toHaveText(LoginCredentials.LogInNavigationBtnValue)
        PlaywrightCore.click(loginPage.LogInNavigationBtn)
        await expect(loginPage.ForgotPasswordBtn).toHaveText(LoginCredentials.ForgotPasswordBtnValue)
    }); 

})
