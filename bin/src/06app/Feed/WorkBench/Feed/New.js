var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Util", "react"], function (require, exports, domFile, utilFile, React) {
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
                return React.createElement("div", {className: "Hu-news-item"}, React.createElement("div", null, React.createElement("img", {src: "../lib/akCss/images/user.jpg"}), React.createElement("a", {href: ""}, this.props.Vm.FromUserName), React.createElement("a", null, utilFile.Core.Util.DateFormat(new Date(Date.parse(this.props.Vm.CreateDateTime.replace(/\-/g, "/"))), "hh:mm:ss "))), React.createElement("div", null, React.createElement("span", {dangerouslySetInnerHTML: { __html: this.props.Vm.Content }})));
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
