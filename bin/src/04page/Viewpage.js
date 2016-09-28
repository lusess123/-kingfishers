/// <reference path="../../typings/0type/data.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./BaseWebPage", "./../01core/Ioc", "./../03form/Base/BasePage", "./../01core/Url", "./ListPage", "./DetailPage", "./InsertPage", "./UpdatePage", "./../03form/Grid/GridForm", "./../03form/Norml/NormalForm", "react", "react-dom", "./Hook", "./../06app/Sns/TestHook"], function (require, exports, basewedPage, iocFile, basepage, urlFile, ListPageFile, DetailPageFile, InsertPageFile, UpdatePageFile, GridFormFile, NormalFormFile, React, ReactDOM, HookFile, TestHookFile) {
    "use strict";
    ListPageFile;
    DetailPageFile;
    InsertPageFile;
    UpdatePageFile;
    GridFormFile;
    NormalFormFile;
    TestHookFile;
    var Page;
    (function (Page) {
        var WebViewPageAction = (function (_super) {
            __extends(WebViewPageAction, _super);
            function WebViewPageAction() {
                _super.apply(this, arguments);
            }
            return WebViewPageAction;
        }(basewedPage.Web.BaseWebPageAction));
        Page.WebViewPageAction = WebViewPageAction;
        var BaseWebViewPageReact = (function (_super) {
            __extends(BaseWebViewPageReact, _super);
            function BaseWebViewPageReact() {
                _super.apply(this, arguments);
                this.state = new Page.WebViewPageStates();
                // public state : new 
                this.IsNoFirst = false;
            }
            BaseWebViewPageReact.prototype.pInstall = function () {
                //   if (this.props.Vm.getRegName() == "pick") debugger;
                // alert("安装");
                _super.prototype.pInstall.call(this);
                this.initPage();
            };
            ;
            BaseWebViewPageReact.prototype.pUnInstall = function (vm) {
                _super.prototype.pUnInstall.call(this, vm);
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
                    }
                }
            };
            BaseWebViewPageReact.prototype.pSender = function () {
                //alert("webview sender");
                if (!this.props.Vm.IsV1) {
                    return !this.props.Vm.PageVm ? React.DOM.div({}, "正在载入页面.....") : this.props.Vm.PageVm.intoDom();
                }
                else {
                    return React.DOM.div({ className: "clearfix" }, React.DOM.div({ className: "ACT-PAGE-NAVI col-md-3  hide " }), React.DOM.div({ className: "ACT-PAGE-MAIN col-md-12 " }));
                }
            };
            BaseWebViewPageReact.prototype.toLeftNaviShow = function () {
                var _$Maindom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-MAIN");
                _$Maindom.removeClass("col-md-12");
                _$Maindom.addClass("col-md-9");
                var _$Navidom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-NAVI");
                _$Navidom.removeClass("hide");
            };
            BaseWebViewPageReact.prototype.toClearNaviShow = function () {
                var _$Navidom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-NAVI");
                _$Navidom.find(".ACT_TREENAVI").each(function (i, e) {
                    $(e).clear();
                });
                _$Navidom.clear();
                _$Navidom.addClass("hide");
            };
            BaseWebViewPageReact.prototype.initPage = function () {
                var _this = this;
                if (this.props.Vm.IsV1 && this.props.Vm.PageObj) {
                    var _$dom = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-MAIN");
                    if (_$dom.length > 0) {
                        _$dom.show();
                        this.props.Vm.PageObj.NaviContentSelector = $(ReactDOM.findDOMNode(this)).find(".ACT-PAGE-NAVI");
                        this.props.Vm.PageObj.SysFunAfterInit = function (page) {
                            var _$Navidom = $(ReactDOM.findDOMNode(_this)).find(".ACT-PAGE-NAVI");
                            if (_$Navidom.html() == "") {
                            }
                            else {
                                _this.toLeftNaviShow();
                            }
                        };
                        if (this.props.Vm.IsView) {
                            _$dom["AtawViewPage"](this.props.Vm.PageObj);
                        }
                        else {
                            _$dom["Ataw" + this.props.Vm.PageStyle + "Page"](this.props.Vm.PageObj);
                        }
                        if (this.props.Vm.PageObj.Title) {
                            document.title = this.props.Vm.PageObj.Title;
                        }
                    }
                }
            };
            BaseWebViewPageReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                //alert("载入");
                this.initPage();
            };
            return BaseWebViewPageReact;
        }(basewedPage.Web.BaseWebPageReact));
        Page.BaseWebViewPageReact = BaseWebViewPageReact;
        var WebViewPageStates = (function (_super) {
            __extends(WebViewPageStates, _super);
            function WebViewPageStates() {
                _super.apply(this, arguments);
            }
            return WebViewPageStates;
        }(basewedPage.Web.BaseWebPageStates));
        Page.WebViewPageStates = WebViewPageStates;
        var WebViewPageReact = (function (_super) {
            __extends(WebViewPageReact, _super);
            function WebViewPageReact() {
                _super.apply(this, arguments);
            }
            return WebViewPageReact;
        }(BaseWebViewPageReact));
        Page.WebViewPageReact = WebViewPageReact;
        var WebViewPageVm = (function (_super) {
            __extends(WebViewPageVm, _super);
            function WebViewPageVm() {
                var _this = this;
                _super.call(this);
                // public PageView: data.IPageView;
                this.ReactType = WebViewPageReact;
                this.PageStyle = "List";
                this.pRegName = "WebViewPageVm";
                this.IsUpdate = false;
                this.Param = "";
                this.IsView = false;
                this.IsV1 = true;
                //if()
                if (window["IsV1"] != undefined) {
                    this.IsV1 = window["IsV1"];
                }
                this.listenAppEvent("toggleNewOldDefault", "sys", function (a) {
                    // alert(a);
                    window["IsV1"] = _this.IsV1 = a;
                });
            }
            WebViewPageVm.prototype.formartPageState = function (pagestyle, param) {
                var pageState = {};
                pageState.ds = {};
                var _pObj = {};
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
            };
            WebViewPageVm.prototype.createDs = function (paramObj) {
                var ds = {};
                if (paramObj && paramObj.ds) {
                    ds = paramObj.ds;
                }
                // this.Ds = ds;
                var postData = $.extend({}, {
                    xml: this.Xml,
                    ds: $.toJSON(ds),
                    pageStyle: this.PageStyle
                }, paramObj.additionData);
                return postData;
            };
            WebViewPageVm.prototype._createPage = function (_pageView, _pageStyle, callback, hookId) {
                var b = iocFile.Core.Ioc.Current().FetchInstance(_pageStyle, basepage.ui.BasePageVm);
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
            };
            WebViewPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var _pState = this.formartPageState(this.PageStyle, this.Param);
                var _ds = this.createDs(_pState);
                // alert("请求");
                var _url = this.IsView ? "/module/modulepage" : "/module/module";
                urlFile.Core.AkPost(_url, _ds, function (a) {
                    if (!_this.IsV1) {
                        try {
                            // if (this.isMounted()) {
                            //alert("senderPage  " + this.props.Vm.Xml );
                            //require(["src/01core/RQuery"], (aaa) => {
                            var _pageStyle = _this.PageStyle.toUpperCase();
                            if (!_pageStyle || _pageStyle == "") {
                                _pageStyle = "LIST";
                            }
                            var _pageView = a;
                            _this.Title = _pageView.Title;
                            if (_pageView.TsHook) {
                                var _p = iocFile.Core.Ioc.Current().fetchPromise(_pageView.TsHook, HookFile.BasePageHook);
                                _p.done(function (hook) {
                                    if (hook) {
                                        _this._createPage(_pageView, _pageStyle, callback, hook.HookId);
                                    }
                                    else {
                                        alert("找不到名称为 " + _pageView.TsHook + " 的hook插件");
                                    }
                                });
                            }
                            else {
                                _this._createPage(_pageView, _pageStyle, callback);
                            }
                        }
                        catch (ex) {
                            // utilFile.Core.Util.Noty(ex);
                            _this.Error = ex;
                            callback();
                        }
                    }
                    else {
                        // alert("loadpage");
                        _this.PageObj = a;
                        _this.IsChange = true;
                        callback();
                    }
                });
            };
            WebViewPageVm.prototype.Reset = function (p1, p2, p3) {
                _super.prototype.Reset.call(this, p1, p2, p3);
                this.Xml = p1;
                if (p2 && p2 != "") {
                    this.PageStyle = p2;
                }
                else {
                    this.PageStyle = "List";
                }
                if (p3 && p3 != "") {
                    this.Param = p3;
                }
                else {
                    this.Param = "";
                }
            };
            return WebViewPageVm;
        }(basewedPage.Web.BaseWebPageVm));
        Page.WebViewPageVm = WebViewPageVm;
        var WebViewPageProps = (function (_super) {
            __extends(WebViewPageProps, _super);
            function WebViewPageProps() {
                _super.apply(this, arguments);
            }
            return WebViewPageProps;
        }(basewedPage.Web.BaseWebPageProps));
        Page.WebViewPageProps = WebViewPageProps;
        //$(window).hashchange(() => {
        //    var hash = location.hash;
        //     alert(hash);
        //});
        iocFile.Core.Ioc.Current().RegisterType("DEFAULT", basewedPage.Web.BaseWebPageVm, WebViewPageVm);
    })(Page = exports.Page || (exports.Page = {}));
});
