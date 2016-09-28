var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Util", "./../../../../01core/Ioc", "react", "./../../../../02col/00core/BaseCol", "./../../../Common/Data"], function (require, exports, domFile, utilFile, iocFile, React, baseColFile, constantData) {
    "use strict";
    var domCore = domFile.Core;
    var EditGroupMaster;
    (function (EditGroupMaster) {
        var EditGroupMasterAction = (function (_super) {
            __extends(EditGroupMasterAction, _super);
            function EditGroupMasterAction() {
                _super.apply(this, arguments);
            }
            return EditGroupMasterAction;
        }(domCore.DomAction));
        EditGroupMaster.EditGroupMasterAction = EditGroupMasterAction;
        var EditGroupMasterReact = (function (_super) {
            __extends(EditGroupMasterReact, _super);
            function EditGroupMasterReact() {
                _super.apply(this, arguments);
                this.state = new EditGroupMasterStates();
            }
            EditGroupMasterReact.prototype.pSender = function () {
                return React.createElement("form", {className: "Hg-default-mt YSm-form YSg-height clearfix"}, React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right required"}, "单位名称："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.RowData.Name)), React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "企业类型："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Type"].intoDom())), React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "联系人："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["ContactPerson"].intoDom())), React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "联系电话："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Phone"].intoDom())), React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "联系地址："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Address"].intoDom())));
            };
            EditGroupMasterReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return EditGroupMasterReact;
        }(domCore.DomReact));
        EditGroupMaster.EditGroupMasterReact = EditGroupMasterReact;
        var EditGroupMasterVm = (function (_super) {
            __extends(EditGroupMasterVm, _super);
            function EditGroupMasterVm(config) {
                _super.call(this);
                this.ReactType = EditGroupMasterReact;
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
            EditGroupMasterVm.prototype.Opt = function () {
                this.IsSelectOpt = !this.IsSelectOpt;
                this.emitAppEvent("Manage/EditGroupPage/InitPageData", this.UniId, this.IsSelectOpt);
            };
            EditGroupMasterVm.prototype.initColVm = function (colName, colType, legal) {
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
            EditGroupMasterVm.prototype.initSelectorVm = function (colName, selectVm) {
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
            EditGroupMasterVm.prototype.initUnit = function (unitID) {
                this.emitAppEvent("Edit/EditGroupPage/loadPageData", this.UniId, unitID);
            };
            EditGroupMasterVm.prototype.initCombo = function (colName, comboVm) {
                comboVm.ItemList = constantData.Data.UnitTypeData;
                var str = this.RowData[colName] == null ? "0" : String(this.RowData[colName]);
                comboVm.dataValueSet(str);
                comboVm.setOriValue(str);
            };
            EditGroupMasterVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            return EditGroupMasterVm;
        }(domCore.DomVm));
        EditGroupMaster.EditGroupMasterVm = EditGroupMasterVm;
        var EditGroupMasterStates = (function (_super) {
            __extends(EditGroupMasterStates, _super);
            function EditGroupMasterStates() {
                _super.apply(this, arguments);
            }
            return EditGroupMasterStates;
        }(domCore.DomStates));
        EditGroupMaster.EditGroupMasterStates = EditGroupMasterStates;
        var EditGroupMasterProps = (function (_super) {
            __extends(EditGroupMasterProps, _super);
            function EditGroupMasterProps() {
                _super.apply(this, arguments);
            }
            return EditGroupMasterProps;
        }(domCore.DomProps));
        EditGroupMaster.EditGroupMasterProps = EditGroupMasterProps;
    })(EditGroupMaster = exports.EditGroupMaster || (exports.EditGroupMaster = {}));
});
