const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import LoginCredentials from '../../test-assets/test-data-files/login/login-testData.json'
require('dotenv').config()

test.describe('TestSuite: Login', () => {

    test.use({storageState: Object.create(null)});

    test('TC: Valid Login', async ({loginPage}) => {
        await loginPage.NavigateToLoginPage()
        await loginPage.fillCredentialsAndLogin(process.env.USERNAME, process.env.PASSWORD)
        await expect(loginPage.ProfilePicture).toBeVisible()
    }); 

    for(const InvalidLoginCredentials of LoginCredentials.InvalidLoginCredentials) {
        const loginUserName = InvalidLoginCredentials.UserName
        const loginPassword = InvalidLoginCredentials.Password
       
        test('TC-InvalidLoginErrorAssertion - UserName: '+loginUserName+', Password '+loginPassword, async ({loginPage}) => {
            await loginPage.NavigateToLoginPage()
            await loginPage.fillCredentialsAndLogin(loginUserName,loginPassword)
            if(loginUserName != process.env.USERNAME && loginUserName == "")
            {
                await expect(loginPage.EmailIsRequiredValidationError).toHaveText(LoginCredentials.EmailIsRequiredValidationErrorValue)
            }
            else if(loginUserName != process.env.USERNAME && !loginUserName.includes("@gmail.com") ){
                await PlaywrightCore.waitFor(loginPage.PleaseEnterAValidEmailValidationError);
                await expect(loginPage.PleaseEnterAValidEmailValidationError).toHaveText(LoginCredentials.PleaseEnterAValidEmailValidationErrorValue)
            }
            else if(loginUserName != process.env.USERNAME){
                await expect(loginPage.UserNamePasswordValidationError).toHaveText(LoginCredentials.UserNameValidationErrorTextValue)
            }

            if(loginPassword != process.env.PASSWORD && loginPassword == "")
            {
                await expect(loginPage.PasswordIsRequiredValidationError).toHaveText(LoginCredentials.PasswordIsRequiredValidationErroValue)
            }  
            else if(loginUserName == process.env.USERNAME && loginPassword != process.env.PASSWORD){
                await expect(loginPage.UserNamePasswordValidationError).toHaveText(LoginCredentials.PasswordValidationErrorTextValue)
            }          
        });
    }

})
