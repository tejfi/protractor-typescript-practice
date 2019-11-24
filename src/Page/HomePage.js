"use strict";
exports.__esModule = true;
var protractor = require("protractor");
var HomePage = /** @class */ (function () {
    function HomePage() {
        this.heading = protractor.element(protractor.by.tagName("title"));
        this.contactLink = protractor.element(protractor.by.id('link-contact'));
        this.contactLinkSpan = protractor.element(protractor.by.xpath("//div[@id='link-contact']//span"));
        this.contactTab = protractor.element(protractor.by.xpath("//div[@id='contact']//div[@class='container']//h2"));
        this.huLanguageSwitch = protractor.element(protractor.by.xpath("//div[@id='lang-hu']//span[contains(text(),' HU ')]"));
        this.enLanguageSwitch = protractor.element(protractor.by.xpath("//div[@id='lang-en']//span[contains(text(),' EN ')]"));
    }
    HomePage.prototype.getHeading = function () {
        var currentText = {
            text: protractor.browser.getTitle(),
            getText: function () {
                return this.text;
            }
        };
        console.log(currentText.getText());
        return currentText.getText();
    };
    HomePage.prototype.clickContacts = function () {
        var eC = protractor.ExpectedConditions;
        var isClickable = eC.elementToBeClickable(this.contactLink);
        protractor.browser.wait(isClickable, 5000);
        this.contactLink.click();
    };
    HomePage.prototype.getContactLinkSpanText = function () {
        var currentText = this.contactLinkSpan.getText();
        console.log(currentText);
        return currentText;
    };
    HomePage.prototype.getContactTabText = function () {
        return this.contactTab.getText();
    };
    HomePage.prototype.getHuLanguageSwitch = function () {
        return this.huLanguageSwitch;
    };
    HomePage.prototype.getEnLanguageSwitch = function () {
        return this.enLanguageSwitch;
    };
    return HomePage;
}());
exports.HomePage = HomePage;
