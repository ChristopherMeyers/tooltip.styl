var x = require('casper').selectXPath;

casper.test.begin('basic tooltip is functional', 5, function(test) {
    casper.start("tests/functional.html", function() {
        test.assertExists(x('/html/body/div'));
        test.assertSelectorHasText(x('/html/body/div'), 'Hover over me!');
        test.assertSelectorHasText(x('/html/body/div/div[2]'), 'Not tooltip content!');
        test.assertSelectorHasText(x('/html/body/div/div[1]'), 'Tooltip content!');
        test.assertNotVisible(x('/html/body/div/div[1]'));
    }).run(function() {
        test.done();
    });
});
