var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../05tool/EditSpan", "./../Data", "./../../../../02col/01single/Radio"], function (require, exports, domFile, React, EditSpanFile, ConfigData, RadioFile) {
    "use strict";
    var domCore = domFile.Core;
    var AppSettingRowDom;
    (function (AppSettingRowDom) {
        var AppSettingRowDomAction = (function (_super) {
            __extends(AppSettingRowDomAction, _super);
            function AppSettingRowDomAction() {
                _super.apply(this, arguments);
            }
            return AppSettingRowDomAction;
        }(domCore.DomAction));
        AppSettingRowDom.AppSettingRowDomAction = AppSettingRowDomAction;
        var AppSettingRowDomReact = (function (_super) {
            __extends(AppSettingRowDomReact, _super);
            function AppSettingRowDomReact() {
                _super.apply(this, arguments);
                this.state = new AppSettingRowDomStates();
            }
            AppSettingRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", null, React.createElement("span", null, "设置" + this.props.Vm.Number, " ")), this.psenderAppSetting("Key", this.props.Vm.Data.Key, this.props.Vm.Data.Key), this.psenderAppSetting("Value", this.props.Vm.Data.Key, this.props.Vm.Data.Value), React.createElement("td", null, this.props.Vm.Radio.intoDom(), " "), React.createElement("td", null, React.createElement("i", {className: "fa fa-minus-circle", onClick: function () { _this.props.Vm.delete(); }})));
            };
            AppSettingRowDomReact.prototype.psenderAppSetting = function (Type, Key, value) {
                return React.createElement("td", null, this.props.Vm.psenderAppSetting(Type, Key, value));
            };
            AppSettingRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AppSettingRowDomReact;
        }(domCore.DomReact));
        AppSettingRowDom.AppSettingRowDomReact = AppSettingRowDomReact;
        var AppSettingRowDomVm = (function (_super) {
            __extends(AppSettingRowDomVm, _super);
            function AppSettingRowDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = AppSettingRowDomReact;
                if (config.Unid) {
                    this.UniId = config.Unid;
                }
                if (config.Data) {
                    this.Data = config.Data;
                    this.Radio = new RadioFile.ui.RadioVm();
                    if (this.Data.NeedParse) {
                        this.Radio.SelectText = "是";
                    }
                    else {
                        this.Radio.SelectText = "否";
                    }
                    this.Radio.ChangeEventFun = function (val, col) {
                        if (val == "0") {
                            _this.Data.NeedParse = "true";
                        }
                        else if (val == "1") {
                            _this.Data.NeedParse = "false";
                        }
                        return true;
                    };
                    this.Radio.ItemList = ConfigData.ConfigData.RodioData;
                }
                if (config.Number) {
                    this.Number = config.Number;
                }
            }
            AppSettingRowDomVm.prototype.psenderAppSetting = function (Type, Key, Val) {
                var _this = this;
                //MultiLog\"]
                var XpathPart = "AtawApplicationConfig/AppSettings/AppSetting[@Key=\"";
                if (Val == "")
                    Val = "空";
                var config = {
                    Content: Val, ChangeEvent: function (v, ischage) {
                        if (Type == "Key") {
                            _this.Data.Key = v.Content;
                        }
                        else if (Type == "Value") {
                            _this.Data.Value = v.Content;
                        }
                    }
                };
                this.EditText = new EditSpanFile.EditSpan.EditSpanVm(config);
                return this.EditText.intoDom();
            };
            AppSettingRowDomVm.prototype.delete = function () {
                this.emitAppEvent("app/SDK/Config/Application/RowDelete", this.UniId, this.Data.Key);
            };
            return AppSettingRowDomVm;
        }(domCore.DomVm));
        AppSettingRowDom.AppSettingRowDomVm = AppSettingRowDomVm;
        var AppSettingRowDomStates = (function (_super) {
            __extends(AppSettingRowDomStates, _super);
            function AppSettingRowDomStates() {
                _super.apply(this, arguments);
            }
            return AppSettingRowDomStates;
        }(domCore.DomStates));
        AppSettingRowDom.AppSettingRowDomStates = AppSettingRowDomStates;
        var AppSettingRowDomProps = (function (_super) {
            __extends(AppSettingRowDomProps, _super);
            function AppSettingRowDomProps() {
                _super.apply(this, arguments);
            }
            return AppSettingRowDomProps;
        }(domCore.DomProps));
        AppSettingRowDom.AppSettingRowDomProps = AppSettingRowDomProps;
    })(AppSettingRowDom = exports.AppSettingRowDom || (exports.AppSettingRowDom = {}));
});
