var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./BaseMDMasterDom", "./BaseMDDetailRowDom"], function (require, exports, domFile, React, baseMDMasterDomFile, BaseMDDetailRowDomFile) {
    "use strict";
    var domCore = domFile.Core;
    var BaseMDRowDom;
    (function (BaseMDRowDom) {
        var BaseMDRowDomAction = (function (_super) {
            __extends(BaseMDRowDomAction, _super);
            function BaseMDRowDomAction() {
                _super.apply(this, arguments);
            }
            return BaseMDRowDomAction;
        }(domCore.DomAction));
        BaseMDRowDom.BaseMDRowDomAction = BaseMDRowDomAction;
        var BaseMDRowDomReact = (function (_super) {
            __extends(BaseMDRowDomReact, _super);
            function BaseMDRowDomReact() {
                _super.apply(this, arguments);
                this.state = new BaseMDRowDomStates();
            }
            BaseMDRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.BaseMDRowShell.IsDetailHide = !this.props.Vm.BaseMDRowShell.IsDetailHide;
                this.forceUpdate();
            };
            BaseMDRowDomReact.prototype.fun_rowTitleClick = function () {
                this.props.Vm.BaseMDRowShell.IsRowHide = !this.props.Vm.BaseMDRowShell.IsRowHide;
                this.forceUpdate();
            };
            BaseMDRowDomReact.prototype.fun_masterTitleClick = function () {
                this.props.Vm.BaseMDRowShell.IsMasterHide = !this.props.Vm.BaseMDRowShell.IsMasterHide;
                this.forceUpdate();
            };
            BaseMDRowDomReact.prototype.fun_addNewButtonRow = function () {
                this.props.Vm.newRow();
            };
            BaseMDRowDomReact.prototype.react_getDetail = function () {
                var _this = this;
                return React.createElement("div", {className: "2"}, React.createElement("ul", {className: "tabs"}, React.createElement("li", {className: "tab-title active"}, React.createElement("a", {onClick: function () { _this.fun_detailTitleClick(); }}, this.props.Vm.DetailTitle, React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.BaseMDRowShell.IsDetailHide ? "up" : "down")})))), React.createElement("div", {className: "tabs-content"}, React.createElement("div", {className: "Hm-table active " + (this.props.Vm.BaseMDRowShell.IsDetailHide ? "hide" : "")}, React.createElement("table", {className: "table"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC", style: { width: "1em" }}), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), this.props.Vm.BaseMDRowReactHook.ThReactList, React.createElement("th", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_addNewButtonRow(); }})))), React.createElement("tbody", null, this.props.Vm.DetailRowList.map(function (row) {
                    return row.intoDom();
                }))))));
            };
            BaseMDRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "Hu-row-title Hu-pointer", onClick: function () { _this.fun_rowTitleClick(); }}, this.props.Vm.BaseMDRowShell.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.BaseMDRowShell.IsRowHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.BaseMDRowShell.IsRowHide ? "hide" : ""}, React.createElement("div", {className: "1"}, React.createElement("ul", {className: "tabs"}, React.createElement("li", {className: "tab-title active"}, React.createElement("a", {onClick: function () { _this.fun_masterTitleClick(); }}, this.props.Vm.MasterTitle, React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.BaseMDRowShell.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "tabs-content"}, React.createElement("div", {className: "content active " + (this.props.Vm.BaseMDRowShell.IsMasterHide ? "hide" : "")}, this.props.Vm.MasterObj.intoDom()))), this.props.Vm.HasNoDetail ? null : this.react_getDetail()));
            };
            BaseMDRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return BaseMDRowDomReact;
        }(domCore.DomReact));
        BaseMDRowDom.BaseMDRowDomReact = BaseMDRowDomReact;
        var BaseMDRowDomVm = (function (_super) {
            __extends(BaseMDRowDomVm, _super);
            function BaseMDRowDomVm() {
                _super.call(this);
                this.ReactType = BaseMDRowDomReact;
                this.DetailRowList = [];
                this.MasterTitle = "主表";
                this.DetailTitle = "从表";
                this.HasNoDetail = false;
                this.BaseMDRowShell = { Index: 0 };
                this.BaseMDRowReactHook =
                    {
                        ThReactList: [
                            React.createElement("th", null, React.createElement("span", null, "按钮名称")),
                            React.createElement("th", null, React.createElement("span", null, "按钮值")),
                            React.createElement("th", null, React.createElement("span", null, "编码")),
                            React.createElement("th", null, React.createElement("span", null, "排序编号"))
                        ]
                    };
                this.DetailRowList = [new BaseMDDetailRowDomFile.BaseMDDetailRowDom.BaseMDDetailRowDomVm()];
                this.MasterObj = new baseMDMasterDomFile.BaseMDMasterDom.BaseMDMasterDomVm();
            }
            BaseMDRowDomVm.prototype.reactNewRow = function () {
                this.newRow();
            };
            BaseMDRowDomVm.prototype.newRow = function () {
            };
            return BaseMDRowDomVm;
        }(domCore.DomVm));
        BaseMDRowDom.BaseMDRowDomVm = BaseMDRowDomVm;
        var BaseMDRowDomStates = (function (_super) {
            __extends(BaseMDRowDomStates, _super);
            function BaseMDRowDomStates() {
                _super.apply(this, arguments);
            }
            return BaseMDRowDomStates;
        }(domCore.DomStates));
        BaseMDRowDom.BaseMDRowDomStates = BaseMDRowDomStates;
        var BaseMDRowDomProps = (function (_super) {
            __extends(BaseMDRowDomProps, _super);
            function BaseMDRowDomProps() {
                _super.apply(this, arguments);
            }
            return BaseMDRowDomProps;
        }(domCore.DomProps));
        BaseMDRowDom.BaseMDRowDomProps = BaseMDRowDomProps;
    })(BaseMDRowDom = exports.BaseMDRowDom || (exports.BaseMDRowDom = {}));
});
