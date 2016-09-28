var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var PersonSetCer = (function (_super) {
        __extends(PersonSetCer, _super);
        function PersonSetCer() {
            _super.apply(this, arguments);
        }
        PersonSetCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        PersonSetCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        PersonSetCer.prototype.init = function () {
            this.getM().getModuleXmlPageData(function (res) {
                this.getR.loadModuleXmlMain(res);
            });
        };
        ;
        PersonSetCer.prototype.setModel = function (p1, p2, p3) {
        };
        PersonSetCer.prototype.clearPage = function () {
        };
        return PersonSetCer;
    }(pageCerFile.BasePageCer));
    exports.PersonSetCer = PersonSetCer;
});
