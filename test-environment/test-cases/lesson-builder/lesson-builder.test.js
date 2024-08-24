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

  test('TC - Validate UI of Lesson Builder Page', async ({ lessonBuilder }) => {
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

await lessonBuilder.fillstudentsignupdata();



    //Ensure the left sidebar arrow button is visible and click it
    // await expect(lessonBuilder.arrowBtnLeftSideBar).toBeVisible();
    // await lessonBuilder.leftsidebarArrowBtn();
    
    // // Ensure the Invite Students button is visible and click it
    // await chromiumPage.waitForTimeout(3000); // Wait for any animations or delays
    // await expect(lessonBuilder.invite_StudentsBtn).toBeVisible();
    // await lessonBuilder.InviteStudentsbtn();
    // const isInviteStudentsVisible = await lessonBuilder.invite_StudentsBtn.locator().waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false);

    // if (isInviteStudentsVisible) {
    //     // If visible, click on it
    //     await lessonBuilder.InviteStudentsbtn();
    // } else {
    //     // If not visible, click the left sidebar arrow button and then click "Invite Students"
    //     await lessonBuilder.leftsidebarArrowBtn();
    //     await lessonBuilder.InviteStudentsbtn();
    // }
    // await lessonBuilder.InviteStudentsbtn();
    // //Ensure the Copy Invite Students button is visible and click it
    // await expect(lessonBuilder.copy_InviteStudentsBtn).toBeVisible();
    // await lessonBuilder.CopyinviteStudentsbtn();
    
    // // Get the copied link from the clipboard
    // const copiedLink = await chromiumPage.evaluate(() => navigator.clipboard.readText());
    // console.log('Copied link:', copiedLink);

    // // Open Edge and navigate to the copied link
    // await edgePage.goto(copiedLink);
    
    // // Switch back to Chromium and click the publish button
    

    // // Optional: Wait for the publish action to complete and for the Edge page to update
    // await edgePage.waitForTimeout(2000); // Adjust timeout as necessary

    // // Perform further assertion in Edge (adjust selector as needed)
    // await edgePage.goto(copiedLink); // Navigate back to the copied link
    // await edgePage.waitForTimeout(2000); // Ensure page has loaded
  });

});
