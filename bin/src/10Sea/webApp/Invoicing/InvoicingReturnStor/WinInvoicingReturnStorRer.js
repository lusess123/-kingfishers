var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../core/mcrv/AkBaseRenderer"], function (require, exports, baseRerFile) {
    "use strict";
    var WinInvoicingReturnStorRer = (function (_super) {
        __extends(WinInvoicingReturnStorRer, _super);
        function WinInvoicingReturnStorRer() {
            _super.apply(this, arguments);
        }
        WinInvoicingReturnStorRer.prototype.init = function () {
            this["Title"] = "退货入库单";
            this["MasterTableName"] = "PSS_RETURNSTORHEAD";
            this["$TopButtons"] = null;
            this["$BottomButtons"] = null;
        };
        return WinInvoicingReturnStorRer;
    }(baseRerFile.AkBaseRenderer));
    exports.WinInvoicingReturnStorRer = WinInvoicingReturnStorRer;
    $.AKjs = $.AKjs ? $.AKjs : {};
    $.AKjs.ChangeEventFun = $.AKjs.ChangeEventFun ? $.AKjs.ChangeEventFun : {};
    $.AKjs.AfterFormFun = $.AKjs.AfterFormFun ? $.AKjs.AfterFormFun : {};
    $.AKjs.AfterFormFun.OverDefaultNewRow = function (formObj, key) {
        $.AKjs.AfterFormFun.DefaultNewRow(formObj, key);
        //var _str = "<tr><td colspan=5 id=\"totalPriceBig\">合计(大写):<b>零元整</b></td><td id=\"totalNum\" style=\"text-align: right;\" >0</td><td id=\"totalPrice\"  style=\"text-align: right;\" >￥0.00</td><td></td><td colspan=2></td></tr>";
    };
    //新增页面子表默认新增一空行
    $.AKjs.AfterFormFun.ReturnStorNewRow = function (formObj, key) {
        $.AKjs.AfterFormFun.OverDefaultNewRow(formObj, key);
        formObj.AfterAddNewRowFun = function (formObj, rom) {
            $.AKjs.Public.AfterNewRowFun(formObj, "PSS_RETURNSTORHEAD");
        };
        formObj.AfterDelNewRowFun = function (formObj, _$row) {
            $.AKjs.Public.AfterNewRowFun(formObj, "PSS_RETURNSTORHEAD");
        };
        // if (formObj.Action == "Detail") {
        var _str = "<tr><td colspan=5 id=\"totalPriceBig\">合计(大写):<b>零元整</b></td><td id=\"totalNum\" style=\"text-align: right;\" >0</td><td id=\"totalPrice\"  style=\"text-align: right;\" >￥0.00</td><td></td><td colspan=2></td></tr>";
        formObj.initTailRowOpt(_str);
        //}
    };
});
