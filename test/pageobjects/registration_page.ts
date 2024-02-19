import { browser } from '@wdio/globals'
class RegistrationPage {
    private browser;

    constructor(browser: WebdriverIO.Browser) {
        this.browser = browser
    }

}

export default new RegistrationPage(browser);