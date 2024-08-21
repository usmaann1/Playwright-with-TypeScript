const { chromium} = require('@playwright/test');
const { LoginPage } = require('../../pages/login/login.page')
import LoginCredentials from './test-data-files/login/login-testData.json'
require('dotenv').config()

module.exports = async loginConfig => {
    const browser = await chromium.launch();
    const context = await browser.newContext({ignoreHTTPSErrors: true});
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    await page.goto("https://play.juicemind.com/login")
    await loginPage.fillCredentialsAndLogin(process.env.EMAIL, process.env.PASSWORD)
    await page.context().storageState({path: 'loginState.json'})
}