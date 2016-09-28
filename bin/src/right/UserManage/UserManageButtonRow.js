var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var UserManageButton;
    (function (UserManageButton) {
        var UserManageButtonRowAction = (function (_super) {
            __extends(UserManageButtonRowAction, _super);
            function UserManageButtonRowAction() {
                _super.apply(this, arguments);
            }
            return UserManageButtonRowAction;
        }(domCore.DomAction));
        UserManageButton.UserManageButtonRowAction = UserManageButtonRowAction;
        var UserManageButtonRowReact = (function (_super) {
            __extends(UserManageButtonRowReact, _super);
            function UserManageButtonRowReact() {
                _super.apply(this, arguments);
                this.state = new UserManageButtonRowStates();
            }
            UserManageButtonRowReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.ButtonData[fName] = _val;
                this.forceUpdate();
            };
            UserManageButtonRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", null), React.createElement("td", {className: "hide"}), React.createElement("td", null, React.createElement("input", {type: "text", placeholder: "..", value: this.props.Vm.ButtonData.FName, onChange: function (e) { _this.fun_OnChange(e, "FName"); }})), React.createElement("td", null, React.createElement("input", {type: "text", placeholder: "..", value: this.props.Vm.ButtonData.FKey, onChange: function (e) { _this.fun_OnChange(e, "FKey"); }})), React.createElement("td", null, React.createElement("input", {type: "text", placeholder: "..", value: this.props.Vm.ButtonData.FValue, onChange: function (e) { _this.fun_OnChange(e, "FValue"); }})), React.createElement("td", null, React.createElement("input", {type: "text", placeholder: "..", value: this.props.Vm.ButtonData.OrderId, onChange: function (e) { _this.fun_OnChange(e, "OrderId"); }})));
            };
            UserManageButtonRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UserManageButtonRowReact;
        }(domCore.DomReact));
        UserManageButton.UserManageButtonRowReact = UserManageButtonRowReact;
        var UserManageButtonRowVm = (function (_super) {
            __extends(UserManageButtonRowVm, _super);
            function UserManageButtonRowVm() {
                _super.apply(this, arguments);
                this.ReactType = UserManageButtonRowReact;
            }
            return UserManageButtonRowVm;
        }(domCore.DomVm));
        UserManageButton.UserManageButtonRowVm = UserManageButtonRowVm;
        var UserManageButtonRowStates = (function (_super) {
            __extends(UserManageButtonRowStates, _super);
            function UserManageButtonRowStates() {
                _super.apply(this, arguments);
            }
            return UserManageButtonRowStates;
        }(domCore.DomStates));
        UserManageButton.UserManageButtonRowStates = UserManageButtonRowStates;
        var UserManageButtonRowProps = (function (_super) {
            __extends(UserManageButtonRowProps, _super);
            function UserManageButtonRowProps() {
                _super.apply(this, arguments);
            }
            return UserManageButtonRowProps;
        }(domCore.DomProps));
        UserManageButton.UserManageButtonRowProps = UserManageButtonRowProps;
    })(UserManageButton = exports.UserManageButton || (exports.UserManageButton = {}));
});
