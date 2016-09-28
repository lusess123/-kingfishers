var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var TestMer = (function (_super) {
        __extends(TestMer, _super);
        function TestMer() {
            _super.apply(this, arguments);
            this.AkName = "testmer";
            this.SeaName = "";
        }
        return TestMer;
    }(baseMerFile.AkBaseModel));
    exports.TestMer = TestMer;
});
