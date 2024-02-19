//import { browser } from "@wdio/globals"
import MainPage from "../pageobjects/main_page.ts";

describe('The Main Page', () => {
    it('should have the right website title', async () => {
        await MainPage.open('https://demo.guru99.com/test/newtours/');
        (await $('body')).waitForExist();
        const title = await MainPage.title;
        await expect(title).toStrictEqual('Welcome: Mercury Tours')
    })

    it('should have the right Website url', async () => {
        const url = await MainPage.url;
        await expect(url).toEqual('https://demo.guru99.com/test/newtours/')
    })
})



