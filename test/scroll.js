const {Browser, By, Key, until } = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require("assert");
               require("chromedriver");
const ScrollPage = require('../pages/scroll.js');
           
               




suite(function(env){
    describe('Infinite scroll demo',  function () {
        let driver;
        let page;
        this.timeout(30000);

        // before SETUP runs before every test
        before(async function(){
            driver = await env.builder().build()
            page = new ScrollPage(driver)
            await page.open(); 
        });

        it('adds more boxes',async function () {
            let boxes = await driver.findElements(page.locators.boxes);
            let oldBoxCount = boxes.length;
            console.log(oldBoxCount);
            await page.loadContent();
            boxes = await driver.findElements(page.locators.boxes);
            let newBoxCount = boxes.length;
            console.log(newBoxCount);
            assert(newBoxCount > oldBoxCount);
        });

        
        
        // after TEAR-DOWN runs after every test
        after(async function(){
            driver.quit();
        })

        });
        
        
    });