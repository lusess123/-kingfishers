var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom"], function (require, exports, React, domFile) {
    "use strict";
    var domCore = domFile.Core;
    var GeneralExamTplDetailMasterRowDom;
    (function (GeneralExamTplDetailMasterRowDom) {
        var GeneralExamTplDetailMasterRowDomAction = (function (_super) {
            __extends(GeneralExamTplDetailMasterRowDomAction, _super);
            function GeneralExamTplDetailMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplDetailMasterRowDomAction;
        }(domCore.DomAction));
        GeneralExamTplDetailMasterRowDom.GeneralExamTplDetailMasterRowDomAction = GeneralExamTplDetailMasterRowDomAction;
        var GeneralExamTplDetailMasterRowDomReact = (function (_super) {
            __extends(GeneralExamTplDetailMasterRowDomReact, _super);
            function GeneralExamTplDetailMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new GeneralExamTplDetailMasterRowDomStates();
            }
            GeneralExamTplDetailMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleClick(); }}, "模板明细", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsFormHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-12 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.Name))), React.createElement("div", {className: "col-lg-12 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "综述：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.Summary))), React.createElement("div", {className: "col-lg-12 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "建议：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.Advice))))))));
            };
            GeneralExamTplDetailMasterRowDomReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
                this.forceUpdate();
            };
            GeneralExamTplDetailMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GeneralExamTplDetailMasterRowDomReact;
        }(domCore.DomReact));
        GeneralExamTplDetailMasterRowDom.GeneralExamTplDetailMasterRowDomReact = GeneralExamTplDetailMasterRowDomReact;
        var GeneralExamTplDetailMasterRowDomVm = (function (_super) {
            __extends(GeneralExamTplDetailMasterRowDomVm, _super);
            function GeneralExamTplDetailMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = GeneralExamTplDetailMasterRowDomReact;
                if (config) {
                    this.RowData = config.RowData;
                }
            }
            return GeneralExamTplDetailMasterRowDomVm;
        }(domCore.DomVm));
        GeneralExamTplDetailMasterRowDom.GeneralExamTplDetailMasterRowDomVm = GeneralExamTplDetailMasterRowDomVm;
        var GeneralExamTplDetailMasterRowDomStates = (function (_super) {
            __extends(GeneralExamTplDetailMasterRowDomStates, _super);
            function GeneralExamTplDetailMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplDetailMasterRowDomStates;
        }(domCore.DomStates));
        GeneralExamTplDetailMasterRowDom.GeneralExamTplDetailMasterRowDomStates = GeneralExamTplDetailMasterRowDomStates;
        var GeneralExamTplDetailMasterRowDomProps = (function (_super) {
            __extends(GeneralExamTplDetailMasterRowDomProps, _super);
            function GeneralExamTplDetailMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplDetailMasterRowDomProps;
        }(domCore.DomProps));
        GeneralExamTplDetailMasterRowDom.GeneralExamTplDetailMasterRowDomProps = GeneralExamTplDetailMasterRowDomProps;
    })(GeneralExamTplDetailMasterRowDom = exports.GeneralExamTplDetailMasterRowDom || (exports.GeneralExamTplDetailMasterRowDom = {}));
});
