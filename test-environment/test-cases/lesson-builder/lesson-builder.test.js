const { chromium } = require('playwright');
const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports');
const { test, expect } = require('../../../module-imports/testFixtures.imports');
import LessonBuilderTestData from '../../test-assets/test-data-files/lesson-builder/lesson-builder-testData.json';
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";

require('dotenv').config();

test.describe('TestSuite: Lesson Builder', () => {


  test.beforeEach(async ({ loginPage }) => {
    
    
    await loginPage.NavigateToLoginPage();
    await loginPage.fillCredentialsAndLogin(Credentials.EMAIL_USMAN, Credentials.PASSWORD_USMAN);
  });

  test('TC - Validate UI of Lesson Builder Page', async ({ lessonBuilder, page }) => {

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
  

    // Invite Students
    await lessonBuilder.InviteStudentsbtn();
    await lessonBuilder.CopyinviteStudentsbtn();

    const InviteLink = await page.evaluate(async () => {
      // Access clipboard content
      return await navigator.clipboard.readText();
      });

      await lessonBuilder.closeinvitestudentspopup();
      await lessonBuilder.publishassignmentbutton();

      // Open a new page
      const browser = await chromium.launch();
      const newPage = await browser.newPage(); 

      // Navigate to the copied link
      await newPage.goto(InviteLink);
      await newPage.bringToFront(); // Ensure the new page is focused

      await lessonBuilder.clickLoginbutton(newPage);

      await lessonBuilder.fillstudentsignin(newPage);

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

});
