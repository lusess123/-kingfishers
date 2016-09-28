var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../Default/default/win/WinDefaultRer", "./../../../../01core/Util"], function (require, exports, WinDefaultRer, utilFile) {
    "use strict";
    var BaseInvoicingRer = (function (_super) {
        __extends(BaseInvoicingRer, _super);
        function BaseInvoicingRer() {
            _super.apply(this, arguments);
            this.$Win = null;
            this.SerialNo = null; //流水号
            this.VoucherNo = null; //合同编号
            this.CreateTime = null; //制单日期
            this.$PageObj = null;
            this.Page = null;
            this.$TopButtons = null; //头部按钮
            this.$BottomButtons = null; //底部按钮
            this.$Title = null;
            this.Title = null; //标题
            this.MasterTableName = null; //主表表名
            this.TotalAmount = null; //总金额
            this.TotalQty = null; //总数量
            this.TotalAmountBig = null; //合计(大写)
            //将对象加上小数点,取小数点后length位
            this.setNumberFixed = function (colObj, length) {
                var objNum = colObj.dataValue();
                //if (objNum.split('.').length < num) {
                //    if (objNum != "" && objNum != null) {
                //        colObj.dataValue(parseFloat(objNum).toFixed(length));
                //    }
                //}
            };
        }
        BaseInvoicingRer.prototype.getCer = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        BaseInvoicingRer.prototype.loadModuleXmlMain = function (res, pageStyle) {
            var _$win = this.$Win = $('<div  class="row">' +
                '<div  class="col-md-1 akcs-app-left ACT-APP-LEFT"></div>' +
                '<div  class="col-md-11  clearp ACT-APP-MAIN"></div>' +
                '</div>');
            var _$dom = _$win;
            this.$JObj = null;
            var _this = this;
            _$dom["AtawWindow"]({
                Title: res.Title,
                Width: "95%",
                Fixed: false,
                WindowOpenFun: function (a) {
                    _this.getCer().setValue(); //获取当前时间，流水号等值
                    _this.init();
                    res.SysFunAfterInit = function (page) {
                        _this.Page = page;
                        _this.$PageObj = page.$JObj;
                        if (pageStyle == "Insert") {
                            _this.insertAfterInit();
                        }
                        else if (pageStyle == "Update") {
                            _this.updateAfterInit();
                        }
                        else if (pageStyle == "Detail") {
                            _this.detailAfterInit();
                        }
                    };
                    if (_this.getCer().getM().OpenFunAfterInit) {
                        res.OpenFunAfterInit = _this.getCer().getM().OpenFunAfterInit;
                    }
                    var _$dv = _$dom.find(".ACT-APP-MAIN");
                    res.NaviContentSelector = _$dom.find(".ACT-APP-LEFT");
                    _$dv["Ataw" + pageStyle + "Page"](res);
                    res = null;
                }
            });
            var _Win = _$dom.AtawControl();
            _Win.open();
        };
        //初始化变量
        BaseInvoicingRer.prototype.init = function () {
            this.$Title = $("<div style='text-align:center'><h1>" + this.Title + "</h1><div style='text-align: right;'>" +
                "<lable class='ACT-DATE'>日期:" + this.CreateTime + "</lable>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                "<lable class='ACT-SERIALNO' style=\"font-family:'楷体','楷体_GB2312';color: red;font-size: large;\">NO." +
                this.SerialNo + "</lable></div></div>");
        };
        //自定义公共部分
        BaseInvoicingRer.prototype.initCommon = function () {
            this.initTop();
            this.initBottom();
        };
        ;
        //自定义新增页面
        BaseInvoicingRer.prototype.insertAfterInit = function () {
            this.initCommon();
            this.setInsertDefaultValue();
            // this.addTotalRow();
        };
        ;
        //自定义修改页面
        BaseInvoicingRer.prototype.updateAfterInit = function () {
            this.getUpdateFieldsValue();
            this.initCommon();
            //  this.addTotalRow();
            this.$Title.find(".ACT-SERIALNO").text(this.SerialNo);
            this.$Title.find(".ACT-DATE").text("日期:" + this.CreateTime);
            $("#totalPrice")[0].innerHTML = "￥" + this.TotalAmount;
            $("#totalNum")[0].innerHTML = this.TotalQty; //.toFixed(2);
            $("#totalPriceBig")[0].innerHTML = "合计(大写):" + "<b>" + this.TotalAmountBig + "</b>";
        };
        ;
        //自定义详细页面
        BaseInvoicingRer.prototype.detailAfterInit = function () {
            this.getDetailFieldsValue();
            this.initCommon();
            //this.addDetailTotalRow();
            this.$Title.find(".ACT-SERIALNO").text(this.SerialNo);
            this.$Title.find(".ACT-DATE").text("日期:" + this.CreateTime);
            $("#totalPrice")[0].innerHTML = "￥" + this.TotalAmount;
            $("#totalNum")[0].innerHTML = this.TotalQty; //.toFixed(2);
            $("#totalPriceBig")[0].innerHTML = "合计(大写):" + "<b>" + this.TotalAmountBig + "</b>";
        };
        ;
        BaseInvoicingRer.prototype.getUpdateFieldsValue = function () {
            this.getCer().getUpdateFieldsValue(this.$PageObj);
        };
        ;
        BaseInvoicingRer.prototype.getDetailFieldsValue = function () {
            this.getCer().getDetailFieldsValue(this.$PageObj);
        };
        ;
        //        this.addTotalRow = function () {
        //        };
        //        this.addDetailTotalRow = function () {
        //        };
        //自定义头部
        BaseInvoicingRer.prototype.initTop = function () {
            this.$PageObj.find(".ACT-FORM-TITLE").clear();
            this.$PageObj.find(".FormContent:first").prepend(this.$Title).prepend(this.$TopButtons);
        };
        ;
        //设置表头样式
        BaseInvoicingRer.prototype.setTHStyle = function (col, style, val) {
            this.$PageObj.find("th[acol='" + col + "']").css(style, val);
        };
        ;
        //设置单元格样式
        BaseInvoicingRer.prototype.setTDStyle = function (col, style, val) {
            this.$PageObj.find("td[acol='" + col + "']").css(style, val);
        };
        ;
        //自定义底部
        BaseInvoicingRer.prototype.initBottom = function () {
            this.$PageObj.find(".acs-grid-normal").html("").append(this.$BottomButtons);
        };
        ;
        //新增页面设置默认值，如果设置默认值字段在不同的单据中命名不一致，需要在子类中重新实现
        BaseInvoicingRer.prototype.setInsertDefaultValue = function () {
            this.getCer().setInsertDefaultValue(this.$PageObj);
        };
        ;
        BaseInvoicingRer.prototype.dispose = function () {
            var _Win = this.$Win.AtawControl();
            if (_Win != null) {
                _Win.close();
                _Win.dispose();
            }
        };
        return BaseInvoicingRer;
    }(WinDefaultRer.WinDefaultRer));
    exports.BaseInvoicingRer = BaseInvoicingRer;
    ;
    $.AKjs = $.AKjs ? $.AKjs : {};
    $.AKjs.ChangeEventFun = $.AKjs.ChangeEventFun ? $.AKjs.ChangeEventFun : {};
    $.AKjs.AfterFormFun = $.AKjs.AfterFormFun ? $.AKjs.AfterFormFun : {};
    $.AKjs.Public = $.AKjs.Public ? $.AKjs.Public : {};
    //单价字段change事件
    $.AKjs.ChangeEventFun.getPrice = function (col) {
        var colObj = col.AtawControlObj;
        var objNum = colObj.dataValue();
        if (objNum.split('.').length < 2) {
            if (objNum != "" && objNum != null) {
                colObj.dataValue(parseFloat(objNum).toFixed(2));
            }
        }
    };
    //数量字段change事件
    $.AKjs.ChangeEventFun.getAmount = function (col) {
        var colObj = col.AtawControlObj;
        var objNum = colObj.dataValue();
        if (objNum.split('.').length < 2) {
            if (objNum != "" && objNum != null) {
                colObj.dataValue(parseFloat(objNum).toFixed(2));
            }
        }
    };
    //金额字段change事件
    $.AKjs.ChangeEventFun.getTotalPrice = function (col) {
        var $formObj = col.ParentRowObj.ParentFormObj.$JObj;
        var _tabRows = $formObj.find("td[acol='FAmount']").length;
        var _totalPrice = 0;
        var _totalNumber = 0;
        for (var i = 0; i < _tabRows; i++) {
            var _priceCtrl = $formObj.find("[act_ds*='FAmount']").AtawControl();
            var _numberCtrl = $formObj.find("[act_ds*='FQty']").AtawControl();
            var priceCtrl;
            var numberCtrl;
            if (_tabRows == 1) {
                priceCtrl = _priceCtrl;
                numberCtrl = _numberCtrl;
            }
            else {
                priceCtrl = _priceCtrl[i];
                numberCtrl = _numberCtrl[i];
            }
            if (priceCtrl && priceCtrl.dataValue() != "") {
                _totalPrice += parseFloat(priceCtrl.dataValue());
            }
            if (numberCtrl && numberCtrl.dataValue() != "") {
                _totalNumber += parseFloat(numberCtrl.dataValue());
            }
        }
        var $pageObj = col.ParentRowObj.ParentFormObj.ParentPageObj.$JObj;
        var _totalAmountCtrl = $pageObj.find("[act_ds*='FTotalAmount']").AtawControl();
        _totalAmountCtrl.dataValue(_totalPrice.toFixed(2));
        var _totalQtyCtrl = $pageObj.find("[act_ds*='FTotalQty']").AtawControl();
        _totalQtyCtrl.dataValue(_totalNumber.toFixed(2));
        $("#totalPrice")[0].innerHTML = "￥" + _totalPrice.toFixed(2);
        $("#totalNum")[0].innerHTML = _totalNumber.toFixed(2);
    };
    //总金额字段change事件
    $.AKjs.ChangeEventFun.getCmycurD = function (col) {
        if (col.AtawControlObj.dataValue() != null && col.AtawControlObj.dataValue() != "") {
            var _number = col.AtawControlObj.dataValue();
            if (_number) {
                $.AKjs.getJSON("/Invoicing/InvoicingHome/getCmycurD", { number: _number }, function (data) {
                    col.ParentRowObj.ParentFormObj.$JObj.find("[act_ds*='FTotalCapital']").AtawControl().dataValue(data);
                    $("#totalPriceBig")[0].innerHTML = "合计(大写):" + "<b>" + data + "</b>";
                });
            }
        }
    };
    //新增页面子表默认新增一空行
    $.AKjs.AfterFormFun.DefaultNewRow = function (formObj, key) {
        if (formObj.Action == "Insert") {
            formObj.addNewRowing();
        }
    };
    $.AKjs.Public.addTotalRow = function (formObj, name, html) {
        var _bodyFormObj = formObj.getControlObjBySubmitSign("" + name + "").FormObj;
        _bodyFormObj.initTailRowOpt(html);
    };
    $.AKjs.Public.addDetailTotalRow = function (formObj, html) {
        formObj.initTailRowOpt(html);
    };
    $.AKjs.Public.AfterNewRowFun = function (formObj, headName) {
        var _tabRows = formObj.$JObj.find("td[acol='FAmount']").length;
        var _totalPrice = 0;
        var _totalNumber = 0;
        for (var i = 0; i < _tabRows; i++) {
            var _priceCtrl = formObj.$JObj.find("[act_ds*='FAmount']").AtawControl();
            var _numberCtrl = formObj.$JObj.find("[act_ds*='FQty']").AtawControl();
            var priceCtrl;
            var numberCtrl;
            if (_tabRows == 1) {
                priceCtrl = _priceCtrl;
                numberCtrl = _numberCtrl;
            }
            else {
                priceCtrl = _priceCtrl[i];
                numberCtrl = _numberCtrl[i];
            }
            if (priceCtrl && priceCtrl.dataValue() != "") {
                _totalPrice += parseFloat(priceCtrl.dataValue());
            }
            if (numberCtrl && numberCtrl.dataValue() != "") {
                _totalNumber += parseFloat(numberCtrl.dataValue());
            }
        }
        var _mainFormObj = formObj.ParentPageObj.FormObjs["" + headName + ""];
        var _totalAmountCtrl = _mainFormObj.$JObj.find("[act_ds*='FTotalAmount.0']").AtawControl();
        _totalAmountCtrl.dataValue(_totalPrice.toFixed(2));
        var _totalQtyCtrl = _mainFormObj.$JObj.find("[act_ds*='FTotalQty.0']").AtawControl();
        _totalQtyCtrl.dataValue(_totalNumber.toFixed(2));
        $("#totalPrice")[0].innerHTML = "￥" + _totalPrice.toFixed(2);
        $("#totalNum")[0].innerHTML = _totalNumber.toFixed(2);
    };
});
