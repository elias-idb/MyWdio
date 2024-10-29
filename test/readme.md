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

 20th Nov:Topic Allure report add
 1. Open this site https://webdriver.io/docs/allure-reporter/
 2. copy this code 
 npm install @wdio/allure-reporter --save-dev 
 and use it in terminal then install allure report in project.

 After successfully install we can see this in package.json file
 "@wdio/allure-reporter": "^9.2.2",

 3.copy this code
 reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
}]],


and use this code in wdio.conf.js file and some line should commend primarily
reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false
        //disableWebdriverScreenshotsReporting: true,
}]],

4. now we check trial basis, run project 
npm run test
After running project allure-results folder is automatically create in project 
directory folder. and some file will create as per runnig project.

5.Now copy this line and use it terminal then run.
npm i allure-commandline

after install this code saved in package.json file
"dependencies": {
    "allure-commandline": "^2.31.0"
}

6.Use this code in package.json file in scripts;
"getReport": "allure generate allure-results --clean && allure open"
