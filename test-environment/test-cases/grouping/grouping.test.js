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

        // Adding new assignment in a class
        await grouping.AddNewItemBtn();
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
        const copiedLink = 'https://play.juicemind.com/joinTeam/9zd1eZoYFenBQtuYhzF2';
        console.log('Copied link:', copiedLink);

        await newPage.goto(copiedLink);
        await newPage.bringToFront(); // Ensure the new page is focused

        await grouping.clickLoginbutton(newPage);
        await grouping.fillstudentsignin(newPage);
        await grouping.clickfinishbutton(newPage);

        grouping.ClickInitiliazeJuiceMindIDE();
        grouping.FillProjectNameTextBox();
        grouping.ClickProjectTypeDropDown();
        grouping.ClickProjectTypeJava();
        grouping.ClickGroupProjectToggle()

        
    });
});
