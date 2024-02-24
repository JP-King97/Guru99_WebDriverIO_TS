import registration_page from "../pageobjects/registration_page.ts";
import success_registration_page from "../pageobjects/success_registration_page.ts"

describe('The registration page', () => {

    before(() => {
        registration_page.open('https://demo.guru99.com/test/newtours/register.php');
    })

    it('should type the contact, mailing, and user information', async () => {
        registration_page.typeFirstName('Juan Pablo');
        registration_page.typeLastName('Quintero Martinez');
        registration_page.typePhoneNumb(6267764968);
        registration_page.typeEmail('J31415PQM@gmail.com');

        await browser.pause(3000);

        registration_page.typeAddress('Av siempre viva');
        registration_page.typeCity('New York');
        registration_page.typeState('New York');
        registration_page.typePostal(55849);
        registration_page.selectCountry('UNITED STATES');

        await browser.pause(3000);

        registration_page.typeUserName('Kingtero97');
        registration_page.typePassword('J3141592');
        registration_page.typeConfirmPassword('J3141592');

        await browser.pause(3000);

        registration_page.submitRegistrationInfo();

        await browser.pause(3000);

        let fulNameText = await success_registration_page.getFullNameConfirmationText();
        await expect(fulNameText).toContain('Juan Pablo Quintero Martinez')

        let userNameText = await success_registration_page.getUserNameConfirmationText();
        await expect(userNameText).toContain("Kingtero97");

    })
})