var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../03form/Base/BasePage", "./../01core/Ioc", "./../01core/Util", "./../05tool/Pagination", "./../01core/Url", "./List/ListNaviDom", "./../01core/Event", "react"], function (require, exports, basepage, iocFile, utilFile, Pagination, url, ListNaviDomFile, eventFile, React) {
    "use strict";
    var ui;
    (function (ui) {
        var ListPageAction = (function (_super) {
            __extends(ListPageAction, _super);
            function ListPageAction() {
                _super.apply(this, arguments);
            }
            return ListPageAction;
        }(basepage.ui.BasePageAction));
        ui.ListPageAction = ListPageAction;
        var ListPageReact = (function (_super) {
            __extends(ListPageReact, _super);
            function ListPageReact() {
                _super.apply(this, arguments);
            }
            ListPageReact.prototype.pComponentWillMount = function () {
                _super.prototype.pComponentWillMount.call(this);
                // alert("List页面注册变更事件");
            };
            ListPageReact.prototype.initPager = function () {
                return this.props.Vm.Pagination ? this.props.Vm.Pagination.intoDom() : null;
            };
            ListPageReact.prototype.searchBtn_fun = function () {
                this.props.Vm.search(0);
            };
            ListPageReact.prototype.clearBtn_fun = function () {
                // this.props.Vm.search(0);
                this.props.Vm.SearchForm.RowObjList.forEach(function (r) {
                    r.ColumnObjList.forEach(function (col) {
                        var _val = col.ControlObj.getOriValue();
                        col.ControlObj.dataValueSet(_val);
                    });
                });
                this.props.Vm.IsClearBtnHide = true;
                this.props.Vm.search(0);
            };
            ListPageReact.prototype.initNavi = function () {
                return React.createElement("div", {className: "Hm-toggle-menu text-left col-md-3"}, this._T_(this.props.Vm.NaviDomObj.intoDom()));
            };
            ListPageReact.prototype.initSearchForm = function () {
                var _this = this;
                return this.props.Vm.SearchForm ? this.props.Vm.SearchForm.intoDom(0, React.createElement("div", {className: "text-center Hm-search-panel btn-group-sm"}, React.createElement("div", {className: "btn btn-xs btn-primary", onClick: function () { _this.searchBtn_fun(); }}, "搜索"), React.createElement("div", {className: "btn btn-xs btn-primary " + (this.props.Vm.IsClearBtnHide ? "hide" : ""), onClick: function () { _this.clearBtn_fun(); }}, "清空"))) : null;
            };
            ListPageReact.prototype.buttonSet = function (b) {
                var _this = this;
                if (b.Right) {
                    // b.NoEnable = false;
                    if (b.Right == "Insert") {
                        b.ClickFun = function () { _this.props.Vm.insertFun(); };
                        b.IconCss = "plus";
                        b.FaCss = "plus";
                    }
                    if (b.Right == "Update") {
                        b.ClickFun = function () { _this.props.Vm.updateFun(); };
                        b.IconCss = "edit";
                        b.FaCss = "edit";
                    }
                    if (b.Right == "Delete") {
                        b.ClickFun = function () { _this.props.Vm.deleteFun(); };
                        b.IconCss = "trash";
                        b.FaCss = "trash";
                    }
                    if (b.Right == "Detail") {
                        b.ClickFun = function () { _this.props.Vm.detailFun(); };
                        b.IconCss = "table";
                        b.FaCss = "table";
                    }
                    if (!b.ClickFun) {
                        b.ClickFun = function () {
                            _this.props.Vm.buttonCommd(b.Name);
                        };
                    }
                }
                b.KindCss = "btn-xs btn-primary";
            };
            ListPageReact.prototype.initButtons = function () {
                var _this = this;
                var _dataButtons = this.props.Vm.ButtonObjList.filter(function (a) { return a.IsData; });
                var _pageButtons = this.props.Vm.ButtonObjList.filter(function (a) { return !a.IsData; });
                return React.createElement("div", {className: "Hm-button-bar"}, React.createElement("div", {className: "btn-group"}, _dataButtons.map(function (b) {
                    _this.buttonSet(b);
                    return b.intoDom();
                })), React.createElement("div", {className: "btn-group m-l-xl"}, _pageButtons.map(function (b) {
                    _this.buttonSet(b);
                    return b.intoDom();
                })));
            };
            ListPageReact.prototype.toggleFormType = function (name) {
                this.props.Vm.ListFormType = name;
                this.props.Vm.search(0);
            };
            ListPageReact.prototype.fun_isShow = function () {
                this.props.Vm.IsShow = !this.props.Vm.IsShow;
                this.forceUpdate();
            };
            ListPageReact.prototype.fMainSender = function () {
                var _this = this;
                var pager = this.initPager();
                var topPager = React.createElement("div", {className: "topPager"}, pager);
                var bottomPager = React.createElement("div", {className: "bottomPager"}, pager);
                return React.createElement("div", {className: "Hm-modals Hg-relative Hg-default-top  Hs-fff clearfix" + (this.props.Vm.ishide ? " hide " : "")}, React.createElement("div", {className: "pull-right Hu-toggle"}, React.createElement("a", null, React.createElement("i", {className: " fa fa-exchange"}), "表单类型"), React.createElement("ul", {className: "dropdown"}, React.createElement("li", null, React.createElement("a", {className: "btn btn-sm", onClick: function () { _this.toggleFormType("Grid"); return false; }}, React.createElement("i", {className: " fa fa-table"}), "表格")), React.createElement("li", null, React.createElement("a", {className: "btn btn-sm ", onClick: function () { _this.toggleFormType("Normal"); return false; }}, React.createElement("i", {className: "fa fa-align-justify"}), "表单")))), this.props.Vm.NaviDomObj ? this.initNavi() : null, React.createElement("div", {className: "col-md-" + (this.props.Vm.NaviDomObj ? "9 " : "12 ")}, this.initSearchForm(), React.createElement("div", {className: "Hm-grids"}, React.createElement("div", {className: "Hm-topPager clearfix"}, pager), this.initButtons(), this.props.Vm.ListForm.intoDom(), React.createElement("div", {className: "Hm-bottomPager"}, pager))));
            };
            ListPageReact.prototype.pSender = function () {
                return this.props.Vm.HeaderVail.IsValid ? this.fMainSender() : this.pSendError();
            };
            ;
            return ListPageReact;
        }(basepage.ui.BasePageReact));
        ui.ListPageReact = ListPageReact;
        var ListPageProps = (function (_super) {
            __extends(ListPageProps, _super);
            function ListPageProps() {
                _super.apply(this, arguments);
            }
            return ListPageProps;
        }(basepage.ui.BasePageProps));
        ui.ListPageProps = ListPageProps;
        var ListPageVm = (function (_super) {
            __extends(ListPageVm, _super);
            function ListPageVm() {
                var _this = this;
                _super.call(this);
                this.ReactType = ListPageReact;
                this.pRegName = "ListPage";
                this.IsShow = false;
                this.ishide = false;
                this.IsModalShow = true;
                //在选择器的状态下重写此方法
                this.SaveEvent = null;
                this.IsReload = false;
                this.IsClearBtnHide = true;
                this.ListFormType = "";
                this.UniId = "listPage" + eventFile.App.getUniId().toString();
                this.listenAppEvent("04page/ListPage", this.UniId, function () {
                    _this.naviClickTriggle();
                });
            }
            ListPageVm.prototype.changehide = function () {
                this.ishide = true;
                this.IsModalShow = false;
                this.forceUpdate("");
            };
            ListPageVm.prototype.insertFun = function () {
                url.Core.AkUrl.Current().openUrl("$WINDEFAULT$" + this.Xml + "$Insert", true);
            };
            ListPageVm.prototype.naviClickTriggle = function () {
                //alert(
                //    this.NaviDomObj.NaviItemList.map((item) => {
                //        return item.getDataValue();
                //    }).join("-"));
                this.search(0);
            };
            ListPageVm.prototype.setNaviDs = function (ds) {
            };
            ListPageVm.prototype.search = function (a) {
                if (this.SearchForm) {
                    var ds = this.getPageSubmitData([this.SearchForm]);
                    if (ds.IsLegalResult) {
                        //开始页面信息
                        this.searchPageData(ds.Ds, this.ListForm.Name, a);
                    }
                }
                else {
                    this.searchPageData({}, this.ListForm.Name, a);
                }
            };
            ListPageVm.prototype.deleteFun = function (keys) {
                // if(key)
                var _keys = keys ? keys : this.getSelectKeysByListForm();
                if (_keys.length > 0) {
                    //  var _strs = _keys.join(",");
                    // url.Core.AkUrl.Current().openUrl("$WINDEFAULT$" + this.props.Vm.Xml + "$Detail$" + _strs, true);
                    if (confirm("是否删除该" + _keys.length + "条记录   ？ ")) {
                        this.deleteRows(this.ListForm.TableName, _keys);
                    }
                }
                else {
                    utilFile.Core.Util.Noty("请选择要删除的记录");
                }
            };
            ListPageVm.prototype.updateFun = function (keys) {
                var _keys = keys ? keys : this.getSelectKeysByListForm();
                if (_keys.length > 0) {
                    var _strs = _keys.join(",");
                    // if(_strs == )
                    url.Core.AkUrl.Current().openUrl("$WINDEFAULT$" + this.Xml + "$Update$" + _strs, true);
                }
                else {
                    utilFile.Core.Util.Noty("请选择要编辑的记录");
                }
            };
            ListPageVm.prototype.detailFun = function (keys) {
                var _keys = keys ? keys : this.getSelectKeysByListForm();
                if (_keys.length > 0) {
                    var _strs = _keys.join(",");
                    url.Core.AkUrl.Current().openUrl("$WINDEFAULT$" + this.Xml + "$Detail$" + _strs, true);
                }
                else {
                    utilFile.Core.Util.Noty("请选择要查看的记录");
                }
            };
            ListPageVm.prototype.buttonCommd = function (name, keys) {
                if (!keys) {
                    keys = this.getSelectKeysByListForm();
                }
                //alert(name + "  /r/n " + $.toJSON(key));
                this.emitAppEvent("pPageButton", this.HookId, { right: name, keys: keys });
                // this.emitAppEvent("buttonCommd", this.UniId, { name: name, key: key });
            };
            ListPageVm.prototype.singleButtonClick = function (right, key) {
                if (!key || key.length == 0) {
                    key = this.getSelectKeysByListForm();
                }
                _super.prototype.singleButtonClick.call(this, right, key);
            };
            ListPageVm.prototype.getSelectKeysByListForm = function () {
                var res = [];
                this.ListForm.RowObjList.forEach(function (r) {
                    if (r.IsSelect) {
                        res.push(r.KeyColumnObj.ControlObj.vmDataValueGet());
                    }
                });
                return res;
            };
            ListPageVm.prototype.pRefresh = function () {
                this.search(0);
            };
            ListPageVm.prototype.checkBtns = function () {
                _super.prototype.checkBtns.call(this);
                //this.ButtonObjList
                var _rightList = [];
                var _temp = null;
                var _select = this.ListForm.RowObjList.forEach(function (r) {
                    if (r.IsSelect) {
                        if (!r.RowData["BUTTON_RIGHT"]) {
                            //r.RowData["BUTTON_RIGHT"] = "";
                            _temp = [];
                            return;
                        }
                        var _rightStrs = r.RowData["BUTTON_RIGHT"].toString();
                        var _rights = _rightStrs.split("|");
                        if (_temp == null) {
                            _temp = _rights;
                        }
                        else {
                            _temp = utilFile.Core.Util.intersection(_rights, _temp);
                        }
                    }
                    //_rightList.push(_rights);
                });
                this.ButtonObjList.forEach(function (bt) {
                    if (bt.IsData) {
                        var _old = bt.NoEnable;
                        bt.NoEnable = true;
                        if (_temp) {
                            _temp.forEach(function (t) {
                                if (bt.Right == t) {
                                    bt.NoEnable = false;
                                }
                            });
                        }
                        if (_old != bt.NoEnable) {
                            bt.forceUpdate("");
                            ;
                        }
                    }
                });
            };
            ListPageVm.prototype.pSetFormConfig = function (formConfig) {
                _super.prototype.pSetFormConfig.call(this, formConfig);
                if (formConfig.Name == this.fListFormName && this.ListFormType != "") {
                    formConfig.FormType = this.ListFormType;
                }
            };
            //  public NaviColList: baceColFile.Core.BaseColVm[] = [];
            ListPageVm.prototype.create = function (_pageView) {
                var _this = this;
                this.Xml = _pageView.RegName;
                // if (_pageView.Data) {
                this.fListFormName = _pageView.ListFormName;
                // }
                if (_pageView.Data && _pageView.Data[_pageView.SearchFormName]) {
                    var dt = _pageView.Data[_pageView.SearchFormName];
                }
                else {
                    if (_pageView.Data) {
                        _pageView.Data[_pageView.SearchFormName] = [{}];
                    }
                }
                if (!this.IsReload && _pageView.Forms && _pageView.Forms[_pageView.ListFormName] && _pageView.Forms[_pageView.ListFormName].NavigationColumns) {
                    var _navis = _pageView.Forms[_pageView.ListFormName].NavigationColumns;
                    if (_navis != null && _navis.length > 0) {
                        var _config = {
                            NaviItemList: [],
                            UniId: this.UniId
                        };
                        _navis.forEach(function (navi) {
                            _config.NaviItemList.push({
                                ColConfig: navi,
                                DataSet: _pageView.Data,
                                UniId: _this.UniId
                            });
                        });
                        this.NaviDomObj = new ListNaviDomFile.ListNaviDom.ListNaviDomVm(_config);
                    }
                }
                _super.prototype.create.call(this, _pageView);
                this.FormObjList.forEach(function (x) {
                    if (x.Name == _pageView.ListFormName) {
                        _this.ListForm = x;
                        x.IsNoAdd = true;
                        x.IsNoDel = true;
                        var _g = utilFile.Core.Util.Cast(x);
                        if (_g)
                            _g.IsOnlyTable = true;
                    }
                    if (x.Name == _pageView.SearchFormName && !_this.IsReload) {
                        _this.SearchForm = x;
                        x.HasNoBorder = true;
                        x.IsNoAdd = true;
                        x.IsNoDel = true;
                        x.IsSingleRow = true;
                        //this.SearchForm.NoNeedUpdate = true;
                        if (x.RowObjList && x.RowObjList.length > 0) {
                            x.RowObjList[0].getEmit().addListener("BaseRowVm_change", function () {
                                var _isChange = false;
                                if (x.RowObjList[0].ColumnObjList) {
                                    x.RowObjList[0].ColumnObjList.forEach(function (col) {
                                        if (!_isChange) {
                                            var _obj = col.ControlObj;
                                            if (_obj.TempDataValue != _obj.getOriValue()) {
                                                _isChange = true;
                                            }
                                        }
                                        //  break;
                                    });
                                }
                                if (_isChange) {
                                    _this.SearchForm.IsChange = true;
                                    _this.IsClearBtnHide = false;
                                    _this.forceUpdate("");
                                }
                                else {
                                    _this.SearchForm.IsChange = true;
                                    _this.IsClearBtnHide = true;
                                    _this.forceUpdate("");
                                }
                            });
                            if (x.RowObjList[0].ColumnObjList) {
                                x.RowObjList[0].ColumnObjList.forEach(function (c) {
                                    c.ColumnNum = 2;
                                    c.ColumnConfig.ShowType = 2;
                                });
                            }
                        }
                    }
                    if (_this.SearchForm) {
                        _this.SearchForm.IsChange = !_this.IsReload;
                    }
                });
                this.fCreatePagination(_pageView);
            };
            ListPageVm.prototype.searchPageData = function (ds, formName, a) {
                var _this = this;
                //if (this.SearchForm){
                var _searchForm = [];
                if (this.SearchForm) {
                    _searchForm = ds[this.SearchForm.TableName];
                    if (!_searchForm) {
                        _searchForm = [];
                    }
                }
                var _row = null;
                if (_searchForm.length == 0) {
                    _row = {};
                    _searchForm.push(_row);
                }
                _row = _searchForm[0];
                if (_row && this.SearchForm) {
                    if (this.NaviDomObj && this.NaviDomObj.NaviItemList) {
                        this.NaviDomObj.NaviItemList.forEach(function (n) {
                            if (n && n.ColVm) {
                                var _val = n.getDataValue();
                                if (_val != "") {
                                    _row[n.Name] = n.getDataValue();
                                }
                            }
                        });
                    }
                    ds[this.SearchForm.TableName] = [_row];
                }
                //    var ds = { PAGER: [{ PageIndex: a }] };
                ds["PAGER"] = [{ PageIndex: a }];
                url.Core.AkPost("/module/SearchForm", {
                    xml: this.Xml,
                    form: formName,
                    pageStyle: "List",
                    ds: JSON.stringify(ds)
                }, function (p) {
                    try {
                        var _pageView = p;
                        _this.reSenderData(_pageView);
                    }
                    catch (ex) {
                        alert(ex);
                    }
                });
            };
            ListPageVm.prototype.reSenderData = function (_pageView) {
                this.IsReload = true;
                var _d0 = new Date();
                this.create(_pageView);
                this.IsChange = true;
                if (this.Pagination)
                    this.Pagination.IsChange = true;
                if (this.NaviDomObj)
                    this.NaviDomObj.IsChange = false;
                // b.FormObjList[0].IsChange = false;
                this.forceUpdate("");
            };
            //public GetPageData(a:number)
            //{
            //    var ds = { PAGER: [{ PageIndex: a }] };
            //    url.Core.AkPost("/module/module", {
            //        xml: this.Xml,
            //        pageStyle: "List",
            //        ds: JSON.stringify(ds)
            //    },
            //        (p) => {
            //            var _pageView: PageView.data.IPageView = p;
            //            this.reSenderData(_pageView);
            //        });
            //}
            ListPageVm.prototype.fCreatePagination = function (_pageView) {
                // console.log(this.ListForm);
                var _this = this;
                //this.Pagination = new tool.PaginationVm();
                if (_pageView.Data) {
                    var _dt = _pageView.Data[_pageView.ListFormName + "_PAGER"];
                    if (_dt && _dt.length > 0) {
                        this.Pagination = new Pagination.tool.PaginationVm();
                        var _row = _dt[0];
                        this.Pagination.PageNo = parseInt(_row["PageIndex"].toString());
                        this.Pagination.PageSize = parseInt(_row["PageSize"].toString());
                        //this.Pagination.PageSize = _row[""];
                        this.Pagination.TotalCount = parseInt(_row["TotalCount"].toString());
                        // this.state.Pagination.VM.TotalPage = Math.ceil(a.Total / a.Size);
                        //this.Pagination.TotalPage = Math.ceil(this.Pagination.TotalCount / this.Pagination.PageSize);
                        // this.Pagination.TotalPage = _row[""];
                        this.Pagination.PageClickEvent = function (a) {
                            _this.search(a);
                        };
                    }
                    else {
                        this.Pagination = null;
                    }
                }
                else
                    this.Pagination = null;
            };
            return ListPageVm;
        }(basepage.ui.BasePageVm));
        ui.ListPageVm = ListPageVm;
        var ListPageStates = (function (_super) {
            __extends(ListPageStates, _super);
            function ListPageStates() {
                _super.apply(this, arguments);
            }
            return ListPageStates;
        }(basepage.ui.BasePageStates));
        ui.ListPageStates = ListPageStates;
        iocFile.Core.Ioc.Current().RegisterType("LIST", basepage.ui.BasePageVm, ListPageVm);
    })(ui = exports.ui || (exports.ui = {}));
});
