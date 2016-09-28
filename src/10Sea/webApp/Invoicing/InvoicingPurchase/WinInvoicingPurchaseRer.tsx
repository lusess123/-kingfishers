import baseRerFile = require("./../../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../../01core/Url");
import utilFile = require("./../../../../01core/Util");

export class WinInvoicingPurchaseRer extends baseRerFile.AkBaseRenderer {

    public init() {
        this["Title"] = "采购入库单";
        this["MasterTableName"] = "PSS_PurchaseHead";
        this["$TopButtons"] = null;
        this["$BottomButtons"] = null;
    } 
    public OverDefaultNewRow(formObj, key) {
        $.AKjs.AfterFormFun.DefaultNewRow(formObj, key);
    }
}
$.AKjs = $.AKjs ? $.AKjs : {};
$.AKjs.ChangeEventFun = $.AKjs.ChangeEventFun ? $.AKjs.ChangeEventFun : {};
$.AKjs.AfterFormFun = $.AKjs.AfterFormFun ? $.AKjs.AfterFormFun : {};

$.AKjs.AfterFormFun.OverDefaultNewRow = function (formObj, key) {
    $.AKjs.AfterFormFun.DefaultNewRow(formObj, key);
}

//新增页面子表默认新增一空行
$.AKjs.AfterFormFun.PurchaseNewRow = function (formObj, key) {
    $.AKjs.AfterFormFun.OverDefaultNewRow(formObj, key);
    formObj.AfterAddNewRowFun = function (formObj, rom) {
        $.AKjs.Public.AfterNewRowFun(formObj, "PSS_PurchaseHead");
    }
    formObj.AfterDelNewRowFun = function (formObj, _$row) {
        $.AKjs.Public.AfterNewRowFun(formObj, "PSS_PurchaseHead");
    }
    var _str = "<tr><td colspan=5 id=\"totalPriceBig\">合计(大写):<b>零元整</b></td><td id=\"totalNum\" style=\"text-align: right;\" >0</td><td id=\"totalPrice\"  style=\"text-align: right;\" >￥0.00</td><td></td><td colspan=2></td></tr>";
    formObj.initTailRowOpt(_str);
}
