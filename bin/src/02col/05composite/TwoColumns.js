var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "react"], function (require, exports, basecolFile, iocFile, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var NumMoney = (function () {
            function NumMoney() {
                this.isCheck = true;
            }
            return NumMoney;
        }());
        ui.NumMoney = NumMoney;
        var TwoColumnsAction = (function (_super) {
            __extends(TwoColumnsAction, _super);
            function TwoColumnsAction() {
                _super.apply(this, arguments);
            }
            return TwoColumnsAction;
        }(BaseColAction));
        ui.TwoColumnsAction = TwoColumnsAction;
        var TwoColumnsProps = (function (_super) {
            __extends(TwoColumnsProps, _super);
            function TwoColumnsProps() {
                _super.apply(this, arguments);
            }
            return TwoColumnsProps;
        }(BaseColProps));
        ui.TwoColumnsProps = TwoColumnsProps;
        var TwoColumnsVm = (function (_super) {
            __extends(TwoColumnsVm, _super);
            function TwoColumnsVm() {
                _super.call(this);
                this.ReactType = TwoColumsReact;
                this.pRegName = "双字段控价";
            }
            TwoColumnsVm.Test = function () {
                var _bean = new TwoColumnsVm();
                return _bean;
            };
            return TwoColumnsVm;
        }(BaseColVm));
        ui.TwoColumnsVm = TwoColumnsVm;
        var TwoColumsStates = (function (_super) {
            __extends(TwoColumsStates, _super);
            function TwoColumsStates() {
                _super.apply(this, arguments);
                this.ItemList = new Array(); //将添加的数据写这里在页面循环
                this.SumMoney = 0; //总金额
                this.isCheck = true;
                this.isAllOk = true;
            }
            return TwoColumsStates;
        }(BaseColStates));
        ui.TwoColumsStates = TwoColumsStates;
        var TwoColumsReact = (function (_super) {
            __extends(TwoColumsReact, _super);
            function TwoColumsReact() {
                _super.apply(this, arguments);
                this.state = this.getInitialState();
            }
            TwoColumsReact.prototype.getInitialState = function () {
                var _beam = new TwoColumsStates();
                return _beam;
            };
            //添加票号
            TwoColumsReact.prototype.addNumMoney = function (e) {
                var bean = new NumMoney();
                //将数据分成两份
                this.state.isCheck = this.CheckMoney(this.state.fristMoney) && this.CheckNum(this.state.fristNum);
                if (this.state.isCheck) {
                    //成功
                    if (this.state.ItemList.length == 0) {
                        var _valArr = this.state.fristNum.split(" ");
                    }
                    else {
                        var _valArr = this.state.ItemList[this.state.ItemList.length - 1].Num.split(" ");
                    }
                    if (_valArr.length > 1) {
                        var _newVal = parseInt(_valArr[1]) + 1;
                        var n = _valArr[0].length;
                        var _newStr = (Array(n).join("0") + _newVal).slice(-n);
                        var Num = _valArr[0] + " " + _newStr;
                        bean.Num = Num;
                    }
                    bean.Money = this.state.fristMoney;
                    this.state.ItemList.push(bean);
                    //更新总数据
                    this.pSetSumMoney();
                }
                this.forceUpdate();
            };
            //移除票号
            TwoColumsReact.prototype.removeNmMoney = function (a) {
                //将点击的数据删除
                for (var i = 0; i < this.state.ItemList.length; i++) {
                    if (a.Num == this.state.ItemList[i].Num) {
                        this.state.ItemList.splice(i, 1);
                    }
                }
                //更新总数据
                this.pSetSumMoney();
                this.forceUpdate();
            };
            TwoColumsReact.prototype.pNumInputOnBlur = function (e) {
                var value = e.target["value"];
                value = this.NumFormat(value);
                this.state.isCheck = this.CheckNum(value);
                if (!this.state.isCheck) {
                    this.state.isAllOk = false;
                }
                else {
                    this.state.isAllOk = true;
                }
                this.state.fristNum = value;
                this.forceUpdate();
            };
            TwoColumsReact.prototype.pNumInputOnChange = function (e) {
                var _val = e.target["value"];
                this.setState(this.state.fristNum = _val);
            };
            //对金额进行验证的时候将 
            TwoColumsReact.prototype.pMoneyInputOnChange = function (e) {
                var _val = e.target["value"];
                var value = _val.replace(/[^0-9]/ig, "");
                this.state.fristMoney = value;
                this.state.SumMoney = parseInt(value);
                this.forceUpdate();
            };
            TwoColumsReact.prototype.pItemNumOnBuler = function (e, a) {
                for (var i = 0; i < this.state.ItemList.length; i++) {
                    if (this.state.ItemList[i].Num == a.Num) {
                        var _val = e.target["value"];
                        var value = _val.replace(/[^0-9]/ig, "");
                        a.Num = value;
                        this.state.ItemList[i].Num = this.NumFormat(value);
                        if (!this.CheckNumNumMoney(a)) {
                            this.state.ItemList[i].isCheck = false;
                            this.state.isAllOk = false;
                        }
                        else {
                            this.state.ItemList[i].isCheck = true;
                        }
                    }
                }
                this.forceUpdate();
            };
            TwoColumsReact.prototype.pItemNumOnChange = function (e, a) {
                for (var i = 0; i < this.state.ItemList.length; i++) {
                    if (this.state.ItemList[i].Num == a.Num) {
                        this.setState(this.state.ItemList[i].Num = e.target["value"]);
                    }
                }
            };
            TwoColumsReact.prototype.pItemMoneyOnBuler = function (e, a) {
                for (var i = 0; i < this.state.ItemList.length; i++) {
                    if (this.state.ItemList[i].Num == a.Num) {
                        var value = e.target["value"];
                        a.Money = value;
                        this.state.ItemList[i].Money = this.NumFormat(value);
                        if (!this.CheckNumNumMoney(a)) {
                            this.state.ItemList[i].isCheck = false;
                            this.state.isAllOk = false;
                        }
                        else {
                            this.state.ItemList[i].isCheck = true;
                        }
                    }
                }
                this.pSetSumMoney();
                this.forceUpdate();
            };
            TwoColumsReact.prototype.pItemMoneyOnChage = function (e, a) {
                for (var i = 0; i < this.state.ItemList.length; i++) {
                    if (this.state.ItemList[i].Num == a.Num) {
                        this.setState(this.state.ItemList[i].Money = e.target["value"]);
                    }
                }
            };
            TwoColumsReact.prototype.pAddItemList = function (num, Money) {
                var _bean = new NumMoney();
                _bean.Num = num;
                _bean.Money = Money;
                this.state.ItemList.push(_bean);
            };
            //计算总金额
            TwoColumsReact.prototype.pSetSumMoney = function () {
                this.state.SumMoney = parseInt(this.state.fristMoney);
                if (this.state.ItemList.length >= 1) {
                    for (var i = 0; i < this.state.ItemList.length; i++) {
                        this.state.SumMoney = this.state.SumMoney + parseInt(this.state.ItemList[i].Money);
                    }
                }
            };
            TwoColumsReact.prototype.NumFormat = function (a) {
                //字符串过滤 或者是去空格
                var Num = a.replace(/\s/g, "");
                var valueList = Num.split('');
                if (valueList.length > 8) {
                    for (var i = 7; i < valueList.length; i = i + 8) {
                        valueList[i] += " ";
                    }
                    var value = valueList.join('');
                    return value;
                }
                else {
                    return Num;
                }
            };
            //检查输入的票号是否合格
            TwoColumsReact.prototype.CheckNumNumMoney = function (a) {
                //将空格去掉 然后判断是否是16位的
                var isMoney = this.CheckMoney(a.Money);
                var isNum = this.CheckNum(a.Num);
                return isMoney && isNum;
            };
            TwoColumsReact.prototype.CheckMoney = function (a) {
                var reg = /^[0-9]+.?[0-9]*$/;
                //不能为空 小数点之后不能超过6位
                if (a != undefined && a != "" && this.fucCheckNUM(a)) {
                    return true;
                }
                else {
                    return false;
                }
            };
            TwoColumsReact.prototype.CheckNum = function (a) {
                //去掉空格看是否是16位
                var Num = a.replace(/\s/g, "");
                if (Num.length == 16 && this.fucCheckNUM(Num)) {
                    return true;
                }
                else {
                    return false;
                }
            };
            //
            TwoColumsReact.prototype.fucCheckNUM = function (NUM) {
                var i, j, strTemp;
                strTemp = "0123456789";
                if (NUM.length == 0)
                    return false;
                for (i = 0; i < NUM.length; i++) {
                    j = strTemp.indexOf(NUM.charAt(i));
                    if (j == -1) {
                        //说明有字符不是数字
                        return false;
                    }
                }
                //说明是数字
                return true;
            };
            //金额四舍五入，保留N位小数 基本上保留6位小数
            TwoColumsReact.prototype.getAmountVal = function (val, n) {
                var vv = Math.pow(10, n);
                return Math.round(val * vv) / vv;
            };
            TwoColumsReact.prototype.pSender = function () {
                //return React.DOM.div(null,
                //    React.DOM.table({ id: "acsPlus" },
                //        //头部标签
                //        React.DOM.thead(null
                //            , React.DOM.tr(null
                //                , React.DOM.th(null, "票号")
                //                , React.DOM.th(null, "金额")
                //                , React.DOM.th())
                //        ),
                //        //内容
                //        React.DOM.tbody(null,
                //            React.DOM.tr(null
                //                , React.DOM.td(null, React.DOM.input({
                //                    type: "text"
                //                    , value: this.state.fristNum
                //                    , className: this.state.isCheck ? "" : "error"
                //                    , onBlur: (e) => this.pNumInputOnBlur(e)
                //                    , onChange: (e) => this.pNumInputOnChange(e)
                //                }, null))
                //                , React.DOM.td(null, React.DOM.input({
                //                    type: "text"
                //                    , className: this.state.isCheck ? "" : "error"
                //                    , onChange: (e) => this.pMoneyInputOnChange(e)
                //                    , value: this.state.fristMoney
                //                }, null))
                //                , React.DOM.td(null, React.DOM.i({ className: "Hu-pointer fa fa-plus-circle acsFontSize1-2", onClick: (e) => { this.addNumMoney(e); } }))
                //            ), this.state.ItemList.map((a) => {
                //                return React.DOM.tr(null
                //                    , React.DOM.td(null, React.DOM.input({ type: "text", className: a.isCheck ? "" : "error", value: a.Num, onChange: (e) => { this.pItemNumOnChange(e, a) }, onBlur: (e) => { this.pItemNumOnBuler(e, a) } }))
                //                    , React.DOM.td(null, React.DOM.input({ type: "text", className: a.isCheck ? "" : "error", value: a.Money, onChange: (e) => { this.pItemMoneyOnChage(e, a) }, onBlur: (e) => { this.pItemMoneyOnBuler(e, a) } }))
                //                    , React.DOM.td(null, React.DOM.i({ className: "Hu-pointer fa fa-minus-circle acsFontSize1-2 acsMinusBtn", classID: a.Num, onClick: () => { this.removeNmMoney(a) } }))
                //                )
                //            })
                //        ),
                var _this = this;
                //        React.DOM.span(null, "总金额：" + this.state.SumMoney),
                //        React.DOM.span(null, this.state.isAllOk ? " " : "    票号为16位 金额不能为空")
                //    )//----table
                //)
                return React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-bordered table-striped"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, "票号"), React.createElement("th", null, "金额"), React.createElement("th", null))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("input", {type: "text", value: this.state.fristNum, className: "Hg-width " + (this.state.isCheck ? "" : "error"), onBlur: function (e) { _this.pNumInputOnBlur(e); return false; }, onChange: function (e) { _this.pNumInputOnChange(e); return false; }})), React.createElement("td", null, React.createElement("input", {type: "text", value: this.state.fristMoney, className: "Hg-width " + (this.state.isCheck ? "" : "error"), onChange: function (e) { _this.pMoneyInputOnChange(e); return false; }})), React.createElement("td", null, React.createElement("i", {className: "Hu-pointer icon-plus fa fa-plus-circle acsFontSize1-2", onClick: function (e) { _this.addNumMoney(e); return false; }}))), this.state.ItemList.length <= 0 ? null :
                    this.state.ItemList.map(function (a) {
                        return React.createElement("tr", null, React.createElement("td", null, React.createElement("input", {type: "text", value: a.Num, className: "Hg-width " + (_this.state.isCheck ? "" : "error"), onChange: function (e) { _this.pItemNumOnChange(e, a); return false; }, onBlur: function (e) { _this.pItemNumOnBuler(e, a); return false; }})), React.createElement("td", null, React.createElement("input", {type: "text", value: a.Money, className: "Hg-width " + (_this.state.isCheck ? "" : "error"), onChange: function (e) { _this.pItemMoneyOnChage(e, a); return false; }, onBlur: function (e) { _this.pItemMoneyOnBuler(e, a); return false; }})), React.createElement("td", null, React.createElement("i", {className: "Hu-pointer icon-minus fa fa-minus-circle acsFontSize1-2 acsMinusBtn", classID: a.Num, onClick: function (e) { _this.removeNmMoney(a); return false; }})));
                    }), React.createElement("span", null, "总金额:" + this.state.SumMoney), React.createElement("span", null, this.state.isAllOk ? " " : "    票号为16位 金额不能为空"))));
            };
            return TwoColumsReact;
        }(BaseColReact));
        ui.TwoColumsReact = TwoColumsReact;
        iocFile.Core.Ioc.Current().RegisterType("TwoColumnsVm", BaseColVm, TwoColumnsVm);
    })(ui = exports.ui || (exports.ui = {}));
});
