///<reference types='Cypress'/>

class HomePage {
    image_homePageLogo = 'a.navbar-brand img'
    lable_Header = '.content-header > h1'
    link_LogIn = 'a#login2'
    link_SignUp = 'a#signin2'

    verifyHomePageLogo() {
        cy.get(this.image_homePageLogo).should('be.visible')
    }

    verifyLogInLink() {
        cy.get(this.link_LogIn).should('be.visible')
    }

    verifySignUpLink() {
        cy.get(this.link_SignUp).should('be.visible')
    }

    verifyHomePageHeader() {
        cy.get(this.lable_Header).should('have.text', '\nDashboard\n')
    }

    verifyHomepage() {
        this.verifyHomePageLogo()
        this.verifySignUpLink()
        this.verifyLogInLink()
    }
}

export default HomePage
