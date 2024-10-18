const addToCartLocators = require("./addToCartLocators");
const utility = require("../../Utilities/utility");

class AddToCartActions{
    async clickOnProductFromList(productName){
        await (await addToCartLocators.productFromList(productName)).click();
    }

    // async selectProductSize(){
    //     await addToCartLocators.productSize.click();
    //     await browser.pause(3000);
    // }

    // async selectProductSize(number){
    //     await addToCartLocators.productSize(number).click();
    //     await browser.pause(3000);
    // }

    async selectProductSize(number) {
        await addToCartLocators.productSize(number).click();
        await browser.pause(3000);
      }

    async selectColor(){
        await addToCartLocators.productColor.click();
        await browser.pause(3000);
    }

    async enterProductQty(qty){
        await addToCartLocators.inputQtyField.setValue(qty);
        await browser.pause(3000);
    }

    async clickAddToCartButton(){
        await addToCartLocators.buttonAddToCart.click();
        await browser.pause(3000);
    }

    async clickOnViewCartButton(){
        await addToCartLocators.buttonViewCartFromModal.click();
        await browser.pause(3000);
    }

    async getSingleProductPrice(){

        const productPrice = await addToCartLocators.priceFromProductPage.getText();
        const productPriceInNumber = await utility.convertTextToNumber(productPrice);
        return productPriceInNumber;
        //const productPriceInNumber = parseFloat(productPrice.replace(/[$,]/g,""));     
        //await browser.pause(3000);
    }



}

module.exports = new AddToCartActions();