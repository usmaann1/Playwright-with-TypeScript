const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import SignUpTestData from '../../test-assets/test-data-files/sign-up/sign-up-testData.json'
import LoginTestData from '../../test-assets/test-data-files/login/login-testData.json'
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";

test.describe('TestSuite: Sign Up', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.NavigateToSignUpPage()
      });

    test('TC - Validate UI of Sign Up Page', async ({signUpPage, loginPage}) => {
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
    
    test('TC - Valid Sign Up & Redirection to Next Page', async ({loginPage, signUpPage}) => {
        const randomEmail = await UserFunctions.generateRandomEmail(Credentials.EMAIL)
        await signUpPage.fillCredentialsAndSignUp(loginPage, randomEmail, Credentials.PASSWORD)
        await expect(loginPage.Logo).toBeVisible()
        await expect(signUpPage.IamAHeading).toHaveText(SignUpTestData.IamAHeadingValue)
        await expect(signUpPage.StudentBox).toBeVisible()
        await expect(signUpPage.RocketLogo).toBeVisible()
        await expect(signUpPage.StudentHeading).toHaveText(SignUpTestData.StudentHeadingValue)
        await expect(signUpPage.IamExploringStudentTxt).toHaveText(SignUpTestData.IamExploringStudentTxtValue)
        await expect(signUpPage.TeacherBox).toBeVisible()
        await expect(signUpPage.TeacherClassLogo).toBeVisible()
        await expect(signUpPage.TeacherHeading).toHaveText(SignUpTestData.TeacherHeadingValue)
        await expect(signUpPage.IamExploringTeacherTxt).toHaveText(SignUpTestData.IamExploringTeacherTxtValue)
        
    });

    test('TC - Sign-Up with Already Registered Email', async ({loginPage, signUpPage}) => {
        await signUpPage.fillCredentialsAndSignUp(loginPage, Credentials.EMAIL, Credentials.PASSWORD)
        await expect(loginPage.UserNamePasswordValidationError).toHaveText(SignUpTestData.AlreadySignedUpUserErrorValidationValue)
    });

    for(const InvalidLoginCredentials of SignUpTestData.InvalidLoginCredentials) {
        const loginUserName = InvalidLoginCredentials.UserName
        const loginPassword = InvalidLoginCredentials.Password
       
        test('TC-InvalidLoginErrorAssertion - UserName: '+loginUserName+', Password '+loginPassword, async ({loginPage, signUpPage}) => {
            await signUpPage.fillCredentialsAndSignUp(loginPage, loginUserName, loginPassword)
            if(loginUserName == "")
            {
                await expect(signUpPage.EmailIsRequiredValidationError).toHaveText(SignUpTestData.EmailIsRequiredValidationErrorValue)
            }
            else if(!loginUserName.includes(LoginTestData.AtGmailDotCom) ){
                await PlaywrightCore.waitFor(loginPage.PleaseEnterAValidEmailValidationError);
                await expect(loginPage.PleaseEnterAValidEmailValidationError).toHaveText(LoginTestData.PleaseEnterAValidEmailValidationErrorValue)
            }

            if(loginPassword == "")
            {
                await expect(loginPage.PasswordIsRequiredValidationError).toHaveText(LoginTestData.PasswordIsRequiredValidationErroValue)
            }  
            else
            {
                await expect(signUpPage.PasswordMustBe6DigitsValidationError).toHaveText(SignUpTestData.PasswordMustBe6DigitsValidationErrorValue)
            }          
        });

    }
    
})