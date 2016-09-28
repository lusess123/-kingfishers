var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./BaseColMaker"], function (require, exports, iocFile, baseColMaker) {
    "use strict";
    var ui;
    (function (ui) {
        var ListBoxMaker = (function (_super) {
            __extends(ListBoxMaker, _super);
            function ListBoxMaker() {
                _super.apply(this, arguments);
            }
            ListBoxMaker.prototype.maker = function () {
                var temp = this.BaseColVm;
                this.ColVm = temp;
                var tv = this.ColVm;
                var c = this.ColumnConfig;
                var _pageView = this.PageView;
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
            return ListBoxMaker;
        }(baseColMaker.ui.BaseColMaker));
        ui.ListBoxMaker = ListBoxMaker;
        var DafaultListBoxMaker = (function (_super) {
            __extends(DafaultListBoxMaker, _super);
            function DafaultListBoxMaker() {
                _super.apply(this, arguments);
            }
            return DafaultListBoxMaker;
        }(ListBoxMaker));
        ui.DafaultListBoxMaker = DafaultListBoxMaker;
        iocFile.Core.Ioc.Current().RegisterType("ListBox", "IColMaker", DafaultListBoxMaker);
    })(ui = exports.ui || (exports.ui = {}));
});
