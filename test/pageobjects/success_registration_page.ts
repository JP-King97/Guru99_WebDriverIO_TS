import { browser } from "@wdio/globals"
import Page from "./page.ts";

class SuccessRegistrationPage extends Page {

    private userNameConfirmationText: string = "p:nth-child(3)>font>b";
    private fulNameConfirmationText: string = "p:nth-child(1)>font>b";


    constructor() {
        super();
    }

    public async getUserNameConfirmationText(): Promise<string> {
        const label = ((await $(this.userNameConfirmationText)));
        return await label.getText();
        //console.log(text + "*****")
    }

    public async getFullNameConfirmationText(): Promise<string> {
        const label = await $(this.fulNameConfirmationText);
        return await label.getText();
    }

}
export default new SuccessRegistrationPage();