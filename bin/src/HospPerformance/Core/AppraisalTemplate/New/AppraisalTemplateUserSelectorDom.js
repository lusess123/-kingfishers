var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "react", "./../../../../02col/02Mulite/Combo", "./../../../../02col/02Mulite/Listbox", "./../../../../02col/03selector/BaseTree"], function (require, exports, domFile, urlFile, React, comboFile, ListBoxFile, baseTreeFile) {
    "use strict";
    var domCore = domFile.Core;
    var AppraisalTemplateUserSelectorDom;
    (function (AppraisalTemplateUserSelectorDom) {
        var AppraisalTemplateUserSelectorDomAction = (function (_super) {
            __extends(AppraisalTemplateUserSelectorDomAction, _super);
            function AppraisalTemplateUserSelectorDomAction() {
                _super.apply(this, arguments);
            }
            return AppraisalTemplateUserSelectorDomAction;
        }(domCore.DomAction));
        AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomAction = AppraisalTemplateUserSelectorDomAction;
        var AppraisalTemplateUserSelectorDomReact = (function (_super) {
            __extends(AppraisalTemplateUserSelectorDomReact, _super);
            function AppraisalTemplateUserSelectorDomReact() {
                _super.apply(this, arguments);
                this.state = new AppraisalTemplateUserSelectorDomStates();
            }
            AppraisalTemplateUserSelectorDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initForm(), this._initSelect(), this._initBtns());
            };
            AppraisalTemplateUserSelectorDomReact.prototype._initForm = function () {
                var _this = this;
                return React.createElement("form", {className: "p-a-md"}, React.createElement("div", {className: "clearfix"}, React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-6 col-xs-6 form-group  form-inline clearfix YSu-department"}, React.createElement("label", {className: "col-lg-3 col-md-3 col-sm-6 form-control-label text-right"}, "部门："), React.createElement("div", {className: "col-lg-9 col-md-9 col-sm-6", onClick: function () { _this.fun_IsDepTreeHide(); }}, React.createElement("input", {type: "text", className: "Hg-width form-control", value: this.props.Vm.DeptInputText, disabled: true}), React.createElement("i", {className: "fa fa-caret-down Hu-select-icon"}), React.createElement("div", {className: "Hm-select-content " + (this.props.Vm.IsDepTreeHidden ? " hide " : "  ")}, this.props.Vm.DepTreeObj.intoDom()))), React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-lg-3 col-md-3 col-sm-6 form-control-label text-right"}, "职位："), React.createElement("div", {className: "col-lg-9 col-md-9 col-sm-6"}, this.props.Vm.JobComboObj.intoDom()))), React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-lg-3 col-md-3 col-sm-6 form-control-label text-right"}, "人员："), React.createElement("div", {className: "col-lg-9 col-md-9 col-sm-6"}, React.createElement("input", {type: "text", className: "Hg-width form-control", value: this.props.Vm.UserInputText, placeholder: "请输入姓名", onChange: function (e) { _this.fun_linkName(e); }}))), React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-6 col-xs-6 form-group  form-inline clearfix text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.search(); }}, "查询"), React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.clear(); }}, "清空")));
            };
            AppraisalTemplateUserSelectorDomReact.prototype.search = function () {
                this.props.Vm.search();
            };
            AppraisalTemplateUserSelectorDomReact.prototype.clear = function () {
                this.props.Vm.clear();
            };
            AppraisalTemplateUserSelectorDomReact.prototype.fun_linkName = function (e) {
                var _val = e.target["value"];
                this.props.Vm.UserInputText = _val;
                this.forceUpdate();
            };
            AppraisalTemplateUserSelectorDomReact.prototype._initSelect = function () {
                return React.createElement("div", null, " ", this.props.Vm.UserListboxObj.intoDom(), " ");
            };
            AppraisalTemplateUserSelectorDomReact.prototype._initBtns = function () {
                var _this = this;
                return React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.save(); }}, "保存"));
            };
            AppraisalTemplateUserSelectorDomReact.prototype.fun_IsDepTreeHide = function () {
                this.props.Vm.IsDepTreeHidden = !this.props.Vm.IsDepTreeHidden;
                this.forceUpdate();
            };
            AppraisalTemplateUserSelectorDomReact.prototype.save = function () {
                this.props.Vm.save();
            };
            AppraisalTemplateUserSelectorDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AppraisalTemplateUserSelectorDomReact;
        }(domCore.DomReact));
        AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomReact = AppraisalTemplateUserSelectorDomReact;
        var AppraisalTemplateUserSelectorDomVm = (function (_super) {
            __extends(AppraisalTemplateUserSelectorDomVm, _super);
            function AppraisalTemplateUserSelectorDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = AppraisalTemplateUserSelectorDomReact;
                this.UserListboxObj = new ListBoxFile.ui.ListboxVm;
                this.JobComboObj = new comboFile.ui.ComboVm();
                this.IsDepTreeHidden = true;
                var flag = false;
                this.DepTreeObj = new baseTreeFile.ui.BaseTreeVm({ RegName: "HRDepartmentTreeCodeTable" });
                this.DepTreeObj.Tree.onReactNodeClick(function (node) {
                    _this.SelectedDeptId = node.Value;
                    _this.DeptInputText = node.Text;
                    flag = true;
                    urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchPositions", { deptId: node.Value }, function (a) {
                        _this.JobComboObj.ItemList = _this.setPositionItemList(a.Data);
                        _this.JobComboObj.IsChange = true;
                        _this.forceUpdate("");
                    });
                    return true;
                });
                if (flag) {
                    this.IsDepTreeHidden = false;
                }
                if (config) {
                    this.UniId = config.UniId;
                    if (config.UserSelectorData) {
                        this.UserListboxObj.ItemList = this.setUserItemList(config.UserSelectorData.UserList);
                    }
                    this.initListBox(config);
                }
            }
            AppraisalTemplateUserSelectorDomVm.prototype.initListBox = function (config) {
                if (config.SelectedValue) {
                    this.UserListboxObj.dataValueSet(config.SelectedValue);
                }
            };
            AppraisalTemplateUserSelectorDomVm.prototype.save = function () {
                this.emitAppEvent("AppraisalTemplateUserSelectorSave", this.UniId);
            };
            AppraisalTemplateUserSelectorDomVm.prototype.search = function () {
                var _this = this;
                urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchUsers", { deptId: this.SelectedDeptId, positionId: this.JobComboObj.dataValue(), name: this.UserInputText }, function (a) {
                    _this.UserListboxObj.ItemList = _this.setUserItemList(a.Data);
                    _this.UserListboxObj.IsChange = true;
                    _this.forceUpdate("");
                });
            };
            AppraisalTemplateUserSelectorDomVm.prototype.clear = function () {
                var _this = this;
                urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchUserSelectorData", {}, function (a) {
                    _this.SelectedDeptId = "";
                    _this.IsDepTreeHidden = true;
                    _this.DeptInputText = "";
                    _this.UserInputText = "";
                    _this.JobComboObj.dataValueSet("");
                    _this.UserListboxObj.ItemList = _this.setUserItemList(a.Data.UserList);
                    _this.JobComboObj.ItemList = _this.setPositionItemList(a.Data.PositionList);
                    _this.UserListboxObj.IsChange = true;
                    _this.JobComboObj.IsChange = true;
                    _this.forceUpdate("");
                });
            };
            AppraisalTemplateUserSelectorDomVm.prototype.setPositionItemList = function (sourceList) {
                var positionItemList = [];
                positionItemList.push({ Value: "", Text: "请选择" });
                if (sourceList) {
                    sourceList.forEach(function (a) {
                        positionItemList.push({ Value: a.FID, Text: a.Name });
                    });
                }
                return positionItemList;
            };
            AppraisalTemplateUserSelectorDomVm.prototype.setUserItemList = function (sourceList) {
                var userItemList = [];
                if (sourceList) {
                    sourceList.forEach(function (a) {
                        userItemList.push({ Value: a.UserId, Text: a.TrueName });
                    });
                }
                return userItemList;
            };
            return AppraisalTemplateUserSelectorDomVm;
        }(domCore.DomVm));
        AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomVm = AppraisalTemplateUserSelectorDomVm;
        var AppraisalTemplateUserSelectorDomStates = (function (_super) {
            __extends(AppraisalTemplateUserSelectorDomStates, _super);
            function AppraisalTemplateUserSelectorDomStates() {
                _super.apply(this, arguments);
            }
            return AppraisalTemplateUserSelectorDomStates;
        }(domCore.DomStates));
        AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomStates = AppraisalTemplateUserSelectorDomStates;
        var AppraisalTemplateUserSelectorDomProps = (function (_super) {
            __extends(AppraisalTemplateUserSelectorDomProps, _super);
            function AppraisalTemplateUserSelectorDomProps() {
                _super.apply(this, arguments);
            }
            return AppraisalTemplateUserSelectorDomProps;
        }(domCore.DomProps));
        AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomProps = AppraisalTemplateUserSelectorDomProps;
    })(AppraisalTemplateUserSelectorDom = exports.AppraisalTemplateUserSelectorDom || (exports.AppraisalTemplateUserSelectorDom = {}));
});
