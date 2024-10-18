16th Nov Class:
1 . write this code in searchLocator.js
get productList(){
        return $("//div[contains(@class,'product-name')]");
    }
Now write this code in searchActions.js file 
  async getProductList(){
        await searchLocators.productList.getText();
    }  
Now write this code in it("Should able to successfully search product", async() => { method of prductPurchase.sepc,js file 


 await searchActions.getProductList();     