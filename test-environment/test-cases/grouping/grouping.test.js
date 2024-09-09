const { chromium } = require('playwright');
const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports');
const { test, expect } = require('../../../module-imports/testFixtures.imports');
import groupingData from '../../test-assets/test-data-files/grouping/grouping-testData.json';
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";
import locators from "../../../pages/grouping/grouping.locator.json";

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

        // Open a new page for student 3
        const browser3 = await chromium.launch();
        const newPage3 = await browser1.newPage();
 
        // Open a new page for student 4
        const browser4 = await chromium.launch();
        const newPage4 = await browser2.newPage();

        await newPage.goto(InviteLink);
        await newPage.bringToFront(); // Ensure the new page is focused

        await newPage2.goto(InviteLink);
        await newPage2.bringToFront(); // Ensure the new page is focused

        await newPage3.goto(InviteLink);
        await newPage3.bringToFront(); // Ensure the new page is focused

        await newPage4.goto(InviteLink);
        await newPage4.bringToFront(); // Ensure the new page is focused

        // Fill login for first student
        await grouping.clickLoginbutton(newPage);
        await grouping.fillstudentsignin(newPage, groupingData.Student1Email, groupingData.Student1Password);
        await grouping.clickfinishbutton(newPage);

        // Fill login for second student
        await grouping.clickLoginbutton(newPage2);
        await grouping.fillstudentsignin_2(newPage2, groupingData.Student2Email, groupingData.Student2Password);
        await grouping.clickfinishbutton(newPage2);

        // Fill login for third student
        await grouping.clickLoginbutton(newPage3);
        await grouping.fillstudentsignin(newPage3, groupingData.Student3Email, groupingData.Student3Password);
        await grouping.clickfinishbutton(newPage3);

        // Fill login for fourth student
        await grouping.clickLoginbutton(newPage4);
        await grouping.fillstudentsignin_2(newPage4, groupingData.Student4Email, groupingData.Student4Password);
        await grouping.clickfinishbutton(newPage4);

        grouping.ClickInitiliazeJuiceMindIDE(newPage);
        await page.waitForTimeout(5000);

        // Verify new project title
        const myElementLocator = page.locator(groupingData.CreateNewProjectDiv);
        await expect(myElementLocator).toHaveText(groupingData.CreateNewProjectText);

        grouping.FillProjectNameTextBox(groupingData.ProjectName);
        await page.waitForTimeout(5000);

        grouping.ClickProjectTypeDropDown();
        await page.waitForTimeout(5000);

        grouping.ClickProjectTypeJava();
        await page.waitForTimeout(5000);

        grouping.ClickGroupProjectToggle();
        await page.waitForTimeout(5000);

        grouping.ClickAddGroup();
        await page.waitForTimeout(5000);

        await grouping.ClickAddGroup();

        // Verify Unassigned Student 1 Email
        const stdName_1 = page.locator(groupingData.GroupedStudentEmail);
        await expect(stdName_1).toHaveText(groupingData.StudentEmailText);

        // Verify Unassigned Student 2 Email
        const stdName_2 = page.locator(groupingData.GroupedStudentEmail_2);
        await expect(stdName_2).toHaveText(groupingData.StudentEmailText_2);

        // Verify two groups boxes appear
        await page.waitForTimeout(5000);
        const locator = page.locator(groupingData.GroupBoxes);
        const count = await locator.count();
        expect(count).toBe(2);

        await grouping.ClickCrossGroupIcon();
        await page.waitForTimeout(5000);

        // Verify one group left
        const count_1 = await locator.count();
        expect(count_1).toBe(1);

        await grouping.ClickAddGroup();
        await grouping.waitForFunction();

        // Drag and drop student 1
        await page.locator(groupingData.GroupedStudentEmail).hover();
        await page.mouse.down();
        await grouping.waitForFunction();
        await page.locator(groupingData.GroupBox_1).hover();
        await page.mouse.up();
        await page.waitForTimeout(2000);

        // Drag and drop student 2
        await page.locator(groupingData.GroupedStudentEmail_2).hover();
        await page.mouse.down();
        await grouping.waitForFunction();
        await page.locator(groupingData.GroupBox_1).hover();
        await page.mouse.up();
        await page.waitForTimeout(2000);

        // Drag and drop student 3
        await page.locator(groupingData.GroupedStudentEmail_3).hover();
        await page.mouse.down();
        await grouping.waitForFunction();
        await page.locator(groupingData.GroupBox_2).hover();
        await page.mouse.up();
        await grouping.waitForFunction();

        // Drag and drop student 4
        await page.locator(groupingData.GroupedStudentEmail_4).hover();
        await page.mouse.down();
        await page.locator(groupingData.GroupBox_2).hover();
        await page.mouse.up();

        await grouping.ClickSubmitBtn();
        await grouping.waitForFunction();
        await grouping.ClickCodeStarterButton(newPage);
        await page.waitForTimeout(10000);

        await grouping.fillCodeEditor(newPage, groupingData.Code);
        await grouping.waitForFunction();

        const element_1 = await newPage2.locator(locators.CodeEditorTargetLineLocatorSecondStd);
        const element_2 = await newPage3.locator(locators.CodeEditorTargetLineLocatorSecondStd);
        const element_3 = await newPage4.locator(locators.CodeEditorTargetLineLocatorSecondStd);

        await expect(element_1).toContainText(groupingData.Code);

        await grouping.ClickCodeStarterButton(newPage3);
        await page.waitForTimeout(10000);

        await expect(element_2).not.toContainText(groupingData.Code);
        await expect(element_3).not.toContainText(groupingData.Code);



    });
});
