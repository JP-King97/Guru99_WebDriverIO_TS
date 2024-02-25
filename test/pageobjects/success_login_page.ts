import Page from "./page.ts";

class SuccessRegistrationPage extends Page {

    private loginSuccessfullyText: string = 'td>h3';

    constructor() {
        super();
    }

    async open(url: string) {
        super.open(url);
    }

    public async getMessageText(): Promise<string> {
        const label = await $(this.loginSuccessfullyText);
        return label.getText();
    }

}
export default new SuccessRegistrationPage();