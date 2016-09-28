var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./../../../../02col/02Mulite/Combo", "./../../../../02col/02Mulite/Listbox", "./../../../../02col/03selector/BaseTree"], function (require, exports, iocFile, urlFile, basewedPageFile, React, comboFile, ListBoxFile, baseTreeFile) {
    "use strict";
    var NewAppraisalObjectPage;
    (function (NewAppraisalObjectPage) {
        var NewAppraisalObjectPageAction = (function (_super) {
            __extends(NewAppraisalObjectPageAction, _super);
            function NewAppraisalObjectPageAction() {
                _super.apply(this, arguments);
            }
            return NewAppraisalObjectPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewAppraisalObjectPage.NewAppraisalObjectPageAction = NewAppraisalObjectPageAction;
        var NewAppraisalObjectPageReact = (function (_super) {
            __extends(NewAppraisalObjectPageReact, _super);
            function NewAppraisalObjectPageReact() {
                _super.apply(this, arguments);
                this.state = new NewAppraisalObjectPageStates();
            }
            NewAppraisalObjectPageReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initForm(), this._initSelect(), this._initBtns());
            };
            NewAppraisalObjectPageReact.prototype._initForm = function () {
                var _this = this;
                return React.createElement("form", {className: "p-a-md"}, React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-lg-3 col-md-3 col-sm-6 form-control-label text-right"}, "部门："), React.createElement("div", {className: "col-lg-9 col-md-9 col-sm-6"}, React.createElement("input", {type: "text", className: "Hg-width form-control", value: this.props.Vm.DeptInputText, disabled: true}), React.createElement("i", {className: "fa fa-caret-down Hu-pointer YSu-caret-down", onClick: function () { _this.fun_IsDepTreeHide(); }}), React.createElement("div", {className: "Hu-select-content " + this.props.Vm.IsDepTreeHidden ? " hide " : "  "}, this.props.Vm.DepTreeObj.intoDom()))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-lg-3 col-md-3 col-sm-6 form-control-label text-right"}, "职位："), React.createElement("div", {className: "col-lg-9 col-md-9 col-sm-6"}, this.props.Vm.JobComboObj.intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.search(); }}, "查询"), React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.clear(); }}, "清空")));
            };
            NewAppraisalObjectPageReact.prototype.search = function () {
                this.props.Vm.search();
            };
            NewAppraisalObjectPageReact.prototype.clear = function () {
                this.props.Vm.clear();
            };
            NewAppraisalObjectPageReact.prototype._initSelect = function () {
                return React.createElement("div", null, " ", this.props.Vm.UserListboxObj.intoDom(), " ");
            };
            NewAppraisalObjectPageReact.prototype._initBtns = function () {
                return React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary"}, "保存"), React.createElement("a", {className: "btn btn-sm btn-secondary"}, "取消"));
            };
            NewAppraisalObjectPageReact.prototype.fun_IsDepTreeHide = function () {
                this.props.Vm.IsDepTreeHidden = !this.props.Vm.IsDepTreeHidden;
                this.forceUpdate();
            };
            return NewAppraisalObjectPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewAppraisalObjectPage.NewAppraisalObjectPageReact = NewAppraisalObjectPageReact;
        var NewAppraisalObjectPageVm = (function (_super) {
            __extends(NewAppraisalObjectPageVm, _super);
            // public IsJobTreeHidden: boolean;
            function NewAppraisalObjectPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = NewAppraisalObjectPageReact;
                //  public JobTreeObj: treeFile.ui.TreeVm;        
                this.UserListboxObj = new ListBoxFile.ui.ListboxVm;
                this.JobComboObj = new comboFile.ui.ComboVm();
                this.IsDepTreeHidden = true;
                this.DepTreeObj = new baseTreeFile.ui.BaseTreeVm({ RegName: "HRDepartmentTreeCodeTable" });
                this.DepTreeObj.Tree.onReactNodeClick(function (node) {
                    _this.SelectedDeptId = node.Value;
                    _this.DeptInputText = node.Text;
                    _this.IsDepTreeHidden = true;
                    urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchPositions", { deptId: node.Value }, function (a) {
                        _this.JobComboObj.ItemList = _this.setPositionItemList(a.Data);
                        _this.JobComboObj.IsChange = true;
                        _this.forceUpdate("");
                    });
                    return true;
                });
            }
            NewAppraisalObjectPageVm.prototype.search = function () {
                var _this = this;
                urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchUsers", { deptId: this.SelectedDeptId, positionId: this.JobComboObj.dataValue() }, function (a) {
                    _this.UserListboxObj.ItemList = _this.setUserItemList(a.Data);
                    _this.UserListboxObj.IsChange = true;
                    _this.forceUpdate("");
                });
            };
            NewAppraisalObjectPageVm.prototype.clear = function () {
                var _this = this;
                urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchUserSelectorData", {}, function (a) {
                    _this.SelectedDeptId = "";
                    _this.IsDepTreeHidden = true;
                    _this.DeptInputText = "";
                    _this.JobComboObj.dataValueSet("");
                    _this.UserListboxObj.ItemList = _this.setUserItemList(a.Data.UserList);
                    _this.JobComboObj.ItemList = _this.setPositionItemList(a.Data.PositionList);
                    _this.UserListboxObj.IsChange = true;
                    _this.JobComboObj.IsChange = true;
                    _this.forceUpdate("");
                });
            };
            NewAppraisalObjectPageVm.prototype.init = function (config) {
            };
            NewAppraisalObjectPageVm.prototype.setPositionItemList = function (sourceList) {
                var positionItemList = [];
                positionItemList.push({ Value: "", Text: "请选择" });
                if (sourceList) {
                    sourceList.forEach(function (a) {
                        positionItemList.push({ Value: a.FID, Text: a.Name });
                    });
                }
                return positionItemList;
            };
            NewAppraisalObjectPageVm.prototype.setUserItemList = function (sourceList) {
                var userItemList = [];
                if (sourceList) {
                    sourceList.forEach(function (a) {
                        userItemList.push({ Value: a.UserId, Text: a.TrueName });
                    });
                }
                return userItemList;
            };
            NewAppraisalObjectPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchUserSelectorData", {}, function (a) {
                    _this.UserListboxObj.ItemList = _this.setUserItemList(a.Data.UserList);
                    _this.JobComboObj.ItemList = _this.setPositionItemList(a.Data.PositionList);
                    if (callback) {
                        callback();
                    }
                });
                //this.DepTreeObj.initTreeVm({
                //    CODE_VALUE: "0", CODE_TEXT: "根",
                //    Children: [
                //        {
                //            CODE_VALUE: "key1", CODE_TEXT: "内科系统",
                //            Children: [
                //                { CODE_VALUE: "$menu$", CODE_TEXT: "感染病科" },
                //                { CODE_VALUE: "$group$", CODE_TEXT: "神经内科" },
                //                { CODE_VALUE: "$role$", CODE_TEXT: "营养科" },
                //                { CODE_VALUE: "$UserManagerPage$", CODE_TEXT: "放疗中心" },
                //                { CODE_VALUE: "$rightPage$", CODE_TEXT: "儿科" },
                //                { CODE_VALUE: "$rightMainPage$", CODE_TEXT: "消化内科" },
                //            ]
                //        },
                //        {
                //            CODE_VALUE: "key2", CODE_TEXT: "外科系统",
                //            Children: [
                //                { CODE_VALUE: "$allcolpage$", CODE_TEXT: "胃肠外科" },
                //                { CODE_VALUE: "$BASELISTPAGE$", CODE_TEXT: "心胸外科" },
                //                { CODE_VALUE: "$BASEMDPAGE$", CODE_TEXT: "口腔科" },
                //                { CODE_VALUE: "$test1$", CODE_TEXT: "产科" },
                //                { CODE_VALUE: "$ORGLISTPAGE$", CODE_TEXT: "血管外科" },
                //                { CODE_VALUE: "$$module/AllControls/AllControls$", CODE_TEXT: "骨科" },
                //                {
                //                    CODE_VALUE: "key3", CODE_TEXT: "整型美容科",
                //                    Children: [
                //                        { CODE_VALUE: "$zykTestPage$", CODE_TEXT: "整型美容科1" },
                //                        { CODE_VALUE: "$sjTestPage$", CODE_TEXT: "整型美容科2" }]
                //                }
                //            ]
                //        }
                //    ]
                //});
                //this.JobTreeObj = new treeFile.ui.TreeVm({ IsMultiSelect: true });
                //this.JobTreeObj.initTreeVm({
                //    CODE_VALUE: "0", CODE_TEXT: "根",
                //    Children: [
                //        {
                //            CODE_VALUE: "key1", CODE_TEXT: "主任",
                //            Children: [
                //                { CODE_VALUE: "$menu$", CODE_TEXT: "主治医师" },
                //                {
                //                    CODE_VALUE: "key2", CODE_TEXT: "普通医师",
                //                    Children: [
                //                        { CODE_VALUE: "$zykTestPage$", CODE_TEXT: "助理" },
                //                        { CODE_VALUE: "$sjTestPage$", CODE_TEXT: "见习生" }]
                //                }
                //            ]
                //        }
                //    ]
                //});
                //if (callback) {
                //    callback();
                //}
            };
            return NewAppraisalObjectPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewAppraisalObjectPage.NewAppraisalObjectPageVm = NewAppraisalObjectPageVm;
        var NewAppraisalObjectPageStates = (function (_super) {
            __extends(NewAppraisalObjectPageStates, _super);
            function NewAppraisalObjectPageStates() {
                _super.apply(this, arguments);
            }
            return NewAppraisalObjectPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewAppraisalObjectPage.NewAppraisalObjectPageStates = NewAppraisalObjectPageStates;
        var NewAppraisalObjectPageProps = (function (_super) {
            __extends(NewAppraisalObjectPageProps, _super);
            function NewAppraisalObjectPageProps() {
                _super.apply(this, arguments);
            }
            return NewAppraisalObjectPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewAppraisalObjectPage.NewAppraisalObjectPageProps = NewAppraisalObjectPageProps;
        iocFile.Core.Ioc.Current().RegisterType("NEWAPPRAISALOBJECTPAGE", basewedPageFile.Web.BaseWebPageVm, NewAppraisalObjectPageVm);
    })(NewAppraisalObjectPage = exports.NewAppraisalObjectPage || (exports.NewAppraisalObjectPage = {}));
});
