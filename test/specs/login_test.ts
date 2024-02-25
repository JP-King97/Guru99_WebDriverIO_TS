import { browser } from '@wdio/globals'
import MainPage from '../pageobjects/main_page.ts'


describe('The login feature', () => {
    it('should work with valid credentials', async () => {
        await MainPage.open('https://demo.guru99.com/test/newtours/');
        //await browser.pause(4000);
        //(await $('body')).waitForExist
        MainPage.typeUserName('Kingtero97');
        await MainPage.getUserNameValue();
        MainPage.typePassword('J3141592');
        await browser.pause(4000)
        const userNameValue: string = await MainPage.getUserNameValue();
        await expect(userNameValue).toBe('Kingtero97');
        MainPage.clickSubmitButton();
        await browser.pause(4000)

        // console.log(MainPage.userNameBoxValue);
    })
})