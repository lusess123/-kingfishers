var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseModel"], function (require, exports, baseMerFile) {
    "use strict";
    var TodoMer = (function (_super) {
        __extends(TodoMer, _super);
        function TodoMer() {
            _super.apply(this, arguments);
            this.AkName = "todomer";
            this.getToDoData = function (callBack) {
                $.AKjs.getJSON("/core/Desk/GetToDoWork", null, callBack);
            };
        }
        TodoMer.prototype.getTopMyWork = function (callBack) {
            $.AKjs.getJSON("/module/module", { xml: "module/workflow/topMyWork.xml", pageStyle: "List" }, callBack);
        };
        ;
        return TodoMer;
    }(baseMerFile.AkBaseModel));
    exports.TodoMer = TodoMer;
});
