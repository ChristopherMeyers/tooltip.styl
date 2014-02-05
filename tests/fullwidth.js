var x = require('casper').selectXPath;

casper.test.begin('large full aligned tooltip is positioned and sized correctly', 2, function(test) {
    casper.start("tests/fullwidth.html", function() {
        var tooltipBounds = this.getElementBounds(x('/html/body/div[1]/div'));
        var containerBounds = this.getElementBounds(x('/html/body/div[1]'));

        test.assertEquals(tooltipBounds['left'], containerBounds['left'], "tooltip left aligned to target");
        test.assertEquals(tooltipBounds['width'], containerBounds['width'], "tooltip full width of target");
    }).run(function() {
        test.done();
    });
});

casper.test.begin('small full aligned tooltip is positioned and sized correctly', 2, function(test) {
    casper.start("tests/fullwidth.html", function() {
        var tooltipBounds = this.getElementBounds(x('/html/body/div[2]/div'));
        var containerBounds = this.getElementBounds(x('/html/body/div[2]'));

        test.assertEquals(tooltipBounds['left'], containerBounds['left'], "tooltip left aligned to target");
        test.assert(tooltipBounds['width'] < containerBounds['width'], "tooltip width smaller than target");
    }).run(function() {
        test.done();
    });
});
