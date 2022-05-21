class ClientPage {
    get createModelPageButton(){
        return $('//button[@class="clients-add-user-dialog crm-button"]');
    }
    clickOnAddClientButton(){
        this.createModelPageButton.click();
    }

    get firstClientRow() {
        return $("div tr td div.crm-navigator-table__item");
        browser.pause(1000);
    }
    clickOnFirstRow() {
        this.firstClientRow.click();
    }

    get surnameField() {
        return $('input[formcontrolname="userSurname"]');
    }
    enterSurname(someUserSurname) {
        this.surnameField.setValue(someUserSurname);
    }

    get nameField() {
        return $('input[formcontrolname="userName"]');
    }
    enterName(someUserName) {
        this.nameField.setValue(someUserName);
    }

    get middleNameField() {
        return $('input[formcontrolname="userMiddleName"]');
    }
    enterMiddleName(someMiddelname) {
        this.middleNameField.setValue(someMiddelname);
    }

    get genderChoiceButton() {
        return $ ('//div[@class="mat-radio-inner-circle"][1]');
    }
    clickRadioButton() {
        this.genderChoiceButton.click();
    }    

    get mailFied() {
        return $ ('input[type="email"]')
    }
}

module.exports = new ClientPage