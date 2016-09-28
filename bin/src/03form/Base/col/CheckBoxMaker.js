var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./BaseColMaker"], function (require, exports, iocFile, baseColMaker) {
    "use strict";
    var ui;
    (function (ui) {
        var CheckBoxMaker = (function (_super) {
            __extends(CheckBoxMaker, _super);
            function CheckBoxMaker() {
                _super.apply(this, arguments);
            }
            CheckBoxMaker.prototype.maker = function () {
                var temp = this.BaseColVm;
                this.ColVm = temp;
                var tv = this.ColVm;
                var c = this.ColumnConfig;
                var _pageView = this.PageView;
                //var val = this.Val;
                var _val = null;
                if (tv != null && c.Options.RegName) {
                    var kvs = [];
                    var _cd = _pageView.Data[c.Options.RegName];
                    var _kv = _cd.forEach(function (cdr, cdi) {
                        kvs.push({
                            Text: cdr["CODE_TEXT"].toString(),
                            Value: cdr["CODE_VALUE"].toString(),
                            Select: false
                        });
                    });
                    tv["ItemList"] = kvs;
                }
                _super.prototype.maker.call(this);
            };
            return CheckBoxMaker;
        }(baseColMaker.ui.BaseColMaker));
        ui.CheckBoxMaker = CheckBoxMaker;
        var DafaultCheckBoxMaker = (function (_super) {
            __extends(DafaultCheckBoxMaker, _super);
            function DafaultCheckBoxMaker() {
                _super.apply(this, arguments);
            }
            return DafaultCheckBoxMaker;
        }(CheckBoxMaker));
        ui.DafaultCheckBoxMaker = DafaultCheckBoxMaker;
        iocFile.Core.Ioc.Current().RegisterType("CheckBox", "IColMaker", DafaultCheckBoxMaker);
    })(ui = exports.ui || (exports.ui = {}));
});
