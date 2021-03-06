﻿import baseRerFile = require("./../../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../../01core/Url");
import utilFile = require("./../../../../01core/Util");

export class WinInvoicingSellRer extends baseRerFile.AkBaseRenderer {

    public init() {
        this["Title"] = "销售出库单";
        this["MasterTableName"] = "PSS_SellHead";
        this["$TopButtons"] = null;
        this["$BottomButtons"] = null;
    }
    public addTotalRow = function () {
        var _str = "<tr><td colspan=5 id=\"totalPriceBig\">合计(大写):<b>零元整</b></td><td id=\"totalNum\" style=\"text-align: right;\" >0</td><td id=\"totalPrice\"  style=\"text-align: right;\" >￥0.00</td><td></td><td colspan=2></td></tr>";
        $.AKjs.Public.addTotalRow(this.Page.FormObjs["PSS_SellHead"], "PSS_SellHead.TEST_INNER_Table.0", _str)
    };
}
$.AKjs = $.AKjs ? $.AKjs : {};
$.AKjs.ChangeEventFun = $.AKjs.ChangeEventFun ? $.AKjs.ChangeEventFun : {};
$.AKjs.AfterFormFun = $.AKjs.AfterFormFun ? $.AKjs.AfterFormFun : {};

$.AKjs.AfterFormFun.OverDefaultNewRow = function (formObj, key) {
    $.AKjs.AfterFormFun.DefaultNewRow(formObj, key);
    //var _str = "<tr><td colspan=5 id=\"totalPriceBig\">合计(大写):<b>零元整</b></td><td id=\"totalNum\" style=\"text-align: right;\" >0</td><td id=\"totalPrice\"  style=\"text-align: right;\" >￥0.00</td><td></td><td colspan=2></td></tr>";
}

//新增页面子表默认新增一空行
$.AKjs.AfterFormFun.SellNewRow = function (formObj, key) {
    $.AKjs.AfterFormFun.OverDefaultNewRow(formObj, key);
    formObj.AfterAddNewRowFun = function (formObj, rom) {
        $.AKjs.Public.AfterNewRowFun(formObj, "PSS_SellHead");
    }
    formObj.AfterDelNewRowFun = function (formObj, _$row) {
        $.AKjs.Public.AfterNewRowFun(formObj, "PSS_SellHead");
    }
    //if (formObj.Action == "Detail") {
    var _str = "<tr><td colspan=5 id=\"totalPriceBig\">合计(大写):<b>零元整</b></td><td id=\"totalNum\" style=\"text-align: right;\" >0</td><td id=\"totalPrice\"  style=\"text-align: right;\" >￥0.00</td><td></td><td colspan=2></td></tr>";
    formObj.initTailRowOpt(_str);
    // }

}