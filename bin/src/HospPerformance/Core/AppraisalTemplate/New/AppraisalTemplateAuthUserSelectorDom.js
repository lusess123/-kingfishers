var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./AppraisalTemplateUserSelectorDom"], function (require, exports, domFile, selectorFile) {
    "use strict";
    var domCore = domFile.Core;
    var AppraisalTemplateAuthUserSelectorDom;
    (function (AppraisalTemplateAuthUserSelectorDom) {
        var AppraisalTemplateAuthUserSelectorDomAction = (function (_super) {
            __extends(AppraisalTemplateAuthUserSelectorDomAction, _super);
            function AppraisalTemplateAuthUserSelectorDomAction() {
                _super.apply(this, arguments);
            }
            return AppraisalTemplateAuthUserSelectorDomAction;
        }(domCore.DomAction));
        AppraisalTemplateAuthUserSelectorDom.AppraisalTemplateAuthUserSelectorDomAction = AppraisalTemplateAuthUserSelectorDomAction;
        var AppraisalTemplateAuthUserSelectorDomReact = (function (_super) {
            __extends(AppraisalTemplateAuthUserSelectorDomReact, _super);
            function AppraisalTemplateAuthUserSelectorDomReact() {
                _super.apply(this, arguments);
                this.state = new AppraisalTemplateAuthUserSelectorDomStates();
            }
            AppraisalTemplateAuthUserSelectorDomReact.prototype.pSender = function () {
                return _super.prototype.pSender.call(this);
            };
            AppraisalTemplateAuthUserSelectorDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AppraisalTemplateAuthUserSelectorDomReact;
        }(selectorFile.AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomReact));
        AppraisalTemplateAuthUserSelectorDom.AppraisalTemplateAuthUserSelectorDomReact = AppraisalTemplateAuthUserSelectorDomReact;
        var AppraisalTemplateAuthUserSelectorDomVm = (function (_super) {
            __extends(AppraisalTemplateAuthUserSelectorDomVm, _super);
            function AppraisalTemplateAuthUserSelectorDomVm(config) {
                _super.call(this, config);
                this.ReactType = AppraisalTemplateAuthUserSelectorDomReact;
            }
            AppraisalTemplateAuthUserSelectorDomVm.prototype.save = function () {
                this.emitAppEvent("AppraisalTemplateAuthUserSelectorSave", this.UniId);
            };
            return AppraisalTemplateAuthUserSelectorDomVm;
        }(selectorFile.AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomVm));
        AppraisalTemplateAuthUserSelectorDom.AppraisalTemplateAuthUserSelectorDomVm = AppraisalTemplateAuthUserSelectorDomVm;
        var AppraisalTemplateAuthUserSelectorDomStates = (function (_super) {
            __extends(AppraisalTemplateAuthUserSelectorDomStates, _super);
            function AppraisalTemplateAuthUserSelectorDomStates() {
                _super.apply(this, arguments);
            }
            return AppraisalTemplateAuthUserSelectorDomStates;
        }(domCore.DomStates));
        AppraisalTemplateAuthUserSelectorDom.AppraisalTemplateAuthUserSelectorDomStates = AppraisalTemplateAuthUserSelectorDomStates;
        var AppraisalTemplateAuthUserSelectorDomProps = (function (_super) {
            __extends(AppraisalTemplateAuthUserSelectorDomProps, _super);
            function AppraisalTemplateAuthUserSelectorDomProps() {
                _super.apply(this, arguments);
            }
            return AppraisalTemplateAuthUserSelectorDomProps;
        }(selectorFile.AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomProps));
        AppraisalTemplateAuthUserSelectorDom.AppraisalTemplateAuthUserSelectorDomProps = AppraisalTemplateAuthUserSelectorDomProps;
    })(AppraisalTemplateAuthUserSelectorDom = exports.AppraisalTemplateAuthUserSelectorDom || (exports.AppraisalTemplateAuthUserSelectorDom = {}));
});
