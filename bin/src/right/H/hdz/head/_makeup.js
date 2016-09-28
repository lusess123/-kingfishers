var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../05tool/ALink"], function (require, exports, domFile, React, alinkFile) {
    "use strict";
    var domCore = domFile.Core;
    var ALink = alinkFile.ui.ALinkReact;
    var makeup;
    (function (makeup) {
        var makeupAction = (function (_super) {
            __extends(makeupAction, _super);
            function makeupAction() {
                _super.apply(this, arguments);
            }
            return makeupAction;
        }(domCore.DomAction));
        makeup.makeupAction = makeupAction;
        var makeupReact = (function (_super) {
            __extends(makeupReact, _super);
            function makeupReact() {
                _super.apply(this, arguments);
                this.state = new makeupStates();
            }
            makeupReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "makeup right"}, React.createElement("a", {className: "acsPointer"}, React.createElement("i", {className: "fa fa-comment"})), React.createElement("img", {src: "../lib/akCss/images/user.jpg"}), React.createElement("a", {onClick: function () { _this.fun_PersonShow(); }}, React.createElement("span", null, "十八木林森"), React.createElement("i", {className: "acsPointer fa fa-sort-desc " + (this.props.Vm.IsPersonShow ? "active" : "")})), React.createElement("ul", {className: (this.props.Vm.IsPersonShow ? "" : "hide")}, React.createElement("li", null, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "个人信息")), React.createElement("li", null, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "修改密码")), React.createElement("li", null, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(true), href: "$..$", children: null}, "安全退出"))));
            };
            makeupReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            makeupReact.prototype.fun_PersonShow = function () {
                this.props.Vm.IsPersonShow = !this.props.Vm.IsPersonShow;
                this.forceUpdate();
            };
            return makeupReact;
        }(domCore.DomReact));
        makeup.makeupReact = makeupReact;
        var makeupVm = (function (_super) {
            __extends(makeupVm, _super);
            function makeupVm() {
                _super.apply(this, arguments);
                this.ReactType = makeupReact;
                //public constrctor(config: ImakeupConfig) {
                //    super();
                //}
                this.IsPersonShow = false;
            }
            return makeupVm;
        }(domCore.DomVm));
        makeup.makeupVm = makeupVm;
        var makeupStates = (function (_super) {
            __extends(makeupStates, _super);
            function makeupStates() {
                _super.apply(this, arguments);
            }
            return makeupStates;
        }(domCore.DomStates));
        makeup.makeupStates = makeupStates;
        var makeupProps = (function (_super) {
            __extends(makeupProps, _super);
            function makeupProps() {
                _super.apply(this, arguments);
            }
            return makeupProps;
        }(domCore.DomProps));
        makeup.makeupProps = makeupProps;
    })(makeup = exports.makeup || (exports.makeup = {}));
});
