var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Text"], function (require, exports, React, domFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var ResultCommonInsertMasterRowDom;
    (function (ResultCommonInsertMasterRowDom) {
        var ResultCommonInsertMasterRowDomAction = (function (_super) {
            __extends(ResultCommonInsertMasterRowDomAction, _super);
            function ResultCommonInsertMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return ResultCommonInsertMasterRowDomAction;
        }(domCore.DomAction));
        ResultCommonInsertMasterRowDom.ResultCommonInsertMasterRowDomAction = ResultCommonInsertMasterRowDomAction;
        var ResultCommonInsertMasterRowDomReact = (function (_super) {
            __extends(ResultCommonInsertMasterRowDomReact, _super);
            function ResultCommonInsertMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ResultCommonInsertMasterRowDomStates();
            }
            ResultCommonInsertMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "体检结果", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["SimpleCode"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required"}, "体检项目：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["ItemId"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "体检结果：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Result"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "序号：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["OrderNum"].intoDom())))))));
            };
            ResultCommonInsertMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            ResultCommonInsertMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            ResultCommonInsertMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ResultCommonInsertMasterRowDomReact;
        }(domCore.DomReact));
        ResultCommonInsertMasterRowDom.ResultCommonInsertMasterRowDomReact = ResultCommonInsertMasterRowDomReact;
        var ResultCommonInsertMasterRowDomVm = (function (_super) {
            __extends(ResultCommonInsertMasterRowDomVm, _super);
            function ResultCommonInsertMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = ResultCommonInsertMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.initTextVm("SimpleCode", "notNull");
                this.initTextVm("ItemId", "notNull");
                this.initTextVm("Result");
                this.initTextVm("OrderNum");
            }
            ResultCommonInsertMasterRowDomVm.prototype.legal = function () {
                var l1 = this.TextVmObjList["ItemId"].legal();
                var l2 = this.TextVmObjList["SimpleCode"].legal();
                var _res = l1 && l2;
                return _res;
            };
            ResultCommonInsertMasterRowDomVm.prototype.initTextVm = function (colName, legal) {
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
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    this.TextVmObjList[_name] = _exciteBean;
                }
            };
            ResultCommonInsertMasterRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.TextVmObjList) {
                    this.TextVmObjList[n].IsChange = true;
                }
            };
            return ResultCommonInsertMasterRowDomVm;
        }(domCore.DomVm));
        ResultCommonInsertMasterRowDom.ResultCommonInsertMasterRowDomVm = ResultCommonInsertMasterRowDomVm;
        var ResultCommonInsertMasterRowDomStates = (function (_super) {
            __extends(ResultCommonInsertMasterRowDomStates, _super);
            function ResultCommonInsertMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return ResultCommonInsertMasterRowDomStates;
        }(domCore.DomStates));
        ResultCommonInsertMasterRowDom.ResultCommonInsertMasterRowDomStates = ResultCommonInsertMasterRowDomStates;
        var ResultCommonInsertMasterRowDomProps = (function (_super) {
            __extends(ResultCommonInsertMasterRowDomProps, _super);
            function ResultCommonInsertMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return ResultCommonInsertMasterRowDomProps;
        }(domCore.DomProps));
        ResultCommonInsertMasterRowDom.ResultCommonInsertMasterRowDomProps = ResultCommonInsertMasterRowDomProps;
    })(ResultCommonInsertMasterRowDom = exports.ResultCommonInsertMasterRowDom || (exports.ResultCommonInsertMasterRowDom = {}));
});
