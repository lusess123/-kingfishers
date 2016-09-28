define(["require", "exports"], function (require, exports) {
    "use strict";
    (function (ControlType) {
        ControlType[ControlType["None"] = 0] = "None";
        ControlType[ControlType["String"] = 1] = "String";
        ControlType[ControlType["Date"] = 2] = "Date";
        ControlType[ControlType["Combo"] = 3] = "Combo";
    })(exports.ControlType || (exports.ControlType = {}));
    var ControlType = exports.ControlType;
    var GroupInfo = (function () {
        function GroupInfo() {
        }
        return GroupInfo;
    }());
    exports.GroupInfo = GroupInfo;
});
