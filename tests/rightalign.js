var x = require('casper').selectXPath;

casper.test.begin('right aligned tooltip is positioned', 2, function(test) {
    casper.start("tests/rightalign.html", function() {
        var tooltipBounds = this.getElementBounds(x('/html/body/div/div'));
        var containerBounds = this.getElementBounds(x('/html/body/div'));

        test.assertEquals(tooltipBounds['left'] + tooltipBounds['width'], containerBounds['left'] + containerBounds['width'], "tooltip right aligned");

        test.assertEquals(tooltipBounds['top']+tooltipBounds['height'], containerBounds['top'], "tooptip above target");
    }).run(function() {
        test.done();
    });
});
