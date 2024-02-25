//import { browser } from '@wdio/globals'
//import RegistrationPage from '../pageobjects/registration_page.ts'
import Page from './page.ts';

class MainPage extends Page {

    private userNameBox = 'input[name="userName"]';
    private passwordBox = 'input[name="password"]';
    private submitButton = 'input[name="submit"]';
    //private image = 'img[alt="Mercury Tours"';

    async open(url: string) {
        super.open(url);
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
     * Perform a click on the 'register' button
     */
    clickRegistrationButton(): void {
        this.performClick(this.registrationButton);
    }

}
export default new MainPage();