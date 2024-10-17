class checkOutLocators{
    get subTotal(){
        return $("//div[contains(text(),'Sub total')]/following-sibling::div") 
    }

    get grandTotal(){
        return $("//div[@class='grand-total-value']");
    }

    get chekOutButton(){
        return $("//a[contains(@href,'/checkout')]") 
    }
}

module.exports = new checkOutLocators();