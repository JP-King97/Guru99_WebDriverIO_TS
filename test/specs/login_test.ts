import { browser } from '@wdio/globals'
import MainPage from '../pageobjects/main_page.ts'


describe('The login feature', () => {
    it('should work with valid credentials', async () => {
        MainPage.open('https://demo.guru99.com/test/newtours/');
        await browser.pause(4000);

        MainPage.typeUserName('J3141592');
        await browser.pause(4000)

        MainPage.typePassword('K4897')
        await browser.pause(4000)

        MainPage.clickSubmitButton()
        await browser.pause(4000)

        // console.log(MainPage.userNameBoxValue);



    })
})