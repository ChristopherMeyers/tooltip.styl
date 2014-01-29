var x = require('casper').selectXPath;

casper.test.begin('basic tooltip is functional', 4, function(test) {
    casper.start("tests/functional.html", function() {
        test.assertExists(x('/html/body/div'));
        test.assertSelectorHasText(x('/html/body/div'), 'Hover over me!');
        test.assertSelectorHasText(x('/html/body/div/div'), 'Tooltip content!');
        test.assertNotVisible(x('/html/body/div/div'));
    }).run(function() {
        test.done();
    });
});
