var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../Common/Data", "./../../../../02col/00core/BaseCol"], function (require, exports, React, domFile, iocFile, utilFile, urlFile, constantData, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    var NewMemberMasterRowDom;
    (function (NewMemberMasterRowDom) {
        var NewMemberMasterRowDomAction = (function (_super) {
            __extends(NewMemberMasterRowDomAction, _super);
            function NewMemberMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return NewMemberMasterRowDomAction;
        }(domCore.DomAction));
        NewMemberMasterRowDom.NewMemberMasterRowDomAction = NewMemberMasterRowDomAction;
        var NewMemberMasterRowDomReact = (function (_super) {
            __extends(NewMemberMasterRowDomReact, _super);
            function NewMemberMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new NewMemberMasterRowDomStates();
            }
            NewMemberMasterRowDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-modal-body clearfix"}, React.createElement("form", {className: ""}, React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right required"}, "组名："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["GroupName"].intoDom())), React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "姓名："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Name"].intoDom())), React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "身份证："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["IDCard"].intoDom())), React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "年龄："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Age"].intoDom())), React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "性别："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Gender"].intoDom())), React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "婚姻状态："), React.createElement("div", {className: "col-md-7 col-sm-9 form-control-label"}, this.props.Vm.ColVmObjList["MaritalStatus"].intoDom())), React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "职业："), React.createElement("div", {className: "col-md-7 col-sm-9 form-control-label"}, this.props.Vm.ColVmObjList["Job"].intoDom()))));
            };
            NewMemberMasterRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            NewMemberMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return NewMemberMasterRowDomReact;
        }(domCore.DomReact));
        NewMemberMasterRowDom.NewMemberMasterRowDomReact = NewMemberMasterRowDomReact;
        var NewMemberMasterRowDomVm = (function (_super) {
            __extends(NewMemberMasterRowDomVm, _super);
            function NewMemberMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = NewMemberMasterRowDomReact;
                this.ColVmObjList = {};
                this.RowData = {};
                if (config) {
                    this.selectId = config.selectId;
                    this.batchId = config.batchId;
                    this.initColVm("GroupName", "SelectorVm", "notNull");
                    this.initColVm("Name", "SelectorVm", "notNull");
                    this.initColVm("IDCard", "TextVm", "IDCardLegal");
                    this.initColVm("Age", "TextVm", "notNull");
                    this.initColVm("Gender", "ComboVm");
                    this.initColVm("MaritalStatus", "ComboVm");
                    this.initColVm("Job", "ComboVm");
                }
            }
            NewMemberMasterRowDomVm.prototype.initColVm = function (colName, colType, legal) {
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
                if (this.RowData[colName] != undefined || this.RowData[colName] != null) {
                    _exciteBean.dataValueSet(this.RowData[colName]);
                }
                if (!isexcite) {
                    var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance(colType, baseColFile.Core.BaseColVm);
                    _exciteBean.Tag = colName;
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
                        this.initSelector(colName, utilFile.Core.Util.Cast(_exciteBean));
                    }
                    this.ColVmObjList[_name] = _exciteBean;
                }
            };
            NewMemberMasterRowDomVm.prototype.initSelector = function (colName, selectVm) {
                var _this = this;
                if (colName == "GroupName") {
                    selectVm.RegName = "UnitDataTable";
                    selectVm.HasCanEdit = false;
                    var Id = this.batchId;
                    selectVm.OnPostDataSetFun = function (ds) {
                        var _rows = ds["UnitGroupTable"] = [];
                        var _row = { UnitId: Id };
                        _rows.push(_row);
                        return ds;
                    };
                }
                else if (colName == "Name") {
                    selectVm.HasCanEdit = false;
                    selectVm.RegName = "SelectMemberCodeTable";
                    var Id = this.selectId;
                    var batchId = this.batchId;
                    selectVm.OnPostDataSetFun = function (ds) {
                        var _rows = ds["MemberTable"] = [];
                        var _row = { UnitId: Id, batchId: batchId };
                        // this.RowData.flag = "select"
                        _rows.push(_row);
                        return ds;
                    };
                    selectVm.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        _this.initMember(val);
                        return true;
                    });
                }
            };
            NewMemberMasterRowDomVm.prototype.initMember = function (key) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/Member/FetchMembersList", { fids: key }, function (a) {
                    if (a) {
                        var data = a.Data[0];
                        _this.RowData.IDCard = data.IDCard;
                        _this.RowData.Age = data.Age;
                        _this.RowData.Gender = data.Gender;
                        _this.RowData.MaritalStatus = data.MaritalStatus;
                        _this.RowData.Job = data.Job;
                        _this.initColVm("IDCard", "TextVm", "notNull");
                        _this.initColVm("Age", "TextVm", "notNull");
                        _this.initColVm("Gender", "ComboVm");
                        _this.initColVm("MaritalStatus", "ComboVm");
                        _this.initColVm("Job", "ComboVm");
                        _this.IsChange = true;
                    }
                });
            };
            NewMemberMasterRowDomVm.prototype.initCombo = function (colName, comboVm) {
                switch (colName) {
                    case "Gender":
                        comboVm.ItemList = constantData.Data.GenderTypeData;
                        comboVm.dataValue(String(this.RowData[colName]));
                        comboVm.setOriValue(String(this.RowData[colName]));
                        break;
                    case "MaritalStatus":
                        comboVm.ItemList = constantData.Data.MaritalTypeData;
                        comboVm.dataValue(String(this.RowData[colName]));
                        comboVm.setOriValue(String(this.RowData[colName]));
                        break;
                    case "Job":
                        comboVm.ItemList = constantData.Data.JobTypeData;
                        comboVm.dataValue(String(this.RowData[colName]));
                        comboVm.setOriValue(String(this.RowData[colName]));
                        break;
                    case "Term":
                        comboVm.ItemList = constantData.Data.JobTypeData;
                        comboVm.dataValue(String(this.RowData[colName]));
                        comboVm.setOriValue(String(this.RowData[colName]));
                        break;
                    case "Pay":
                        comboVm.ItemList = constantData.Data.ExamBanlanceKindData;
                        comboVm.dataValue(String(this.RowData[colName]));
                        comboVm.setOriValue(String(this.RowData[colName]));
                        break;
                    case "Price":
                        comboVm.ItemList = constantData.Data.JobTypeData;
                        comboVm.dataValue(String(this.RowData[colName]));
                        comboVm.setOriValue(String(this.RowData[colName]));
                        break;
                    default:
                        break;
                }
            };
            NewMemberMasterRowDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            return NewMemberMasterRowDomVm;
        }(domCore.DomVm));
        NewMemberMasterRowDom.NewMemberMasterRowDomVm = NewMemberMasterRowDomVm;
        var NewMemberMasterRowDomStates = (function (_super) {
            __extends(NewMemberMasterRowDomStates, _super);
            function NewMemberMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return NewMemberMasterRowDomStates;
        }(domCore.DomStates));
        NewMemberMasterRowDom.NewMemberMasterRowDomStates = NewMemberMasterRowDomStates;
        var NewMemberMasterRowDomProps = (function (_super) {
            __extends(NewMemberMasterRowDomProps, _super);
            function NewMemberMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return NewMemberMasterRowDomProps;
        }(domCore.DomProps));
        NewMemberMasterRowDom.NewMemberMasterRowDomProps = NewMemberMasterRowDomProps;
    })(NewMemberMasterRowDom = exports.NewMemberMasterRowDom || (exports.NewMemberMasterRowDom = {}));
});
