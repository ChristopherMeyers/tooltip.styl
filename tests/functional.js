var x = require('casper').selectXPath;

casper.test.begin('basic tooltip is functional', 4, function(test) {
    casper.start("demo/index.html", function() {
        test.assertExists(x('/html/body/div[1]'));
        test.assertSelectorHasText(x('/html/body/div[1]'), 'Hover over me!');
        test.assertSelectorHasText(x('/html/body/div[1]/div[2]'), 'Tooltip content!');
        test.assertNotVisible(x('/html/body/div[1]/div[2]'));
    }).run(function() {
        test.done();
    });
});
