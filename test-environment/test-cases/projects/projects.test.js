const { chromium } = require('playwright');
const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports');
const { test, expect } = require('../../../module-imports/testFixtures.imports');
import projectsData from '../../test-assets/test-data-files/projects/projects-testData.json';
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";
import { FAILED_TEST_CASES } from '../../../failed-test-cases/failed-test-cases';

test.describe('TestSuite: Projects', () => {


  test.beforeEach(async ({ loginPage }, testInfo) => {
    if (FAILED_TEST_CASES.length !== 0) {
      if (!FAILED_TEST_CASES.includes(testInfo.title)) {
        test.skip('Test case not included in the list');
      }
    }
    await loginPage.NavigateToLoginPage();
    await loginPage.fillCredentialsAndLogin(Credentials.EMAIL_USMAN, Credentials.PASSWORD_USMAN);
  });

  test('Usman TC1=> Verify user is not able to write anything on Preview Projects', async ({ projects, page }) => {
    
    await projects.ClickProjects();
    await projects.ClickPictureLabButton();
    await projects.FillTextInParagraph(projectsData.PictureLabText)
    await projects.ClickGotIt();
    await page.reload();
    await page.waitForTimeout(40000);
    await projects.ClickProjects();
    await projects.ClickPictureLabButton();

   //verify heading
    const element = await page.locator(projectsData.PictureLabDiv);
    await projects.WaitforLocator(page);
    await expect(element).not.toHaveText(projectsData.PictureLabText);

  });

  test('Usman TC2=> Verify Projects title after creating a Course', async ({ projects, page }) => {
    
    await projects.ClickProjects();
    await projects.ClickPictureLabButton();

    await projects.FillTextInParagraph(projectsData.PictureLabText)
    await projects.ClickGotIt();
    await projects.ClickStartCourseButton();
    await projects.ClickTeamDropDown();
    await projects.SelectTeam();
    await projects.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(projectsData.Intordiv);

    await page.waitForTimeout(20000);
    await projects.WaitforLocator(page);
    await expect(element).toBeVisible("Introduction");

  });

  

});
