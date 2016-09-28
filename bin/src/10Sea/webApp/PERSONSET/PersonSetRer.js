var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer"], function (require, exports, baseRerFile) {
    "use strict";
    var PersonSetRer = (function (_super) {
        __extends(PersonSetRer, _super);
        function PersonSetRer() {
            _super.apply(this, arguments);
        }
        PersonSetRer.prototype.loadModuleXmlMain = function (res) {
            this.$JObj["AtawUpdatePage"](res);
        };
        return PersonSetRer;
    }(baseRerFile.AkBaseRenderer));
    exports.PersonSetRer = PersonSetRer;
});
