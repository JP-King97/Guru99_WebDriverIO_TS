import { browser } from '@wdio/globals'
import Page from './page.ts';


class RegistrationPage extends Page {

    //private pageTitle;
    private firstNameInput: string = '[name="firstName"]';
    private lastNameInput: string = '[name="lastName"]';
    private phoneNumbInput: string = '[name="phone"]';
    private emailInput: string = '[name="userName"]';
    private addressInput: string = '[name="address1"]';
    private cityInput: string = '[name="city"]';
    private stateInput: string = '[name="state"]';
    private postalInput: string = '[name="postalCode"]';
    private countryDropList: string = '[name="country"]';
    private userNameInput: string = '[name="email"]';
    private passwordInput: string = '[name="password"]';
    private confirmPasswordInput: string = '[name="confirmPassword"]';
    private submitButton: string = '[name="submit"]';


    constructor() {
        super()
    }

    public async open(url: string) {
        super.open(url);
    }

    get url(): Promise<string> {
        return browser.getUrl();
    }

    get title(): Promise<string> {
        return browser.getTitle();
    }

    public clickRegistrationButton(): void {
        this.performClick(this.registrationButton);
    }

    public typeFirstName(firstName: string) {
        this.typeInputValue(this.firstNameInput, firstName);
    }

    public typeLastName(lastName: string) {
        this.typeInputValue(this.lastNameInput, lastName);
    }

    public typePhoneNumb(phoneNumb: number) {
        this.typeInputValue(this.phoneNumbInput, phoneNumb);
    }

    public typeEmail(email: string) {
        this.typeInputValue(this.emailInput, email)
    }

    public typeAddress(address: string) {
        this.typeInputValue(this.addressInput, address)
    }

    public typeCity(city: string) {
        this.typeInputValue(this.cityInput, city);
    }

    public typeState(state: string) {
        this.typeInputValue(this.stateInput, state);
    }

    public typePostal(postal: number) {
        this.typeInputValue(this.postalInput, postal);
    }

    public async selectCountry(country: string) {
        await this.performClick(this.countryDropList);
        //this.typeInputValue(this.countryDropList, country);
        //await browser.keys('Enter');
        await $('option[value="COLOMBIA"]').click();
    }

    public typeUserName(userName: string) {
        this.typeInputValue(this.userNameInput, userName);
    }

    public typePassword(password: string) {
        this.typeInputValue(this.passwordInput, password);
    }

    public typeConfirmPassword(password: string) {
        this.typeInputValue(this.confirmPasswordInput, password);
    }

    public submitRegistrationInfo() {
        this.performClick(this.submitButton);
    }



}

export default new RegistrationPage();