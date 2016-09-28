var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./MenuOrgTable"], function (require, exports, domFile, React, MenuOrgTableFile) {
    "use strict";
    var domCore = domFile.Core;
    var MenuOrg;
    (function (MenuOrg) {
        var MenuOrgAction = (function (_super) {
            __extends(MenuOrgAction, _super);
            function MenuOrgAction() {
                _super.apply(this, arguments);
            }
            return MenuOrgAction;
        }(domCore.DomAction));
        MenuOrg.MenuOrgAction = MenuOrgAction;
        var MenuOrgReact = (function (_super) {
            __extends(MenuOrgReact, _super);
            function MenuOrgReact() {
                _super.apply(this, arguments);
                this.state = new MenuOrgStates();
            }
            MenuOrgReact.prototype.pSender = function () {
                return React.createElement("div", {className: "acs-table acsWidth100"}, React.createElement("table", {className: "acs-table acs-table-tree"}, this.props.Vm.table.rMenuOrgHeadSender(), this.props.Vm.table.rMenuOrgSender()));
            };
            MenuOrgReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MenuOrgReact;
        }(domCore.DomReact));
        MenuOrg.MenuOrgReact = MenuOrgReact;
        var MenuOrgVm = (function (_super) {
            __extends(MenuOrgVm, _super);
            function MenuOrgVm(config) {
                _super.call(this);
                this.ReactType = MenuOrgReact;
                this.table = new MenuOrgTableFile.MenuOrgPage.MenuOrgPageVm();
                if (config) {
                    this.table = new MenuOrgTableFile.MenuOrgPage.MenuOrgPageVm(config.MenuOrgTable);
                }
            }
            return MenuOrgVm;
        }(domCore.DomVm));
        MenuOrg.MenuOrgVm = MenuOrgVm;
        var MenuOrgStates = (function (_super) {
            __extends(MenuOrgStates, _super);
            function MenuOrgStates() {
                _super.apply(this, arguments);
            }
            return MenuOrgStates;
        }(domCore.DomStates));
        MenuOrg.MenuOrgStates = MenuOrgStates;
        var MenuOrgProps = (function (_super) {
            __extends(MenuOrgProps, _super);
            function MenuOrgProps() {
                _super.apply(this, arguments);
            }
            return MenuOrgProps;
        }(domCore.DomProps));
        MenuOrg.MenuOrgProps = MenuOrgProps;
    })(MenuOrg = exports.MenuOrg || (exports.MenuOrg = {}));
});
