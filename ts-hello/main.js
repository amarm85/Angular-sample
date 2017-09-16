"use strict";
exports.__esModule = true;
var likes_1 = require("./likes");
var likes = new likes_1.Like(1);
likes.giveLike();
console.log(likes.NumberOfLikes);
likes.giveLike();
console.log('After ' + likes.NumberOfLikes);
