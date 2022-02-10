/// <reference types="Cypress"/>

class LoginPage {
    link_LogIn = 'a#login2'
    link_SignUp = 'a#signin2'
    textBox_Email = 'input#loginusername'
    textBox_Password = 'input#loginpassword'
    button_Login = "button[onclick='logIn()']"
    link_LogOut = '#logout2'
    link_LoggedInUserName = 'a#nameofuser'

    cilckLoginLink() {
        cy.get(this.link_LogIn).click()
    }

    cilckLoginButton() {
        cy.get(this.button_Login).click()
    }

    clearEmailTextBox() {
        cy.get(this.textBox_Email).clear()
    }
    enterEmail(email) {
        cy.get(this.textBox_Email).type(email)
    }

    clearPasswordTextBox() {
        cy.get(this.textBox_Password).clear()
    }
    enterPassword(pass) {
        cy.get(this.textBox_Password).type(pass)
    }

    verifyLogOutLinkPresent() {
        cy.get(this.link_LogOut).should('be.visible')
    }

    verifyLogInButtonAbsent() {
        cy.get(this.button_Login).should('not.be.visible')
    }

    LoginToApp(email, pass) {
        this.cilckLoginLink()
        this.clearEmailTextBox()
        this.enterEmail(email)
        this.clearPasswordTextBox()
        this.enterPassword(pass)
        this.cilckLoginButton()
    }

    verifyUserLoggedIn() {
        this.verifyLogOutLinkPresent()
        this.verifyLogInButtonAbsent()
    }

    verifyLoggedInUser(name) {
        cy.get(this.link_LoggedInUserName).should('be.visible')
        cy.get(this.link_LoggedInUserName).contains(name)
    }
}

export default LoginPage
