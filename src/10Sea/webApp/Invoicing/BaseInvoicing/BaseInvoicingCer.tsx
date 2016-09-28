import defaultCer = require("./../../Default/default/DefaultCer");
import utilFile = require("./../../../../01core/Util");
import mFile = require("./../../Default/default/DefaultMer");
//import rFile = require("./../../Default/default/DefaultRer");
import rFile = require("./BaseInvoicingRer");

export class BaseInvoicingCer extends defaultCer.DefaultCer{
    public getR(): rFile.BaseInvoicingRer{
        return utilFile.Core.Util.Cast<rFile.BaseInvoicingRer>(this.R);
    }
    public loadMenu() {

    };

    public setValue() {
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
    }
    public setInsertDefaultValue($dom) {
        var _FSerialNum = this.getColumnControl(this.getR().MasterTableName + ".FSerialNum", $dom);  //流水号 
        var _FContractNum = this.getColumnControl(this.getR().MasterTableName + ".FContractNum", $dom);      //合同编号 
        var _CREATE_ID = this.getColumnControl(this.getR().MasterTableName + ".CREATE_ID", $dom);        //制单人 
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

//获取字段控件对象
    public getColumnControl(name, $dom) {
        return $dom.find("[act_ds*='" + name + "']").AtawControl();
    }

//获取详细页面控件对象
    public getColumnDetailControl(name, $dom) {
        return $dom.find("div[acol='" + name + "']").children(".ACT_CONTROL").AtawControl();
    }

    public getUpdateFieldsValue($dom) {
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

    public getDetailFieldsValue($dom) {
        var _CREATE_TIME = this.getColumnDetailControl("CREATE_TIME", $dom);  //日期 
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
}