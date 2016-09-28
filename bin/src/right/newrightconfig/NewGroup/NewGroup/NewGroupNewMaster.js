var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../02col/03selector/TreeSelector", "./../../../../02col/01single/Text"], function (require, exports, domFile, React, treeSelectorFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var Right;
    (function (Right) {
        var NewGroupNewMasterAction = (function (_super) {
            __extends(NewGroupNewMasterAction, _super);
            function NewGroupNewMasterAction() {
                _super.apply(this, arguments);
            }
            return NewGroupNewMasterAction;
        }(domCore.DomAction));
        Right.NewGroupNewMasterAction = NewGroupNewMasterAction;
        var NewGroupNewMasterReact = (function (_super) {
            __extends(NewGroupNewMasterReact, _super);
            function NewGroupNewMasterReact() {
                _super.apply(this, arguments);
                this.state = new NewGroupNewMasterStates();
            }
            NewGroupNewMasterReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.GroupData[fName] = _val;
                this.forceUpdate();
            };
            NewGroupNewMasterReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            //机构名称
            NewGroupNewMasterReact.prototype.inputGroupName = function () {
                var _this = this;
                var _vm = this.getInputVm(this.props.Vm.GroupData.RCG_Name, "notNull");
                this.props.Vm.GroupNameTextVm = _vm;
                _vm.onChangeHandle(function (str) {
                    _this.props.Vm.GroupData.RCG_Name = str;
                    return true;
                });
                return _vm.intoDom();
            };
            //机构编码
            NewGroupNewMasterReact.prototype.inputGroupCode = function () {
                var _this = this;
                var _vm = this.getInputVm(this.props.Vm.GroupData.RCG_Code, "notNull");
                this.props.Vm.GroupCodeTextVm = _vm;
                _vm.onChangeHandle(function (str) {
                    _this.props.Vm.GroupData.RCG_Code = str;
                    return true;
                });
                return _vm.intoDom();
            };
            NewGroupNewMasterReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.dataValueSet(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            NewGroupNewMasterReact.prototype.pSender = function () {
                return (React.createElement("div", {className: "1"}, React.createElement("div", {className: "tabs-content"}, React.createElement("div", {className: "acs-form clearfix"}, React.createElement("div", {className: "large-6 small-12 columns"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "right required"}, "上级机构：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ParentSelector.intoDom())), React.createElement("div", {className: "large-6 small-12 columns"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "right required"}, "机构名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.inputGroupName())), React.createElement("div", {className: "large-6 small-12 columns"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "right required"}, "机构编码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.inputGroupCode()))))));
            };
            NewGroupNewMasterReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return NewGroupNewMasterReact;
        }(domCore.DomReact));
        Right.NewGroupNewMasterReact = NewGroupNewMasterReact;
        var NewGroupNewMasterVm = (function (_super) {
            __extends(NewGroupNewMasterVm, _super);
            function NewGroupNewMasterVm() {
                _super.call(this);
                this.ReactType = NewGroupNewMasterReact;
                this.ParentSelector = new treeSelectorFile.ui.TreeSingleSelectorVm();
                this.ParentSelector.RegName = "RCGroupCodeTable";
                //this.GroupProductSelect = new mulSelectorFile.ui.MulselectorVm();
                this.GroupData = { FID: "", PID: "", FParentFName: "", RCG_Name: "", RCG_Code: "" };
            }
            NewGroupNewMasterVm.prototype.legal = function () {
                var groupName = this.GroupNameTextVm.legal();
                var groupCode = this.GroupCodeTextVm.legal();
                var _res = groupName && groupCode;
                return _res;
            };
            return NewGroupNewMasterVm;
        }(domCore.DomVm));
        Right.NewGroupNewMasterVm = NewGroupNewMasterVm;
        var NewGroupNewMasterStates = (function (_super) {
            __extends(NewGroupNewMasterStates, _super);
            function NewGroupNewMasterStates() {
                _super.apply(this, arguments);
            }
            return NewGroupNewMasterStates;
        }(domCore.DomStates));
        Right.NewGroupNewMasterStates = NewGroupNewMasterStates;
        var NewGroupNewMasterProps = (function (_super) {
            __extends(NewGroupNewMasterProps, _super);
            function NewGroupNewMasterProps() {
                _super.apply(this, arguments);
            }
            return NewGroupNewMasterProps;
        }(domCore.DomProps));
        Right.NewGroupNewMasterProps = NewGroupNewMasterProps;
    })(Right = exports.Right || (exports.Right = {}));
});
