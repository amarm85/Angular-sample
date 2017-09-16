"use strict";
exports.__esModule = true;
var Like = /** @class */ (function () {
    function Like(numberOfLikes) {
        this.numberOfLikes = numberOfLikes;
        this.buttonSelected = false;
        this.buttonSelected = true;
    }
    Like.prototype.giveLike = function () {
        if (this.buttonSelected) {
            this.numberOfLikes++;
        }
        else {
            this.numberOfLikes--;
        }
        this.buttonSelected = !this.buttonSelected;
    };
    Object.defineProperty(Like.prototype, "ButtonSelected", {
        get: function () {
            return this.buttonSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "NumberOfLikes", {
        get: function () {
            return this.numberOfLikes;
        },
        enumerable: true,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
