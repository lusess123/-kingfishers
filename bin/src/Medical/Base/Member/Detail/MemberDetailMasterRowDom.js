var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../Common/Data"], function (require, exports, React, domFile, constantData) {
    "use strict";
    var domCore = domFile.Core;
    var MemberDetailMasterRowDom;
    (function (MemberDetailMasterRowDom) {
        var MemberDetailMasterRowDomAction = (function (_super) {
            __extends(MemberDetailMasterRowDomAction, _super);
            function MemberDetailMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return MemberDetailMasterRowDomAction;
        }(domCore.DomAction));
        MemberDetailMasterRowDom.MemberDetailMasterRowDomAction = MemberDetailMasterRowDomAction;
        var MemberDetailMasterRowDomReact = (function (_super) {
            __extends(MemberDetailMasterRowDomReact, _super);
            function MemberDetailMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new MemberDetailMasterRowDomStates();
            }
            MemberDetailMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleClick(); }}, "个人明细", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsFormHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "档案编码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.FileNumber))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "单位名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.UnitId))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "姓名：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.Name))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "性别：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.GetText(constantData.Data.GenderTypeData, this.props.Vm.RowData.Gender)))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "出生日期：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.BirthDate))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "年龄：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.Age))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "婚姻状况：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.GetText(constantData.Data.MaritalTypeData, this.props.Vm.RowData.MaritalStatus)))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "民族：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.GetText(constantData.Data.NationTypeData, this.props.Vm.RowData.Nation)))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "籍贯：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.NativePlace))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "身份证：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.IDCard))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "工作单位：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.WorkUnit))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "职务：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.GetText(constantData.Data.JobTypeData, this.props.Vm.RowData.Job)))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "职称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.GetText(constantData.Data.JobTitleTypeData, this.props.Vm.RowData.JobTitle)))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "类型：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.GetText(constantData.Data.MemberTypeData, this.props.Vm.RowData.MemberType)))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "联系地址：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.Address))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "联系电话：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.Phone))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "既往病史：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.PastMedicalHistory))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "家族病史：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.FamilyMedicalHistory))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "体检次数：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.ExamCount))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "备注：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.RowData.Remark))))))));
            };
            MemberDetailMasterRowDomReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
                this.forceUpdate();
            };
            MemberDetailMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MemberDetailMasterRowDomReact;
        }(domCore.DomReact));
        MemberDetailMasterRowDom.MemberDetailMasterRowDomReact = MemberDetailMasterRowDomReact;
        var MemberDetailMasterRowDomVm = (function (_super) {
            __extends(MemberDetailMasterRowDomVm, _super);
            function MemberDetailMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = MemberDetailMasterRowDomReact;
                if (config) {
                    this.RowData = config.RowData;
                }
            }
            MemberDetailMasterRowDomVm.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return MemberDetailMasterRowDomVm;
        }(domCore.DomVm));
        MemberDetailMasterRowDom.MemberDetailMasterRowDomVm = MemberDetailMasterRowDomVm;
        var MemberDetailMasterRowDomStates = (function (_super) {
            __extends(MemberDetailMasterRowDomStates, _super);
            function MemberDetailMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return MemberDetailMasterRowDomStates;
        }(domCore.DomStates));
        MemberDetailMasterRowDom.MemberDetailMasterRowDomStates = MemberDetailMasterRowDomStates;
        var MemberDetailMasterRowDomProps = (function (_super) {
            __extends(MemberDetailMasterRowDomProps, _super);
            function MemberDetailMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return MemberDetailMasterRowDomProps;
        }(domCore.DomProps));
        MemberDetailMasterRowDom.MemberDetailMasterRowDomProps = MemberDetailMasterRowDomProps;
    })(MemberDetailMasterRowDom = exports.MemberDetailMasterRowDom || (exports.MemberDetailMasterRowDom = {}));
});
