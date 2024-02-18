import { browser } from "@wdio/globals"
import MainPage from "../pageobjects/main_page.ts";

describe('The Main Page', () => {
    it('should have the right website title', async () => {
        MainPage.getToGuru99Page();
        await expect(browser).toHaveTitle('Welcome: Mercury Tours')
    })

    it('should have the right Website url', async () => {
        await expect(browser).toHaveUrl('https://demo.guru99.com/test/newtours/')
    })
})

