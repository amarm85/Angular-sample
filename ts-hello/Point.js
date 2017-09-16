"use strict";
exports.__esModule = true;
var XPoint = /** @class */ (function () {
    function XPoint(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.drawLine = function (x, y) {
            console.log('drawing the line with  x = ' + _this.x + ' y =' + _this.y);
        };
        //this.x = x; this.y = y;
    }
    ;
    return XPoint;
}());
exports.XPoint = XPoint;
