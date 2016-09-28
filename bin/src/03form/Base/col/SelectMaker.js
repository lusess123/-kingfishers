var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./BaseSelectMaker"], function (require, exports, iocFile, baseSelectMaker) {
    "use strict";
    var ui;
    (function (ui) {
        var Selector = (function (_super) {
            __extends(Selector, _super);
            function Selector() {
                _super.apply(this, arguments);
            }
            return Selector;
        }(baseSelectMaker.ui.BaseSelectMaker));
        ui.Selector = Selector;
        var DefaultSelector = (function (_super) {
            __extends(DefaultSelector, _super);
            function DefaultSelector() {
                _super.apply(this, arguments);
            }
            return DefaultSelector;
        }(Selector));
        ui.DefaultSelector = DefaultSelector;
        iocFile.Core.Ioc.Current().RegisterType("Selector", "IColMaker", DefaultSelector);
    })(ui = exports.ui || (exports.ui = {}));
});
