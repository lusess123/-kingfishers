import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import BreadDomFile = require("./../../05tool/BreadDom/BreadDom");
import KityMinderFile = require("./../../05tool/KityMinder/KityMinderDom");
import MonacoEditorFile = require("./../../05tool/MonacoEditor/MonacoEditor");
import TabDomFile = require("./../../05tool/TabDom");
import MoadlDomFile = require("./../../05tool/Modal/ModalDom");
import pickContainerFile = require("./../../05tool/Picker/PickerContainer");
import eventFile = require("./../../01core/Event");
import pickDomFile = require("./../../05tool/Picker/PickDom");
import suggestFile = require("./../../05tool/Selector/AutoSuggestText");
import PickListBaseDomFile = require("./../../05tool/Picker/PickListBaseDom");
import SelectorDomFile = require("./../../05tool/Selector/SelectorDom");

export module JsonViewPage {
    export class JsonViewPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class JsonViewPageReact extends basewedPageFile.Web.BaseWebPageReact<JsonViewPageProps, JsonViewPageStates, JsonViewPageAction> implements domCore.IReact {

        public state = new JsonViewPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="JsonViewContent Hg-default-top Hg-relative ">
                {this._tDom(this.props.Vm.TabDomFileObj) }
            </div>;
        }


        public InitJsonView() {
            //urlFile.Core.AkPost("/right/Menu/GetAllTree?regname=MenuTreeCodeTable", {}, (a: any) => {
            //    var _data: KityMinderFile.KityMinderDom.ITreeCodeTableModel = a;
            //    this.props.Vm.initKityMinder(_data);

            //});

        }

        protected pInstall(): void {
            this.InitJsonView();
            super.pInstall();
        }
        protected pUnInstall(vm?: domFile.Core.DomVm): void {

            super.pUnInstall(vm);
        }



    }
    export interface IJsonViewPageConfig {


    }
    export class JsonViewPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = JsonViewPageReact;
        public BreadDomObj: BreadDomFile.BreadDom.BreadDomVm;
        public KityMinderDomObj: KityMinderFile.KityMinderDom.KityMinderDomVm;
        public MonacoEditorObj: MonacoEditorFile.MonacoEditor.MonacoEditorVm;
        public TabDomFileObj: TabDomFile.TabDom.TabDomVm;

        public constructor(config?: IJsonViewPageConfig) {
            super();
            this.listenAppEvent("", "Hull-Menu-Toggle", (a) => {
                // alert(a);
                // var _$dom = $(ReactDOM.findDOMNode());
                // $(".fdf").a

            });
            // eventFile.App.GetAppEvent().addListener("Hull_menu_toggle", (a) => { alert(a);});
            // this.KityMinderDomObj = new KityMinderFile.KityMinderDom.KityMinderDomVm();
            this.MonacoEditorObj = new MonacoEditorFile.MonacoEditor.MonacoEditorVm();
            var _treeObj = {
                CODE_VALUE: "0", CODE_TEXT: "根",
                Children: [
                    {
                        CODE_VALUE: "key1", CODE_TEXT: "基础信息",
                        Children: [
                            { CODE_VALUE: "$userinfo$", CODE_TEXT: "用户信息", }
                        ]
                    },
                    {
                        CODE_VALUE: "key2", CODE_TEXT: "权限管理",
                        Children: [
                            { CODE_VALUE: "$menu$", CODE_TEXT: "基础菜单" },
                            { CODE_VALUE: "$group$", CODE_TEXT: "组织机构" },
                            { CODE_VALUE: "$role$", CODE_TEXT: "角色管理" },
                            { CODE_VALUE: "$UserManagerPage$", CODE_TEXT: "用户管理" },
                            { CODE_VALUE: "$rightPage$", CODE_TEXT: "权限配置原型" },
                            { CODE_VALUE: "$rightMainPage$", CODE_TEXT: "权限配置页面" },
                        ]
                    },
                    {
                        CODE_VALUE: "key3", CODE_TEXT: "SDK学习案例",
                        Children: [
                            { CODE_VALUE: "$allcolpage$", CODE_TEXT: "所有的控件" },
                            { CODE_VALUE: "$BASELISTPAGE$", CODE_TEXT: "列表组件" },
                            { CODE_VALUE: "$BASEMDPAGE$", CODE_TEXT: "主从表测试" },
                            { CODE_VALUE: "$test1$", CODE_TEXT: "定时器组件" },
                            { CODE_VALUE: "$ORGLISTPAGE$", CODE_TEXT: "组织机构2" },
                            { CODE_VALUE: "$$module/AllControls/AllControls$", CODE_TEXT: "配置页面" },
                            {
                                CODE_VALUE: "key4", CODE_TEXT: "团队成员",
                                Children: [
                                    { CODE_VALUE: "$zykTestPage$", CODE_TEXT: "郑瑜琨" },
                                    { CODE_VALUE: "$sjTestPage$", CODE_TEXT: "沈君" }]
                            }
                        ]
                    }
                ]
            };

            this.BreadDomObj = new BreadDomFile.BreadDom.BreadDomVm({ TreeModel: _treeObj });
            var _uid: string = "jsonviewPage" + eventFile.App.getUniId();
            this.TabDomFileObj = new TabDomFile.TabDom.TabDomVm({
                Items: [
                    {
                        DomObj: this.KityMinderDomObj,
                        Title: "树形",
                        ReloadFun: (item) => {
                            if (!item.IsNoFirst) {
                                urlFile.Core.AkPost("/right/Menu/GetAllTree?regname=MenuTreeCodeTable", {}, (a: any) => {
                                    var _data: KityMinderFile.KityMinderDom.ITreeCodeTableModel = a;
                                    this.initKityMinder(_data, item);

                                });
                            }
                        }

                    },
                    {
                        DomObj: null,
                        Title: "sql代码编辑器",
                        IsActive: false,
                        ReloadFun: (item) => {
                            if (!item.IsNoFirst) {
                                item.DomObj = this.MonacoEditorObj;
                                this.MonacoEditorObj.CodeType = MonacoEditorFile.MonacoEditor.CodeType.sql;
                                this.forceUpdate("");
                            }
                        }
                    },
                    {
                        DomObj: this.BreadDomObj,
                        Title: "面包屑"
                    },
                    {
                        DomObj: null,
                        Title: "弹出层组件",
                        ReloadFun: (item) => {
                            if (!item.IsNoFirst) {
                                item.DomObj = new MoadlDomFile.ModalDom.ModalDomVm({
                                    Title: "弹出层标题。。。。。。",
                                    IsDebug: true,
                                    UniId: _uid,
                                    ModalShowingFun: (a, b) => {
                                        a.DomObj = new pickContainerFile.PickerContainer.PickerContainerVm(
                                            {
                                                UniId: _uid,
                                                LeftDomVmObj: null
                                            });
                                        b();
                                    }
                                });
                                this.forceUpdate("");
                            }
                        }
                    },
                    {
                        DomObj: null,
                        Title: "任务分配",
                        ReloadFun: (item) => {
                            if (!item.IsNoFirst) {
                                urlFile.Core.AkPost("/core/Selector/LoadAllTreeFormatJson?regname=ProTaskTreeCodeTable", {}, (a: any) => {
                                    if ($.isArray(a)) {
                                        a = {
                                            CODE_VALUE: "0",
                                            CODE_TEXT: "根",
                                            Children: a
                                        };
                                    }
                                    var _data: KityMinderFile.KityMinderDom.ITreeCodeTableModel = a;
                                    //if()
                                    this.initTaskKityMinder(_data, item);

                                });
                            }
                        }
                    }, {
                        DomObj: null,
                        Title: "选择器",
                        ReloadFun: (item) => {
                            if (!item.IsNoFirst) {
                                item.DomObj = new pickDomFile.PickDom.PickDomVm({
                                    UniId: _uid,
                                    PickItemList:
                                    [
                                        { Key: "key1", Text: "文本项1" },
                                        { Key: "key22", Text: "文本项22" },
                                        { Key: "key13", Text: "文本项13" }
                                    ],
                                    PickerContainer:
                                    {
                                        UniId: _uid,
                                        LeftDomVmObj: new PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm({ UniId: _uid })
                                    }
                                });
                            }
                        }
                    }
                    ,
                    {
                        DomObj: null,
                        Title: "dbXml",
                        IsActive: false,
                        ReloadFun: (item) => {
                            if (!item.IsNoFirst) {

                                urlFile.Core.AkPost("/rightcloud/auth/getcodefile",
                                    { path: "xml/db.xml" },
                                    (a) => {
                                        var _list: string[] = a;
                                        item.DomObj = new MonacoEditorFile.MonacoEditor.MonacoEditorVm({
                                            CodeType: MonacoEditorFile.MonacoEditor.CodeType.xml,
                                            ContentList: _list
                                        });
                                        this.TabDomFileObj.forceUpdate("");
                                    });


                            }
                        }
                    },
                    {
                        DomObj: null,
                        Title: "formxml",
                        IsActive: false,
                        ReloadFun: (item) => {
                            if (!item.IsNoFirst) {

                                urlFile.Core.AkPost("/rightcloud/auth/getcodefile",
                                    { path: "xml/form/AllControls/AllControls.xml" },
                                    (a) => {
                                        var _list: string[] = a;
                                        item.DomObj = new MonacoEditorFile.MonacoEditor.MonacoEditorVm({
                                            CodeType: MonacoEditorFile.MonacoEditor.CodeType.xml,
                                            ContentList: _list
                                        });
                                        this.TabDomFileObj.forceUpdate("");
                                    });


                            }
                        }
                    },
                    {
                        DomObj: null,
                        Title: "modulexml",
                        IsActive: false,
                        ReloadFun: (item) => {
                            if (!item.IsNoFirst) {

                                urlFile.Core.AkPost("/rightcloud/auth/getcodefile",
                                    { path: "xml/module/AllControls/AllControls.xml" },
                                    (a) => {
                                        var _list: string[] = a;
                                        item.DomObj = new MonacoEditorFile.MonacoEditor.MonacoEditorVm({
                                            CodeType: MonacoEditorFile.MonacoEditor.CodeType.xml,
                                            ContentList: _list
                                        });
                                        this.TabDomFileObj.forceUpdate("");
                                    });


                            }
                        }
                    },
                    {
                        DomObj: null,
                        Title: "js",
                        IsActive: false,
                        ReloadFun: (item) => {
                            if (!item.IsNoFirst) {

                                urlFile.Core.AkPost("/rightcloud/auth/getcodefile",
                                    { path: "Ataw.WebSite/ts/src/06app/web/hull.js" },
                                    (a) => {
                                        var _list: string[] = a;
                                        item.DomObj = new MonacoEditorFile.MonacoEditor.MonacoEditorVm({
                                            CodeType: MonacoEditorFile.MonacoEditor.CodeType.javascript,
                                            ContentList: _list
                                        });
                                        this.TabDomFileObj.forceUpdate("");
                                    });


                            }
                        }
                    },
                    {
                        DomObj: null,
                        Title: "typescript",
                        IsActive: false,
                        ReloadFun: (item) => {
                            if (!item.IsNoFirst) {

                                urlFile.Core.AkPost("/rightcloud/auth/getcodefile",
                                    { path: "Ataw.WebSite/ts/src/06app/web/hull.tsx" },
                                    (a) => {
                                        var _list: string[] = a;
                                        item.DomObj = new MonacoEditorFile.MonacoEditor.MonacoEditorVm({
                                            CodeType: MonacoEditorFile.MonacoEditor.CodeType.typescript,
                                            ContentList: _list
                                        });
                                        this.TabDomFileObj.forceUpdate("");
                                    });


                            }
                        }
                    },
                    {
                        DomObj: null,
                        Title: "webconfig",
                        IsActive: false,
                        ReloadFun: (item) => {
                            if (!item.IsNoFirst) {

                                urlFile.Core.AkPost("/rightcloud/auth/getcodefile",
                                    { path: "Ataw.WebSite/web.config" },
                                    (a) => {
                                        var _list: string[] = a;
                                        item.DomObj = new MonacoEditorFile.MonacoEditor.MonacoEditorVm({
                                            CodeType: MonacoEditorFile.MonacoEditor.CodeType.xml,
                                            ContentList: _list
                                        });
                                        this.TabDomFileObj.forceUpdate("");
                                    });


                            }
                        }
                    },
                    {
                        DomObj: null,
                        Title: "suggestText",
                        IsActive: false,
                        ReloadFun: (item) => {
                            if (!item.IsNoFirst) {

                                item.DomObj = new suggestFile.AutoSuggestText.AutoSuggestTextVm();
                                this.TabDomFileObj.forceUpdate("");

                            }
                        }
                    },
                    {
                        DomObj: null,
                        Title: "SelectorDom",
                        IsActive: false,
                        ReloadFun: (item) => {
                            if (!item.IsNoFirst) {

                                item.DomObj = new SelectorDomFile.SelectorDom.SelectorDomVm();
                                this.TabDomFileObj.forceUpdate("");

                            }
                        }
                    }
                ]
            });



        }

        private init(config: IJsonViewPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

        public initKityMinder(_data: KityMinderFile.KityMinderDom.ITreeCodeTableModel, item: TabDomFile.TabDom.ITabDomItem) {
            var _o = KityMinderFile.KityMinderDom.convertToKMNodeByTreeNode(_data);
            _o.data.text = "平台菜单";
            _o.data.expandState = "";
            item.DomObj = this.KityMinderDomObj = new KityMinderFile.KityMinderDom.KityMinderDomVm({ MDTreeObj: { root: _o } });
            //this.props.Vm.KityMinderDomObj.MDTreeObj = { root: _o };
            this.TabDomFileObj.IsChange = true;
            this.forceUpdate("");
        }

        public initTaskKityMinder(_data: KityMinderFile.KityMinderDom.ITreeCodeTableModel, item: TabDomFile.TabDom.ITabDomItem) {
            var _o = KityMinderFile.KityMinderDom.convertToKMNodeByTreeNode(_data);
            _o.data.text = "任务分配";
            _o.data.expandState = "";
            item.DomObj = new KityMinderFile.KityMinderDom.KityMinderDomVm({ MDTreeObj: { root: _o } });
            //this.props.Vm.KityMinderDomObj.MDTreeObj = { root: _o };
            this.TabDomFileObj.IsChange = true;
            this.forceUpdate("");
        }


    }
    export class JsonViewPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class JsonViewPageProps extends basewedPageFile.Web.BaseWebPageProps<JsonViewPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("JSONVIEWPAGE", basewedPageFile.Web.BaseWebPageVm, JsonViewPageVm);

}
