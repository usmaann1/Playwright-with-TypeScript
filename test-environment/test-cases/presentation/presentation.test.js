const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import LessonBuilderTestData from '../../test-assets/test-data-files/lesson-builder/lesson-builder-testData.json'


require('dotenv').config()

test.describe('TestSuite: presentation', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.NavigateToLoginPage()
        await loginPage.fillCredentialsAndLogin(process.env.EMAIL, process.env.PASSWORD)
      });

    test('TC - Validate Adding Item', async ({lessonBuilder}) => {
        await lessonBuilder.NavigateToTeamCoursesPage()
        await expect(lessonBuilder.CreateNewTeamBtn).toHaveText(LessonBuilderTestData.CreateNewTeamBtnValue)
        //await PlaywrightCore.click(TeamCoursesBtn);
        await lessonBuilder.ClickOnCreateNewTeamBtn()
        await lessonBuilder.ClickOnStartFromScratch()
        await lessonBuilder.FillTeamNameTxtBox()
        await lessonBuilder.Submitbtn()
        await expect.toHaveText(LessonBuilderTestData.NoData && LessonBuilderTestData.ClassName)
            // Create and configure an assignment
         await lessonBuilder.CreateAssignmentbtn();
         await lessonBuilder.CodingAssignmentbtn();
         await lessonBuilder.CodingAssignment();
         await lessonBuilder.AssignmentCreateBtn();

         // Add a new item and configure it
         await lessonBuilder.AddNewItemBtn();
         await lessonBuilder.CodingAssignmentbtn();
         await lessonBuilder.CodingAssignment();
         await lessonBuilder.AssignmentCreateBtn();
    });

    test('TC - Validate Presentation Mode', async ({lessonBuilder}) => {
      await lessonBuilder.NavigateToTeamCoursesPage()
      await expect(lessonBuilder.CreateNewTeamBtn).toHaveText(LessonBuilderTestData.CreateNewTeamBtnValue)
      //await PlaywrightCore.click(TeamCoursesBtn);
      await lessonBuilder.ClickOnCreateNewTeamBtn()
      await lessonBuilder.ClickOnStartFromScratch()
      await lessonBuilder.FillTeamNameTxtBox()
      await lessonBuilder.Submitbtn()
      await expect.toHaveText(LessonBuilderTestData.NoData && LessonBuilderTestData.ClassName)
          // Create and configure an assignment
       await lessonBuilder.CreateAssignmentbtn();
       await lessonBuilder.CodingAssignmentbtn();
       await lessonBuilder.CodingAssignment();
       await lessonBuilder.AssignmentCreateBtn();

       // Presentation Mode
       await lessonBuilder.waitForFunction();
       await lessonBuilder.PresentationMode()
       await lessonBuilder.GotItButton();
       await expect.toHaveText(LessonBuilderTestData.ViewStuPreview_btn);
       await lessonBuilder.ExitStudentView();
  });
    
})
