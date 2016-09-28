var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../04page/BaseWebPage", "./../../05tool/Tree", "./../../02col/02Mulite/SingleCheckBox", "react"], function (require, exports, iocFile, basewedPageFile, treeFile, singleCheckBoxFile, React) {
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
                return React.createElement("div", null, React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-6 col-xs-6"}, this.props.Vm.TreeObj.intoDom()), React.createElement("div", {className: "col-lg-8 col-md-8 col-sm-6 col-xs-6"}, React.createElement("h1", null, "是否多选: ", this.props.Vm.IsMulitTreeCkObj.intoDom()), React.createElement("h1", null, "被勾选时：", React.createElement("span", null, "关联父：", this.props.Vm.YesParentCkObj.intoDom()), React.createElement("span", null, "关联子：", this.props.Vm.YesChildCkObj.intoDom())), React.createElement("h1", null, "取消勾选时：", React.createElement("span", null, "关联父：", this.props.Vm.NoParentCkObj.intoDom()), React.createElement("span", null, "关联子：", this.props.Vm.NoChildCkObj.intoDom()))));
            };
            return TreeTestPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        TreeTestPage.TreeTestPageReact = TreeTestPageReact;
        var TreeTestPageVm = (function (_super) {
            __extends(TreeTestPageVm, _super);
            function TreeTestPageVm(config) {
                _super.call(this);
                this.ReactType = TreeTestPageReact;
            }
            TreeTestPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                this.TreeObj = new treeFile.ui.TreeVm({ IsMultiSelect: true });
                this.TreeObj.initTreeVm({
                    CODE_VALUE: "0", CODE_TEXT: "根",
                    Children: [
                        {
                            CODE_VALUE: "key1", CODE_TEXT: "基础信息",
                            Children: [
                                { CODE_VALUE: "$userinfo$", CODE_TEXT: "用户信息" }
                            ]
                        },
                        {
                            CODE_VALUE: "key2", CODE_TEXT: "权限管理",
                            Children: [
                                { CODE_VALUE: "$menu$", CODE_TEXT: "基础菜单" },
                                { CODE_VALUE: "$group$", CODE_TEXT: "组织机构" },
                                { CODE_VALUE: "$role$", CODE_TEXT: "角色管理" },
                                { CODE_VALUE: "$UserManagerPage$", CODE_TEXT: "用户管理" },
                                { CODE_VALUE: "$rightPage$", CODE_TEXT: "权限配置原型" },
                                { CODE_VALUE: "$rightMainPage$", CODE_TEXT: "权限配置页面" },
                            ]
                        },
                        {
                            CODE_VALUE: "key3", CODE_TEXT: "SDK学习案例",
                            Children: [
                                { CODE_VALUE: "$allcolpage$", CODE_TEXT: "所有的控件" },
                                { CODE_VALUE: "$BASELISTPAGE$", CODE_TEXT: "列表组件" },
                                { CODE_VALUE: "$BASEMDPAGE$", CODE_TEXT: "主从表测试" },
                                { CODE_VALUE: "$test1$", CODE_TEXT: "定时器组件" },
                                { CODE_VALUE: "$ORGLISTPAGE$", CODE_TEXT: "组织机构2" },
                                { CODE_VALUE: "$$module/AllControls/AllControls$", CODE_TEXT: "配置页面" },
                                {
                                    CODE_VALUE: "key4", CODE_TEXT: "团队成员",
                                    Children: [
                                        { CODE_VALUE: "$zykTestPage$", CODE_TEXT: "郑瑜琨" },
                                        { CODE_VALUE: "$sjTestPage$", CODE_TEXT: "沈君" }]
                                }
                            ]
                        }
                    ]
                });
                this.YesParentCkObj = new singleCheckBoxFile.ui.SingleCheckBoxVm();
                this.YesChildCkObj = new singleCheckBoxFile.ui.SingleCheckBoxVm();
                this.NoParentCkObj = new singleCheckBoxFile.ui.SingleCheckBoxVm();
                this.NoChildCkObj = new singleCheckBoxFile.ui.SingleCheckBoxVm();
                this.IsMulitTreeCkObj = new singleCheckBoxFile.ui.SingleCheckBoxVm();
                this.IsMulitTreeCkObj.dataValueSet(this.TreeObj.IsMultiSelect ? "true" : "false");
                this.YesParentCkObj.ChangeEventFun = function (val, col) {
                    _this.TreeObj.IsYesParent = val == "true";
                    return true;
                };
                this.YesChildCkObj.ChangeEventFun = function (val, col) {
                    _this.TreeObj.IsYesChild = val == "true";
                    return true;
                };
                this.NoParentCkObj.ChangeEventFun = function (val, col) {
                    _this.TreeObj.IsNoParent = val == "true";
                    return true;
                };
                this.NoChildCkObj.ChangeEventFun = function (val, col) {
                    _this.TreeObj.IsNoChild = val == "true";
                    return true;
                };
                this.IsMulitTreeCkObj.ChangeEventFun = function (val, col) {
                    _this.TreeObj.IsMultiSelect = val == "true";
                    return true;
                };
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
