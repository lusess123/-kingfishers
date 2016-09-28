var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../04page/BaseWebPage", "./../../02col/01single/TextArea"], function (require, exports, React, iocFile, basewedPageFile, textareaFile) {
    "use strict";
    var NewOrg;
    (function (NewOrg) {
        var NewOrgAction = (function (_super) {
            __extends(NewOrgAction, _super);
            function NewOrgAction() {
                _super.apply(this, arguments);
            }
            return NewOrgAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewOrg.NewOrgAction = NewOrgAction;
        var NewOrgReact = (function (_super) {
            __extends(NewOrgReact, _super);
            function NewOrgReact() {
                _super.apply(this, arguments);
                this.state = new NewOrgStates();
            }
            NewOrgReact.prototype.fun_orgName_change = function (e) {
                var _val = e.target["value"];
                this.props.Vm.OrgName = _val;
            };
            NewOrgReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, "新增组织机构"), React.createElement("div", null, React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "form-control-label pull-right required"}, "上级机构：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("span", null, "信使测试"))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "form-control-label pull-right required"}, "机构名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {placeholder: "请输入", type: "text", onChange: function (e) { _this.fun_orgName_change(e); }, value: this.props.Vm.OrgName}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "form-control-label pull-right required"}, "机构编码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {placeholder: "..", type: "text"}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "form-control-label pull-right"}, "机构描述：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextAreaObj.intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "form-control-label pull-right"}, "地址：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {placeholder: "..", type: "text"}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "columns Hu-label "}, React.createElement("label", {className: "form-control-label pull-right"}, "联系方式：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {placeholder: "..", type: "text"}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "form-control-label pull-right"}, "传真：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {placeholder: "..", type: "text"}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "form-control-label pull-right"}, "邮政编码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {placeholder: "..", type: "text"})))))))), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_submit(); }}, "提交")));
            };
            NewOrgReact.prototype.fun_submit = function () {
                this.props.Vm.addNodeByName();
            };
            return NewOrgReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewOrg.NewOrgReact = NewOrgReact;
        var NewOrgVm = (function (_super) {
            __extends(NewOrgVm, _super);
            function NewOrgVm() {
                _super.call(this);
                this.ReactType = NewOrgReact;
                this.TextAreaObj = new textareaFile.ui.TextAreaVm();
            }
            NewOrgVm.prototype.addNodeByName = function () {
                this.SendPageActor({ ToPanelName: "" }, this.OrgName);
                this.closePage();
            };
            return NewOrgVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewOrg.NewOrgVm = NewOrgVm;
        var NewOrgStates = (function (_super) {
            __extends(NewOrgStates, _super);
            function NewOrgStates() {
                _super.apply(this, arguments);
            }
            return NewOrgStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewOrg.NewOrgStates = NewOrgStates;
        var NewOrgProps = (function (_super) {
            __extends(NewOrgProps, _super);
            function NewOrgProps() {
                _super.apply(this, arguments);
            }
            return NewOrgProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewOrg.NewOrgProps = NewOrgProps;
        iocFile.Core.Ioc.Current().RegisterType("NEWORGPAGES", basewedPageFile.Web.BaseWebPageVm, NewOrgVm);
    })(NewOrg = exports.NewOrg || (exports.NewOrg = {}));
});
