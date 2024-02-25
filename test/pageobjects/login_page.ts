import Page from "./page.ts";

class LoginPage extends Page {

    private usernameInput: string = '[name="userName"]';
    private passwordInput: string = '[name="password"]';
    private submitButton: string = '[name="submit"]';
    private incorrectCredentialsMessage: string = 'td>span'

    constructor() {
        super()
    }

    async open(url: string) {
        await super.open(url);
    }

    get url(): Promise<string> {
        const url = browser.getUrl();
        return url;
    }

    get title(): Promise<string> {
        const title = browser.getTitle();
        return title;
    }

    /**
     * Introduce the username into the input box
     * @param userName nickname used to identify the user
     */
    public typeUserName(userName: string) {
        this.typeInputValue(this.usernameInput, userName);
    }

    /**
     * Introduce the password into the input box
     * @param password password of the user's account
     */
    public typePassword(password: string) {
        this.typeInputValue(this.passwordInput, password);
    }

    /**
     * click the submit button 
     */
    public clickSubmitButton() {
        this.performClick(this.submitButton);
    }


}
export default new LoginPage(); 