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
        var GroupUpdateMasterAction = (function (_super) {
            __extends(GroupUpdateMasterAction, _super);
            function GroupUpdateMasterAction() {
                _super.apply(this, arguments);
            }
            return GroupUpdateMasterAction;
        }(domCore.DomAction));
        Right.GroupUpdateMasterAction = GroupUpdateMasterAction;
        var GroupUpdateMasterReact = (function (_super) {
            __extends(GroupUpdateMasterReact, _super);
            function GroupUpdateMasterReact() {
                _super.apply(this, arguments);
                this.state = new GroupUpdateMasterStates();
            }
            GroupUpdateMasterReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.GroupData[fName] = _val;
                this.forceUpdate();
            };
            GroupUpdateMasterReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            //机构名称
            GroupUpdateMasterReact.prototype.inputGroupName = function () {
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
            GroupUpdateMasterReact.prototype.inputGroupCode = function () {
                var _this = this;
                var _vm = this.getInputVm(this.props.Vm.GroupData.GroupID, "notNull");
                this.props.Vm.GroupCodeTextVm = _vm;
                _vm.onChangeHandle(function (str) {
                    _this.props.Vm.GroupData.GroupID = str;
                    return true;
                });
                return _vm.intoDom();
            };
            GroupUpdateMasterReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.vmdataValue(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            GroupUpdateMasterReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "Hm-form clearfix"}, this.props.Vm.FID.intoDom(), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "上级机构：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, "  ", this.props.Vm.GroupData.FParentFName))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: " required"}, "机构名称：")), React.createElement("div", {className: " Hu-input"}, this.inputGroupName())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {className: "required"}, "机构编码：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, " ", this.props.Vm.GroupData.GroupID))), React.createElement("div", {className: "col-lg-12 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "机构描述：")), React.createElement("div", {className: "Hu-input"}, React.createElement("textarea", {value: this.props.Vm.GroupData.GroupDescrible, onChange: function (e) { _this.fun_OnChange(e, "GroupDescrible"); }}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "地址：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.GroupData.FAddress, onChange: function (e) { _this.fun_OnChange(e, "FAddress"); }}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "联系方式：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.GroupData.FPhone, onChange: function (e) { _this.fun_OnChange(e, "FPhone"); }}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", null, "传真：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.GroupData.Fax, onChange: function (e) { _this.fun_OnChange(e, "Fax"); }}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "邮政编码：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", placeholder: "..", type: "text", value: this.props.Vm.GroupData.Post, onChange: function (e) { _this.fun_OnChange(e, "Post"); }})))))));
            };
            GroupUpdateMasterReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GroupUpdateMasterReact;
        }(domCore.DomReact));
        Right.GroupUpdateMasterReact = GroupUpdateMasterReact;
        var GroupUpdateMasterVm = (function (_super) {
            __extends(GroupUpdateMasterVm, _super);
            function GroupUpdateMasterVm() {
                _super.call(this);
                this.ReactType = GroupUpdateMasterReact;
                this.ParentSelector = new treeSelectorFile.ui.TreeSingleSelectorVm();
                this.FID = new HideFile.ui.HiddenVm;
                this.ParentSelector.RegName = "GroupCodeTable";
                this.GroupData = { GroupID: "", FParentFID: "", FParentFName: "", GroupName: "", GroupCode: "", FPhone: "", GroupDescrible: "", FAddress: "", Fax: "", Post: "" };
            }
            GroupUpdateMasterVm.prototype.init = function () {
                debugger;
                //alert(this.GroupData.FParentFID);
                this.ParentSelector.dataValueSet(this.GroupData.FParentFID);
                this.ParentSelector.Text = this.GroupData.FParentFName;
                //this.GroupID.
                this.FID.dataValueSet(this.GroupData.GroupID);
            };
            GroupUpdateMasterVm.prototype.legal = function () {
                var groupName = this.GroupNameTextVm.legal();
                var _res = groupName;
                return _res;
            };
            return GroupUpdateMasterVm;
        }(domCore.DomVm));
        Right.GroupUpdateMasterVm = GroupUpdateMasterVm;
        var GroupUpdateMasterStates = (function (_super) {
            __extends(GroupUpdateMasterStates, _super);
            function GroupUpdateMasterStates() {
                _super.apply(this, arguments);
            }
            return GroupUpdateMasterStates;
        }(domCore.DomStates));
        Right.GroupUpdateMasterStates = GroupUpdateMasterStates;
        var GroupUpdateMasterProps = (function (_super) {
            __extends(GroupUpdateMasterProps, _super);
            function GroupUpdateMasterProps() {
                _super.apply(this, arguments);
            }
            return GroupUpdateMasterProps;
        }(domCore.DomProps));
        Right.GroupUpdateMasterProps = GroupUpdateMasterProps;
    })(Right = exports.Right || (exports.Right = {}));
});
