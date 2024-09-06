const { chromium } = require('playwright');
const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports');
const { test, expect } = require('../../../module-imports/testFixtures.imports');
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";

test.describe('TestSuite: CsAwesome Questions Validation', () => {


  test.beforeEach(async ({ loginPage }) => {
    // await loginPage.setPage(chromiumPage); // Assuming setPage is a method to set the page context
    
    await loginPage.NavigateToLoginPage();
    await loginPage.fillCredentialsAndLogin(Credentials.EMAIL_USMAN, Credentials.PASSWORD_USMAN);
  });

  test('TC - 1. Getting Started and Primitive Types', async ({ csawsome, page }) => {
    await csawsome.NavigateToTeamCoursesPage();
    
    await expect(csawsome.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await csawsome.ClickOnCreateNewTeamBtn();
    await csawsome.ClickOnCSawesome();
    await csawsome.FillTeamNameTxtBox();
    await csawsome.Submitbtn();

     await page.waitForTimeout(60000);

    await csawsome.ClickGetStartedButton()
    await page.waitForTimeout(5000);


    const noOfFolders = 19;
    const targetTextElement = await page.locator(".text-3xl.font-bold");

    for (let i = 2; i <= noOfFolders; i++) {
      const xpath = `(//div[contains(@class, '_root_yw9yb_1')]/div/div/div/span[2])[${i}]`;
      const element = await page.locator(`xpath=${xpath}`);

      if (await element.count() > 0) {

        await element.click();
        await page.waitForTimeout(2000);
        const targetText = await targetTextElement.textContent();
        const text = await element.textContent();

        await expect(text).toBe(targetText);
        console.log(`Element ${i} text:`, text);
      } else {
        console.log(`Element ${i} not found`);
      }
    }
  
     await csawsome.ClickGetStartedButton()
    
  });

  test('TC - 2. Using Objects', async ({ csawsome, page }) => {

    await csawsome.NavigateToTeamCoursesPage();
    
    await expect(csawsome.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await csawsome.ClickOnCreateNewTeamBtn();
    await csawsome.ClickOnCSawesome();
    await csawsome.FillTeamNameTxtBox();
    await csawsome.Submitbtn();

     await page.waitForTimeout(60000);

    await csawsome.ClickUsingObjectsButton()
    await page.waitForTimeout(5000);


    const noOfFolders = 19;
    const targetTextElement = await page.locator(".text-3xl.font-bold");

    for (let i = 3; i <= noOfFolders; i++) {
      const xpath = `(//div[contains(@class, '_root_yw9yb_1')]/div/div/div/span[2])[${i}]`;
      const element = await page.locator(`xpath=${xpath}`);

      if (await element.count() > 0) {

        await element.click();
        await page.waitForTimeout(2000);
        const targetText = await targetTextElement.textContent();
        const text = await element.textContent();
        
        await expect(text).toBe(targetText);
        console.log(`Element ${i} text:`, text);
      } else {
        console.log(`Element ${i} not found`);
      }
    }

    await csawsome.ClickUsingObjectsButton()

    
  });

  test('TC - 3. Boolean Expressions & If Statements', async ({ csawsome, page }) => {

    await csawsome.NavigateToTeamCoursesPage();
    
    await expect(csawsome.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await csawsome.ClickOnCreateNewTeamBtn();
    await csawsome.ClickOnCSawesome();
    await csawsome.FillTeamNameTxtBox();
    await csawsome.Submitbtn();

     await page.waitForTimeout(60000);

    await csawsome.ClickBoolExpAndIfButton()
    await page.waitForTimeout(5000);


    const noOfFolders = 21;
    const targetTextElement = await page.locator(".text-3xl.font-bold");

    for (let i = 4; i <= noOfFolders; i++) {
      const xpath = `(//div[contains(@class, '_root_yw9yb_1')]/div/div/div/span[2])[${i}]`;
      const element = await page.locator(`xpath=${xpath}`);

      if (await element.count() > 0) {

        await element.click();
        await page.waitForTimeout(2000);
        const targetText = await targetTextElement.textContent();
        const text = await element.textContent();
        
        await expect(text).toBe(targetText);
        console.log(`Element ${i} text:`, text);
      } else {
        console.log(`Element ${i} not found`);
      }
    }

    await csawsome.ClickBoolExpAndIfButton()

    
  });

  test('TC - 4. Iteration (Loops)', async ({ csawsome, page }) => {

    await csawsome.NavigateToTeamCoursesPage();
    
    await expect(csawsome.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await csawsome.ClickOnCreateNewTeamBtn();
    await csawsome.ClickOnCSawesome();
    await csawsome.FillTeamNameTxtBox();
    await csawsome.Submitbtn();

     await page.waitForTimeout(60000);

    await csawsome.ClickIterationsButton()
    await page.waitForTimeout(5000);


    const noOfFolders = 17;
    const targetTextElement = await page.locator(".text-3xl.font-bold");

    for (let i = 5; i <= noOfFolders; i++) {
      const xpath = `(//div[contains(@class, '_root_yw9yb_1')]/div/div/div/span[2])[${i}]`;
      const element = await page.locator(`xpath=${xpath}`);

      if (await element.count() > 0) {

        await element.click();
        await page.waitForTimeout(2000);
        const targetText = await targetTextElement.textContent();
        const text = await element.textContent();
        
        await expect(text).toBe(targetText);
        console.log(`Element ${i} text:`, text);
      } else {
        console.log(`Element ${i} not found`);
      }
    }

    await csawsome.ClickIterationsButton()

    
  });

  test('TC - 5. Writing Classes', async ({ csawsome, page }) => {

    await csawsome.NavigateToTeamCoursesPage();
    
    await expect(csawsome.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await csawsome.ClickOnCreateNewTeamBtn();
    await csawsome.ClickOnCSawesome();
    await csawsome.FillTeamNameTxtBox();
    await csawsome.Submitbtn();

     await page.waitForTimeout(60000);

    await csawsome.ClickWritingClassesButton()
    await page.waitForTimeout(5000);


    const noOfFolders = 23;
    const targetTextElement = await page.locator(".text-3xl.font-bold");

    for (let i = 6; i <= noOfFolders; i++) {
      const xpath = `(//div[contains(@class, '_root_yw9yb_1')]/div/div/div/span[2])[${i}]`;
      const element = await page.locator(`xpath=${xpath}`);

      if (await element.count() > 0) {

        await element.click();
        await page.waitForTimeout(2000);
        const targetText = await targetTextElement.textContent();
        const text = await element.textContent();
        
        await expect(text).toBe(targetText);
        console.log(`Element ${i} text:`, text);
      } else {
        console.log(`Element ${i} not found`);
      }
    }

    await csawsome.ClickWritingClassesButton()

    
  });

  test('TC - 6. Arrays', async ({ csawsome, page }) => {

    await csawsome.NavigateToTeamCoursesPage();
    
    await expect(csawsome.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await csawsome.ClickOnCreateNewTeamBtn();
    await csawsome.ClickOnCSawesome();
    await csawsome.FillTeamNameTxtBox();
    await csawsome.Submitbtn();

     await page.waitForTimeout(60000);

    await csawsome.ClickArraysButton()
    await page.waitForTimeout(5000);


    const noOfFolders = 22;
    const targetTextElement = await page.locator(".text-3xl.font-bold");

    for (let i = 7; i <= noOfFolders; i++) {
      const xpath = `(//div[contains(@class, '_root_yw9yb_1')]/div/div/div/span[2])[${i}]`;
      const element = await page.locator(`xpath=${xpath}`);

      if (await element.count() > 0) {

        await element.click();
        await page.waitForTimeout(2000);
        const targetText = await targetTextElement.textContent();
        const text = await element.textContent();
        
        await expect(text).toBe(targetText);
        console.log(`Element ${i} text:`, text);
      } else {
        console.log(`Element ${i} not found`);
      }
    }

    await csawsome.ClickArraysButton()

    
  });

  test('TC - 7. ArrayList', async ({ csawsome, page }) => {

    await csawsome.NavigateToTeamCoursesPage();
    
    await expect(csawsome.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await csawsome.ClickOnCreateNewTeamBtn();
    await csawsome.ClickOnCSawesome();
    await csawsome.FillTeamNameTxtBox();
    await csawsome.Submitbtn();

     await page.waitForTimeout(60000);

    await csawsome.ClickArraysListButton()
    await page.waitForTimeout(5000);


    const noOfFolders = 36;
    const targetTextElement = await page.locator(".text-3xl.font-bold");

    for (let i = 8; i <= noOfFolders; i++) {
      const xpath = `(//div[contains(@class, '_root_yw9yb_1')]/div/div/div/span[2])[${i}]`;
      const element = await page.locator(`xpath=${xpath}`);

      if (await element.count() > 0) {

        await element.click();
        await page.waitForTimeout(2000);
        const targetText = await targetTextElement.textContent();
        const text = await element.textContent();
        
        await expect(text).toBe(targetText);
        console.log(`Element ${i} text:`, text);
      } else {
        console.log(`Element ${i} not found`);
      }
    }

    await csawsome.ClickArraysListButton()

    
  });

  test('TC - 8. 2DArrays', async ({ csawsome, page }) => {

    await csawsome.NavigateToTeamCoursesPage();
    
    await expect(csawsome.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await csawsome.ClickOnCreateNewTeamBtn();
    await csawsome.ClickOnCSawesome();
    await csawsome.FillTeamNameTxtBox();
    await csawsome.Submitbtn();

     await page.waitForTimeout(60000);

    await csawsome.ClickTwoDArraysButton()
    await page.waitForTimeout(5000);


    const noOfFolders = 34;
    const targetTextElement = await page.locator(".text-3xl.font-bold");

    for (let i = 9; i <= noOfFolders; i++) {
      const xpath = `(//div[contains(@class, '_root_yw9yb_1')]/div/div/div/span[2])[${i}]`;
      const element = await page.locator(`xpath=${xpath}`);

      if (await element.count() > 0) {

        await element.click();
        await page.waitForTimeout(2000);
        const targetText = await targetTextElement.textContent();
        const text = await element.textContent();
        
        await expect(text).toBe(targetText);
        console.log(`Element ${i} text:`, text);
      } else {
        console.log(`Element ${i} not found`);
      }
    }

    await csawsome.ClickTwoDArraysButton()

    
  });

  test('TC - 9. Inheritence', async ({ csawsome, page }) => {

    await csawsome.NavigateToTeamCoursesPage();
    
    await expect(csawsome.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await csawsome.ClickOnCreateNewTeamBtn();
    await csawsome.ClickOnCSawesome();
    await csawsome.FillTeamNameTxtBox();
    await csawsome.Submitbtn();

     await page.waitForTimeout(60000);

    await csawsome.ClickInheritenceButton()
    await page.waitForTimeout(5000);


    const noOfFolders = 31;
    const targetTextElement = await page.locator(".text-3xl.font-bold");

    for (let i = 10; i <= noOfFolders; i++) {
      const xpath = `(//div[contains(@class, '_root_yw9yb_1')]/div/div/div/span[2])[${i}]`;
      const element = await page.locator(`xpath=${xpath}`);

      if (await element.count() > 0) {

        await element.click();
        await page.waitForTimeout(2000);
        const targetText = await targetTextElement.textContent();
        const text = await element.textContent();
        
        await expect(text).toBe(targetText);
        console.log(`Element ${i} text:`, text);
      } else {
        console.log(`Element ${i} not found`);
      }
    }

    await csawsome.ClickInheritenceButton()

    
  });

  test('TC - 10. Recursion', async ({ csawsome, page }) => {

    await csawsome.NavigateToTeamCoursesPage();
    
    await expect(csawsome.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await csawsome.ClickOnCreateNewTeamBtn();
    await csawsome.ClickOnCSawesome();
    await csawsome.FillTeamNameTxtBox();
    await csawsome.Submitbtn();

     await page.waitForTimeout(60000);

    await csawsome.ClickRecursionButton()
    await page.waitForTimeout(5000);


    const noOfFolders = 23;
    const targetTextElement = await page.locator(".text-3xl.font-bold");

    for (let i = 11; i <= noOfFolders; i++) {
      const xpath = `(//div[contains(@class, '_root_yw9yb_1')]/div/div/div/span[2])[${i}]`;
      const element = await page.locator(`xpath=${xpath}`);

      if (await element.count() > 0) {

        await element.click();
        await page.waitForTimeout(2000);
        const targetText = await targetTextElement.textContent();
        const text = await element.textContent();
        
        await expect(text).toBe(targetText);
        console.log(`Element ${i} text:`, text);
      } else {
        console.log(`Element ${i} not found`);
      }
    }

    await csawsome.ClickRecursionButton()

    
  });

  test('TC - 11. Post Test and Survey', async ({ csawsome, page }) => {

    await csawsome.NavigateToTeamCoursesPage();
    
    await expect(csawsome.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await csawsome.ClickOnCreateNewTeamBtn();
    await csawsome.ClickOnCSawesome();
    await csawsome.FillTeamNameTxtBox();
    await csawsome.Submitbtn();

     await page.waitForTimeout(60000);

    await csawsome.ClickPostTestAndSurveyButton()
    await page.waitForTimeout(5000);


    const noOfFolders = 12;
    const targetTextElement = await page.locator(".text-3xl.font-bold");

    for (let i = 12; i <= noOfFolders; i++) {
      const xpath = `(//div[contains(@class, '_root_yw9yb_1')]/div/div/div/span[2])[${i}]`;
      const element = await page.locator(`xpath=${xpath}`);

      if (await element.count() > 0) {

        await element.click();
        await page.waitForTimeout(2000);
        const targetText = await targetTextElement.textContent();
        const text = await element.textContent();
        
        await expect(text).toBe(targetText);
        console.log(`Element ${i} text:`, text);
      } else {
        console.log(`Element ${i} not found`);
      }
    }

    await csawsome.ClickPostTestAndSurveyButton()

    
  });

  test('TC - 12. Preparing For Exams', async ({ csawsome, page }) => {

    await csawsome.NavigateToTeamCoursesPage();
    
    await expect(csawsome.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await csawsome.ClickOnCreateNewTeamBtn();
    await csawsome.ClickOnCSawesome();
    await csawsome.FillTeamNameTxtBox();
    await csawsome.Submitbtn();

     await page.waitForTimeout(60000);

    await csawsome.ClickPrepareForExamButton()
    await page.waitForTimeout(5000);


    const noOfFolders = 19;
    const targetTextElement = await page.locator(".text-3xl.font-bold");

    for (let i = 13; i <= noOfFolders; i++) {
      const xpath = `(//div[contains(@class, '_root_yw9yb_1')]/div/div/div/span[2])[${i}]`;
      const element = await page.locator(`xpath=${xpath}`);

      if (await element.count() > 0) {

        await element.click();
        await page.waitForTimeout(2000);
        const targetText = await targetTextElement.textContent();
        const text = await element.textContent();
        
        await expect(text).toBe(targetText);
        console.log(`Element ${i} text:`, text);
      } else {
        console.log(`Element ${i} not found`);
      }
    }

    await csawsome.ClickPrepareForExamButton()

    
  });

  test('TC - 13. Timed Multiple Choice Exam', async ({ csawsome, page }) => {

    await csawsome.NavigateToTeamCoursesPage();
    
    await expect(csawsome.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await csawsome.ClickOnCreateNewTeamBtn();
    await csawsome.ClickOnCSawesome();
    await csawsome.FillTeamNameTxtBox();
    await csawsome.Submitbtn();

     await page.waitForTimeout(60000);

    await csawsome.ClickTimedMCQButton()
    await page.waitForTimeout(5000);


    const noOfFolders = 18;
    const targetTextElement = await page.locator(".text-3xl.font-bold");

    for (let i = 14; i <= noOfFolders; i++) {
      const xpath = `(//div[contains(@class, '_root_yw9yb_1')]/div/div/div/span[2])[${i}]`;
      const element = await page.locator(`xpath=${xpath}`);

      if (await element.count() > 0) {

        await element.click();
        await page.waitForTimeout(2000);
        const targetText = await targetTextElement.textContent();
        const text = await element.textContent();
        
        await expect(text).toBe(targetText);
        console.log(`Element ${i} text:`, text);
      } else {
        console.log(`Element ${i} not found`);
      }
    }

    await csawsome.ClickTimedMCQButton()

    
  });

  test('TC - 14. Mixed Up Code - Free Response Practice', async ({ csawsome, page }) => {

    await csawsome.NavigateToTeamCoursesPage();
    
    await expect(csawsome.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await csawsome.ClickOnCreateNewTeamBtn();
    await csawsome.ClickOnCSawesome();
    await csawsome.FillTeamNameTxtBox();
    await csawsome.Submitbtn();

     await page.waitForTimeout(60000);

    await csawsome.ClickMixedUpCodeButton()
    await page.waitForTimeout(5000);


    const noOfFolders = 19;
    const targetTextElement = await page.locator(".text-3xl.font-bold");

    for (let i = 15; i <= noOfFolders; i++) {
      const xpath = `(//div[contains(@class, '_root_yw9yb_1')]/div/div/div/span[2])[${i}]`;
      const element = await page.locator(`xpath=${xpath}`);

      if (await element.count() > 0) {

        await element.click();
        await page.waitForTimeout(2000);
        const targetText = await targetTextElement.textContent();
        const text = await element.textContent();
        
        await expect(text).toBe(targetText);
        console.log(`Element ${i} text:`, text);
      } else {
        console.log(`Element ${i} not found`);
      }
    }

    await csawsome.ClickMixedUpCodeButton()

    
  });

  test('TC - 15. Free Response Practise', async ({ csawsome, page }) => {

    await csawsome.NavigateToTeamCoursesPage();
    
    await expect(csawsome.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await csawsome.ClickOnCreateNewTeamBtn();
    await csawsome.ClickOnCSawesome();
    await csawsome.FillTeamNameTxtBox();
    await csawsome.Submitbtn();

     await page.waitForTimeout(60000);

    await csawsome.ClickFreeResponsePractise()
    await page.waitForTimeout(5000);


    const noOfFolders = 29;
    const targetTextElement = await page.locator(".text-3xl.font-bold");

    for (let i = 16; i <= noOfFolders; i++) {
      const xpath = `(//div[contains(@class, '_root_yw9yb_1')]/div/div/div/span[2])[${i}]`;
      const element = await page.locator(`xpath=${xpath}`);

      if (await element.count() > 0) {

        await element.click();
        await page.waitForTimeout(2000);
        const targetText = await targetTextElement.textContent();
        const text = await element.textContent();
        
        await expect(text).toBe(targetText);
        console.log(`Element ${i} text:`, text);
      } else {
        console.log(`Element ${i} not found`);
      }
    }

    await csawsome.ClickFreeResponsePractise()

    
  });
  test('TC - 16. Stories', async ({ csawsome, page }) => {

    await csawsome.NavigateToTeamCoursesPage();
    
    await expect(csawsome.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await csawsome.ClickOnCreateNewTeamBtn();
    await csawsome.ClickOnCSawesome();
    await csawsome.FillTeamNameTxtBox();
    await csawsome.Submitbtn();

     await page.waitForTimeout(60000);

    await csawsome.ClickStories()
    await page.waitForTimeout(5000);


    const noOfFolders = 32;
    const targetTextElement = await page.locator(".text-3xl.font-bold");

    for (let i = 17; i <= noOfFolders; i++) {
      const xpath = `(//div[contains(@class, '_root_yw9yb_1')]/div/div/div/span[2])[${i}]`;
      const element = await page.locator(`xpath=${xpath}`);

      if (await element.count() > 0) {

        await element.click();
        await page.waitForTimeout(2000);
        const targetText = await targetTextElement.textContent();
        const text = await element.textContent();
        
        // await expect(text).toBe(targetText);
        console.log(`Element ${i} text:`, text);
      } else {
        console.log(`Element ${i} not found`);
      }
    }

    await csawsome.ClickStories()

    
  });

});
