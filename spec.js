describe('demo calculator tests', () => {

    //get elements
    let numberOne = element(by.model('first'));
    let numberTwo = element(by.model('second'));
    let goBtn = element(by.id('gobutton')); //ou podia usar o element(by.css('ng-click="doAddition()"'))
    //let result = element(by.binding('latest')); //ou podia usar o element(by.cssContainingText('.ng-binding', '5'))

    beforeEach(() => {
        browser.get('http://juliemr.github.io/protractor-demo/');
        //browser.sleep(2000);
    });
    it('addition test', () => {
        numberOne.sendKeys('2');

        numberTwo.sendKeys('2');
        goBtn.click();

        let result = element(by.cssContainingText('.ng-binding', '4'))
        expect(result.getText()).toEqual('4');

        browser.sleep(3000);
    });

    it('Subtraction test', () => {
        numberOne.sendKeys('2');
        numberTwo.sendKeys('2');
        goBtn.click();

        let result = (element(by.cssContainingText('.ng-binding', '4')));
        expect(result.getText()).toEqual('0'); //wrong result to test

        browser.sleep(3000);
    })
});