var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Text"], function (require, exports, React, domFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var CombinationExamItemInsertMasterRowDom;
    (function (CombinationExamItemInsertMasterRowDom) {
        var CombinationExamItemInsertMasterRowDomAction = (function (_super) {
            __extends(CombinationExamItemInsertMasterRowDomAction, _super);
            function CombinationExamItemInsertMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemInsertMasterRowDomAction;
        }(domCore.DomAction));
        CombinationExamItemInsertMasterRowDom.CombinationExamItemInsertMasterRowDomAction = CombinationExamItemInsertMasterRowDomAction;
        var CombinationExamItemInsertMasterRowDomReact = (function (_super) {
            __extends(CombinationExamItemInsertMasterRowDomReact, _super);
            function CombinationExamItemInsertMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new CombinationExamItemInsertMasterRowDomStates();
            }
            CombinationExamItemInsertMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "1"}, React.createElement("ul", {className: "tabs"}, React.createElement("li", {className: "tab-title active"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "套餐项目", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "tabs-content"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "acs-form clearfix"}, React.createElement("div", {className: "large-6 small-12 columns"}, React.createElement("div", {className: "columns acs-lable"}, React.createElement("label", {className: "right required"}, "套餐名称：")), React.createElement("div", {className: "columns acs-input"}, this.props.Vm.ItemVm.intoDom())), React.createElement("div", {className: "large-6 small-12 columns"}, React.createElement("div", {className: "columns acs-lable"}, React.createElement("label", {className: "right required"}, "项目名称：")), React.createElement("div", {className: "columns acs-input"}, this.props.Vm.PackageVm.intoDom())))))));
            };
            CombinationExamItemInsertMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            CombinationExamItemInsertMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            CombinationExamItemInsertMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return CombinationExamItemInsertMasterRowDomReact;
        }(domCore.DomReact));
        CombinationExamItemInsertMasterRowDom.CombinationExamItemInsertMasterRowDomReact = CombinationExamItemInsertMasterRowDomReact;
        var CombinationExamItemInsertMasterRowDomVm = (function (_super) {
            __extends(CombinationExamItemInsertMasterRowDomVm, _super);
            function CombinationExamItemInsertMasterRowDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = CombinationExamItemInsertMasterRowDomReact;
                this.RowData = {};
                this.ItemVm = new textFile.ui.TextVm();
                this.ItemVm.LegalObj.Kind = "notNull";
                this.ItemVm.onChangeHandle(function (str) {
                    _this.RowData.ItemId = str;
                    return true;
                });
                this.PackageVm = new textFile.ui.TextVm();
                this.PackageVm.LegalObj.Kind = "notNull";
                this.PackageVm.onChangeHandle(function (str) {
                    _this.RowData.PackageId = str;
                    return true;
                });
            }
            return CombinationExamItemInsertMasterRowDomVm;
        }(domCore.DomVm));
        CombinationExamItemInsertMasterRowDom.CombinationExamItemInsertMasterRowDomVm = CombinationExamItemInsertMasterRowDomVm;
        var CombinationExamItemInsertMasterRowDomStates = (function (_super) {
            __extends(CombinationExamItemInsertMasterRowDomStates, _super);
            function CombinationExamItemInsertMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemInsertMasterRowDomStates;
        }(domCore.DomStates));
        CombinationExamItemInsertMasterRowDom.CombinationExamItemInsertMasterRowDomStates = CombinationExamItemInsertMasterRowDomStates;
        var CombinationExamItemInsertMasterRowDomProps = (function (_super) {
            __extends(CombinationExamItemInsertMasterRowDomProps, _super);
            function CombinationExamItemInsertMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemInsertMasterRowDomProps;
        }(domCore.DomProps));
        CombinationExamItemInsertMasterRowDom.CombinationExamItemInsertMasterRowDomProps = CombinationExamItemInsertMasterRowDomProps;
    })(CombinationExamItemInsertMasterRowDom = exports.CombinationExamItemInsertMasterRowDom || (exports.CombinationExamItemInsertMasterRowDom = {}));
});
