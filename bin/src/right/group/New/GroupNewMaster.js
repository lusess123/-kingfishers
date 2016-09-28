var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/03selector/TreeSelector", "./../../../02col/01single/Text", "./../../../02col/01single/Hidden"], function (require, exports, domFile, React, treeSelectorFile, textFile, HideFile) {
    "use strict";
    var domCore = domFile.Core;
    var Right;
    (function (Right) {
        var GroupNewMasterAction = (function (_super) {
            __extends(GroupNewMasterAction, _super);
            function GroupNewMasterAction() {
                _super.apply(this, arguments);
            }
            return GroupNewMasterAction;
        }(domCore.DomAction));
        Right.GroupNewMasterAction = GroupNewMasterAction;
        var GroupNewMasterReact = (function (_super) {
            __extends(GroupNewMasterReact, _super);
            function GroupNewMasterReact() {
                _super.apply(this, arguments);
                this.state = new GroupNewMasterStates();
            }
            GroupNewMasterReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.GroupData[fName] = _val;
                this.forceUpdate();
            };
            GroupNewMasterReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            //机构名称
            GroupNewMasterReact.prototype.inputGroupName = function () {
                var _this = this;
                var _vm = this.getInputVm(this.props.Vm.GroupData.GroupName, "notNull");
                this.props.Vm.GroupNameTextVm = _vm;
                _vm.onChangeHandle(function (str) {
                    _this.props.Vm.GroupData.GroupName = str;
                    return true;
                });
                return _vm.intoDom();
            };
            //机构编码
            GroupNewMasterReact.prototype.inputGroupCode = function () {
                var _this = this;
                var _vm = this.getInputVm(this.props.Vm.GroupData.GroupID, "notNull");
                this.props.Vm.GroupCodeTextVm = _vm;
                _vm.onChangeHandle(function (str) {
                    _this.props.Vm.GroupData.GroupID = str;
                    return true;
                });
                return _vm.intoDom();
            };
            GroupNewMasterReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.dataValueSet(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            GroupNewMasterReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "上级机构：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label  "}, this.props.Vm.GroupData.FParentFName))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "机构名称：")), React.createElement("div", {className: "Hu-input"}, this.inputGroupName())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "机构编码：")), React.createElement("div", {className: "Hu-input"}, this.inputGroupCode())), React.createElement("div", {className: "col-lg-12 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "机构描述：")), React.createElement("div", {className: "Hu-input"}, React.createElement("textarea", {value: this.props.Vm.GroupData.GroupDescrible, onChange: function (e) { _this.fun_OnChange(e, "GroupDescrible"); }}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "地址：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.GroupData.FAddress, onChange: function (e) { _this.fun_OnChange(e, "FAddress"); }}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "联系方式：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.GroupData.FPhone, onChange: function (e) { _this.fun_OnChange(e, "FPhone"); }}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "传真：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.GroupData.Fax, onChange: function (e) { _this.fun_OnChange(e, "Fax"); }}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "邮政编码：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.GroupData.Post, onChange: function (e) { _this.fun_OnChange(e, "Post"); }}))))));
            };
            GroupNewMasterReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GroupNewMasterReact;
        }(domCore.DomReact));
        Right.GroupNewMasterReact = GroupNewMasterReact;
        var GroupNewMasterVm = (function (_super) {
            __extends(GroupNewMasterVm, _super);
            function GroupNewMasterVm() {
                _super.call(this);
                this.ReactType = GroupNewMasterReact;
                this.FID = new HideFile.ui.HiddenVm;
                this.ParentSelector = new treeSelectorFile.ui.TreeSingleSelectorVm();
                this.ParentSelector.RegName = "GroupCodeTable";
                //this.GroupProductSelect = new mulSelectorFile.ui.MulselectorVm();
                this.FID = new HideFile.ui.HiddenVm;
                this.GroupData = { GroupID: "", FParentFID: "", FParentFName: "", GroupName: "", GroupCode: "", FPhone: "", GroupDescrible: "", FAddress: "", Fax: "", Post: "" };
            }
            GroupNewMasterVm.prototype.legal = function () {
                var groupName = this.GroupNameTextVm.legal();
                var groupCode = this.GroupCodeTextVm.legal();
                var _res = groupName && groupCode;
                return _res;
            };
            GroupNewMasterVm.prototype.init = function () {
                this.ParentSelector.dataValueSet(this.GroupData.FParentFID);
                this.ParentSelector.Text = this.GroupData.FParentFName;
                //this.FID.dataValueSet(this.GroupData.GroupID);
            };
            return GroupNewMasterVm;
        }(domCore.DomVm));
        Right.GroupNewMasterVm = GroupNewMasterVm;
        var GroupNewMasterStates = (function (_super) {
            __extends(GroupNewMasterStates, _super);
            function GroupNewMasterStates() {
                _super.apply(this, arguments);
            }
            return GroupNewMasterStates;
        }(domCore.DomStates));
        Right.GroupNewMasterStates = GroupNewMasterStates;
        var GroupNewMasterProps = (function (_super) {
            __extends(GroupNewMasterProps, _super);
            function GroupNewMasterProps() {
                _super.apply(this, arguments);
            }
            return GroupNewMasterProps;
        }(domCore.DomProps));
        Right.GroupNewMasterProps = GroupNewMasterProps;
    })(Right = exports.Right || (exports.Right = {}));
});
