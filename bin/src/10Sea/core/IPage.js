define(["require", "exports"], function (require, exports) {
    "use strict";
    var PageFace = (function () {
        function PageFace() {
        }
        PageFace.prototype.setModel = function (p1, p2, p3) { };
        PageFace.prototype.loadMain = function ($dom) { };
        PageFace.prototype.loadLeft = function ($dom) { };
        PageFace.prototype.loadRight = function ($dom) { };
        PageFace.prototype.loadMenu = function ($dom) { };
        PageFace.prototype.clearPage = function ($dom) { };
        PageFace.prototype.loadLayOut = function () { };
        PageFace.prototype.init = function ($dom) { };
        return PageFace;
    }());
    exports.PageFace = PageFace;
});
