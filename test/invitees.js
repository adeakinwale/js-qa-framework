const fs = require('fs')
const logReport = require('mochawesome-screenshots/logReport');
const {Browser, By, Key, until } = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require("assert");
               require("chromedriver");
const RsvpPage = require('../pages/rsvp.js');
           
               




suite(function(env){
    describe('RSVP site',  function () {
        let driver;
        let page;
        this.timeout(20000);

        // before SETUP runs before every test
        before(async function(){
            driver = await env.builder().build()
            page = new RsvpPage(driver)
            await page.open(); 
        });

        it('has invitee list',async function () {
            let elements = await driver.findElements(page.locators.invitedList); 
            assert(elements.length > 0)
            
            });

        it('has registration form',async function () {
            let elements = await driver.findElements(page.locators.registrationForm); 
            assert(elements.length > 0)
            });

        it('loads existing invitations', async function (){
            //await driver.manage().setTimeouts({implicit: 6000});
            let list = await driver.findElement(page.locators.invitedList);
            await driver.wait(
                until.elementLocated(page.locators.invitees)
            )
           // let invitees = await driver.findElements(page.locators.invitees);
            let text = await list.getText();
            logReport.setReportName(this, 'customReportName');
            assert(text.includes('Craig Dennis'));
        });
        
        // after TEAR-DOWN runs after every test
        after(async function(){
            driver.quit();
        })

        });
        
        
    });
 