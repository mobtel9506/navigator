const LoginPage = require ('./../pageobjects/Login.po');
const ClientPage = require ('../pageobjects/ClientPage');

describe(' Login test suit', () => {
    beforeEach(function(){

        LoginPage.open();
        LoginPage.doLogin("Admin","Admin@Navi")       
        //browser.pause(5000);
    })

    afterEach (function(){
        browser.reloadSession();
    })

    xit('should click on first client', function(){
        ClientPage.clickOnFirstRow();
        browser.pause(5000);
    });

    it('Should add clients', function(){
        ClientPage.clickOnAddClientButton();
        browser.pause(5000);

        ClientPage.enterSurname("Umakhanov");
        browser.pause(5000);

        ClientPage.enterName("Dzhavathan");
        browser.pause(5000);

        ClientPage.enterMiddleName("Dzhamalutdinovich");
        browser.pause(5000);

        ClientPage.sexChoice()
        browser.pause(5000);
        

      // browser.pause(5000);

      // ПРОВЕРКА 99

    })

});

// ********************************************************
//               НЕСОКРАЩЕННЫЙ ВАРИАНТ
// ********************************************************



// const LoginPage = require ('./../pageobjects/Login.po');
// const ClientPage = require ('./../pageobjects/Client.po');

// describe(' Login test suit', () => {
//     beforeEach(function(){

//         LoginPage.open();
//         LoginPage.doLogin("Admin","Admin@Navi")       
//         //browser.pause(5000);
//     })

//     afterEach (function(){
//         browser.reloadSession();
//     })

//     it('should click on first client', function(){
//         ClientPage.clickOnFirstRow();
//         browser.pause(5000);
//     });

//     it('Should add clients', function(){
//         ClientPage.clickOnAddClientButton();
//         browser.pause(5000);

//         let surNameField = $('input[formcontrolname="userSurname"]');
//         surNameField.setValue("Umakhanov");
//         browser.pause(1000);

//         let nameField = $('input[formcontrolname="userName"]');
//         nameField.setValue("Dzhavathan");
//         browser.pause(1000);

//         let middleNameField = $('input[formcontrolname="userMiddleName"]');
//         middleNameField.setValue("Dzhamalutdinovich");
//         browser.pause(1000);
//         let sexChoice = $('//div[@class="mat-radio-inner-circle"][1]');
//         sexChoice.click();
//         browser.pause(1000);

//       // browser.pause(5000);
//     })

// });