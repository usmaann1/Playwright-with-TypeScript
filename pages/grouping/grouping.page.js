const { PlaywrightCore } = require("../../module-imports/helperFunctions.imports");
import { expect } from "@playwright/test";
import Locators from "./grouping.locator.json";

exports.grouping = class grouping {
    constructor(page) {
        this.intializePage(page);
    }

    intializePage(page) {
        this.page = page;
        this.baseURL = "./";
        
        this.TeamCoursesBtn = this.page.locator(Locators.TeamCoursesBtn);
        this.CreateNewTeamBtn = this.page.locator(Locators.CreateNewTeamBtn);
        this.StartfromScratch = this.page.locator(Locators.StartfromScratch);
        this.TeamNametxtbox = this.page.locator(Locators.TeamNametxtbox);
        this.SubmitBtn = this.page.locator(Locators.SubmitBtn);
        this.CreatenewassignmentBtn = this.page.locator(Locators.CreatenewassignmentBtn);
        this.CodingAssignmentBtn = this.page.locator(Locators.CodingAssignmentBtn);
        this.CodingAssignmentName = this.page.locator(Locators.CodingAssignmentName);
        this.CodingAssignmentCreateBtn = this.page.locator(Locators.CodingAssignmentCreateBtn);
        this.PublishButton = this.page.locator(Locators.PublishButton);
        this.arrowBtnLeftSideBar = this.page.locator(Locators.arrowBtnLeftSideBar);
        this.invite_StudentsBtn = this.page.locator(Locators.invite_StudentsBtn);
        this.invitestudents_closeBtn = this.page.locator(Locators.invitestudents_closeBtn);
        this.copy_InviteStudentsBtn = this.page.locator(Locators.copy_InviteStudentsBtn);
        this.Publish_AssignmentBtn = this.page.locator(Locators.Publish_AssignmentBtn);
        this.PageLockedText = this.page.locator(Locators.PageLockedText);
        this.waitingForTeacherText = this.page.locator(Locators.waitingForTeacherText);
        this.addnewitem_btn = this.page.locator(Locators.addnewitem_btn);
        this.Presentation_btn = this.page.locator(Locators.Presentation_btn);
        this.Gotit_btn = this.page.locator(Locators.Gotit_btn);
        this.ViewStuPreview_btn = this.page.locator(Locators.ViewStuPreview_btn);
        this.ExitStudentView_btn = this.page.locator(Locators.ExitStudentView_btn);
        this.thirdsixdot_btn = this.page.locator(Locators.thirdsixdot_btn);
        this.EmailStudentSignup_textfield = this.page.locator(Locators.EmailStudentSignup_textfield);
        this.PasswordStudentSignup_textfield = this.page.locator(Locators.PasswordStudentSignup_textfield);
        this.SubmitStudentSignup_btn = this.page.locator(Locators.SubmitStudentSignup_btn);
        this.clickLogin_btn = this.page.locator(Locators.login_btn);

        this.InitiliazeJuiceMind_IDE = this.page.locator(Locators.Initialize_JuiceMind_IDE);
        this.ProjectName_TextBox = this.page.locator(Locators.ProjectNameTextBox);
        this.ProjectType_DropDown = this.page.locator(Locators.ProjectTypeDropDown);
        this.ProjectType_Java = this.page.locator(Locators.ProjectTypeJava);
        this.GroupProject_Toggle = this.page.locator(Locators.GroupProjectToggle);
        this.AddGroupButton=this.page.locator(Locators.AddGroupBtn)
        this.CrossGroupIcon = this.page.locator(Locators.GroupCrossIcon)
        this.SubmitGroupData = this.page.locator(Locators.SubmitBtn) 
        
    }

    async NavigateToTeamCoursesPage() {
        await PlaywrightCore.click(this.TeamCoursesBtn);
    }

    async ClickOnCreateNewTeamBtn() {
        await PlaywrightCore.click(this.CreateNewTeamBtn);
    }

    async ClickOnStartFromScratch() {
        await PlaywrightCore.click(this.StartfromScratch);
    }

    async FillTeamNameTxtBox() {
        await PlaywrightCore.fill(this.TeamNametxtbox, 'Java Class');
    }

    async Submitbtn() {
        await PlaywrightCore.click(this.SubmitBtn);
    }

    async CreateAssignmentbtn() {
        await PlaywrightCore.click(this.CreatenewassignmentBtn);
    }

    async CodingAssignmentbtn() {
        await PlaywrightCore.click(this.CodingAssignmentBtn);
    }

    async CodingAssignment() {
        await PlaywrightCore.fill(this.CodingAssignmentName, 'Module 7');
    }

    async AssignmentCreateBtn() {
        await PlaywrightCore.click(this.CodingAssignmentCreateBtn);
    }

    async Publish() {
        await PlaywrightCore.click(this.PublishButton);
    }

    async leftsidebarArrowBtn() {
        await PlaywrightCore.click(this.arrowBtnLeftSideBar);
    }

    async InviteStudentsbtn() {
        await PlaywrightCore.click(this.invite_StudentsBtn);
    }

    async publishAssignmentbtn() {
        await PlaywrightCore.click(this.Publish_AssignmentBtn);
    }

    async AddNewItemBtn() {
        await PlaywrightCore.click(this.addnewitem_btn);
    }

    async waitForFunction() {
        await this.page.waitForTimeout(2000);
    }

    async PresentationMode() {
        await PlaywrightCore.click(this.Presentation_btn);
    }

    async GotItButton() {
        await PlaywrightCore.click(this.Gotit_btn);
    }

    async ExitStudentView() {
        await PlaywrightCore.click(this.ExitStudentView_btn);
    }

    async thirdsixdot() {
        await PlaywrightCore.click(this.thirdsixdot_btn);
    }

    async CopyinviteStudentsbtn() {
        await PlaywrightCore.click(this.copy_InviteStudentsBtn);
    }

    async ClickCrossGroupIcon() {
        await PlaywrightCore.click(this.CrossGroupIcon);
    }

    async closeinvitestudentspopup() {
        await PlaywrightCore.click(this.invitestudents_closeBtn);
    }

    async publishassignmentbutton() {
        await PlaywrightCore.click(this.Publish_AssignmentBtn);
    }

    async clickLoginbutton(newPage) {
        await newPage.click(Locators.login_btn);
    }

    async clickfinishbutton(newPage) {
        await newPage.click(Locators.finish_btn);
    }

    async fillstudentsignin(newPage) {
        await newPage.fill(Locators.EmailStudentSignin_textfield, 'student01@gmail.com');
        await newPage.fill(Locators.PasswordStudentSignin_textfield, '98769876');
        await newPage.click(Locators.ClickSignin_btn);
    }

    async fillstudentsignin_2(newPage) {
        await newPage.fill(Locators.EmailStudentSignin_textfield, 'student02@gmail.com');
        await newPage.fill(Locators.PasswordStudentSignin_textfield, '98769876');
        await newPage.click(Locators.ClickSignin_btn);
    }

    async verifyAssignmentHeading() {
        await expect(Locators.studentAssignmentHeading).toHaveText('Sample Lesson Plan');
    }

    async ClickInitiliazeJuiceMindIDE(page) {
        await PlaywrightCore.click(this.InitiliazeJuiceMind_IDE)
    }
    
    async FillProjectNameTextBox() {
    await PlaywrightCore.fill(this.ProjectName_TextBox, 'Sample');    
}
    
    async ClickProjectTypeDropDown() {
        await PlaywrightCore.click(this.ProjectType_DropDown);
    }
    
    async ClickProjectTypeJava() {
        await PlaywrightCore.click(this.ProjectType_Java);
    }

    async ClickAddGroup() {
        await PlaywrightCore.click(this.AddGroupButton);
    }
    
    async ClickGroupProjectToggle() {
        await PlaywrightCore.click(this.GroupProject_Toggle);
    }

    async ClickSubmitBtn() {
        await PlaywrightCore.click(this.SubmitGroupData);
    }
    
};
