const { chromium } = require('playwright');
const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports');
const { test, expect } = require('../../../module-imports/testFixtures.imports');
import LessonBuilderTestData from '../../test-assets/test-data-files/lesson-builder/lesson-builder-testData.json';

require('dotenv').config();

test.describe('TestSuite: Lesson Builder', () => {


  test.beforeEach(async ({ loginPage }) => {
    // await loginPage.setPage(chromiumPage); // Assuming setPage is a method to set the page context
    
    await loginPage.NavigateToLoginPage();
    await loginPage.fillCredentialsAndLogin(process.env.EMAIL_USMAN, process.env.PASSWORD_USMAN);
  });

  test('TC - Validate UI of Lesson Builder Page', async ({ lessonBuilder, loginPage }) => {
    // Set the lessonBuilder context to the Chromium page
    // lessonBuilder.setPage(chromiumPage); // Assuming setPage is a method to set the page context
    await lessonBuilder.NavigateToTeamCoursesPage();
    
    // Ensure "Create New Team" button is visible before interaction
    await expect(lessonBuilder.CreateNewTeamBtn).toBeVisible();
    
    // Interact with elements on the page
    await lessonBuilder.ClickOnCreateNewTeamBtn();
    await lessonBuilder.ClickOnStartFromScratch();
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
    

      //deleting default lesson
      //await lessonBuilder.thirdsixdot();

  // Invite Students
await lessonBuilder.InviteStudentsbtn();
await lessonBuilder.CopyinviteStudentsbtn();
await lessonBuilder.closeinvitestudentspopup();
await lessonBuilder.publishassignmentbutton();

// Open a new page
const browser = await chromium.launch();
const newPage = await browser.newPage(); 


// Evaluate clipboard content within the new page context
const copiedLink = 'https://play.juicemind.com/joinTeam/1jBhE4onyItf5YO2LvZQ'
//const copiedLink = await newPage.evaluate(async () => {
  // Access clipboard content
  //return await navigator.clipboard.readText();
//});


console.log('Copied link:', copiedLink);

// Navigate to the copied link
await newPage.goto(copiedLink);
await newPage.bringToFront(); // Ensure the new page is focused

await lessonBuilder.clickLoginbutton(newPage);

await lessonBuilder.fillstudentsignin(newPage);

await lessonBuilder.clickfinishbutton(newPage);




  });

});
