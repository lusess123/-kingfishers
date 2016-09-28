var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../Data"], function (require, exports, React, domFile, dataFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamPackageDetailMasterRowDom;
    (function (ExamPackageDetailMasterRowDom) {
        var ExamPackageDetailMasterRowDomAction = (function (_super) {
            __extends(ExamPackageDetailMasterRowDomAction, _super);
            function ExamPackageDetailMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamPackageDetailMasterRowDomAction;
        }(domCore.DomAction));
        ExamPackageDetailMasterRowDom.ExamPackageDetailMasterRowDomAction = ExamPackageDetailMasterRowDomAction;
        var ExamPackageDetailMasterRowDomReact = (function (_super) {
            __extends(ExamPackageDetailMasterRowDomReact, _super);
            function ExamPackageDetailMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamPackageDetailMasterRowDomStates();
            }
            ExamPackageDetailMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleClick(); }}, "体检套餐明细", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsFormHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.SimpleCode))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.Name))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "团体价格：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.GroupPrice))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "个人价格：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.IndividualPrice))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "年龄上限：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.AgeUpperLimit))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "年龄下限：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "left"}, this.props.Vm.RowData.AgeLowerLimit))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "适用性别：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.GetGenderText(this.props.Vm.RowData.Gender)))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "备注：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.Remark))))))));
            };
            ExamPackageDetailMasterRowDomReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
                this.forceUpdate();
            };
            ExamPackageDetailMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamPackageDetailMasterRowDomReact;
        }(domCore.DomReact));
        ExamPackageDetailMasterRowDom.ExamPackageDetailMasterRowDomReact = ExamPackageDetailMasterRowDomReact;
        var ExamPackageDetailMasterRowDomVm = (function (_super) {
            __extends(ExamPackageDetailMasterRowDomVm, _super);
            function ExamPackageDetailMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = ExamPackageDetailMasterRowDomReact;
                if (config) {
                    this.RowData = config.RowData;
                }
            }
            ExamPackageDetailMasterRowDomVm.prototype.GetGenderText = function (Id) {
                var List = dataFile.ExamPackage.ExamPackageGenderData;
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return ExamPackageDetailMasterRowDomVm;
        }(domCore.DomVm));
        ExamPackageDetailMasterRowDom.ExamPackageDetailMasterRowDomVm = ExamPackageDetailMasterRowDomVm;
        var ExamPackageDetailMasterRowDomStates = (function (_super) {
            __extends(ExamPackageDetailMasterRowDomStates, _super);
            function ExamPackageDetailMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamPackageDetailMasterRowDomStates;
        }(domCore.DomStates));
        ExamPackageDetailMasterRowDom.ExamPackageDetailMasterRowDomStates = ExamPackageDetailMasterRowDomStates;
        var ExamPackageDetailMasterRowDomProps = (function (_super) {
            __extends(ExamPackageDetailMasterRowDomProps, _super);
            function ExamPackageDetailMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamPackageDetailMasterRowDomProps;
        }(domCore.DomProps));
        ExamPackageDetailMasterRowDom.ExamPackageDetailMasterRowDomProps = ExamPackageDetailMasterRowDomProps;
    })(ExamPackageDetailMasterRowDom = exports.ExamPackageDetailMasterRowDom || (exports.ExamPackageDetailMasterRowDom = {}));
});
