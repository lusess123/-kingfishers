var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./FormSelector"], function (require, exports, basecolFile, iocFile, formSelectot) {
    "use strict";
    var BaseColVm = basecolFile.Core.BaseColVm;
    var ui;
    (function (ui) {
        var FormMulitSelectorAction = (function (_super) {
            __extends(FormMulitSelectorAction, _super);
            function FormMulitSelectorAction() {
                _super.apply(this, arguments);
            }
            return FormMulitSelectorAction;
        }(formSelectot.ui.FormSelectorAction));
        ui.FormMulitSelectorAction = FormMulitSelectorAction;
        var FormMulitSelectorReact = (function (_super) {
            __extends(FormMulitSelectorReact, _super);
            function FormMulitSelectorReact() {
                _super.apply(this, arguments);
                this.state = new FormMulitSelectorState();
            }
            FormMulitSelectorReact.prototype.pSender = function () {
                return _super.prototype.pSender.call(this);
            };
            FormMulitSelectorReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            FormMulitSelectorReact.prototype.onButtonClick = function () {
                _super.prototype.onButtonClick.call(this);
            };
            return FormMulitSelectorReact;
        }(formSelectot.ui.FormSelectorReact));
        ui.FormMulitSelectorReact = FormMulitSelectorReact;
        var FormMulitSelectorState = (function (_super) {
            __extends(FormMulitSelectorState, _super);
            function FormMulitSelectorState() {
                _super.apply(this, arguments);
            }
            return FormMulitSelectorState;
        }(formSelectot.ui.FormSelectorState));
        ui.FormMulitSelectorState = FormMulitSelectorState;
        var FormMulitSelectorProps = (function (_super) {
            __extends(FormMulitSelectorProps, _super);
            function FormMulitSelectorProps() {
                _super.apply(this, arguments);
            }
            return FormMulitSelectorProps;
        }(formSelectot.ui.FormSelectorProps));
        ui.FormMulitSelectorProps = FormMulitSelectorProps;
        var FormMulitSelectorVm = (function (_super) {
            __extends(FormMulitSelectorVm, _super);
            function FormMulitSelectorVm() {
                _super.apply(this, arguments);
                this.pRegName = "列表多选选控件";
                this.ReactType = FormMulitSelectorReact;
            }
            //public _Content = listPage.ui.ListPageVm.prototype;
            //public 
            FormMulitSelectorVm.Test = function () {
                var _bean = new FormMulitSelectorVm();
                _bean.Content.isSingleCheck = false;
                _bean.Content.isSelecor = true;
                _bean.ModuleXml = "module/AllControls/AllControls";
                _bean.RegName = "WorkflowDef";
                _bean.Content.IDSign = "FID";
                _bean.isSingleSelect = false;
                return _bean;
            };
            return FormMulitSelectorVm;
        }(formSelectot.ui.FormSelectorVm));
        ui.FormMulitSelectorVm = FormMulitSelectorVm;
        iocFile.Core.Ioc.Current().RegisterType("FormMulitSelectorVm", BaseColVm, FormMulitSelectorVm);
    })(ui = exports.ui || (exports.ui = {}));
});
