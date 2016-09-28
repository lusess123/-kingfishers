var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/Util", "./Feed/Feed", "react", "./../../../05tool/TabDom", "./WorkflowItem/MyWorkflowDom"], function (require, exports, domFile, utilFile, feedFile, React, tabDomFile, MyWorkflowFile) {
    "use strict";
    var domCore = domFile.Core;
    var WorkBench;
    (function (WorkBench) {
        var WorkBenchAction = (function (_super) {
            __extends(WorkBenchAction, _super);
            function WorkBenchAction() {
                _super.apply(this, arguments);
            }
            return WorkBenchAction;
        }(domCore.DomAction));
        WorkBench.WorkBenchAction = WorkBenchAction;
        var WorkBenchReact = (function (_super) {
            __extends(WorkBenchReact, _super);
            function WorkBenchReact() {
                _super.apply(this, arguments);
                this.state = new WorkBenchStates();
            }
            WorkBenchReact.prototype.pSender = function () {
                return React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 Hm-workflow"}, this.props.Vm.TabDomObj.intoDom());
            };
            WorkBenchReact.prototype.fun_TabsClick = function (index) {
                this.props.Vm.TabCurrentIndex = index;
                this.forceUpdate();
            };
            WorkBenchReact.prototype.fun_WorkShow = function () {
                this.props.Vm.IsWorkshow = !this.props.Vm.IsWorkshow;
                this.forceUpdate();
            };
            WorkBenchReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return WorkBenchReact;
        }(domCore.DomReact));
        WorkBench.WorkBenchReact = WorkBenchReact;
        var WorkBenchVm = (function (_super) {
            __extends(WorkBenchVm, _super);
            function WorkBenchVm(config) {
                _super.call(this);
                this.ReactType = WorkBenchReact;
                this.TabCurrentIndex = 0;
                this.IsWorkshow = false;
                this.FeedObj = new feedFile.Feed.FeedVm();
                this.WorkflowItemObj = new MyWorkflowFile.MyWorkflowDom.MyWorkflowDomVm();
                this.TabDomObj = new tabDomFile.TabDom.TabDomVm({
                    Items: [
                        {
                            Name: "mywork",
                            Title: "待处理事项",
                            IsActive: true,
                            ReloadFun: function (vm) {
                                utilFile.Core.Util.Cast(vm.DomObj).loadData(function () { vm.DomObj.forceUpdate(""); });
                            },
                            DomObj: this.WorkflowItemObj
                        },
                        {
                            Name: "feed",
                            Title: "动态",
                            IsActive: false,
                            ReloadFun: function (vm) {
                                utilFile.Core.Util.Cast(vm.DomObj).sysPage_load(function () {
                                    vm.DomObj.forceUpdate("");
                                });
                            },
                            DomObj: this.FeedObj
                        }
                    ]
                });
            }
            return WorkBenchVm;
        }(domCore.DomVm));
        WorkBench.WorkBenchVm = WorkBenchVm;
        var WorkBenchStates = (function (_super) {
            __extends(WorkBenchStates, _super);
            function WorkBenchStates() {
                _super.apply(this, arguments);
            }
            return WorkBenchStates;
        }(domCore.DomStates));
        WorkBench.WorkBenchStates = WorkBenchStates;
        var WorkBenchProps = (function (_super) {
            __extends(WorkBenchProps, _super);
            function WorkBenchProps() {
                _super.apply(this, arguments);
            }
            return WorkBenchProps;
        }(domCore.DomProps));
        WorkBench.WorkBenchProps = WorkBenchProps;
    })(WorkBench = exports.WorkBench || (exports.WorkBench = {}));
});
