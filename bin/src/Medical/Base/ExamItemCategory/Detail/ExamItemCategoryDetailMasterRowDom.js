var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom"], function (require, exports, React, domFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemCategoryDetailMasterRowDom;
    (function (ExamItemCategoryDetailMasterRowDom) {
        var ExamItemCategoryDetailMasterRowDomAction = (function (_super) {
            __extends(ExamItemCategoryDetailMasterRowDomAction, _super);
            function ExamItemCategoryDetailMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryDetailMasterRowDomAction;
        }(domCore.DomAction));
        ExamItemCategoryDetailMasterRowDom.ExamItemCategoryDetailMasterRowDomAction = ExamItemCategoryDetailMasterRowDomAction;
        var ExamItemCategoryDetailMasterRowDomReact = (function (_super) {
            __extends(ExamItemCategoryDetailMasterRowDomReact, _super);
            function ExamItemCategoryDetailMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemCategoryDetailMasterRowDomStates();
            }
            ExamItemCategoryDetailMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "1"}, React.createElement("ul", {className: "tabs"}, React.createElement("li", {className: "tab-title active"}, React.createElement("a", {onClick: function () { _this.fun_titleClick(); }}, "体检项目分类明细", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsFormHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "代码：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.Code))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "名称：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.Name))))))));
            };
            ExamItemCategoryDetailMasterRowDomReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
                this.forceUpdate();
            };
            ExamItemCategoryDetailMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamItemCategoryDetailMasterRowDomReact;
        }(domCore.DomReact));
        ExamItemCategoryDetailMasterRowDom.ExamItemCategoryDetailMasterRowDomReact = ExamItemCategoryDetailMasterRowDomReact;
        var ExamItemCategoryDetailMasterRowDomVm = (function (_super) {
            __extends(ExamItemCategoryDetailMasterRowDomVm, _super);
            function ExamItemCategoryDetailMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = ExamItemCategoryDetailMasterRowDomReact;
                if (config) {
                    this.RowData = config.RowData;
                }
            }
            ExamItemCategoryDetailMasterRowDomVm.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return ExamItemCategoryDetailMasterRowDomVm;
        }(domCore.DomVm));
        ExamItemCategoryDetailMasterRowDom.ExamItemCategoryDetailMasterRowDomVm = ExamItemCategoryDetailMasterRowDomVm;
        var ExamItemCategoryDetailMasterRowDomStates = (function (_super) {
            __extends(ExamItemCategoryDetailMasterRowDomStates, _super);
            function ExamItemCategoryDetailMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryDetailMasterRowDomStates;
        }(domCore.DomStates));
        ExamItemCategoryDetailMasterRowDom.ExamItemCategoryDetailMasterRowDomStates = ExamItemCategoryDetailMasterRowDomStates;
        var ExamItemCategoryDetailMasterRowDomProps = (function (_super) {
            __extends(ExamItemCategoryDetailMasterRowDomProps, _super);
            function ExamItemCategoryDetailMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryDetailMasterRowDomProps;
        }(domCore.DomProps));
        ExamItemCategoryDetailMasterRowDom.ExamItemCategoryDetailMasterRowDomProps = ExamItemCategoryDetailMasterRowDomProps;
    })(ExamItemCategoryDetailMasterRowDom = exports.ExamItemCategoryDetailMasterRowDom || (exports.ExamItemCategoryDetailMasterRowDom = {}));
});
