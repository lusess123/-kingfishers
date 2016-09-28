var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../04page/BaseWebPage", "./../../05tool/tree"], function (require, exports, React, iocFile, basewedPageFile, treeFile) {
    "use strict";
    var NewCollect;
    (function (NewCollect) {
        var NewCollectAction = (function (_super) {
            __extends(NewCollectAction, _super);
            function NewCollectAction() {
                _super.apply(this, arguments);
            }
            return NewCollectAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewCollect.NewCollectAction = NewCollectAction;
        var NewCollectReact = (function (_super) {
            __extends(NewCollectReact, _super);
            function NewCollectReact() {
                _super.apply(this, arguments);
                this.state = new NewCollectStates();
            }
            NewCollectReact.prototype.pSender = function () {
                return React.createElement("div", {className: "acs-collect-panel"}, React.createElement("h6", {className: "acs-collect-title"}, "新增书签"), React.createElement("div", {className: "acsPaddingT1 clearfix"}, React.createElement("div", {className: "left"}, React.createElement("span", null, "名称：")), React.createElement("div", {className: "left acsWidthP85"}, React.createElement("input", {type: "text"}))), React.createElement("div", {className: "acsPaddingT1 clearfix"}, React.createElement("div", {className: "left"}, React.createElement("span", null, "地址：")), React.createElement("div", {className: "left acsWidthP85"}, React.createElement("input", {type: "text"}))), React.createElement("div", {className: "acs-folder-box"}, this.props.Vm.TreeObj.intoDom()), React.createElement("div", {className: "acs-collect-btn"}, React.createElement("div", {className: "left"}, React.createElement("a", {className: "button tiny default"}, "新建文件夹")), React.createElement("div", {className: "right"}, React.createElement("a", {className: "button tiny default acs-btn-save"}, "保存"), React.createElement("a", {className: "button tiny default"}, "取消"))));
            };
            NewCollectReact.prototype.fun_TreeNodeShow = function () {
                this.props.Vm.IsTreeNodeShow = !this.props.Vm.IsTreeNodeShow;
                this.forceUpdate();
            };
            return NewCollectReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewCollect.NewCollectReact = NewCollectReact;
        var NewCollectVm = (function (_super) {
            __extends(NewCollectVm, _super);
            function NewCollectVm() {
                _super.call(this);
                this.ReactType = NewCollectReact;
                this.TreeObj = new treeFile.ui.TreeVm();
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
                                { CODE_VALUE: "$rightPage$", CODE_TEXT: "权限配置" },
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
                                { CODE_VALUE: "$$module/AllControls/AllControls$", CODE_TEXT: "配置页面" }
                            ]
                        }
                    ]
                });
            }
            return NewCollectVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewCollect.NewCollectVm = NewCollectVm;
        var NewCollectStates = (function (_super) {
            __extends(NewCollectStates, _super);
            function NewCollectStates() {
                _super.apply(this, arguments);
            }
            return NewCollectStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewCollect.NewCollectStates = NewCollectStates;
        var NewCollectProps = (function (_super) {
            __extends(NewCollectProps, _super);
            function NewCollectProps() {
                _super.apply(this, arguments);
            }
            return NewCollectProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewCollect.NewCollectProps = NewCollectProps;
        iocFile.Core.Ioc.Current().RegisterType("NEWCOLLECTPAGE", basewedPageFile.Web.BaseWebPageVm, NewCollectVm);
    })(NewCollect = exports.NewCollect || (exports.NewCollect = {}));
});
