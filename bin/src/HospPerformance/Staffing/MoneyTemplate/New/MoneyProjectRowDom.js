var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../02col/01single/Text"], function (require, exports, domFile, React, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var MoneyProjectRowDom;
    (function (MoneyProjectRowDom) {
        var MoneyProjectRowDomAction = (function (_super) {
            __extends(MoneyProjectRowDomAction, _super);
            function MoneyProjectRowDomAction() {
                _super.apply(this, arguments);
            }
            return MoneyProjectRowDomAction;
        }(domCore.DomAction));
        MoneyProjectRowDom.MoneyProjectRowDomAction = MoneyProjectRowDomAction;
        var MoneyProjectRowDomReact = (function (_super) {
            __extends(MoneyProjectRowDomReact, _super);
            function MoneyProjectRowDomReact() {
                _super.apply(this, arguments);
                this.state = new MoneyProjectRowDomStates();
            }
            MoneyProjectRowDomReact.prototype.inputValue = function (name, fid, filesd, type, detail) {
                var _this = this;
                if (!this.props.Vm.textVm) {
                    if (type != "计算项" && this.props.Vm.ItemValueOrCount.ValueOrCount == "") {
                        this.props.Vm.ItemValueOrCount.ValueOrCount = "10";
                    }
                    var _vm = this.getInputVm(this.props.Vm.ItemValueOrCount.ValueOrCount, "custom");
                    this.props.Vm.textVm = _vm;
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.ItemValueOrCount.ValueOrCount = str;
                        _this.props.Vm.SendToPage(str, name, fid, filesd, type, detail);
                        return true;
                    });
                    _vm.LegalObj.CustomLegalFun = function (col) {
                        return _this.props.Vm.CheckValueFormat(_vm.TempDataValue, type, _vm);
                    };
                }
                return this.props.Vm.textVm.intoDom();
            };
            MoneyProjectRowDomReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.dataValueSet(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            MoneyProjectRowDomReact.prototype.pSender = function () {
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.ItemValueOrCount.Name), React.createElement("td", null, this.props.Vm.ItemValueOrCount.Type), React.createElement("td", null, this.inputValue(this.props.Vm.ItemValueOrCount.Name, this.props.Vm.ItemValueOrCount.FID, this.props.Vm.ItemValueOrCount.Fileds, this.props.Vm.ItemValueOrCount.Type, this.props.Vm.ItemValueOrCount.Detail)), React.createElement("td", null, this.props.Vm.ItemValueOrCount.Detail));
            };
            MoneyProjectRowDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return MoneyProjectRowDomReact;
        }(domCore.DomReact));
        MoneyProjectRowDom.MoneyProjectRowDomReact = MoneyProjectRowDomReact;
        var MoneyProjectRowDomVm = (function (_super) {
            __extends(MoneyProjectRowDomVm, _super);
            function MoneyProjectRowDomVm(config) {
                _super.call(this);
                this.ReactType = MoneyProjectRowDomReact;
                this.ItemValueOrCount = { FID: "", Detail: "", Name: "", Fileds: "", Type: "", ValueOrCount: "" };
                if (config) {
                    this.ItemValueOrCount = config.Data;
                    //this.ItemValueESObj.Content="ssss";
                    //this.ItemValueESObj.IsChange=true;
                    this.UniId = config.Unid;
                }
            }
            MoneyProjectRowDomVm.prototype.SendToPage = function (str, name, fid, filesd, type, detail) {
                var _data = { FID: "", Detail: "", Fileds: "", Name: "", Type: "", ValueOrCount: "" };
                _data.FID = fid;
                _data.Name = name;
                _data.Fileds = filesd;
                _data.Type = type;
                _data.Detail = detail;
                _data.ValueOrCount = str;
                this.emitAppEvent("SendToPage", this.UniId, _data);
            };
            MoneyProjectRowDomVm.prototype.CheckValueFormat = function (value, type, vm) {
                if (value != "") {
                    if (type == "输入项") {
                        var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
                        if (reg.test(value)) {
                            vm.LegalObj.LegalResult = false;
                            vm.showLegal();
                            return "";
                        }
                        else {
                            vm.LegalObj.LegalResult = true;
                            vm.LegalObj.ErrMsg = "输入正确格式";
                            return "输入正确格式！";
                        }
                    }
                    else {
                        vm.LegalObj.LegalResult = false;
                        vm.showLegal();
                        return "";
                    }
                }
                else {
                    vm.LegalObj.LegalResult = false;
                    vm.showLegal();
                    return "";
                }
            };
            MoneyProjectRowDomVm.prototype.legal = function () {
                var legal = this.textVm.legal();
                var _res = legal;
                return _res;
            };
            return MoneyProjectRowDomVm;
        }(domCore.DomVm));
        MoneyProjectRowDom.MoneyProjectRowDomVm = MoneyProjectRowDomVm;
        var MoneyProjectRowDomStates = (function (_super) {
            __extends(MoneyProjectRowDomStates, _super);
            function MoneyProjectRowDomStates() {
                _super.apply(this, arguments);
            }
            return MoneyProjectRowDomStates;
        }(domCore.DomStates));
        MoneyProjectRowDom.MoneyProjectRowDomStates = MoneyProjectRowDomStates;
        var MoneyProjectRowDomProps = (function (_super) {
            __extends(MoneyProjectRowDomProps, _super);
            function MoneyProjectRowDomProps() {
                _super.apply(this, arguments);
            }
            return MoneyProjectRowDomProps;
        }(domCore.DomProps));
        MoneyProjectRowDom.MoneyProjectRowDomProps = MoneyProjectRowDomProps;
    })(MoneyProjectRowDom = exports.MoneyProjectRowDom || (exports.MoneyProjectRowDom = {}));
});
