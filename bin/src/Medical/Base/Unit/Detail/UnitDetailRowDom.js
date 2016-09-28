var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./UnitDetailMasterRowDom"], function (require, exports, React, domFile, masterRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var UnitDetailRowDom;
    (function (UnitDetailRowDom) {
        var UnitDetailRowDomAction = (function (_super) {
            __extends(UnitDetailRowDomAction, _super);
            function UnitDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return UnitDetailRowDomAction;
        }(domCore.DomAction));
        UnitDetailRowDom.UnitDetailRowDomAction = UnitDetailRowDomAction;
        var UnitDetailRowDomReact = (function (_super) {
            __extends(UnitDetailRowDomReact, _super);
            function UnitDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new UnitDetailRowDomStates();
            }
            UnitDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title Hu-pointer", onClick: function () { _this.fun_itemTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : "Hm-toggle-item"}, this.props.Vm.MasterRow.intoDom()));
            };
            UnitDetailRowDomReact.prototype.fun_rowTitleClick = function () {
                this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
                this.forceUpdate();
            };
            UnitDetailRowDomReact.prototype.fun_itemTitleClick = function () {
                this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
                this.forceUpdate();
            };
            UnitDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UnitDetailRowDomReact;
        }(domCore.DomReact));
        UnitDetailRowDom.UnitDetailRowDomReact = UnitDetailRowDomReact;
        var UnitDetailRowDomVm = (function (_super) {
            __extends(UnitDetailRowDomVm, _super);
            function UnitDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = UnitDetailRowDomReact;
                if (config) {
                    this.MasterRow = new masterRowFile.UnitDetailMasterRowDom.UnitDetailMasterRowDomVm(config.MasterConfig);
                }
            }
            return UnitDetailRowDomVm;
        }(domCore.DomVm));
        UnitDetailRowDom.UnitDetailRowDomVm = UnitDetailRowDomVm;
        var UnitDetailRowDomStates = (function (_super) {
            __extends(UnitDetailRowDomStates, _super);
            function UnitDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return UnitDetailRowDomStates;
        }(domCore.DomStates));
        UnitDetailRowDom.UnitDetailRowDomStates = UnitDetailRowDomStates;
        var UnitDetailRowDomProps = (function (_super) {
            __extends(UnitDetailRowDomProps, _super);
            function UnitDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return UnitDetailRowDomProps;
        }(domCore.DomProps));
        UnitDetailRowDom.UnitDetailRowDomProps = UnitDetailRowDomProps;
    })(UnitDetailRowDom = exports.UnitDetailRowDom || (exports.UnitDetailRowDom = {}));
});
