var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./CombinationExamItemDetailMasterRowDom"], function (require, exports, React, domFile, masterRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var CombinationExamItemDetailRowDom;
    (function (CombinationExamItemDetailRowDom) {
        var CombinationExamItemDetailRowDomAction = (function (_super) {
            __extends(CombinationExamItemDetailRowDomAction, _super);
            function CombinationExamItemDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemDetailRowDomAction;
        }(domCore.DomAction));
        CombinationExamItemDetailRowDom.CombinationExamItemDetailRowDomAction = CombinationExamItemDetailRowDomAction;
        var CombinationExamItemDetailRowDomReact = (function (_super) {
            __extends(CombinationExamItemDetailRowDomReact, _super);
            function CombinationExamItemDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new CombinationExamItemDetailRowDomStates();
            }
            CombinationExamItemDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title acsPointer", onClick: function () { _this.fun_itemTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : "acs-toggle-item"}, this.props.Vm.MasterRow.intoDom()));
            };
            CombinationExamItemDetailRowDomReact.prototype.fun_rowTitleClick = function () {
                this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
                this.forceUpdate();
            };
            CombinationExamItemDetailRowDomReact.prototype.fun_itemTitleClick = function () {
                this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
                this.forceUpdate();
            };
            CombinationExamItemDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return CombinationExamItemDetailRowDomReact;
        }(domCore.DomReact));
        CombinationExamItemDetailRowDom.CombinationExamItemDetailRowDomReact = CombinationExamItemDetailRowDomReact;
        var CombinationExamItemDetailRowDomVm = (function (_super) {
            __extends(CombinationExamItemDetailRowDomVm, _super);
            function CombinationExamItemDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = CombinationExamItemDetailRowDomReact;
                if (config) {
                    this.MasterRow = new masterRowFile.CombinationExamItemDetailMasterRowDom.CombinationExamItemDetailMasterRowDomVm(config.MasterConfig);
                }
            }
            return CombinationExamItemDetailRowDomVm;
        }(domCore.DomVm));
        CombinationExamItemDetailRowDom.CombinationExamItemDetailRowDomVm = CombinationExamItemDetailRowDomVm;
        var CombinationExamItemDetailRowDomStates = (function (_super) {
            __extends(CombinationExamItemDetailRowDomStates, _super);
            function CombinationExamItemDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemDetailRowDomStates;
        }(domCore.DomStates));
        CombinationExamItemDetailRowDom.CombinationExamItemDetailRowDomStates = CombinationExamItemDetailRowDomStates;
        var CombinationExamItemDetailRowDomProps = (function (_super) {
            __extends(CombinationExamItemDetailRowDomProps, _super);
            function CombinationExamItemDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemDetailRowDomProps;
        }(domCore.DomProps));
        CombinationExamItemDetailRowDom.CombinationExamItemDetailRowDomProps = CombinationExamItemDetailRowDomProps;
    })(CombinationExamItemDetailRowDom = exports.CombinationExamItemDetailRowDom || (exports.CombinationExamItemDetailRowDom = {}));
});
