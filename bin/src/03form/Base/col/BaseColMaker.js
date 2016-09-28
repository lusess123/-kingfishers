var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc"], function (require, exports, iocFile) {
    "use strict";
    var ui;
    (function (ui) {
        var BaseColMaker = (function () {
            function BaseColMaker() {
            }
            BaseColMaker.prototype.maker = function () {
                var temp = this.BaseColVm;
                this.ColVm = temp;
                var tv = this.ColVm;
                var c = this.ColumnConfig;
                var _pageView = this.PageView;
                this.ColVm.initDataValue(this.Val ? this.Val.toString() : "");
                this.ColumnVm.ControlObj = this.ColVm;
                if (this.ColumnConfig.Options) {
                    var _lg = this.ColumnConfig.Options.Legal;
                    if (_lg) {
                        this.ColVm.LegalObj.initOpts(_lg.Kind, _lg.ErrMsg, _lg.CustomLegalFun, _lg.reg, _lg.LegalExpression);
                    }
                }
            };
            return BaseColMaker;
        }());
        ui.BaseColMaker = BaseColMaker;
        var DefaultBaseColMaker = (function (_super) {
            __extends(DefaultBaseColMaker, _super);
            function DefaultBaseColMaker() {
                _super.apply(this, arguments);
            }
            return DefaultBaseColMaker;
        }(BaseColMaker));
        ui.DefaultBaseColMaker = DefaultBaseColMaker;
        iocFile.Core.Ioc.Current().RegisterType("BASECOL", "IColMaker", DefaultBaseColMaker);
    })(ui = exports.ui || (exports.ui = {}));
});
