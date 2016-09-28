var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../05tool/EditSpan", "./RightReact/UserRoleHeadReact", "./RightReact/UserRoleReact"], function (require, exports, domFile, React, EditSpanFile, UserRoleHeadReact, UserRoleReact) {
    "use strict";
    var domCore = domFile.Core;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var UserRoleTable;
    (function (UserRoleTable) {
        var UserRoleTableAction = (function (_super) {
            __extends(UserRoleTableAction, _super);
            function UserRoleTableAction() {
                _super.apply(this, arguments);
            }
            return UserRoleTableAction;
        }(domCore.DomAction));
        UserRoleTable.UserRoleTableAction = UserRoleTableAction;
        var UserRoleTableReact = (function (_super) {
            __extends(UserRoleTableReact, _super);
            function UserRoleTableReact() {
                _super.apply(this, arguments);
                this.state = new UserRoleTableStates();
            }
            UserRoleTableReact.prototype.pSender = function () {
                return React.createElement("div", null, "名称为: UserRoleTable的组件");
            };
            UserRoleTableReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return UserRoleTableReact;
        }(domCore.DomReact));
        UserRoleTable.UserRoleTableReact = UserRoleTableReact;
        var UserRoleTableVm = (function (_super) {
            __extends(UserRoleTableVm, _super);
            function UserRoleTableVm(config) {
                _super.call(this);
                this.ReactType = UserRoleTableReact;
                this.thClass = "";
                this.RoleData = [];
                this.UserData = [];
                this._arry = [];
                this.updateFlag = false;
                this.IsUserBodyHide = false;
                this.ESpanDict = {};
                if (config) {
                    this.RoleData = config.RoleData;
                    this.UserData = config.UserData;
                }
            }
            UserRoleTableVm.prototype.rUserRoleSender = function () {
                return this.intoDomR(UserRoleReact.User.UserRoleReact);
            };
            UserRoleTableVm.prototype.rUserRoleHeadSender = function () {
                return this.intoDomR(UserRoleHeadReact.User.UserRoleHeadReact);
            };
            UserRoleTableVm.prototype.addRole = function (obj) {
                this.RoleData.unshift({ FID: "", RoleName: obj.RoleName, RoleSign: obj.RoleSign, ActionType: "add" });
                this.forceUpdate("");
            };
            UserRoleTableVm.prototype.addUser = function (obj) {
                this.UserData.unshift({ FID: "", UserName: obj.UserName, UserSign: obj.UserName });
                this.forceUpdate("");
            };
            UserRoleTableVm.prototype.delRole = function (a) {
                for (var i = 0; i < this.RoleData.length; i++) {
                    if (a.RoleSign == this.RoleData[i].RoleSign) {
                        this.RoleData.splice(i, 1);
                        break;
                    }
                }
                this.forceUpdate("");
            };
            UserRoleTableVm.prototype.getESpan = function (name, config) {
                var _espan = this.ESpanDict[name];
                if (_espan) {
                    return _espan;
                }
                else {
                    var _es = this.ESpanDict[name] = new ESpanVm(config);
                    return _es;
                }
            };
            return UserRoleTableVm;
        }(domCore.DomVm));
        UserRoleTable.UserRoleTableVm = UserRoleTableVm;
        var UserRoleTableStates = (function (_super) {
            __extends(UserRoleTableStates, _super);
            function UserRoleTableStates() {
                _super.apply(this, arguments);
            }
            return UserRoleTableStates;
        }(domCore.DomStates));
        UserRoleTable.UserRoleTableStates = UserRoleTableStates;
        var UserRoleTableProps = (function (_super) {
            __extends(UserRoleTableProps, _super);
            function UserRoleTableProps() {
                _super.apply(this, arguments);
            }
            return UserRoleTableProps;
        }(domCore.DomProps));
        UserRoleTable.UserRoleTableProps = UserRoleTableProps;
    })(UserRoleTable = exports.UserRoleTable || (exports.UserRoleTable = {}));
});
