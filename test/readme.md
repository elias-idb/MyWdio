===================================*************************==============================================
take a folder test
take 2 folder in test folder pages and specs
create search folder in pages folder
create a searchLocator.js file in search folder
create a searchAction.js file in search folder
creeate a class in searchLocator.js file
class searchLocators{
    
}

//for export write this code
module.exports = new searchLocators();

create some get method and return 
get searchIcon(){
        return $("//a[@class='search-icon']");
    }
 get searchInputField(){
        return $("//input[@placeholder='Search']");
    }  

 // to import searchLocator.js file in searchAction.js file
 const searchLocators = require("./searchLocator");    

 // create a class in searchAction.js file
 class searchActions{

}

//To export
module.exports = new searchActions();

// now write 2 method in searchActions class
async clickOnSearchIcon(){
        await searchLocators.searchIcon.click();
    }

    async enterSearchItemName(productName){
        await searchLocators.searchInputField.setValue(productName);
    }
 // create productPurchase.spec.js file in specs folder   

 //To import searchAction.js ile in productPurchase.spec.js file 
 const searchActions = require("../pages/search/searchAction");
//Create describe function
 describe("Demo evershop site automation", () => {
    
})

it function use in describe function
it("Should able to successfully search product", async() => {

})

full:
const productName = "Nike react phantom run flyknit 2";

describe("Demo evershop site automation", () => {
    it("Should able to successfully search product", async() => {
        await searchActions.clickOnSearchIcon();
        await searchActions.enterSearchItemName(productName);
        await browser.keys("Enter");
        
    })
})

creata addToCart folder in pages folder.
create 2 js file in addToCart folder, addToCartLocator.js and addToCartActions.js
// this code for addToCartLocator.js
class AddToCartLocators{
    async productFromList(productName){
        return $(//a[contains(@href, '182')]/span[contains(text(), '${productName}')]);
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
}

module.exports = new AddToCartLocators();

// open addToCartAction.js and write it
const addToCartLocators = require("./addToCartLocators");

class AddToCartActions{
    async clickOnProductFromList(productName){
        await addToCartLocators.productFromList(productName).click();
    }

    async selectProductSize(){
        await addToCartLocators.productSize.click();
        await browser.pause(3000);
    }

    async selectColor(){
        await addToCartLocators.productColor.click();
        await browser.pause(3000);
    }

    async enterProductQty(){
        await addToCartLocators.inputQtyField.setValue(2);
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

}

module.exports = new AddToCartActions();

// open productPurchase.spec.js file 
import addToCartAction in productPurchase.spec.js file 
const addToCartActions = require("../pages/addToCart/addToCartActions");

// write it function in describe function
it("Should able to successfully add in the cart", async() => {
        await addToCartActions.clickOnProductFromList(productName);
        await addToCartActions.selectProductSize();
        await addToCartActions.selectColor();
        await addToCartActions.enterProductQty();
        await addToCartActions.clickAddToCartButton();
        await addToCartActions.clickOnViewCartButton();
        await browser.keys("Enter");
        
    })

  // open wdio.config.js file

  baseUrl: 'https://demo.evershop.io/',

  const productPurchase = "./test/specs/productPurchase.spec.js";

     specs: [
        './script.js'
    ],
    change to :
    specs: [productPurchase],

   beforeSuite: async function (suite) {
        await browser.maximizeWindow();
        await browser.url(this.url);
    },

   afterSuite: async function (suite) {
        await browser.quit();
    },  


    // create checkOut folder in pages folder
    //create 2 js file checkoutLocator.js checkoutAction.js
    // write essential code

    // create Utility folder in test folder, create utilities.js file in utility folder
// write this code in utility.js file
    class Utility{
    async convertTextToNumber(text){
        const value = parseFloat.text(/[$,]/g, "");
        return value;
    }
}

module.exports = new Utility();

// to import utility.js file in checkOutActions.js file
const utility = require("../../Utilities/utility");
==========================================****************================================================
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
===================================================***====================================================================
 20th Nov:Topic Allure report add

Open this site https://webdriver.io/docs/allure-reporter/
copy this code npm install @wdio/allure-reporter --save-dev and use it in terminal then install allure report in project.
After successfully install we can see this in package.json file "@wdio/allure-reporter": "^9.2.2",

3.copy this code reporters: [['allure', { outputDir: 'allure-results', disableWebdriverStepsReporting: true, disableWebdriverScreenshotsReporting: true, }]],

and use this code in wdio.conf.js file and some line should commend primarily reporters: [['allure', { outputDir: 'allure-results', disableWebdriverStepsReporting: false //disableWebdriverScreenshotsReporting: true, }]],

now we check trial basis, run project npm run test After running project allure-results folder is automatically create in project directory folder. and some file will create as per runnig project.
5.Now copy this line and use it terminal then run. npm i allure-commandline

after install this code saved in package.json file "dependencies": { "allure-commandline": "^2.31.0" }

6.Use this code in package.json file in scripts; "getReport": "allure generate allure-results --clean && allure open"

after run project , use this code for seeing allurreport
npm run getReport

7.To take screenshot uncomment this line in reporters of wdio.conf.js
//disableWebdriverScreenshotsReporting: true, }]],

Total reporrter function is
  reporters: [['allure', { 
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
     }]],


8.Now use this code in wdio.conf.js file 

 afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (error) {
      const screenshot = await browser.takeScreenshot();
      allure.addAttachment(
        "Screenshot",
        Buffer.from(screenshot, "base64"),
        "failure/png"
      );
    }
},

After running your project if any error found allurrepoort take screenshot and displaying.
==========================================**************************=========================================================

