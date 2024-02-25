//import { browser } from "@wdio/globals"
import HomePage from "../pageobjects/home_page.ts";

describe('The Main Page', () => {
    it('should have the right website title', async () => {
        HomePage.open();
        (await $('body')).waitForExist();
        const title = await HomePage.title;
        await expect(title).toStrictEqual('Welcome: Mercury Tours')
    })

    it('should have the right Website url', async () => {
        const url = await HomePage.url;
        await expect(url).toEqual('https://demo.guru99.com/test/newtours/')
    })
})



