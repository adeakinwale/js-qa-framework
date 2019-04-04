const {Browser, By, Key, until } = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require("assert");
               require("chromedriver");
const DragAndDropPage = require('../pages/drag_and_drop.js');
           
               




suite(function(env){
    describe('Drag and drop demo',  function () {
        let driver;
        let page;
        this.timeout(30000);

        // before SETUP runs before every test
        before(async function(){
            driver = await env.builder().build()
            page = new DragAndDropPage(driver)
            await page.open(); 
        });

        it('Updates status text',async function () {
            await page.dragDrop();
            let droppable = await driver.findElement(page.locators.droppable);
            var text = await droppable.getText();
            assert(text.includes("Dropped"));
        });

        
        
        // after TEAR-DOWN runs after every test
        after(async function(){
            driver.quit();
        })

        });
        
        
    });