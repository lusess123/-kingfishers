var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./WorkflowMsgDom", "react"], function (require, exports, domFile, workflowMsgFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var WorkflowDefDom;
    (function (WorkflowDefDom) {
        var WorkflowDefDomAction = (function (_super) {
            __extends(WorkflowDefDomAction, _super);
            function WorkflowDefDomAction() {
                _super.apply(this, arguments);
            }
            return WorkflowDefDomAction;
        }(domCore.DomAction));
        WorkflowDefDom.WorkflowDefDomAction = WorkflowDefDomAction;
        var WorkflowDefDomReact = (function (_super) {
            __extends(WorkflowDefDomReact, _super);
            function WorkflowDefDomReact() {
                _super.apply(this, arguments);
                this.state = new WorkflowDefDomStates();
            }
            WorkflowDefDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("li", null, React.createElement("a", {className: "Hu-pointer" + (this.props.Vm.IsNodeShow ? "" : " active"), onClick: function () { _this.fun_NodeShow(); }}, React.createElement("i", {className: "fa fa-angle-down" + (this.props.Vm.IsNodeShow ? " active" : "")}), this.props.Vm.DisplayName, "(", this.props.Vm.Count, ")"), React.createElement("ul", {className: (this.props.Vm.IsNodeShow ? "hide" : "")}, this.props.Vm.InstList.map(function (inst) {
                    return inst.intoDom();
                }))));
            };
            WorkflowDefDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            WorkflowDefDomReact.prototype.fun_NodeShow = function () {
                this.props.Vm.IsNodeShow = !this.props.Vm.IsNodeShow;
                this.forceUpdate();
            };
            return WorkflowDefDomReact;
        }(domCore.DomReact));
        WorkflowDefDom.WorkflowDefDomReact = WorkflowDefDomReact;
        var WorkflowDefDomVm = (function (_super) {
            __extends(WorkflowDefDomVm, _super);
            function WorkflowDefDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = WorkflowDefDomReact;
                this.IsNodeShow = true;
                if (config) {
                    this.Count = config.Count;
                    this.Name = config.Name;
                    this.DisplayName = config.DisplayName;
                    if (config.InstList) {
                        this.InstList = [];
                        config.InstList.forEach(function (inst) {
                            _this.InstList.push(new workflowMsgFile.WorkflowMsgDom.WorkflowMsgDomVm(inst));
                        });
                    }
                }
            }
            return WorkflowDefDomVm;
        }(domCore.DomVm));
        WorkflowDefDom.WorkflowDefDomVm = WorkflowDefDomVm;
        var WorkflowDefDomStates = (function (_super) {
            __extends(WorkflowDefDomStates, _super);
            function WorkflowDefDomStates() {
                _super.apply(this, arguments);
            }
            return WorkflowDefDomStates;
        }(domCore.DomStates));
        WorkflowDefDom.WorkflowDefDomStates = WorkflowDefDomStates;
        var WorkflowDefDomProps = (function (_super) {
            __extends(WorkflowDefDomProps, _super);
            function WorkflowDefDomProps() {
                _super.apply(this, arguments);
            }
            return WorkflowDefDomProps;
        }(domCore.DomProps));
        WorkflowDefDom.WorkflowDefDomProps = WorkflowDefDomProps;
    })(WorkflowDefDom = exports.WorkflowDefDom || (exports.WorkflowDefDom = {}));
});
