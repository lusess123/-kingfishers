var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../Common/Data"], function (require, exports, React, domFile, constantData) {
    "use strict";
    var domCore = domFile.Core;
    var UnitDetailMasterRowDom;
    (function (UnitDetailMasterRowDom) {
        var UnitDetailMasterRowDomAction = (function (_super) {
            __extends(UnitDetailMasterRowDomAction, _super);
            function UnitDetailMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return UnitDetailMasterRowDomAction;
        }(domCore.DomAction));
        UnitDetailMasterRowDom.UnitDetailMasterRowDomAction = UnitDetailMasterRowDomAction;
        var UnitDetailMasterRowDomReact = (function (_super) {
            __extends(UnitDetailMasterRowDomReact, _super);
            function UnitDetailMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new UnitDetailMasterRowDomStates();
            }
            UnitDetailMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleClick(); }}, "单位明细", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsFormHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "单位编码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.Code))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "单位名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.Name))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "单位联系人：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.ContactPerson))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "联系电话：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.Phone))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "传真：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.Fax))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "邮箱：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.Email))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "单位类型：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.GetText(constantData.Data.UnitTypeData, this.props.Vm.RowData.Type)))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "单位地址：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.Address))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "单位简介：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.Description))))))));
            };
            UnitDetailMasterRowDomReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
                this.forceUpdate();
            };
            UnitDetailMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UnitDetailMasterRowDomReact;
        }(domCore.DomReact));
        UnitDetailMasterRowDom.UnitDetailMasterRowDomReact = UnitDetailMasterRowDomReact;
        var UnitDetailMasterRowDomVm = (function (_super) {
            __extends(UnitDetailMasterRowDomVm, _super);
            function UnitDetailMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = UnitDetailMasterRowDomReact;
                if (config) {
                    this.RowData = config.RowData;
                }
            }
            UnitDetailMasterRowDomVm.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return UnitDetailMasterRowDomVm;
        }(domCore.DomVm));
        UnitDetailMasterRowDom.UnitDetailMasterRowDomVm = UnitDetailMasterRowDomVm;
        var UnitDetailMasterRowDomStates = (function (_super) {
            __extends(UnitDetailMasterRowDomStates, _super);
            function UnitDetailMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return UnitDetailMasterRowDomStates;
        }(domCore.DomStates));
        UnitDetailMasterRowDom.UnitDetailMasterRowDomStates = UnitDetailMasterRowDomStates;
        var UnitDetailMasterRowDomProps = (function (_super) {
            __extends(UnitDetailMasterRowDomProps, _super);
            function UnitDetailMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return UnitDetailMasterRowDomProps;
        }(domCore.DomProps));
        UnitDetailMasterRowDom.UnitDetailMasterRowDomProps = UnitDetailMasterRowDomProps;
    })(UnitDetailMasterRowDom = exports.UnitDetailMasterRowDom || (exports.UnitDetailMasterRowDom = {}));
});
