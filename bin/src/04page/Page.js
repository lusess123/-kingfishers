var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../02col/00core/baseCol"], function (require, exports, basecolFile) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var PageAction = (function (_super) {
            __extends(PageAction, _super);
            function PageAction() {
                _super.apply(this, arguments);
            }
            return PageAction;
        }(BaseColAction));
        ui.PageAction = PageAction;
        var PageReact = (function (_super) {
            __extends(PageReact, _super);
            function PageReact() {
                _super.apply(this, arguments);
            }
            return PageReact;
        }(BaseColReact));
        ui.PageReact = PageReact;
        var PageProps = (function (_super) {
            __extends(PageProps, _super);
            function PageProps() {
                _super.apply(this, arguments);
            }
            return PageProps;
        }(BaseColProps));
        ui.PageProps = PageProps;
        var PageVm = (function (_super) {
            __extends(PageVm, _super);
            function PageVm() {
                _super.apply(this, arguments);
                this.ReactType = PageReact;
                this.pRegName = "Page";
            }
            return PageVm;
        }(BaseColVm));
        ui.PageVm = PageVm;
        var PageStates = (function (_super) {
            __extends(PageStates, _super);
            function PageStates() {
                _super.apply(this, arguments);
            }
            return PageStates;
        }(BaseColStates));
        ui.PageStates = PageStates;
    })(ui = exports.ui || (exports.ui = {}));
});
