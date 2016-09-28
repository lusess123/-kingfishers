var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../05tool/Pagination", "./MenuUserRoleTable"], function (require, exports, domFile, React, PaginationFile, MenuUserRoleTableFile) {
    "use strict";
    var domCore = domFile.Core;
    var MenuUserRole;
    (function (MenuUserRole) {
        var MenuUserRoleAction = (function (_super) {
            __extends(MenuUserRoleAction, _super);
            function MenuUserRoleAction() {
                _super.apply(this, arguments);
            }
            return MenuUserRoleAction;
        }(domCore.DomAction));
        MenuUserRole.MenuUserRoleAction = MenuUserRoleAction;
        var MenuUserRoleReact = (function (_super) {
            __extends(MenuUserRoleReact, _super);
            function MenuUserRoleReact() {
                _super.apply(this, arguments);
                this.state = new MenuUserRoleStates();
            }
            MenuUserRoleReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, this.props.Vm.table.rMenuRolebuttonSender(), React.createElement("div", {className: "acs-table ", onScroll: function (e) { _this.fun_Scroll(e); }}, React.createElement("div", {className: "Hm-table"}, React.createElement("table", {className: "table table-hover table-bordered table-striped acs-table Hm-table-tree"}, this.props.Vm.table.rMenuRoleheadSender(), this.props.Vm.table.rMenuRoleSender(), this.props.Vm.table.rMenuUserHeadSender(), this.props.Vm.table.rMenuUserSender()))));
            };
            MenuUserRoleReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            MenuUserRoleReact.prototype.thClass = function () {
                return "text-center " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th " : "");
            };
            MenuUserRoleReact.prototype.thStyle = function () {
                return { left: (this.props.Vm.LeftNum) };
            };
            MenuUserRoleReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.LeftNum = _$obj.scrollLeft();
                this.props.Vm.table.thclass = this.thClass();
                this.props.Vm.table.thstyle = this.thStyle();
                this.props.Vm.scrollAuto();
                this.props.Vm.table.forceUpdate("");
            };
            return MenuUserRoleReact;
        }(domCore.DomReact));
        MenuUserRole.MenuUserRoleReact = MenuUserRoleReact;
        var MenuUserRoleVm = (function (_super) {
            __extends(MenuUserRoleVm, _super);
            function MenuUserRoleVm(config) {
                _super.call(this);
                this.LeftNum = 0;
                this.IsAcsRelative = false;
                this.ReactType = MenuUserRoleReact;
                this.pagination = new PaginationFile.tool.PaginationVm();
                if (config) {
                    config.MenuUserTable.Unid = config.UniId;
                    this.table = new MenuUserRoleTableFile.MenuUserRoleTable.MenuUserRoleTableVm(config.MenuUserTable);
                    //要给分页控件传数据
                    this.UniId = config.UniId;
                }
            }
            MenuUserRoleVm.prototype.scrollAuto = function () {
                this.IsAcsRelative = this.LeftNum > 0;
                this.forceUpdate("");
            };
            return MenuUserRoleVm;
        }(domCore.DomVm));
        MenuUserRole.MenuUserRoleVm = MenuUserRoleVm;
        var MenuUserRoleStates = (function (_super) {
            __extends(MenuUserRoleStates, _super);
            function MenuUserRoleStates() {
                _super.apply(this, arguments);
            }
            return MenuUserRoleStates;
        }(domCore.DomStates));
        MenuUserRole.MenuUserRoleStates = MenuUserRoleStates;
        var MenuUserRoleProps = (function (_super) {
            __extends(MenuUserRoleProps, _super);
            function MenuUserRoleProps() {
                _super.apply(this, arguments);
            }
            return MenuUserRoleProps;
        }(domCore.DomProps));
        MenuUserRole.MenuUserRoleProps = MenuUserRoleProps;
    })(MenuUserRole = exports.MenuUserRole || (exports.MenuUserRole = {}));
});
