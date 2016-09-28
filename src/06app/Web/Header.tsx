
import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");

import alinkFile = require("./../../05tool/ALink");
import ALink = alinkFile.ui.ALinkReact;

import BookMarkFile = require("./../../right/H/tool/BookMark");
import BookMark = BookMarkFile.BookMark.BookMarkReact
import BookMarkVm = BookMarkFile.BookMark.BookMarkVm;

import XScrollFile = require("./../../05tool/XScroll");
import XScroll = XScrollFile.XScroll.XScrollReact;
import XScollVm = XScrollFile.XScroll.XScrollVm;

import nodeClientFile = require("./../../06app/SocketIo/NodeClient");
import NewCircleFile = require("./../../06app/SocketIo/NewCircleDom");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module Header {
    export class HeaderAction extends domCore.DomAction {
    }

    export class HeaderReact extends domCore.DomReact<HeaderProps, HeaderStates, HeaderAction> implements domCore.IReact {

        public state = new HeaderStates();
        private fun_toggleIconClick() {
            this.props.Vm.IsToggleIconHide = !this.props.Vm.IsToggleIconHide;
            this.forceUpdate();
        }

        private fun_refreshClick() {
            utilFile.Core.Util.ToggleLoading(true);
            urlFile.Core.AkUrl.Current().refresh();
        }

        private fun_logoOnload()
        {
            this.fSetWidth();
        }

        private front_btn()
        {
            var _str = window.location.origin + window.location.pathname+"1" + "?f=vv" + window.location.hash;
            window.open(_str);
        }

        public pSender(): React.ReactElement<any> {
            return <nav className="navbar navbar-dark bg-inverse navbar-fixed-top ACT-HEADER-BODY  ">
                <a className="navbar-brand ACT-HEADER-LOGO "   ><img className="m-l" src={this.props.Vm.LogoUrl}  style={{ width: "auto" }}  onLoad={() => { this.fun_logoOnload(); } }   /></a>
                <section className="Hm-navbar clearfix">
                    <ul className="nav navbar-nav pull-left  ACT-HEADER-MENU  ">
                        <li className="nav-item Hg-relative">
                            <ALink  Vm={new alinkFile.ui.ALinkVm(false, { ClassName: "nav-link active ACT-INDEX-TAB" }) } href={this.props.Vm.HomeUrl} children={null}>主页</ALink>                           
                        </li>

                    </ul>
                    {this.props.Vm.XScrollObj.intoDom() }
                    <div className="pull-right hidden-lg-up Hu-pointer ACT-HEADER-ICON " onClick={() => { this.fun_toggleIconClick(); } }><i className="fa fa-cog"></i></div>
                    <ul className={"nav navbar-nav pull-right hidden-md-down  ACT-HEADER-SYS  " + (this.props.Vm.IsToggleIconHide ? " change" : "") }>
                        <li className={"nav-item " + (this.props.Vm.IsTimeHide?" hide ": " ") }><a className="nav-link Hf-text-overflow" id="ACT-TIME"  title="时间测试:服务器》网络》总时间" style={{ width: "150px" }}><i className="fa fa-clock-o Hu-pointer" ></i></a></li>
                        {this._tDom(this.props.Vm.BookMarkObj) }
                        <li className="nav-item"><a className="nav-link" onClick={() => { this.fun_refreshClick(); } }><i className="fa fa-refresh Hu-pointer" ></i><span>刷新</span></a></li>
                        <li className="nav-item" ><a className="nav-link Hf-text-overflow" style={{ width: "112px" }}><i className="fa fa-question-sign Hu-pointer"></i>{this.props.Vm.NickName}</a>
                            <ul className="bg-inverse">
                                <li className="nav-item"><ALink Vm={new alinkFile.ui.ALinkVm(false, { ClassName: "nav-link" }) } href="$changepwd$" children={null}><i className="fa fa-question-sign Hu-pointer"></i><span>修改密码</span></ALink></li>
                                <li className="nav-item"><a className="nav-link" href="/rightcloud/auth/logOut"><i className="fa fa-power-off Hu-pointer"></i><span>退出</span></a></li>
                                {this.props.Vm.HasNewOldPage ? null : <li className="nav-item"><a className="nav-link"  onClick={() => { this.newOld_fun(); } } ><i className="fa fa-rocket Hu-pointer"></i><span>新/旧</span></a></li>}
                                {this.props.Vm.HasNewOldPage ? null : <li className="nav-item"><a className="nav-link"  onClick={() => { this.front_btn(); } } ><i className="fa fa-globe Hu-pointer"></i><span>前台</span></a></li>}
                                
                            </ul>
                        </li>
                    </ul>

                </section>
            </nav>;
        }

        private fSetWidth() {
            //window.location
            var _n = $(".ACT-HEADER-BODY").width() - $(".ACT-HEADER-MENU").width() - $(".ACT-HEADER-SYS").width() - $(".ACT-HEADER-LOGO").width() - $(".ACT-HEADER-ICON").width() - 50;
            //alert($(".ACT-HEADER-BODY").width() +
            //    " -  " + $(".ACT-HEADER-MENU").width() +
            //    " -  " + $(".ACT-HEADER-SYS").width() +
            //    " - " + $(".ACT-HEADER-LOGO").width() +
            //    " - " + $(".ACT-HEADER-ICON").width() + " -  50  = "  + _n );
            $(".Hf-menu-scroll").width(_n);
        }

        private fIsFirst: boolean = true;
        protected pComponentDidMount() {
            super.pComponentDidMount();
            this.fSetWidth();
            $(window).resize(() => {
               // alert("resize");
               // if (!this.fIsFirst) {
                    this.fSetWidth();
              //  }
                this.fIsFirst = false;
                // alert(_n);
            });
            this.props.Vm.listenHeadWidth(() => {
               // alert("listenHeadWidth");
                this.fSetWidth();
            });


        }

        private newOld_fun() {
            //-------
            this.props.Vm.toggleNewOldDefault();
        }


    }
    export interface IMenuLink {
        Text: string;
        Val: string;
        IsDev?: boolean;
        IsActive?: boolean;
    }

    export interface IHeaderVmConfig {
        MenuLinks?: IMenuLink[];
        Size?: number;
        HomeUrl: string;
        LogoUrl?: string;
        IsOldDefault?: boolean;
        IsTimeHide?: boolean;
        HasNoNewOldPage?: boolean;
    }


    export class HeaderVm extends domCore.DomVm {
        public ReactType = HeaderReact;

        public XScrollObj: XScollVm;

        public MenuLinks: IMenuLink[] = [];
        public Size: number = 10;

        public IsToggleIconHide: boolean;
        public IsMenuLinkHide: boolean;
        public IsOrgLinkHide: boolean;
        public BookMarkObj: BookMarkFile.BookMark.BookMarkVm = new BookMarkFile.BookMark.BookMarkVm();
        public NickName: string;
        public HomeUrl: string = "$FEED$";
        public NodeClientDom: NewCircleFile.NewCircleDom.NewCircleDomVm;   //主页消息动态提示

        public IsTimeHide: boolean = false;//时间控件是否显示

        public NodeClient: nodeClientFile.SocketIo.NodeClient;
        public LogoUrl: string;
        private IsOldDefault: boolean = true;
        public HasNewOldPage: boolean;

        public toggleNewOldDefault() {
           // window["IsOldDefault"] = this.IsOldDefault;
            this.IsOldDefault = !this.IsOldDefault;
            this.emitAppEvent("toggleNewOldDefault", "sys", this.IsOldDefault);
            
        }

        private link_Fun(val: string) {
            // var _isMenu = val.length >= 6 && val.toUpperCase().indexOf("$MENU$") == 0;
            // urlFile.Core.AkUrl.Current().openUrl(a.Value, _isMenu);
            urlFile.Core.AkUrl.Current().openUrlByNoMenu(val);

        }
        private senderLink(h: IMenuLink, i: number) {
            //alert(i);
            if (h.Val.charAt(0) == '$') {
                return <li className="nav-item Hu-pointer "  data-key={i} key={i} ><a  data-href={h.Val}   className={(h.IsActive ? "nav-link active" : "nav-link") + (h.IsDev ?" Hs-dev":" ") } onClick={() => { this.link_Fun(h.Val); return false; } }  > {h.Text}</a></li>;
            }
            else {
                return <li className="nav-item Hu-pointer " data-key={i} key={i}><a   href={h.Val} className={(h.IsActive ? "nav-link active" : "nav-link") + + (h.IsDev ? " Hs-dev" : " ") } > {h.Text}</a></li>;
            }
        }

        public listenHeadWidth(fun: Function)
        {
            this.listenAppEvent("/06app/web/Header/HeaderLinkActive.listenHeadWidth", "sys", () => {
                fun();
            });
        }

        public constructor(config?: IHeaderVmConfig) {
            super();

            if (window["SysAtawObj"]) {
                if (window["SysAtawObj"]["NickName"]) {
                    this.NickName = window["SysAtawObj"]["NickName"];
                }

            }
            else {
                this.NickName = "{未知用户}";
            }
            if (config && config.LogoUrl) {
                this.LogoUrl = config.LogoUrl;
            }
            else {
                this.LogoUrl = "../lib/akCss/images/logo.png";
            }

           

            this.NodeClient = new nodeClientFile.SocketIo.NodeClient();
            this.NodeClientDom = new NewCircleFile.NewCircleDom.NewCircleDomVm();
            if (config.HomeUrl) {
                this.HomeUrl = config.HomeUrl;
            }
            
            if (config.IsTimeHide)
            {
                this.IsTimeHide = config.IsTimeHide;
            }
            this.NodeClient.getEmit().addListener("notify", () => {
                this.NodeClientDom.add();
            });

            this.listenAppEvent("/06app/web/Header/HeaderLinkActive", "", (val: string, isFeed: boolean) => {
                this.setUrlActive(val);
            });

            if (config) {
                this.IsOldDefault = config.IsOldDefault;
                this.HasNewOldPage = config.HasNoNewOldPage;
                if (config.HomeUrl) {
                    this.HomeUrl = config.HomeUrl;
                }
                if (config.MenuLinks) {
                    this.MenuLinks = config.MenuLinks;
                    this.XScrollObj = new XScollVm({
                        FunSetInnerContent: () => {
                            return [
                                <ul className="nav navbar-nav text-nowrap" key={0}>
                                    {

                                        this.MenuLinks.map((h, i) => {
                                            // if (i < this.Size) {
                                            return this.senderLink(h,i);
                                            //}
                                        })
                                    }



                                </ul>];
                        }
                    });
                }

            }
            //urlFile.Core.AkUrl.Current().bindHashChange((a, afterFun) => {
            //    this.setUrlActive(a);
            //});

        }

        private setUrlActive(url: string) {
            var _m = urlFile.Core.AkUrl.Current().getPageUrlModel(url);
            // var _strs = "$"+_m.PanelName+"$"+_m.ModuleName+ "$";
            var _isChange = false;
            this.MenuLinks.forEach((a) => {
                var _m1 = urlFile.Core.AkUrl.Current().getPageUrlModel(a.Val);
                var _code = urlFile.Core.AkUrl.Current().getUrlCode(_m1);
                var _code1 = urlFile.Core.AkUrl.Current().getUrlCode(_m);

                if (_code == _code1) {
                    a.IsActive = true;
                    _isChange = true;
                    // alert();
                } else {
                    a.IsActive = false;
                }
            });

            this.XScrollObj.forceUpdate("");
            if (_isChange) {
                $(".ACT-INDEX-TAB").removeClass("active");
            }
            else {
                // alert();
                $(".ACT-INDEX-TAB").addClass("active");
            }
        }

    }
    export class HeaderStates extends domCore.DomStates {
    }


    export class HeaderProps extends domCore.DomProps<HeaderVm>{
    }



}
