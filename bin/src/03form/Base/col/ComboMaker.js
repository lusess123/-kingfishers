var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./BaseBoxMaker"], function (require, exports, iocFile, baseBoxMaker) {
    "use strict";
    var ui;
    (function (ui) {
        var ComboMaker = (function (_super) {
            __extends(ComboMaker, _super);
            function ComboMaker() {
                _super.apply(this, arguments);
            }
            return ComboMaker;
        }(baseBoxMaker.ui.BaseBoxMaker));
        ui.ComboMaker = ComboMaker;
        var DafaultComboMaker = (function (_super) {
            __extends(DafaultComboMaker, _super);
            function DafaultComboMaker() {
                _super.apply(this, arguments);
            }
            return DafaultComboMaker;
        }(ComboMaker));
        ui.DafaultComboMaker = DafaultComboMaker;
        iocFile.Core.Ioc.Current().RegisterType("Combo", "IColMaker", DafaultComboMaker);
    })(ui = exports.ui || (exports.ui = {}));
});
