///<reference types='cypress'/>

class CartPage{

link_Cart = 'a#cartur';
button_PlaceOrder = "button[type='button'][data-toggle='modal']";



clickCartLink(){
    cy.get(this.link_Cart).click();
    return this;
}

verifyBtnPlaceOrder(){
    cy.get(this.button_PlaceOrder).should('be.visible');
    return this;
}

clickBtnPlaceOrder(){
    cy.get(this.button_PlaceOrder).click();
    return this;
}


}

export default CartPage