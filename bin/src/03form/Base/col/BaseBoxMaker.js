var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./BaseColMaker"], function (require, exports, baseColMaker) {
    "use strict";
    var ui;
    (function (ui) {
        var BaseBoxMaker = (function (_super) {
            __extends(BaseBoxMaker, _super);
            function BaseBoxMaker() {
                _super.apply(this, arguments);
            }
            //要在子类中个父类传个值 将名字传到下面的方法中
            BaseBoxMaker.prototype.maker = function () {
                var temp = this.BaseColVm;
                this.ColVm = temp;
                var tv = this.ColVm;
                var c = this.ColumnConfig;
                var _pageView = this.PageView;
                if (tv != null && c.Options.RegName) {
                    var kv = [];
                    var _cd = _pageView.Data[c.Options.RegName];
                    var _kvs = _cd.forEach(function (cdr, cdi) {
                        kv.push({
                            Text: cdr["CODE_TEXT"].toString(),
                            Value: cdr["CODE_VALUE"].toString()
                        });
                    });
                    tv["ItemList"] = kv;
                }
                _super.prototype.maker.call(this);
            };
            return BaseBoxMaker;
        }(baseColMaker.ui.BaseColMaker));
        ui.BaseBoxMaker = BaseBoxMaker;
        var DefaultBaseBoxMaker = (function (_super) {
            __extends(DefaultBaseBoxMaker, _super);
            function DefaultBaseBoxMaker() {
                _super.apply(this, arguments);
            }
            return DefaultBaseBoxMaker;
        }(baseColMaker.ui.DefaultBaseColMaker));
        ui.DefaultBaseBoxMaker = DefaultBaseBoxMaker;
    })(ui = exports.ui || (exports.ui = {}));
});
