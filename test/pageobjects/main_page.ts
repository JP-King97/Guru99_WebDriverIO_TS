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

    typeUserName(userName: string): void {
        $(this.userNameBox).setValue(userName);
    }

    getUserNameValue(): Promise<string> {
        //$(this.userNameBox).waitUntil($(this.userNameBox).getValue() !== "")
        const userName = $(this.userNameBox).getValue();
        return userName;
    }

    typePassword(password: string): void {
        $(this.passwordBox).setValue(password);
    }

    clickSubmitButton() {
        $(this.submitButton).click();

    }

}
export default new MainPage();