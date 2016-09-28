var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../Base/BaseColumn", "./../../01core/Ioc"], function (require, exports, baseColumn, iocFile) {
    "use strict";
    var ui;
    (function (ui) {
        var GridColumnAction = (function (_super) {
            __extends(GridColumnAction, _super);
            function GridColumnAction() {
                _super.apply(this, arguments);
            }
            return GridColumnAction;
        }(baseColumn.ui.BaseColumnAction));
        ui.GridColumnAction = GridColumnAction;
        var GridColumnReact = (function (_super) {
            __extends(GridColumnReact, _super);
            function GridColumnReact() {
                _super.apply(this, arguments);
            }
            return GridColumnReact;
        }(baseColumn.ui.BaseColumnReact));
        ui.GridColumnReact = GridColumnReact;
        var GridColumnVm = (function (_super) {
            __extends(GridColumnVm, _super);
            function GridColumnVm() {
                _super.apply(this, arguments);
                this.ReactType = GridColumnReact;
                this.pRegName = "GridColumn";
            }
            return GridColumnVm;
        }(baseColumn.ui.BaseColumnVm));
        ui.GridColumnVm = GridColumnVm;
        var GridColumnProps = (function (_super) {
            __extends(GridColumnProps, _super);
            function GridColumnProps() {
                _super.apply(this, arguments);
            }
            return GridColumnProps;
        }(baseColumn.ui.BaseColumnProps));
        ui.GridColumnProps = GridColumnProps;
        var GridColumnStates = (function (_super) {
            __extends(GridColumnStates, _super);
            function GridColumnStates() {
                _super.apply(this, arguments);
            }
            return GridColumnStates;
        }(baseColumn.ui.BaseColumnStates));
        ui.GridColumnStates = GridColumnStates;
        iocFile.Core.Ioc.Current().RegisterType("Grid", baseColumn.ui.BaseColumnVm, GridColumnVm);
    })(ui = exports.ui || (exports.ui = {}));
});
