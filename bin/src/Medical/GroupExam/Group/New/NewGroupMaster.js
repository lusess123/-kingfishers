var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Util", "./../../../../01core/Ioc", "react", "./../../../../02col/00core/BaseCol", "./../../../Common/Data"], function (require, exports, domFile, utilFile, iocFile, React, baseColFile, constantData) {
    "use strict";
    var domCore = domFile.Core;
    var NewGroupMaster;
    (function (NewGroupMaster) {
        var NewGroupMasterAction = (function (_super) {
            __extends(NewGroupMasterAction, _super);
            function NewGroupMasterAction() {
                _super.apply(this, arguments);
            }
            return NewGroupMasterAction;
        }(domCore.DomAction));
        NewGroupMaster.NewGroupMasterAction = NewGroupMasterAction;
        var NewGroupMasterReact = (function (_super) {
            __extends(NewGroupMasterReact, _super);
            function NewGroupMasterReact() {
                _super.apply(this, arguments);
                this.state = new NewGroupMasterStates();
            }
            NewGroupMasterReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("form", {className: "Hg-default-mt YSm-form YSg-height clearfix"}, React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-4 col-sm-3 form-control-label  text-right required"}, "单位名称："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.IsSelectOpt ? this.props.Vm.ColVmObjList["Unit"].intoDom() : this.props.Vm.ColVmObjList["Name"].intoDom()), React.createElement("a", {onClick: function () { _this.props.Vm.Opt(); }}, !this.props.Vm.IsSelectOpt ? React.createElement("i", {className: "fa fa-reply"}) : React.createElement("i", {className: "fa fa-plus"}))), React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-4 col-sm-3 form-control-label text-right required"}, "企业类型："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Type"].intoDom())), React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-4 col-sm-3 form-control-label text-right required"}, "联系人："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["ContactPerson"].intoDom())), React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-4 col-sm-3 form-control-label text-right required"}, "联系电话："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Phone"].intoDom())), React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-4 col-sm-3 form-control-label text-right required"}, "联系地址："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Address"].intoDom())));
            };
            NewGroupMasterReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return NewGroupMasterReact;
        }(domCore.DomReact));
        NewGroupMaster.NewGroupMasterReact = NewGroupMasterReact;
        var NewGroupMasterVm = (function (_super) {
            __extends(NewGroupMasterVm, _super);
            function NewGroupMasterVm(config) {
                _super.call(this);
                this.ReactType = NewGroupMasterReact;
                this.ColVmObjList = {};
                this.IsMulit = true;
                this.IsSelectOpt = true;
                this.RowData = [];
                if (config) {
                    this.IsSelectOpt = config.IsSelectOpt;
                    this.RowData = config.RowData;
                    this.UniId = config.UniId;
                    if (this.IsSelectOpt) {
                        this.initColVm("Unit", "SelectorVm", "notNull");
                    }
                    else {
                        this.initColVm("Name", "TextVm", "notNull");
                    }
                    this.initColVm("Type", "ComboVm");
                    this.initColVm("ContactPerson", "TextVm", "notNull");
                    this.initColVm("Phone", "TextVm", "MobilePhoneLegal");
                    this.initColVm("Address", "TextVm", "notNull");
                    if (!this.IsSelectOpt) {
                        this.ColVmObjList["ContactPerson"].dataValueSet("");
                        this.ColVmObjList["Phone"].dataValueSet("");
                        this.ColVmObjList["Address"].dataValueSet("");
                    }
                }
            }
            NewGroupMasterVm.prototype.Opt = function () {
                this.IsSelectOpt = !this.IsSelectOpt;
                this.emitAppEvent("Manage/NewGroupPage/InitPageData", this.UniId, this.IsSelectOpt);
            };
            NewGroupMasterVm.prototype.initColVm = function (colName, colType, legal) {
                var _this = this;
                var _name = colName.toString();
                var isexcite = false;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[_name];
                    if (_obj) {
                        isexcite = true;
                        _exciteBean = _obj;
                    }
                }
                if (!isexcite) {
                    var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance(colType, baseColFile.Core.BaseColVm);
                    _exciteBean.Tag = colName;
                    _exciteBean.dataValue(this.RowData[colName]);
                    _exciteBean.setOriValue(this.RowData[colName]);
                    _exciteBean.IsChange = true;
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    if (colType == "ComboVm") {
                        this.initCombo(colName, utilFile.Core.Util.Cast(_exciteBean));
                    }
                    if (colType == "SelectorVm") {
                        this.initSelectorVm(colName, utilFile.Core.Util.Cast(_exciteBean));
                    }
                    this.ColVmObjList[_name] = _exciteBean;
                }
            };
            NewGroupMasterVm.prototype.initSelectorVm = function (colName, selectVm) {
                var _this = this;
                selectVm.RegName = "UnitBaseCodeTable";
                selectVm.dataValueSet(this.RowData[colName]);
                selectVm.Text = this.RowData["Name"];
                //selectVm.HasCanEdit =true
                //selectVm.TextChangeFun = (val) => {
                //    this.RowData.Name = val
                //    this.RowData[colName] = "";
                //};
                selectVm.onChangeHandle(function (val) {
                    _this.RowData[colName] = val;
                    _this.RowData.Name = val;
                    _this.initUnit(val);
                    return true;
                });
            };
            NewGroupMasterVm.prototype.initUnit = function (unitID) {
                this.emitAppEvent("New/NewGroupPage/loadPageData", this.UniId, unitID);
            };
            NewGroupMasterVm.prototype.initCombo = function (colName, comboVm) {
                comboVm.ItemList = constantData.Data.UnitTypeData;
                var str = this.RowData[colName] == null ? "0" : String(this.RowData[colName]);
                comboVm.dataValueSet(str);
                comboVm.setOriValue(str);
            };
            NewGroupMasterVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            return NewGroupMasterVm;
        }(domCore.DomVm));
        NewGroupMaster.NewGroupMasterVm = NewGroupMasterVm;
        var NewGroupMasterStates = (function (_super) {
            __extends(NewGroupMasterStates, _super);
            function NewGroupMasterStates() {
                _super.apply(this, arguments);
            }
            return NewGroupMasterStates;
        }(domCore.DomStates));
        NewGroupMaster.NewGroupMasterStates = NewGroupMasterStates;
        var NewGroupMasterProps = (function (_super) {
            __extends(NewGroupMasterProps, _super);
            function NewGroupMasterProps() {
                _super.apply(this, arguments);
            }
            return NewGroupMasterProps;
        }(domCore.DomProps));
        NewGroupMaster.NewGroupMasterProps = NewGroupMasterProps;
    })(NewGroupMaster = exports.NewGroupMaster || (exports.NewGroupMaster = {}));
});
