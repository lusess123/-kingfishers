var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./GeneralExamTplDetailMasterRowDom"], function (require, exports, React, domFile, masterRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var GeneralExamTplDetailRowDom;
    (function (GeneralExamTplDetailRowDom) {
        var GeneralExamTplDetailRowDomAction = (function (_super) {
            __extends(GeneralExamTplDetailRowDomAction, _super);
            function GeneralExamTplDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplDetailRowDomAction;
        }(domCore.DomAction));
        GeneralExamTplDetailRowDom.GeneralExamTplDetailRowDomAction = GeneralExamTplDetailRowDomAction;
        var GeneralExamTplDetailRowDomReact = (function (_super) {
            __extends(GeneralExamTplDetailRowDomReact, _super);
            function GeneralExamTplDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new GeneralExamTplDetailRowDomStates();
            }
            GeneralExamTplDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title Hu-pointer", onClick: function () { _this.fun_itemTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : "Hm-toggle-item"}, this.props.Vm.MasterRow.intoDom(), React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_rowTitleClick(); }}, "关联项目", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsRowFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active" + (this.props.Vm.IsRowFormHide ? "hide" : "")}, React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-bordered table-striped"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC", style: { width: "1em" }}), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement("th", null, React.createElement("span", null, "项目名称")), React.createElement("th", null, React.createElement("span", null, "高于")), React.createElement("th", null, React.createElement("span", null, "低于")), React.createElement("th", null, React.createElement("span", null, "单位")), React.createElement("th", null, React.createElement("span", null, "是否阳性")), React.createElement("th", null, React.createElement("span", null, "关键词")))), React.createElement("tbody", null, this.props.Vm.DetailListData.map(function (data, index) {
                    return (React.createElement("tr", null, React.createElement("td", null, (index + 1).toString()), React.createElement("td", {className: "hide"}, data.FID), React.createElement("td", null, data.ItemName), React.createElement("td", null, data.GreaterThan), React.createElement("td", null, data.LessThan), React.createElement("td", null, data.Unit), React.createElement("td", null, data.IsPositive), React.createElement("td", null, data.KeyWord)));
                })))))))));
            };
            GeneralExamTplDetailRowDomReact.prototype.fun_rowTitleClick = function () {
                this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
                this.forceUpdate();
            };
            GeneralExamTplDetailRowDomReact.prototype.fun_itemTitleClick = function () {
                this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
                this.forceUpdate();
            };
            GeneralExamTplDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GeneralExamTplDetailRowDomReact;
        }(domCore.DomReact));
        GeneralExamTplDetailRowDom.GeneralExamTplDetailRowDomReact = GeneralExamTplDetailRowDomReact;
        var GeneralExamTplDetailRowDomVm = (function (_super) {
            __extends(GeneralExamTplDetailRowDomVm, _super);
            function GeneralExamTplDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = GeneralExamTplDetailRowDomReact;
                this.DetailListData = [];
                if (config) {
                    this.MasterRow = new masterRowFile.GeneralExamTplDetailMasterRowDom.GeneralExamTplDetailMasterRowDomVm(config.MasterConfig);
                    this.DetailListData = config.DetailListData;
                }
            }
            return GeneralExamTplDetailRowDomVm;
        }(domCore.DomVm));
        GeneralExamTplDetailRowDom.GeneralExamTplDetailRowDomVm = GeneralExamTplDetailRowDomVm;
        var GeneralExamTplDetailRowDomStates = (function (_super) {
            __extends(GeneralExamTplDetailRowDomStates, _super);
            function GeneralExamTplDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplDetailRowDomStates;
        }(domCore.DomStates));
        GeneralExamTplDetailRowDom.GeneralExamTplDetailRowDomStates = GeneralExamTplDetailRowDomStates;
        var GeneralExamTplDetailRowDomProps = (function (_super) {
            __extends(GeneralExamTplDetailRowDomProps, _super);
            function GeneralExamTplDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplDetailRowDomProps;
        }(domCore.DomProps));
        GeneralExamTplDetailRowDom.GeneralExamTplDetailRowDomProps = GeneralExamTplDetailRowDomProps;
    })(GeneralExamTplDetailRowDom = exports.GeneralExamTplDetailRowDom || (exports.GeneralExamTplDetailRowDom = {}));
});
