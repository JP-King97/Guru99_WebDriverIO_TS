import { browser } from '@wdio/globals'
import MainPage from '../pageobjects/main_page.ts'


describe('The login feature', () => {
    it('should work with valid credentials', async () => {
        await MainPage.open('https://demo.guru99.com/test/newtours/');
        //await browser.pause(4000);
        //(await $('body')).waitForExist
        await MainPage.typeUserName('J3141592');
        await MainPage.getUserNameValue();
        MainPage.typePassword('K4897');
        //await browser.pause(4000)
        const userNameValue: string = await MainPage.getUserNameValue();
        await expect(userNameValue).toBe('J3141592');
        await MainPage.clickSubmitButton();
        //await browser.pause(4000)

        // console.log(MainPage.userNameBoxValue);



    })
})