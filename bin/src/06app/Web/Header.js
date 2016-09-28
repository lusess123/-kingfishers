var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "./../../01core/Util", "./../../01core/Url", "./../../05tool/ALink", "./../../right/H/tool/BookMark", "./../../05tool/XScroll", "./../../06app/SocketIo/NodeClient", "./../../06app/SocketIo/NewCircleDom", "react"], function (require, exports, domFile, utilFile, urlFile, alinkFile, BookMarkFile, XScrollFile, nodeClientFile, NewCircleFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var ALink = alinkFile.ui.ALinkReact;
    var XScollVm = XScrollFile.XScroll.XScrollVm;
    var Header;
    (function (Header) {
        var HeaderAction = (function (_super) {
            __extends(HeaderAction, _super);
            function HeaderAction() {
                _super.apply(this, arguments);
            }
            return HeaderAction;
        }(domCore.DomAction));
        Header.HeaderAction = HeaderAction;
        var HeaderReact = (function (_super) {
            __extends(HeaderReact, _super);
            function HeaderReact() {
                _super.apply(this, arguments);
                this.state = new HeaderStates();
                this.fIsFirst = true;
            }
            HeaderReact.prototype.fun_toggleIconClick = function () {
                this.props.Vm.IsToggleIconHide = !this.props.Vm.IsToggleIconHide;
                this.forceUpdate();
            };
            HeaderReact.prototype.fun_refreshClick = function () {
                utilFile.Core.Util.ToggleLoading(true);
                urlFile.Core.AkUrl.Current().refresh();
            };
            HeaderReact.prototype.fun_logoOnload = function () {
                this.fSetWidth();
            };
            HeaderReact.prototype.front_btn = function () {
                var _str = window.location.origin + window.location.pathname + "1" + "?f=vv" + window.location.hash;
                window.open(_str);
            };
            HeaderReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("nav", {className: "navbar navbar-dark bg-inverse navbar-fixed-top ACT-HEADER-BODY  "}, React.createElement("a", {className: "navbar-brand ACT-HEADER-LOGO "}, React.createElement("img", {className: "m-l", src: this.props.Vm.LogoUrl, style: { width: "auto" }, onLoad: function () { _this.fun_logoOnload(); }})), React.createElement("section", {className: "Hm-navbar clearfix"}, React.createElement("ul", {className: "nav navbar-nav pull-left  ACT-HEADER-MENU  "}, React.createElement("li", {className: "nav-item Hg-relative"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(false, { ClassName: "nav-link active ACT-INDEX-TAB" }), href: this.props.Vm.HomeUrl, children: null}, "主页"))), this.props.Vm.XScrollObj.intoDom(), React.createElement("div", {className: "pull-right hidden-lg-up Hu-pointer ACT-HEADER-ICON ", onClick: function () { _this.fun_toggleIconClick(); }}, React.createElement("i", {className: "fa fa-cog"})), React.createElement("ul", {className: "nav navbar-nav pull-right hidden-md-down  ACT-HEADER-SYS  " + (this.props.Vm.IsToggleIconHide ? " change" : "")}, React.createElement("li", {className: "nav-item " + (this.props.Vm.IsTimeHide ? " hide " : " ")}, React.createElement("a", {className: "nav-link Hf-text-overflow", id: "ACT-TIME", title: "时间测试:服务器》网络》总时间", style: { width: "150px" }}, React.createElement("i", {className: "fa fa-clock-o Hu-pointer"}))), this._tDom(this.props.Vm.BookMarkObj), React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link", onClick: function () { _this.fun_refreshClick(); }}, React.createElement("i", {className: "fa fa-refresh Hu-pointer"}), React.createElement("span", null, "刷新"))), React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link Hf-text-overflow", style: { width: "112px" }}, React.createElement("i", {className: "fa fa-question-sign Hu-pointer"}), this.props.Vm.NickName), React.createElement("ul", {className: "bg-inverse"}, React.createElement("li", {className: "nav-item"}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(false, { ClassName: "nav-link" }), href: "$changepwd$", children: null}, React.createElement("i", {className: "fa fa-question-sign Hu-pointer"}), React.createElement("span", null, "修改密码"))), React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link", href: "/rightcloud/auth/logOut"}, React.createElement("i", {className: "fa fa-power-off Hu-pointer"}), React.createElement("span", null, "退出"))), this.props.Vm.HasNewOldPage ? null : React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link", onClick: function () { _this.newOld_fun(); }}, React.createElement("i", {className: "fa fa-rocket Hu-pointer"}), React.createElement("span", null, "新/旧"))), this.props.Vm.HasNewOldPage ? null : React.createElement("li", {className: "nav-item"}, React.createElement("a", {className: "nav-link", onClick: function () { _this.front_btn(); }}, React.createElement("i", {className: "fa fa-globe Hu-pointer"}), React.createElement("span", null, "前台"))))))));
            };
            HeaderReact.prototype.fSetWidth = function () {
                //window.location
                var _n = $(".ACT-HEADER-BODY").width() - $(".ACT-HEADER-MENU").width() - $(".ACT-HEADER-SYS").width() - $(".ACT-HEADER-LOGO").width() - $(".ACT-HEADER-ICON").width() - 50;
                //alert($(".ACT-HEADER-BODY").width() +
                //    " -  " + $(".ACT-HEADER-MENU").width() +
                //    " -  " + $(".ACT-HEADER-SYS").width() +
                //    " - " + $(".ACT-HEADER-LOGO").width() +
                //    " - " + $(".ACT-HEADER-ICON").width() + " -  50  = "  + _n );
                $(".Hf-menu-scroll").width(_n);
            };
            HeaderReact.prototype.pComponentDidMount = function () {
                var _this = this;
                _super.prototype.pComponentDidMount.call(this);
                this.fSetWidth();
                $(window).resize(function () {
                    // alert("resize");
                    // if (!this.fIsFirst) {
                    _this.fSetWidth();
                    //  }
                    _this.fIsFirst = false;
                    // alert(_n);
                });
                this.props.Vm.listenHeadWidth(function () {
                    // alert("listenHeadWidth");
                    _this.fSetWidth();
                });
            };
            HeaderReact.prototype.newOld_fun = function () {
                //-------
                this.props.Vm.toggleNewOldDefault();
            };
            return HeaderReact;
        }(domCore.DomReact));
        Header.HeaderReact = HeaderReact;
        var HeaderVm = (function (_super) {
            __extends(HeaderVm, _super);
            function HeaderVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = HeaderReact;
                this.MenuLinks = [];
                this.Size = 10;
                this.BookMarkObj = new BookMarkFile.BookMark.BookMarkVm();
                this.HomeUrl = "$FEED$";
                this.IsTimeHide = false; //时间控件是否显示
                this.IsOldDefault = true;
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
                if (config.IsTimeHide) {
                    this.IsTimeHide = config.IsTimeHide;
                }
                this.NodeClient.getEmit().addListener("notify", function () {
                    _this.NodeClientDom.add();
                });
                this.listenAppEvent("/06app/web/Header/HeaderLinkActive", "", function (val, isFeed) {
                    _this.setUrlActive(val);
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
                            FunSetInnerContent: function () {
                                return [
                                    React.createElement("ul", {className: "nav navbar-nav text-nowrap", key: 0}, _this.MenuLinks.map(function (h, i) {
                                        // if (i < this.Size) {
                                        return _this.senderLink(h, i);
                                        //}
                                    }))];
                            }
                        });
                    }
                }
                //urlFile.Core.AkUrl.Current().bindHashChange((a, afterFun) => {
                //    this.setUrlActive(a);
                //});
            }
            HeaderVm.prototype.toggleNewOldDefault = function () {
                // window["IsOldDefault"] = this.IsOldDefault;
                this.IsOldDefault = !this.IsOldDefault;
                this.emitAppEvent("toggleNewOldDefault", "sys", this.IsOldDefault);
            };
            HeaderVm.prototype.link_Fun = function (val) {
                // var _isMenu = val.length >= 6 && val.toUpperCase().indexOf("$MENU$") == 0;
                // urlFile.Core.AkUrl.Current().openUrl(a.Value, _isMenu);
                urlFile.Core.AkUrl.Current().openUrlByNoMenu(val);
            };
            HeaderVm.prototype.senderLink = function (h, i) {
                var _this = this;
                //alert(i);
                if (h.Val.charAt(0) == '$') {
                    return React.createElement("li", {className: "nav-item Hu-pointer ", "data-key": i, key: i}, React.createElement("a", {"data-href": h.Val, className: (h.IsActive ? "nav-link active" : "nav-link") + (h.IsDev ? " Hs-dev" : " "), onClick: function () { _this.link_Fun(h.Val); return false; }}, " ", h.Text));
                }
                else {
                    return React.createElement("li", {className: "nav-item Hu-pointer ", "data-key": i, key: i}, React.createElement("a", {href: h.Val, className: (h.IsActive ? "nav-link active" : "nav-link") + +(h.IsDev ? " Hs-dev" : " ")}, " ", h.Text));
                }
            };
            HeaderVm.prototype.listenHeadWidth = function (fun) {
                this.listenAppEvent("/06app/web/Header/HeaderLinkActive.listenHeadWidth", "sys", function () {
                    fun();
                });
            };
            HeaderVm.prototype.setUrlActive = function (url) {
                var _m = urlFile.Core.AkUrl.Current().getPageUrlModel(url);
                // var _strs = "$"+_m.PanelName+"$"+_m.ModuleName+ "$";
                var _isChange = false;
                this.MenuLinks.forEach(function (a) {
                    var _m1 = urlFile.Core.AkUrl.Current().getPageUrlModel(a.Val);
                    var _code = urlFile.Core.AkUrl.Current().getUrlCode(_m1);
                    var _code1 = urlFile.Core.AkUrl.Current().getUrlCode(_m);
                    if (_code == _code1) {
                        a.IsActive = true;
                        _isChange = true;
                    }
                    else {
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
            };
            return HeaderVm;
        }(domCore.DomVm));
        Header.HeaderVm = HeaderVm;
        var HeaderStates = (function (_super) {
            __extends(HeaderStates, _super);
            function HeaderStates() {
                _super.apply(this, arguments);
            }
            return HeaderStates;
        }(domCore.DomStates));
        Header.HeaderStates = HeaderStates;
        var HeaderProps = (function (_super) {
            __extends(HeaderProps, _super);
            function HeaderProps() {
                _super.apply(this, arguments);
            }
            return HeaderProps;
        }(domCore.DomProps));
        Header.HeaderProps = HeaderProps;
    })(Header = exports.Header || (exports.Header = {}));
});
