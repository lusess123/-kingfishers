var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../04page/BaseWebPage", "./../../02col/03selector/BaseTree", "react"], function (require, exports, iocFile, basewedPageFile, baseTreeFile, React) {
    "use strict";
    var TreeTest;
    (function (TreeTest) {
        var TreeTestAction = (function (_super) {
            __extends(TreeTestAction, _super);
            function TreeTestAction() {
                _super.apply(this, arguments);
            }
            return TreeTestAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        TreeTest.TreeTestAction = TreeTestAction;
        var TreeTestReact = (function (_super) {
            __extends(TreeTestReact, _super);
            function TreeTestReact() {
                _super.apply(this, arguments);
                this.state = new TreeTestStates();
            }
            TreeTestReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hz-scroll Hg-overflow-auto"}, React.createElement("div", {className: "text-left " + new Date().getDay().toString()}, "1", this.props.Vm.TreeObj1.intoDom()), React.createElement("div", null, React.createElement("textarea", {value: this.props.Vm.Txt1})), React.createElement("div", {className: "text-left "}, "2", this.props.Vm.TreeObj2.intoDom()), React.createElement("div", null, React.createElement("textarea", {value: this.props.Vm.Txt2})));
            };
            return TreeTestReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        TreeTest.TreeTestReact = TreeTestReact;
        var TreeTestVm = (function (_super) {
            __extends(TreeTestVm, _super);
            function TreeTestVm() {
                var _this = this;
                _super.call(this);
                this.ReactType = TreeTestReact;
                this.TreeObj1 = new baseTreeFile.ui.BaseTreeVm();
                this.TreeObj2 = new baseTreeFile.ui.BaseTreeVm();
                this.TreeObj1.RegName = "GroupCodeTable";
                this.TreeObj1.Tree.IsMultiSelect = true;
                this.TreeObj1.ChangeEventFun = function (val, col) {
                    _this.Txt1 = val;
                    _this.forceUpdate("");
                    return true;
                };
                this.TreeObj2.ChangeEventFun = function (val, col) {
                    _this.Txt2 = val;
                    _this.forceUpdate("");
                    return true;
                };
            }
            TreeTestVm.prototype.loadPage = function (callback) {
                this.TreeObj1.IsChange = true;
                if (callback) {
                    callback();
                }
            };
            return TreeTestVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        TreeTest.TreeTestVm = TreeTestVm;
        var TreeTestStates = (function (_super) {
            __extends(TreeTestStates, _super);
            function TreeTestStates() {
                _super.apply(this, arguments);
            }
            return TreeTestStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        TreeTest.TreeTestStates = TreeTestStates;
        var TreeTestProps = (function (_super) {
            __extends(TreeTestProps, _super);
            function TreeTestProps() {
                _super.apply(this, arguments);
            }
            return TreeTestProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        TreeTest.TreeTestProps = TreeTestProps;
        iocFile.Core.Ioc.Current().RegisterType("TREETEST", basewedPageFile.Web.BaseWebPageVm, TreeTestVm);
    })(TreeTest = exports.TreeTest || (exports.TreeTest = {}));
});
