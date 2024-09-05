const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import SignUpTestData from '../../test-assets/test-data-files/sign-up/sign-up-testData.json'
import LoginTestData from '../../test-assets/test-data-files/login/login-testData.json'
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";

test.describe('TestSuite: Sign Up', () => {

    test('Google homepage should have Google logo', async ({ page }) => {
        // Navigate to Google homepage
        await page.goto('https://www.google.com');
      
        // Verify the page title
        await expect(page).toHaveTitle(/Google/);
      

      });
    
})
