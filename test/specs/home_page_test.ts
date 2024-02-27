import { browser } from "@wdio/globals"
import Page from "../pageobjects/page.ts";
import { expect } from "@wdio/globals"
import HomePage from "../pageobjects/home_page.ts"

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

    it('should have websites services displayed', async () => {
        const a = ['Home', 'Flights', 'Hotels', 'Car Rentals', 'Cruises', 'Destinations', 'Vacations'];
        const textItems = await HomePage.servTable;
        const texts = await textItems.map(async (e) => await e.getText())
        texts.forEach((e) => {
            console.log(e)
            expect(a).toContain(e)
        })
    })
    //await expect($$('table[border="2"] a'))


    // const servTextList = await HomePage.servList();

    // await browser.pause(2000)
    // for (let i = 0; i < (servTextList).length; i++) {
    //     await expect(servTextList).toContain(a[i]);
    // }
    // const servArray = await $$('table tr.mouseOut a');
    // let servTexts = [];
    // for (let i = 0; i < servArray.length; i++) {
    //     await console.log(servArray[i].getText() + "*******");
    //     await servTexts.push(servArray[i].getText())
    //     await expect(servArray[i].getText()).toBe(a[i])
    // }






    // const servArray = await HomePage.getServicetableTexts();
    // await expect(servTexts.length).toBeGreaterThan(0);
    // await expect(servTexts.length).toEqual(7);
    // const a = ['Home', 'Flights', 'Hotels', 'Car Rentals', 'Cruises', 'Destinations', 'Vacations'];
    // for (let i = 0; i < (servTexts).length; i++) {
    //     await expect(servTexts[i]).toEqual(a[i]);
    // }
})




