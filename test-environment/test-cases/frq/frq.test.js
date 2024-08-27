const { chromium } = require('playwright');
const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports');
const { test, expect } = require('../../../module-imports/testFixtures.imports');
import frqData from '../../test-assets/test-data-files/frq/frq-testData.json';


require('dotenv').config();

test.describe('TestSuite: FRQ', () => {


  test.beforeEach(async ({ loginPage }) => {
    
    await loginPage.NavigateToLoginPage();
    await loginPage.fillCredentialsAndLogin(process.env.EMAIL_USMAN, process.env.PASSWORD_USMAN);
  });

  test('TC1 - Validate Delimeter', async ({ frq, page }) => {
    
    await frq.ClickDelimetersFrq();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickDelimetersFrq();

   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('TC2 - Validate Delimeter', async ({ frq, page }) => {
    
    await frq.ClickDelimetersFrq();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await page.waitForTimeout(5000);

    await expect(element).toHaveText("Delimiters");

  });

  test('TC3 - Validate ApCalendar', async ({ frq, page }) => {
    
    await frq.ClickApCalendarFrq();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('TC4 - Validate AP Calendar', async ({ frq, page }) => {
    
    await frq.ClickApCalendarFrq();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await page.waitForTimeout(5000);

    await expect(element).toHaveText("APCalendar");

  });

  test('TC5 - Validate WordMatch', async ({ frq, page }) => {
    
    await frq.ClickWordMatch();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('TC6 - Validate WordMatch', async ({ frq, page }) => {
    
    await frq.ClickWordMatch();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await page.waitForTimeout(5000);

    await expect(element).toHaveText("WordMatch");

  });

  test('TC7 - Validate CombinedTable', async ({ frq, page }) => {
    
    await frq.ClickCombibnedTableFrq();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('TC8 - Validate CombinedTable', async ({ frq, page }) => {
    
    await frq.ClickCombibnedTableFrq();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await page.waitForTimeout(5000);

    await expect(element).toHaveText("CombinedTable");

  });

  test('TC9 - Validate Club Memebers', async ({ frq, page }) => {
    
    await frq.ClickClubMembers();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('TC10 - Validate CombinedTable', async ({ frq, page }) => {
    
    await frq.ClickClubMembers();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await page.waitForTimeout(5000);

    await expect(element).toHaveText("ClubMembers");

  });

  test('TC11 - ArrayResizer', async ({ frq, page }) => {
    
    await frq.ClickArrayResizer();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('TC12 - ArrayResizer', async ({ frq, page }) => {
    
    await frq.ClickArrayResizer();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await page.waitForTimeout(5000);

    await expect(element).toHaveText("ArrayResizer");

  });

  test('TC13 - TextBook', async ({ frq, page }) => {
    
    await frq.ClickTextBook();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('TC14 - TextBook', async ({ frq, page }) => {
    
    await frq.ClickTextBook();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await page.waitForTimeout(5000);

    await expect(element).toHaveText("Textbook");

  });

  test('TC15 - ReviewAnalysis', async ({ frq, page }) => {
    
    await frq.ClickReviewAnalysis();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('TC16 - ReviewAnalysis', async ({ frq, page }) => {
    
    await frq.ClickReviewAnalysis();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await page.waitForTimeout(5000);

    await expect(element).toHaveText("ReviewAnalysis");

  });

  test('TC17 - AppointmentBook', async ({ frq, page }) => {
    
    await frq.ClickAppointmentBook();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('TC18 - AppointmentBook', async ({ frq, page }) => {
    
    await frq.ClickAppointmentBook();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await page.waitForTimeout(5000);

    await expect(element).toHaveText("AppointmentBook");

  });

  test('TC19 - Sign', async ({ frq, page }) => {
    
    await frq.ClickSignFrq();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('TC20 - Sign', async ({ frq, page }) => {
    
    await frq.ClickSignFrq();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await page.waitForTimeout(5000);

    await expect(element).toHaveText("Sign");

  });

  test('TC21 - WeatherData', async ({ frq, page }) => {
    
    await frq.ClickWeatherData();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('TC22 - WeatherData', async ({ frq, page }) => {
    
    await frq.ClickWeatherData();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await page.waitForTimeout(5000);

    await expect(element).toHaveText("WeatherData");

  });

  test('TC23 - Box Of Candy', async ({ frq, page }) => {
    
    await frq.ClickBoxOfCandy();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await page.reload();

    await frq.ClickApCalendarFrq();

   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await expect(element).not.toHaveText(frqData.DelimeterParagraphText);

  });

  test('TC24 - Box Of Candy', async ({ frq, page }) => {
    
    await frq.ClickBoxOfCandy();
    await frq.FillTextInParagraph(frqData.DelimeterParagraphText)
    await frq.ClickGotIt();
    await frq.ClickStartCourseButton();
    await frq.ClickTeamDropDown();
    await frq.SelectTeam();
    await frq.ClickConfirmButton();

   
   //verify heading
    const element = await page.locator(frqData.DelimeterParagraphDiv);

    await page.waitForTimeout(5000);

    await expect(element).toHaveText("BoxOfCandy");

  });

});
