const LoginPage = require('./../pageobjects/Login.po') // Обращаемся к Login.po.js

describe('Search clients', () => {
    it('should login as admin', function(){
        LoginPage.open();
        LoginPage.doLogin("Admin","Admin@Navi")
        browser.pause(5000);        
    });
});