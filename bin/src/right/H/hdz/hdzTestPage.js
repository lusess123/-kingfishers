var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "./../../../05tool/ALink", "./component/headListMenu"], function (require, exports, React, iocFile, basewedPageFile, alinkFile, headListMenuFile) {
    "use strict";
    var ALink = alinkFile.ui.ALinkReact;
    var headListMenuVm = headListMenuFile.headListMenu.headListMenuVm;
    var hdzTestPage;
    (function (hdzTestPage) {
        var hdzTestPageAction = (function (_super) {
            __extends(hdzTestPageAction, _super);
            function hdzTestPageAction() {
                _super.apply(this, arguments);
            }
            return hdzTestPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        hdzTestPage.hdzTestPageAction = hdzTestPageAction;
        var hdzTestPageReact = (function (_super) {
            __extends(hdzTestPageReact, _super);
            function hdzTestPageReact() {
                _super.apply(this, arguments);
                this.state = new hdzTestPageStates();
            }
            hdzTestPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "acsMarginT3 acsPadding3"}, React.createElement("div", null, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(false, { ClassName: "button large" }), href: "$ATAWPLATFORMPAGE$", children: null}, "新版大平台（需要添加版本号) ")), React.createElement("div", {onClick: function () { _this.fun_ItemClick(); }}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(false, { ClassName: "button large" }), href: "", children: null}, "头部导航列表组件"), React.createElement("div", {className: "acsMarginB1" + (this.props.Vm.IsItemShow ? "" : " hide")}, this.props.Vm.HeadListMenuObj.intoDom())), React.createElement("h4", null, "配置报表自定义列"), this._initCols());
            };
            hdzTestPageReact.prototype._initCols = function () {
                var _this = this;
                return React.createElement("div", {className: "m-t-md"}, React.createElement("div", {className: "m-t"}, React.createElement("h5", null, "全部"), React.createElement("ul", {className: "ACT-USERABLE Hm-custom-col clearfix"}, React.createElement("li", {className: "Hz-checked"}, "标题"), React.createElement("li", {className: "Hz-checked"}, "当前步骤"), React.createElement("li", null, "创建人"), React.createElement("li", {className: "Hz-checked"}, "申请人"), React.createElement("li", {className: "Hz-checked"}, "最后修改时间"), React.createElement("li", null, "是否完成"), React.createElement("li", null, "应用到工作流"))), React.createElement("div", {className: "m-t"}, React.createElement("h5", null, "当前字段"), React.createElement("ul", {className: "ACT-CURRENT Hm-custom-col"}, React.createElement("li", null, "标题"), React.createElement("li", {className: (this.props.Vm.IsLeft ? " Ha-translate-xy " : "") + (this.props.Vm.IsRight ? " Ha-translate-x-r" : " ")}, "当前步骤"), React.createElement("li", {className: (this.props.Vm.IsLeft ? "Ha-translate-x " : " ") + (this.props.Vm.IsRight ? "Ha-translate-x-r" : "")}, React.createElement("i", {className: "fa fa-chevron-left", onClick: function () { _this.fun_RightToLeft(); }}), " 申请人", React.createElement("i", {className: "fa fa-chevron-right", onClick: function () { _this.fun_LeftToRight(); }})), React.createElement("li", null, "最后修改时间"))));
            };
            hdzTestPageReact.prototype.fun_UserableClick = function () {
            };
            hdzTestPageReact.prototype.fun_RightToLeft = function () {
                //var x = -50;
                // var _this = $(this);
                // _this.parent().css("transform","translateX(-50px)");
                this.props.Vm.IsLeft = true;
                this.forceUpdate();
            };
            hdzTestPageReact.prototype.fun_LeftToRight = function () {
                //var x = -50;
                // var _this = $(this);
                // _this.parent().css("transform","translateX(-50px)");
                this.props.Vm.IsRight = true;
                this.forceUpdate();
            };
            hdzTestPageReact.prototype.fun_ItemClick = function () {
                this.props.Vm.IsItemShow = !this.props.Vm.IsItemShow;
                this.forceUpdate();
            };
            return hdzTestPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        hdzTestPage.hdzTestPageReact = hdzTestPageReact;
        var hdzTestPageVm = (function (_super) {
            __extends(hdzTestPageVm, _super);
            //  public UsableItemList: Array<kvFile.data.KVS> = new Array<kvFile.data.KVS>();
            //   public CurrentItemList: Array<kvFile.data.KVS> = new Array<kvFile.data.KVS>();
            //public static Test(num?: number): hdzTestPageVm {
            //    var bean = new ListboxVm();
            //    if (num == undefined) {
            //        num = 7
            //    }
            //    //给元素添加
            //    for (var i = 0; i <= num; i++) {
            //        bean.ItemList = bean.ItemList.concat(
            //            { Value: i.toString(), Text: "选项 " + i, Select: false }
            //        );
            //    }
            //    return bean;
            //}
            function hdzTestPageVm(config) {
                _super.call(this);
                this.ReactType = hdzTestPageReact;
                this.HeadListMenuObj = new headListMenuVm();
                this.IsItemShow = false;
                this.IsLeft = false;
            }
            return hdzTestPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        hdzTestPage.hdzTestPageVm = hdzTestPageVm;
        var hdzTestPageStates = (function (_super) {
            __extends(hdzTestPageStates, _super);
            function hdzTestPageStates() {
                _super.apply(this, arguments);
            }
            return hdzTestPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        hdzTestPage.hdzTestPageStates = hdzTestPageStates;
        var hdzTestPageProps = (function (_super) {
            __extends(hdzTestPageProps, _super);
            function hdzTestPageProps() {
                _super.apply(this, arguments);
            }
            return hdzTestPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        hdzTestPage.hdzTestPageProps = hdzTestPageProps;
        iocFile.Core.Ioc.Current().RegisterType("HDZTESTPAGE", basewedPageFile.Web.BaseWebPageVm, hdzTestPageVm);
    })(hdzTestPage = exports.hdzTestPage || (exports.hdzTestPage = {}));
});
