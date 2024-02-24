
export default class Page {
    protected registrationButton = 'input[href="register.php"]'

    constructor() {
    }

    protected async open(path: string) {
        browser.url(path)
    }



    /* async clickResistrationButton(): Promise<RegistrationPage> {
         this.performClick(this.registrationButton);
         return new RegistrationPage() 

    } */

    protected performClick(buttonLocator: string): void {
        $(buttonLocator).click();
    }

    protected typeInputValue(inputLocator: string, inputValue: string | number) {
        $(inputLocator).setValue(inputValue);
    }

    get url(): Promise<string> {
        const url = browser.getUrl();
        return url;
    }

    get title(): Promise<string> {
        const title = browser.getTitle();
        return title;
    }

}