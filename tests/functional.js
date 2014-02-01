var x = require('casper').selectXPath;
var mouse = require('mouse').create(casper);

casper.test.begin('basic tooltip is functional', 10, function(test) {
    casper.start("tests/functional.html", function() {
        test.assertExists(x('/html/body/div'), "tooltip target exists");
        test.assertSelectorHasText(x('/html/body/div'), 'Hover over me!', "valid tooltip target content");
        test.assertSelectorHasText(x('/html/body/div/div[1]'), 'Tooltip content!', "tooltip content is correct");
        test.assertSelectorHasText(x('/html/body/div/div[2]'), 'Not tooltip content!', "unmarked div exists");

        this.mouse.move(500, 500);
        test.assertNotVisible(x('/html/body/div/div[1]'), "tooltip not shown initially");
        test.assertVisible(x('/html/body/div/div[2]'), "unmarked div unaffected");

        this.mouse.move(50, 10);
        test.assertVisible(x('/html/body/div/div[1]'), "tooltip visible on hover");
        test.assertVisible(x('/html/body/div/div[2]'), "unmarked div unaffected");

        this.mouse.move(500, 100);
        test.assertNotVisible(x('/html/body/div/div[1]'), "tooltip hidden when mouse leaves");
        test.assertVisible(x('/html/body/div/div[2]'), "unmarked div unaffected");
    }).run(function() {
        test.done();
    });
});

casper.test.begin('tooltip is positioned', 2, function(test) {
    casper.start("tests/functional.html", function() {
        var tooltipBounds = this.getElementBounds(x('/html/body/div/div[1]'));
        var containerBounds = this.getElementBounds(x('/html/body/div'));
        var tooltipCenter = tooltipBounds['left']+(tooltipBounds['width']/2);
        var containerCenter = containerBounds['left']+(containerBounds['width']/2);

        test.assertEquals(~~(tooltipCenter), ~~(containerCenter), "tooltip centered");

        test.assertEquals(tooltipBounds['top']+tooltipBounds['height'], containerBounds['top'], "tooptip above target");
    }).run(function() {
        test.done();
    });
});
