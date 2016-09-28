var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./TodoCer", "./TodoMer", "./TodoRer", "./../BasePageMRC", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var TodoMRC = (function (_super) {
        __extends(TodoMRC, _super);
        function TodoMRC() {
            var cer = new cFile.TodoCer();
            var mer = new mFile.TodoMer();
            var rer = new rFile.TodoRer();
            _super.call(this, cer, mer, rer);
        }
        return TodoMRC;
    }(mrcFile.BasePageMRC));
    exports.TodoMRC = TodoMRC;
    iocFile.Core.Ioc.Current().RegisterType("Todo", iPageFile.PageFace, TodoMRC);
});
