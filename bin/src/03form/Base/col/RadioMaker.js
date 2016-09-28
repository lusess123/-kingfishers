var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./BaseBoxMaker"], function (require, exports, iocFile, baseBoxMaker) {
    "use strict";
    var ui;
    (function (ui) {
        var RadioMaker = (function (_super) {
            __extends(RadioMaker, _super);
            function RadioMaker() {
                _super.apply(this, arguments);
            }
            return RadioMaker;
        }(baseBoxMaker.ui.BaseBoxMaker));
        ui.RadioMaker = RadioMaker;
        var DafaultRadioMaker = (function (_super) {
            __extends(DafaultRadioMaker, _super);
            function DafaultRadioMaker() {
                _super.apply(this, arguments);
            }
            return DafaultRadioMaker;
        }(RadioMaker));
        ui.DafaultRadioMaker = DafaultRadioMaker;
        iocFile.Core.Ioc.Current().RegisterType("Radio", "IColMaker", DafaultRadioMaker);
    })(ui = exports.ui || (exports.ui = {}));
});
