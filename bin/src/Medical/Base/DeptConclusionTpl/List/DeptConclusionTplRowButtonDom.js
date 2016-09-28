var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../Common/List/MedicalBaseRowButtonDom"], function (require, exports, baseRowButton) {
    "use strict";
    var DeptConclusionTplRowButtonDom;
    (function (DeptConclusionTplRowButtonDom) {
        var DeptConclusionTplRowButtonDomAction = (function (_super) {
            __extends(DeptConclusionTplRowButtonDomAction, _super);
            function DeptConclusionTplRowButtonDomAction() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplRowButtonDomAction;
        }(baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomAction));
        DeptConclusionTplRowButtonDom.DeptConclusionTplRowButtonDomAction = DeptConclusionTplRowButtonDomAction;
        var DeptConclusionTplRowButtonDomReact = (function (_super) {
            __extends(DeptConclusionTplRowButtonDomReact, _super);
            function DeptConclusionTplRowButtonDomReact() {
                _super.apply(this, arguments);
                this.state = new DeptConclusionTplRowButtonDomStates();
            }
            DeptConclusionTplRowButtonDomReact.prototype.pSender = function () {
                return _super.prototype.pSender.call(this);
            };
            DeptConclusionTplRowButtonDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DeptConclusionTplRowButtonDomReact;
        }(baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomReact));
        DeptConclusionTplRowButtonDom.DeptConclusionTplRowButtonDomReact = DeptConclusionTplRowButtonDomReact;
        var DeptConclusionTplRowButtonDomVm = (function (_super) {
            __extends(DeptConclusionTplRowButtonDomVm, _super);
            function DeptConclusionTplRowButtonDomVm(config) {
                _super.call(this, config);
                this.ReactType = DeptConclusionTplRowButtonDomReact;
            }
            DeptConclusionTplRowButtonDomVm.prototype.btnFunCommond = function (name) {
                this.emitAppEvent("medical/base/deptconclusiontpl/rowbtnclick", this.UniId, name, this.Row.RowData.FID);
            };
            return DeptConclusionTplRowButtonDomVm;
        }(baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomVm));
        DeptConclusionTplRowButtonDom.DeptConclusionTplRowButtonDomVm = DeptConclusionTplRowButtonDomVm;
        var DeptConclusionTplRowButtonDomStates = (function (_super) {
            __extends(DeptConclusionTplRowButtonDomStates, _super);
            function DeptConclusionTplRowButtonDomStates() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplRowButtonDomStates;
        }(baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomStates));
        DeptConclusionTplRowButtonDom.DeptConclusionTplRowButtonDomStates = DeptConclusionTplRowButtonDomStates;
        var DeptConclusionTplRowButtonDomProps = (function (_super) {
            __extends(DeptConclusionTplRowButtonDomProps, _super);
            function DeptConclusionTplRowButtonDomProps() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplRowButtonDomProps;
        }(baseRowButton.MedicalBaseRowButtonDom.MedicalBaseRowButtonDomProps));
        DeptConclusionTplRowButtonDom.DeptConclusionTplRowButtonDomProps = DeptConclusionTplRowButtonDomProps;
    })(DeptConclusionTplRowButtonDom = exports.DeptConclusionTplRowButtonDom || (exports.DeptConclusionTplRowButtonDom = {}));
});
