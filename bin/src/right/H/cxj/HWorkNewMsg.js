var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var HWorkNewMsg;
    (function (HWorkNewMsg) {
        var HWorkNewMsgAction = (function (_super) {
            __extends(HWorkNewMsgAction, _super);
            function HWorkNewMsgAction() {
                _super.apply(this, arguments);
            }
            return HWorkNewMsgAction;
        }(domCore.DomAction));
        HWorkNewMsg.HWorkNewMsgAction = HWorkNewMsgAction;
        var HWorkNewMsgReact = (function (_super) {
            __extends(HWorkNewMsgReact, _super);
            function HWorkNewMsgReact() {
                _super.apply(this, arguments);
                this.state = new HWorkNewMsgStates();
            }
            HWorkNewMsgReact.prototype.pSender = function () {
                return React.createElement("div", {className: "acs-newinfo"}, React.createElement("ul", null, React.createElement("div", null, React.createElement("span", null, "10月2日"), React.createElement("span", null, "13: 45")), React.createElement("a", {className: "button tiny years"}, "2015"), React.createElement("li", {className: "acsPaddingT3-75"}, React.createElement("div", {className: "cusp"}, React.createElement("div", null, React.createElement("img", {src: "../lib/akCss/images/user.jpg"}), React.createElement("span", null, "信使系统管理员")), React.createElement("div", null, React.createElement("span", null, "处理了流程： 信使系统管理员2015/10/29请假 步骤：请假流程-部门主管审批信使" + ' ' + "系统管理员"))), React.createElement("em", null))), React.createElement("ul", null, React.createElement("div", null, React.createElement("span", null, "10月2日"), React.createElement("span", null, "13:45")), React.createElement("li", null, React.createElement("div", {className: "cusp"}, React.createElement("div", null, React.createElement("img", {src: "../lib/akCss/images/user.jpg"}), React.createElement("span", null, "信使系统管理员")), React.createElement("div", null, React.createElement("span", null, "处理了流程： 信使系统管理员2015/10/29请假 步骤：请假流程-部门主管审批信使" + ' ' + "系统管理员"), React.createElement("img", {className: "acsImg-70X70 acsMarginR0-625", src: "../lib/akCss/images/img1.png"}), React.createElement("img", {className: "acsImg-70X70 acsMarginR0-625", src: "../lib/akCss/images/img2.png"}), React.createElement("img", {className: "acsImg-70X70 acsMarginR0-625", src: "../lib/akCss/images/img3.png"}), React.createElement("img", {className: "acsImg-70X70 acsMarginR0-625", src: "../lib/akCss/images/img4.png"}), React.createElement("img", {className: "acsImg-70X70 acsMarginR0-625", src: "../lib/akCss/images/img5.png"}), React.createElement("img", {className: "acsImg-70X70", src: "../lib/akCss/images/img6.png"}))), React.createElement("em", null))), React.createElement("ul", null, React.createElement("div", null, React.createElement("span", null, "10月2日"), React.createElement("span", null, "13: 45")), React.createElement("li", {className: "acsPaddingB3-625"}, React.createElement("div", {className: "cusp"}, React.createElement("div", null, React.createElement("img", {src: "../lib/akCss/images/user.jpg"}), React.createElement("span", null, "信使系统管理员")), React.createElement("div", null, React.createElement("span", null, "处理了流程： 信使系统管理员2015/10/29请假 步骤：请假流程-部门主管审批信使" + ' ' + "系统管理员"))), React.createElement("em", null))), React.createElement("a", {className: "button"}, "加载更多"));
            };
            HWorkNewMsgReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return HWorkNewMsgReact;
        }(domCore.DomReact));
        HWorkNewMsg.HWorkNewMsgReact = HWorkNewMsgReact;
        var HWorkNewMsgVm = (function (_super) {
            __extends(HWorkNewMsgVm, _super);
            function HWorkNewMsgVm() {
                _super.apply(this, arguments);
                this.ReactType = HWorkNewMsgReact;
            }
            return HWorkNewMsgVm;
        }(domCore.DomVm));
        HWorkNewMsg.HWorkNewMsgVm = HWorkNewMsgVm;
        var HWorkNewMsgStates = (function (_super) {
            __extends(HWorkNewMsgStates, _super);
            function HWorkNewMsgStates() {
                _super.apply(this, arguments);
            }
            return HWorkNewMsgStates;
        }(domCore.DomStates));
        HWorkNewMsg.HWorkNewMsgStates = HWorkNewMsgStates;
        var HWorkNewMsgProps = (function (_super) {
            __extends(HWorkNewMsgProps, _super);
            function HWorkNewMsgProps() {
                _super.apply(this, arguments);
            }
            return HWorkNewMsgProps;
        }(domCore.DomProps));
        HWorkNewMsg.HWorkNewMsgProps = HWorkNewMsgProps;
    })(HWorkNewMsg = exports.HWorkNewMsg || (exports.HWorkNewMsg = {}));
});
