const { PlaywrightCore, UserFunctions } = require('../../../module-imports/helperFunctions.imports')
const { test, expect } = require('../../../module-imports/testFixtures.imports')
import { FAILED_TEST_CASES } from '../../../failed-test-cases/failed-test-cases';
import CLtd from '../../test-assets/test-data-files/create-lesson/create-lesson-testData.json'
import CTtd from '../../test-assets/test-data-files/create-teams/create-teams-testData.json'
import Credentials from "../../test-assets/test-data-files/Credentials/credentials.json";

test.describe('TestSuite: Embed Link', () => {

    const randomNumber = UserFunctions.generateRandomString(5)
    const userEmail = Credentials.Embed_Email
    const userPwd = Credentials.Embed_Password
    const teamName = CLtd.teamName + randomNumber
    const lessonName = CLtd.lessonName + '-' + randomNumber

    test.beforeEach(async ({ loginPage, createTeams, createLesson }, testInfo) => {
        if (FAILED_TEST_CASES.length !== 0) {
            if (!FAILED_TEST_CASES.includes(testInfo.title)) {
              test.skip('Test case not included in the list');
            }
          }
        await loginPage.NavigateToLoginPage()
        await loginPage.fillCredentialsAndLogin(userEmail, userPwd)
        await expect(loginPage.ProfilePicture).toBeVisible()
        await expect(createTeams.TeamsCoursesBtn).toHaveText(CTtd.TeamsCoursesBtnValue)
        await PlaywrightCore.click(createTeams.TeamsCoursesBtn)
        await createTeams.createNewTeamFromScratch(teamName)
        await createLesson.clickOnAddNewItem()
        await createLesson.selectLessonItemType()
        await createLesson.createALesson(lessonName)
        await createLesson.setVisibility()
        await createLesson.hoverOverFirstRow()
        await createLesson.hoverAndClickOnPlusBtn()
        await expect(createLesson.dropDownContainer).toBeVisible()
    });

    test('Umair - TC-01 - Verify Embed Functionality - Youtube Video 1', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedYTLink1)
        // assertions to check uploaded video
        await expect(createLesson.YoutubePlayBtn).toBeVisible()
        await expect(createLesson.WatchOnYoutubeBtn).toBeVisible()
        await createLesson.valiadteYoutubeVideoHeading(CLtd.RelaxingRecitationVideoHeadingValue)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteYoutubeVideoHeading(CLtd.RelaxingRecitationVideoHeadingValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
        await createLesson.DeleteElementFromEditor(CLtd.options.Delete)
    });

    test('Umair - TC-02 - Verify Embed Functionality - Youtube Video 2', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedYTLink2)
        // assertions to check uploaded video
        await expect(createLesson.YoutubePlayBtn).toBeVisible()
        await expect(createLesson.WatchOnYoutubeBtn).toBeVisible()
        await createLesson.valiadteYoutubeVideoHeading(CLtd.UnderArmourShoeReviewHeadingValue)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteYoutubeVideoHeading(CLtd.UnderArmourShoeReviewHeadingValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-03 - Verify Embed Functionality - DailyMotion Video 1', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedDMLink1)
        // assertion to check uploaded video
        await createLesson.valiadteDailyMotionVideoHeading(CLtd.DailyMotionVideoHeadingValue)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteDailyMotionVideoHeading(CLtd.DailyMotionVideoHeadingValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-04 - Verify Embed Functionality - DailyMotion Video 2', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedDMLink2)
        // assertion to check uploaded video
        await createLesson.valiadteDailyMotionVideoHeading(CLtd.DailyMotionVideoHeadingValue2)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteDailyMotionVideoHeading(CLtd.DailyMotionVideoHeadingValue2)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-05 - Verify Embed Functionality - BITCHUTE Video 1', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedBCLink1)
        // assertion to check uploaded video
        await createLesson.valiadteBitChuteVideoHeading(CLtd.BitChuteVideoHeadingValue1)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteBitChuteVideoHeading(CLtd.BitChuteVideoHeadingValue1)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-06 - Verify Embed Functionality - BITCHUTE Video 2', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedBCLink2)
        // assertion to check uploaded video
        await createLesson.valiadteBitChuteVideoHeading(CLtd.BitChuteVideoHeadingValue2)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteBitChuteVideoHeading(CLtd.BitChuteVideoHeadingValue2)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-07 - Verify Embed Functionality - VEOH Video 1', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedVeohLink1)
        // assertion to check uploaded video
        await createLesson.valiadteVeohVideoHeading(CLtd.VeohVideoHeadingValue1)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteVeohVideoHeading(CLtd.VeohVideoHeadingValue1)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-08 - Verify Embed Functionality - VEOH Video 2', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedVeohLink2)
        // assertion to check uploaded video
        await createLesson.valiadteVeohVideoHeading(CLtd.VeohVideoHeadingValue2)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteVeohVideoHeading(CLtd.VeohVideoHeadingValue2)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });
    

    test('Umair - TC-09 - Verify Replace URL Functionality in Embed - YT to YT', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedYTLink1)
        // assertion to check uploaded video
        await expect(createLesson.YoutubePlayBtn).toBeVisible()
        await expect(createLesson.WatchOnYoutubeBtn).toBeVisible()
        await createLesson.valiadteYoutubeVideoHeading(CLtd.RelaxingRecitationVideoHeadingValue)
        // replace video
        await createLesson.replaceEmbedVideo(CLtd.EmbedYTLink2)
        // assertion to check replaced video
        await PlaywrightCore.click(createLesson.SetupBtn)
        await createLesson.valiadteYoutubeVideoHeading(CLtd.UnderArmourShoeReviewHeadingValue)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteYoutubeVideoHeading(CLtd.UnderArmourShoeReviewHeadingValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-10 - Verify Replace URL Functionality in Embed - YT to DM', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedYTLink1)
        // assertion to check uploaded video
        await expect(createLesson.YoutubePlayBtn).toBeVisible()
        await expect(createLesson.WatchOnYoutubeBtn).toBeVisible()
        await createLesson.valiadteYoutubeVideoHeading(CLtd.RelaxingRecitationVideoHeadingValue)
        // replace video
        await createLesson.replaceEmbedVideo(CLtd.EmbedDMLink1)
        // assertion to check replaced video
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await createLesson.valiadteDailyMotionVideoHeading(CLtd.DailyMotionVideoHeadingValue)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteDailyMotionVideoHeading(CLtd.DailyMotionVideoHeadingValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-11 - Verify Replace URL Functionality in Embed - YT to BC', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedYTLink1)
        // assertion to check uploaded video
        await expect(createLesson.YoutubePlayBtn).toBeVisible()
        await expect(createLesson.WatchOnYoutubeBtn).toBeVisible()
        await createLesson.valiadteYoutubeVideoHeading(CLtd.RelaxingRecitationVideoHeadingValue)
        // replace video
        await createLesson.replaceEmbedVideo(CLtd.EmbedBCLink1)
        // assertion to check replaced video
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await createLesson.valiadteBitChuteVideoHeading(CLtd.BitChuteVideoHeadingValue1)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteBitChuteVideoHeading(CLtd.BitChuteVideoHeadingValue1)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-12 - Verify Replace URL Functionality in Embed - YT to Veoh', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedYTLink1)
        // assertion to check uploaded video
        await expect(createLesson.YoutubePlayBtn).toBeVisible()
        await expect(createLesson.WatchOnYoutubeBtn).toBeVisible()
        await createLesson.valiadteYoutubeVideoHeading(CLtd.RelaxingRecitationVideoHeadingValue)
        // replace video
        await createLesson.replaceEmbedVideo(CLtd.EmbedVeohLink1)
        // assertion to check replaced video
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await createLesson.valiadteVeohVideoHeading(CLtd.VeohVideoHeadingValue1)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteVeohVideoHeading(CLtd.VeohVideoHeadingValue1)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-13 - Verify Replace URL Functionality in Embed - DM to DM', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedDMLink1)
        // assertion to check uploaded video
        await createLesson.valiadteDailyMotionVideoHeading(CLtd.DailyMotionVideoHeadingValue)
        // replace video
        await createLesson.replaceEmbedVideo(CLtd.EmbedDMLink2)
        // assertion to check replaced video
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await createLesson.valiadteDailyMotionVideoHeading(CLtd.DailyMotionVideoHeadingValue2)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteDailyMotionVideoHeading(CLtd.DailyMotionVideoHeadingValue2)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-14 - Verify Replace URL Functionality in Embed - DM to YT', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedDMLink1)
        // assertion to check uploaded video
        await createLesson.valiadteDailyMotionVideoHeading(CLtd.DailyMotionVideoHeadingValue)
        // replace video
        await createLesson.replaceEmbedVideo(CLtd.EmbedYTLink1)
        // assertion to check replaced video
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await createLesson.valiadteYoutubeVideoHeading(CLtd.RelaxingRecitationVideoHeadingValue)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteYoutubeVideoHeading(CLtd.RelaxingRecitationVideoHeadingValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-15 - Verify Replace URL Functionality in Embed - DM to BC', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedDMLink1)
        // assertion to check uploaded video
        await createLesson.valiadteDailyMotionVideoHeading(CLtd.DailyMotionVideoHeadingValue)
        // replace video
        await createLesson.replaceEmbedVideo(CLtd.EmbedBCLink1)
        // assertion to check replaced video
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await createLesson.valiadteBitChuteVideoHeading(CLtd.BitChuteVideoHeadingValue1)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteBitChuteVideoHeading(CLtd.BitChuteVideoHeadingValue1)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-16 - Verify Replace URL Functionality in Embed - DM to Veoh', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedDMLink1)
        // assertion to check uploaded video
        await createLesson.valiadteDailyMotionVideoHeading(CLtd.DailyMotionVideoHeadingValue)
        // replace video
        await createLesson.replaceEmbedVideo(CLtd.EmbedVeohLink1)
        // assertion to check replaced video
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await createLesson.valiadteVeohVideoHeading(CLtd.VeohVideoHeadingValue1)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteVeohVideoHeading(CLtd.VeohVideoHeadingValue1)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-17 - Verify Replace URL Functionality in Embed - BC to BC', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedBCLink1)
        // assertion to check uploaded video
        await createLesson.valiadteBitChuteVideoHeading(CLtd.BitChuteVideoHeadingValue1)
        // replace video
        await createLesson.replaceEmbedVideo(CLtd.EmbedBCLink2)
        // assertion to check replaced video
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await createLesson.valiadteBitChuteVideoHeading(CLtd.BitChuteVideoHeadingValue2)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteBitChuteVideoHeading(CLtd.BitChuteVideoHeadingValue2)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-18 - Verify Replace URL Functionality in Embed - BC to YT', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedBCLink1)
        // assertion to check uploaded video
        await createLesson.valiadteBitChuteVideoHeading(CLtd.BitChuteVideoHeadingValue1)
        // replace video
        await createLesson.replaceEmbedVideo(CLtd.EmbedYTLink1)
        // assertion to check replaced video
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await createLesson.valiadteYoutubeVideoHeading(CLtd.RelaxingRecitationVideoHeadingValue)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteYoutubeVideoHeading(CLtd.RelaxingRecitationVideoHeadingValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-19 - Verify Replace URL Functionality in Embed - BC to DM', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedBCLink1)
        // assertion to check uploaded video
        await createLesson.valiadteBitChuteVideoHeading(CLtd.BitChuteVideoHeadingValue1)
        // replace video
        await createLesson.replaceEmbedVideo(CLtd.EmbedDMLink1)
        // assertion to check replaced video
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await createLesson.valiadteDailyMotionVideoHeading(CLtd.DailyMotionVideoHeadingValue)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteDailyMotionVideoHeading(CLtd.DailyMotionVideoHeadingValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-20 - Verify Replace URL Functionality in Embed - BC to Veoh', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedBCLink1)
        // assertion to check uploaded video
        await createLesson.valiadteBitChuteVideoHeading(CLtd.BitChuteVideoHeadingValue1)
        // replace video
        await createLesson.replaceEmbedVideo(CLtd.EmbedVeohLink1)
        // assertion to check replaced video
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await createLesson.valiadteVeohVideoHeading(CLtd.VeohVideoHeadingValue1)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteVeohVideoHeading(CLtd.VeohVideoHeadingValue1)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-21 - Verify Replace URL Functionality in Embed - Veoh to Veoh', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedVeohLink1)
        // assertion to check uploaded video
        await createLesson.valiadteVeohVideoHeading(CLtd.VeohVideoHeadingValue1)
        // replace video
        await createLesson.replaceEmbedVideo(CLtd.EmbedVeohLink2)
        // assertion to check replaced video
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await createLesson.valiadteVeohVideoHeading(CLtd.VeohVideoHeadingValue2)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteVeohVideoHeading(CLtd.VeohVideoHeadingValue2)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-22 - Verify Replace URL Functionality in Embed - Veoh to YT', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedVeohLink1)
        // assertion to check uploaded video
        await createLesson.valiadteVeohVideoHeading(CLtd.VeohVideoHeadingValue1)
        // replace video
        await createLesson.replaceEmbedVideo(CLtd.EmbedYTLink1)
        // assertion to check replaced video
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await createLesson.valiadteYoutubeVideoHeading(CLtd.RelaxingRecitationVideoHeadingValue)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteYoutubeVideoHeading(CLtd.RelaxingRecitationVideoHeadingValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-23 - Verify Replace URL Functionality in Embed - Veoh to DM', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedVeohLink1)
        // assertion to check uploaded video
        await createLesson.valiadteVeohVideoHeading(CLtd.VeohVideoHeadingValue1)
        // replace video
        await createLesson.replaceEmbedVideo(CLtd.EmbedDMLink1)
        // assertion to check replaced video
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await createLesson.valiadteDailyMotionVideoHeading(CLtd.DailyMotionVideoHeadingValue)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteDailyMotionVideoHeading(CLtd.DailyMotionVideoHeadingValue)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

    test('Umair - TC-24 - Verify Replace URL Functionality in Embed - Veoh to BC', async ({ createLesson }) => {
        // upload video
        await createLesson.uploadEmbedVideo(CLtd.EmbedVeohLink1)
        // assertion to check uploaded video
        await createLesson.valiadteVeohVideoHeading(CLtd.VeohVideoHeadingValue1)
        // replace video
        await createLesson.replaceEmbedVideo(CLtd.EmbedBCLink1)
        // assertion to check replaced video
        await PlaywrightCore.click(createLesson.SetupBtn)
        await PlaywrightCore.waitTimeout(createLesson.page, 5000)
        await createLesson.valiadteBitChuteVideoHeading(CLtd.BitChuteVideoHeadingValue1)
        // Navigate to Presentation Mode
        await createLesson.navigateToPresentationMode()
        // Assertion in Presentation Mode
        await createLesson.valiadteBitChuteVideoHeading(CLtd.BitChuteVideoHeadingValue1)
        // Exit Presentation Mode
        await PlaywrightCore.click(createLesson.ExitStudentModeBtn)
        await PlaywrightCore.click(createLesson.SetupBtn)
    });

})