var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Ioc", "./../../../../02col/00core/BaseCol"], function (require, exports, React, domFile, iocFile, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    var UpdateAccountRowDom;
    (function (UpdateAccountRowDom) {
        var UpdateAccountRowDomAction = (function (_super) {
            __extends(UpdateAccountRowDomAction, _super);
            function UpdateAccountRowDomAction() {
                _super.apply(this, arguments);
            }
            return UpdateAccountRowDomAction;
        }(domCore.DomAction));
        UpdateAccountRowDom.UpdateAccountRowDomAction = UpdateAccountRowDomAction;
        var UpdateAccountRowDomReact = (function (_super) {
            __extends(UpdateAccountRowDomReact, _super);
            function UpdateAccountRowDomReact() {
                _super.apply(this, arguments);
                this.state = new UpdateAccountRowDomStates();
            }
            UpdateAccountRowDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-modal-body clearfix"}, React.createElement("form", {className: ""}, React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "体检单位："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.RowData.UnitName)), React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "体检批次："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.RowData.BatchId)), React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "预检人数："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.RowData.ReservationCount)), React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "实检人数："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["RealCount"].intoDom())), React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "应收金额："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Fee"].intoDom()))));
            };
            UpdateAccountRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            UpdateAccountRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UpdateAccountRowDomReact;
        }(domCore.DomReact));
        UpdateAccountRowDom.UpdateAccountRowDomReact = UpdateAccountRowDomReact;
        var UpdateAccountRowDomVm = (function (_super) {
            __extends(UpdateAccountRowDomVm, _super);
            function UpdateAccountRowDomVm(config) {
                _super.call(this);
                this.ReactType = UpdateAccountRowDomReact;
                this.ColVmObjList = {};
                if (config) {
                    this.BatchId = config.BatchId;
                    this.RowData = config.Data;
                    this.initColVm("RealCount", "TextVm", "notNull");
                    this.initColVm("Fee", "TextVm", "notNull");
                }
            }
            UpdateAccountRowDomVm.prototype.initColVm = function (colName, colType, legal) {
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
                    _exciteBean.dataValue(this.RowData[colName]);
                    _exciteBean.setOriValue(this.RowData[colName]);
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    this.ColVmObjList[_name] = _exciteBean;
                }
            };
            UpdateAccountRowDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            return UpdateAccountRowDomVm;
        }(domCore.DomVm));
        UpdateAccountRowDom.UpdateAccountRowDomVm = UpdateAccountRowDomVm;
        var UpdateAccountRowDomStates = (function (_super) {
            __extends(UpdateAccountRowDomStates, _super);
            function UpdateAccountRowDomStates() {
                _super.apply(this, arguments);
            }
            return UpdateAccountRowDomStates;
        }(domCore.DomStates));
        UpdateAccountRowDom.UpdateAccountRowDomStates = UpdateAccountRowDomStates;
        var UpdateAccountRowDomProps = (function (_super) {
            __extends(UpdateAccountRowDomProps, _super);
            function UpdateAccountRowDomProps() {
                _super.apply(this, arguments);
            }
            return UpdateAccountRowDomProps;
        }(domCore.DomProps));
        UpdateAccountRowDom.UpdateAccountRowDomProps = UpdateAccountRowDomProps;
    })(UpdateAccountRowDom = exports.UpdateAccountRowDom || (exports.UpdateAccountRowDom = {}));
});
