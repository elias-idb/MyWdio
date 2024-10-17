class AddToCartLocators{
    async productFromList(productName){
        return $(`//a[contains(@href, '182')]/span[contains(text(), '${productName}')]`);
    }

    get productSize(){
        return $("//a[@href='#' and contains(text(), 'S')]");
    }

    get productColor(){
        return $("//a[@href='#' and contains(text(), 'Black')]");
    }

    get inputQtyField(){
        return $("//input[@name='qty']");
    }

    get buttonAddToCart(){
        return $("//button[contains(.., 'ADD TO CART')]");
    }

    get buttonViewCartFromModal(){
        return $("//a[@href='/cart' and contains(text(),'VIEW CART')]");
    }

    get priceFromProductPage(){
        return $("//span[@class='sale-price']");
    }
}

module.exports = new AddToCartLocators();