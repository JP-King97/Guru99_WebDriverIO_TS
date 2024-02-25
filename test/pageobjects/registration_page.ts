import { browser } from '@wdio/globals'
import Page from './page.ts';


class RegistrationPage extends Page {


    /**
     * The folowing are the selectors of all the piece of information
     * required for complete the registration process
     */
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


    /**
     * Open the browser in the provide URL path
     * @param url URL path
     */
    public async open(url: string) {
        super.open(url);
    }

    get url(): Promise<string> {
        return browser.getUrl();
    }

    get title(): Promise<string> {
        return browser.getTitle();
    }

    /**
     * Perfom a click on the registration button
     */
    public clickRegistrationButton(): void {
        this.performClick(this.registrationButton);
    }

    /**
     * Introduce the first name information into the input box
     * @param firstName first name of the user
     */
    public typeFirstName(firstName: string) {
        this.typeInputValue(this.firstNameInput, firstName);
    }

    /**
     * Introduce the last name information into the input box
     * @param lastName last name of the user
     */
    public typeLastName(lastName: string) {
        this.typeInputValue(this.lastNameInput, lastName);
    }

    /**
     * Introduce the phone number information into the input box
     * @param phoneNumb phone number of the user 
     */
    public typePhoneNumb(phoneNumb: number) {
        this.typeInputValue(this.phoneNumbInput, phoneNumb);
    }

    /**
     * Introduce the email information into the input box
     * @param email email address of the user
     */
    public typeEmail(email: string) {
        this.typeInputValue(this.emailInput, email)
    }

    /**
     * Introduce the address information into the input box
     * @param address mailing address of the user
     */
    public typeAddress(address: string) {
        this.typeInputValue(this.addressInput, address)
    }

    /**
     * Introduce the city name into the input box
     * @param city city name where the user live
     */
    public typeCity(city: string) {
        this.typeInputValue(this.cityInput, city);
    }

    /**
     * Introduce the state name into the input box
     * @param state state name wherer the user live
     */
    public typeState(state: string) {
        this.typeInputValue(this.stateInput, state);
    }

    /**
     * Introduce the postal code into the input box
     * @param postal postal code of the user
     */
    public typePostal(postal: number) {
        this.typeInputValue(this.postalInput, postal);
    }

    /**
     * Select the name of the country into the input box
     * @param country country name where the user live
     */
    public async selectCountry(country: string) {
        await this.performClick(this.countryDropList);
        await $('option[value="' + country + '"]').click();
    }

    /**
     * Introduce the username into the input box
     * @param userName nickname used to identify the user
     */
    public typeUserName(userName: string) {
        this.typeInputValue(this.userNameInput, userName);
    }

    /**
     * Introduce the password into the input box
     * @param password password of the user's account
     */
    public typePassword(password: string) {
        this.typeInputValue(this.passwordInput, password);
    }

    /**
     * Introduce the password into the confirmation input box
     * @param password password of the user's account
     */
    public typeConfirmPassword(password: string) {
        this.typeInputValue(this.confirmPasswordInput, password);
    }

    /**
     * click the submit button 
     */
    public submitRegistrationInfo() {
        this.performClick(this.submitButton);
    }



}

export default new RegistrationPage();