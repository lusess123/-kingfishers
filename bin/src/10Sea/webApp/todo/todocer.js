var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var TodoCer = (function (_super) {
        __extends(TodoCer, _super);
        function TodoCer() {
            _super.apply(this, arguments);
            this.AkName = "todocer";
            this.Data = null;
            this.LayOutName = "VTV";
            this.initC = function () {
                this.R.initR();
            };
        }
        TodoCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        ;
        TodoCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        ;
        TodoCer.prototype.loadToDoData = function () {
            var _this = this;
            _this.getM().getToDoData(function (res) {
                _this.getR().initToDoWork(res);
            });
        };
        ;
        TodoCer.prototype.loadTopMyWork = function ($dom) {
            var _this = this;
            _this.getM().getTopMyWork(function (res) {
                var _dt = res.Data["TopMyWork"];
                if (_dt.length > 0) {
                    _this.getR().setTopMyWork(_dt[0]["SACT_SUBCONTENT"]);
                }
            });
        };
        ;
        TodoCer.prototype.setModel = function (p1, p2, p3) {
        };
        ;
        TodoCer.prototype.loadMenu = function () {
        };
        ;
        TodoCer.prototype.clearPage = function () {
            $.AKjs.AppGet().hideNavi();
        };
        ;
        return TodoCer;
    }(pageCerFile.BasePageCer));
    exports.TodoCer = TodoCer;
});
