var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../04page/Hook", "./../../01core/Ioc"], function (require, exports, HookFile, iocFile) {
    "use strict";
    var TestHook = (function (_super) {
        __extends(TestHook, _super);
        function TestHook() {
            _super.apply(this, arguments);
        }
        TestHook.prototype.pBeforeFilter = function (data) {
            alert(data.Title + data.TsHook + "载入之前");
        };
        TestHook.prototype.dispose = function () {
            alert("没有了");
            _super.prototype.dispose.call(this);
        };
        return TestHook;
    }(HookFile.BasePageHook));
    exports.TestHook = TestHook;
    iocFile.Core.Ioc.Current().RegisterType("TestHook", HookFile.BasePageHook, TestHook);
});
