var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "react"], function (require, exports, domFile, urlFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var WorkflowMsgDom;
    (function (WorkflowMsgDom) {
        var WorkflowMsgDomAction = (function (_super) {
            __extends(WorkflowMsgDomAction, _super);
            function WorkflowMsgDomAction() {
                _super.apply(this, arguments);
            }
            return WorkflowMsgDomAction;
        }(domCore.DomAction));
        WorkflowMsgDom.WorkflowMsgDomAction = WorkflowMsgDomAction;
        var WorkflowMsgDomReact = (function (_super) {
            __extends(WorkflowMsgDomReact, _super);
            function WorkflowMsgDomReact() {
                _super.apply(this, arguments);
                this.state = new WorkflowMsgDomStates();
            }
            WorkflowMsgDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("li", {className: "Hc-workflow-item"}, React.createElement("div", {className: "acs-new-btn"}, this.props.Vm.IsNew ? React.createElement("a", {className: "button red2"}, "最新") : null, this.props.Vm.IsHot ? React.createElement("a", {className: "button orange acsMarginL0-2"}, "最紧急") : null), React.createElement("div", {className: "clearfix"}, React.createElement("span", null, React.createElement("i", {className: "fa  fa-2 fa-folder" + (this.props.Vm.IsOpen ? "-open" : "")}), this.props.Vm.WI_RECEIVE_DATE), React.createElement("span", {className: "acsMarginL3 acsWidth36"}, this.props.Vm.WI_NAME), React.createElement("a", {className: "Hu-btn-execute ", onClick: function () { _this.exeClick_fun(_this.props.Vm.FID); }}, React.createElement("i", {className: "fa fa-2 fa-caret-right", title: "执行"})), React.createElement("a", {className: "Hu-btn-execute ", onClick: function () { _this.detailClick_fun(_this.props.Vm.FID); }}, React.createElement("i", {className: "fa fa-2 fa-search-plus", title: "查看"}))));
            };
            WorkflowMsgDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            WorkflowMsgDomReact.prototype.exeClick_fun = function (id) {
                urlFile.Core.AkUrl.Current().openUrl("$winworkflow$inst$undefined$" + id, true);
            };
            WorkflowMsgDomReact.prototype.detailClick_fun = function (id) {
                urlFile.Core.AkUrl.Current().openUrl("$winworkflow$detail$undefined$" + id, true);
            };
            return WorkflowMsgDomReact;
        }(domCore.DomReact));
        WorkflowMsgDom.WorkflowMsgDomReact = WorkflowMsgDomReact;
        var WorkflowMsgDomVm = (function (_super) {
            __extends(WorkflowMsgDomVm, _super);
            function WorkflowMsgDomVm(config) {
                _super.call(this);
                this.ReactType = WorkflowMsgDomReact;
                if (config) {
                    this.FID = config.FID;
                    this.WI_WD_NAME = config.WI_WD_NAME;
                    this.WI_WD_DISPLAYNAME = config.WI_WD_DISPLAYNAME;
                    this.WI_NAME = config.WI_NAME;
                    this.WI_STATUS = config.WI_STATUS;
                    this.WI_RECEIVE_DATE = config.WI_RECEIVE_DATE;
                    this.WI_PRIORITY = config.WI_PRIORITY;
                    this.IsHot = config.IsHot;
                    this.IsNew = config.IsNew;
                    this.IsOpen = config.IsOpen;
                }
            }
            return WorkflowMsgDomVm;
        }(domCore.DomVm));
        WorkflowMsgDom.WorkflowMsgDomVm = WorkflowMsgDomVm;
        var WorkflowMsgDomStates = (function (_super) {
            __extends(WorkflowMsgDomStates, _super);
            function WorkflowMsgDomStates() {
                _super.apply(this, arguments);
            }
            return WorkflowMsgDomStates;
        }(domCore.DomStates));
        WorkflowMsgDom.WorkflowMsgDomStates = WorkflowMsgDomStates;
        var WorkflowMsgDomProps = (function (_super) {
            __extends(WorkflowMsgDomProps, _super);
            function WorkflowMsgDomProps() {
                _super.apply(this, arguments);
            }
            return WorkflowMsgDomProps;
        }(domCore.DomProps));
        WorkflowMsgDom.WorkflowMsgDomProps = WorkflowMsgDomProps;
    })(WorkflowMsgDom = exports.WorkflowMsgDom || (exports.WorkflowMsgDom = {}));
});
