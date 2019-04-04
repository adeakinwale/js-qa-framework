const {Browser, By, Key, until } = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require("assert");
               require("chromedriver");
const DropDownSelectPage = require('../pages/drop_down_select.js');
           
               


suite(function(env){
    describe('Dropdown',  function () {
        let driver;
        let page;
        this.timeout(30000);

        // before SETUP runs before every test
        before(async function(){
            driver = await env.builder().build()
            page = new DropDownSelectPage(driver)
            await page.open(); 
        });

        it('Updates status text',async function () {
            await page.clickOption('option3');
            await page.submit();
            let results = await driver.findElement(page.locators.formResults);
            let text = await results.getText();
            assert(text.includes("option3"));

        });

        
        
        // after TEAR-DOWN runs after every test
        after(async function(){
            driver.quit();
        })

        });
        
        
    });