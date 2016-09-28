var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../05tool/Pagination", "./MenuRoleTable"], function (require, exports, domFile, React, PaginationFile, MenuRoleTableFile) {
    "use strict";
    var domCore = domFile.Core;
    var MenuRole;
    (function (MenuRole) {
        var MenuRoleAction = (function (_super) {
            __extends(MenuRoleAction, _super);
            function MenuRoleAction() {
                _super.apply(this, arguments);
            }
            return MenuRoleAction;
        }(domCore.DomAction));
        MenuRole.MenuRoleAction = MenuRoleAction;
        var MenuRoleReact = (function (_super) {
            __extends(MenuRoleReact, _super);
            function MenuRoleReact() {
                _super.apply(this, arguments);
                this.state = new MenuRoleStates();
            }
            MenuRoleReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, this.props.Vm.table.rMenuRolebuttonSender(), React.createElement("div", {className: "acs-table ", onScroll: function (e) { _this.fun_Scroll(e); }}, React.createElement("div", {className: "Hm-table"}, React.createElement("table", {className: "table table-hover table-bordered table-striped acs-table Hm-table-tree"}, this.props.Vm.table.rMenuRoleheadSender(), this.props.Vm.table.rMenuRoleSender()))));
            };
            MenuRoleReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            MenuRoleReact.prototype.thClass = function () {
                return "text-center " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th " : "");
            };
            MenuRoleReact.prototype.thStyle = function () {
                return { left: (this.props.Vm.LeftNum) };
            };
            MenuRoleReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.LeftNum = _$obj.scrollLeft();
                this.props.Vm.table.thclass = this.thClass();
                this.props.Vm.table.thstyle = this.thStyle();
                this.props.Vm.scrollAuto();
                this.props.Vm.table.forceUpdate("");
            };
            return MenuRoleReact;
        }(domCore.DomReact));
        MenuRole.MenuRoleReact = MenuRoleReact;
        var MenuRoleVm = (function (_super) {
            __extends(MenuRoleVm, _super);
            function MenuRoleVm(config) {
                _super.call(this);
                this.LeftNum = 0;
                this.IsAcsRelative = false;
                this.ReactType = MenuRoleReact;
                this.pagination = new PaginationFile.tool.PaginationVm();
                if (config) {
                    config.MenuRoleTable.Unid = config.UniId;
                    this.table = new MenuRoleTableFile.MenuRoleTable.MenuRoleTableVm(config.MenuRoleTable);
                    //要给分页控件传数据
                    this.UniId = config.UniId;
                }
            }
            MenuRoleVm.prototype.scrollAuto = function () {
                this.IsAcsRelative = this.LeftNum > 0;
                this.forceUpdate("");
            };
            return MenuRoleVm;
        }(domCore.DomVm));
        MenuRole.MenuRoleVm = MenuRoleVm;
        var MenuRoleStates = (function (_super) {
            __extends(MenuRoleStates, _super);
            function MenuRoleStates() {
                _super.apply(this, arguments);
            }
            return MenuRoleStates;
        }(domCore.DomStates));
        MenuRole.MenuRoleStates = MenuRoleStates;
        var MenuRoleProps = (function (_super) {
            __extends(MenuRoleProps, _super);
            function MenuRoleProps() {
                _super.apply(this, arguments);
            }
            return MenuRoleProps;
        }(domCore.DomProps));
        MenuRole.MenuRoleProps = MenuRoleProps;
    })(MenuRole = exports.MenuRole || (exports.MenuRole = {}));
});
