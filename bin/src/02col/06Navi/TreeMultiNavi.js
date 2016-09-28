// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./TreeSingleNavi", "./../../01core/Ioc", "./../00core/baseCol"], function (require, exports, treeSingleNaviFile, iocFile, basecolFile) {
    "use strict";
    var BaseColVm = basecolFile.Core.BaseColVm;
    var TreeSingleNaviVm = (function (_super) {
        __extends(TreeSingleNaviVm, _super);
        function TreeSingleNaviVm() {
            _super.apply(this, arguments);
            this.pIsMultiSelect = true;
        }
        return TreeSingleNaviVm;
    }(treeSingleNaviFile.TreeSingleNavi.TreeSingleNaviVm));
    exports.TreeSingleNaviVm = TreeSingleNaviVm;
    iocFile.Core.Ioc.Current().RegisterType("TreeMultiNaviVm", BaseColVm, TreeSingleNaviVm);
});
