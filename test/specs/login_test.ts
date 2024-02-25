import { browser } from '@wdio/globals'
import HomePage from '../pageobjects/home_page.ts'
import Page from '../pageobjects/page.ts';
import LoginPage from '../pageobjects/login_page.ts';
import SuccessLoginPage from '../pageobjects/success_login_page.ts'


describe('The login feature in the main page', () => {
    it('should work with valid credentials', async () => {
        await HomePage.open();
        //await browser.pause(4000);
        //(await $('body')).waitForExist
        HomePage.typeUserName('Kingtero97');
        await HomePage.getUserNameValue();
        HomePage.typePassword('J3141592');
        await browser.pause(4000)
        const userNameValue: string = await HomePage.getUserNameValue();
        await expect(userNameValue).toBe('Kingtero97');
        HomePage.clickSubmitButton();
        await browser.pause(4000)

        // console.log(MainPage.userNameBoxValue);
    })
})

describe('The login feature in the login page', () => {
    it('should work with valid credentials', async () => {
        await HomePage.open();
        HomePage.clickSignOnSectionButton();
        await browser.waitUntil(async () => {
            return (await browser.getUrl()) === 'https://demo.guru99.com/test/newtours/login.php'; // Replace 'login-page-url' with the actual URL of the login page
        });
        const title: string = await LoginPage.title;
        await expect(title).toBe('Sign-on: Mercury Tours');
        LoginPage.typeUserName('Kingtero97');
        await browser.pause(4000);
        LoginPage.typePassword('J3141592');
        await browser.pause(4000);
        LoginPage.clickSubmitButton();
        await browser.pause(4000);
        const successLabel: string = await SuccessLoginPage.getMessageText();
        await expect(successLabel).toBe('Login Successfully');


    })
})