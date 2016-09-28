var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Event", "./UserUpdateMasterRowDom"], function (require, exports, React, domFile, eventFile, masterRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var UserUpdateRowDom;
    (function (UserUpdateRowDom) {
        var UserUpdateRowDomAction = (function (_super) {
            __extends(UserUpdateRowDomAction, _super);
            function UserUpdateRowDomAction() {
                _super.apply(this, arguments);
            }
            return UserUpdateRowDomAction;
        }(domCore.DomAction));
        UserUpdateRowDom.UserUpdateRowDomAction = UserUpdateRowDomAction;
        var UserUpdateRowDomReact = (function (_super) {
            __extends(UserUpdateRowDomReact, _super);
            function UserUpdateRowDomReact() {
                _super.apply(this, arguments);
                this.state = new UserUpdateRowDomStates();
            }
            UserUpdateRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title Hu-pointer", onClick: function () { _this.fun_masterTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsMasterHide ? "hide" : ""}, this.props.Vm.MasterRow.intoDom()));
            };
            UserUpdateRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            UserUpdateRowDomReact.prototype.fun_masterTitleClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            UserUpdateRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UserUpdateRowDomReact;
        }(domCore.DomReact));
        UserUpdateRowDom.UserUpdateRowDomReact = UserUpdateRowDomReact;
        var UserUpdateRowDomVm = (function (_super) {
            __extends(UserUpdateRowDomVm, _super);
            function UserUpdateRowDomVm(config) {
                _super.call(this);
                this.ReactType = UserUpdateRowDomReact;
                this.DelFidList = [];
                this.UniId = "";
                this.MasterRow = new masterRowFile.UsersUpdateMasterRowDom.UserUpdateMasterRowDomVm();
                this.UniId = eventFile.App.getUniId().toString();
                if (config) {
                    config.MasterConfig.UniId = this.UniId;
                    this.MasterRow = new masterRowFile.UsersUpdateMasterRowDom.UserUpdateMasterRowDomVm(config.MasterConfig);
                }
                ;
            }
            UserUpdateRowDomVm.prototype.legal = function () {
                var _isres = this.MasterRow.legal();
                return _isres;
            };
            UserUpdateRowDomVm.prototype.getData = function () {
                var _data = this.MasterRow.getData();
                return _data;
            };
            return UserUpdateRowDomVm;
        }(domCore.DomVm));
        UserUpdateRowDom.UserUpdateRowDomVm = UserUpdateRowDomVm;
        var UserUpdateRowDomStates = (function (_super) {
            __extends(UserUpdateRowDomStates, _super);
            function UserUpdateRowDomStates() {
                _super.apply(this, arguments);
            }
            return UserUpdateRowDomStates;
        }(domCore.DomStates));
        UserUpdateRowDom.UserUpdateRowDomStates = UserUpdateRowDomStates;
        var UserUpdateRowDomProps = (function (_super) {
            __extends(UserUpdateRowDomProps, _super);
            function UserUpdateRowDomProps() {
                _super.apply(this, arguments);
            }
            return UserUpdateRowDomProps;
        }(domCore.DomProps));
        UserUpdateRowDom.UserUpdateRowDomProps = UserUpdateRowDomProps;
    })(UserUpdateRowDom = exports.UserUpdateRowDom || (exports.UserUpdateRowDom = {}));
});
