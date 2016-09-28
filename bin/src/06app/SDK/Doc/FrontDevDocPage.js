var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "react"], function (require, exports, iocFile, basewedPageFile, React) {
    "use strict";
    var FrontDevDocPage;
    (function (FrontDevDocPage) {
        var FrontDevDocPageAction = (function (_super) {
            __extends(FrontDevDocPageAction, _super);
            function FrontDevDocPageAction() {
                _super.apply(this, arguments);
            }
            return FrontDevDocPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        FrontDevDocPage.FrontDevDocPageAction = FrontDevDocPageAction;
        var FrontDevDocPageReact = (function (_super) {
            __extends(FrontDevDocPageReact, _super);
            function FrontDevDocPageReact() {
                _super.apply(this, arguments);
                this.state = new FrontDevDocPageStates();
            }
            FrontDevDocPageReact.prototype.fun_isShowClick = function () {
                this.props.Vm.IsShowPanel = !this.props.Vm.IsShowPanel;
                this.forceUpdate();
            };
            FrontDevDocPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-title Hu-pointer", onClick: function () { _this.fun_isShowClick(); }}, React.createElement("i", {className: (this.props.Vm.IsShowPanel ? " icon-caret-right fa fa-caret-square-o-right" : " icon-caret-down fa fa-caret-square-o-down")}), React.createElement("span", {className: "Hu-title Hs-fw m-x "}, "浏览器扩展程序安装")), React.createElement("div", {className: "Hc-list-item " + (this.props.Vm.IsShowPanel ? "hide" : "")}, React.createElement("p", {className: "Hs-fw"}, "1.安装一个谷歌访问助手", React.createElement("a", {className: "m-x", href: "http://192.168.66.3:5001/%E8%B0%B7%E6%AD%8C%E8%AE%BF%E9%97%AE%E5%8A%A9%E6%89%8B2.1.9.crx"}, "点击下载")), React.createElement("div", {className: "m-x-md"}, React.createElement("p", null, "安装步骤："), React.createElement("p", null, "第一步、打开我们的chrome浏览器，然后单击右上角的那个菜单工具图标。"), React.createElement("p", null, "第二步、在弹出的菜单中，选择【更多工具】-->【扩展程序】进入扩展程序管理界面。"), React.createElement("p", null, "第三步、把下载好的后缀为“.crx”的文件拖入这个界面。"), React.createElement("p", null, "第四步、界面弹出提示是否要新增这个扩展程序，单击【添加】即可。"), React.createElement("p", null, "第五步、现在我们看到这个扩展程序已经安装上来了，只要把这个程序后面的【启用】的勾打上就是了。")), React.createElement("p", {className: "Hs-fw"}, "2.安装Clear Cache清理缓存"), React.createElement("p", {className: "Hs-fw"}, "3.安装JsonView访问Json类型文件"), React.createElement("p", {className: "Hs-fw"}, "4.安装React Developer Tools"), React.createElement("p", {className: "Hs-fw"}, "5.安装react-detector"), React.createElement("div", {className: "m-x-md"}, React.createElement("p", null, "添加扩展程序步骤："), React.createElement("p", null, "第一步、单击右上角菜单按钮选择【更多工具】-->【扩展程序】进入扩展程序界面。"), React.createElement("p", null, "第二步、单击【获取更多扩展程序】链接进入【Chrome网上应用店】。"), React.createElement("p", null, "第三步、在左侧功能区【搜索框】中输入对应扩展程序名称，下方选择【扩展程序】。"), React.createElement("p", null, "第四步、在右侧搜索结果中选择对应扩展程序，单击【+添加至CHROME】。"), React.createElement("p", null, "第五步、界面弹出提示是否添加扩展程序，单击【添加扩展程序】，查看扩展程序界面扩展程序是否启用，如未启用则单击【启用】。 ")))));
            };
            return FrontDevDocPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        FrontDevDocPage.FrontDevDocPageReact = FrontDevDocPageReact;
        var FrontDevDocPageVm = (function (_super) {
            __extends(FrontDevDocPageVm, _super);
            function FrontDevDocPageVm(config) {
                _super.call(this);
                this.ReactType = FrontDevDocPageReact;
                this.Title = "FrontDevDocPage页面;";
                this.IsShowPanel = false;
            }
            FrontDevDocPageVm.prototype.init = function (config) {
            };
            FrontDevDocPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return FrontDevDocPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        FrontDevDocPage.FrontDevDocPageVm = FrontDevDocPageVm;
        var FrontDevDocPageStates = (function (_super) {
            __extends(FrontDevDocPageStates, _super);
            function FrontDevDocPageStates() {
                _super.apply(this, arguments);
            }
            return FrontDevDocPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        FrontDevDocPage.FrontDevDocPageStates = FrontDevDocPageStates;
        var FrontDevDocPageProps = (function (_super) {
            __extends(FrontDevDocPageProps, _super);
            function FrontDevDocPageProps() {
                _super.apply(this, arguments);
            }
            return FrontDevDocPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        FrontDevDocPage.FrontDevDocPageProps = FrontDevDocPageProps;
        iocFile.Core.Ioc.Current().RegisterType("FRONTDEVDOCPAGE", basewedPageFile.Web.BaseWebPageVm, FrontDevDocPageVm);
    })(FrontDevDocPage = exports.FrontDevDocPage || (exports.FrontDevDocPage = {}));
});
