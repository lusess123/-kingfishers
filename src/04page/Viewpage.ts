/// <reference path="../../typings/0type/data.d.ts" />

import basewedPage = require("./BaseWebPage");
import iocFile = require("./../01core/Ioc");
import domFile = require("./../01core/0Dom");
import basepage = require("./../03form/Base/BasePage");
import PageView = require("./../07data/PageView");
import urlFile = require("./../01core/Url");
import utilFile = require("./../01core/Util");

import ListPageFile = require("./ListPage");
import DetailPageFile = require("./DetailPage");
import InsertPageFile = require("./InsertPage");
import UpdatePageFile = require("./UpdatePage");

import GridFormFile = require("./../03form/Grid/GridForm");
import NormalFormFile = require("./../03form/Norml/NormalForm");

ListPageFile; DetailPageFile; InsertPageFile; UpdatePageFile; GridFormFile; NormalFormFile;
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
import HookFile = require("./Hook");
import TestHookFile = require("./../06app/Sns/TestHook"); TestHookFile;
export module Page {
    export class WebViewPageAction extends basewedPage.Web.BaseWebPageAction {
        // LogList: Array<string>;
    }
    
    export class BaseWebViewPageReact<P extends WebViewPageProps, S extends WebViewPageStates, A extends WebViewPageAction>  extends basewedPage.Web.BaseWebPageReact<WebViewPageProps, WebViewPageStates, WebViewPageAction> implements domFile.Core.IReact {
        public state = new Page.WebViewPageStates();
        // public state : new 
        private IsNoFirst = false;
        
        protected pInstall(): void {
            //   if (this.props.Vm.getRegName() == "pick") debugger;
           // alert("安装");
            super.pInstall();    
            this.initPage();
          
        };
        protected pUnInstall(vm?: domFile.Core.DomVm): void {
            super.pUnInstall(vm);
            if (this.props.Vm.IsV1) {
               // alert();
               // alert("清除");
                var _$dom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-MAIN");
                if (_$dom) {
                    var _obj = _$dom.data("ATAW_CONTROL");
                    if (_obj) {
                        _obj["dispose"]();
                    }
                    _obj = null;
                    _$dom.addClass("col-md-12");
                    _$dom.removeClass("col-md-9");

                    this.toClearNaviShow();
                   // this.props.Vm.PageObj = null;
                }
            }
        }


        public pSender(): React.ReactElement<any> {
            //alert("webview sender");
            if (!this.props.Vm.IsV1) {
                return !this.props.Vm.PageVm ? React.DOM.div({}, "正在载入页面.....") : this.props.Vm.PageVm.intoDom();
            } else {
                return React.DOM.div({ className:"clearfix"},
                    React.DOM.div({ className: "ACT-PAGE-NAVI col-md-3  hide " }),
                    React.DOM.div({ className: "ACT-PAGE-MAIN col-md-12 " })
                );
            }
        }

        private toLeftNaviShow()
        {
            var _$Maindom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-MAIN");
            _$Maindom.removeClass("col-md-12");
            _$Maindom.addClass("col-md-9");

            var _$Navidom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-NAVI");
            _$Navidom.removeClass("hide");


        }

        private toClearNaviShow()
        {
            var _$Navidom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-NAVI");
            _$Navidom.find(".ACT_TREENAVI").each((i, e) => {
                $(e).clear();
            })
            _$Navidom.clear();
            _$Navidom.addClass("hide");
        }



        private initPage() {
            if (this.props.Vm.IsV1 && this.props.Vm.PageObj) {
                var _$dom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-MAIN");
                if (_$dom.length > 0) {
                    _$dom.show();
                    this.props.Vm.PageObj.NaviContentSelector = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-NAVI");

                    this.props.Vm.PageObj.SysFunAfterInit = (page) => {
                        var _$Navidom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-NAVI");
                        if (_$Navidom.html() == "") {
                        } else {
                            this.toLeftNaviShow();
                        }
                    };
                    if (this.props.Vm.IsView) {
                        _$dom["AtawViewPage"](this.props.Vm.PageObj);
                    } else {
                        _$dom["Ataw" + this.props.Vm.PageStyle + "Page"](this.props.Vm.PageObj);
                    }
                    if (this.props.Vm.PageObj.Title) {
                        document.title = this.props.Vm.PageObj.Title;
                    }
                }
            }
        }

        protected pComponentDidMount() {

            super.pComponentDidMount();
            //alert("载入");
            this.initPage();


        }

    }

    export class WebViewPageStates extends basewedPage.Web.BaseWebPageStates {
       
    }
    export class WebViewPageReact extends BaseWebViewPageReact<WebViewPageProps, WebViewPageStates, WebViewPageAction>{

    }
    export class WebViewPageVm extends basewedPage.Web.BaseWebPageVm {
        // public PageView: data.IPageView;
        public ReactType = WebViewPageReact;
        public Xml: string;
        public PageStyle: string = "List";
        public pRegName = "WebViewPageVm";
        public IsUpdate = false;
        public PageVm: basepage.ui.BasePageVm;

        public Param: string = "";
        public IsView: boolean = false;
        public IsV1: boolean = true;
        public PageObj: any;
        public constructor() {
            super();
            //if()
            if (window["IsV1"] != undefined) {
                this.IsV1 = window["IsV1"];
            }
            this.listenAppEvent("toggleNewOldDefault", "sys", (a: boolean) => {
               // alert(a);
                window["IsV1"] = this.IsV1 = a;
            });
        }
        private formartPageState(pagestyle: string, param :string) :any  {
            var pageState :any  = {}
            pageState.ds = {};
            var _pObj: any = {};
            if (pagestyle && param) {
                pagestyle = pagestyle.toUpperCase();
                try {
                    if (window["Base64"]) {
                        _pObj = $.parseJSON(window["Base64"]["decode"](param));
                    }
                }
                catch (arr) {
                    _pObj = { keys: param };
                }
                if (_pObj.keys) {
                    var keys = _pObj.keys.split(",");
                    pageState.ds["_KEY"] = [];
                    for (var i = 0; i < keys.length; i++) {
                        pageState.ds["_KEY"].push({ "KeyValue": keys[i] });
                    }
                }
                if (_pObj.OpenFunAfterInit) {
                    //this.OpenFunAfterInit = param.OpenFunAfterInit;
                }
                if (_pObj.additionData) {
                    pageState.additionData = _pObj.additionData;
                }
                switch (pagestyle) {
                    case "INSERT":

                        break;
                    case "UPDATE":
                    case "DETAIL":

                        break;
                    default:
                        if (_pObj.tablename && (_pObj.navi || _pObj.search)) {
                            pageState.ds[_pObj.tablename + "_SEARCH"] = [$.extend({}, _pObj.navi, _pObj.search)];
                        }
                        if (_pObj && _pObj.page) {
                            pageState.ds["PAGER"] = [_pObj.page];
                        }
                        if (_pObj && _pObj.formType) {
                            pageState.formType = _pObj.formType;
                        }
                        break;
                }
            }
            return pageState;
        }


        private createDs(paramObj: any ):any 
        {
            var ds = {};
            if (paramObj && paramObj.ds) {
                ds = paramObj.ds;
            }



           // this.Ds = ds;
            var postData = $.extend({},
                {
                    xml: this.Xml,
                    ds: $.toJSON(ds),
                    pageStyle: this.PageStyle
                },
                paramObj.additionData
            );
            return postData;
        }

        private _createPage(_pageView: PageView.data.IPageView, _pageStyle: string, callback: Function,hookId?:string) {
            var b = iocFile.Core.Ioc.Current().FetchInstance<basepage.ui.BasePageVm>(_pageStyle, basepage.ui.BasePageVm);
            if (b) {
                // var b = new ui.ListPageVm();将请求的数据都处理好 封装到BasePageVm中
                b.HookId = hookId;
                this.emitAppEvent("pBeforeFilter", b.HookId, _pageView);
                b.create(_pageView);
                this.PageVm = b;
                this.IsChange = true;
                callback();
            }
            else
                throw "找不到 注册名为 ‘" + _pageStyle + "’ 的页面";
        }

        public loadPage(callback?: () => any) {

            var _pState: any = this.formartPageState(this.PageStyle, this.Param);
            var _ds: any = this.createDs(_pState);
            // alert("请求");
            var _url: string = this.IsView ? "/module/modulepage" : "/module/module";

            urlFile.Core.AkPost(_url,
                _ds,
                (a) => {

                    if (!this.IsV1) {
                        try {
                            // if (this.isMounted()) {
                            //alert("senderPage  " + this.props.Vm.Xml );
                            //require(["src/01core/RQuery"], (aaa) => {
                                var _pageStyle = this.PageStyle.toUpperCase();
                                if (!_pageStyle || _pageStyle == "") {
                                    _pageStyle = "LIST";
                                }
                                var _pageView: PageView.data.IPageView = a;
                                this.Title = _pageView.Title;
                                if (_pageView.TsHook) {
                                    var _p = iocFile.Core.Ioc.Current().fetchPromise<HookFile.BasePageHook>(_pageView.TsHook, HookFile.BasePageHook);
                                    _p.done((hook) => {
                                        if (hook) {
                                            this._createPage(_pageView, _pageStyle, callback, hook.HookId);
                                        } else {
                                            alert("找不到名称为 " + _pageView.TsHook + " 的hook插件");
                                        }
                                    });
                                } else {
                                    this._createPage(_pageView, _pageStyle, callback);
                                }

                                //_pageView.
                               
                           // });
                        }
                        catch (ex) {
                            // utilFile.Core.Util.Noty(ex);
                            this.Error = ex;
                            callback();
                            // this.forceUpdate();
                        }
                    }
                    else {
                       // alert("loadpage");
                        this.PageObj = a;
                        this.IsChange = true;
                        callback();
                    }
                });
        }

       

        public Reset(p1?: string, p2?: string, p3?: string) {
            super.Reset(p1, p2, p3);
            this.Xml = p1;
            if (p2 && p2 != "") {
                this.PageStyle = p2;
            }
            else
            {
                this.PageStyle = "List";
            }

            if (p3 && p3 != "") {
                this.Param = p3;
            }
            else
            {
                this.Param = "";
            }
        }
  
    }
    export class WebViewPageProps extends basewedPage.Web.BaseWebPageProps<WebViewPageVm>{
    }

    //$(window).hashchange(() => {
    //    var hash = location.hash;
    //     alert(hash);
    //});
    iocFile.Core.Ioc.Current().RegisterType("DEFAULT", basewedPage.Web.BaseWebPageVm, WebViewPageVm);

} 