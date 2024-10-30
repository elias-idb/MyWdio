const searchActions = require("../pages/search/searchAction");
const addToCartActions = require("../pages/addToCart/addToCartActions");
const checkOutActions = require("../pages/checkOut/checkOutActions");
const utility = require("../Utilities/utility");
const loginActions = require("../pages/login/loginActions");

//const productName = "Nike react phantom run flyknit 2";
var productName = "";
//const productQty = 2;
var productQty;
var singleProductPrice;

describe("Demo evershop site product purchase journey", () => {
    it("Should able to successfully search product", async() => {
        const number = await utility.randomNumber(4,1);
        productName = await searchActions.selectedPrdouct(number);
        //await searchActions.getProductList();
        await searchActions.clickOnSearchIcon();
        await searchActions.enterSearchItemName(productName);
        await browser.keys("Enter");
        
    })

    it("Should able to successfully add in the cart", async() => {
        await addToCartActions.clickOnProductFromList(productName);
        //await addToCartActions.selectProductSize();
        const number = await utility.randomNumber(2, 1);
        await addToCartActions.selectProductSize(number);
        await addToCartActions.selectColor();
        productQty = await utility.randomNumber(10,1);
        await addToCartActions.enterProductQty(productQty);
        //singleProductPrice = await addToCartActions.getSingleProductPrice(); 
        await addToCartActions.clickAddToCartButton();
        await addToCartActions.clickOnViewCartButton();
        await browser.keys("Enter");
        
    })

    it("Should successfully verify total amount and grand total amount", async()=>{
        const singleProductPrice = await addToCartActions.getSingleProductPrice();
        const expectedTotalPrice = 6 * singleProductPrice;

        const actualSubTotal = await checkOutActions.getSubTotalAmount();
        const actualGrandTotal = await checkOutActions.getGrandTotalAmount();
        expect(expectedTotalPrice).toEqual(actualSubTotal);
        expect(expectedTotalPrice).toEqual(actualGrandTotal);
    })

    it.skip("Should able to successfully logout", async() => {
        await loginActions.clickOnprofileIcon();
        await loginActions.clickOnLogout();
        await browser.pause(5000);
       
        
    });
})