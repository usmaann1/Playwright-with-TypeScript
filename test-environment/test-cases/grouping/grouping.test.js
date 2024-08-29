const { chromium } = require('playwright');
const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports');
const { test, expect } = require('../../../module-imports/testFixtures.imports');
import groupingData from '../../test-assets/test-data-files/grouping/grouping-testData.json';

require('dotenv').config();

test.describe('TestSuite: Grouping', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.NavigateToLoginPage();
        await loginPage.fillCredentialsAndLogin(process.env.EMAIL_USMAN, process.env.PASSWORD_USMAN);
    });

    test('TC1 - Validate Grouping', async ({ grouping, page }) => {
        await grouping.NavigateToTeamCoursesPage();
        
        await grouping.ClickOnCreateNewTeamBtn();
        await grouping.ClickOnStartFromScratch();
        await grouping.FillTeamNameTxtBox();
        await grouping.Submitbtn();
        await expect.toHaveText(groupingData.NoData && groupingData.ClassName);

        await grouping.CreateAssignmentbtn();
        await grouping.CodingAssignmentbtn();
        await grouping.CodingAssignment();
        await grouping.AssignmentCreateBtn();

        // Invite Students
        await grouping.InviteStudentsbtn();
        await grouping.CopyinviteStudentsbtn();
        await grouping.closeinvitestudentspopup();
        await grouping.publishassignmentbutton();


        // Open a new page
        const browser = await chromium.launch();
        const newPage = await browser.newPage();

        // Evaluate clipboard content within the new page context
        const copiedLink = 'https://play.juicemind.com/joinTeam/0lViTkxfxCGOmZt33fYc';
        console.log('Copied link:', copiedLink);

        await newPage.goto(copiedLink);
        await newPage.bringToFront(); // Ensure the new page is focused

        await grouping.clickLoginbutton(newPage);
        await grouping.fillstudentsignin(newPage);
        await grouping.clickfinishbutton(newPage);

        grouping.ClickInitiliazeJuiceMindIDE(newPage);
        await page.waitForTimeout(5000);

        //Verify new project title 

        const myElementLocator = page.locator(groupingData.CreateNewProjectDiv);

        await expect(myElementLocator).toHaveText(groupingData.CreateNewProjectText);

        
        grouping.FillProjectNameTextBox();
        await page.waitForTimeout(5000);

        grouping.ClickProjectTypeDropDown();
        await page.waitForTimeout(5000);

        grouping.ClickProjectTypeJava();
        await page.waitForTimeout(5000);

        grouping.ClickGroupProjectToggle()
        await page.waitForTimeout(5000);

        grouping.ClickAddGroup();
        await page.waitForTimeout(5000);

        //Verify Unassigned Student Email 

        const stdName = page.locator(groupingData.GroupedStudentEmail);

        await expect(stdName).toHaveText(groupingData.StudentEmailText);

        await page.waitForTimeout(5000);

        await page.locator(stdName).dragTo('PlaceYourLocatorwhereyouwanttodrag');



        
    });
});
