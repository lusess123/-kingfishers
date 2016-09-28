var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./BaseColMaker"], function (require, exports, baseColMaker) {
    "use strict";
    var ui;
    (function (ui) {
        var BaseSelectMaker = (function (_super) {
            __extends(BaseSelectMaker, _super);
            function BaseSelectMaker() {
                _super.apply(this, arguments);
            }
            BaseSelectMaker.prototype.maker = function () {
                var temp = this.BaseColVm;
                this.ColVm = temp;
                var tv = this.ColVm;
                var c = this.ColumnConfig;
                var _pageView = this.PageView;
                if (tv != null) {
                    tv["RegName"] = c.Options.RegName;
                }
                _super.prototype.maker.call(this);
            };
            return BaseSelectMaker;
        }(baseColMaker.ui.BaseColMaker));
        ui.BaseSelectMaker = BaseSelectMaker;
    })(ui = exports.ui || (exports.ui = {}));
});
