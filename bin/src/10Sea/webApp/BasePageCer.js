var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../core/mcrv/AkBaseController"], function (require, exports, akcerFile) {
    "use strict";
    var BasePageCer = (function (_super) {
        __extends(BasePageCer, _super);
        function BasePageCer() {
            _super.apply(this, arguments);
            this.AppCer = null;
            this.NoMenu = false;
            this.LayOutName = "TTV";
        }
        BasePageCer.prototype.init = function ($dom) {
        };
        ;
        BasePageCer.prototype.setModel = function (p1, p2, p3) {
        };
        ;
        BasePageCer.prototype.loadLeft = function ($dom) {
        };
        ;
        BasePageCer.prototype.loadRight = function ($dom) {
        };
        ;
        BasePageCer.prototype.loadMenu = function ($dom) {
            //alert(this.M.ModeName);
            //$.AKjs.AppGet().Menu.gotoMenuLoction("$" + this.M.ModeName + "$");
        };
        ;
        BasePageCer.prototype.clearPage = function ($dom) {
        };
        ;
        BasePageCer.prototype.loadLayOut = function () {
            if (this.LayOutName != "") {
                $.AKjs.AppGet().LayOut.layOutTransFormPage(this.LayOutName);
            }
        };
        return BasePageCer;
    }(akcerFile.AkBaseController));
    exports.BasePageCer = BasePageCer;
});
