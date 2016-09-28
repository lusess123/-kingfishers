var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "./../../01core/Util", "./../../01core/Ioc", "react", "./../../02col/02Mulite/SingleCheckBox", "./../../02col/01single/Date", "./../Common/Data", "./../../02col/00core/BaseCol"], function (require, exports, domFile, utilFile, iocFile, React, singleCheckFile, dateFile, constantData, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    dateFile;
    var ExamInsert;
    (function (ExamInsert) {
        var ExamInsertAction = (function (_super) {
            __extends(ExamInsertAction, _super);
            function ExamInsertAction() {
                _super.apply(this, arguments);
            }
            return ExamInsertAction;
        }(domCore.DomAction));
        ExamInsert.ExamInsertAction = ExamInsertAction;
        var ExamInsertReact = (function (_super) {
            __extends(ExamInsertReact, _super);
            function ExamInsertReact() {
                _super.apply(this, arguments);
                this.state = new ExamInsertStates();
            }
            ExamInsertReact.prototype.pSender = function () {
                return (React.createElement("div", null, React.createElement("form", {className: "YSm-form"}, React.createElement("div", {className: "form-inline clearfix"}, React.createElement("div", {className: this.props.Vm.IsFileNumberHidden ? "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group" : "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group hide"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right required"}, "档案号："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.MemberData.FileNumber))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right required"}, "身份证号："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this._tDom(this.props.Vm.ColVmObjList["IDCard"]))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "姓名："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this._tDom(this.props.Vm.ColVmObjList["Name"]))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label required text-right"}, "性别："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this._tDom(this.props.Vm.ColVmObjList["Gender"]))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  required text-right"}, "年龄："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this._tDom(this.props.Vm.ColVmObjList["Age"]))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label required text-right"}, "出生日期："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["BirthDate"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "民族："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Nation"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label required text-right"}, "婚否："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["MaritalStatus"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label required text-right"}, "会员类型："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["MemberType"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label required text-right"}, "联系电话："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Phone"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "工作单位："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["WorkUnit"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "职业："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Job"].intoDom())))), React.createElement("form", {className: "YSm-form-outline"}, React.createElement("div", {className: "form-inline clearfix"}, React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "体检类型："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["ExamType"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label required text-right"}, "来检时间："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["ExamDate"].intoDom()))))));
            };
            ExamInsertReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamInsertReact;
        }(domCore.DomReact));
        ExamInsert.ExamInsertReact = ExamInsertReact;
        var ExamInsertVm = (function (_super) {
            __extends(ExamInsertVm, _super);
            function ExamInsertVm(config) {
                _super.call(this);
                this.ReactType = ExamInsertReact;
                this.singeCheckbox = new singleCheckFile.ui.SingleCheckBoxVm();
                this.TextVmObjList = {};
                //public RowData: data.ExamOrder.IExamOrderData = {};
                this.RowData = { MemberData: {}, ReservationData: {} };
                this.IsFileNumberHidden = false;
                this.ColVmObjList = {};
                this.fIsChangeRow = false;
                this.flag = "new";
                if (config && config.flag) {
                    this.flag = config.flag;
                }
                if (config && config.data) {
                    this.RowData = config.data;
                    if (this.RowData.MemberData.FileNumber != undefined || this.RowData.MemberData.FileNumber != null || this.RowData.MemberData.FileNumber != "") {
                        this.IsFileNumberHidden = true;
                    }
                }
                this.initColVm("IDCard", "TextVm", "IDCardLegal");
                this.initColVm("Name", "TextVm", "notNull");
                this.initColVm("Gender", "ComboVm", "notNull");
                this.initColVm("Age", "TextVm", "SeatLegal");
                this.initColVm("BirthDate", "DateVm", "notNull");
                this.initColVm("Nation", "ComboVm", "notNull");
                this.initColVm("MaritalStatus", "ComboVm", "notNull");
                this.initColVm("MemberType", "ComboVm", "notNull");
                this.initColVm("Phone", "TextVm", "MobilePhoneLegal");
                this.initColVm("WorkUnit", "TextVm");
                this.initColVm("Job", "ComboVm");
                this.initColVm("ExamType", "ComboVm", "notNull");
                this.initColVm("ExamDate", "DateTimeVm", "custom");
            }
            ExamInsertVm.prototype.initColVm = function (colName, colType, legal) {
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
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.IsMulit = true;
                    var _val = "";
                    if (colName == "ExamType" || colName == "ExamDate") {
                        _val = this.RowData.ReservationData[colName];
                        _exciteBean.onChangeHandle(function (val) {
                            _this.RowData.ReservationData[colName] = val;
                            return true;
                        });
                    }
                    else {
                        _val = this.RowData.MemberData[colName];
                        _exciteBean.onChangeHandle(function (val) {
                            _this.RowData.MemberData[colName] = val;
                            return true;
                        });
                    }
                    if (colName == "ExamDate") {
                        var dateTimeT = utilFile.Core.Util.Cast(_exciteBean);
                        dateTimeT.IsInAndAfterToday = false;
                        _exciteBean.LegalObj.CustomLegalFun = function (col) {
                            return _this.compareSize(colName, _exciteBean.TempDataValue, utilFile.Core.Util.Cast(_exciteBean));
                        };
                    }
                    _exciteBean.dataValueSet(_val);
                    _exciteBean.setOriValue(_val);
                    if (colType == "ComboVm") {
                        this.initCombo(colName, utilFile.Core.Util.Cast(_exciteBean));
                    }
                    this.ColVmObjList[_name] = _exciteBean;
                }
            };
            ExamInsertVm.prototype.FormatDate = function (strTime) {
                var date = new Date(strTime);
                return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
            };
            ExamInsertVm.prototype.compareSize = function (colName, endDate, textVm) {
                if (endDate == undefined || endDate == "") {
                    textVm.LegalObj.LegalResult = true;
                    textVm.LegalObj.ErrMsg = "来检时间不能为空";
                    return "来检时间不能为空！";
                }
                var date = (new Date(endDate));
                var today = (new Date());
                if (date <= today) {
                    textVm.LegalObj.LegalResult = true;
                    textVm.LegalObj.ErrMsg = "来检时间大于现在时间";
                    return "来检时间大于现在时间！";
                }
                else {
                    textVm.LegalObj.LegalResult = false;
                    textVm.showLegal();
                    return "";
                }
            };
            ExamInsertVm.prototype.compareNow = function (colName, endDate, textVm) {
                if (endDate == undefined || endDate == "") {
                    textVm.LegalObj.LegalResult = true;
                    textVm.LegalObj.ErrMsg = "开始时间不能为空";
                    return "开始时间不能为空！";
                }
                var date = new Date(endDate);
                var today = new Date();
                if (date <= today) {
                    textVm.LegalObj.LegalResult = true;
                    textVm.LegalObj.ErrMsg = "开始时间大于现在";
                    return "开始时间大于现在！";
                }
                else {
                    textVm.LegalObj.LegalResult = false;
                    textVm.showLegal();
                    return "";
                }
            };
            ExamInsertVm.prototype.initCombo = function (colName, comboVm) {
                if (colName == "ExamType") {
                    var str = this.RowData.ReservationData[colName] == null ? "0" : String(this.RowData.ReservationData[colName]);
                }
                else {
                    var str = this.RowData.MemberData[colName] == null ? "0" : String(this.RowData.MemberData[colName]);
                }
                switch (colName) {
                    case "Job":
                        comboVm.ItemList = constantData.Data.JobTypeData;
                        comboVm.dataValueSet(str);
                        comboVm.setOriValue(str);
                        break;
                    case "Gender":
                        comboVm.ItemList = constantData.Data.GenderTypeData;
                        comboVm.dataValueSet(str);
                        comboVm.setOriValue(str);
                        break;
                    case "Nation":
                        comboVm.ItemList = constantData.Data.NationTypeData;
                        comboVm.dataValueSet(str);
                        comboVm.setOriValue(str);
                        break;
                    case "MaritalStatus":
                        comboVm.ItemList = constantData.Data.MaritalTypeData;
                        comboVm.dataValueSet(str);
                        comboVm.setOriValue(str);
                        break;
                    case "MemberType":
                        comboVm.ItemList = constantData.Data.MemberTypeData;
                        comboVm.dataValueSet(str);
                        comboVm.setOriValue(str);
                        break;
                    case "ExamType":
                        comboVm.ItemList = constantData.Data.ExamTypeData;
                        comboVm.dataValueSet(str);
                        comboVm.setOriValue(str);
                        break;
                }
            };
            ExamInsertVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.ColVmObjList) {
                    this.ColVmObjList[n].IsChange = true;
                }
            };
            ExamInsertVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            ExamInsertVm.prototype.getData = function (isDetailChange) {
                var _obj = { MemberData: {}, ReservationData: {} };
                for (var vn in this.ColVmObjList) {
                    var _colObj = this.ColVmObjList[vn];
                    if (_colObj) {
                        // _colObj.getChangeValFun((isChange, val) => {
                        //   if (isChange) {
                        this.fIsChangeRow = true;
                        if (vn == "ExamDate" || vn == "ExamType") {
                            _obj.ReservationData[vn] = _colObj.TempDataValue;
                        }
                        else {
                            _obj.MemberData[vn] = _colObj.TempDataValue;
                        }
                    }
                }
                if (this.fIsChangeRow || isDetailChange) {
                    _obj.MemberData.MemberId = this.RowData.MemberData.MemberId;
                }
                _obj.ReservationData.ReservationId = this.RowData.ReservationData.ReservationId;
                this.fIsChangeRow = false;
                return _obj;
            };
            return ExamInsertVm;
        }(domCore.DomVm));
        ExamInsert.ExamInsertVm = ExamInsertVm;
        var ExamInsertStates = (function (_super) {
            __extends(ExamInsertStates, _super);
            function ExamInsertStates() {
                _super.apply(this, arguments);
            }
            return ExamInsertStates;
        }(domCore.DomStates));
        ExamInsert.ExamInsertStates = ExamInsertStates;
        var ExamInsertProps = (function (_super) {
            __extends(ExamInsertProps, _super);
            function ExamInsertProps() {
                _super.apply(this, arguments);
            }
            return ExamInsertProps;
        }(domCore.DomProps));
        ExamInsert.ExamInsertProps = ExamInsertProps;
    })(ExamInsert = exports.ExamInsert || (exports.ExamInsert = {}));
});
