import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import eventFile = require("./../../01core/Event");

import baseWedPage = require("./../../04page/BaseWebPage");
import treeFile = require("./../../05tool/Tree");
import TreeReact = treeFile.ui.TreeReact;
import TreeNodeVm = treeFile.ui.TreeNodeVm;

import feedFile = require("./../Sns/Feed");
import headerFile = require("./Header");
import testFile = require("./../Sns/Test");
import testFormFile = require("./../../05tool/TestForm"); testFormFile;

import React = require("react");
import ReactDOM = require("react-dom");
import BreadDomFile = require("./../../05tool/BreadDom/BreadDom");
import WebAppFile = require("./../../01core/WebApp"); WebAppFile;
import ModalDomFile = require("./../../05tool/Modal/ModalDom"); ModalDomFile;
import devMenuFile = require("./DevMenu");

export module Web {
    feedFile; testFile;
    export class HullAction extends domCore.DomAction {
    }

    export class HullReact extends domCore.DomReact<HullProps, HullStates, HullAction> implements domCore.IReact {

        public state = new HullStates();

        //点击事件
        private fun_NailClick() {
            this.props.Vm.IsAutoHide = !this.props.Vm.IsAutoHide;
            if (this.props.Vm.IsAutoHide) {
                //自动隐藏了
                this.props.Vm.IsHide = true;
            }

            this.forceUpdate(() => {
                // eventFile.App.GetAppEvent().emit("Hull_menu_toggle", this.props.Vm.IsHide);
                // this.props.Vm.em
                this.props.Vm.emitMenuToggle();
            });
        }

        private fun_NailClick_min() {
            // this.props.Vm.IsAutoHide = !this.props.Vm.IsAutoHide;
            this.props.Vm.IsHide = !this.props.Vm.IsHide;
            this.props.Vm.IsAutoHide = this.props.Vm.IsHide;

            this.forceUpdate(() => {
                // eventFile.App.GetAppEvent().emit("Hull_menu_toggle", this.props.Vm.IsHide);
                // this.props.Vm.em
                this.props.Vm.emitMenuToggle();
            });
        }

        private fun_closePanel() {
            this.props.Vm.PanelPageObj = null;
            this.forceUpdate();
        }

        private fun_menuLinkClick() {
            this.forceUpdate();
        }

        private fun_orgLinkClick() {
            this.forceUpdate();
        }
        private fun_NavClick() {
            this.props.Vm.IsNavHide = !this.props.Vm.IsNavHide;
            this.forceUpdate();
        }


        private _createPanel(): React.ReactElement<any> {
            var _reactPanel = (<div className="Hm-pull Ha-right-left Hg-default-height  ACT-PANEL-CONTENT ">
                <div className="Hu-naiv  Hu-close-btn Hg-fixed">
                    <h3 className="Hu-modals-title pull-left">{this.props.Vm.PanelPageObj.Title}</h3>
                    <a className=" Hu-pointer "  onClick={() => { this.fun_closePanel(); } }><i className="fa fa-close fa-2x pull-right"></i></a>
                </div>
                {this._tDom(this.props.Vm.PanelPageObj) }

            </div>);
            return _reactPanel;
        }

        private fun_closeWin() {
            this.props.Vm.closeWinEmit();
            this.props.Vm.WinPageObj = null;
            this.forceUpdate();
        }


        private _createWin(): React.ReactElement<any> {
            var modalPanel = <div className={"Hm-modals-bg Hg-width Hg-max-width Hg-overflow-auto YSm-modals-bg" }>
                <div className="Hm-modals Hg-relative Hg-default-top Hm-modals-shape Hs-fff YSs-modals">
                    <a className="Hu-close acsClose Hu-pointer" onClick={() => { this.fun_closeWin(); } }><i className="fa fa-close"></i></a>
                    {this.props.Vm.WinPageObj.intoDom() }
                </div>
            </div>;

            return modalPanel;
        }

        private _creatModal(): React.ReactElement<any> {
            if (this.props.Vm.WinPageObj) {
                // alert();
                this.props.Vm.ModalDomObj = new ModalDomFile.ModalDom.ModalDomVm({
                    DomObj: this.props.Vm.WinPageObj,
                    Title: this.props.Vm.WinPageObj.Title,
                    IsModalShow: true,
                    ModalCloseFun: (modal, fun) => {
                        this.props.Vm.WinPageObj = null;
                    }
                });
                return this.props.Vm.ModalDomObj.intoDom();
            }
            return null;
        }

        private fSendHeader(): React.ReactElement<any>[] {


            return [
                <div className={"Hm-smooth-nav Hu-pointer Hg-margin-t6 " + (this.props.Vm.HasHeaderBtn ? " " : " hide") } onClick={() => { this.fun_NavClick(); } }>头部导航</div>,
                (this.props.Vm.IsHide && this.props.Vm.MenuObj ? (<div className="Hm-smooth Hu-pointer">菜单导航</div>) : null),
                <div className= {(this.props.Vm.IsNavHide ? "hide" : " ") }>{ this._tDom(this.props.Vm.HeaderObj, { nullNode: <span><i className="fa  fa-spinner fa-spin "></i>等待载入模块</span> }) }</div >
            ];
        }

        private fSendLeft(): React.ReactElement<any> {
            return <div className={ (this.props.Vm.IsHide ? "hide " : "") + "col-lg-2 col-md-2 col-sm-6 col-xs-6 Hm-left-menu Hu-box-shadow acsMenupanel ACT-MENU-LEFT " + (this.props.Vm.IsAutoHide ? "acsMenupanelAutoHide" : "") + (this.props.Vm.IsMenuLinkHide ? " show change " : "") + (this.props.Vm.IsNavHide ? " Hg-height" : "") }>
                <a className="Hu-naiv Hu-pointer hidden-md-down" onClick={() => { this.fun_NailClick(); } }> <i className={" fa  fa-thumb-tack  pull-right Hu-default-icon " + (this.props.Vm.IsAutoHide ? "Ha-transform" : "") }></i></a>
                <a className="Hu-naiv Hu-pointer hidden-lg-up" onClick={() => { this.fun_NailClick_min(); } }> <i className={" fa  fa-thumb-tack  pull-right Hu-default-icon " + (this.props.Vm.IsAutoHide ? "Ha-transform" : "") }></i></a>
                {this._tDom(this.props.Vm.MenuObj, { nullNode: <span><i className="fa  fa-spinner fa-spin "></i>等待载入菜单</span> }) }
            </div>
        }

        public pSender(): React.ReactElement<any> {

            return <div>

                {this._creatModal() }

                { this.props.Vm.IsFrontApp ? null : this.fSendHeader() }

                <div className={"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 Hg-content" + (this.props.Vm.IsNavHide || this.props.Vm.IsFrontApp ? " Hg-top" : " ") }>
                    { this.props.Vm.IsFrontApp ? null : this.fSendLeft() }
                    {this.props.Vm.PanelPageObj ? this._createPanel() : null}
                    <div className={"Hm-content col-md-12 col-sm-12 col-xs-12 " + (this.props.Vm.IsHide || this.props.Vm.IsFrontApp ? " col-lg-12 Hg-default-left  " : "col-lg-10 Hg-default-pl") + (this.props.Vm.IsAutoHide ? " col-lg-12 Hg-default-left" : " ") }>
                        {this.props.Vm.IsFrontApp ? null : this._tDom(this.props.Vm.BreadDomObj, { nullNode: <span><i className="fa  fa-spinner fa-spin "></i>等待载入导航</span> }) }
                        {this.props.Vm.MainPageObj ? (<div className="p-x">{this.props.Vm.MainPageObj.intoDom() }</div>) : (<div className="Hg-relative Hg-default-top text-center "><h3 ><i className="fa fa-refresh fa-spin "></i>{this.props.Vm.ShowTip}</h3></div>) }
                    </div>
                </div>
            </div>;


        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
            //---------------侧边栏事件-----------
            $("body").addClass("acsoverflownone").click((a) => {
                var _$tar = $(a.target);
                // alert(1);
                if (_$tar.hasClass("Hm-smooth") || _$tar.hasClass("ACT-MENU-LEFT") || _$tar.parents(".ACT-MENU-LEFT").length > 0) {
                    //什么都不做
                    //  alert("什么也不做");
                    if (_$tar.hasClass("Hm-smooth")) {

                        if (this.props.Vm.IsHide) {
                            this.props.Vm.IsHide = false;
                            this.forceUpdate();
                        }


                    }
                }
                else {
                    if (this.props.Vm.IsHide == false && this.props.Vm.IsAutoHide) {
                        this.props.Vm.IsHide = true;
                        this.forceUpdate();
                    }
                    // alert();
                }



                if (_$tar.is(".Hm-modals-bg") || _$tar.parents(".Hm-modals-bg").length > 0 || _$tar.is(".ACT-PANEL-CONTENT") || _$tar.parents(".ACT-PANEL-CONTENT").length > 0) {
                    //弹出层内部
                    $("body").addClass("Hf-overflow ");

                } else {
                    //弹出层外部
                    $("body").removeClass("Hf-overflow ");
                }

            });
            this.props.Vm.loadPage({
                HasNoLeftMenu: false,
                StyleName: this.props.Vm.StyleName ? this.props.Vm.StyleName : "H",
                HasHeaderBtn: false
            });



            //-------------------
            urlFile.Core.AkUrl.Current().bindHashChange((a, afterFun, isUrl) => {
                utilFile.Core.Util.ToggleLoading(true);
                var _urls = a.split("#");
                var _url = "";
                var _menuUrl = "";
                if (_urls.length > 0) {
                    if (_urls.length == 1) {
                        _menuUrl = _url = _urls[0];
                    }
                    else {
                        if (_urls.length == 2) {
                            _menuUrl = _urls[0] == "" ? _urls[1] : _urls[0];
                            _url = _urls[1];
                        }
                        else {
                            if (_urls[0] == "") {
                                _menuUrl = _urls[1];
                                _url = _urls[2];
                            } else {
                                _menuUrl = _urls[0];
                                _url = _urls[1];
                            }
                        }

                    }

                }
                if (_url != "") {

                    // alert("调用bindPage");
                    this.props.Vm.bindPage(_url, afterFun);
                }
                else {
                    if (_menuUrl == "") {
                        urlFile.Core.AkUrl.Current().openUrl(this.props.Vm.HomeUrl);
                    }
                }
                if (_menuUrl != "") {
                    this.props.Vm.menuBindHashChange(_menuUrl, afterFun, isUrl);
                }


            });
            // urlFile.Core.AkUrl.Current().refresh();

        }


    }

    export interface IHullVmConfig {

        HasNoLeftMenu?: boolean;
        HomeUrl?: string;
        HasSDKMenu?: boolean;
        LogoUrl?: string;
        StyleName?: string;
        HasHeaderBtn?: boolean;
        IsV1?: boolean;
        AppList?: string[];
        IsFrontApp?: boolean;
        IsTimeHide?: boolean;
        HasNoFeed?: boolean;
        HasNoNewOldPage?: boolean;
    }

    var _setTree = function (tree: treeFile.ui.ITreeCodeTableModel) {
        if (tree.ExtData && tree.ExtData.RightValue) {

            if (tree.ExtData.RightValue == "#") {
                tree.CODE_VALUE = "$menu$" + tree.CODE_VALUE;
            } else {
                tree.CODE_VALUE = tree.ExtData.RightValue;
            }
        }

        if (tree.Children && tree.Children.length > 0) {
            tree.Children.forEach((node) => {
                _setTree(node);
            });
        }
    }

    export class HullVm extends domCore.DomVm {
        public ReactType = HullReact;
        public MainPageObj: baseWedPage.Web.BaseWebPageVm;
        public PanelPageObj: baseWedPage.Web.BaseWebPageVm;
        public WinPageObj: baseWedPage.Web.BaseWebPageVm;
        public HeaderObj: headerFile.Header.HeaderVm;
        public IsMenuLinkHide: boolean;

        public NickName: string;

        public MenuObj: treeFile.ui.TreeVm;
        public BreadDomObj: BreadDomFile.BreadDom.BreadDomVm;

        public ModalDomObj: ModalDomFile.ModalDom.ModalDomVm;

        //public TableObj: tableFile.Web.TableDemoVm;

        public IsAutoHide: boolean = false;
        public ShowTip: string = "等待载入页面";
        public IsNavHide: boolean = false;

        //是否菜单隐藏了
        public IsHide: boolean = true;
        public IsTimeHide: boolean = false;
        // public IsPanel: boolean = true;
        public HomeUrl: string = "$FEED$";
        public HasSDKMenu: boolean = false;
        public LogoUrl: string;
        public StyleName: string;
        public HasHeaderBtn: boolean;
        public IsV1: boolean = true;
        public AppList: string[] = [];
        public IsFrontApp: boolean;

        public HasNoFeed: boolean;
        public HasNoNewOldPage: boolean;

        public closeWinEmit() {
            this.emitAppEvent("win-close-btn", this.WinPageObj.UniId);
        }

        private floadMenuObj(config?: IHullVmConfig) {
            urlFile.Core.AkPost("/right/Menu/GetAllTree?regname=MenuTreeCodeTable", {}, (a: any) => {
                var _treeObj: treeFile.ui.ITreeCodeTableModel = a;
                _treeObj.CODE_VALUE = "0";
                _treeObj.CODE_TEXT = "主页";

                if (this.HasSDKMenu) {
                    var _obj = {
                        CODE_VALUE: "0", CODE_TEXT: "主页",
                        Children: devMenuFile.MenuObj
                    };
                    _treeObj.Children = _treeObj.Children.concat(_obj.Children);
                }

                _setTree(_treeObj);

                var _headerConfig: headerFile.Header.IHeaderVmConfig =
                    {
                        MenuLinks: _treeObj.Children.map((m) => {
                            return { Text: m.CODE_TEXT, Val: m.CODE_VALUE ,IsDev : m["IsDev"] };
                        }),
                        HomeUrl: this.HomeUrl,
                        LogoUrl: this.LogoUrl,
                        IsOldDefault: this.IsV1,
                        IsTimeHide: this.IsTimeHide,
                        HasNoNewOldPage: this.HasNoNewOldPage
                        
                    };
                this.HeaderObj = new headerFile.Header.HeaderVm(_headerConfig);

                //eventFile.App.initAppEvent(this.getEmit());
                if (!this.HasNoFeed) {
                    this.initSocketIo();
                }

                if (!config.HasNoLeftMenu) {
                    this.MenuObj = new treeFile.ui.TreeVm(
                        {
                            IsOnLeafCanSelect: true,

                            StyleName: config.StyleName ? config.StyleName : "H",
                            NodeTplFun: (a: TreeNodeVm) => {
                                if (a.ExtendObj && a.ExtendObj.Icon) {
                                    if (a.ExtendObj.Icon.length > 5) {
                                        var _icon = a.ExtendObj.Icon.substring(5);
                                        // var _icon = "core";
                                        return [<span><i className={"fa fa-" + _icon }></i>{a.Text}</span>];
                                    }

                                }

                                if (a.IsRoot) {
                                    return [<span><i className="fa fa-h-right"></i>{a.Text}</span>];
                                }
                                else {
                                    return [<span><i className={"fa fa-file-text-o"}></i>{a.Text}</span>];
                                }


                            }
                        });


                    this.BreadDomObj = new BreadDomFile.BreadDom.BreadDomVm({ TreeModel: _treeObj, HomeUrl: this.HomeUrl });
                    this.MenuObj.initTreeVm(_treeObj);

                    this.MenuObj.onReactNodeClick((a) => {
                        urlFile.Core.AkUrl.Current().openUrlByNoMenu(a.Value);
                        return true;
                    });


                    if (this.AppList && this.AppList.length > 0) {
                        require(this.AppList.map((appsrc) => { return "./../../" + appsrc; }), () => {
                            urlFile.Core.AkUrl.Current().refresh();
                        }, (errorMsg) => {
                            // console.log(a);
                            this.ShowTip = "前端模块载入有误 " + $.toJSON(this.AppList) + errorMsg.message;
                            this.forceUpdate("");
                        });
                    } else {
                        urlFile.Core.AkUrl.Current().refresh();
                    }





                } else {
                    this.IsHide = true;
                    this.forceUpdate("");
                }


            });
        }

        public loadPage(config?: IHullVmConfig) {

            // require(this.)

            this.floadMenuObj(config);


        }

        public menuBindHashChange(url: string, afterFun: Function, a: boolean) {
            if (!a) {
                if (url.toUpperCase() == this.HomeUrl.toUpperCase()) {
                    this.BreadDomObj.setBreadShow("0");
                    this.MenuObj.resetRootNode();
                    this.emitAppEvent("/06app/web/Header/HeaderLinkActive", "", url.replace("#", ""));
                }
                else {
                    var _isRes: boolean = false;
                    var _m = urlFile.Core.AkUrl.Current().getPageUrlModel(url);
                    var _code1: string = "";
                    if (_m) {
                        _code1 = urlFile.Core.AkUrl.Current().getUrlCode(_m);
                    }
                    else {
                        _code1 = url;
                    }
                    this.BreadDomObj.setBreadShow(url.replace("#", ""));
                    this.MenuObj.ExpandNode((node) => {
                        var _isres: boolean = false;
                        var _val = node.Value.toUpperCase();
                        if (node.Value && _val == url.replace("#", "").toUpperCase()) {
                            _isres = true;
                            if (_val.length >= 6 && _val.indexOf("$MENU$") == 0) {
                                if (node.Children && node.Children.length > 0) {
                                    urlFile.Core.AkUrl.Current().openUrlByNoMenu(node.Children[0].Value);
                                }
                            }
                        } else {

                            if (!node["code"]) {
                                var _x = urlFile.Core.AkUrl.Current().getPageUrlModel(node.Value);
                                node["code"] = urlFile.Core.AkUrl.Current().getUrlCode(_x);
                                // = _code2;
                            }


                            if (_isres || _code1 == node["code"]) {
                                // alert("找到节点");
                                _isres = true;
                                if (_m && _m.ModuleName && _m.ModuleName.toUpperCase() == "MENU") {
                                    if (node.Children && node.Children.length > 0) {
                                        //  urlFile.Core.AkUrl.Current().openUrl(node.Children[0].Value);
                                        urlFile.Core.AkUrl.Current().openUrlByNoMenu(node.Children[0].Value);
                                    }
                                }


                            } else {
                                _isres = false;
                            }
                        }
                        if (_isres) {
                            var _root = node.findRoot(node);
                            if (_root) {
                                //alert(_root.Value);
                                // var _x = urlFile.Core.AkUrl.Current().getPageUrlModel(_root.Value);
                                //  alert(_x);
                                this.emitAppEvent("/06app/web/Header/HeaderLinkActive", "", _root.Value);
                            }
                            _isRes = true;
                        } else {
                            // this.emitAppEvent("/06app/web/Header/HeaderLinkActive", "", url.replace("#", ""));
                        }
                        return _isres;
                    }, true);

                    if (!_isRes) {
                        this.emitAppEvent("/06app/web/Header/HeaderLinkActive", "", url.replace("#", ""));
                    }
                }
                this.BreadDomObj.forceUpdate("");
            }

        }

        public constructor(config?: IHullVmConfig) {
            super();

            if (config) {
                window["LeftMenuStatus"] = this.IsHide = this.IsAutoHide = config.HasNoLeftMenu;
                if (config.HomeUrl) {
                    this.HomeUrl = config.HomeUrl;
                }
                if (config.HasSDKMenu) {
                    this.HasSDKMenu = config.HasSDKMenu;
                }
                if (config.StyleName) {
                    this.StyleName = config.StyleName;
                }
                if (config.HasHeaderBtn) {
                    this.HasHeaderBtn = config.HasHeaderBtn;
                }

                if (config.IsTimeHide) {
                    this.IsTimeHide = config.IsTimeHide;
                }
                //if (config) {
                if (config.LogoUrl) {
                    this.LogoUrl = config.LogoUrl;
                }
                if (config.AppList) {

                    this.AppList = config.AppList;

                }
                this.IsFrontApp = config.IsFrontApp;
                // }
                this.IsV1 = config.IsV1;
                this.HasNoNewOldPage = config.HasNoNewOldPage;
                this.HasNoFeed = config.HasNoFeed;
            }
            this.ModalDomObj = new ModalDomFile.ModalDom.ModalDomVm({
                IsDebug: true,
                DomObj: this.WinPageObj

            });
            this.listenAppEvent("Hull-Menu-Toggle-Page-NoSender", "sys", (isHide: boolean) => {
                this.IsHide = isHide;
            })


        }

        public emitMenuToggle() {
            window["LeftMenuStatus"] = this.IsAutoHide;
            this.emitAppEvent("pageButtom", "page", this.IsHide);
        }


        public initSocketIo() {
            if ($.AKjs && $.AKjs.NodeUrl) {
                this.HeaderObj.NodeClient.init($.AKjs.NodeUrl);
            }
        }

        private showPage(_name: string, panelName: string, param: string, p1: string, p2: string, p3: string, afterFun: Function) {

            iocFile.Core.Ioc.Current().FetchAsyInstance<baseWedPage.Web.BaseWebPageVm>(
                _name,
                baseWedPage.Web.BaseWebPageVm,
                (a: baseWedPage.Web.BaseWebPageVm) => {

                    this.fpageShow(a, _name, panelName, param, p1, p2, p3, afterFun);


                },
                (a) => {

                    switch (panelName) {
                        case "win":
                            if (this.WinPageObj) {
                                this.WinPageObj.dispose();
                            }
                            this.WinPageObj = null;

                            break;
                        case "panel":
                            if (this.PanelPageObj) {
                                this.PanelPageObj.dispose();
                            }
                            this.PanelPageObj = null;

                            break;
                        default:
                            if (this.MainPageObj) {
                                this.MainPageObj.dispose();
                            }

                            this.MainPageObj = null;
                            this.ShowTip = "路由名称为 " + _name + " 的页面,脚本文件" + a + "载入失败....";
                            break;
                    }

                    try {
                        this.forceUpdate("", () => {
                            //  this.
                            utilFile.Core.Util.ToggleLoading(false);
                            if (afterFun) {
                                afterFun();
                            }
                        });
                    }
                    catch (ex) {
                        if (this.WinPageObj) {
                            this.WinPageObj.dispose();
                        }
                        if (this.PanelPageObj) {
                            this.PanelPageObj.dispose();
                        }
                        if (this.MainPageObj) {
                            this.MainPageObj.dispose();
                        }
                        this.ShowTip = ex;
                        this.forceUpdate("", () => {
                            //  this.
                            utilFile.Core.Util.ToggleLoading(false);
                        });
                    }
                }
            );

        }


        private fpageShow(_page: baseWedPage.Web.BaseWebPageVm, _name: string, panelName: string, param: string, p1: string, p2: string, p3: string, afterFun: Function) {

            if (_page) {
                //this.state.IsPanel ? this.state.NoRoute1 = false : this.state.NoRoute = false;
                _page.Reset(p1, p2, p3);
                _page.IsChange = true;
                _page.ModuleName = _name;
                var isPanel: boolean = false;
                // alert("页面调用");
                _page.sysPage_load((a?: Function) => {
                    _page.PanelName = panelName;
                    switch (panelName) {
                        case "win":
                            if (this.PanelPageObj)
                                this.PanelPageObj.IsChange = false;
                            if (this.MainPageObj)
                                this.MainPageObj.IsChange = false;
                            this.WinPageObj = _page;
                            this.ModalDomObj.Title = _page.Title;
                            break;
                        case "panel":
                            if (this.WinPageObj) {
                                this.WinPageObj.dispose();
                                this.WinPageObj = null;
                                this.ModalDomObj.Title = null;
                            }
                            if (this.MainPageObj) {
                                this.MainPageObj.IsChange = false;
                            }
                            this.PanelPageObj = _page;
                            break;
                        default:
                            if (this.WinPageObj) {
                                this.WinPageObj.dispose();
                                this.WinPageObj = null;
                                this.ModalDomObj.Title = null;
                            }
                            if (this.PanelPageObj && param == "") {
                                this.PanelPageObj.dispose();
                                this.PanelPageObj = null;
                            }
                            this.MainPageObj = _page;
                            break;
                    }

                    urlFile.Core.AkUrl.Current().bindSendPage(panelName, (p: IPageActor, obj: any) => {
                        //alert("hull : " + obj);
                        _page.getEmit().emit("sendPage", p, obj);
                    });

                    urlFile.Core.AkUrl.Current().bindClosePage(panelName, () => {
                        //alert("hull : " + obj);
                        switch (panelName) {
                            case "win":
                                this.WinPageObj.dispose();
                                this.WinPageObj = null;
                                break;

                            case "panel":
                                this.PanelPageObj.dispose();
                                this.PanelPageObj = null;
                                break;
                            default:
                                break;
                        }
                        this.forceUpdate("", () => {
                            utilFile.Core.Util.ToggleLoading(false);

                        });

                    });


                    this.forceUpdate("", () => {

                        if (a) a();
                        utilFile.Core.Util.ToggleLoading(false);
                        if (_page.Title) {
                            document.title = _page.Title;
                        }
                        if (afterFun) {
                            afterFun();
                        }
                        _page.EndTime = new Date();
                        console.info("新页面-" + _page.ModuleName + "渲染时间 :  " + this.logTime(_page.EndTime, _page.BeginTime));
                        //  alert();
                        this.emitAppEvent("/06app/web/Header/HeaderLinkActive.listenHeadWidth", "sys");
                    });


                    //alert();
                });


            }
            else {
                var _isDirect: boolean = true;
                switch (panelName) {
                    case "win":
                        if (this.WinPageObj) {
                            this.WinPageObj.dispose();
                        }
                        this.WinPageObj = null;
                        alert("路由名称为 " + _name + " 的页面不存在");
                        break;
                    case "panel":
                        if (this.PanelPageObj) {
                            this.PanelPageObj.dispose();
                        }
                        this.PanelPageObj = null;
                        alert("路由名称为 " + _name + " 的页面不存在");
                        break;
                    default:
                        if (this.MainPageObj) {
                            this.MainPageObj.dispose();
                        }
                        this.MainPageObj = null;
                        if (_name != "MENU")
                            this.ShowTip = "路由名称为 " + _name + " 的页面不存在";
                        else {
                            this.ShowTip = "页面正在跳转......(" + panelName + " " + param + " " + p1 + " " + p2 + " " + p3 + ")";
                            _isDirect = false;
                        }
                        break;
                }

                if (_isDirect) {
                    this.forceUpdate("", () => {
                        if (_page) {
                            _page.EndTime = new Date();
                            console.info("新页面-" + _page.ModuleName + "渲染时间 :  " + this.logTime(_page.EndTime, _page.BeginTime));
                            this.emitAppEvent("/06app/web/Header/HeaderLinkActive.listenHeadWidth", "sys");
                        }
                        utilFile.Core.Util.ToggleLoading(false);
                    });
                }
            }

        }

        private logTime(end: Date, begin: Date): number {
            var _begin: any = begin;
            var _end: any = end;
            var _t: number = (_end - _begin);
            return _t;
        }


        public bindPage(a: string, afterFun: Function) {

            this.ShowTip = "正在载入数据";
            var _m = urlFile.Core.AkUrl.Current().getPageUrlModel(a);
            if (_m) {

                this.showPage(
                    _m.ModuleName,
                    _m.PanelName,
                    "",
                    _m.Param1,
                    _m.Param2,
                    _m.Param3,
                    afterFun);
            }
            else {
                this.ShowTip = a + " 路由格式错误  " + a;
                this.forceUpdate("", () => {
                    utilFile.Core.Util.ToggleLoading(false);
                    if (afterFun) {
                        afterFun();
                    }
                });
            }


        }
    }
    export class HullStates extends domCore.DomStates {
    }


    export class HullProps extends domCore.DomProps<HullVm>{
    }

    export interface IPageActor {
        FromPanelName: string;
        FromModulename: string;
        ToPanelName: string;
        ToModuleName?: string;

        Param1?: string;
        Param2?: string;
        Param3?: string;
    }

    export interface PageUrlMode {
        PanelName: string;
        ModuleName: string;
        Param1?: string;
        Param2?: string;
        Param3?: string;

    }




}
