var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./MyWorkCer", "./MyWorkMer", "./MyWorkRer", "./../BasePageMRC", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, cFile, mFile, rFile, mrcFile, iocFile, iPageFile) {
    "use strict";
    var MyWorkMRC = (function (_super) {
        __extends(MyWorkMRC, _super);
        function MyWorkMRC() {
            var cer = new cFile.MyWorkCer();
            var mer = new mFile.MyWorkMer();
            var rer = new rFile.MyWorkRer();
            _super.call(this, cer, mer, rer);
        }
        return MyWorkMRC;
    }(mrcFile.BasePageMRC));
    exports.MyWorkMRC = MyWorkMRC;
    iocFile.Core.Ioc.Current().RegisterType("MYWORK", iPageFile.PageFace, MyWorkMRC);
    iocFile.Core.Ioc.Current().RegisterType("MYWORKMRC", iPageFile.PageFace, MyWorkMRC);
});
