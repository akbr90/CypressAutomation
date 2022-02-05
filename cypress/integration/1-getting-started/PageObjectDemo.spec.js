/// <reference types="Cypress"/>

import LoginPage from "../WebPages/LoginPage"


describe('Test suite', function(){


    it('Login Page', function(){

        const loginPg = new LoginPage();

        loginPg.visit();
        loginPg.cilckLoginBtn();
        console.log("Akbar")
    })


})

