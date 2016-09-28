var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./../../../../05tool/TabDom", "./BatchDetailDom", "./GroupRuleDom", "./PersonalManageDom", "./AccountManageDom", "./../../../../01core/Event"], function (require, exports, iocFile, urlFile, basewedPageFile, React, tabDomFile, BatchDetailFile, GroupRuleFile, PersonalManageFile, AccountManageFile, eventFile) {
    "use strict";
    var BatchDetailVm = BatchDetailFile.BatchDetailDom.BatchDetailDomVm;
    var GroupManagePage;
    (function (GroupManagePage) {
        var GroupManagePageAction = (function (_super) {
            __extends(GroupManagePageAction, _super);
            function GroupManagePageAction() {
                _super.apply(this, arguments);
            }
            return GroupManagePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        GroupManagePage.GroupManagePageAction = GroupManagePageAction;
        var GroupManagePageReact = (function (_super) {
            __extends(GroupManagePageReact, _super);
            function GroupManagePageReact() {
                _super.apply(this, arguments);
                this.state = new GroupManagePageStates();
            }
            GroupManagePageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-tab-content"}, this.props.Vm.TabDomObj.intoDom());
            };
            return GroupManagePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        GroupManagePage.GroupManagePageReact = GroupManagePageReact;
        var GroupManagePageVm = (function (_super) {
            __extends(GroupManagePageVm, _super);
            function GroupManagePageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = GroupManagePageReact;
                this.pIsHullAutoHide = true;
                this.UniId = eventFile.App.getUniId().toString();
                this.listenAppEvent("Manage/GroupRuleTable/loadPageData", this.UniId, function (unId) {
                    _this.loadPageData(0, unId);
                });
                this.listenAppEvent("Manage/PersonalTable/loadPageData", this.UniId, function (unId, index, key) {
                    var num = Number(index);
                    _this.loadPageData(num, unId, key);
                });
            }
            GroupManagePageVm.prototype.ReceivePageSend = function (config, obj) {
                _super.prototype.ReceivePageSend.call(this, config, obj);
                switch (config.FromModulename) {
                    case "NEWMEMBERPAGE":
                        if (obj.Select) {
                            this.loadPageData(0, obj.Select);
                        }
                        break;
                    case "MEMBERUPDATEPAGE":
                        if (obj.Select) {
                            this.loadPageData(0, obj.Select);
                        }
                        break;
                    case "UPDATEACCOUNTPAGE":
                        if (obj.Select) {
                            this.loadPageData(0, obj.Select);
                        }
                        break;
                    default:
                        break;
                }
            };
            GroupManagePageVm.prototype.init = function (Name) {
                this.TabDomObj = new tabDomFile.TabDom.TabDomVm({
                    Items: [
                        {
                            Name: "BatchDetail",
                            Title: "批次详情",
                            IsActive: true,
                            //ReloadFun: (vm) => {
                            //    utilFile.Core.Util.Cast<BatchDetailFile.BatchDetailDom.BatchDetailDomVm>(vm).loadData(
                            //        () => { vm.forceUpdate(""); }
                            //    );
                            //},
                            DomObj: this.BatchDetailObj
                        },
                        {
                            Name: "GroupRule",
                            Title: "分组规则",
                            IsActive: false,
                            //ReloadFun: (vm) => {
                            //    utilFile.Core.Util.Cast<GroupRuleFile.GroupRuleDom.GroupRuleDomVm>(vm).sysPage_load(() => {
                            //        vm.forceUpdate("");
                            //    });
                            //},
                            DomObj: this.GroupRuleObj
                        },
                        {
                            Name: "PersonalManage",
                            Title: "人员管理",
                            IsActive: false,
                            //ReloadFun: (vm) => {
                            //    utilFile.Core.Util.Cast<PersonalManageFile.PersonalManageDom.PersonalManageDomVm>(vm).sysPage_load(() => {
                            //        vm.forceUpdate("");
                            //    });
                            //},
                            ReloadFun: function (vm) {
                                // vm.DomObj = this.PersonalManageObj;
                                // vm.DomObj.forceUpdate("");
                            },
                            DomObj: this.PersonalManageObj
                        },
                        {
                            Name: "AccountManage",
                            Title: "应收款管理",
                            IsActive: false,
                            //ReloadFun: (vm) => {
                            //    utilFile.Core.Util.Cast<PersonalManageFile.PersonalManageDom.PersonalManageDomVm>(vm).sysPage_load(() => {
                            //        vm.forceUpdate("");
                            //    });
                            //},
                            DomObj: this.AccountManageObj
                        }
                    ]
                });
                this.TabDomObj.TabDomItemList.map(function (x) {
                    if (x.Name == Name) {
                        x.IsActive = true;
                    }
                    else {
                        x.IsActive = false;
                    }
                });
            };
            GroupManagePageVm.prototype.loadPageData = function (pageIndex, select, key) {
                var _this = this;
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/NewGroup/FetchDetailBatch", {
                    pager: JSON.stringify(_page),
                    key: key,
                    fids: this.BatchId }, function (a) {
                    if (a) {
                        _this.init(select);
                        var BatchDetailData = {};
                        var config = { BatchDetailData: a.Data[0], ItemList: a.Data[0].ItemList.ListData[0] };
                        var Data = Array();
                        var config1 = { Data: a.Data[0].GroupList, UniId: _this.UniId, BatchId: _this.BatchId };
                        _this.GroupRuleObj = new GroupRuleFile.GroupRuleDom.GroupRuleDomVm(config1);
                        var config2 = { Data: a.Data[0].MemberList, UniId: _this.UniId, BatchId: _this.BatchId, selectId: _this.selectId, key: key };
                        _this.PersonalManageObj = new PersonalManageFile.PersonalManageDom.PersonalManageDomVm(config2);
                        _this.PersonalManageObj.PersonalTableObj.RowList.forEach(function (a) { a.IsChange = true; });
                        _this.PersonalManageObj.PersonalTableObj.IsMulit = true;
                        _this.PersonalManageObj.IsChange = true;
                        _this.GroupRuleObj.GroupRuleTableObj.IsMulit = true;
                        var config3 = { Data: a.Data[0].accountData, UniId: _this.UniId, BatchId: _this.BatchId, selectId: _this.selectId };
                        _this.AccountManageObj = new AccountManageFile.AccountManageDom.AccountManageDomVm(config3);
                        _this.AccountManageObj.AccountTableFile.IsMulit = true;
                        _this.TabDomObj.TabDomItemList.forEach(function (a) {
                            if (a.Name == "PersonalManage") {
                                a.DomObj = _this.PersonalManageObj;
                            }
                            else if (a.Name == "GroupRule") {
                                a.DomObj = _this.GroupRuleObj;
                            }
                            else if (a.Name == "AccountManage") {
                                a.DomObj = _this.AccountManageObj;
                            }
                        });
                        // this.TabDomObj.IsChange = true;
                        _this.forceUpdate("");
                    }
                });
            };
            GroupManagePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var str = this.Param1;
                var list = str.split(',');
                var Name = list[0];
                var FID = list[1];
                this.BatchId = FID;
                urlFile.Core.AkPost("/MedicalCenter/NewGroup/FetchDetailBatch", { fids: FID }, function (a) {
                    var BatchDetailData = {};
                    var config = { BatchDetailData: a.Data[0], ItemList: a.Data[0].ItemList.ListData[0] };
                    _this.selectId = a.Data[0].ItemList.ListData[0].UnitId;
                    _this.BatchDetailObj = new BatchDetailVm(config);
                    var Data = Array();
                    var config1 = { Data: a.Data[0].GroupList, UniId: _this.UniId, BatchId: _this.BatchId };
                    _this.GroupRuleObj = new GroupRuleFile.GroupRuleDom.GroupRuleDomVm(config1);
                    var config2 = { Data: a.Data[0].MemberList, UniId: _this.UniId, BatchId: _this.BatchId, selectId: _this.selectId, key: "" };
                    _this.PersonalManageObj = new PersonalManageFile.PersonalManageDom.PersonalManageDomVm(config2);
                    var config3 = { Data: a.Data[0].accountData, UniId: _this.UniId, BatchId: _this.BatchId, selectId: _this.selectId };
                    _this.AccountManageObj = new AccountManageFile.AccountManageDom.AccountManageDomVm(config3);
                    _this.init(Name);
                    if (callback) {
                        callback();
                    }
                });
            };
            return GroupManagePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        GroupManagePage.GroupManagePageVm = GroupManagePageVm;
        var GroupManagePageStates = (function (_super) {
            __extends(GroupManagePageStates, _super);
            function GroupManagePageStates() {
                _super.apply(this, arguments);
            }
            return GroupManagePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        GroupManagePage.GroupManagePageStates = GroupManagePageStates;
        var GroupManagePageProps = (function (_super) {
            __extends(GroupManagePageProps, _super);
            function GroupManagePageProps() {
                _super.apply(this, arguments);
            }
            return GroupManagePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        GroupManagePage.GroupManagePageProps = GroupManagePageProps;
        iocFile.Core.Ioc.Current().RegisterType("GROUPMANAGEPAGE", basewedPageFile.Web.BaseWebPageVm, GroupManagePageVm);
    })(GroupManagePage = exports.GroupManagePage || (exports.GroupManagePage = {}));
});
