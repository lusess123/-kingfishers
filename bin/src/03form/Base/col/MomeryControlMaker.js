var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./BaseSelectMaker"], function (require, exports, iocFile, baseSelectMaker) {
    "use strict";
    var ui;
    (function (ui) {
        var MomeryControl = (function (_super) {
            __extends(MomeryControl, _super);
            function MomeryControl() {
                _super.apply(this, arguments);
            }
            return MomeryControl;
        }(baseSelectMaker.ui.BaseSelectMaker));
        ui.MomeryControl = MomeryControl;
        var DefaultMomeryControl = (function (_super) {
            __extends(DefaultMomeryControl, _super);
            function DefaultMomeryControl() {
                _super.apply(this, arguments);
            }
            return DefaultMomeryControl;
        }(MomeryControl));
        ui.DefaultMomeryControl = DefaultMomeryControl;
        iocFile.Core.Ioc.Current().RegisterType("MomeryControl", "IColMaker", DefaultMomeryControl);
    })(ui = exports.ui || (exports.ui = {}));
});
