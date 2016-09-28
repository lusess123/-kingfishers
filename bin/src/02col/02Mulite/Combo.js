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
        var ComboAction = (function (_super) {
            __extends(ComboAction, _super);
            function ComboAction() {
                _super.apply(this, arguments);
            }
            return ComboAction;
        }(BaseColAction));
        ui.ComboAction = ComboAction;
        var ComboReact = (function (_super) {
            __extends(ComboReact, _super);
            function ComboReact() {
                _super.apply(this, arguments);
            }
            ComboReact.prototype.fOnChange = function (e) {
                var _op = e.target.options[e.target.selectedIndex];
                var _val = _op.value;
                var _act = new ComboAction();
                _act.DataValue = _val;
                _act.SelectText = _op.text;
                this.pDispatcher(_act);
                //this.props.onChange1(this);
                this.props.Vm.reactDataValueSet(_val);
            };
            ComboReact.prototype.pSender = function () {
                var _this = this;
                _super.prototype.pSender.call(this);
                var _select = this.props.Vm.ItemList.map(function (a, i) {
                    //return React.DOM.option({ className:"Hu-pointer",value: a.Value, key: i }, a.Text);
                    return React.createElement("option", {className: "Hu-pointer", value: a.Value, key: i}, a.Text);
                });
                //return React.DOM.select(
                //    {
                //        className:"Hu-pointer",
                //        value: this.props.Vm.reactDataValueGet(),
                //        onChange: (e) => { this.fOnChange(e) }
                //    },
                //    React.DOM.option({ className:"Hu-pointer", value:""}, "请选择"),
                //    _select)
                return React.createElement("select", {className: "form-control Hu-pointer Hg-width", value: this.props.Vm.reactDataValueGet(), onChange: function (e) { _this.fOnChange(e); return false; }}, _select);
            };
            return ComboReact;
        }(BaseColReact));
        ui.ComboReact = ComboReact;
        var ComboProps = (function (_super) {
            __extends(ComboProps, _super);
            function ComboProps() {
                _super.apply(this, arguments);
            }
            return ComboProps;
        }(BaseColProps));
        ui.ComboProps = ComboProps;
        var ComboVm = (function (_super) {
            __extends(ComboVm, _super);
            // public RegName: string;
            //  public CodeTable: Array<ICodeRow> = new Array<ICodeRow>();
            function ComboVm(config) {
                _super.call(this);
                this.ReactType = ComboReact;
                this.ItemList = new Array();
                this.pRegName = "下拉框控件";
                if (config) {
                    if (config.ItemList) {
                        this.ItemList = config.ItemList;
                    }
                }
            }
            ComboVm.prototype.dataValueGet = function () {
                return this.pDataValue;
            };
            ComboVm.prototype.pOnchange = function (val) {
                var isCheck = _super.prototype.pOnchange.call(this, val);
                if (isCheck) {
                    this.pDataValue = val;
                    for (var i = 0; i < this.ItemList.length; i++) {
                        if (this.ItemList[i].Value == val) {
                            this.SelectText = this.ItemList[i].Text;
                            break;
                        }
                    }
                }
                return isCheck;
            };
            ComboVm.Test = function (num) {
                if (num == undefined)
                    num = 15;
                var bean = new ComboVm();
                for (var i = 0; i < num; i++) {
                    bean.ItemList = bean.ItemList.concat({ Value: i.toString(), Text: "选项 " + i });
                }
                bean.initDataValue((num - 1).toString());
                var _item = bean.ItemList[num - 1];
                if (_item)
                    bean.SelectText = (_item).Text;
                return bean;
            };
            return ComboVm;
        }(BaseColVm));
        ui.ComboVm = ComboVm;
        var ComboStates = (function (_super) {
            __extends(ComboStates, _super);
            function ComboStates() {
                _super.apply(this, arguments);
            }
            return ComboStates;
        }(BaseColStates));
        ui.ComboStates = ComboStates;
        iocFile.Core.Ioc.Current().RegisterType("ComboVm", BaseColVm, ComboVm);
    })(ui = exports.ui || (exports.ui = {}));
});
