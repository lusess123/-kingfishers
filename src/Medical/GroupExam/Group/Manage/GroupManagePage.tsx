import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

import tabDomFile = require("./../../../../05tool/TabDom");
import BatchDetailFile = require("./BatchDetailDom");
import BatchDetail = BatchDetailFile.BatchDetailDom.BatchDetailDomReact;
import BatchDetailVm = BatchDetailFile.BatchDetailDom.BatchDetailDomVm;
import GroupRuleFile = require("./GroupRuleDom");
import GroupRule = GroupRuleFile.GroupRuleDom.GroupRuleDomReact;
import GroupRuleVm = GroupRuleFile.GroupRuleDom.GroupRuleDomVm;
import PersonalManageFile = require("./PersonalManageDom");
import PersonalManage = PersonalManageFile.PersonalManageDom.PersonalManageDomReact;
import PersonalManageVm = PersonalManageFile.PersonalManageDom.PersonalManageDomVm;
import AccountManageFile = require("./AccountManageDom");
import AccountManage = AccountManageFile.AccountManageDom.AccountManageDomReact;
import AccountManageVm = AccountManageFile.AccountManageDom.AccountManageDomVm;
import DataFile = require("./../Data")
import eventFile = require("./../../../../01core/Event");

export module GroupManagePage {
    export class GroupManagePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class GroupManagePageReact extends basewedPageFile.Web.BaseWebPageReact<GroupManagePageProps, GroupManagePageStates, GroupManagePageAction> implements domCore.IReact {

        public state = new GroupManagePageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="YSm-tab-content">
                {this.props.Vm.TabDomObj.intoDom() }
            </div>;
        }






    }

    export interface IReactGroupManagePageVm extends basewedPageFile.Web.BaseWebPageVm {
        TabDomObj: tabDomFile.TabDom.TabDomVm;
    }

    export interface IGroupManagePageConfig {


    }
    export class GroupManagePageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactGroupManagePageVm {
        public ReactType = GroupManagePageReact;

        public TabDomObj: tabDomFile.TabDom.TabDomVm;

        public BatchDetailObj: BatchDetailFile.BatchDetailDom.BatchDetailDomVm;
        public GroupRuleObj: GroupRuleFile.GroupRuleDom.GroupRuleDomVm;
        public PersonalManageObj: PersonalManageFile.PersonalManageDom.PersonalManageDomVm;
        public AccountManageObj: AccountManageFile.AccountManageDom.AccountManageDomVm;
        public BatchId: string;
        public selectId: string;
        public UnitId: string;
        protected pIsHullAutoHide: boolean = true;

        public constructor(config?: IGroupManagePageConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.listenAppEvent("Manage/GroupRuleTable/loadPageData", this.UniId, (unId: string) => {
                this.loadPageData(0,unId)
            });
            this.listenAppEvent("Manage/PersonalTable/loadPageData", this.UniId, (unId: string, index: string, key?: string) => {
                var num = Number(index)
                this.loadPageData(num, unId, key )
            });
        }
        protected ReceivePageSend(config: basewedPageFile.Web.IPageActor, obj: any) {
            super.ReceivePageSend(config, obj);
            switch (config.FromModulename) {
                case "NEWMEMBERPAGE":
                    if (obj.Select) {
                        this.loadPageData(0,obj.Select)
                    }
                    break;
                case "MEMBERUPDATEPAGE":
                    if (obj.Select) {
                        this.loadPageData(0,obj.Select)
                    }
                    break;
                case "UPDATEACCOUNTPAGE":
                    if (obj.Select) {
                        this.loadPageData(0, obj.Select)
                    }
                    break;                    
                default:
                    break;
            }

        }
        private init(Name: string) {
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
                        ReloadFun: (vm) => {
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
            this.TabDomObj.TabDomItemList.map(x => {
                if (x.Name == Name) {
                    x.IsActive = true;
                }
                else {
                    x.IsActive = false;
                }
            });
        }
        public loadPageData(pageIndex: number, select: string, key?: string) {
            var _page = { PageNo: pageIndex };
            urlFile.Core.AkPost("/MedicalCenter/NewGroup/FetchDetailBatch", {
                pager: JSON.stringify(_page),
                key: key,
                 fids: this.BatchId }, (a) => {
                if (a) {
                    this.init(select)
                    var BatchDetailData: DataFile.Group.IBatchDetail = {}
                    var config = { BatchDetailData: a.Data[0], ItemList: a.Data[0].ItemList.ListData[0] };
                    var Data = Array<DataFile.Group.IGroupData>();
                    var config1 = { Data: a.Data[0].GroupList, UniId: this.UniId, BatchId: this.BatchId }
                    this.GroupRuleObj = new GroupRuleFile.GroupRuleDom.GroupRuleDomVm(config1)
                    var config2 = { Data: a.Data[0].MemberList, UniId: this.UniId, BatchId: this.BatchId, selectId: this.selectId,key:key}
                    this.PersonalManageObj = new PersonalManageFile.PersonalManageDom.PersonalManageDomVm(config2);
                    this.PersonalManageObj.PersonalTableObj.RowList.forEach((a) => { a.IsChange = true });
                    this.PersonalManageObj.PersonalTableObj.IsMulit = true
                    this.PersonalManageObj.IsChange = true
                    this.GroupRuleObj.GroupRuleTableObj.IsMulit = true;
                    var config3 = { Data: a.Data[0].accountData, UniId: this.UniId, BatchId: this.BatchId, selectId: this.selectId }
                    this.AccountManageObj = new AccountManageFile.AccountManageDom.AccountManageDomVm(config3);
                    this.AccountManageObj.AccountTableFile.IsMulit = true;
                    this.TabDomObj.TabDomItemList.forEach((a) => {
                        if (a.Name == "PersonalManage") {
                            a.DomObj = this.PersonalManageObj;
                        }
                        else if (a.Name == "GroupRule") {
                            a.DomObj = this.GroupRuleObj;
                        }
                        else if (a.Name == "AccountManage")
                        {
                            a.DomObj = this.AccountManageObj
                        }
                    });
                   // this.TabDomObj.IsChange = true;
                    this.forceUpdate("");

                }
                });
        }
        protected loadPage(callback?: () => any) {
            var str = this.Param1;
            var list = str.split(',')
            var Name =list[0]
            var FID = list[1];
            this.BatchId = FID;
            urlFile.Core.AkPost("/MedicalCenter/NewGroup/FetchDetailBatch", { fids: FID }, (a) => {
            var BatchDetailData: DataFile.Group.IBatchDetail = {}
            var config = { BatchDetailData: a.Data[0], ItemList: a.Data[0].ItemList.ListData[0] };
            this.selectId = a.Data[0].ItemList.ListData[0].UnitId;
            this.BatchDetailObj = new BatchDetailVm(config)
            var Data = Array<DataFile.Group.IGroupData>();
            var config1 = { Data: a.Data[0].GroupList, UniId: this.UniId, BatchId: this.BatchId}
            this.GroupRuleObj = new GroupRuleFile.GroupRuleDom.GroupRuleDomVm(config1)
            var config2 = { Data: a.Data[0].MemberList, UniId: this.UniId, BatchId: this.BatchId, selectId: this.selectId,key:""}
            this.PersonalManageObj = new PersonalManageFile.PersonalManageDom.PersonalManageDomVm(config2);
            var config3 = { Data: a.Data[0].accountData, UniId: this.UniId, BatchId: this.BatchId, selectId: this.selectId }
            this.AccountManageObj = new AccountManageFile.AccountManageDom.AccountManageDomVm(config3);
            this.init(Name)
            if (callback) {
                callback();
            }
            });

        }

    }
    export class GroupManagePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class GroupManagePageProps extends basewedPageFile.Web.BaseWebPageProps<IReactGroupManagePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("GROUPMANAGEPAGE", basewedPageFile.Web.BaseWebPageVm, GroupManagePageVm);

}
