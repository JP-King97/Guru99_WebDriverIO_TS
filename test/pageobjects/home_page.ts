//import { browser } from '@wdio/globals'
//import RegistrationPage from '../pageobjects/registration_page.ts'
import Page from './page.ts';

class MainPage extends Page {

    private userNameBox: string = 'input[name="userName"]';
    private passwordBox: string = 'input[name="password"]';
    private submitButton: string = 'input[name="submit"]';
    private signOnSectionButton: string = '[href="login.php"]';
    //private image = 'img[alt="Mercury Tours"';

    async open() {
        await super.open('https://demo.guru99.com/test/newtours/');
    }

    get url(): Promise<string> {
        return super.url;
    }

    get title(): Promise<string> {
        return super.title;
    }

    /**
     * Introduce the username into the input box 
     * @param userName username of a registered account
     */
    typeUserName(userName: string): void {
        $(this.userNameBox).setValue(userName);
    }

    /**
     * 
     * @returns 
     */
    getUserNameValue(): Promise<string> {
        //$(this.userNameBox).waitUntil($(this.userNameBox).getValue() !== "")
        const userName = $(this.userNameBox).getValue();
        return userName;
    }

    /**
     * Indroduce the password into the input box
     * @param password password of a registered account
     */
    typePassword(password: string): void {
        $(this.passwordBox).setValue(password);
    }

    /**
     * Perform a click on the 'submit' button
     */
    clickSubmitButton(): void {
        this.performClick(this.submitButton);
    }

    /**
     * Perform a click on the 'register' section button
     */
    clickRegistrationButton(): void {
        this.performClick(this.registrationButton);
    }

    /**
     * Perform a click on the 'sign-on' section button
     */
    clickSignOnSectionButton(): void {
        this.performClick(this.signOnSectionButton);
    }

}
export default new MainPage();