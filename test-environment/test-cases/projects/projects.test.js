const { chromium } = require('playwright');
const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports');
const { test, expect } = require('../../../module-imports/testFixtures.imports');
import projectsData from '../../test-assets/test-data-files/projects/projects-testData.json';
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";

test.describe('TestSuite: Projects', () => {


  test.beforeEach(async ({ loginPage }) => {
    
    await loginPage.NavigateToLoginPage();
    await loginPage.fillCredentialsAndLogin(Credentials.EMAIL_USMAN, Credentials.PASSWORD_USMAN);
  });

  test('TC1 - Validate Projects', async ({ projects, page }) => {
    
    await projects.ClickProjects();
    await projects.ClickPictureLabButton();
    await projects.FillTextInParagraph(projectsData.PictureLabText)
    await projects.ClickGotIt();
    await page.reload();
    await projects.ClickProjects();
    await projects.ClickPictureLabButton();

   //verify heading
    const element = await page.locator(projectsData.PictureLabDiv);

    await expect(element).not.toHaveText(projectsData.PictureLabText);

  });

  test('TC2 - Validate Projects', async ({ projects, page }) => {
    
    await projects.ClickProjects();
    await projects.ClickPictureLabButton();

    await projects.FillTextInParagraph(projectsData.PictureLabText)
    await projects.ClickGotIt();
    await projects.ClickStartCourseButton();
    await projects.ClickTeamDropDown();
    await projects.SelectTeam();
    await projects.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(projectsData.PictureLabDiv);

    await page.waitForTimeout(20000);

    await expect(element).toHaveText("Introduction");

  });

  

});
