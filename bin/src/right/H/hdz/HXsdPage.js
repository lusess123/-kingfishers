var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "react", "./../../../05tool/Tree"], function (require, exports, iocFile, basewedPageFile, React, treeFile) {
    "use strict";
    var HXsdPage;
    (function (HXsdPage) {
        var HXsdPageAction = (function (_super) {
            __extends(HXsdPageAction, _super);
            function HXsdPageAction() {
                _super.apply(this, arguments);
            }
            return HXsdPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        HXsdPage.HXsdPageAction = HXsdPageAction;
        var HXsdPageReact = (function (_super) {
            __extends(HXsdPageReact, _super);
            function HXsdPageReact() {
                _super.apply(this, arguments);
                this.state = new HXsdPageStates();
            }
            HXsdPageReact.prototype.pSender = function () {
                // this.props.Vm.treeObj.NNodeTplFun = (node) => { return this.createTreeNodeTpl(node); }
                return React.createElement("div", null, React.createElement("ul", {className: "col-lg-3 col-md-3 col-sm-3 Hm-xsd-list"}, React.createElement("li", null, "图标说明："), React.createElement("li", null, React.createElement("i", {className: "xsd-icon-qjjd fa-2x"}), React.createElement("span", null, "全局简单类型")), React.createElement("li", null, React.createElement("i", {className: "xsd-icon-qjfz fa-2x"}), React.createElement("span", null, "全局复杂类型")), React.createElement("li", null, React.createElement("i", {className: "xsd-icon-jg fa-2x"}), React.createElement("span", null, "架构文档")), React.createElement("li", null, React.createElement("i", {className: "xsd-icon-inc fa-2x"}), React.createElement("span", null)), React.createElement("li", null, React.createElement("i", {className: "xsd-icon-qjtxz fa-2x"}), React.createElement("span", null, "全局特性组")), React.createElement("li", null, React.createElement("i", {className: "xsd-icon-qjtx fa-2x"}), React.createElement("span", null, "全局特性")), React.createElement("li", null, React.createElement("i", {className: "xsd-icon-jgqjmx3 fa-2x"}), React.createElement("span", null)), React.createElement("li", null, React.createElement("i", {className: "xsd-icon-qjmx2 fa-2x"}), React.createElement("span", null)), React.createElement("li", null, React.createElement("i", {className: "xsd-icon-qjmx1 fa-2x"}), React.createElement("span", null, "全局元素"))), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-6"}, this.props.Vm.treeObj.intoDom()));
            };
            HXsdPageReact.prototype.createTreeNodeTpl = function (node) {
                var _this = this;
                if (node.IsRoot) {
                    return null;
                }
                else {
                    return [(React.createElement("span", {className: "Hu-note Hu-pointer" + (this.props.Vm.NoteIsHidden ? " Hu-note-expend" : ""), title: "JavaScript是一门为你的网站添加交互功能的编程语言。（例如：游戏，响应按钮点击或者表单数据提交，动态样式，动画等）。本文帮助你开始这门激动人心的语言并且告诉你什么是它可以实现的。", onClick: function () { _this.fun_NoteClick(node); }}, "JavaScript是一门为你的网站添加交互功能的编程语言。（例如：游戏，响应按钮点击或者表单数据提交，动态样式，动画等）。本文帮助你开始这门激动人心的语言并且告诉你什么是它可以实现的。"))];
                }
            };
            HXsdPageReact.prototype.fun_NoteClick = function (node) {
                this.props.Vm.NoteIsHidden = !this.props.Vm.NoteIsHidden;
                this.props.Vm.treeObj.IsChange = true;
                node.IsChange = true;
                this.props.Vm.treeObj.forceUpdate("");
                this.forceUpdate();
            };
            return HXsdPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        HXsdPage.HXsdPageReact = HXsdPageReact;
        var HXsdPageVm = (function (_super) {
            __extends(HXsdPageVm, _super);
            function HXsdPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = HXsdPageReact;
                this.Title = "HXsdPage页面;";
                this.NoteIsHidden = false;
                if (config) {
                    if (config.StyleName) {
                        this.StyleName = config.StyleName;
                    }
                }
                this.treeObj = new treeFile.ui.TreeVm({
                    StyleName: this.StyleName ? this.StyleName : "Base",
                    NNodeTplFun: function (node) {
                        if (node.IsRoot) {
                            return null;
                        }
                        else {
                            return [(React.createElement("span", {className: "Hu-note Hu-pointer" + (_this.NoteIsHidden ? " Hu-note-expend" : ""), title: "JavaScript是一门为你的网站添加交互功能的编程语言。（例如：游戏，响应按钮点击或者表单数据提交，动态样式，动画等）。本文帮助你开始这门激动人心的语言并且告诉你什么是它可以实现的。", onClick: function () { _this.fun_NoteClick(node); }}, "JavaScript是一门为你的网站添加交互功能的编程语言。（例如：游戏，响应按钮点击或者表单数据提交，动态样式，动画等）。本文帮助你开始这门激动人心的语言并且告诉你什么是它可以实现的。"))];
                        }
                    }
                });
                this.treeObj.initTreeVm({
                    CODE_VALUE: "0", CODE_TEXT: "根",
                    Children: [
                        {
                            CODE_VALUE: "key1", CODE_TEXT: " MvcConfig.xsd", ExtData: { Icon: "xsd-icon-jg", RightValue: "" },
                            Children: [
                                { CODE_VALUE: "key", CODE_TEXT: "include-> DataRoute.xsd", ExtData: { Icon: "xsd-icon-inc", RightValue: "" } },
                                {
                                    CODE_VALUE: "key2", CODE_TEXT: "dataroutes", ExtData: { Icon: "xsd-icon-qjfz", RightValue: "" },
                                    Children: [
                                        { CODE_VALUE: "key22", CODE_TEXT: "DataRoute routesInfo", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } },
                                        { CODE_VALUE: "key23", CODE_TEXT: "Name xs:string", ExtData: { Icon: "xsd-icon-qjtx", RightValue: "" } }
                                    ]
                                },
                                {
                                    CODE_VALUE: "key3", CODE_TEXT: "routes", ExtData: { Icon: "xsd-icon-qjfz", RightValue: "" },
                                    Children: [
                                        { CODE_VALUE: "key32", CODE_TEXT: "RegName xs:string", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } }
                                    ]
                                },
                                {
                                    CODE_VALUE: "key4", CODE_TEXT: "AtawMvcConfig", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" },
                                    Children: [
                                        { CODE_VALUE: "key42", CODE_TEXT: "AppName xs:string", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } },
                                        { CODE_VALUE: "key43", CODE_TEXT: "DataRoutes dataroutes", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } },
                                        { CODE_VALUE: "key44", CODE_TEXT: "Routes routes", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } }
                                    ]
                                },
                            ]
                        },
                        {
                            CODE_VALUE: "key5", CODE_TEXT: " DataRoute.xsd", ExtData: { Icon: "xsd-icon-jg", RightValue: "" },
                            Children: [
                                {
                                    CODE_VALUE: "key6", CODE_TEXT: "routesInfo", ExtData: { Icon: "xsd-icon-qjfz", RightValue: "" },
                                    Children: [
                                        { CODE_VALUE: "key62", CODE_TEXT: "ControlName xs:string", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } },
                                        { CODE_VALUE: "key63", CODE_TEXT: "ActionName xs:string", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } },
                                        { CODE_VALUE: "key64", CODE_TEXT: "AreaName xs:string", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } },
                                        { CODE_VALUE: "key65", CODE_TEXT: "Param xs:string", ExtData: { Icon: "xsd-icon-qjys", RightValue: "" } },
                                        { CODE_VALUE: "key66", CODE_TEXT: "Name xs:string", ExtData: { Icon: "xsd-icon-qjtx", RightValue: "" } }
                                    ]
                                }
                            ]
                        }
                    ]
                });
            }
            HXsdPageVm.prototype.fun_NoteClick = function (node) {
                this.NoteIsHidden = !this.NoteIsHidden;
                //this.treeObj.forceUpdate("");
                this.treeObj.IsChange = true;
                node.IsChange = true;
                this.treeObj.forceUpdate("");
                this.forceUpdate("");
            };
            HXsdPageVm.prototype.init = function (config) {
            };
            HXsdPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return HXsdPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        HXsdPage.HXsdPageVm = HXsdPageVm;
        var HXsdPageStates = (function (_super) {
            __extends(HXsdPageStates, _super);
            function HXsdPageStates() {
                _super.apply(this, arguments);
            }
            return HXsdPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        HXsdPage.HXsdPageStates = HXsdPageStates;
        var HXsdPageProps = (function (_super) {
            __extends(HXsdPageProps, _super);
            function HXsdPageProps() {
                _super.apply(this, arguments);
            }
            return HXsdPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        HXsdPage.HXsdPageProps = HXsdPageProps;
        iocFile.Core.Ioc.Current().RegisterType("HXsdPage", basewedPageFile.Web.BaseWebPageVm, HXsdPageVm);
    })(HXsdPage = exports.HXsdPage || (exports.HXsdPage = {}));
});
