import { HomePage } from '../Page/HomePage';
import { browser, WebElement } from 'protractor';

describe('Test vividmind', () => {
    const homePage = new HomePage();

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
        let acTualText = homePage.getContactTabText();
        let expectedText = 'Contact Us';
        expect(acTualText)
            .toBe(expectedText);
    });


    it('User can change the site languae easily from EN to HU and vice versa', () => {
        let enLanguageSwitch: WebElement = homePage.getEnLanguageSwitch();
        let huLanguageSwitch: WebElement = homePage.getHuLanguageSwitch()
        let actualContactLinkText = homePage.getContactLinkSpanText();
        const expectedContactLinkTextHu = 'Kapcsolat';
        const exPectedContactLinkTextEn = 'Contact';
        if (enLanguageSwitch.isSelected()) {
            expect(actualContactLinkText)
                .toBe(exPectedContactLinkTextEn);


        } else if (huLanguageSwitch.isSelected()) {
            expect(actualContactLinkText).
                toBe(expectedContactLinkTextHu);

        }
    });

});