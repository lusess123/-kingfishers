var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../03form/Base/BaseColumnGroup"], function (require, exports, iocFile, baseColumnGroup) {
    "use strict";
    var ui;
    (function (ui) {
        var GridColumnGroupAction = (function (_super) {
            __extends(GridColumnGroupAction, _super);
            function GridColumnGroupAction() {
                _super.apply(this, arguments);
            }
            return GridColumnGroupAction;
        }(baseColumnGroup.ui.BaseColumnGroupAction));
        ui.GridColumnGroupAction = GridColumnGroupAction;
        var GridColumnGroupReact = (function (_super) {
            __extends(GridColumnGroupReact, _super);
            function GridColumnGroupReact() {
                _super.apply(this, arguments);
                this.state = new GridColumnGroupStates();
            }
            GridColumnGroupReact.prototype.pSender = function () {
                return null;
            };
            GridColumnGroupReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GridColumnGroupReact;
        }(baseColumnGroup.ui.BaseColumnGroupReact));
        ui.GridColumnGroupReact = GridColumnGroupReact;
        var GridColumnGroupVm = (function (_super) {
            __extends(GridColumnGroupVm, _super);
            function GridColumnGroupVm() {
                _super.apply(this, arguments);
                this.ReactType = GridColumnGroupReact;
            }
            return GridColumnGroupVm;
        }(baseColumnGroup.ui.BaseColumnGroupVm));
        ui.GridColumnGroupVm = GridColumnGroupVm;
        var GridColumnGroupStates = (function (_super) {
            __extends(GridColumnGroupStates, _super);
            function GridColumnGroupStates() {
                _super.apply(this, arguments);
            }
            return GridColumnGroupStates;
        }(baseColumnGroup.ui.BaseColumnGroupStates));
        ui.GridColumnGroupStates = GridColumnGroupStates;
        var GridColumnGroupProps = (function (_super) {
            __extends(GridColumnGroupProps, _super);
            function GridColumnGroupProps() {
                _super.apply(this, arguments);
            }
            return GridColumnGroupProps;
        }(baseColumnGroup.ui.BaseColumnGroupProps));
        ui.GridColumnGroupProps = GridColumnGroupProps;
        iocFile.Core.Ioc.Current().RegisterType("GridColumnGroupVm", baseColumnGroup.ui.BaseColumnGroupVm, GridColumnGroupVm);
    })(ui = exports.ui || (exports.ui = {}));
});
