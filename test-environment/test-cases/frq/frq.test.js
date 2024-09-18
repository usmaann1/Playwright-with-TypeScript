const { chromium } = require('playwright');
const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports');
const { test, expect } = require('../../../module-imports/testFixtures.imports');
import frqData from '../../test-assets/test-data-files/frq/frq-testData.json';
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";
import Locators from "../../../pages/frq/frq.locator.json";

test.describe('TestSuite: FRQ', () => {


  test.beforeEach(async ({ loginPage }) => {
    
    await loginPage.NavigateToLoginPage();
    await loginPage.fillCredentialsAndLogin(Credentials.EMAIL_USMAN, Credentials.PASSWORD_USMAN);
  });

  test('Usman TC1 - Validate Delimeter', async ({ frq, page }) => {
    
    await frq.ClickDelimetersFrq();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickDelimetersFrq();

   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await element.waitFor({ state: 'visible' });
    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('Usman TC2 - Validate Delimeter', async ({ frq, page }) => {
    
    await frq.ClickDelimetersFrq();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
   const element = await page.locator(Locators.DelimeterParagraphDiv);
    await page.waitForTimeout(6000);

    await expect(element).toHaveText("Delimiters");

    await frq.ClickSolutionButton()

    await frq.ClickRunButton()

    await frq.ClickTestsButton()

    await page.waitForTimeout(20000);
    
    const count = await page.locator(frqData.TestStatusDiv).count();

    for (let i = 1; i <=count ; i++) {

      const dynamicPath = `${frqData.TestStatusDivChild}[${i}]`
      const text = await page.locator(dynamicPath).textContent();
      expect(text.trim()).toBe(frqData.TestStatus);
    }

  });

  test('Usman TC3 - Validate ApCalendar', async ({ frq, page }) => {
    
    await frq.ClickApCalendarFrq();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await element.waitFor({ state: 'visible' });
    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('Usman TC4 - Validate AP Calendar', async ({ frq, page }) => {
    
    await frq.ClickApCalendarFrq();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await page.waitForTimeout(5000);

    await expect(element).toHaveText("APCalendar");

    await frq.ClickSolutionButton()

    await frq.ClickRunButton()

    await frq.ClickTestsButton()

    await page.waitForTimeout(20000);

    const count = await page.locator(frqData.TestStatusDiv).count();

    for (let i = 1; i <=count ; i++) {

      const dynamicPath = `${frqData.TestStatusDivChild}[${i}]`
      const text = await page.locator(dynamicPath).textContent();
      expect(text.trim()).toBe(frqData.TestStatus);
    }

  });

  test('Usman TC5 - Validate WordMatch', async ({ frq, page }) => {
    
    await frq.ClickWordMatch();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await element.waitFor({ state: 'visible' });
    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('Usman TC6 - Validate WordMatch', async ({ frq, page }) => {
    
    await frq.ClickWordMatch();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await page.waitForTimeout(5000);

    await expect(element).toHaveText("WordMatch");

    await frq.ClickSolutionButton()

    await frq.ClickRunButton()

    await frq.ClickTestsButton()

    await page.waitForTimeout(20000);

    const count = await page.locator(frqData.TestStatusDiv).count();

    for (let i = 1; i <=count ; i++) {

      const dynamicPath = `${frqData.TestStatusDivChild}[${i}]`
      const text = await page.locator(dynamicPath).textContent();
      expect(text.trim()).toBe(frqData.TestStatus);
    }

  });

  test('Usman TC7 - Validate CombinedTable', async ({ frq, page }) => {
    
    await frq.ClickCombibnedTableFrq();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await element.waitFor({ state: 'visible' });
    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('Usman TC8 - Validate CombinedTable', async ({ frq, page }) => {
    
    await frq.ClickCombibnedTableFrq();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await page.waitForTimeout(5000);

    await expect(element).toHaveText("CombinedTable");

    await frq.ClickSolutionButton()

    await frq.ClickRunButton()

    await frq.ClickTestsButton()

    await page.waitForTimeout(20000);

    const count = await page.locator(frqData.TestStatusDiv).count();

    for (let i = 1; i <=count ; i++) {

      const dynamicPath = `${frqData.TestStatusDivChild}[${i}]`
      const text = await page.locator(dynamicPath).textContent();
      expect(text.trim()).toBe(frqData.TestStatus);
    }


  });

  test('Usman TC9 - Validate Club Members', async ({ frq, page }) => {
    
    await frq.ClickClubMembers();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await element.waitFor({ state: 'visible' });
    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('Usman TC10 - Validate Club Members', async ({ frq, page }) => {
    
    await frq.ClickClubMembers();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await page.waitForTimeout(5000);

    await expect(element).toHaveText("ClubMembers");

    await frq.ClickSolutionButton()

    await frq.ClickRunButton()

    await frq.ClickTestsButton()

    await page.waitForTimeout(20000);

    const count = await page.locator(frqData.TestStatusDiv).count();

    for (let i = 1; i <=count ; i++) {

      const dynamicPath = `${frqData.TestStatusDivChild}[${i}]`
      const text = await page.locator(dynamicPath).textContent();
      expect(text.trim()).toBe(frqData.TestStatus);
    }


  });

  test('Usman TC11 - ArrayResizer', async ({ frq, page }) => {
    
    await frq.ClickArrayResizer();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await element.waitFor({ state: 'visible' });
    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('Usman TC12 - ArrayResizer', async ({ frq, page }) => {
    
    await frq.ClickArrayResizer();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await page.waitForTimeout(5000);

    await expect(element).toHaveText("ArrayResizer");

    await frq.ClickSolutionButton()

    await frq.ClickRunButton()

    await frq.ClickTestsButton()

    await page.waitForTimeout(20000);

    const count = await page.locator(frqData.TestStatusDiv).count();

    for (let i = 1; i <=count ; i++) {

      const dynamicPath = `${frqData.TestStatusDivChild}[${i}]`
      const text = await page.locator(dynamicPath).textContent();
      expect(text.trim()).toBe(frqData.TestStatus);
    }

  });

  test('Usman TC13 - TextBook', async ({ frq, page }) => {
    
    await frq.ClickTextBook();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await element.waitFor({ state: 'visible' });
    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

    

  });

  test('Usman TC14 - TextBook', async ({ frq, page }) => {
    
    await frq.ClickTextBook();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await page.waitForTimeout(5000);

    await expect(element).toHaveText("Textbook");

    await frq.ClickSolutionButton()

    await frq.ClickRunButton()

    await frq.ClickTestsButton()

    await page.waitForTimeout(20000);

    const count = await page.locator(frqData.TestStatusDiv).count();

    for (let i = 1; i <=count ; i++) {

      const dynamicPath = `${frqData.TestStatusDivChild}[${i}]`
      const text = await page.locator(dynamicPath).textContent();
      expect(text.trim()).toBe(frqData.TestStatus);
    }

  });

  test('Usman TC15 - ReviewAnalysis', async ({ frq, page }) => {
    
    await frq.ClickReviewAnalysis();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await element.waitFor({ state: 'visible' });
    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('Usman TC16 - ReviewAnalysis', async ({ frq, page }) => {
    
    await frq.ClickReviewAnalysis();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await page.waitForTimeout(5000);

    await expect(element).toHaveText("ReviewAnalysis");

    await frq.ClickSolutionButton()

    await frq.ClickRunButton()

    await frq.ClickTestsButton()

    await page.waitForTimeout(20000);

    const count = await page.locator(frqData.TestStatusDiv).count();

    for (let i = 1; i <=count ; i++) {

      const dynamicPath = `${frqData.TestStatusDivChild}[${i}]`
      const text = await page.locator(dynamicPath).textContent();
      expect(text.trim()).toBe(frqData.TestStatus);
    }

  });

  test('Usman TC17 - AppointmentBook', async ({ frq, page }) => {
    
    await frq.ClickAppointmentBook();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await element.waitFor({ state: 'visible' });
    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('Usman TC18 - AppointmentBook', async ({ frq, page }) => {
    
    await frq.ClickAppointmentBook();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await page.waitForTimeout(5000);

    await expect(element).toHaveText("AppointmentBook");

    await frq.ClickSolutionButton()

    await frq.ClickRunButton()

    await frq.ClickTestsButton()

    await page.waitForTimeout(20000);

    const count = await page.locator(frqData.TestStatusDiv).count();

    for (let i = 1; i <=count ; i++) {

      const dynamicPath = `${frqData.TestStatusDivChild}[${i}]`
      const text = await page.locator(dynamicPath).textContent();
      expect(text.trim()).toBe(frqData.TestStatus);
    }

  });

  test('Usman TC19 - Sign', async ({ frq, page }) => {
    
    await frq.ClickSignFrq();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await element.waitFor({ state: 'visible' });
    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('Usman TC20 - Sign', async ({ frq, page }) => {
    
    await frq.ClickSignFrq();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await page.waitForTimeout(5000);

    await expect(element).toHaveText("Sign");

    await frq.ClickSolutionButton()

    await frq.ClickRunButton()

    await frq.ClickTestsButton()

    await page.waitForTimeout(20000);

    const count = await page.locator(frqData.TestStatusDiv).count();

    for (let i = 1; i <=count ; i++) {

      const dynamicPath = `${frqData.TestStatusDivChild}[${i}]`
      const text = await page.locator(dynamicPath).textContent();
      expect(text.trim()).toBe(frqData.TestStatus);
    }

  });

  test('Usman TC21 - WeatherData', async ({ frq, page }) => {
    
    await frq.ClickWeatherData();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await element.waitFor({ state: 'visible' });
    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('Usman TC22 - WeatherData', async ({ frq, page }) => {
    
    await frq.ClickWeatherData();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await page.waitForTimeout(5000);

    await expect(element).toHaveText("WeatherData");

    await frq.ClickSolutionButton()

    await frq.ClickRunButton()

    await frq.ClickTestsButton()

    await page.waitForTimeout(20000);

    const count = await page.locator(frqData.TestStatusDiv).count();

    for (let i = 1; i <=count ; i++) {

      const dynamicPath = `${frqData.TestStatusDivChild}[${i}]`
      const text = await page.locator(dynamicPath).textContent();
      expect(text.trim()).toBe(frqData.TestStatus);
    }

  });

  test('Usman TC23 - Box Of Candy', async ({ frq, page }) => {
    
    await frq.ClickBoxOfCandy();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await element.waitFor({ state: 'visible' });
    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('Usman TC24 - Box Of Candy', async ({ frq, page }) => {
    
    await frq.ClickBoxOfCandy();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(Locators.DelimeterParagraphDiv);
    await page.waitForTimeout(5000);

    await expect(element).toHaveText("BoxOfCandy");

    await frq.ClickSolutionButton()

    await frq.ClickRunButton()

    await frq.ClickTestsButton()

    await page.waitForTimeout(20000);

    const count = await page.locator(frqData.TestStatusDiv).count();

    for (let i = 1; i <=count ; i++) {

      const dynamicPath = `${frqData.TestStatusDivChild}[${i}]`
      const text = await page.locator(dynamicPath).textContent();
      expect(text.trim()).toBe(frqData.TestStatus);
    }

  });

});
