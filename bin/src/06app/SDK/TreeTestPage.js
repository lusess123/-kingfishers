var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../04page/BaseWebPage", "react", "./../../02col/03selector/BaseTree"], function (require, exports, iocFile, basewedPageFile, React, TreeFile) {
    "use strict";
    var TreeTestPage;
    (function (TreeTestPage) {
        var TreeTestPageAction = (function (_super) {
            __extends(TreeTestPageAction, _super);
            function TreeTestPageAction() {
                _super.apply(this, arguments);
            }
            return TreeTestPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        TreeTestPage.TreeTestPageAction = TreeTestPageAction;
        var TreeTestPageReact = (function (_super) {
            __extends(TreeTestPageReact, _super);
            function TreeTestPageReact() {
                _super.apply(this, arguments);
                this.state = new TreeTestPageStates();
            }
            TreeTestPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", null, this._tDom(this.props.Vm.ModuleTreeObj)));
            };
            return TreeTestPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        TreeTestPage.TreeTestPageReact = TreeTestPageReact;
        var TreeTestPageVm = (function (_super) {
            __extends(TreeTestPageVm, _super);
            function TreeTestPageVm(config) {
                _super.call(this);
                this.ReactType = TreeTestPageReact;
                this.Title = "TreeTestPage页面;";
                // lodashFile.find();
            }
            TreeTestPageVm.prototype.init = function (config) {
            };
            TreeTestPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                this.ModuleTreeObj = new TreeFile.ui.BaseTreeVm({
                    RegName: "ModuleXmlTreeCodeTable",
                    IsRootExpand: true
                });
                // this.ModuleTreeObj.Tree.isr
                this.ModuleTreeObj.Tree.IsOnlyLeafCanSelect = true;
                this.ModuleTreeObj.Tree.onReactNodeClick(function (n) {
                    // alert(n.Value + "  " + n.Text);
                    alert(n.Value);
                    _this.forceUpdate("");
                    return true;
                });
                if (callback) {
                    callback();
                }
            };
            return TreeTestPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        TreeTestPage.TreeTestPageVm = TreeTestPageVm;
        var TreeTestPageStates = (function (_super) {
            __extends(TreeTestPageStates, _super);
            function TreeTestPageStates() {
                _super.apply(this, arguments);
            }
            return TreeTestPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        TreeTestPage.TreeTestPageStates = TreeTestPageStates;
        var TreeTestPageProps = (function (_super) {
            __extends(TreeTestPageProps, _super);
            function TreeTestPageProps() {
                _super.apply(this, arguments);
            }
            return TreeTestPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        TreeTestPage.TreeTestPageProps = TreeTestPageProps;
        iocFile.Core.Ioc.Current().RegisterType("TREETESTPAGE", basewedPageFile.Web.BaseWebPageVm, TreeTestPageVm);
    })(TreeTestPage = exports.TreeTestPage || (exports.TreeTestPage = {}));
});
