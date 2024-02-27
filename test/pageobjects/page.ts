import { browser } from '@wdio/globals'
/**
 * This is the parent class for all the pages in the directory of a website
 */
export default class Page {
    protected registrationButton = 'input[href="register.php"]'

    constructor() {
    }

    /**
     * Set the browser in a specific URL
     * @param path URL value spressed as an "string"
     */
    protected async open(path: string) {
        browser.url(path)
    }


    /**
     * Perfom a click on the element found by the locattor
     * @param elementLocator is the locator provided and expected to be a button's locator 
     */
    protected performClick(elementLocator: string): void {
        $(elementLocator).click();
    }

    /**
     * Type a value in a input box
     * @param inputLocator locator of the input box
     * @param inputValue value to type
     */
    protected typeInputValue(inputLocator: string, inputValue: string | number) {
        $(inputLocator).setValue(inputValue);
    }

    /**
     * Getter for the URL 
     */
    get url(): Promise<string> {
        const url = browser.getUrl();
        return url;
    }

    /**
     * Getter for the page title
     */
    get title(): Promise<string> {
        const title = browser.getTitle();
        return title;
    }

}