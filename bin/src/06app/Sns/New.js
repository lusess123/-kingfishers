var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var Sns;
    (function (Sns) {
        var NewAction = (function (_super) {
            __extends(NewAction, _super);
            function NewAction() {
                _super.apply(this, arguments);
            }
            return NewAction;
        }(domCore.DomAction));
        Sns.NewAction = NewAction;
        var NewReact = (function (_super) {
            __extends(NewReact, _super);
            function NewReact() {
                _super.apply(this, arguments);
                this.state = new NewStates();
            }
            NewReact.prototype.pSender = function () {
                return React.createElement("div", {className: "clearfix"}, React.createElement("div", {className: "col-lg-1 col-md-1 col-sm-2 col-xs-2"}, React.createElement("img", {src: "http://placehold.it/80x80&amp;text=[img]"})), React.createElement("div", {className: "col-lg-11 col-md-11 col-sm-10 col-xs-10"}, React.createElement("p", null, React.createElement("strong", null, "Some Person said: "), " Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit.Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong."), React.createElement("ul", {className: "nav nav-pills"}, React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link", href: ""}, "Reply")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link", href: ""}, "Share")))));
            };
            NewReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return NewReact;
        }(domCore.DomReact));
        Sns.NewReact = NewReact;
        var NewVm = (function (_super) {
            __extends(NewVm, _super);
            function NewVm() {
                _super.apply(this, arguments);
                this.ReactType = NewReact;
            }
            return NewVm;
        }(domCore.DomVm));
        Sns.NewVm = NewVm;
        var NewStates = (function (_super) {
            __extends(NewStates, _super);
            function NewStates() {
                _super.apply(this, arguments);
            }
            return NewStates;
        }(domCore.DomStates));
        Sns.NewStates = NewStates;
        var NewProps = (function (_super) {
            __extends(NewProps, _super);
            function NewProps() {
                _super.apply(this, arguments);
            }
            return NewProps;
        }(domCore.DomProps));
        Sns.NewProps = NewProps;
    })(Sns = exports.Sns || (exports.Sns = {}));
});
