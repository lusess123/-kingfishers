var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom"], function (require, exports, React, domFile) {
    "use strict";
    var domCore = domFile.Core;
    var ResultCommonDetailMasterRowDom;
    (function (ResultCommonDetailMasterRowDom) {
        var ResultCommonDetailMasterRowDomAction = (function (_super) {
            __extends(ResultCommonDetailMasterRowDomAction, _super);
            function ResultCommonDetailMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return ResultCommonDetailMasterRowDomAction;
        }(domCore.DomAction));
        ResultCommonDetailMasterRowDom.ResultCommonDetailMasterRowDomAction = ResultCommonDetailMasterRowDomAction;
        var ResultCommonDetailMasterRowDomReact = (function (_super) {
            __extends(ResultCommonDetailMasterRowDomReact, _super);
            function ResultCommonDetailMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ResultCommonDetailMasterRowDomStates();
            }
            ResultCommonDetailMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleClick(); }}, "体检结果", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsFormHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.SimpleCode))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "体检项目：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.ItemId))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "体检结果：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.Result))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "序号：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.OrderNum))))))));
            };
            ResultCommonDetailMasterRowDomReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
                this.forceUpdate();
            };
            ResultCommonDetailMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ResultCommonDetailMasterRowDomReact;
        }(domCore.DomReact));
        ResultCommonDetailMasterRowDom.ResultCommonDetailMasterRowDomReact = ResultCommonDetailMasterRowDomReact;
        var ResultCommonDetailMasterRowDomVm = (function (_super) {
            __extends(ResultCommonDetailMasterRowDomVm, _super);
            function ResultCommonDetailMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = ResultCommonDetailMasterRowDomReact;
                if (config) {
                    this.RowData = config.RowData;
                }
            }
            return ResultCommonDetailMasterRowDomVm;
        }(domCore.DomVm));
        ResultCommonDetailMasterRowDom.ResultCommonDetailMasterRowDomVm = ResultCommonDetailMasterRowDomVm;
        var ResultCommonDetailMasterRowDomStates = (function (_super) {
            __extends(ResultCommonDetailMasterRowDomStates, _super);
            function ResultCommonDetailMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return ResultCommonDetailMasterRowDomStates;
        }(domCore.DomStates));
        ResultCommonDetailMasterRowDom.ResultCommonDetailMasterRowDomStates = ResultCommonDetailMasterRowDomStates;
        var ResultCommonDetailMasterRowDomProps = (function (_super) {
            __extends(ResultCommonDetailMasterRowDomProps, _super);
            function ResultCommonDetailMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return ResultCommonDetailMasterRowDomProps;
        }(domCore.DomProps));
        ResultCommonDetailMasterRowDom.ResultCommonDetailMasterRowDomProps = ResultCommonDetailMasterRowDomProps;
    })(ResultCommonDetailMasterRowDom = exports.ResultCommonDetailMasterRowDom || (exports.ResultCommonDetailMasterRowDom = {}));
});
