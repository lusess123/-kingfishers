var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom"], function (require, exports, React, domFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemDetailMasterRowDom;
    (function (ExamItemDetailMasterRowDom) {
        var ExamItemDetailMasterRowDomAction = (function (_super) {
            __extends(ExamItemDetailMasterRowDomAction, _super);
            function ExamItemDetailMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamItemDetailMasterRowDomAction;
        }(domCore.DomAction));
        ExamItemDetailMasterRowDom.ExamItemDetailMasterRowDomAction = ExamItemDetailMasterRowDomAction;
        var ExamItemDetailMasterRowDomReact = (function (_super) {
            __extends(ExamItemDetailMasterRowDomReact, _super);
            function ExamItemDetailMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemDetailMasterRowDomStates();
            }
            ExamItemDetailMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "1"}, React.createElement("ul", {className: "tabs"}, React.createElement("li", {className: "tab-title active"}, React.createElement("a", {onClick: function () { _this.fun_titleClick(); }}, "体检项目明细", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsFormHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.SimpleCode))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "项目代码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.ItemCode))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "项目名称：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.Name))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "所属科室：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.DepartmentId))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "项目分类：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.ItemCategory))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "单位：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.Unit))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "参考上限：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.UpperLimit))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "参考下限：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.LowerLimit))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "价格：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.Price))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "序号：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.Order))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "体检结果类型：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.ResultClass))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "备注：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.Remark))))))));
            };
            ExamItemDetailMasterRowDomReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
                this.forceUpdate();
            };
            ExamItemDetailMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamItemDetailMasterRowDomReact;
        }(domCore.DomReact));
        ExamItemDetailMasterRowDom.ExamItemDetailMasterRowDomReact = ExamItemDetailMasterRowDomReact;
        var ExamItemDetailMasterRowDomVm = (function (_super) {
            __extends(ExamItemDetailMasterRowDomVm, _super);
            function ExamItemDetailMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = ExamItemDetailMasterRowDomReact;
                if (config) {
                    this.RowData = config.RowData;
                }
            }
            ExamItemDetailMasterRowDomVm.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return ExamItemDetailMasterRowDomVm;
        }(domCore.DomVm));
        ExamItemDetailMasterRowDom.ExamItemDetailMasterRowDomVm = ExamItemDetailMasterRowDomVm;
        var ExamItemDetailMasterRowDomStates = (function (_super) {
            __extends(ExamItemDetailMasterRowDomStates, _super);
            function ExamItemDetailMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamItemDetailMasterRowDomStates;
        }(domCore.DomStates));
        ExamItemDetailMasterRowDom.ExamItemDetailMasterRowDomStates = ExamItemDetailMasterRowDomStates;
        var ExamItemDetailMasterRowDomProps = (function (_super) {
            __extends(ExamItemDetailMasterRowDomProps, _super);
            function ExamItemDetailMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamItemDetailMasterRowDomProps;
        }(domCore.DomProps));
        ExamItemDetailMasterRowDom.ExamItemDetailMasterRowDomProps = ExamItemDetailMasterRowDomProps;
    })(ExamItemDetailMasterRowDom = exports.ExamItemDetailMasterRowDom || (exports.ExamItemDetailMasterRowDom = {}));
});
