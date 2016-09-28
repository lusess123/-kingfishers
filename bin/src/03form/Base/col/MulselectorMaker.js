var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./BaseSelectMaker"], function (require, exports, iocFile, baseSelectMaker) {
    "use strict";
    var ui;
    (function (ui) {
        var Mulselector = (function (_super) {
            __extends(Mulselector, _super);
            function Mulselector() {
                _super.apply(this, arguments);
            }
            return Mulselector;
        }(baseSelectMaker.ui.BaseSelectMaker));
        ui.Mulselector = Mulselector;
        var DefaultMulselector = (function (_super) {
            __extends(DefaultMulselector, _super);
            function DefaultMulselector() {
                _super.apply(this, arguments);
            }
            return DefaultMulselector;
        }(Mulselector));
        ui.DefaultMulselector = DefaultMulselector;
        iocFile.Core.Ioc.Current().RegisterType("Mulselector", "IColMaker", DefaultMulselector);
    })(ui = exports.ui || (exports.ui = {}));
});
