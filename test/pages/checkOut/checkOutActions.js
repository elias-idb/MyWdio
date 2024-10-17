const checkOutLocators = require('./chekoutLocators');
const utility = require("../../Utilities/utility");

class checkOutActions{
    async getSubTotalAmount(){
        const subTotal = await checkOutLocators.subTotal.getText();
        const subTotalInNumber = await utility.convertTextToNumber(subTotal);
        return subTotalInNumber;
    }

    async getGrandTotalAmount(){
        const grandTotal = await checkOutLocators.grandTotal.getText();
        const grandTotalInNumber = await utility.convertTextToNumber(grandTotal);
        return grandTotalInNumber;
     
    }

    async clickOnCheckOutButton(){
        await checkOutLocators.checkOutButton.click();
        
    }
}

module.exports = new checkOutActions();