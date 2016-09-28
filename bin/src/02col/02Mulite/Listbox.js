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
        var ListboxAction = (function (_super) {
            __extends(ListboxAction, _super);
            function ListboxAction() {
                _super.apply(this, arguments);
            }
            return ListboxAction;
        }(BaseColAction));
        ui.ListboxAction = ListboxAction;
        var ListboxStates = (function (_super) {
            __extends(ListboxStates, _super);
            function ListboxStates() {
                _super.apply(this, arguments);
            }
            return ListboxStates;
        }(BaseColStates));
        ui.ListboxStates = ListboxStates;
        var ListboxProps = (function (_super) {
            __extends(ListboxProps, _super);
            function ListboxProps() {
                _super.apply(this, arguments);
            }
            return ListboxProps;
        }(BaseColProps));
        ui.ListboxProps = ListboxProps;
        var ListboxVm = (function (_super) {
            __extends(ListboxVm, _super);
            function ListboxVm() {
                _super.apply(this, arguments);
                this.ReactType = ListBoxReact;
                this.pRegName = "选取控件";
                //左边的选项
                this.ItemList = new Array();
                //右边的选项
                this.rightItemList = new Array();
            }
            ListboxVm.Test = function (num) {
                var bean = new ListboxVm();
                if (num == undefined) {
                    num = 7;
                }
                //给元素添加
                for (var i = 0; i <= num; i++) {
                    bean.ItemList = bean.ItemList.concat({ Value: i.toString(), Text: "选项 " + i, Select: false });
                }
                return bean;
            };
            ListboxVm.prototype.pOnchange = function (val) {
                var _this = this;
                var isCheck = _super.prototype.pOnchange.call(this, val);
                if (isCheck) {
                    this.pDataValue = val;
                    //先将所有的item都会到左边  然后重新把右边的放回去
                    var _valArr = val.replace(/\'/g, "").split(',');
                    if (this.rightItemList.length != 0) {
                        for (var i = 0; i < this.rightItemList.length;) {
                            this.ItemList.push(this.rightItemList[i]);
                            this.rightItemList.splice(i, 1);
                        }
                    }
                    _valArr.forEach(function (_b, _j) {
                        _this.ItemList.map(function (a, i) {
                            if (a.Value == _b) {
                                a.Select = false;
                                _this.rightItemList.push(a);
                                _this.ItemList.splice(i, 1);
                            }
                        });
                    });
                }
                return isCheck;
            };
            return ListboxVm;
        }(BaseColVm));
        ui.ListboxVm = ListboxVm;
        var ListBoxReact = (function (_super) {
            __extends(ListBoxReact, _super);
            function ListBoxReact() {
                _super.apply(this, arguments);
            }
            ListBoxReact.prototype.onButtonItmeClick = function (e) {
                e.Select = e.Select ? false : true;
                this.forceUpdate();
            };
            ListBoxReact.prototype.onLeftToRight = function () {
                for (var i = 0; i < this.props.Vm.ItemList.length;) {
                    if (this.props.Vm.ItemList[i].Select == true) {
                        this.props.Vm.ItemList[i].Select = false;
                        this.props.Vm.rightItemList.push(this.props.Vm.ItemList[i]);
                        this.props.Vm.ItemList.splice(i, 1);
                    }
                    else {
                        i++;
                    }
                }
                var value = "";
                for (var i = 0; i < this.props.Vm.rightItemList.length; i++) {
                    value = value + "'" + this.props.Vm.rightItemList[i].Value + "',";
                }
                this.props.Vm.dataValueSet(value);
                this.props.Vm.IsChange = true;
                this.forceUpdate();
            };
            ListBoxReact.prototype.onRightToLeft = function () {
                for (var i = 0; i < this.props.Vm.rightItemList.length;) {
                    if (this.props.Vm.rightItemList[i].Select == true) {
                        this.props.Vm.rightItemList[i].Select = false;
                        this.props.Vm.ItemList.push(this.props.Vm.rightItemList[i]);
                        this.props.Vm.rightItemList.splice(i, 1);
                    }
                    else {
                        i++;
                    }
                }
                var value = "";
                for (var i = 0; i < this.props.Vm.rightItemList.length; i++) {
                    value = value + "'" + this.props.Vm.rightItemList[i].Value + "',";
                }
                this.props.Vm.dataValueSet(value);
                this.props.Vm.IsChange = true;
                this.forceUpdate();
            };
            ListBoxReact.prototype.pSender = function () {
                var _this = this;
                var _valArr = this.props.Vm.reactDataValueGet().replace(/\'/g, "").split(',');
                //在这里讲左边的集合中的元素 如果等于_valArr中的元素的话 那就放到右边集合中去
                //this.props.Vm.rightItemList.length = 0;
                //this.props.Vm.ItemList.map((a, i) => {
                //    _valArr.forEach((_b, _j) => {
                //        if (a.Value == _b) {
                //           //将a集合
                //            a.Select = false;
                //            this.props.Vm.rightItemList.push(a);
                //            this.props.Vm.ItemList.splice(i, 1);    
                //        }
                //    });
                //});
                return React.createElement("div", {className: "clearfix"}, React.createElement("div", {className: "col-lg-12 Hc-listbox ", style: { marginTop: 1 + "rem" }}, React.createElement("div", {className: "col-lg-5  Hc-listbox-left"}, React.createElement("p", null, "待添加"), React.createElement("ul", null, this.props.Vm.ItemList.map(function (a) {
                    return React.createElement("li", {value: a.Value, className: a.Select ? "on" : "", onClick: function () { _this.onButtonItmeClick(a); return false; }}, a.Text);
                }))), React.createElement("div", {className: "col-lg-2  Hc-listbox-btn"}, React.createElement("button", {className: "btn btn-xs btn-primary", onClick: function () { _this.onLeftToRight(); return false; }}, ">>"), React.createElement("button", {className: "btn btn-xs btn-primary", onClick: function () { _this.onRightToLeft(); return false; }}, "<<")), React.createElement("div", {className: "col-lg-5 Hc-listbox-right"}, React.createElement("p", null, "已添加"), React.createElement("ul", null, this.props.Vm.rightItemList.length != 0 ? this.props.Vm.rightItemList.map(function (a) {
                    return React.createElement("li", {value: a.Value, className: a.Select ? "on" : "", onClick: function () { _this.onButtonItmeClick(a); return false; }}, a.Text);
                }) : ""))));
            };
            return ListBoxReact;
        }(BaseColReact));
        ui.ListBoxReact = ListBoxReact;
        iocFile.Core.Ioc.Current().RegisterType("ListBoxVm", BaseColVm, ListboxVm);
    })(ui = exports.ui || (exports.ui = {}));
});
