var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Util", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../02col/00core/BaseCol"], function (require, exports, React, domFile, utilFile, iocFile, urlFile, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    var CensusDieaseSearchFormDom;
    (function (CensusDieaseSearchFormDom) {
        var CensusDieaseSearchFormDomAction = (function (_super) {
            __extends(CensusDieaseSearchFormDomAction, _super);
            function CensusDieaseSearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return CensusDieaseSearchFormDomAction;
        }(domCore.DomAction));
        CensusDieaseSearchFormDom.CensusDieaseSearchFormDomAction = CensusDieaseSearchFormDomAction;
        var CensusDieaseSearchFormDomReact = (function (_super) {
            __extends(CensusDieaseSearchFormDomReact, _super);
            function CensusDieaseSearchFormDomReact() {
                _super.apply(this, arguments);
                this.state = new CensusDieaseSearchFormDomStates();
            }
            CensusDieaseSearchFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "异常名称："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Anomaly"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "体检人："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Name"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "开始时间："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["BeginDate"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "结束时间："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["EndDate"].intoDom())), React.createElement("div", {className: "col-xs-12 text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm", onClick: function () { _this.fun_searchBtn(); }}, "统计"), React.createElement("a", {className: "btn btn-primary btn-sm ", onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            CensusDieaseSearchFormDomReact.prototype.fun_linkCode = function (e) {
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
            CensusDieaseSearchFormDomReact.prototype.fun_linkName = function (e) {
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
            CensusDieaseSearchFormDomReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.RowData.Anomaly = "";
                this.props.Vm.RowData.Name = "";
                this.props.Vm.RowData.BeginDate = "";
                this.props.Vm.RowData.EndDate = "";
                this.props.Vm.clearDataPage();
            };
            CensusDieaseSearchFormDomReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            CensusDieaseSearchFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return CensusDieaseSearchFormDomReact;
        }(domCore.DomReact));
        CensusDieaseSearchFormDom.CensusDieaseSearchFormDomReact = CensusDieaseSearchFormDomReact;
        var CensusDieaseSearchFormDomVm = (function (_super) {
            __extends(CensusDieaseSearchFormDomVm, _super);
            function CensusDieaseSearchFormDomVm(config) {
                _super.call(this);
                this.ReactType = CensusDieaseSearchFormDomReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                this.ColVmObjList = {};
                if (config) {
                    this.RowData = {};
                    this.UniId = config.UniId;
                    this.initColVm("Anomaly", "SelectorVm", "notNull");
                    this.initColVm("Name", "SelectorVm", "notNull");
                    this.initColVm("BeginDate", "DateTimeVm", "notNull");
                    this.initColVm("EndDate", "DateTimeVm", "notNull");
                }
            }
            CensusDieaseSearchFormDomVm.prototype.initColVm = function (colName, colType, legal) {
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
            CensusDieaseSearchFormDomVm.prototype.initSelector = function (colName, selectVm) {
                if (colName == "Name") {
                    selectVm.RegName = "MemberBaseCodeTable";
                    selectVm.HasCanEdit = false;
                }
                else if (colName == "Anomaly") {
                    selectVm.RegName = "AnomalyBaseCodeTable";
                    selectVm.HasCanEdit = false;
                }
            };
            CensusDieaseSearchFormDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.ColVmObjList) {
                    this.ColVmObjList[n].IsChange = true;
                }
            };
            CensusDieaseSearchFormDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            CensusDieaseSearchFormDomVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("medical/base/CensusDiease/list/loadpagedata", this.UniId, pageIndex);
            };
            CensusDieaseSearchFormDomVm.prototype.clearDataPage = function () {
                urlFile.Core.AkUrl.Current().openUrl("$eee$", false);
                urlFile.Core.AkUrl.Current().openUrl("$CensusDieaseListPage$", false);
            };
            return CensusDieaseSearchFormDomVm;
        }(domCore.DomVm));
        CensusDieaseSearchFormDom.CensusDieaseSearchFormDomVm = CensusDieaseSearchFormDomVm;
        var CensusDieaseSearchFormDomStates = (function (_super) {
            __extends(CensusDieaseSearchFormDomStates, _super);
            function CensusDieaseSearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return CensusDieaseSearchFormDomStates;
        }(domCore.DomStates));
        CensusDieaseSearchFormDom.CensusDieaseSearchFormDomStates = CensusDieaseSearchFormDomStates;
        var CensusDieaseSearchFormDomProps = (function (_super) {
            __extends(CensusDieaseSearchFormDomProps, _super);
            function CensusDieaseSearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return CensusDieaseSearchFormDomProps;
        }(domCore.DomProps));
        CensusDieaseSearchFormDom.CensusDieaseSearchFormDomProps = CensusDieaseSearchFormDomProps;
    })(CensusDieaseSearchFormDom = exports.CensusDieaseSearchFormDom || (exports.CensusDieaseSearchFormDom = {}));
});
