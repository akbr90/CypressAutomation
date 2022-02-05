/// <reference types="Cypress"/>

describe('Test suite', function(){

    before(function(){

        cy.fixture('example').then(function(data){

            this.data=data;
        })
    })

    it('Fixture Demo', function(){

       cy.log("Fixture demo");
       cy.log(this.data.name);
       cy.log(this.data.email);
       cy.log(this.data.body);
    })


})

