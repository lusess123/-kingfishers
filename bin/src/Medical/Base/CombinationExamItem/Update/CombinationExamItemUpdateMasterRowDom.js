var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Text"], function (require, exports, React, domFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var CombinationExamItemUpdateMasterRowDom;
    (function (CombinationExamItemUpdateMasterRowDom) {
        var CombinationExamItemUpdateMasterRowDomAction = (function (_super) {
            __extends(CombinationExamItemUpdateMasterRowDomAction, _super);
            function CombinationExamItemUpdateMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemUpdateMasterRowDomAction;
        }(domCore.DomAction));
        CombinationExamItemUpdateMasterRowDom.CombinationExamItemUpdateMasterRowDomAction = CombinationExamItemUpdateMasterRowDomAction;
        var CombinationExamItemUpdateMasterRowDomReact = (function (_super) {
            __extends(CombinationExamItemUpdateMasterRowDomReact, _super);
            function CombinationExamItemUpdateMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new CombinationExamItemUpdateMasterRowDomStates();
            }
            CombinationExamItemUpdateMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "1"}, React.createElement("ul", {className: "tabs"}, React.createElement("li", {className: "tab-title active"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "体检套餐", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "tabs-content"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "large-6 small-12 columns"}, React.createElement("div", {className: "columns acs-lable"}, React.createElement("label", {className: "right required"}, "套餐名称：")), React.createElement("div", {className: "columns acs-input"}, this.props.Vm.ItemVm.intoDom())), React.createElement("div", {className: "large-6 small-12 columns"}, React.createElement("div", {className: "columns acs-lable"}, React.createElement("label", {className: "right required"}, "项目名称：")), React.createElement("div", {className: "columns acs-input"}, this.props.Vm.PackageVm.intoDom()))))));
            };
            CombinationExamItemUpdateMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            CombinationExamItemUpdateMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            CombinationExamItemUpdateMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return CombinationExamItemUpdateMasterRowDomReact;
        }(domCore.DomReact));
        CombinationExamItemUpdateMasterRowDom.CombinationExamItemUpdateMasterRowDomReact = CombinationExamItemUpdateMasterRowDomReact;
        var CombinationExamItemUpdateMasterRowDomVm = (function (_super) {
            __extends(CombinationExamItemUpdateMasterRowDomVm, _super);
            function CombinationExamItemUpdateMasterRowDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = CombinationExamItemUpdateMasterRowDomReact;
                this.RowData = {};
                if (config) {
                    this.RowData = config.RowData;
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                    this.ItemVm = new textFile.ui.TextVm();
                    this.ItemVm.dataValueSet(this.RowData.ItemId);
                    this.ItemVm.LegalObj.Kind = "notNull";
                    this.ItemVm.onChangeHandle(function (str) {
                        _this.RowData.ItemId = str;
                        return true;
                    });
                    this.PackageVm = new textFile.ui.TextVm();
                    this.PackageVm.dataValueSet(this.RowData.PackageId);
                    this.PackageVm.LegalObj.Kind = "notNull";
                    this.PackageVm.onChangeHandle(function (str) {
                        _this.RowData.PackageId = str;
                        return true;
                    });
                }
            }
            return CombinationExamItemUpdateMasterRowDomVm;
        }(domCore.DomVm));
        CombinationExamItemUpdateMasterRowDom.CombinationExamItemUpdateMasterRowDomVm = CombinationExamItemUpdateMasterRowDomVm;
        var CombinationExamItemUpdateMasterRowDomStates = (function (_super) {
            __extends(CombinationExamItemUpdateMasterRowDomStates, _super);
            function CombinationExamItemUpdateMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemUpdateMasterRowDomStates;
        }(domCore.DomStates));
        CombinationExamItemUpdateMasterRowDom.CombinationExamItemUpdateMasterRowDomStates = CombinationExamItemUpdateMasterRowDomStates;
        var CombinationExamItemUpdateMasterRowDomProps = (function (_super) {
            __extends(CombinationExamItemUpdateMasterRowDomProps, _super);
            function CombinationExamItemUpdateMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemUpdateMasterRowDomProps;
        }(domCore.DomProps));
        CombinationExamItemUpdateMasterRowDom.CombinationExamItemUpdateMasterRowDomProps = CombinationExamItemUpdateMasterRowDomProps;
    })(CombinationExamItemUpdateMasterRowDom = exports.CombinationExamItemUpdateMasterRowDom || (exports.CombinationExamItemUpdateMasterRowDom = {}));
});
