var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom"], function (require, exports, React, domFile) {
    "use strict";
    var domCore = domFile.Core;
    var DeptConclusionTplDetailMasterRowDom;
    (function (DeptConclusionTplDetailMasterRowDom) {
        var DeptConclusionTplDetailMasterRowDomAction = (function (_super) {
            __extends(DeptConclusionTplDetailMasterRowDomAction, _super);
            function DeptConclusionTplDetailMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplDetailMasterRowDomAction;
        }(domCore.DomAction));
        DeptConclusionTplDetailMasterRowDom.DeptConclusionTplDetailMasterRowDomAction = DeptConclusionTplDetailMasterRowDomAction;
        var DeptConclusionTplDetailMasterRowDomReact = (function (_super) {
            __extends(DeptConclusionTplDetailMasterRowDomReact, _super);
            function DeptConclusionTplDetailMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DeptConclusionTplDetailMasterRowDomStates();
            }
            DeptConclusionTplDetailMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleClick(); }}, "模板明细", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsFormHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "right"}, "科室：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {for: "right-label", className: "left"}, this.props.Vm.RowData.DeptName))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "right"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {for: "right-label", className: "left"}, this.props.Vm.RowData.Name))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "right"}, "小结内容：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {for: "right-label", className: "left"}, this.props.Vm.RowData.Content))))))));
            };
            DeptConclusionTplDetailMasterRowDomReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
                this.forceUpdate();
            };
            DeptConclusionTplDetailMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DeptConclusionTplDetailMasterRowDomReact;
        }(domCore.DomReact));
        DeptConclusionTplDetailMasterRowDom.DeptConclusionTplDetailMasterRowDomReact = DeptConclusionTplDetailMasterRowDomReact;
        var DeptConclusionTplDetailMasterRowDomVm = (function (_super) {
            __extends(DeptConclusionTplDetailMasterRowDomVm, _super);
            function DeptConclusionTplDetailMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = DeptConclusionTplDetailMasterRowDomReact;
                if (config) {
                    this.RowData = config.RowData;
                }
            }
            return DeptConclusionTplDetailMasterRowDomVm;
        }(domCore.DomVm));
        DeptConclusionTplDetailMasterRowDom.DeptConclusionTplDetailMasterRowDomVm = DeptConclusionTplDetailMasterRowDomVm;
        var DeptConclusionTplDetailMasterRowDomStates = (function (_super) {
            __extends(DeptConclusionTplDetailMasterRowDomStates, _super);
            function DeptConclusionTplDetailMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplDetailMasterRowDomStates;
        }(domCore.DomStates));
        DeptConclusionTplDetailMasterRowDom.DeptConclusionTplDetailMasterRowDomStates = DeptConclusionTplDetailMasterRowDomStates;
        var DeptConclusionTplDetailMasterRowDomProps = (function (_super) {
            __extends(DeptConclusionTplDetailMasterRowDomProps, _super);
            function DeptConclusionTplDetailMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplDetailMasterRowDomProps;
        }(domCore.DomProps));
        DeptConclusionTplDetailMasterRowDom.DeptConclusionTplDetailMasterRowDomProps = DeptConclusionTplDetailMasterRowDomProps;
    })(DeptConclusionTplDetailMasterRowDom = exports.DeptConclusionTplDetailMasterRowDom || (exports.DeptConclusionTplDetailMasterRowDom = {}));
});
