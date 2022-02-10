///<reference types='cypress'/>

import CartPage from '../../WebPages/CartPage'
import CheckoutPage from '../../WebPages/CheckoutPage'
import GlobalPage from '../../WebPages/GlobalPage'
import HomePage from '../../WebPages/HomePage'
import LoginPage from '../../WebPages/LoginPage'
import ProductDetailPage from '../../WebPages/ProductDetailPage'
import ProductListPage from '../../WebPages/ProductListPage'

describe('Login Functionality', function () {
    const global = new GlobalPage()
    const home = new HomePage()
    const login = new LoginPage()
    const lPage = new ProductListPage()
    const pDetail = new ProductDetailPage()
    const cart = new CartPage()
    const checout = new CheckoutPage()

    it('Verify Login', function () {
        global.visitApplication()
        //login.LoginToApp("admin@yourstore.com","admin");
        home.verifyHomepage()
        login.LoginToApp('tester@demo.com', 'Tester#123')
        login.verifyUserLoggedIn()
        login.verifyUserLoggedIn('tester@demo.com')
        lPage.clickFirstItem()
        pDetail.clickLinkAddToCart().verifyItemAddeAlert()
        cart.clickCartLink().verifyBtnPlaceOrder().clickBtnPlaceOrder()

        checout
            .verifyPlaceOrderModal()
            .enterName('Tester Ind')
            .enterCountry('India')
            .enterCity('Delhi')
            .enterCardDetail('4485665260077579')
            .enterMonth('04')
            .enterYear('2023')
            .clickPurchaseButton()
    })
})
