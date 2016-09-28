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
        var FormSingleSelectorAction = (function (_super) {
            __extends(FormSingleSelectorAction, _super);
            function FormSingleSelectorAction() {
                _super.apply(this, arguments);
            }
            return FormSingleSelectorAction;
        }(formSelectot.ui.FormSelectorAction));
        ui.FormSingleSelectorAction = FormSingleSelectorAction;
        var FormSingleSelectorReact = (function (_super) {
            __extends(FormSingleSelectorReact, _super);
            function FormSingleSelectorReact() {
                _super.apply(this, arguments);
                this.state = new FormSingleSelectorState();
            }
            FormSingleSelectorReact.prototype.pSender = function () {
                return _super.prototype.pSender.call(this);
            };
            FormSingleSelectorReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            FormSingleSelectorReact.prototype.onButtonClick = function () {
                _super.prototype.onButtonClick.call(this);
            };
            return FormSingleSelectorReact;
        }(formSelectot.ui.FormSelectorReact));
        ui.FormSingleSelectorReact = FormSingleSelectorReact;
        var FormSingleSelectorState = (function (_super) {
            __extends(FormSingleSelectorState, _super);
            function FormSingleSelectorState() {
                _super.apply(this, arguments);
            }
            return FormSingleSelectorState;
        }(formSelectot.ui.FormSelectorState));
        ui.FormSingleSelectorState = FormSingleSelectorState;
        var FormSingleSelectorProps = (function (_super) {
            __extends(FormSingleSelectorProps, _super);
            function FormSingleSelectorProps() {
                _super.apply(this, arguments);
            }
            return FormSingleSelectorProps;
        }(formSelectot.ui.FormSelectorProps));
        ui.FormSingleSelectorProps = FormSingleSelectorProps;
        var FormSingleSelectorVm = (function (_super) {
            __extends(FormSingleSelectorVm, _super);
            function FormSingleSelectorVm() {
                _super.apply(this, arguments);
                this.pRegName = "单列选择器";
                this.ReactType = FormSingleSelectorReact;
            }
            FormSingleSelectorVm.Test = function () {
                var _bean = new FormSingleSelectorVm();
                var _beanReact = new FormSingleSelectorReact();
                _bean.Content.isSingleCheck = true;
                _bean.Content.isSelecor = true;
                _bean.ModuleXml = "module/workflow/workflowDef";
                _bean.RegName = "WorkflowDef";
                _bean.Content.IDSign = "WD_ID";
                _bean.Content.SingleSelectEvent = function () {
                    _beanReact.SingleSelectClick(_beanReact);
                };
                _bean.isSingleSelect = true;
                return _bean;
            };
            return FormSingleSelectorVm;
        }(formSelectot.ui.FormSelectorVm));
        ui.FormSingleSelectorVm = FormSingleSelectorVm;
        iocFile.Core.Ioc.Current().RegisterType("FormSingleSelectorVm", BaseColVm, FormSingleSelectorVm);
    })(ui = exports.ui || (exports.ui = {}));
});
