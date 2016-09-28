var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../01core/Url"], function (require, exports, domFile, React, urlFile) {
    "use strict";
    var domCore = domFile.Core;
    var BookMark;
    (function (BookMark) {
        var BookMarkAction = (function (_super) {
            __extends(BookMarkAction, _super);
            function BookMarkAction() {
                _super.apply(this, arguments);
            }
            return BookMarkAction;
        }(domCore.DomAction));
        BookMark.BookMarkAction = BookMarkAction;
        var BookMarkReact = (function (_super) {
            __extends(BookMarkReact, _super);
            function BookMarkReact() {
                _super.apply(this, arguments);
                this.state = new BookMarkStates();
            }
            BookMarkReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "left hide"}, React.createElement("li", null, React.createElement("a", {onClick: function () { _this.fun_collectClick(); }}, React.createElement("i", {className: "Hu-pointer fa fa-" + (this.props.Vm.IsCollect ? "hide" : "heart-o"), onClick: function () { _this.fun_AddcollectClick(); }}), React.createElement("i", {className: "Hu-pointer fa fa-" + (this.props.Vm.IsCollect ? "heart" : "hide")}), React.createElement("span", null, "收藏"))), React.createElement("li", null, React.createElement("a", null, React.createElement("i", {className: "fa fa-bars Hu-pointer"})), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {href: "#"}, "书签"), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {href: "#"}, "HTML")), React.createElement("li", null, React.createElement("a", {href: "#"}, "HTML")), React.createElement("li", null, React.createElement("a", {href: "#"}, "HTML")), React.createElement("li", null, React.createElement("a", {href: "#"}, "HTML")))))));
            };
            BookMarkReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            BookMarkReact.prototype.fun_collectClick = function () {
                this.props.Vm.IsCollect = !this.props.Vm.IsCollect;
                this.forceUpdate();
            };
            BookMarkReact.prototype.fun_AddcollectClick = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winNEWCOLLECTPAGE$", true);
            };
            return BookMarkReact;
        }(domCore.DomReact));
        BookMark.BookMarkReact = BookMarkReact;
        var BookMarkVm = (function (_super) {
            __extends(BookMarkVm, _super);
            function BookMarkVm() {
                _super.apply(this, arguments);
                this.ReactType = BookMarkReact;
            }
            return BookMarkVm;
        }(domCore.DomVm));
        BookMark.BookMarkVm = BookMarkVm;
        var BookMarkStates = (function (_super) {
            __extends(BookMarkStates, _super);
            function BookMarkStates() {
                _super.apply(this, arguments);
            }
            return BookMarkStates;
        }(domCore.DomStates));
        BookMark.BookMarkStates = BookMarkStates;
        var BookMarkProps = (function (_super) {
            __extends(BookMarkProps, _super);
            function BookMarkProps() {
                _super.apply(this, arguments);
            }
            return BookMarkProps;
        }(domCore.DomProps));
        BookMark.BookMarkProps = BookMarkProps;
    })(BookMark = exports.BookMark || (exports.BookMark = {}));
});
