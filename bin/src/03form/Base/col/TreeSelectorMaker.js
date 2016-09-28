var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./BaseSelectMaker"], function (require, exports, iocFile, baseSelectMaker) {
    "use strict";
    var ui;
    (function (ui) {
        var TreeSelector = (function (_super) {
            __extends(TreeSelector, _super);
            function TreeSelector() {
                _super.apply(this, arguments);
            }
            return TreeSelector;
        }(baseSelectMaker.ui.BaseSelectMaker));
        ui.TreeSelector = TreeSelector;
        var DefaultTreeSelector = (function (_super) {
            __extends(DefaultTreeSelector, _super);
            function DefaultTreeSelector() {
                _super.apply(this, arguments);
            }
            return DefaultTreeSelector;
        }(TreeSelector));
        ui.DefaultTreeSelector = DefaultTreeSelector;
        iocFile.Core.Ioc.Current().RegisterType("TreeSelector", "IColMaker", DefaultTreeSelector);
    })(ui = exports.ui || (exports.ui = {}));
});
