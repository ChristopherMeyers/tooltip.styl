var x = require('casper').selectXPath;

casper.test.begin('left aligned tooltip is positioned', 2, function(test) {
    casper.start("tests/leftalign.html", function() {
        var tooltipBounds = this.getElementBounds(x('/html/body/div/div'));
        var containerBounds = this.getElementBounds(x('/html/body/div'));

        test.assertEquals(tooltipBounds['left'], containerBounds['left'], "tooltip left aligned");

        test.assertEquals(tooltipBounds['top']+tooltipBounds['height'], containerBounds['top'], "tooptip above target");
    }).run(function() {
        test.done();
    });
});
