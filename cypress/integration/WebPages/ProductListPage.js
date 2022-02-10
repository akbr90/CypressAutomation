///<reference types='cypress'/>

class ProductListPage {
    link_firstProduct =
        ':nth-child(1) > .card > .card-block > .card-title > .hrefch'

    clickFirstItem() {
        cy.get(this.link_firstProduct).click()
    }
}

export default ProductListPage
