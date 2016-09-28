var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Text"], function (require, exports, React, domFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var ResultCommonUpdateMasterRowDom;
    (function (ResultCommonUpdateMasterRowDom) {
        var ResultCommonUpdateMasterRowDomAction = (function (_super) {
            __extends(ResultCommonUpdateMasterRowDomAction, _super);
            function ResultCommonUpdateMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return ResultCommonUpdateMasterRowDomAction;
        }(domCore.DomAction));
        ResultCommonUpdateMasterRowDom.ResultCommonUpdateMasterRowDomAction = ResultCommonUpdateMasterRowDomAction;
        var ResultCommonUpdateMasterRowDomReact = (function (_super) {
            __extends(ResultCommonUpdateMasterRowDomReact, _super);
            function ResultCommonUpdateMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ResultCommonUpdateMasterRowDomStates();
            }
            ResultCommonUpdateMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "体检结果", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["SimpleCode"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "体检项目：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["ItemId"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "体检结果：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Result"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "序号：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["OrderNum"].intoDom())))))));
            };
            ResultCommonUpdateMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            ResultCommonUpdateMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            ResultCommonUpdateMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ResultCommonUpdateMasterRowDomReact;
        }(domCore.DomReact));
        ResultCommonUpdateMasterRowDom.ResultCommonUpdateMasterRowDomReact = ResultCommonUpdateMasterRowDomReact;
        var ResultCommonUpdateMasterRowDomVm = (function (_super) {
            __extends(ResultCommonUpdateMasterRowDomVm, _super);
            function ResultCommonUpdateMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = ResultCommonUpdateMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.fIsChangeRow = false;
                if (config) {
                    this.RowData = config.RowData;
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                    this.initTextVm("SimpleCode", "notNull");
                    this.initTextVm("ItemId", "notNull");
                    this.initTextVm("Result");
                    this.initTextVm("OrderNum");
                }
            }
            ResultCommonUpdateMasterRowDomVm.prototype.getData = function () {
                var _this = this;
                var _obj = {};
                this.TextVmObjList["SimpleCode"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.SimpleCode = val;
                    }
                });
                this.TextVmObjList["ItemId"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.ItemId = val;
                    }
                });
                this.TextVmObjList["OrderNum"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.OrderNum = val;
                    }
                });
                this.TextVmObjList["Result"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Result = val;
                    }
                });
                if (this.fIsChangeRow) {
                    _obj.FID = this.RowData.FID;
                }
                this.fIsChangeRow = false;
                return _obj;
            };
            ResultCommonUpdateMasterRowDomVm.prototype.legal = function () {
                var l1 = this.TextVmObjList["ItemId"].legal();
                var l2 = this.TextVmObjList["SimpleCode"].legal();
                var _res = l1 && l2;
                return _res;
            };
            ResultCommonUpdateMasterRowDomVm.prototype.initTextVm = function (colName, legal) {
                var _this = this;
                var _name = colName.toString();
                var isexcite = false;
                for (var vn in this.TextVmObjList) {
                    var _obj = this.TextVmObjList[_name];
                    if (_obj) {
                        isexcite = true;
                        _exciteBean = _obj;
                    }
                }
                if (!isexcite) {
                    var _exciteBean = new textFile.ui.TextVm;
                    _exciteBean.Tag = colName;
                    _exciteBean.dataValueSet(this.RowData[colName]);
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    this.TextVmObjList[_name] = _exciteBean;
                }
            };
            ResultCommonUpdateMasterRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.TextVmObjList) {
                    this.TextVmObjList[n].IsChange = true;
                }
            };
            return ResultCommonUpdateMasterRowDomVm;
        }(domCore.DomVm));
        ResultCommonUpdateMasterRowDom.ResultCommonUpdateMasterRowDomVm = ResultCommonUpdateMasterRowDomVm;
        var ResultCommonUpdateMasterRowDomStates = (function (_super) {
            __extends(ResultCommonUpdateMasterRowDomStates, _super);
            function ResultCommonUpdateMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return ResultCommonUpdateMasterRowDomStates;
        }(domCore.DomStates));
        ResultCommonUpdateMasterRowDom.ResultCommonUpdateMasterRowDomStates = ResultCommonUpdateMasterRowDomStates;
        var ResultCommonUpdateMasterRowDomProps = (function (_super) {
            __extends(ResultCommonUpdateMasterRowDomProps, _super);
            function ResultCommonUpdateMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return ResultCommonUpdateMasterRowDomProps;
        }(domCore.DomProps));
        ResultCommonUpdateMasterRowDom.ResultCommonUpdateMasterRowDomProps = ResultCommonUpdateMasterRowDomProps;
    })(ResultCommonUpdateMasterRowDom = exports.ResultCommonUpdateMasterRowDom || (exports.ResultCommonUpdateMasterRowDom = {}));
});
