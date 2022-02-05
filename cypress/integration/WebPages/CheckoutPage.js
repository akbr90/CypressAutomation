///<reference types='cypress'/>

class CheckoutPage {


    label_PlaceOrderModalHeader = '#orderModalLabel';
    textBox_Name = 'input#name';
    textBox_Country = 'input#country';
    textBox_City = 'input#city';
    textBox_CreditCard = 'input#card';
    textBox_Month = 'input#month';
    textBox_Year = 'input#year';
    button_Purchase = "button[onclick='purchaseOrder()']";
    button_CloseModal = "div:nth-child(3) div:nth-child(1) div:nth-child(3) button:nth-child(1)";


    verifyPlaceOrderModal() {

        cy.get(this.label_PlaceOrderModalHeader).should('be.visible');
        cy.get(this.label_PlaceOrderModalHeader).contains("Place order");
        return this;
    }

    clearNameTextBox() {
        cy.get(this.textBox_Name).should('be.visible');
        cy.get(this.textBox_Name).clear();
        return this;
    }

    enterName(name) {
        this.clearNameTextBox();
        cy.get(this.textBox_Name).type(name);
        return this;
    }

    clearCountryTextBox() {
        cy.get(this.textBox_Country).should('be.visible');
        cy.get(this.textBox_Country).clear();
        return this;
    }

    enterCountry(country) {
        this.clearCountryTextBox();
        cy.get(this.textBox_Country).type(country);
        return this;
    }

    clearCityTextBox() {
        cy.get(this.textBox_City).should('be.visible');
        cy.get(this.textBox_City).clear();
        return this;
    }

    enterCity(city) {
        this.clearCityTextBox();
        cy.get(this.textBox_City).type(city);
        return this;
    }

    clearCreditCardTextBox() {
        cy.get(this.textBox_CreditCard).should('be.visible');
        cy.get(this.textBox_CreditCard).clear();
        return this;
    }

    enterCardDetail(cc) {
        this.clearCreditCardTextBox();
        cy.get(this.textBox_CreditCard).type(cc);
        return this;
    }

    clearMonthTextBox() {
        cy.get(this.textBox_Month).should('be.visible');
        cy.get(this.textBox_Month).clear();
        return this;
    }

    enterMonth(month) {
        this.clearMonthTextBox();
        cy.get(this.textBox_Month).type(month);
        return this;
    }

    clearYearTextBox() {
        cy.get(this.textBox_Year).should('be.visible');
        cy.get(this.textBox_Year).clear();
        return this;
    }

    enterYear(year) {
        this.clearYearTextBox();
        cy.get(this.textBox_Year).type(year);
        return this;
    }

    verifyPurchaseBtn() {
        cy.get(this.button_Purchase).should('be.visible');
        return this;
    }

    clickPurchaseButton() {
        this.verifyPurchaseBtn();
        cy.get(this.button_Purchase).click();
        return this;
    }

    verifyCloseModalBtn() {
        cy.get(this.button_CloseModal).should('be.visible');
        return this;
    }

    clickPurchaseButton() {
        this.verifyCloseModalBtn();
        cy.get(this.button_CloseModal).click();

        return this;
    }





}

export default CheckoutPage