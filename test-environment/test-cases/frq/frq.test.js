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

  test('Usman TC1=> Verify user is not able to write anything on Preview Delimeter', async ({ frq, page }) => {
    
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

  test('Usman TC2=> Verify FRQ title after creating a Course and Verify Unit test case status for Delimeter', async ({ frq, page }) => {
    
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

  test('Usman TC3=> Verify user is not able to write anything on Preview ApCalendar', async ({ frq, page }) => {
    
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

  test('Usman TC4=> Verify FRQ title after creating a Course and Verify Unit test case status for AP Calendar', async ({ frq, page }) => {
    
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

  test('Usman TC5=> Verify user is not able to write anything on Preview WordMatch', async ({ frq, page }) => {
    
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

  test('Usman TC6=> Verify FRQ title after creating a Course and Verify Unit test case status for WordMatch', async ({ frq, page }) => {
    
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

  test('Usman TC7=> Verify user is not able to write anything on Preview CombinedTable', async ({ frq, page }) => {
    
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

  test('Usman TC8=> Verify FRQ title after creating a Course and Verify Unit test case status for CombinedTable', async ({ frq, page }) => {
    
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

  test('Usman TC9=> Verify user is not able to write anything on Preview Club Members', async ({ frq, page }) => {
    
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

  test('Usman TC10=> Verify FRQ title after creating a Course and Verify Unit test case status for Club Members', async ({ frq, page }) => {
    
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

  test('Usman TC11=> Verify user is not able to write anything on Preview ArrayResizer', async ({ frq, page }) => {
    
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

  test('Usman TC12=> Verify FRQ title after creating a Course and Verify Unit test case status for ArrayResizer', async ({ frq, page }) => {
    
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

  test('Usman TC13=> Verify user is not able to write anything on Preview TextBook', async ({ frq, page }) => {
    
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

  test('Usman TC14=> Verify FRQ title after creating a Course and Verify Unit test case status for TextBook', async ({ frq, page }) => {
    
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

  test('Usman TC15=> Verify user is not able to write anything on Preview ReviewAnalysis', async ({ frq, page }) => {
    
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

  test('Usman TC16=> Verify FRQ title after creating a Course and Verify Unit test case status for ReviewAnalysis', async ({ frq, page }) => {
    
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

  test('Usman TC17=> Verify user is not able to write anything on Preview AppointmentBook', async ({ frq, page }) => {
    
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

  test('Usman TC18=> Verify FRQ title after creating a Course and Verify Unit test case status for AppointmentBook', async ({ frq, page }) => {
    
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

  test('Usman TC19=> Verify user is not able to write anything on Preview Sign', async ({ frq, page }) => {
    
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

  test('Usman TC20=> Verify FRQ title after creating a Course and Verify Unit test case status for Sign', async ({ frq, page }) => {
    
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

  test('Usman TC21=> Verify user is not able to write anything on Preview WeatherData', async ({ frq, page }) => {
    
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

  test('Usman TC22=> Verify FRQ title after creating a Course and Verify Unit test case status for WeatherData', async ({ frq, page }) => {
    
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

  test('Usman TC23=> Verify user is not able to write anything on Preview Box Of Candy', async ({ frq, page }) => {
    
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

  test('Usman TC24=> Verify FRQ title after creating a Course and Verify Unit test case status for Box Of Candy', async ({ frq, page }) => {
    
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
