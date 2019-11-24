"use strict";
exports.__esModule = true;
var HomePage_1 = require("../Page/HomePage");
var protractor_1 = require("protractor");
describe('Test vividmind', function () {
    var homePage = new HomePage_1.HomePage();
    beforeAll(function () {
        protractor_1.browser.get("https://vividmindsoft.com/");
    });
    it('user Should see the  vividmind logo on the left side of the browser', function () {
        homePage.clickContacts();
        var currentTex = homePage.getHeading();
        var ExptectedText = 'VividMind';
        expect(currentTex).toBe(ExptectedText);
    });
    it('User Should see Contact informations', function () {
        var acTualText = homePage.getContactTabText();
        var expectedText = 'Contact Us';
        expect(acTualText)
            .toBe(expectedText);
    });
    it('User can change the site languae easily from EN to HU and vice versa', function () {
        var enLanguageSwitch = homePage.getEnLanguageSwitch();
        var huLanguageSwitch = homePage.getHuLanguageSwitch();
        var actualContactLinkText = homePage.getContactLinkSpanText();
        var expectedContactLinkTextHu = 'Kapcsolat';
        var exPectedContactLinkTextEn = 'Contact';
        if (enLanguageSwitch.isSelected()) {
            expect(actualContactLinkText)
                .toBe(exPectedContactLinkTextEn);
            console.log('Selected language is the:En');
        }
        else if (huLanguageSwitch.isSelected()) {
            expect(actualContactLinkText).
                toBe(expectedContactLinkTextHu);
            console.log('Selected Language is the:HU');
        }
    });
});
