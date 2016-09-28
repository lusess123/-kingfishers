var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./BaseColMaker"], function (require, exports, iocFile, baseColMaker) {
    "use strict";
    var ui;
    (function (ui) {
        var NormalRowGroupMaker = (function (_super) {
            __extends(NormalRowGroupMaker, _super);
            function NormalRowGroupMaker() {
                _super.apply(this, arguments);
            }
            NormalRowGroupMaker.prototype.maker = function () {
                var temp = this.BaseColVm;
                this.ColVm = temp;
                var tv = this.ColVm;
                var c = this.ColumnConfig;
                var _pageView = this.PageView;
                //var val = this.Val;
                var _val = null;
                //将配置中标题和包含的控件名称都放到NormalRowGroup中
                _super.prototype.maker.call(this);
            };
            return NormalRowGroupMaker;
        }(baseColMaker.ui.BaseColMaker));
        ui.NormalRowGroupMaker = NormalRowGroupMaker;
        var DafaultNormalRowGroupMaker = (function (_super) {
            __extends(DafaultNormalRowGroupMaker, _super);
            function DafaultNormalRowGroupMaker() {
                _super.apply(this, arguments);
            }
            return DafaultNormalRowGroupMaker;
        }(NormalRowGroupMaker));
        ui.DafaultNormalRowGroupMaker = DafaultNormalRowGroupMaker;
        iocFile.Core.Ioc.Current().RegisterType("NormalRowGroup", "IColMaker", NormalRowGroupMaker);
    })(ui = exports.ui || (exports.ui = {}));
});
