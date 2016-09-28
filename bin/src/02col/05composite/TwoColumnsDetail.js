var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./../../../Typings/0Type/Entity", "react"], function (require, exports, basecolFile, iocFile, NumMoney, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var TwoColumnsDetailAction = (function (_super) {
            __extends(TwoColumnsDetailAction, _super);
            function TwoColumnsDetailAction() {
                _super.apply(this, arguments);
            }
            return TwoColumnsDetailAction;
        }(BaseColAction));
        ui.TwoColumnsDetailAction = TwoColumnsDetailAction;
        var TwoColumnsDetailProps = (function (_super) {
            __extends(TwoColumnsDetailProps, _super);
            function TwoColumnsDetailProps() {
                _super.apply(this, arguments);
            }
            return TwoColumnsDetailProps;
        }(BaseColProps));
        ui.TwoColumnsDetailProps = TwoColumnsDetailProps;
        var TwoColumnsDetailStates = (function (_super) {
            __extends(TwoColumnsDetailStates, _super);
            function TwoColumnsDetailStates() {
                _super.apply(this, arguments);
            }
            return TwoColumnsDetailStates;
        }(BaseColStates));
        ui.TwoColumnsDetailStates = TwoColumnsDetailStates;
        var TwoColumnsDetailVm = (function (_super) {
            __extends(TwoColumnsDetailVm, _super);
            function TwoColumnsDetailVm() {
                _super.call(this);
                this.ReactType = TwoColumnsDetailReact;
                this.pRegName = "双字段详情控件";
                this.ItemList = new Array();
                this.SumMoney = 0; //总金额
            }
            TwoColumnsDetailVm.Test = function () {
                var _bean = new TwoColumnsDetailVm();
                //将测试的值填充到数据中，然后显示的时候处理
                for (var i = 0; i < 3; i++) {
                    var nummoney = new NumMoney.entity.NumMoney();
                    nummoney.Num = "1515151zhd51515151" + i;
                    nummoney.Money = "2.266";
                    nummoney.isCheck = true;
                    _bean.ItemList.push(nummoney);
                }
                //设置到原始值当中
                var value = "";
                for (var i = 0; i < _bean.ItemList.length; i++) {
                    value = '"' + _bean.ItemList[i].Num + "  " + _bean.ItemList[i].Money + '"' + value;
                }
                _bean.dataValueSet(value);
                //this.prototype.vmDataValueSet(value);
                return _bean;
            };
            return TwoColumnsDetailVm;
        }(BaseColVm));
        ui.TwoColumnsDetailVm = TwoColumnsDetailVm;
        var TwoColumnsDetailReact = (function (_super) {
            __extends(TwoColumnsDetailReact, _super);
            function TwoColumnsDetailReact() {
                _super.apply(this, arguments);
            }
            TwoColumnsDetailReact.prototype.pSender = function () {
                var _this = this;
                //可以在这里先进行格式化 对金额进行
                this.props.Vm.ItemList.forEach((function (a) {
                    _this.props.Vm.SumMoney = _this.fDecimalAmount(a.Money, 4) + _this.props.Vm.SumMoney;
                }));
                //return React.DOM.div(null, this.props.Vm.ItemList.length != 0 ? this.props.Vm.ItemList.map((a) => {
                //    return React.DOM.div(null,
                //        React.DOM.label({ ref: "amount" }, this.NumFormat(a.Num)),
                //        React.DOM.label({ ref: "amount" }, this.fDecimalAmount(a.Money, 4)))
                //}) : "", React.DOM.label(null, "总金额" + this.props.Vm.SumMoney))
                return React.createElement("div", null, this.props.Vm.ItemList.length != 0 ? this.props.Vm.ItemList.map(function (a) {
                    return React.createElement("div", {className: "Hu-two-columns-detail"}, React.createElement("label", {ref: "amount"}, _this.NumFormat(a.Num)), React.createElement("label", {ref: "amount"}, _this.fDecimalAmount(a.Money, 4)));
                }) : "", React.createElement("label", null, "总金额" + this.props.Vm.SumMoney));
            };
            //对数据格式化
            TwoColumnsDetailReact.prototype.NumFormat = function (a) {
                //字符串过滤 或者是去空格 /[^\.\d]/g, "" /\s/g, ""
                var Num = a.replace(/[^\.\d]/g, "");
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
            //金额四舍五入，保留n位小数位数
            TwoColumnsDetailReact.prototype.fDecimalAmount = function (amount, n) {
                var amount = amount.replace(/[^\.\d]/g, "");
                var vv = Math.pow(10, n);
                return Math.round(amount * vv) / vv;
            };
            return TwoColumnsDetailReact;
        }(BaseColReact));
        ui.TwoColumnsDetailReact = TwoColumnsDetailReact;
        iocFile.Core.Ioc.Current().RegisterType("TwoColumnsDetailVm", BaseColVm, TwoColumnsDetailVm);
    })(ui = exports.ui || (exports.ui = {}));
});
