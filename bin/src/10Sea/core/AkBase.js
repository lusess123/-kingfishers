define(["require", "exports"], function (require, exports) {
    "use strict";
    var AkBase = (function () {
        function AkBase() {
            this.AkName = "AkBase";
        }
        AkBase.prototype.dispose = function () {
            for (var _pro in this) {
                this[_pro] = null;
                delete (this[_pro]);
            }
        };
        ;
        return AkBase;
    }());
    exports.AkBase = AkBase;
});
