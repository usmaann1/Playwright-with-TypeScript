const { chromium } = require('playwright');
const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports');
const { test, expect } = require('../../../module-imports/testFixtures.imports');
import LessonBuilderTestData from '../../test-assets/test-data-files/lesson-builder/lesson-builder-testData.json';
import LessonBuilderLocators from '../../../pages/Lesson-builder/lesson-builder.locator.json';
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";
import { FAILED_TEST_CASES } from '../../../failed-test-cases/failed-test-cases';

test.describe('TestSuite: Lesson Builder', () => {


  test.beforeEach(async ({ loginPage }) => {
    if (FAILED_TEST_CASES.length !== 0) {
      if (!FAILED_TEST_CASES.includes(testInfo.title)) {
        test.skip('Test case not included in the list');
      }
    }
    await loginPage.NavigateToLoginPage();
    await loginPage.fillCredentialsAndLogin(Credentials.EMAIL_USMAN, Credentials.PASSWORD_USMAN);
  });

  test('Usman TC1=> Verify presentation mode functionality on teacher side, Verify Students visibility on teacher side once they join, Verify student cant see assignment until it publish, Verify student can see assignement once it publish, Verify multiple assignments can create in a call and their visiblity on student side'
    , async ({ lessonBuilder, page }) => {

    await lessonBuilder.NavigateToTeamCoursesPage();
    
    // Ensure "Create New Team" button is visible before interaction
    await expect(lessonBuilder.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await lessonBuilder.ClickOnCreateNewTeamBtn();
    await lessonBuilder.ClickOnStartFromScratch();
    await page.waitForTimeout(5000);
    await lessonBuilder.FillTeamNameTxtBox();
    await lessonBuilder.Submitbtn();
    await expect.toHaveText(LessonBuilderTestData.NoData && LessonBuilderTestData.ClassName);
    await lessonBuilder.CreateAssignmentbtn();
    await lessonBuilder.CodingAssignmentbtn();
    await lessonBuilder.CodingAssignment();
    await lessonBuilder.AssignmentCreateBtn();

    //adding new assignment in a class
    await lessonBuilder.AddNewItemBtn();
    await lessonBuilder.CodingAssignmentbtn();
    await lessonBuilder.CodingAssignment();
    await lessonBuilder.AssignmentCreateBtn();

    // Presentation Mode
    await lessonBuilder.waitForFunction();
    await lessonBuilder.PresentationMode()
    await lessonBuilder.GotItButton();
    await expect.toHaveText(LessonBuilderTestData.ViewStuPreview_btn);
    await lessonBuilder.ExitStudentView();
  

    // Invite Students
    await lessonBuilder.InviteStudentsbtn();
    await lessonBuilder.CopyinviteStudentsbtn();

    const InviteLink = await page.evaluate(async () => {
      // Access clipboard content
      return await navigator.clipboard.readText();
      });

      await lessonBuilder.closeinvitestudentspopup();
      await page.waitForTimeout(5000);
      await lessonBuilder.publishassignmentbutton();

      // Open a new page
      const browser = await chromium.launch();
      const newPage = await browser.newPage(); 

      // Navigate to the copied link
      await newPage.goto(InviteLink);
      await newPage.bringToFront(); // Ensure the new page is focused

      await lessonBuilder.clickLoginbutton(newPage);

      await lessonBuilder.fillstudentsignin(newPage, LessonBuilderTestData.Student1Email, LessonBuilderTestData.Student1Password);
      await lessonBuilder.clickfinishbutton(newPage);

      await newPage.click(LessonBuilderTestData.ClickAssignment)

      //verify heading
      const element = await newPage.locator(LessonBuilderTestData.AssignmentHeadingDiv);

      await expect (element).toHaveText(LessonBuilderTestData.AssignmentHeadingText);

      //verify assignment locked

      await lessonBuilder.publishassignmentbutton();

      const element2 = await newPage.locator(LessonBuilderTestData.AssignmentLockedDiv);

      await expect (element2).toHaveText(LessonBuilderTestData.AssignmentLockedText);


  });

  test('Usman TC2=> Verify Student is not able to submit an assignment after due date'
    , async ({ lessonBuilder, page }) => {

    await lessonBuilder.NavigateToTeamCoursesPage();
      
      // Ensure "Create New Team" button is visible before interaction
      await expect(lessonBuilder.CreateNewTeamBtn).toBeVisible();
      
      // Interact with elements on the page
      await lessonBuilder.ClickOnCreateNewTeamBtn();
      await lessonBuilder.ClickOnStartFromScratch();
      await page.waitForTimeout(5000);
      await lessonBuilder.FillTeamNameTxtBox();
      await lessonBuilder.Submitbtn();
      await expect.toHaveText(LessonBuilderTestData.NoData && LessonBuilderTestData.ClassName);
      await lessonBuilder.CreateAssignmentbtn();
      await lessonBuilder.CodingAssignmentbtn();
      await lessonBuilder.CodingAssignment();
      await lessonBuilder.AssignmentCreateBtn();

      //adding new assignment in a class
      await lessonBuilder.AddNewItemBtn();
      await lessonBuilder.CodingAssignmentbtn();
      await lessonBuilder.CodingAssignment();
      await lessonBuilder.AssignmentCreateBtn();

      // Presentation Mode
      await lessonBuilder.waitForFunction();
      await lessonBuilder.PresentationMode()
      await lessonBuilder.GotItButton();
      await expect.toHaveText(LessonBuilderTestData.ViewStuPreview_btn);
      await lessonBuilder.ExitStudentView();
    

      // Invite Students
      await lessonBuilder.InviteStudentsbtn();
      await lessonBuilder.CopyinviteStudentsbtn();

      const InviteLink = await page.evaluate(async () => {
        // Access clipboard content
        return await navigator.clipboard.readText();
        });

      await lessonBuilder.closeinvitestudentspopup();
      await page.waitForTimeout(5000);
      await lessonBuilder.publishassignmentbutton();

      // Open a new page
      const browser = await chromium.launch();
      const newPage = await browser.newPage(); 

      // Navigate to the copied link
      await newPage.goto(InviteLink);
      await newPage.bringToFront(); // Ensure the new page is focused

      await lessonBuilder.clickLoginbutton(newPage);

      await lessonBuilder.fillstudentsignin(newPage, LessonBuilderTestData.Student1Email, LessonBuilderTestData.Student1Password);
      await lessonBuilder.clickfinishbutton(newPage);

      await newPage.click(LessonBuilderTestData.ClickAssignment)

      await page.reload();

      await lessonBuilder.ClickInitiliazeJuiceMindIDE(newPage);
      await page.waitForTimeout(5000);


      await lessonBuilder.FillProjectNameTextBox(LessonBuilderTestData.ProjectName);
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeDropDown();
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeJava();
      await page.waitForTimeout(5000);

      await lessonBuilder.Submitbtn();

      await lessonBuilder.DueDateButton();

      await lessonBuilder.CalendarButton();


      const now = new Date();

      let currentHour = now.getHours();

      let previousHour = 0;

      let currentHour12 = currentHour % 12 || 12; 

      if(currentHour12 == 1)
      {
        previousHour = 12
      }
      else
      {
        previousHour = currentHour12-1;
      }
      
      await lessonBuilder.SelectExpiredDueDate(previousHour, page)

      await lessonBuilder.CalendarButton();

      await lessonBuilder.ClickCodeStarterButton(newPage)

      await lessonBuilder.ClickSubmitAssignmentBtn(newPage)

      await lessonBuilder.ClickWarningSubmitAssignmentBtn(newPage)

      //code here for late submission

  });

  test('Usman TC3=> Verify Student is able to submit the assignment after due date and student can resubmit the assignment with unlimited time'
    , async ({ lessonBuilder, page }) => {

    await lessonBuilder.NavigateToTeamCoursesPage();
      
      // Ensure "Create New Team" button is visible before interaction
      await expect(lessonBuilder.CreateNewTeamBtn).toBeVisible();
      
      // Interact with elements on the page
      await lessonBuilder.ClickOnCreateNewTeamBtn();
      await lessonBuilder.ClickOnStartFromScratch();
      await page.waitForTimeout(5000);
      await lessonBuilder.FillTeamNameTxtBox();
      await lessonBuilder.Submitbtn();
      await expect.toHaveText(LessonBuilderTestData.NoData && LessonBuilderTestData.ClassName);
      await lessonBuilder.CreateAssignmentbtn();
      await lessonBuilder.CodingAssignmentbtn();
      await lessonBuilder.CodingAssignment();
      await lessonBuilder.AssignmentCreateBtn();

      //adding new assignment in a class
      await lessonBuilder.AddNewItemBtn();
      await lessonBuilder.CodingAssignmentbtn();
      await lessonBuilder.CodingAssignment();
      await lessonBuilder.AssignmentCreateBtn();

      // Presentation Mode
      await lessonBuilder.waitForFunction();
      await lessonBuilder.PresentationMode()
      await lessonBuilder.GotItButton();
      await expect.toHaveText(LessonBuilderTestData.ViewStuPreview_btn);
      await lessonBuilder.ExitStudentView();
    

      // Invite Students
      await lessonBuilder.InviteStudentsbtn();
      await lessonBuilder.CopyinviteStudentsbtn();

      const InviteLink = await page.evaluate(async () => {
        // Access clipboard content
        return await navigator.clipboard.readText();
        });

      await lessonBuilder.closeinvitestudentspopup();
      await page.waitForTimeout(5000);
      await lessonBuilder.publishassignmentbutton();

      // Open a new page
      const browser = await chromium.launch();
      const newPage = await browser.newPage(); 

      // Navigate to the copied link
      await newPage.goto(InviteLink);
      await newPage.bringToFront(); // Ensure the new page is focused

      await lessonBuilder.clickLoginbutton(newPage);

      await lessonBuilder.fillstudentsignin(newPage, LessonBuilderTestData.Student1Email, LessonBuilderTestData.Student1Password);
      await lessonBuilder.clickfinishbutton(newPage);

      await newPage.click(LessonBuilderTestData.ClickAssignment)

      await page.reload();

      await lessonBuilder.ClickFirstAssignment(page)
      await page.waitForTimeout(5000);
      await lessonBuilder.publishassignmentbutton();

      await lessonBuilder.ClickInitiliazeJuiceMindIDE(newPage);
      await page.waitForTimeout(5000);


      await lessonBuilder.FillProjectNameTextBox(LessonBuilderTestData.ProjectName);
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeDropDown();
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeJava();
      await page.waitForTimeout(5000);

      await lessonBuilder.Submitbtn();
      await lessonBuilder.DueDateButton();
      await lessonBuilder.ClickLateSubmissionToggle(page);     

      await lessonBuilder.CalendarButton();

      const now = new Date();
      let currentHour = now.getHours();

      let previousHour = 0;

      let currentHour12 = currentHour % 12 || 12; 

      if(currentHour12 == 1)
      {
        previousHour = 12
      }
      else
      {
        previousHour = currentHour12-1;
      }
      
      await lessonBuilder.SelectExpiredDueDate(previousHour, page)

      await lessonBuilder.CalendarButton();

      await lessonBuilder.ClickFirstAssignment(newPage)

      await lessonBuilder.ClickCodeStarterButton(newPage)

      await lessonBuilder.ClickSubmitAssignmentBtn(newPage)

      await lessonBuilder.ClickWarningSubmitAssignmentBtn(newPage)

      const element = await newPage.locator(LessonBuilderLocators.DisabledResubmitButton);

      await expect(element).toBeVisible();

      await lessonBuilder.ClickLateReSubmissionToggle(page);

      await newPage.reload();

      await expect(element).not.toBeVisible();

      await lessonBuilder.fillCodeEditor(newPage, LessonBuilderTestData.Code);
      await page.waitForTimeout(5000);
      await lessonBuilder.ClickReSubmitButton(newPage);

  });

  test('Usman TC4=> Verify Solution is visible before due date'
    , async ({ lessonBuilder, page }) => {

    await lessonBuilder.NavigateToTeamCoursesPage();
      
      // Ensure "Create New Team" button is visible before interaction
      await expect(lessonBuilder.CreateNewTeamBtn).toBeVisible();
      
      // Interact with elements on the page
      await lessonBuilder.ClickOnCreateNewTeamBtn();
      await lessonBuilder.ClickOnStartFromScratch();
      await page.waitForTimeout(5000);
      await lessonBuilder.FillTeamNameTxtBox();
      await lessonBuilder.Submitbtn();
      await expect.toHaveText(LessonBuilderTestData.NoData && LessonBuilderTestData.ClassName);
      await lessonBuilder.CreateAssignmentbtn();
      await lessonBuilder.CodingAssignmentbtn();
      await lessonBuilder.CodingAssignment();
      await lessonBuilder.AssignmentCreateBtn();

      //adding new assignment in a class
      await lessonBuilder.AddNewItemBtn();
      await lessonBuilder.CodingAssignmentbtn();
      await lessonBuilder.CodingAssignment();
      await lessonBuilder.AssignmentCreateBtn();

      // Presentation Mode
      await lessonBuilder.waitForFunction();
      await lessonBuilder.PresentationMode()
      await lessonBuilder.GotItButton();
      await expect.toHaveText(LessonBuilderTestData.ViewStuPreview_btn);
      await lessonBuilder.ExitStudentView();
    

      // Invite Students
      await lessonBuilder.InviteStudentsbtn();
      await lessonBuilder.CopyinviteStudentsbtn();

      const InviteLink = await page.evaluate(async () => {
        // Access clipboard content
        return await navigator.clipboard.readText();
        });

      await lessonBuilder.closeinvitestudentspopup();
      await page.waitForTimeout(5000);
      await lessonBuilder.publishassignmentbutton();

      // Open a new page
      const browser = await chromium.launch();
      const newPage = await browser.newPage(); 

      // Navigate to the copied link
      await newPage.goto(InviteLink);
      await newPage.bringToFront(); // Ensure the new page is focused

      await lessonBuilder.clickLoginbutton(newPage);

      await lessonBuilder.fillstudentsignin(newPage, LessonBuilderTestData.Student1Email, LessonBuilderTestData.Student1Password);
      await lessonBuilder.clickfinishbutton(newPage);

      await newPage.click(LessonBuilderTestData.ClickAssignment)

      await page.reload();

      await lessonBuilder.ClickFirstAssignment(page)
      await page.waitForTimeout(5000);
      await lessonBuilder.publishassignmentbutton();

      await lessonBuilder.ClickInitiliazeJuiceMindIDE(newPage);
      await page.waitForTimeout(5000);


      await lessonBuilder.FillProjectNameTextBox(LessonBuilderTestData.ProjectName);
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeDropDown();
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeJava();
      await page.waitForTimeout(5000);

      await lessonBuilder.Submitbtn();
      await lessonBuilder.DueDateButton();
      await lessonBuilder.ClickLateSubmissionToggle(page);     
      await lessonBuilder.ClickLateReSubmissionToggle(page);
      await lessonBuilder.ClickSolutionButton(page);
      await lessonBuilder.ClickCreateSolution(page);
      await lessonBuilder.ClickSolutionAvailableAfterSubmit(page);

      await lessonBuilder.CalendarButton();

      const now = new Date();
      let currentHour = now.getHours(); 

      let nextHour = 0;

      let currentHour12 = currentHour % 12 || 12; 

      if (currentHour12 == 12) {
        nextHour = 1;
      } else {
        nextHour = currentHour12 + 1;
      }
      
      await lessonBuilder.SelectExpiredDueDate(nextHour, page)

      await lessonBuilder.CalendarButton();

      await lessonBuilder.ClickFirstAssignment(newPage)

      await lessonBuilder.ClickCodeStarterButton(newPage)

      await lessonBuilder.ClickSubmitAssignmentBtn(newPage)

      await lessonBuilder.ClickWarningSubmitAssignmentBtn(newPage)
   
      await newPage.reload();

      const element = await newPage.locator(LessonBuilderLocators.SolutionButton);

      await expect(element).toBeVisible();


  });

  test('Usman TC5=> Verify Solution is visible after due date'
    , async ({ lessonBuilder, page }) => {

    await lessonBuilder.NavigateToTeamCoursesPage();
      
      // Ensure "Create New Team" button is visible before interaction
      await expect(lessonBuilder.CreateNewTeamBtn).toBeVisible();
      
      // Interact with elements on the page
      await lessonBuilder.ClickOnCreateNewTeamBtn();
      await lessonBuilder.ClickOnStartFromScratch();
      await page.waitForTimeout(5000);
      await lessonBuilder.FillTeamNameTxtBox();
      await lessonBuilder.Submitbtn();
      await expect.toHaveText(LessonBuilderTestData.NoData && LessonBuilderTestData.ClassName);
      await lessonBuilder.CreateAssignmentbtn();
      await lessonBuilder.CodingAssignmentbtn();
      await lessonBuilder.CodingAssignment();
      await lessonBuilder.AssignmentCreateBtn();

      //adding new assignment in a class
      await lessonBuilder.AddNewItemBtn();
      await lessonBuilder.CodingAssignmentbtn();
      await lessonBuilder.CodingAssignment();
      await lessonBuilder.AssignmentCreateBtn();

      // Presentation Mode
      await lessonBuilder.waitForFunction();
      await lessonBuilder.PresentationMode()
      await lessonBuilder.GotItButton();
      await expect.toHaveText(LessonBuilderTestData.ViewStuPreview_btn);
      await lessonBuilder.ExitStudentView();
    

      // Invite Students
      await lessonBuilder.InviteStudentsbtn();
      await lessonBuilder.CopyinviteStudentsbtn();

      const InviteLink = await page.evaluate(async () => {
        // Access clipboard content
        return await navigator.clipboard.readText();
        });

      await lessonBuilder.closeinvitestudentspopup();
      await page.waitForTimeout(5000);
      await lessonBuilder.publishassignmentbutton();

      // Open a new page
      const browser = await chromium.launch();
      const newPage = await browser.newPage(); 

      // Navigate to the copied link
      await newPage.goto(InviteLink);
      await newPage.bringToFront(); // Ensure the new page is focused

      await lessonBuilder.clickLoginbutton(newPage);

      await lessonBuilder.fillstudentsignin(newPage, LessonBuilderTestData.Student1Email, LessonBuilderTestData.Student1Password);
      await lessonBuilder.clickfinishbutton(newPage);

      await newPage.click(LessonBuilderTestData.ClickAssignment)

      await page.reload();

      await lessonBuilder.ClickFirstAssignment(page)
      await page.waitForTimeout(5000);
      await lessonBuilder.publishassignmentbutton();

      await lessonBuilder.ClickInitiliazeJuiceMindIDE(newPage);
      await page.waitForTimeout(5000);


      await lessonBuilder.FillProjectNameTextBox(LessonBuilderTestData.ProjectName);
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeDropDown();
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeJava();
      await page.waitForTimeout(5000);

      await lessonBuilder.Submitbtn();
      await lessonBuilder.DueDateButton();
      await lessonBuilder.ClickLateSubmissionToggle(page);     
      await lessonBuilder.ClickLateReSubmissionToggle(page);
      await lessonBuilder.ClickSolutionButton(page);
      await lessonBuilder.ClickCreateSolution(page);
      await lessonBuilder.ClickSolutionAvailableAfterDueDate(page);

      await lessonBuilder.CalendarButton();

      const now = new Date();
      let currentHour = now.getHours();

      let previousHour = 0;

      let currentHour12 = currentHour % 12 || 12; 

      if(currentHour12 == 1)
      {
        previousHour = 12
      }
      else
      {
        previousHour = currentHour12-1;
      }
      
      await lessonBuilder.SelectExpiredDueDate(previousHour, page)

      await lessonBuilder.CalendarButton();

      await lessonBuilder.ClickFirstAssignment(newPage)

      await lessonBuilder.ClickCodeStarterButton(newPage)

      await lessonBuilder.ClickSubmitAssignmentBtn(newPage)

      await lessonBuilder.ClickWarningSubmitAssignmentBtn(newPage)
   
      await newPage.reload();

      const element = await newPage.locator(LessonBuilderLocators.SolutionButton);

      await expect(element).toBeVisible();


  });

  test('Usman TC6=> Verify Solution is only visible after correct answer'
    , async ({ lessonBuilder, page }) => {

    await lessonBuilder.NavigateToTeamCoursesPage();
      
      // Ensure "Create New Team" button is visible before interaction
      await expect(lessonBuilder.CreateNewTeamBtn).toBeVisible();
      
      // Interact with elements on the page
      await lessonBuilder.ClickOnCreateNewTeamBtn();
      await lessonBuilder.ClickOnStartFromScratch();
      await page.waitForTimeout(5000);
      await lessonBuilder.FillTeamNameTxtBox();
      await lessonBuilder.Submitbtn();
      await expect.toHaveText(LessonBuilderTestData.NoData && LessonBuilderTestData.ClassName);
      await lessonBuilder.CreateAssignmentbtn();
      await lessonBuilder.CodingAssignmentbtn();
      await lessonBuilder.CodingAssignment();
      await lessonBuilder.AssignmentCreateBtn();

      //adding new assignment in a class
      await lessonBuilder.AddNewItemBtn();
      await lessonBuilder.CodingAssignmentbtn();
      await lessonBuilder.CodingAssignment();
      await lessonBuilder.AssignmentCreateBtn();

      // Presentation Mode
      await lessonBuilder.waitForFunction();
      await lessonBuilder.PresentationMode()
      await lessonBuilder.GotItButton();
      await expect.toHaveText(LessonBuilderTestData.ViewStuPreview_btn);
      await lessonBuilder.ExitStudentView();
    

      // Invite Students
      await lessonBuilder.InviteStudentsbtn();
      await lessonBuilder.CopyinviteStudentsbtn();

      const InviteLink = await page.evaluate(async () => {
        // Access clipboard content
        return await navigator.clipboard.readText();
        });

      await lessonBuilder.closeinvitestudentspopup();
      await page.waitForTimeout(5000);
      await lessonBuilder.publishassignmentbutton();

      // Open a new page
      const browser = await chromium.launch();
      const newPage = await browser.newPage(); 

      // Navigate to the copied link
      await newPage.goto(InviteLink);
      await newPage.bringToFront(); // Ensure the new page is focused

      await lessonBuilder.clickLoginbutton(newPage);

      await lessonBuilder.fillstudentsignin(newPage, LessonBuilderTestData.Student1Email, LessonBuilderTestData.Student1Password);
      await lessonBuilder.clickfinishbutton(newPage);

      await newPage.click(LessonBuilderTestData.ClickAssignment)

      await page.reload();

      await lessonBuilder.ClickFirstAssignment(page)
      await page.waitForTimeout(5000);
      await lessonBuilder.publishassignmentbutton();

      await lessonBuilder.ClickInitiliazeJuiceMindIDE(newPage);
      await page.waitForTimeout(5000);


      await lessonBuilder.FillProjectNameTextBox(LessonBuilderTestData.ProjectName);
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeDropDown();
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeJava();
      await page.waitForTimeout(5000);

      await lessonBuilder.Submitbtn();
      await lessonBuilder.DueDateButton();
      await lessonBuilder.ClickLateSubmissionToggle(page);     
      await lessonBuilder.ClickLateReSubmissionToggle(page);
      await lessonBuilder.ClickSolutionButton(page);
      await lessonBuilder.ClickCreateSolution(page);
      await lessonBuilder.ClickSolutionAvailableAfterCorrectAns(page);
      await lessonBuilder.CalendarButton();

      const now = new Date();
      let currentHour = now.getHours(); 

      let nextHour = 0;

      let currentHour12 = currentHour % 12 || 12; 

      if (currentHour12 == 12) {
        nextHour = 1;
      } else {
        nextHour = currentHour12 + 1;
      }
      
      await lessonBuilder.SelectExpiredDueDate(nextHour, page)

      await lessonBuilder.CalendarButton();

      await lessonBuilder.ClickFirstAssignment(newPage)

      await lessonBuilder.ClickCodeStarterButton(newPage)

      await lessonBuilder.ClickSubmitAssignmentBtn(newPage)

      await lessonBuilder.ClickWarningSubmitAssignmentBtn(newPage)
   
      await newPage.reload();
      
      await page.waitForTimeout(5000);
      await lessonBuilder.ClickReSubmitButton(newPage);
      await lessonBuilder.ClickWarningSubmitAssignmentBtnAfterReSubmit(newPage)

      await newPage.reload();

      const element = await newPage.locator(LessonBuilderLocators.SolutionButton);

      await expect(element).toBeVisible();

      await lessonBuilder.ClickReSubmitButton(newPage);




  });

  test('Usman TC7=> Verify test status is passed when expected output type is Flexible Equality'
    , async ({ lessonBuilder, page }) => {

    await lessonBuilder.NavigateToTeamCoursesPage();
      
      // Ensure "Create New Team" button is visible before interaction
      await expect(lessonBuilder.CreateNewTeamBtn).toBeVisible();
      
      // Interact with elements on the page
      await lessonBuilder.ClickOnCreateNewTeamBtn();
      await lessonBuilder.ClickOnStartFromScratch();
      await page.waitForTimeout(5000);
      await lessonBuilder.FillTeamNameTxtBox();
      await lessonBuilder.Submitbtn();
      await expect.toHaveText(LessonBuilderTestData.NoData && LessonBuilderTestData.ClassName);
      await lessonBuilder.CreateAssignmentbtn();
      await lessonBuilder.CodingAssignmentbtn();
      await lessonBuilder.CodingAssignment();
      await lessonBuilder.AssignmentCreateBtn();
     
      await lessonBuilder.ClickInitiliazeJuiceMindIDE(page);
      await page.waitForTimeout(5000);

      await lessonBuilder.FillProjectNameTextBox(LessonBuilderTestData.ProjectName);
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeDropDown();
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeJava();
      await page.waitForTimeout(5000);

      await lessonBuilder.Submitbtn();

      await lessonBuilder.ClickTestsButton(page);
      await lessonBuilder.ClickAddTestButton(page);
      await lessonBuilder.SelectTestType(LessonBuilderTestData.TestType, page)
      await lessonBuilder.FillTestNameTextBox(page, LessonBuilderTestData.TestName);
      await lessonBuilder.FillInputTextBox(page, LessonBuilderTestData.TestInput);
      await lessonBuilder.FillExpectedOutput(page, LessonBuilderTestData.ExpectedOutput)
      await lessonBuilder.SelectTestOutputType(LessonBuilderTestData.OutputType_1, page)
      await lessonBuilder.SubmitTest(page);
      await lessonBuilder.ClickTemplateButton(page)
      await lessonBuilder.ClickPlayTests(page)

      const element = await page.locator(LessonBuilderLocators.TestPassedDiv);

      await expect(element).toBeVisible();


      




  });

  test('Usman TC8=> Verify test status is passed when expected output type is Match'
    , async ({ lessonBuilder, page }) => {

    await lessonBuilder.NavigateToTeamCoursesPage();
      
      // Ensure "Create New Team" button is visible before interaction
      await expect(lessonBuilder.CreateNewTeamBtn).toBeVisible();
      
      // Interact with elements on the page
      await lessonBuilder.ClickOnCreateNewTeamBtn();
      await lessonBuilder.ClickOnStartFromScratch();
      await page.waitForTimeout(5000);
      await lessonBuilder.FillTeamNameTxtBox();
      await lessonBuilder.Submitbtn();
      await expect.toHaveText(LessonBuilderTestData.NoData && LessonBuilderTestData.ClassName);
      await lessonBuilder.CreateAssignmentbtn();
      await lessonBuilder.CodingAssignmentbtn();
      await lessonBuilder.CodingAssignment();
      await lessonBuilder.AssignmentCreateBtn();
     
      await lessonBuilder.ClickInitiliazeJuiceMindIDE(page);
      await page.waitForTimeout(5000);

      await lessonBuilder.FillProjectNameTextBox(LessonBuilderTestData.ProjectName);
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeDropDown();
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeJava();
      await page.waitForTimeout(5000);

      await lessonBuilder.Submitbtn();

      await lessonBuilder.ClickTestsButton(page);
      await lessonBuilder.ClickAddTestButton(page);
      await lessonBuilder.SelectTestType(LessonBuilderTestData.TestType, page)
      await lessonBuilder.FillTestNameTextBox(page, LessonBuilderTestData.TestName);
      await lessonBuilder.FillInputTextBox(page, LessonBuilderTestData.TestInput);
      await lessonBuilder.FillExpectedOutput(page, LessonBuilderTestData.ExpectedOutput)
      await lessonBuilder.SelectTestOutputType(LessonBuilderTestData.OutputType_2, page)
      await lessonBuilder.SubmitTest(page);
      await lessonBuilder.ClickTemplateButton(page)
      await lessonBuilder.ClickPlayTests(page)

      const element = await page.locator(LessonBuilderLocators.TestPassedDiv);

      await expect(element).toBeVisible();


  });

  test('Usman TC9=> Verify test status is passed when expected output type is Exact'
    , async ({ lessonBuilder, page }) => {

    await lessonBuilder.NavigateToTeamCoursesPage();
      
      // Ensure "Create New Team" button is visible before interaction
      await expect(lessonBuilder.CreateNewTeamBtn).toBeVisible();
      
      // Interact with elements on the page
      await lessonBuilder.ClickOnCreateNewTeamBtn();
      await lessonBuilder.ClickOnStartFromScratch();
      await page.waitForTimeout(5000);
      await lessonBuilder.FillTeamNameTxtBox();
      await lessonBuilder.Submitbtn();
      await expect.toHaveText(LessonBuilderTestData.NoData && LessonBuilderTestData.ClassName);
      await lessonBuilder.CreateAssignmentbtn();
      await lessonBuilder.CodingAssignmentbtn();
      await lessonBuilder.CodingAssignment();
      await lessonBuilder.AssignmentCreateBtn();
     
      await lessonBuilder.ClickInitiliazeJuiceMindIDE(page);
      await page.waitForTimeout(5000);

      await lessonBuilder.FillProjectNameTextBox(LessonBuilderTestData.ProjectName);
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeDropDown();
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeJava();
      await page.waitForTimeout(5000);

      await lessonBuilder.Submitbtn();

      await lessonBuilder.ClickTestsButton(page);
      await lessonBuilder.ClickAddTestButton(page);
      await lessonBuilder.SelectTestType(LessonBuilderTestData.TestType, page)
      await lessonBuilder.FillTestNameTextBox(page, LessonBuilderTestData.TestName);
      await lessonBuilder.FillInputTextBox(page, LessonBuilderTestData.TestInput);
      await lessonBuilder.FillExpectedOutput(page, LessonBuilderTestData.ExpectedOutput)
      await lessonBuilder.SelectTestOutputType(LessonBuilderTestData.OutputType_3, page)
      await lessonBuilder.SubmitTest(page);
      await lessonBuilder.ClickTemplateButton(page)
      await lessonBuilder.ClickPlayTests(page)

      const element = await page.locator(LessonBuilderLocators.TestPassedDiv);

      await expect(element).toBeVisible();


  });

  test('Usman TC10=> Verify test status is passed when expected output type is Regex'
    , async ({ lessonBuilder, page }) => {

    await lessonBuilder.NavigateToTeamCoursesPage();
      
      // Ensure "Create New Team" button is visible before interaction
      await expect(lessonBuilder.CreateNewTeamBtn).toBeVisible();
      
      // Interact with elements on the page
      await lessonBuilder.ClickOnCreateNewTeamBtn();
      await lessonBuilder.ClickOnStartFromScratch();
      await page.waitForTimeout(5000);
      await lessonBuilder.FillTeamNameTxtBox();
      await lessonBuilder.Submitbtn();
      await expect.toHaveText(LessonBuilderTestData.NoData && LessonBuilderTestData.ClassName);
      await lessonBuilder.CreateAssignmentbtn();
      await lessonBuilder.CodingAssignmentbtn();
      await lessonBuilder.CodingAssignment();
      await lessonBuilder.AssignmentCreateBtn();
     
      await lessonBuilder.ClickInitiliazeJuiceMindIDE(page);
      await page.waitForTimeout(5000);

      await lessonBuilder.FillProjectNameTextBox(LessonBuilderTestData.ProjectName);
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeDropDown();
      await page.waitForTimeout(5000);

      await lessonBuilder.ClickProjectTypeJava();
      await page.waitForTimeout(5000);

      await lessonBuilder.Submitbtn();

      await lessonBuilder.ClickTestsButton(page);
      await lessonBuilder.ClickAddTestButton(page);
      await lessonBuilder.SelectTestType(LessonBuilderTestData.TestType, page)
      await lessonBuilder.FillTestNameTextBox(page, LessonBuilderTestData.TestName);
      await lessonBuilder.FillInputTextBox(page, LessonBuilderTestData.TestInput);
      await lessonBuilder.FillExpectedOutput(page, LessonBuilderTestData.ExpectedOutput)
      await lessonBuilder.SelectTestOutputType(LessonBuilderTestData.OutputType_4, page)
      await lessonBuilder.SubmitTest(page);
      await lessonBuilder.ClickTemplateButton(page)
      await lessonBuilder.ClickPlayTests(page)

      const element = await page.locator(LessonBuilderLocators.TestPassedDiv);

      await expect(element).toBeVisible();


  });


});
