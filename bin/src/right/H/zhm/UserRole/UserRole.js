var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../05tool/Pagination", "./UserRoleTable"], function (require, exports, domFile, React, PaginationFile, UserRoleTableFile) {
    "use strict";
    var domCore = domFile.Core;
    var UserRole;
    (function (UserRole) {
        var UserRowAction = (function (_super) {
            __extends(UserRowAction, _super);
            function UserRowAction() {
                _super.apply(this, arguments);
            }
            return UserRowAction;
        }(domCore.DomAction));
        UserRole.UserRowAction = UserRowAction;
        var UserRoleReact = (function (_super) {
            __extends(UserRoleReact, _super);
            function UserRoleReact() {
                _super.apply(this, arguments);
                this.state = new UserRowStates();
            }
            UserRoleReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "acs-table", onScroll: function (e) { _this.fun_Scroll(e); }}, React.createElement("div", null, React.createElement("table", {className: "acs-table acs-table-tree"}, this.props.Vm.table.rUserRoleHeadSender(), this.props.Vm.table.rUserRoleSender())));
            };
            UserRoleReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            UserRoleReact.prototype.thClass = function () {
                return "acsTextC " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh" : "");
            };
            UserRoleReact.prototype.thStyle = function () {
                return { left: (this.props.Vm.LeftNum) };
            };
            UserRoleReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.LeftNum = _$obj.scrollLeft();
                //this.props.Vm.table.forceUpdate("");
            };
            return UserRoleReact;
        }(domCore.DomReact));
        UserRole.UserRoleReact = UserRoleReact;
        var UserRoleVm = (function (_super) {
            __extends(UserRoleVm, _super);
            function UserRoleVm(config) {
                _super.call(this);
                this.LeftNum = 0;
                this.IsAcsRelative = false;
                this.ReactType = UserRoleReact;
                this.pagination = new PaginationFile.tool.PaginationVm();
                if (config) {
                    this.table = new UserRoleTableFile.UserRoleTable.UserRoleTableVm(config.MenuUserTable);
                }
            }
            UserRoleVm.prototype.scrollAuto = function () {
                this.IsAcsRelative = this.LeftNum > 0;
                this.forceUpdate("");
            };
            return UserRoleVm;
        }(domCore.DomVm));
        UserRole.UserRoleVm = UserRoleVm;
        var UserRowStates = (function (_super) {
            __extends(UserRowStates, _super);
            function UserRowStates() {
                _super.apply(this, arguments);
            }
            return UserRowStates;
        }(domCore.DomStates));
        UserRole.UserRowStates = UserRowStates;
        var UserRowProps = (function (_super) {
            __extends(UserRowProps, _super);
            function UserRowProps() {
                _super.apply(this, arguments);
            }
            return UserRowProps;
        }(domCore.DomProps));
        UserRole.UserRowProps = UserRowProps;
    })(UserRole = exports.UserRole || (exports.UserRole = {}));
});
