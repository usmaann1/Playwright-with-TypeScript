const { chromium } = require('playwright');
const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports');
const { test, expect } = require('../../../module-imports/testFixtures.imports');
import quizzesData from '../../test-assets/test-data-files/quizzes/quizzes-testData.json';
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";

test.describe('TestSuite: Quizzes', () => {


  test.beforeEach(async ({ loginPage }) => {
    
    await loginPage.NavigateToLoginPage();
    await loginPage.fillCredentialsAndLogin(Credentials.EMAIL_USMAN, Credentials.PASSWORD_USMAN);
  });

  test('Usman TC1 - Validate Quizzes', async ({ quizzes, page }) => {
    
      await quizzes.ClickQuizzesButton()
      await quizzes.ClickJavaProgrammingButton()
      await quizzes.ClickEasyQuizButton()
      await quizzes.ClickStartQuizButton()
      await quizzes.ClickStartQuizDialogButton()

      await page.waitForTimeout(5000);
      await quizzes.ClickImReadyDialogButton()

      const element = await page.locator(quizzesData.GamePinTextLocator)
      const gamePin = await element.textContent()

       // Open a new page for student 1
       const browser1 = await chromium.launch();
       const newPage = await browser1.newPage();

       // Open a new page for student 2
       const browser2 = await chromium.launch();
       const newPage2 = await browser2.newPage();

        // Open a new page for student 3
       const browser3 = await chromium.launch();
       const newPage3 = await browser3.newPage();

         // first login
       await newPage.goto(quizzesData.LoginLink);
       await newPage.bringToFront(); // Ensure the new page is focused

        // second login
       await newPage2.goto(quizzesData.LoginLink);
       await newPage2.bringToFront(); // Ensure the new page is focused

        // third login
       await newPage3.goto(quizzesData.LoginLink);
       await newPage3.bringToFront(); // Ensure the new page is focused

       // fill login for first student 
       await quizzes.fillstudentsignin(newPage);

       // fill login for second student 
       await quizzes.fillstudentsignin_2(newPage2);

       // fill login for third student 
       await quizzes.fillstudentsignin_3(newPage3)

       await quizzes.clickJoinQuiz(newPage)

       await quizzes.clickJoinQuiz(newPage2)

       await quizzes.clickJoinQuiz(newPage3)

       await quizzes.EnterGamePin(newPage, gamePin)

       await quizzes.EnterGamePin(newPage2, gamePin)
       
       await quizzes.EnterGamePin(newPage3, gamePin)

       await quizzes.EnterNickName(newPage, "Student 1")

       await quizzes.EnterNickName(newPage2, "Student 2")
       
       await quizzes.EnterNickName(newPage3, "Student 3")
       
       await page.waitForTimeout(5000);
       await quizzes.ClickStartQuizAfterPlayerJoined()

       //give answers of qustions logic

      for (let i = 1; i<=6; i++)
      {
        await page.waitForTimeout(5000);

        if(i==3)
        {
          await quizzes.CLickErrorLine(newPage)
          await quizzes.CLickErrorLine(newPage2)
          await quizzes.CLickErrorLine(newPage3)

        }

        else if(i==1 || i==2 || i==4)
        {
          await quizzes.CLickFirstAnswer(newPage)
 
          await quizzes.CLickSecondAnswer(newPage2)
 
          await quizzes.CLickThirdAnswer(newPage3)

        }

        else if( i==5)
        {

          //first
          await newPage.evaluate(() => {
            const editor = ace.edit(document.querySelector('.ace_editor'));
            editor.setValue("public class Main {\n    public static void main(String[] args) {\n\n        System.out.println(\"African elephant\");\n\n    }\n}");
          });

          await quizzes.ClickExecute(newPage)

          //second
          await newPage2.evaluate(() => {
            const editor = ace.edit(document.querySelector('.ace_editor'));
            editor.setValue("public class Main {\n    public static void main(String[] args) {\n\n        System.out.println(\"\");\n\n    }\n}");
          });

          await quizzes.ClickExecute(newPage2)

          await page.waitForTimeout(110000);

        }

        else if(i==6)
        {
           //first
           await newPage.evaluate(() => {
            const editor = ace.edit(document.querySelector('.ace_editor'));
            editor.setValue("public class Main {\n    public static void main(String[] args) {\n\n        System.out.println(\"Beluga whale\");\n\n    }\n}");
          });

          await quizzes.ClickExecute(newPage)

          //second
          await newPage2.evaluate(() => {
            const editor = ace.edit(document.querySelector('.ace_editor'));
            editor.setValue("public class Main {\n    public static void main(String[] args) {\n\n        System.out.println(\"\");\n\n    }\n}");
          });

          await quizzes.ClickExecute(newPage2)

          await page.waitForTimeout(110000);

        }   
                
        await quizzes.ClickNextButton()

        await page.waitForTimeout(5000);
 
        await quizzes.ClickNextButton()

      }
      

  });
 

});
