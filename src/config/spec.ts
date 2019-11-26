import { HomePage } from '../Page/HomePage';
import { browser, WebElement } from 'protractor';

describe('Test vividmind', () => {
    var homePage = new HomePage();

    beforeAll(function () {
        browser.get("https://vividmindsoft.com/");

    });
    it('user Should see the  vividmind logo on the left side of the browser', () => {
        homePage.clickContacts();
        let currentTex = homePage.getHeading();
        let ExptectedText: String = 'VividMind';
        expect(currentTex).toBe(ExptectedText);
    });

    it('User Should see Contact informations', () => {
        var acTualText = homePage.getContactTabText();
        var expectedText = 'Contact Us';
        expect(acTualText)
            .toBe(expectedText);
    });


    it('User can change the site languae easily from EN to HU and vice versa', () => {
        var enLanguageSwitch: WebElement = homePage.getEnLanguageSwitch();
        var huLanguageSwitch: WebElement = homePage.getHuLanguageSwitch()
        var actualContactLinkText = homePage.getContactLinkSpanText();
        var expectedContactLinkTextHu = 'Kapcsolat';
        var exPectedContactLinkTextEn = 'Contact';
        if (enLanguageSwitch.isSelected()) {
            expect(actualContactLinkText)
                .toBe(exPectedContactLinkTextEn);


        } else if (huLanguageSwitch.isSelected()) {
            expect(actualContactLinkText).
                toBe(expectedContactLinkTextHu);

        }
    });

});