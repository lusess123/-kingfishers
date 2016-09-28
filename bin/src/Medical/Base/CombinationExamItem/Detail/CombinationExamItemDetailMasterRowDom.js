var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom"], function (require, exports, React, domFile) {
    "use strict";
    var domCore = domFile.Core;
    var CombinationExamItemDetailMasterRowDom;
    (function (CombinationExamItemDetailMasterRowDom) {
        var CombinationExamItemDetailMasterRowDomAction = (function (_super) {
            __extends(CombinationExamItemDetailMasterRowDomAction, _super);
            function CombinationExamItemDetailMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemDetailMasterRowDomAction;
        }(domCore.DomAction));
        CombinationExamItemDetailMasterRowDom.CombinationExamItemDetailMasterRowDomAction = CombinationExamItemDetailMasterRowDomAction;
        var CombinationExamItemDetailMasterRowDomReact = (function (_super) {
            __extends(CombinationExamItemDetailMasterRowDomReact, _super);
            function CombinationExamItemDetailMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new CombinationExamItemDetailMasterRowDomStates();
            }
            CombinationExamItemDetailMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "1"}, React.createElement("ul", {className: "tabs"}, React.createElement("li", {className: "tab-title active"}, React.createElement("a", {onClick: function () { _this.fun_titleClick(); }}, "体检套餐明细", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down")})))), React.createElement("div", {className: "tabs-content"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsFormHide ? "hide" : "")}, React.createElement("div", {className: "acs-form clearfix"}, React.createElement("div", {className: "large-4 small-12 columns acs-dashed-line"}, React.createElement("div", {className: "columns acs-lable"}, React.createElement("label", {for: "right-label", className: "right"}, "套餐名称：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "left"}, this.props.Vm.RowData.ItemId))), React.createElement("div", {className: "large-4 small-12 columns acs-dashed-line"}, React.createElement("div", {className: "columns acs-lable"}, React.createElement("label", {for: "right-label", className: "right"}, "项目名称：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "left"}, this.props.Vm.RowData.PackageId))))))));
            };
            CombinationExamItemDetailMasterRowDomReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
                this.forceUpdate();
            };
            CombinationExamItemDetailMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return CombinationExamItemDetailMasterRowDomReact;
        }(domCore.DomReact));
        CombinationExamItemDetailMasterRowDom.CombinationExamItemDetailMasterRowDomReact = CombinationExamItemDetailMasterRowDomReact;
        var CombinationExamItemDetailMasterRowDomVm = (function (_super) {
            __extends(CombinationExamItemDetailMasterRowDomVm, _super);
            function CombinationExamItemDetailMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = CombinationExamItemDetailMasterRowDomReact;
                if (config) {
                    this.RowData = config.RowData;
                }
            }
            return CombinationExamItemDetailMasterRowDomVm;
        }(domCore.DomVm));
        CombinationExamItemDetailMasterRowDom.CombinationExamItemDetailMasterRowDomVm = CombinationExamItemDetailMasterRowDomVm;
        var CombinationExamItemDetailMasterRowDomStates = (function (_super) {
            __extends(CombinationExamItemDetailMasterRowDomStates, _super);
            function CombinationExamItemDetailMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemDetailMasterRowDomStates;
        }(domCore.DomStates));
        CombinationExamItemDetailMasterRowDom.CombinationExamItemDetailMasterRowDomStates = CombinationExamItemDetailMasterRowDomStates;
        var CombinationExamItemDetailMasterRowDomProps = (function (_super) {
            __extends(CombinationExamItemDetailMasterRowDomProps, _super);
            function CombinationExamItemDetailMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemDetailMasterRowDomProps;
        }(domCore.DomProps));
        CombinationExamItemDetailMasterRowDom.CombinationExamItemDetailMasterRowDomProps = CombinationExamItemDetailMasterRowDomProps;
    })(CombinationExamItemDetailMasterRowDom = exports.CombinationExamItemDetailMasterRowDom || (exports.CombinationExamItemDetailMasterRowDom = {}));
});
