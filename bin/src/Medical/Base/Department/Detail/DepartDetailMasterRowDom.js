var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom"], function (require, exports, React, domFile) {
    "use strict";
    var domCore = domFile.Core;
    var DepartDetailMasterRowDom;
    (function (DepartDetailMasterRowDom) {
        var DepartDetailMasterRowDomAction = (function (_super) {
            __extends(DepartDetailMasterRowDomAction, _super);
            function DepartDetailMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return DepartDetailMasterRowDomAction;
        }(domCore.DomAction));
        DepartDetailMasterRowDom.DepartDetailMasterRowDomAction = DepartDetailMasterRowDomAction;
        var DepartDetailMasterRowDomReact = (function (_super) {
            __extends(DepartDetailMasterRowDomReact, _super);
            function DepartDetailMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DepartDetailMasterRowDomStates();
            }
            DepartDetailMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "1"}, React.createElement("ul", {className: "tabs"}, React.createElement("li", {className: "tab-title active"}, React.createElement("a", {onClick: function () { _this.fun_titleClick(); }}, "科室明细", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active" + (this.props.Vm.IsFormHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.FName))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "代码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.FNumber))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.SimpleCode))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "类别：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.DeptType))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "描述：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.Description))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "备注：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.Remark))))))));
            };
            DepartDetailMasterRowDomReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
                this.forceUpdate();
            };
            DepartDetailMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DepartDetailMasterRowDomReact;
        }(domCore.DomReact));
        DepartDetailMasterRowDom.DepartDetailMasterRowDomReact = DepartDetailMasterRowDomReact;
        var DepartDetailMasterRowDomVm = (function (_super) {
            __extends(DepartDetailMasterRowDomVm, _super);
            function DepartDetailMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = DepartDetailMasterRowDomReact;
                if (config) {
                    this.RowData = config.RowData;
                }
            }
            DepartDetailMasterRowDomVm.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return DepartDetailMasterRowDomVm;
        }(domCore.DomVm));
        DepartDetailMasterRowDom.DepartDetailMasterRowDomVm = DepartDetailMasterRowDomVm;
        var DepartDetailMasterRowDomStates = (function (_super) {
            __extends(DepartDetailMasterRowDomStates, _super);
            function DepartDetailMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return DepartDetailMasterRowDomStates;
        }(domCore.DomStates));
        DepartDetailMasterRowDom.DepartDetailMasterRowDomStates = DepartDetailMasterRowDomStates;
        var DepartDetailMasterRowDomProps = (function (_super) {
            __extends(DepartDetailMasterRowDomProps, _super);
            function DepartDetailMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return DepartDetailMasterRowDomProps;
        }(domCore.DomProps));
        DepartDetailMasterRowDom.DepartDetailMasterRowDomProps = DepartDetailMasterRowDomProps;
    })(DepartDetailMasterRowDom = exports.DepartDetailMasterRowDom || (exports.DepartDetailMasterRowDom = {}));
});
