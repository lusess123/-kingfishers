var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../05tool/ALink"], function (require, exports, domFile, React, alinkFile) {
    "use strict";
    var domCore = domFile.Core;
    var ALink = alinkFile.ui.ALinkReact;
    var shortcut;
    (function (shortcut) {
        var shortcutAction = (function (_super) {
            __extends(shortcutAction, _super);
            function shortcutAction() {
                _super.apply(this, arguments);
            }
            return shortcutAction;
        }(domCore.DomAction));
        shortcut.shortcutAction = shortcutAction;
        var shortcutReact = (function (_super) {
            __extends(shortcutReact, _super);
            function shortcutReact() {
                _super.apply(this, arguments);
                this.state = new shortcutStates();
            }
            shortcutReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("aside", {className: "shortcut left " + (this.props.Vm.IsShortCutShow ? " hide" : "")}, React.createElement("div", null, React.createElement("span", null, "我的应用"), React.createElement("span", {className: "right acsPointer" + (this.props.Vm.IsMinusShow ? " " : " hide"), onClick: function () { _this.fun_Mclick(); }}, "管理"), React.createElement("span", {className: "right acsPointer del-btn" + (this.props.Vm.IsMinusShow ? " hide" : " "), onClick: function () { _this.fun_Mclick(); }}, "取消"), React.createElement("span", {className: "right acsPointer save-btn" + (this.props.Vm.IsMinusShow ? " hide" : " ")}, "保存")), React.createElement("ul", {className: "clearfix"}, React.createElement("li", {className: "current"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(false, { ClassName: " " }), href: "", children: null}, React.createElement("img", {src: "../lib/akCss/images/apply/inform.png"}), React.createElement("span", null, "通知"), React.createElement("em", {className: (this.props.Vm.IsMinusShow ? "" : " hide")}, "12"), React.createElement("i", {className: "fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate")}))), React.createElement("li", {className: (this.props.Vm.IsApplyItem ? " hide" : " ")}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(false, { ClassName: " " }), href: "", children: null}, React.createElement("img", {src: "../lib/akCss/images/apply/schedule.png"}), React.createElement("span", null, "请假"), React.createElement("em", {className: (this.props.Vm.IsMinusShow ? "" : " hide")}, "6"), React.createElement("i", {className: "fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate"), onClick: function () { _this.fun_emptyClick(); }}))), React.createElement("li", null, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(false, { ClassName: " " }), href: "", children: null}, React.createElement("img", {src: "../lib/akCss/images/apply/schedule.png"}), React.createElement("span", null, "日程"), React.createElement("i", {className: "fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate")}))), React.createElement("li", null, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(false, { ClassName: " " }), href: "", children: null}, React.createElement("img", {src: "../lib/akCss/images/apply/overtime.png"}), React.createElement("span", null, "加班"), React.createElement("i", {className: "fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate")}))), React.createElement("li", null, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(false, { ClassName: " " }), href: "", children: null}, React.createElement("img", {src: "../lib/akCss/images/apply/project.png"}), React.createElement("span", null, "项目"), React.createElement("i", {className: "fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate")}))), React.createElement("li", null, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(false, { ClassName: " " }), href: "", children: null}, React.createElement("img", {src: "../lib/akCss/images/apply/checking-in.png"}), React.createElement("span", null, "考勤"), React.createElement("i", {className: "fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate")}))), React.createElement("li", null, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(false, { ClassName: " " }), href: "", children: null}, React.createElement("img", {src: "../lib/akCss/images/apply/announcement.png"}), React.createElement("span", null, "公告"), React.createElement("i", {className: "fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate")}))), React.createElement("li", null, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(false, { ClassName: " " }), href: "", children: null}, React.createElement("img", {src: "../lib/akCss/images/apply/file.png"}), React.createElement("span", null, "文件"), React.createElement("i", {className: "fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate")}))), React.createElement("li", {onClick: function () { _this.fun_limitClick(); }}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(false, { ClassName: " " }), href: "", children: null}, React.createElement("img", {src: "../lib/akCss/images/apply/limits.png"}), React.createElement("span", null, "权限管理"), React.createElement("i", {className: "fa fa-times-circle" + (this.props.Vm.IsMinusShow ? " hide" : " animate")}))), React.createElement("li", null, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(false, { ClassName: " " }), href: "", children: null}, React.createElement("img", {src: "../lib/akCss/images/apply/add.png"}), React.createElement("span", null, "添加应用")))));
            };
            shortcutReact.prototype.fun_Mclick = function () {
                this.props.Vm.IsMinusShow = !this.props.Vm.IsMinusShow;
                this.forceUpdate();
            };
            //private fun_Dclick() {
            //    this.props.Vm.IsMinusShow = false;
            //    this.forceUpdate();
            //}
            shortcutReact.prototype.fun_emptyClick = function () {
                this.props.Vm.IsApplyItem = true;
                this.forceUpdate();
            };
            shortcutReact.prototype.fun_limitClick = function () {
                this.props.Vm.IsShortCutShow = true;
                this.props.Vm.fun_limitClick();
                this.forceUpdate();
            };
            shortcutReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return shortcutReact;
        }(domCore.DomReact));
        shortcut.shortcutReact = shortcutReact;
        var shortcutVm = (function (_super) {
            __extends(shortcutVm, _super);
            function shortcutVm(config) {
                _super.call(this);
                this.ReactType = shortcutReact;
                this.IsShortCutShow = false;
                this.IsMinusShow = true;
                this.IsApplyItem = false;
                this.IsApplyBtn = false;
                if (config) {
                    this.UniId = config.UniId;
                }
            }
            shortcutVm.prototype.fun_limitClick = function () {
                this.emitAppEvent("_shortcut", this.UniId);
            };
            return shortcutVm;
        }(domCore.DomVm));
        shortcut.shortcutVm = shortcutVm;
        var shortcutStates = (function (_super) {
            __extends(shortcutStates, _super);
            function shortcutStates() {
                _super.apply(this, arguments);
            }
            return shortcutStates;
        }(domCore.DomStates));
        shortcut.shortcutStates = shortcutStates;
        var shortcutProps = (function (_super) {
            __extends(shortcutProps, _super);
            function shortcutProps() {
                _super.apply(this, arguments);
            }
            return shortcutProps;
        }(domCore.DomProps));
        shortcut.shortcutProps = shortcutProps;
    })(shortcut = exports.shortcut || (exports.shortcut = {}));
});
