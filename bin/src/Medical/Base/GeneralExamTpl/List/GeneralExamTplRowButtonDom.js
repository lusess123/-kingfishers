var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../Common/List/MedicalBaseRowButtonDom"], function (require, exports, baseRowButton) {
    "use strict";
    var GeneralExamTplRowButtonDom;
    (function (GeneralExamTplRowButtonDom) {
        var GeneralExamTplRowButtonDomAction = (function (_super) {
            __extends(GeneralExamTplRowButtonDomAction, _super);
            function GeneralExamTplRowButtonDomAction() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplRowButtonDomAction;
        }(baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomAction));
        GeneralExamTplRowButtonDom.GeneralExamTplRowButtonDomAction = GeneralExamTplRowButtonDomAction;
        var GeneralExamTplRowButtonDomReact = (function (_super) {
            __extends(GeneralExamTplRowButtonDomReact, _super);
            function GeneralExamTplRowButtonDomReact() {
                _super.apply(this, arguments);
                this.state = new GeneralExamTplRowButtonDomStates();
            }
            GeneralExamTplRowButtonDomReact.prototype.pSender = function () {
                return _super.prototype.pSender.call(this);
            };
            GeneralExamTplRowButtonDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GeneralExamTplRowButtonDomReact;
        }(baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomReact));
        GeneralExamTplRowButtonDom.GeneralExamTplRowButtonDomReact = GeneralExamTplRowButtonDomReact;
        var GeneralExamTplRowButtonDomVm = (function (_super) {
            __extends(GeneralExamTplRowButtonDomVm, _super);
            function GeneralExamTplRowButtonDomVm(config) {
                _super.call(this, config);
                this.ReactType = GeneralExamTplRowButtonDomReact;
            }
            GeneralExamTplRowButtonDomVm.prototype.btnFunCommond = function (name) {
                this.emitAppEvent("medical/base/generalexamtpl/rowbtnclick", this.UniId, name, this.Row.RowData.FID);
            };
            return GeneralExamTplRowButtonDomVm;
        }(baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomVm));
        GeneralExamTplRowButtonDom.GeneralExamTplRowButtonDomVm = GeneralExamTplRowButtonDomVm;
        var GeneralExamTplRowButtonDomStates = (function (_super) {
            __extends(GeneralExamTplRowButtonDomStates, _super);
            function GeneralExamTplRowButtonDomStates() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplRowButtonDomStates;
        }(baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomStates));
        GeneralExamTplRowButtonDom.GeneralExamTplRowButtonDomStates = GeneralExamTplRowButtonDomStates;
        var GeneralExamTplRowButtonDomProps = (function (_super) {
            __extends(GeneralExamTplRowButtonDomProps, _super);
            function GeneralExamTplRowButtonDomProps() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplRowButtonDomProps;
        }(baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomProps));
        GeneralExamTplRowButtonDom.GeneralExamTplRowButtonDomProps = GeneralExamTplRowButtonDomProps;
    })(GeneralExamTplRowButtonDom = exports.GeneralExamTplRowButtonDom || (exports.GeneralExamTplRowButtonDom = {}));
});
