var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom"], function (require, exports, domFile) {
    "use strict";
    var domCore = domFile.Core;
    var MedicalBaseSearchFormDom;
    (function (MedicalBaseSearchFormDom) {
        var MedicalBaseSearchFormDomAction = (function (_super) {
            __extends(MedicalBaseSearchFormDomAction, _super);
            function MedicalBaseSearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return MedicalBaseSearchFormDomAction;
        }(domCore.DomAction));
        MedicalBaseSearchFormDom.MedicalBaseSearchFormDomAction = MedicalBaseSearchFormDomAction;
        var MedicalBaseSearchFormDomReact = (function (_super) {
            __extends(MedicalBaseSearchFormDomReact, _super);
            function MedicalBaseSearchFormDomReact() {
                _super.apply(this, arguments);
            }
            MedicalBaseSearchFormDomReact.prototype.pSender = function () {
                return null;
            };
            MedicalBaseSearchFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            MedicalBaseSearchFormDomReact.prototype.fun_linkText = function (e, searchCol) {
                var _val = e.target["value"];
                this.props.Vm[searchCol] = _val;
                if (!_val || _val == "") {
                    this.props.Vm.IsHideClearBtn = true;
                }
                else {
                    this.props.Vm.IsHideClearBtn = false;
                }
                this.forceUpdate();
            };
            MedicalBaseSearchFormDomReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            MedicalBaseSearchFormDomReact.prototype.fun_seachClearBtn = function () {
                this.clearSearchVal();
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
            };
            MedicalBaseSearchFormDomReact.prototype.clearSearchVal = function () {
            };
            return MedicalBaseSearchFormDomReact;
        }(domCore.DomReact));
        MedicalBaseSearchFormDom.MedicalBaseSearchFormDomReact = MedicalBaseSearchFormDomReact;
        var MedicalBaseSearchFormDomVm = (function (_super) {
            __extends(MedicalBaseSearchFormDomVm, _super);
            function MedicalBaseSearchFormDomVm(config) {
                _super.call(this);
                this.ReactType = MedicalBaseSearchFormDomReact;
                this.UniId = "";
                this.IsHideClearBtn = true;
            }
            MedicalBaseSearchFormDomVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("loadpagedata", this.UniId, pageIndex);
            };
            return MedicalBaseSearchFormDomVm;
        }(domCore.DomVm));
        MedicalBaseSearchFormDom.MedicalBaseSearchFormDomVm = MedicalBaseSearchFormDomVm;
        var MedicalBaseSearchFormDomStates = (function (_super) {
            __extends(MedicalBaseSearchFormDomStates, _super);
            function MedicalBaseSearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return MedicalBaseSearchFormDomStates;
        }(domCore.DomStates));
        MedicalBaseSearchFormDom.MedicalBaseSearchFormDomStates = MedicalBaseSearchFormDomStates;
        var MedicalBaseSearchFormDomProps = (function (_super) {
            __extends(MedicalBaseSearchFormDomProps, _super);
            function MedicalBaseSearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return MedicalBaseSearchFormDomProps;
        }(domCore.DomProps));
        MedicalBaseSearchFormDom.MedicalBaseSearchFormDomProps = MedicalBaseSearchFormDomProps;
    })(MedicalBaseSearchFormDom = exports.MedicalBaseSearchFormDom || (exports.MedicalBaseSearchFormDom = {}));
});
