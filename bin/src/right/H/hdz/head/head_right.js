var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../05tool/ALink"], function (require, exports, domFile, React, alinkFile) {
    "use strict";
    var domCore = domFile.Core;
    var ALink = alinkFile.ui.ALinkReact;
    var headPosRight;
    (function (headPosRight) {
        var headPosRightAction = (function (_super) {
            __extends(headPosRightAction, _super);
            function headPosRightAction() {
                _super.apply(this, arguments);
            }
            return headPosRightAction;
        }(domCore.DomAction));
        headPosRight.headPosRightAction = headPosRightAction;
        var headPosRightReact = (function (_super) {
            __extends(headPosRightReact, _super);
            function headPosRightReact() {
                _super.apply(this, arguments);
                this.state = new headPosRightStates();
            }
            headPosRightReact.prototype.pSender = function () {
                return React.createElement("ul", {className: "vertical menu"}, React.createElement("li", {className: "acsPointer active"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "工作平台")), React.createElement("li", {className: "acsPointer active"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "通讯录")), React.createElement("li", {className: "acsPointer active"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "我的应用"), React.createElement("ul", null, React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "通知")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "请假")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "日程")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "加班")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "考勤")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "公告")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "文件")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "请假")))), React.createElement("li", {className: "acsPointer active"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "项目"), React.createElement("ul", null, React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "车辆管理")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "OA应用平台")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "九腾汽修")))), React.createElement("li", {className: "acsPointer active"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "设置"), React.createElement("ul", null, React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "个人信息")), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "修改密码")))), React.createElement("li", {className: "acsPointer"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "退出")));
            };
            headPosRightReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return headPosRightReact;
        }(domCore.DomReact));
        headPosRight.headPosRightReact = headPosRightReact;
        var headPosRightVm = (function (_super) {
            __extends(headPosRightVm, _super);
            function headPosRightVm() {
                _super.apply(this, arguments);
                this.ReactType = headPosRightReact;
            }
            return headPosRightVm;
        }(domCore.DomVm));
        headPosRight.headPosRightVm = headPosRightVm;
        var headPosRightStates = (function (_super) {
            __extends(headPosRightStates, _super);
            function headPosRightStates() {
                _super.apply(this, arguments);
            }
            return headPosRightStates;
        }(domCore.DomStates));
        headPosRight.headPosRightStates = headPosRightStates;
        var headPosRightProps = (function (_super) {
            __extends(headPosRightProps, _super);
            function headPosRightProps() {
                _super.apply(this, arguments);
            }
            return headPosRightProps;
        }(domCore.DomProps));
        headPosRight.headPosRightProps = headPosRightProps;
    })(headPosRight = exports.headPosRight || (exports.headPosRight = {}));
});
