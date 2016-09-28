var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var DeskCer = (function (_super) {
        __extends(DeskCer, _super);
        function DeskCer() {
            _super.apply(this, arguments);
            this.AkName = "DeskCer";
            this.LayOutName = "TTV";
        }
        DeskCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        DeskCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        DeskCer.prototype.init = function () {
            var _this = this;
            _this.getR()["init"]();
            this.getM()["getPanelInfoM"](function (res) {
                _this.getR()["getData"](res);
            });
        };
        DeskCer.prototype.loadPanelBoards = function (res) {
            this.getR()["loadRow"](0);
            for (var i = 0, j = 0, total = 12; i < res.length; i++) {
                var showtype = res[i].ShowType;
                if (showtype == 0) {
                    total = total - 12;
                    if (total < 0) {
                        j++;
                        total = 12;
                        this.getR()["loadRow"](j);
                    }
                    this.getR()["loadOnePanel"](i, j);
                }
                if (showtype == 1) {
                    total = total - 3;
                    if (total < 0) {
                        j++;
                        total = 9;
                        this.getR()["loadRow"](j);
                    }
                    this.getR()["loadThreePanel"](i, j);
                }
                if (showtype == 2) {
                    total = total - 6;
                    if (total < 0) {
                        j++;
                        total = 6;
                        this.getR()["loadRow"](j);
                    }
                    this.getR()["loadSixPanel"](i, j);
                }
                if (showtype == 3) {
                    total = total - 9;
                    if (total < 0) {
                        j++;
                        total = 3;
                        this.getR()["loadRow"](j);
                    }
                    this.getR()["loadNinePanel"](i, j);
                }
            }
        };
        DeskCer.prototype.getpanelbody = function ($dom, href) {
            var _this = this;
            this.getM().getPanelBody(href, function (res) {
                _this.getR().fillBodyData($dom, res);
            });
        };
        DeskCer.prototype.refreshpanelbody = function ($dom, href) {
            var _this = this;
            this.getM().getPanelBody(href, function (res) {
                _this.getR().refreshBodyData($dom, res);
            });
        };
        DeskCer.prototype.setModel = function (p1, p2, p3) {
        };
        ;
        DeskCer.prototype.clearPage = function () {
        };
        ;
        DeskCer.prototype.loadMenu = function () {
            $.AKjs.AppGet().Menu.gotoMenuLoction("$desk$");
        };
        ;
        return DeskCer;
    }(pageCerFile.BasePageCer));
    exports.DeskCer = DeskCer;
});
