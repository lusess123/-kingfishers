var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./DepartDetailMasterRowDom"], function (require, exports, React, domFile, masterRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var DepartDetailRowDom;
    (function (DepartDetailRowDom) {
        var DepartDetailRowDomAction = (function (_super) {
            __extends(DepartDetailRowDomAction, _super);
            function DepartDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return DepartDetailRowDomAction;
        }(domCore.DomAction));
        DepartDetailRowDom.DepartDetailRowDomAction = DepartDetailRowDomAction;
        var DepartDetailRowDomReact = (function (_super) {
            __extends(DepartDetailRowDomReact, _super);
            function DepartDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DepartDetailRowDomStates();
            }
            DepartDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title Hu-pointer", onClick: function () { _this.fun_itemTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : "Hm-toggle-item"}, this.props.Vm.MasterRow.intoDom()));
            };
            DepartDetailRowDomReact.prototype.fun_rowTitleClick = function () {
                this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
                this.forceUpdate();
            };
            DepartDetailRowDomReact.prototype.fun_itemTitleClick = function () {
                this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
                this.forceUpdate();
            };
            DepartDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DepartDetailRowDomReact;
        }(domCore.DomReact));
        DepartDetailRowDom.DepartDetailRowDomReact = DepartDetailRowDomReact;
        var DepartDetailRowDomVm = (function (_super) {
            __extends(DepartDetailRowDomVm, _super);
            function DepartDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = DepartDetailRowDomReact;
                if (config) {
                    this.MasterRow = new masterRowFile.DepartDetailMasterRowDom.DepartDetailMasterRowDomVm(config.MasterConfig);
                }
            }
            return DepartDetailRowDomVm;
        }(domCore.DomVm));
        DepartDetailRowDom.DepartDetailRowDomVm = DepartDetailRowDomVm;
        var DepartDetailRowDomStates = (function (_super) {
            __extends(DepartDetailRowDomStates, _super);
            function DepartDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return DepartDetailRowDomStates;
        }(domCore.DomStates));
        DepartDetailRowDom.DepartDetailRowDomStates = DepartDetailRowDomStates;
        var DepartDetailRowDomProps = (function (_super) {
            __extends(DepartDetailRowDomProps, _super);
            function DepartDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return DepartDetailRowDomProps;
        }(domCore.DomProps));
        DepartDetailRowDom.DepartDetailRowDomProps = DepartDetailRowDomProps;
    })(DepartDetailRowDom = exports.DepartDetailRowDom || (exports.DepartDetailRowDom = {}));
});
