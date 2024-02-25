import { browser } from "@wdio/globals"
import Page from "./page.ts";

class SuccessRegistrationPage extends Page {

    /**
     * the following are the locators of the texts that contains the full name and user name
     */
    private userNameConfirmationText: string = "p:nth-child(3)>font>b";
    private fulNameConfirmationText: string = "p:nth-child(1)>font>b";


    constructor() {
        super();
    }

    /**
     * 
     * @returns the text that says that your user name was correctly register
     */
    public async getUserNameConfirmationText(): Promise<string> {
        const label = ((await $(this.userNameConfirmationText)));
        return await label.getText();
        //console.log(text + "*****")
    }

    /**
     * 
     * @returns the text that contain the full name register in the user account
     */
    public async getFullNameConfirmationText(): Promise<string> {
        const label = await $(this.fulNameConfirmationText);
        return await label.getText();
    }

}
export default new SuccessRegistrationPage();