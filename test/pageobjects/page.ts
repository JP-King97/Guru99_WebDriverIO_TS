export default class Page {
    constructor() {
    }

    async open(path: string) {
        await browser.url(path)
    }

    get url(): Promise<string> {
        const url = browser.getUrl();
        return url;
    }

    get title(): Promise<string> {
        const title = browser.getTitle();
        return title;
    }

}