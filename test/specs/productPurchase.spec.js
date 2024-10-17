const searchActions = require("../pages/search/searchAction");
const addToCartActions = require("../pages/addToCart/addToCartActions");
const checkOutActions = require("../pages/checkOut/checkOutActions");
const utility = require("../Utilities/utility");


const productName = "Nike react phantom run flyknit 2";
//const productQty = 2;
var productQty;
var singleProductPrice;

describe("Demo evershop site automation", () => {
    it("Should able to successfully search product", async() => {
        await searchActions.clickOnSearchIcon();
        await searchActions.enterSearchItemName(productName);
        await browser.keys("Enter");
        
    })

    it("Should able to successfully add in the cart", async() => {
        await addToCartActions.clickOnProductFromList(productName);
        await addToCartActions.selectProductSize();
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
        const expectedTotalPrice = productQty * singleProductPrice;

        const actualSubTotal = await checkOutActions.getSubTotalAmount();
        const actualGrandTotal = await checkOutActions.getGrandTotalAmount();
        expect(expectedTotalPrice).toEqual(actualSubTotal);
        expect(expectedTotalPrice).toEqual(actualGrandTotal);
    })
})