var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../01core/0Dom", "./../Base/BaseForm", "./NormalRow"], function (require, exports, iocFile, domFile, baseForm, normalRowFile) {
    "use strict";
    var ui;
    (function (ui) {
        var NormalFormAction = (function (_super) {
            __extends(NormalFormAction, _super);
            function NormalFormAction() {
                _super.apply(this, arguments);
            }
            return NormalFormAction;
        }(domFile.Core.DomAction));
        ui.NormalFormAction = NormalFormAction;
        var NormalFormReact = (function (_super) {
            __extends(NormalFormReact, _super);
            function NormalFormReact() {
                _super.apply(this, arguments);
            }
            return NormalFormReact;
        }(baseForm.ui.BaseFormReact));
        ui.NormalFormReact = NormalFormReact;
        var NormalFormVm = (function (_super) {
            __extends(NormalFormVm, _super);
            function NormalFormVm() {
                _super.apply(this, arguments);
                this.ReactType = NormalFormReact;
                this.pRegName = "NormalForm";
            }
            return NormalFormVm;
        }(baseForm.ui.BaseFormVm));
        ui.NormalFormVm = NormalFormVm;
        var NormalFormProps = (function (_super) {
            __extends(NormalFormProps, _super);
            function NormalFormProps() {
                _super.apply(this, arguments);
            }
            return NormalFormProps;
        }(baseForm.ui.BaseFormProps));
        ui.NormalFormProps = NormalFormProps;
        var NormalFormStates = (function (_super) {
            __extends(NormalFormStates, _super);
            function NormalFormStates() {
                _super.apply(this, arguments);
            }
            return NormalFormStates;
        }(baseForm.ui.BaseFormStates));
        ui.NormalFormStates = NormalFormStates;
        iocFile.Core.Ioc.Current().RegisterType("Normal", baseForm.ui.BaseFormVm, NormalFormVm);
        normalRowFile.ui;
    })(ui = exports.ui || (exports.ui = {}));
});
