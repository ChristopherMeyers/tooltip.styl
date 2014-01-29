var x = require('casper').selectXPath;
var mouse = require('mouse').create(casper);

casper.test.begin('basic tooltip is functional', 7, function(test) {
    casper.start("tests/functional.html", function() {
        test.assertExists(x('/html/body/div'));
        test.assertSelectorHasText(x('/html/body/div'), 'Hover over me!');
        test.assertSelectorHasText(x('/html/body/div/div[2]'), 'Not tooltip content!');
        test.assertSelectorHasText(x('/html/body/div/div[1]'), 'Tooltip content!');
        this.mouse.move(500, 500);
        test.assertNotVisible(x('/html/body/div/div[1]'));
        this.mouse.move(50, 10);
        test.assertVisible(x('/html/body/div/div[1]'));
        this.mouse.move(500, 100);
        test.assertNotVisible(x('/html/body/div/div[1]'));
    }).run(function() {
        test.done();
    });
});
