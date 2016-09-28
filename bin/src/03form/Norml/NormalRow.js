var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../Base/BaseRow", "./../../01core/Ioc", "./../../01core/0Dom", "./NormalColumn"], function (require, exports, baseRow, iocFile, domFile, normalColumnFile) {
    "use strict";
    var ui;
    (function (ui) {
        normalColumnFile.ui;
        var NormalRowAction = (function (_super) {
            __extends(NormalRowAction, _super);
            function NormalRowAction() {
                _super.apply(this, arguments);
            }
            return NormalRowAction;
        }(domFile.Core.DomAction));
        ui.NormalRowAction = NormalRowAction;
        var NormalRowReact = (function (_super) {
            __extends(NormalRowReact, _super);
            function NormalRowReact() {
                _super.apply(this, arguments);
            }
            return NormalRowReact;
        }(baseRow.ui.BaseRowReact));
        ui.NormalRowReact = NormalRowReact;
        var NormalRowVm = (function (_super) {
            __extends(NormalRowVm, _super);
            function NormalRowVm() {
                _super.apply(this, arguments);
                this.ReactType = NormalRowReact;
                this.pRegName = "NormalRow";
            }
            return NormalRowVm;
        }(baseRow.ui.BaseRowVm));
        ui.NormalRowVm = NormalRowVm;
        var NormalRowProps = (function (_super) {
            __extends(NormalRowProps, _super);
            function NormalRowProps() {
                _super.apply(this, arguments);
            }
            return NormalRowProps;
        }(baseRow.ui.BaseRowProps));
        ui.NormalRowProps = NormalRowProps;
        var NormalRowStates = (function (_super) {
            __extends(NormalRowStates, _super);
            function NormalRowStates() {
                _super.apply(this, arguments);
            }
            return NormalRowStates;
        }(baseRow.ui.BaseRowStates));
        ui.NormalRowStates = NormalRowStates;
        iocFile.Core.Ioc.Current().RegisterType("Normal", baseRow.ui.BaseRowVm, NormalRowVm);
    })(ui = exports.ui || (exports.ui = {}));
});
