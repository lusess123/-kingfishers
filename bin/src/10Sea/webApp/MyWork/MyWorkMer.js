var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var MyWorkMer = (function (_super) {
        __extends(MyWorkMer, _super);
        function MyWorkMer() {
            _super.apply(this, arguments);
        }
        MyWorkMer.prototype.getMyWorkDataM = function (xml, callback) {
            $.AKjs.getJSON("/module/module", { xml: xml, pageStyle: "List" }, callback);
        };
        MyWorkMer.prototype.getAllBusinessM = function (callback) {
            $.AKjs.getJSON("/Right/Desk/GetBussinessConfig", {}, callback);
        };
        return MyWorkMer;
    }(baseMerFile.AkBaseModel));
    exports.MyWorkMer = MyWorkMer;
});
