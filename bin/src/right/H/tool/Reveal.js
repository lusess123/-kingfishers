var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var Reveal;
    (function (Reveal) {
        var RevealAction = (function (_super) {
            __extends(RevealAction, _super);
            function RevealAction() {
                _super.apply(this, arguments);
            }
            return RevealAction;
        }(domCore.DomAction));
        Reveal.RevealAction = RevealAction;
        var RevealReact = (function (_super) {
            __extends(RevealReact, _super);
            function RevealReact() {
                _super.apply(this, arguments);
                this.state = new RevealStates();
            }
            RevealReact.prototype.fun_ModalClick = function () {
                this.props.Vm.IsModalShow = !this.props.Vm.IsModalShow;
                this.forceUpdate();
            };
            RevealReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals Hg-width acsMaxWidth100 " + (this.props.Vm.IsModalShow ? "" : "hide")}, React.createElement("div", {className: "Hm-modals Hm-modals-shape Hg-relative"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", {className: "acs-form clearfix"}, React.createElement("div", {className: "large-4 small-12 columns"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "right"}, this.props.Vm.LabelName)), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {type: "text", placeholder: "请输入..."})))), React.createElement("a", {className: "Hu-close Hu-pointer", onClick: function () { return _this.fun_ModalClick(); }}, React.createElement("i", {className: "fa fa-close"})), React.createElement("div", {className: "acsTextC acsMarginT3"}, React.createElement("a", {className: "button"}, "确定"))));
            };
            RevealReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return RevealReact;
        }(domCore.DomReact));
        Reveal.RevealReact = RevealReact;
        var RevealVm = (function (_super) {
            __extends(RevealVm, _super);
            function RevealVm(config) {
                _super.call(this);
                this.ReactType = RevealReact;
                this.Title = "";
                this.LabelName = "";
                this.IsModalShow = false;
                if (config.Title) {
                    this.Title = config.Title;
                }
                if (config.LabelName) {
                    this.LabelName = config.LabelName;
                }
            }
            return RevealVm;
        }(domCore.DomVm));
        Reveal.RevealVm = RevealVm;
        var RevealStates = (function (_super) {
            __extends(RevealStates, _super);
            function RevealStates() {
                _super.apply(this, arguments);
            }
            return RevealStates;
        }(domCore.DomStates));
        Reveal.RevealStates = RevealStates;
        var RevealProps = (function (_super) {
            __extends(RevealProps, _super);
            function RevealProps() {
                _super.apply(this, arguments);
            }
            return RevealProps;
        }(domCore.DomProps));
        Reveal.RevealProps = RevealProps;
    })(Reveal = exports.Reveal || (exports.Reveal = {}));
});
