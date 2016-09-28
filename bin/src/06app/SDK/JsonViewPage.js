var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../01core/Url", "./../../04page/BaseWebPage", "react", "./../../05tool/BreadDom/BreadDom", "./../../05tool/KityMinder/KityMinderDom", "./../../05tool/MonacoEditor/MonacoEditor", "./../../05tool/TabDom", "./../../05tool/Modal/ModalDom", "./../../05tool/Picker/PickerContainer", "./../../01core/Event", "./../../05tool/Picker/PickDom", "./../../05tool/Selector/AutoSuggestText", "./../../05tool/Picker/PickListBaseDom", "./../../05tool/Selector/SelectorDom"], function (require, exports, iocFile, urlFile, basewedPageFile, React, BreadDomFile, KityMinderFile, MonacoEditorFile, TabDomFile, MoadlDomFile, pickContainerFile, eventFile, pickDomFile, suggestFile, PickListBaseDomFile, SelectorDomFile) {
    "use strict";
    var JsonViewPage;
    (function (JsonViewPage) {
        var JsonViewPageAction = (function (_super) {
            __extends(JsonViewPageAction, _super);
            function JsonViewPageAction() {
                _super.apply(this, arguments);
            }
            return JsonViewPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        JsonViewPage.JsonViewPageAction = JsonViewPageAction;
        var JsonViewPageReact = (function (_super) {
            __extends(JsonViewPageReact, _super);
            function JsonViewPageReact() {
                _super.apply(this, arguments);
                this.state = new JsonViewPageStates();
            }
            JsonViewPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "JsonViewContent Hg-default-top Hg-relative "}, this._tDom(this.props.Vm.TabDomFileObj));
            };
            JsonViewPageReact.prototype.InitJsonView = function () {
                //urlFile.Core.AkPost("/right/Menu/GetAllTree?regname=MenuTreeCodeTable", {}, (a: any) => {
                //    var _data: KityMinderFile.KityMinderDom.ITreeCodeTableModel = a;
                //    this.props.Vm.initKityMinder(_data);
                //});
            };
            JsonViewPageReact.prototype.pInstall = function () {
                this.InitJsonView();
                _super.prototype.pInstall.call(this);
            };
            JsonViewPageReact.prototype.pUnInstall = function (vm) {
                _super.prototype.pUnInstall.call(this, vm);
            };
            return JsonViewPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        JsonViewPage.JsonViewPageReact = JsonViewPageReact;
        var JsonViewPageVm = (function (_super) {
            __extends(JsonViewPageVm, _super);
            function JsonViewPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = JsonViewPageReact;
                this.listenAppEvent("", "Hull-Menu-Toggle", function (a) {
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
                                { CODE_VALUE: "$userinfo$", CODE_TEXT: "用户信息" }
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
                var _uid = "jsonviewPage" + eventFile.App.getUniId();
                this.TabDomFileObj = new TabDomFile.TabDom.TabDomVm({
                    Items: [
                        {
                            DomObj: this.KityMinderDomObj,
                            Title: "树形",
                            ReloadFun: function (item) {
                                if (!item.IsNoFirst) {
                                    urlFile.Core.AkPost("/right/Menu/GetAllTree?regname=MenuTreeCodeTable", {}, function (a) {
                                        var _data = a;
                                        _this.initKityMinder(_data, item);
                                    });
                                }
                            }
                        },
                        {
                            DomObj: null,
                            Title: "sql代码编辑器",
                            IsActive: false,
                            ReloadFun: function (item) {
                                if (!item.IsNoFirst) {
                                    item.DomObj = _this.MonacoEditorObj;
                                    _this.MonacoEditorObj.CodeType = MonacoEditorFile.MonacoEditor.CodeType.sql;
                                    _this.forceUpdate("");
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
                            ReloadFun: function (item) {
                                if (!item.IsNoFirst) {
                                    item.DomObj = new MoadlDomFile.ModalDom.ModalDomVm({
                                        Title: "弹出层标题。。。。。。",
                                        IsDebug: true,
                                        UniId: _uid,
                                        ModalShowingFun: function (a, b) {
                                            a.DomObj = new pickContainerFile.PickerContainer.PickerContainerVm({
                                                UniId: _uid,
                                                LeftDomVmObj: null
                                            });
                                            b();
                                        }
                                    });
                                    _this.forceUpdate("");
                                }
                            }
                        },
                        {
                            DomObj: null,
                            Title: "任务分配",
                            ReloadFun: function (item) {
                                if (!item.IsNoFirst) {
                                    urlFile.Core.AkPost("/core/Selector/LoadAllTreeFormatJson?regname=ProTaskTreeCodeTable", {}, function (a) {
                                        if ($.isArray(a)) {
                                            a = {
                                                CODE_VALUE: "0",
                                                CODE_TEXT: "根",
                                                Children: a
                                            };
                                        }
                                        var _data = a;
                                        //if()
                                        _this.initTaskKityMinder(_data, item);
                                    });
                                }
                            }
                        }, {
                            DomObj: null,
                            Title: "选择器",
                            ReloadFun: function (item) {
                                if (!item.IsNoFirst) {
                                    item.DomObj = new pickDomFile.PickDom.PickDomVm({
                                        UniId: _uid,
                                        PickItemList: [
                                            { Key: "key1", Text: "文本项1" },
                                            { Key: "key22", Text: "文本项22" },
                                            { Key: "key13", Text: "文本项13" }
                                        ],
                                        PickerContainer: {
                                            UniId: _uid,
                                            LeftDomVmObj: new PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm({ UniId: _uid })
                                        }
                                    });
                                }
                            }
                        },
                        {
                            DomObj: null,
                            Title: "dbXml",
                            IsActive: false,
                            ReloadFun: function (item) {
                                if (!item.IsNoFirst) {
                                    urlFile.Core.AkPost("/rightcloud/auth/getcodefile", { path: "xml/db.xml" }, function (a) {
                                        var _list = a;
                                        item.DomObj = new MonacoEditorFile.MonacoEditor.MonacoEditorVm({
                                            CodeType: MonacoEditorFile.MonacoEditor.CodeType.xml,
                                            ContentList: _list
                                        });
                                        _this.TabDomFileObj.forceUpdate("");
                                    });
                                }
                            }
                        },
                        {
                            DomObj: null,
                            Title: "formxml",
                            IsActive: false,
                            ReloadFun: function (item) {
                                if (!item.IsNoFirst) {
                                    urlFile.Core.AkPost("/rightcloud/auth/getcodefile", { path: "xml/form/AllControls/AllControls.xml" }, function (a) {
                                        var _list = a;
                                        item.DomObj = new MonacoEditorFile.MonacoEditor.MonacoEditorVm({
                                            CodeType: MonacoEditorFile.MonacoEditor.CodeType.xml,
                                            ContentList: _list
                                        });
                                        _this.TabDomFileObj.forceUpdate("");
                                    });
                                }
                            }
                        },
                        {
                            DomObj: null,
                            Title: "modulexml",
                            IsActive: false,
                            ReloadFun: function (item) {
                                if (!item.IsNoFirst) {
                                    urlFile.Core.AkPost("/rightcloud/auth/getcodefile", { path: "xml/module/AllControls/AllControls.xml" }, function (a) {
                                        var _list = a;
                                        item.DomObj = new MonacoEditorFile.MonacoEditor.MonacoEditorVm({
                                            CodeType: MonacoEditorFile.MonacoEditor.CodeType.xml,
                                            ContentList: _list
                                        });
                                        _this.TabDomFileObj.forceUpdate("");
                                    });
                                }
                            }
                        },
                        {
                            DomObj: null,
                            Title: "js",
                            IsActive: false,
                            ReloadFun: function (item) {
                                if (!item.IsNoFirst) {
                                    urlFile.Core.AkPost("/rightcloud/auth/getcodefile", { path: "Ataw.WebSite/ts/src/06app/web/hull.js" }, function (a) {
                                        var _list = a;
                                        item.DomObj = new MonacoEditorFile.MonacoEditor.MonacoEditorVm({
                                            CodeType: MonacoEditorFile.MonacoEditor.CodeType.javascript,
                                            ContentList: _list
                                        });
                                        _this.TabDomFileObj.forceUpdate("");
                                    });
                                }
                            }
                        },
                        {
                            DomObj: null,
                            Title: "typescript",
                            IsActive: false,
                            ReloadFun: function (item) {
                                if (!item.IsNoFirst) {
                                    urlFile.Core.AkPost("/rightcloud/auth/getcodefile", { path: "Ataw.WebSite/ts/src/06app/web/hull.tsx" }, function (a) {
                                        var _list = a;
                                        item.DomObj = new MonacoEditorFile.MonacoEditor.MonacoEditorVm({
                                            CodeType: MonacoEditorFile.MonacoEditor.CodeType.typescript,
                                            ContentList: _list
                                        });
                                        _this.TabDomFileObj.forceUpdate("");
                                    });
                                }
                            }
                        },
                        {
                            DomObj: null,
                            Title: "webconfig",
                            IsActive: false,
                            ReloadFun: function (item) {
                                if (!item.IsNoFirst) {
                                    urlFile.Core.AkPost("/rightcloud/auth/getcodefile", { path: "Ataw.WebSite/web.config" }, function (a) {
                                        var _list = a;
                                        item.DomObj = new MonacoEditorFile.MonacoEditor.MonacoEditorVm({
                                            CodeType: MonacoEditorFile.MonacoEditor.CodeType.xml,
                                            ContentList: _list
                                        });
                                        _this.TabDomFileObj.forceUpdate("");
                                    });
                                }
                            }
                        },
                        {
                            DomObj: null,
                            Title: "suggestText",
                            IsActive: false,
                            ReloadFun: function (item) {
                                if (!item.IsNoFirst) {
                                    item.DomObj = new suggestFile.AutoSuggestText.AutoSuggestTextVm();
                                    _this.TabDomFileObj.forceUpdate("");
                                }
                            }
                        },
                        {
                            DomObj: null,
                            Title: "SelectorDom",
                            IsActive: false,
                            ReloadFun: function (item) {
                                if (!item.IsNoFirst) {
                                    item.DomObj = new SelectorDomFile.SelectorDom.SelectorDomVm();
                                    _this.TabDomFileObj.forceUpdate("");
                                }
                            }
                        }
                    ]
                });
            }
            JsonViewPageVm.prototype.init = function (config) {
            };
            JsonViewPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            JsonViewPageVm.prototype.initKityMinder = function (_data, item) {
                var _o = KityMinderFile.KityMinderDom.convertToKMNodeByTreeNode(_data);
                _o.data.text = "平台菜单";
                _o.data.expandState = "";
                item.DomObj = this.KityMinderDomObj = new KityMinderFile.KityMinderDom.KityMinderDomVm({ MDTreeObj: { root: _o } });
                //this.props.Vm.KityMinderDomObj.MDTreeObj = { root: _o };
                this.TabDomFileObj.IsChange = true;
                this.forceUpdate("");
            };
            JsonViewPageVm.prototype.initTaskKityMinder = function (_data, item) {
                var _o = KityMinderFile.KityMinderDom.convertToKMNodeByTreeNode(_data);
                _o.data.text = "任务分配";
                _o.data.expandState = "";
                item.DomObj = new KityMinderFile.KityMinderDom.KityMinderDomVm({ MDTreeObj: { root: _o } });
                //this.props.Vm.KityMinderDomObj.MDTreeObj = { root: _o };
                this.TabDomFileObj.IsChange = true;
                this.forceUpdate("");
            };
            return JsonViewPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        JsonViewPage.JsonViewPageVm = JsonViewPageVm;
        var JsonViewPageStates = (function (_super) {
            __extends(JsonViewPageStates, _super);
            function JsonViewPageStates() {
                _super.apply(this, arguments);
            }
            return JsonViewPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        JsonViewPage.JsonViewPageStates = JsonViewPageStates;
        var JsonViewPageProps = (function (_super) {
            __extends(JsonViewPageProps, _super);
            function JsonViewPageProps() {
                _super.apply(this, arguments);
            }
            return JsonViewPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        JsonViewPage.JsonViewPageProps = JsonViewPageProps;
        iocFile.Core.Ioc.Current().RegisterType("JSONVIEWPAGE", basewedPageFile.Web.BaseWebPageVm, JsonViewPageVm);
    })(JsonViewPage = exports.JsonViewPage || (exports.JsonViewPage = {}));
});
