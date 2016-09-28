var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var Door;
    (function (Door) {
        var DoorAction = (function (_super) {
            __extends(DoorAction, _super);
            function DoorAction() {
                _super.apply(this, arguments);
            }
            return DoorAction;
        }(domCore.DomAction));
        Door.DoorAction = DoorAction;
        var DoorReact = (function (_super) {
            __extends(DoorReact, _super);
            function DoorReact() {
                _super.apply(this, arguments);
                this.state = new DoorStates();
            }
            DoorReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hc-link"}, React.createElement("ul", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 nav nav-pills"}, React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link", href: "#$rightPage$"}, React.createElement("img", {className: "Hu-img-75X75", src: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=611834776,3845409433&fm=58"})), React.createElement("a", {className: "nav-link", href: "#$rightpage$"}, "权限配置")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link", href: "#$menu$"}, React.createElement("img", {className: "Hu-img-75X75", src: "/ts/html0/img/12.jpg"})), React.createElement("a", {className: "nav-link", href: "#$menupage$"}, "权限管理")), React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link", href: "#$menu$"}, React.createElement("img", {className: "Hu-img-75X75", src: "http://facebook.github.io/react/img/logo.svg"})), React.createElement("a", {className: "nav-link", href: "#$userinfo$"}, "基础信息"))));
            };
            DoorReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DoorReact;
        }(domCore.DomReact));
        Door.DoorReact = DoorReact;
        var DoorVm = (function (_super) {
            __extends(DoorVm, _super);
            function DoorVm(config) {
                _super.call(this);
                this.ReactType = DoorReact;
            }
            return DoorVm;
        }(domCore.DomVm));
        Door.DoorVm = DoorVm;
        var DoorStates = (function (_super) {
            __extends(DoorStates, _super);
            function DoorStates() {
                _super.apply(this, arguments);
            }
            return DoorStates;
        }(domCore.DomStates));
        Door.DoorStates = DoorStates;
        var DoorProps = (function (_super) {
            __extends(DoorProps, _super);
            function DoorProps() {
                _super.apply(this, arguments);
            }
            return DoorProps;
        }(domCore.DomProps));
        Door.DoorProps = DoorProps;
    })(Door = exports.Door || (exports.Door = {}));
});
