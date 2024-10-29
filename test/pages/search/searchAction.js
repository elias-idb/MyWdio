const searchLocators = require("./searchLocator");

class searchActions{
    async clickOnSearchIcon(){
        await searchLocators.searchIcon.click();
    }

    async enterSearchItemName(productName){
        await searchLocators.searchInputField.setValue(productName);
    }

    // async getProductList(number){
    //    await searchLocators.productList(number).getText();
    //     //console.log( await searchLocators.productList.getText());
    // }

    async search(productName) {
        await this.clickOnSearchIcon();
        await this.enterSearchItemName(productName);
    }

    async selectedPrdouct(num){
        return await searchLocators.productList(num).getText();
    }

    

}

module.exports = new searchActions();