var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "./WorkflowDefDom", "react"], function (require, exports, domFile, urlFile, workflowDefFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var MyWorkflowDom;
    (function (MyWorkflowDom) {
        var MyWorkflowDomAction = (function (_super) {
            __extends(MyWorkflowDomAction, _super);
            function MyWorkflowDomAction() {
                _super.apply(this, arguments);
            }
            return MyWorkflowDomAction;
        }(domCore.DomAction));
        MyWorkflowDom.MyWorkflowDomAction = MyWorkflowDomAction;
        var WorkflowItemDomReact = (function (_super) {
            __extends(WorkflowItemDomReact, _super);
            function WorkflowItemDomReact() {
                _super.apply(this, arguments);
                this.state = new MyWorkflowDomStates();
            }
            WorkflowItemDomReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "Hm-workflow-info"}, React.createElement("span", null, "你好！"), React.createElement("a", null, "您有(", this.props.Vm.TotalCount, ") 条工作"), React.createElement("span", null, "需要处理：若查看自己的工作流，点击："), React.createElement("a", null, "我的工作。"), React.createElement("span", null, "若查看自己参与的流程，点击："), React.createElement("a", null, "我参与的流程")), React.createElement("div", {className: "Hm-workflow-content"}, React.createElement("ul", {className: "nav"}, this.props.Vm.WorkflowDefList.map(function (def) {
                    return def.intoDom();
                }))));
            };
            WorkflowItemDomReact.prototype.fun_NodeShow = function () {
                this.props.Vm.IsNodeShow = !this.props.Vm.IsNodeShow;
                this.forceUpdate();
            };
            WorkflowItemDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return WorkflowItemDomReact;
        }(domCore.DomReact));
        MyWorkflowDom.WorkflowItemDomReact = WorkflowItemDomReact;
        var MyWorkflowDomVm = (function (_super) {
            __extends(MyWorkflowDomVm, _super);
            function MyWorkflowDomVm(config) {
                _super.call(this);
                this.ReactType = WorkflowItemDomReact;
                this.IsNodeShow = false;
                this.WorkflowDefList = [];
                if (config) {
                    this.init(config);
                }
            }
            MyWorkflowDomVm.prototype.init = function (config) {
                var _this = this;
                this.TotalCount = config.Count;
                if (config.WorkflowDefList) {
                    this.WorkflowDefList = [];
                    config.WorkflowDefList.forEach(function (def) {
                        _this.WorkflowDefList.push(new workflowDefFile.WorkflowDefDom.WorkflowDefDomVm(def));
                    });
                }
            };
            MyWorkflowDomVm.prototype.loadData = function (fun) {
                var _this = this;
                urlFile.Core.AkPost("/workflow/MyWorkflow/MyWork", {}, function (a) {
                    var _data = a;
                    _this.init(_data);
                    _this.IsChange = true;
                    fun();
                });
            };
            return MyWorkflowDomVm;
        }(domCore.DomVm));
        MyWorkflowDom.MyWorkflowDomVm = MyWorkflowDomVm;
        var MyWorkflowDomStates = (function (_super) {
            __extends(MyWorkflowDomStates, _super);
            function MyWorkflowDomStates() {
                _super.apply(this, arguments);
            }
            return MyWorkflowDomStates;
        }(domCore.DomStates));
        MyWorkflowDom.MyWorkflowDomStates = MyWorkflowDomStates;
        var MyWorkflowDomProps = (function (_super) {
            __extends(MyWorkflowDomProps, _super);
            function MyWorkflowDomProps() {
                _super.apply(this, arguments);
            }
            return MyWorkflowDomProps;
        }(domCore.DomProps));
        MyWorkflowDom.MyWorkflowDomProps = MyWorkflowDomProps;
    })(MyWorkflowDom = exports.MyWorkflowDom || (exports.MyWorkflowDom = {}));
});
