var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../../01core/0Dom", "react", "./MenuNewMaster"], function (require, exports, domFile, React, menuInsertRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var MenuNewRow;
    (function (MenuNewRow) {
        var MenuNewRowAction = (function (_super) {
            __extends(MenuNewRowAction, _super);
            function MenuNewRowAction() {
                _super.apply(this, arguments);
            }
            return MenuNewRowAction;
        }(domCore.DomAction));
        MenuNewRow.MenuNewRowAction = MenuNewRowAction;
        var MenuNewRowReact = (function (_super) {
            __extends(MenuNewRowReact, _super);
            function MenuNewRowReact() {
                _super.apply(this, arguments);
                this.state = new MenuNewRowStates();
            }
            MenuNewRowReact.prototype.pSender = function () {
                return React.createElement("div", null, this.props.Vm.menuMasterObj.intoDom());
            };
            MenuNewRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MenuNewRowReact;
        }(domCore.DomReact));
        MenuNewRow.MenuNewRowReact = MenuNewRowReact;
        var MenuNewRowVm = (function (_super) {
            __extends(MenuNewRowVm, _super);
            function MenuNewRowVm(config) {
                _super.call(this);
                this.ReactType = MenuNewRowReact;
                if (config) {
                    this.menuMasterObj = new menuInsertRowFile.MenuNewMaster.MenuNewMasterVm(config.MenuNewRow);
                }
            }
            return MenuNewRowVm;
        }(domCore.DomVm));
        MenuNewRow.MenuNewRowVm = MenuNewRowVm;
        var MenuNewRowStates = (function (_super) {
            __extends(MenuNewRowStates, _super);
            function MenuNewRowStates() {
                _super.apply(this, arguments);
            }
            return MenuNewRowStates;
        }(domCore.DomStates));
        MenuNewRow.MenuNewRowStates = MenuNewRowStates;
        var MenuNewRowProps = (function (_super) {
            __extends(MenuNewRowProps, _super);
            function MenuNewRowProps() {
                _super.apply(this, arguments);
            }
            return MenuNewRowProps;
        }(domCore.DomProps));
        MenuNewRow.MenuNewRowProps = MenuNewRowProps;
    })(MenuNewRow = exports.MenuNewRow || (exports.MenuNewRow = {}));
});
