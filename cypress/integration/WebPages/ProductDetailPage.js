///<reference types='cypress'/>

class ProductDetailPage {

    link_AddToCart = "a[onclick='addToCart(1)']";


    clickLinkAddToCart() {
        cy.get(this.link_AddToCart).click();
        return this;
    }

    verifyItemAddeAlert() {
        cy.on('window:alert', (str) => {
            
            expect(str).to.equal('Product added.')

        })

        return this;
    }



}

export default ProductDetailPage