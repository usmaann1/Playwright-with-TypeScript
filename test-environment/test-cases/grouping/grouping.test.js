const { chromium } = require('playwright');
const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports');
const { test, expect } = require('../../../module-imports/testFixtures.imports');
import groupingData from '../../test-assets/test-data-files/grouping/grouping-testData.json';
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";

test.describe('TestSuite: Grouping', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.NavigateToLoginPage();
        await loginPage.fillCredentialsAndLogin(Credentials.EMAIL_USMAN, Credentials.PASSWORD_USMAN);
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

        const InviteLink = await page.evaluate(async () => {
            // Access clipboard content
            return await navigator.clipboard.readText();
            });

        await grouping.closeinvitestudentspopup();
        await grouping.publishassignmentbutton();


        // Open a new page for student 1
        const browser1 = await chromium.launch();
        const newPage = await browser1.newPage();

        // Open a new page for student 2

        const browser2 = await chromium.launch();
        const newPage2 = await browser2.newPage();

        await newPage.goto(InviteLink);
        await newPage.bringToFront(); // Ensure the new page is focused

        await newPage2.goto(InviteLink);
        await newPage2.bringToFront(); // Ensure the new page is focused

        // fill login for first student 
        await grouping.clickLoginbutton(newPage);
        await grouping.fillstudentsignin(newPage, groupingData.Student1Email, groupingData.Student1Password);
        await grouping.clickfinishbutton(newPage);

        // fill login for second student 
        await grouping.clickLoginbutton(newPage2);
        await grouping.fillstudentsignin_2(newPage2, groupingData.Student2Email, groupingData.Student2Password);
        await grouping.clickfinishbutton(newPage2);


        grouping.ClickInitiliazeJuiceMindIDE(newPage);
        await page.waitForTimeout(5000);

        //Verify new project title 

        const myElementLocator = page.locator(groupingData.CreateNewProjectDiv);

        await expect(myElementLocator).toHaveText(groupingData.CreateNewProjectText);

        
        grouping.FillProjectNameTextBox(groupingData.ProjectName);
        await page.waitForTimeout(5000);

        grouping.ClickProjectTypeDropDown();
        await page.waitForTimeout(5000);

        grouping.ClickProjectTypeJava();
        await page.waitForTimeout(5000);

        grouping.ClickGroupProjectToggle()
        await page.waitForTimeout(5000);

        grouping.ClickAddGroup();
        await page.waitForTimeout(5000);

        grouping.ClickAddGroup();

        //Verify Unassigned Student 1 Email 

        const stdName_1 = page.locator(groupingData.GroupedStudentEmail);

        await expect(stdName_1).toHaveText(groupingData.StudentEmailText);

        //Verify Unassigned Student 2 Email 

        const stdName_2 = page.locator(groupingData.GroupedStudentEmail_2);

        await expect(stdName_2).toHaveText(groupingData.StudentEmailText_2);

        //Verify two groups boxes appear

        await page.waitForTimeout(5000);

        const locator = page.locator(groupingData.GroupBoxes);
        const count = await locator.count();
        expect(count).toBe(2);

        await grouping.ClickCrossGroupIcon();
        await page.waitForTimeout(5000);

        //Verify one group left
        const count_1 = await locator.count();
        expect(count_1).toBe(1);

        //drag and drop student
        
        await page.locator(groupingData.GroupedStudentEmail).hover();
        await page.mouse.down();
        await page.locator(groupingData.GroupBoxes).hover();
        await page.mouse.up();

        await page.waitForTimeout(2000);
        await grouping.ClickSubmitBtn()


        
    });
});
