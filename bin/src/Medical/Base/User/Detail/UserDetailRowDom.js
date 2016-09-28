var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./UserDetailMaterRowDom"], function (require, exports, React, domFile, masterRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var UserDetailRowDom;
    (function (UserDetailRowDom) {
        var UserDetailRowDomAction = (function (_super) {
            __extends(UserDetailRowDomAction, _super);
            function UserDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return UserDetailRowDomAction;
        }(domCore.DomAction));
        UserDetailRowDom.UserDetailRowDomAction = UserDetailRowDomAction;
        var UserDetailRowDomReact = (function (_super) {
            __extends(UserDetailRowDomReact, _super);
            function UserDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new UserDetailRowDomStates();
            }
            UserDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title Hu-pointer", onClick: function () { _this.fun_itemTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : "Hm-toggle-item"}, this.props.Vm.MasterRow.intoDom()));
            };
            UserDetailRowDomReact.prototype.fun_rowTitleClick = function () {
                this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
                this.forceUpdate();
            };
            UserDetailRowDomReact.prototype.fun_itemTitleClick = function () {
                this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
                this.forceUpdate();
            };
            UserDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UserDetailRowDomReact;
        }(domCore.DomReact));
        UserDetailRowDom.UserDetailRowDomReact = UserDetailRowDomReact;
        var UserDetailRowDomVm = (function (_super) {
            __extends(UserDetailRowDomVm, _super);
            function UserDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = UserDetailRowDomReact;
                if (config) {
                    this.MasterRow = new masterRowFile.UserDetailMaterRowDomVm.UserDetailMaterRowDomVm(config.MasterConfig);
                }
            }
            return UserDetailRowDomVm;
        }(domCore.DomVm));
        UserDetailRowDom.UserDetailRowDomVm = UserDetailRowDomVm;
        var UserDetailRowDomStates = (function (_super) {
            __extends(UserDetailRowDomStates, _super);
            function UserDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return UserDetailRowDomStates;
        }(domCore.DomStates));
        UserDetailRowDom.UserDetailRowDomStates = UserDetailRowDomStates;
        var UserDetailRowDomProps = (function (_super) {
            __extends(UserDetailRowDomProps, _super);
            function UserDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return UserDetailRowDomProps;
        }(domCore.DomProps));
        UserDetailRowDom.UserDetailRowDomProps = UserDetailRowDomProps;
    })(UserDetailRowDom = exports.UserDetailRowDom || (exports.UserDetailRowDom = {}));
});
