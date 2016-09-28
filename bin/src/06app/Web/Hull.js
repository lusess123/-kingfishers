var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "./../../01core/Util", "./../../01core/Ioc", "./../../01core/Url", "./../../04page/BaseWebPage", "./../../05tool/Tree", "./../Sns/Feed", "./Header", "./../Sns/Test", "./../../05tool/TestForm", "react", "./../../05tool/BreadDom/BreadDom", "./../../01core/WebApp", "./../../05tool/Modal/ModalDom", "./DevMenu"], function (require, exports, domFile, utilFile, iocFile, urlFile, baseWedPage, treeFile, feedFile, headerFile, testFile, testFormFile, React, BreadDomFile, WebAppFile, ModalDomFile, devMenuFile) {
    "use strict";
    var domCore = domFile.Core;
    testFormFile;
    WebAppFile;
    ModalDomFile;
    var Web;
    (function (Web) {
        feedFile;
        testFile;
        var HullAction = (function (_super) {
            __extends(HullAction, _super);
            function HullAction() {
                _super.apply(this, arguments);
            }
            return HullAction;
        }(domCore.DomAction));
        Web.HullAction = HullAction;
        var HullReact = (function (_super) {
            __extends(HullReact, _super);
            function HullReact() {
                _super.apply(this, arguments);
                this.state = new HullStates();
            }
            //点击事件
            HullReact.prototype.fun_NailClick = function () {
                var _this = this;
                this.props.Vm.IsAutoHide = !this.props.Vm.IsAutoHide;
                if (this.props.Vm.IsAutoHide) {
                    //自动隐藏了
                    this.props.Vm.IsHide = true;
                }
                this.forceUpdate(function () {
                    // eventFile.App.GetAppEvent().emit("Hull_menu_toggle", this.props.Vm.IsHide);
                    // this.props.Vm.em
                    _this.props.Vm.emitMenuToggle();
                });
            };
            HullReact.prototype.fun_NailClick_min = function () {
                var _this = this;
                // this.props.Vm.IsAutoHide = !this.props.Vm.IsAutoHide;
                this.props.Vm.IsHide = !this.props.Vm.IsHide;
                this.props.Vm.IsAutoHide = this.props.Vm.IsHide;
                this.forceUpdate(function () {
                    // eventFile.App.GetAppEvent().emit("Hull_menu_toggle", this.props.Vm.IsHide);
                    // this.props.Vm.em
                    _this.props.Vm.emitMenuToggle();
                });
            };
            HullReact.prototype.fun_closePanel = function () {
                this.props.Vm.PanelPageObj = null;
                this.forceUpdate();
            };
            HullReact.prototype.fun_menuLinkClick = function () {
                this.forceUpdate();
            };
            HullReact.prototype.fun_orgLinkClick = function () {
                this.forceUpdate();
            };
            HullReact.prototype.fun_NavClick = function () {
                this.props.Vm.IsNavHide = !this.props.Vm.IsNavHide;
                this.forceUpdate();
            };
            HullReact.prototype._createPanel = function () {
                var _this = this;
                var _reactPanel = (React.createElement("div", {className: "Hm-pull Ha-right-left Hg-default-height  ACT-PANEL-CONTENT "}, React.createElement("div", {className: "Hu-naiv  Hu-close-btn Hg-fixed"}, React.createElement("h3", {className: "Hu-modals-title pull-left"}, this.props.Vm.PanelPageObj.Title), React.createElement("a", {className: " Hu-pointer ", onClick: function () { _this.fun_closePanel(); }}, React.createElement("i", {className: "fa fa-close fa-2x pull-right"}))), this._tDom(this.props.Vm.PanelPageObj)));
                return _reactPanel;
            };
            HullReact.prototype.fun_closeWin = function () {
                this.props.Vm.closeWinEmit();
                this.props.Vm.WinPageObj = null;
                this.forceUpdate();
            };
            HullReact.prototype._createWin = function () {
                var _this = this;
                var modalPanel = React.createElement("div", {className: "Hm-modals-bg Hg-width Hg-max-width Hg-overflow-auto YSm-modals-bg"}, React.createElement("div", {className: "Hm-modals Hg-relative Hg-default-top Hm-modals-shape Hs-fff YSs-modals"}, React.createElement("a", {className: "Hu-close acsClose Hu-pointer", onClick: function () { _this.fun_closeWin(); }}, React.createElement("i", {className: "fa fa-close"})), this.props.Vm.WinPageObj.intoDom()));
                return modalPanel;
            };
            HullReact.prototype._creatModal = function () {
                var _this = this;
                if (this.props.Vm.WinPageObj) {
                    // alert();
                    this.props.Vm.ModalDomObj = new ModalDomFile.ModalDom.ModalDomVm({
                        DomObj: this.props.Vm.WinPageObj,
                        Title: this.props.Vm.WinPageObj.Title,
                        IsModalShow: true,
                        ModalCloseFun: function (modal, fun) {
                            _this.props.Vm.WinPageObj = null;
                        }
                    });
                    return this.props.Vm.ModalDomObj.intoDom();
                }
                return null;
            };
            HullReact.prototype.fSendHeader = function () {
                var _this = this;
                return [
                    React.createElement("div", {className: "Hm-smooth-nav Hu-pointer Hg-margin-t6 " + (this.props.Vm.HasHeaderBtn ? " " : " hide"), onClick: function () { _this.fun_NavClick(); }}, "头部导航"),
                    (this.props.Vm.IsHide && this.props.Vm.MenuObj ? (React.createElement("div", {className: "Hm-smooth Hu-pointer"}, "菜单导航")) : null),
                    React.createElement("div", {className: (this.props.Vm.IsNavHide ? "hide" : " ")}, this._tDom(this.props.Vm.HeaderObj, { nullNode: React.createElement("span", null, React.createElement("i", {className: "fa  fa-spinner fa-spin "}), "等待载入模块") }))
                ];
            };
            HullReact.prototype.fSendLeft = function () {
                var _this = this;
                return React.createElement("div", {className: (this.props.Vm.IsHide ? "hide " : "") + "col-lg-2 col-md-2 col-sm-6 col-xs-6 Hm-left-menu Hu-box-shadow acsMenupanel ACT-MENU-LEFT " + (this.props.Vm.IsAutoHide ? "acsMenupanelAutoHide" : "") + (this.props.Vm.IsMenuLinkHide ? " show change " : "") + (this.props.Vm.IsNavHide ? " Hg-height" : "")}, React.createElement("a", {className: "Hu-naiv Hu-pointer hidden-md-down", onClick: function () { _this.fun_NailClick(); }}, " ", React.createElement("i", {className: " fa  fa-thumb-tack  pull-right Hu-default-icon " + (this.props.Vm.IsAutoHide ? "Ha-transform" : "")})), React.createElement("a", {className: "Hu-naiv Hu-pointer hidden-lg-up", onClick: function () { _this.fun_NailClick_min(); }}, " ", React.createElement("i", {className: " fa  fa-thumb-tack  pull-right Hu-default-icon " + (this.props.Vm.IsAutoHide ? "Ha-transform" : "")})), this._tDom(this.props.Vm.MenuObj, { nullNode: React.createElement("span", null, React.createElement("i", {className: "fa  fa-spinner fa-spin "}), "等待载入菜单") }));
            };
            HullReact.prototype.pSender = function () {
                return React.createElement("div", null, this._creatModal(), this.props.Vm.IsFrontApp ? null : this.fSendHeader(), React.createElement("div", {className: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 Hg-content" + (this.props.Vm.IsNavHide || this.props.Vm.IsFrontApp ? " Hg-top" : " ")}, this.props.Vm.IsFrontApp ? null : this.fSendLeft(), this.props.Vm.PanelPageObj ? this._createPanel() : null, React.createElement("div", {className: "Hm-content col-md-12 col-sm-12 col-xs-12 " + (this.props.Vm.IsHide || this.props.Vm.IsFrontApp ? " col-lg-12 Hg-default-left  " : "col-lg-10 Hg-default-pl") + (this.props.Vm.IsAutoHide ? " col-lg-12 Hg-default-left" : " ")}, this.props.Vm.IsFrontApp ? null : this._tDom(this.props.Vm.BreadDomObj, { nullNode: React.createElement("span", null, React.createElement("i", {className: "fa  fa-spinner fa-spin "}), "等待载入导航") }), this.props.Vm.MainPageObj ? (React.createElement("div", {className: "p-x"}, this.props.Vm.MainPageObj.intoDom())) : (React.createElement("div", {className: "Hg-relative Hg-default-top text-center "}, React.createElement("h3", null, React.createElement("i", {className: "fa fa-refresh fa-spin "}), this.props.Vm.ShowTip))))));
            };
            HullReact.prototype.pComponentDidMount = function () {
                var _this = this;
                _super.prototype.pComponentDidMount.call(this);
                //---------------侧边栏事件-----------
                $("body").addClass("acsoverflownone").click(function (a) {
                    var _$tar = $(a.target);
                    // alert(1);
                    if (_$tar.hasClass("Hm-smooth") || _$tar.hasClass("ACT-MENU-LEFT") || _$tar.parents(".ACT-MENU-LEFT").length > 0) {
                        //什么都不做
                        //  alert("什么也不做");
                        if (_$tar.hasClass("Hm-smooth")) {
                            if (_this.props.Vm.IsHide) {
                                _this.props.Vm.IsHide = false;
                                _this.forceUpdate();
                            }
                        }
                    }
                    else {
                        if (_this.props.Vm.IsHide == false && _this.props.Vm.IsAutoHide) {
                            _this.props.Vm.IsHide = true;
                            _this.forceUpdate();
                        }
                    }
                    if (_$tar.is(".Hm-modals-bg") || _$tar.parents(".Hm-modals-bg").length > 0 || _$tar.is(".ACT-PANEL-CONTENT") || _$tar.parents(".ACT-PANEL-CONTENT").length > 0) {
                        //弹出层内部
                        $("body").addClass("Hf-overflow ");
                    }
                    else {
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
                urlFile.Core.AkUrl.Current().bindHashChange(function (a, afterFun, isUrl) {
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
                                }
                                else {
                                    _menuUrl = _urls[0];
                                    _url = _urls[1];
                                }
                            }
                        }
                    }
                    if (_url != "") {
                        // alert("调用bindPage");
                        _this.props.Vm.bindPage(_url, afterFun);
                    }
                    else {
                        if (_menuUrl == "") {
                            urlFile.Core.AkUrl.Current().openUrl(_this.props.Vm.HomeUrl);
                        }
                    }
                    if (_menuUrl != "") {
                        _this.props.Vm.menuBindHashChange(_menuUrl, afterFun, isUrl);
                    }
                });
                // urlFile.Core.AkUrl.Current().refresh();
            };
            return HullReact;
        }(domCore.DomReact));
        Web.HullReact = HullReact;
        var _setTree = function (tree) {
            if (tree.ExtData && tree.ExtData.RightValue) {
                if (tree.ExtData.RightValue == "#") {
                    tree.CODE_VALUE = "$menu$" + tree.CODE_VALUE;
                }
                else {
                    tree.CODE_VALUE = tree.ExtData.RightValue;
                }
            }
            if (tree.Children && tree.Children.length > 0) {
                tree.Children.forEach(function (node) {
                    _setTree(node);
                });
            }
        };
        var HullVm = (function (_super) {
            __extends(HullVm, _super);
            function HullVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = HullReact;
                //public TableObj: tableFile.Web.TableDemoVm;
                this.IsAutoHide = false;
                this.ShowTip = "等待载入页面";
                this.IsNavHide = false;
                //是否菜单隐藏了
                this.IsHide = true;
                this.IsTimeHide = false;
                // public IsPanel: boolean = true;
                this.HomeUrl = "$FEED$";
                this.HasSDKMenu = false;
                this.IsV1 = true;
                this.AppList = [];
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
                this.listenAppEvent("Hull-Menu-Toggle-Page-NoSender", "sys", function (isHide) {
                    _this.IsHide = isHide;
                });
            }
            HullVm.prototype.closeWinEmit = function () {
                this.emitAppEvent("win-close-btn", this.WinPageObj.UniId);
            };
            HullVm.prototype.floadMenuObj = function (config) {
                var _this = this;
                urlFile.Core.AkPost("/right/Menu/GetAllTree?regname=MenuTreeCodeTable", {}, function (a) {
                    var _treeObj = a;
                    _treeObj.CODE_VALUE = "0";
                    _treeObj.CODE_TEXT = "主页";
                    if (_this.HasSDKMenu) {
                        var _obj = {
                            CODE_VALUE: "0", CODE_TEXT: "主页",
                            Children: devMenuFile.MenuObj
                        };
                        _treeObj.Children = _treeObj.Children.concat(_obj.Children);
                    }
                    _setTree(_treeObj);
                    var _headerConfig = {
                        MenuLinks: _treeObj.Children.map(function (m) {
                            return { Text: m.CODE_TEXT, Val: m.CODE_VALUE, IsDev: m["IsDev"] };
                        }),
                        HomeUrl: _this.HomeUrl,
                        LogoUrl: _this.LogoUrl,
                        IsOldDefault: _this.IsV1,
                        IsTimeHide: _this.IsTimeHide,
                        HasNoNewOldPage: _this.HasNoNewOldPage
                    };
                    _this.HeaderObj = new headerFile.Header.HeaderVm(_headerConfig);
                    //eventFile.App.initAppEvent(this.getEmit());
                    if (!_this.HasNoFeed) {
                        _this.initSocketIo();
                    }
                    if (!config.HasNoLeftMenu) {
                        _this.MenuObj = new treeFile.ui.TreeVm({
                            IsOnLeafCanSelect: true,
                            StyleName: config.StyleName ? config.StyleName : "H",
                            NodeTplFun: function (a) {
                                if (a.ExtendObj && a.ExtendObj.Icon) {
                                    if (a.ExtendObj.Icon.length > 5) {
                                        var _icon = a.ExtendObj.Icon.substring(5);
                                        // var _icon = "core";
                                        return [React.createElement("span", null, React.createElement("i", {className: "fa fa-" + _icon}), a.Text)];
                                    }
                                }
                                if (a.IsRoot) {
                                    return [React.createElement("span", null, React.createElement("i", {className: "fa fa-h-right"}), a.Text)];
                                }
                                else {
                                    return [React.createElement("span", null, React.createElement("i", {className: "fa fa-file-text-o"}), a.Text)];
                                }
                            }
                        });
                        _this.BreadDomObj = new BreadDomFile.BreadDom.BreadDomVm({ TreeModel: _treeObj, HomeUrl: _this.HomeUrl });
                        _this.MenuObj.initTreeVm(_treeObj);
                        _this.MenuObj.onReactNodeClick(function (a) {
                            urlFile.Core.AkUrl.Current().openUrlByNoMenu(a.Value);
                            return true;
                        });
                        if (_this.AppList && _this.AppList.length > 0) {
                            require(_this.AppList.map(function (appsrc) { return "./../../" + appsrc; }), function () {
                                urlFile.Core.AkUrl.Current().refresh();
                            }, function (errorMsg) {
                                // console.log(a);
                                _this.ShowTip = "前端模块载入有误 " + $.toJSON(_this.AppList) + errorMsg.message;
                                _this.forceUpdate("");
                            });
                        }
                        else {
                            urlFile.Core.AkUrl.Current().refresh();
                        }
                    }
                    else {
                        _this.IsHide = true;
                        _this.forceUpdate("");
                    }
                });
            };
            HullVm.prototype.loadPage = function (config) {
                // require(this.)
                this.floadMenuObj(config);
            };
            HullVm.prototype.menuBindHashChange = function (url, afterFun, a) {
                var _this = this;
                if (!a) {
                    if (url.toUpperCase() == this.HomeUrl.toUpperCase()) {
                        this.BreadDomObj.setBreadShow("0");
                        this.MenuObj.resetRootNode();
                        this.emitAppEvent("/06app/web/Header/HeaderLinkActive", "", url.replace("#", ""));
                    }
                    else {
                        var _isRes = false;
                        var _m = urlFile.Core.AkUrl.Current().getPageUrlModel(url);
                        var _code1 = "";
                        if (_m) {
                            _code1 = urlFile.Core.AkUrl.Current().getUrlCode(_m);
                        }
                        else {
                            _code1 = url;
                        }
                        this.BreadDomObj.setBreadShow(url.replace("#", ""));
                        this.MenuObj.ExpandNode(function (node) {
                            var _isres = false;
                            var _val = node.Value.toUpperCase();
                            if (node.Value && _val == url.replace("#", "").toUpperCase()) {
                                _isres = true;
                                if (_val.length >= 6 && _val.indexOf("$MENU$") == 0) {
                                    if (node.Children && node.Children.length > 0) {
                                        urlFile.Core.AkUrl.Current().openUrlByNoMenu(node.Children[0].Value);
                                    }
                                }
                            }
                            else {
                                if (!node["code"]) {
                                    var _x = urlFile.Core.AkUrl.Current().getPageUrlModel(node.Value);
                                    node["code"] = urlFile.Core.AkUrl.Current().getUrlCode(_x);
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
                                }
                                else {
                                    _isres = false;
                                }
                            }
                            if (_isres) {
                                var _root = node.findRoot(node);
                                if (_root) {
                                    //alert(_root.Value);
                                    // var _x = urlFile.Core.AkUrl.Current().getPageUrlModel(_root.Value);
                                    //  alert(_x);
                                    _this.emitAppEvent("/06app/web/Header/HeaderLinkActive", "", _root.Value);
                                }
                                _isRes = true;
                            }
                            else {
                            }
                            return _isres;
                        }, true);
                        if (!_isRes) {
                            this.emitAppEvent("/06app/web/Header/HeaderLinkActive", "", url.replace("#", ""));
                        }
                    }
                    this.BreadDomObj.forceUpdate("");
                }
            };
            HullVm.prototype.emitMenuToggle = function () {
                window["LeftMenuStatus"] = this.IsAutoHide;
                this.emitAppEvent("pageButtom", "page", this.IsHide);
            };
            HullVm.prototype.initSocketIo = function () {
                if ($.AKjs && $.AKjs.NodeUrl) {
                    this.HeaderObj.NodeClient.init($.AKjs.NodeUrl);
                }
            };
            HullVm.prototype.showPage = function (_name, panelName, param, p1, p2, p3, afterFun) {
                var _this = this;
                iocFile.Core.Ioc.Current().FetchAsyInstance(_name, baseWedPage.Web.BaseWebPageVm, function (a) {
                    _this.fpageShow(a, _name, panelName, param, p1, p2, p3, afterFun);
                }, function (a) {
                    switch (panelName) {
                        case "win":
                            if (_this.WinPageObj) {
                                _this.WinPageObj.dispose();
                            }
                            _this.WinPageObj = null;
                            break;
                        case "panel":
                            if (_this.PanelPageObj) {
                                _this.PanelPageObj.dispose();
                            }
                            _this.PanelPageObj = null;
                            break;
                        default:
                            if (_this.MainPageObj) {
                                _this.MainPageObj.dispose();
                            }
                            _this.MainPageObj = null;
                            _this.ShowTip = "路由名称为 " + _name + " 的页面,脚本文件" + a + "载入失败....";
                            break;
                    }
                    try {
                        _this.forceUpdate("", function () {
                            //  this.
                            utilFile.Core.Util.ToggleLoading(false);
                            if (afterFun) {
                                afterFun();
                            }
                        });
                    }
                    catch (ex) {
                        if (_this.WinPageObj) {
                            _this.WinPageObj.dispose();
                        }
                        if (_this.PanelPageObj) {
                            _this.PanelPageObj.dispose();
                        }
                        if (_this.MainPageObj) {
                            _this.MainPageObj.dispose();
                        }
                        _this.ShowTip = ex;
                        _this.forceUpdate("", function () {
                            //  this.
                            utilFile.Core.Util.ToggleLoading(false);
                        });
                    }
                });
            };
            HullVm.prototype.fpageShow = function (_page, _name, panelName, param, p1, p2, p3, afterFun) {
                var _this = this;
                if (_page) {
                    //this.state.IsPanel ? this.state.NoRoute1 = false : this.state.NoRoute = false;
                    _page.Reset(p1, p2, p3);
                    _page.IsChange = true;
                    _page.ModuleName = _name;
                    var isPanel = false;
                    // alert("页面调用");
                    _page.sysPage_load(function (a) {
                        _page.PanelName = panelName;
                        switch (panelName) {
                            case "win":
                                if (_this.PanelPageObj)
                                    _this.PanelPageObj.IsChange = false;
                                if (_this.MainPageObj)
                                    _this.MainPageObj.IsChange = false;
                                _this.WinPageObj = _page;
                                _this.ModalDomObj.Title = _page.Title;
                                break;
                            case "panel":
                                if (_this.WinPageObj) {
                                    _this.WinPageObj.dispose();
                                    _this.WinPageObj = null;
                                    _this.ModalDomObj.Title = null;
                                }
                                if (_this.MainPageObj) {
                                    _this.MainPageObj.IsChange = false;
                                }
                                _this.PanelPageObj = _page;
                                break;
                            default:
                                if (_this.WinPageObj) {
                                    _this.WinPageObj.dispose();
                                    _this.WinPageObj = null;
                                    _this.ModalDomObj.Title = null;
                                }
                                if (_this.PanelPageObj && param == "") {
                                    _this.PanelPageObj.dispose();
                                    _this.PanelPageObj = null;
                                }
                                _this.MainPageObj = _page;
                                break;
                        }
                        urlFile.Core.AkUrl.Current().bindSendPage(panelName, function (p, obj) {
                            //alert("hull : " + obj);
                            _page.getEmit().emit("sendPage", p, obj);
                        });
                        urlFile.Core.AkUrl.Current().bindClosePage(panelName, function () {
                            //alert("hull : " + obj);
                            switch (panelName) {
                                case "win":
                                    _this.WinPageObj.dispose();
                                    _this.WinPageObj = null;
                                    break;
                                case "panel":
                                    _this.PanelPageObj.dispose();
                                    _this.PanelPageObj = null;
                                    break;
                                default:
                                    break;
                            }
                            _this.forceUpdate("", function () {
                                utilFile.Core.Util.ToggleLoading(false);
                            });
                        });
                        _this.forceUpdate("", function () {
                            if (a)
                                a();
                            utilFile.Core.Util.ToggleLoading(false);
                            if (_page.Title) {
                                document.title = _page.Title;
                            }
                            if (afterFun) {
                                afterFun();
                            }
                            _page.EndTime = new Date();
                            console.info("新页面-" + _page.ModuleName + "渲染时间 :  " + _this.logTime(_page.EndTime, _page.BeginTime));
                            //  alert();
                            _this.emitAppEvent("/06app/web/Header/HeaderLinkActive.listenHeadWidth", "sys");
                        });
                        //alert();
                    });
                }
                else {
                    var _isDirect = true;
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
                        this.forceUpdate("", function () {
                            if (_page) {
                                _page.EndTime = new Date();
                                console.info("新页面-" + _page.ModuleName + "渲染时间 :  " + _this.logTime(_page.EndTime, _page.BeginTime));
                                _this.emitAppEvent("/06app/web/Header/HeaderLinkActive.listenHeadWidth", "sys");
                            }
                            utilFile.Core.Util.ToggleLoading(false);
                        });
                    }
                }
            };
            HullVm.prototype.logTime = function (end, begin) {
                var _begin = begin;
                var _end = end;
                var _t = (_end - _begin);
                return _t;
            };
            HullVm.prototype.bindPage = function (a, afterFun) {
                this.ShowTip = "正在载入数据";
                var _m = urlFile.Core.AkUrl.Current().getPageUrlModel(a);
                if (_m) {
                    this.showPage(_m.ModuleName, _m.PanelName, "", _m.Param1, _m.Param2, _m.Param3, afterFun);
                }
                else {
                    this.ShowTip = a + " 路由格式错误  " + a;
                    this.forceUpdate("", function () {
                        utilFile.Core.Util.ToggleLoading(false);
                        if (afterFun) {
                            afterFun();
                        }
                    });
                }
            };
            return HullVm;
        }(domCore.DomVm));
        Web.HullVm = HullVm;
        var HullStates = (function (_super) {
            __extends(HullStates, _super);
            function HullStates() {
                _super.apply(this, arguments);
            }
            return HullStates;
        }(domCore.DomStates));
        Web.HullStates = HullStates;
        var HullProps = (function (_super) {
            __extends(HullProps, _super);
            function HullProps() {
                _super.apply(this, arguments);
            }
            return HullProps;
        }(domCore.DomProps));
        Web.HullProps = HullProps;
    })(Web = exports.Web || (exports.Web = {}));
});
