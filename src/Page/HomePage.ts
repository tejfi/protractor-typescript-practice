import * as protractor from 'protractor'


export class HomePage {
    heading = protractor.element(protractor.by.tagName("title"));
    contactLink = protractor.element(protractor.by.id('link-contact'));
    contactLinkSpan = protractor.element(protractor.by.xpath("//div[@id='link-contact']//span"))
    contactTab = protractor.element(protractor.by.xpath("//div[@id='contact']//div[@class='container']//h2"));
    huLanguageSwitch = protractor.element(protractor.by.xpath("//div[@id='lang-hu']//span[contains(text(),' HU ')]"));
    enLanguageSwitch = protractor.element(protractor.by.xpath("//div[@id='lang-en']//span[contains(text(),' EN ')]"));
    getHeading() {
        let currentText = {
            text: protractor.browser.getTitle(),
            getText: function () {
                return this.text;
            }
        }
        return currentText.getText();
    }

    clickContacts() {
        let eC = protractor.ExpectedConditions;
        let isClickable = eC.elementToBeClickable(this.contactLink);
        protractor.browser.wait(isClickable, 5000);
        this.contactLink.click();

    }

    getContactLinkSpanText() {
        let currentText = this.contactLinkSpan.getText();
        return currentText;

    }

    getContactTabText() {
        return this.contactTab.getText();
    }


    getHuLanguageSwitch(): protractor.WebElement {
        return this.huLanguageSwitch;
    }

    getEnLanguageSwitch(): protractor.WebElement {
        return this.enLanguageSwitch;
    }



}



