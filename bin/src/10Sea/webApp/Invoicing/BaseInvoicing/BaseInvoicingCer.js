var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../Default/default/DefaultCer", "./../../../../01core/Util"], function (require, exports, defaultCer, utilFile) {
    "use strict";
    var BaseInvoicingCer = (function (_super) {
        __extends(BaseInvoicingCer, _super);
        function BaseInvoicingCer() {
            _super.apply(this, arguments);
        }
        BaseInvoicingCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        BaseInvoicingCer.prototype.loadMenu = function () {
        };
        ;
        BaseInvoicingCer.prototype.setValue = function () {
            var myDate = new Date();
            var year = myDate.getFullYear();
            var month = myDate.getMonth() + 1;
            var date = myDate.getDate();
            this.getR().CreateTime = myDate.toLocaleDateString();
            this.getR().VoucherNo = "HT"; //产生随机数
            var _month = "";
            var _date = "";
            if (String(month).length < 2) {
                _month = "0" + month;
            }
            else {
                _month = month.toString();
            }
            if (String(date).length < 2) {
                _date = "0" + date.toString();
            }
            else {
                _date = date.toString();
            }
            this.getR().SerialNo = year + "" + _month + "" + _date;
            for (var i = 0; i < 10; i++) {
                this.getR().VoucherNo += Math.floor(Math.random() * 10);
            }
        };
        BaseInvoicingCer.prototype.setInsertDefaultValue = function ($dom) {
            var _FSerialNum = this.getColumnControl(this.getR().MasterTableName + ".FSerialNum", $dom); //流水号 
            var _FContractNum = this.getColumnControl(this.getR().MasterTableName + ".FContractNum", $dom); //合同编号 
            var _CREATE_ID = this.getColumnControl(this.getR().MasterTableName + ".CREATE_ID", $dom); //制单人 
            var _CREATE_TIME = this.getColumnControl(this.getR().MasterTableName + ".CREATE_TIME", $dom); //日期 
            var _FNumber = this.getColumnControl(this.getR().MasterTableName + ".FNumber", $dom); //NO 
            if (_FSerialNum) {
                _FSerialNum.dataValue(this.getR().SerialNo);
            }
            if (_CREATE_TIME) {
                _CREATE_TIME.dataValue(this.getR().CreateTime);
            }
            if (_FContractNum) {
                _FContractNum.dataValue(this.getR().VoucherNo);
            }
            if (_FNumber) {
                _FNumber.dataValue("NO." + this.getR().SerialNo);
            }
            if (_CREATE_ID) {
                _CREATE_ID.dataValue($.AKjs.NickName);
            }
        };
        ;
        //获取字段控件对象
        BaseInvoicingCer.prototype.getColumnControl = function (name, $dom) {
            return $dom.find("[act_ds*='" + name + "']").AtawControl();
        };
        //获取详细页面控件对象
        BaseInvoicingCer.prototype.getColumnDetailControl = function (name, $dom) {
            return $dom.find("div[acol='" + name + "']").children(".ACT_CONTROL").AtawControl();
        };
        BaseInvoicingCer.prototype.getUpdateFieldsValue = function ($dom) {
            var _CREATE_TIME = this.getColumnControl(this.getR().MasterTableName + ".CREATE_TIME", $dom); //日期 
            var _FNumber = this.getColumnControl(this.getR().MasterTableName + ".FNumber", $dom); //NO
            var _FTotalCapital = this.getColumnControl(this.getR().MasterTableName + ".FTotalCapital", $dom); //合计(大写)
            var _FTotalQty = this.getColumnControl(this.getR().MasterTableName + ".FTotalQty", $dom); //总数量
            var _FTotalAmount = this.getColumnControl(this.getR().MasterTableName + ".FTotalAmount", $dom); //总金额
            if (_CREATE_TIME) {
                this.getR().CreateTime = _CREATE_TIME.dataValue();
            }
            if (_FNumber) {
                this.getR().SerialNo = _FNumber.dataValue();
            }
            if (_FTotalCapital) {
                this.getR().TotalAmountBig = _FTotalCapital.dataValue();
            }
            if (_FTotalQty) {
                this.getR().TotalQty = _FTotalQty.dataValue();
            }
            if (_FTotalAmount) {
                this.getR().TotalAmount = _FTotalAmount.dataValue();
            }
        };
        ;
        BaseInvoicingCer.prototype.getDetailFieldsValue = function ($dom) {
            var _CREATE_TIME = this.getColumnDetailControl("CREATE_TIME", $dom); //日期 
            var _FNumber = this.getColumnDetailControl("FNumber", $dom); //NO
            var _FTotalCapital = this.getColumnDetailControl("FTotalCapital", $dom); //合计(大写)
            var _FTotalQty = this.getColumnDetailControl("FTotalQty", $dom); //总数量
            var _FTotalAmount = this.getColumnDetailControl("FTotalAmount", $dom); //总金额
            if (_CREATE_TIME) {
                this.getR().CreateTime = _CREATE_TIME.dataValue();
            }
            if (_FNumber) {
                this.getR().SerialNo = _FNumber.dataValue();
            }
            if (_FTotalCapital) {
                this.getR().TotalAmountBig = _FTotalCapital.dataValue();
            }
            if (_FTotalQty) {
                this.getR().TotalQty = _FTotalQty.dataValue();
            }
            if (_FTotalAmount) {
                this.getR().TotalAmount = _FTotalAmount.dataValue();
            }
        };
        ;
        return BaseInvoicingCer;
    }(defaultCer.DefaultCer));
    exports.BaseInvoicingCer = BaseInvoicingCer;
});
