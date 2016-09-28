var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var title;
    (function (title) {
        var titleAction = (function (_super) {
            __extends(titleAction, _super);
            function titleAction() {
                _super.apply(this, arguments);
            }
            return titleAction;
        }(domCore.DomAction));
        title.titleAction = titleAction;
        var titleReact = (function (_super) {
            __extends(titleReact, _super);
            function titleReact() {
                _super.apply(this, arguments);
                this.state = new titleStates();
            }
            titleReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "title-area"}, React.createElement("img", {src: "../../AtawStatic/lib/01Base/15Images/niao_logo.png"}), React.createElement("b", null, "菜鸟办公"), React.createElement("div", {className: "toggle-topbar menu-icon", onClick: function () { _this.fun_toggle(); }}, React.createElement("a", null, React.createElement("span", null))));
            };
            titleReact.prototype.fun_toggle = function () {
                this.props.Vm.fun_toggle();
            };
            titleReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return titleReact;
        }(domCore.DomReact));
        title.titleReact = titleReact;
        var titleVm = (function (_super) {
            __extends(titleVm, _super);
            function titleVm() {
                _super.apply(this, arguments);
                this.ReactType = titleReact;
            }
            titleVm.prototype.fun_toggle = function () {
                this.emitAppEvent("_title_toggle", this.UniId);
            };
            return titleVm;
        }(domCore.DomVm));
        title.titleVm = titleVm;
        var titleStates = (function (_super) {
            __extends(titleStates, _super);
            function titleStates() {
                _super.apply(this, arguments);
            }
            return titleStates;
        }(domCore.DomStates));
        title.titleStates = titleStates;
        var titleProps = (function (_super) {
            __extends(titleProps, _super);
            function titleProps() {
                _super.apply(this, arguments);
            }
            return titleProps;
        }(domCore.DomProps));
        title.titleProps = titleProps;
    })(title = exports.title || (exports.title = {}));
});
