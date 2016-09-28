var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom"], function (require, exports, React, domFile) {
    "use strict";
    var domCore = domFile.Core;
    var AnomalyDetailMasterRowDom;
    (function (AnomalyDetailMasterRowDom) {
        var AnomalyDetailMasterRowDomAction = (function (_super) {
            __extends(AnomalyDetailMasterRowDomAction, _super);
            function AnomalyDetailMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return AnomalyDetailMasterRowDomAction;
        }(domCore.DomAction));
        AnomalyDetailMasterRowDom.AnomalyDetailMasterRowDomAction = AnomalyDetailMasterRowDomAction;
        var AnomalyDetailMasterRowDomReact = (function (_super) {
            __extends(AnomalyDetailMasterRowDomReact, _super);
            function AnomalyDetailMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new AnomalyDetailMasterRowDomStates();
            }
            AnomalyDetailMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleClick(); }}, "异常明细", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsFormHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.SimpleCode))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.Name))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "序号：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.OrderNumber))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "备注：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.Remark))))))));
            };
            AnomalyDetailMasterRowDomReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
                this.forceUpdate();
            };
            AnomalyDetailMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AnomalyDetailMasterRowDomReact;
        }(domCore.DomReact));
        AnomalyDetailMasterRowDom.AnomalyDetailMasterRowDomReact = AnomalyDetailMasterRowDomReact;
        var AnomalyDetailMasterRowDomVm = (function (_super) {
            __extends(AnomalyDetailMasterRowDomVm, _super);
            function AnomalyDetailMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = AnomalyDetailMasterRowDomReact;
                if (config) {
                    this.RowData = config.RowData;
                }
            }
            return AnomalyDetailMasterRowDomVm;
        }(domCore.DomVm));
        AnomalyDetailMasterRowDom.AnomalyDetailMasterRowDomVm = AnomalyDetailMasterRowDomVm;
        var AnomalyDetailMasterRowDomStates = (function (_super) {
            __extends(AnomalyDetailMasterRowDomStates, _super);
            function AnomalyDetailMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return AnomalyDetailMasterRowDomStates;
        }(domCore.DomStates));
        AnomalyDetailMasterRowDom.AnomalyDetailMasterRowDomStates = AnomalyDetailMasterRowDomStates;
        var AnomalyDetailMasterRowDomProps = (function (_super) {
            __extends(AnomalyDetailMasterRowDomProps, _super);
            function AnomalyDetailMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return AnomalyDetailMasterRowDomProps;
        }(domCore.DomProps));
        AnomalyDetailMasterRowDom.AnomalyDetailMasterRowDomProps = AnomalyDetailMasterRowDomProps;
    })(AnomalyDetailMasterRowDom = exports.AnomalyDetailMasterRowDom || (exports.AnomalyDetailMasterRowDom = {}));
});
