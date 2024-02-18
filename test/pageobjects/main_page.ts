import { browser } from '@wdio/globals'

class MainPage {
    private url: string;

    constructor() {
        this.url = 'https://demo.guru99.com/test/newtours/';
    }

    getToGuru99Page(): void {
        browser.url(this.url)
    }

}
export default new MainPage();