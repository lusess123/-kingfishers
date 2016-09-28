var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Util", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../02col/00core/BaseCol"], function (require, exports, React, domFile, utilFile, iocFile, urlFile, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    var CensusDoctorSearchFormDom;
    (function (CensusDoctorSearchFormDom) {
        var CensusDoctorSearchFormDomAction = (function (_super) {
            __extends(CensusDoctorSearchFormDomAction, _super);
            function CensusDoctorSearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return CensusDoctorSearchFormDomAction;
        }(domCore.DomAction));
        CensusDoctorSearchFormDom.CensusDoctorSearchFormDomAction = CensusDoctorSearchFormDomAction;
        var CensusDoctorSearchFormDomReact = (function (_super) {
            __extends(CensusDoctorSearchFormDomReact, _super);
            function CensusDoctorSearchFormDomReact() {
                _super.apply(this, arguments);
                this.state = new CensusDoctorSearchFormDomStates();
            }
            CensusDoctorSearchFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "部门："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Department"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "体检医生："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Name"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "开始时间："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["BeginDate"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "结束时间："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["EndDate"].intoDom())), React.createElement("div", {className: "col-xs-12 text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm", onClick: function () { _this.fun_searchBtn(); }}, "统计"), React.createElement("a", {className: "btn btn-primary btn-sm ", onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            CensusDoctorSearchFormDomReact.prototype.fun_linkCode = function (e) {
                var _val = e.target["value"];
                this.props.Vm.SearchSimpleCode = _val;
                if (!_val || _val == "") {
                    this.props.Vm.IsHideClearBtn = true;
                }
                else {
                    this.props.Vm.IsHideClearBtn = false;
                }
                this.forceUpdate();
            };
            CensusDoctorSearchFormDomReact.prototype.fun_linkName = function (e) {
                var _val = e.target["value"];
                this.props.Vm.SearchName = _val;
                if (!_val || _val == "") {
                    this.props.Vm.IsHideClearBtn = true;
                }
                else {
                    this.props.Vm.IsHideClearBtn = false;
                }
                this.forceUpdate();
            };
            CensusDoctorSearchFormDomReact.prototype.fun_seachClearBtn = function () {
                urlFile.Core.AkUrl.Current().openUrl("$eee$", false);
                urlFile.Core.AkUrl.Current().openUrl("$CensusDoctorListPage$", false);
            };
            CensusDoctorSearchFormDomReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            CensusDoctorSearchFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return CensusDoctorSearchFormDomReact;
        }(domCore.DomReact));
        CensusDoctorSearchFormDom.CensusDoctorSearchFormDomReact = CensusDoctorSearchFormDomReact;
        var CensusDoctorSearchFormDomVm = (function (_super) {
            __extends(CensusDoctorSearchFormDomVm, _super);
            function CensusDoctorSearchFormDomVm(config) {
                _super.call(this);
                this.ReactType = CensusDoctorSearchFormDomReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                this.ColVmObjList = {};
                if (config) {
                    this.RowData = {};
                    this.UniId = config.UniId;
                    this.initColVm("Department", "SelectorVm", "notNull");
                    this.initColVm("Name", "SelectorVm", "notNull");
                    this.initColVm("BeginDate", "DateTimeVm", "notNull");
                    this.initColVm("EndDate", "DateTimeVm", "notNull");
                }
            }
            CensusDoctorSearchFormDomVm.prototype.initColVm = function (colName, colType, legal) {
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
                    _exciteBean.IsChange = true;
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    if (colType == "SelectorVm") {
                        this.initSelector(colName, utilFile.Core.Util.Cast(_exciteBean));
                    }
                    this.ColVmObjList[_name] = _exciteBean;
                }
            };
            CensusDoctorSearchFormDomVm.prototype.initSelector = function (colName, selectVm) {
                if (colName == "Name") {
                    selectVm.RegName = "DoctorsCodeTable";
                    selectVm.HasCanEdit = false;
                }
                else if (colName == "Department") {
                    selectVm.RegName = "MedicalDepartmentTreeCodeTable";
                    selectVm.HasCanEdit = false;
                }
            };
            CensusDoctorSearchFormDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.ColVmObjList) {
                    this.ColVmObjList[n].IsChange = true;
                }
            };
            CensusDoctorSearchFormDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            CensusDoctorSearchFormDomVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("medical/base/CensusDoctor/list/loadpagedata", this.UniId, pageIndex);
            };
            return CensusDoctorSearchFormDomVm;
        }(domCore.DomVm));
        CensusDoctorSearchFormDom.CensusDoctorSearchFormDomVm = CensusDoctorSearchFormDomVm;
        var CensusDoctorSearchFormDomStates = (function (_super) {
            __extends(CensusDoctorSearchFormDomStates, _super);
            function CensusDoctorSearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return CensusDoctorSearchFormDomStates;
        }(domCore.DomStates));
        CensusDoctorSearchFormDom.CensusDoctorSearchFormDomStates = CensusDoctorSearchFormDomStates;
        var CensusDoctorSearchFormDomProps = (function (_super) {
            __extends(CensusDoctorSearchFormDomProps, _super);
            function CensusDoctorSearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return CensusDoctorSearchFormDomProps;
        }(domCore.DomProps));
        CensusDoctorSearchFormDom.CensusDoctorSearchFormDomProps = CensusDoctorSearchFormDomProps;
    })(CensusDoctorSearchFormDom = exports.CensusDoctorSearchFormDom || (exports.CensusDoctorSearchFormDom = {}));
});
