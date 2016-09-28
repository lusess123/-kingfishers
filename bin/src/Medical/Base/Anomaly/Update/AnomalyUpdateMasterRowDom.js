var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Ioc", "./../../../../02col/00core/BaseCol"], function (require, exports, React, domFile, iocFile, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    var AnomalyUpdateMasterRowDom;
    (function (AnomalyUpdateMasterRowDom) {
        var AnomalyUpdateMasterRowDomAction = (function (_super) {
            __extends(AnomalyUpdateMasterRowDomAction, _super);
            function AnomalyUpdateMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return AnomalyUpdateMasterRowDomAction;
        }(domCore.DomAction));
        AnomalyUpdateMasterRowDom.AnomalyUpdateMasterRowDomAction = AnomalyUpdateMasterRowDomAction;
        var AnomalyUpdateMasterRowDomReact = (function (_super) {
            __extends(AnomalyUpdateMasterRowDomReact, _super);
            function AnomalyUpdateMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new AnomalyUpdateMasterRowDomStates();
            }
            AnomalyUpdateMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "异常", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["SimpleCode"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["Name"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "序号：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["OrderNumber"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "备注：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["Remark"].intoDom())))))));
            };
            AnomalyUpdateMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            AnomalyUpdateMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AnomalyUpdateMasterRowDomReact;
        }(domCore.DomReact));
        AnomalyUpdateMasterRowDom.AnomalyUpdateMasterRowDomReact = AnomalyUpdateMasterRowDomReact;
        var AnomalyUpdateMasterRowDomVm = (function (_super) {
            __extends(AnomalyUpdateMasterRowDomVm, _super);
            function AnomalyUpdateMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = AnomalyUpdateMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.ColVmObjList = {};
                this.fIsChangeRow = false;
                if (config) {
                    this.RowData = config.RowData;
                    this.RemarkOgi = this.RowData.Remark;
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                    this.initColVm("SimpleCode", "TextVm", "notNull");
                    this.initColVm("Name", "TextVm", "notNull");
                    this.initColVm("OrderNumber", "TextVm");
                    this.initColVm("Remark", "TextAreaVm");
                }
            }
            AnomalyUpdateMasterRowDomVm.prototype.initColVm = function (colName, colType, legal) {
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
                    _exciteBean.dataValueSet(this.RowData[colName]);
                    _exciteBean.setOriValue(this.RowData[colName]);
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    this.ColVmObjList[_name] = _exciteBean;
                }
            };
            AnomalyUpdateMasterRowDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            AnomalyUpdateMasterRowDomVm.prototype.getData = function (isDetailChange) {
                var _this = this;
                var _obj = {};
                //this.ColVmObjList["SimpleCode"].getChangeValFun((isChange, val) => {
                //    if (isChange) {
                //        this.fIsChangeRow = true;
                //        _obj.SimpleCode = val;
                //    }
                //});
                //this.ColVmObjList["Name"].getChangeValFun((isChange, val) => {
                //    if (isChange) {
                //        this.fIsChangeRow = true;
                //        _obj.Name = val;
                //    }
                //});
                //this.ColVmObjList["OrderNumber"].getChangeValFun((isChange, val) => {
                //    if (isChange) {
                //        this.fIsChangeRow = true;
                //        _obj.OrderNumber = parseInt(val);
                //    }
                //});
                //this.ColVmObjList["Remark"].getChangeValFun((isChange, val) => {
                //    if (isChange) {
                //        this.fIsChangeRow = true;
                //        _obj.OrderNumber = parseInt(val);
                //    }
                //});
                //if (this.RowData.Remark != this.RemarkOgi) {
                //    this.fIsChangeRow = true;
                //    _obj.Remark = this.RowData.Remark;
                //}
                for (var vn in this.ColVmObjList) {
                    var _colObj = this.ColVmObjList[vn];
                    if (_colObj) {
                        _colObj.getChangeValFun(function (isChange, val) {
                            if (isChange) {
                                _this.fIsChangeRow = true;
                                _obj[vn] = val;
                            }
                        });
                    }
                }
                if (this.fIsChangeRow || isDetailChange) {
                    _obj.FID = this.RowData.FID;
                }
                this.fIsChangeRow = false;
                return _obj;
            };
            return AnomalyUpdateMasterRowDomVm;
        }(domCore.DomVm));
        AnomalyUpdateMasterRowDom.AnomalyUpdateMasterRowDomVm = AnomalyUpdateMasterRowDomVm;
        var AnomalyUpdateMasterRowDomStates = (function (_super) {
            __extends(AnomalyUpdateMasterRowDomStates, _super);
            function AnomalyUpdateMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return AnomalyUpdateMasterRowDomStates;
        }(domCore.DomStates));
        AnomalyUpdateMasterRowDom.AnomalyUpdateMasterRowDomStates = AnomalyUpdateMasterRowDomStates;
        var AnomalyUpdateMasterRowDomProps = (function (_super) {
            __extends(AnomalyUpdateMasterRowDomProps, _super);
            function AnomalyUpdateMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return AnomalyUpdateMasterRowDomProps;
        }(domCore.DomProps));
        AnomalyUpdateMasterRowDom.AnomalyUpdateMasterRowDomProps = AnomalyUpdateMasterRowDomProps;
    })(AnomalyUpdateMasterRowDom = exports.AnomalyUpdateMasterRowDom || (exports.AnomalyUpdateMasterRowDom = {}));
});
