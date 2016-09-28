var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "./../../../05tool/Pagination", "./LeftNaviDom", "./SearchFormDom", "./../../../05tool/Button", "./TableDom", "react"], function (require, exports, iocFile, basewedPageFile, pagination, LeftNaviDomFile, SearchFormDomFile, buttonFile, TableDomFile, React) {
    "use strict";
    var BaseListPage;
    (function (BaseListPage) {
        var BaseListPageAction = (function (_super) {
            __extends(BaseListPageAction, _super);
            function BaseListPageAction() {
                _super.apply(this, arguments);
            }
            return BaseListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        BaseListPage.BaseListPageAction = BaseListPageAction;
        var BaseListPageReact = (function (_super) {
            __extends(BaseListPageReact, _super);
            function BaseListPageReact() {
                _super.apply(this, arguments);
            }
            return BaseListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        BaseListPage.BaseListPageReact = BaseListPageReact;
        var TestBaseListPageReact = (function (_super) {
            __extends(TestBaseListPageReact, _super);
            function TestBaseListPageReact() {
                _super.apply(this, arguments);
            }
            TestBaseListPageReact.prototype.initPager = function () {
                var _this = this;
                var pagerVm = this.props.Vm.Pager;
                if (!pagerVm) {
                    pagerVm = new pagination.tool.PaginationVm();
                    this.props.Vm.Pager = pagerVm;
                    //var pager = this.props.Vm.ListData.Pager;
                    pagerVm.PageNo = 10;
                    pagerVm.PageSize = 50;
                    pagerVm.TotalCount = 5000;
                    pagerVm.PageClickEvent = function (pageIndex) {
                        //this.props.Vm.loadPageData(pageIndex);
                        pagerVm.PageNo = pageIndex;
                        pagerVm.IsChange = true;
                        _this.props.Vm.IsChange = true;
                        _this.forceUpdate();
                    };
                }
                return pagerVm.intoDom();
            };
            TestBaseListPageReact.prototype.fun_searchBtn = function () {
            };
            TestBaseListPageReact.prototype.fun_seachClearBtn = function () {
            };
            TestBaseListPageReact.prototype.initSearchForm = function () {
                return this.props.Vm.SearchObj ? this.props.Vm.SearchObj.intoDom() : null;
            };
            TestBaseListPageReact.prototype.initNavi = function () {
                return this.props.Vm.LeftObj ? this.props.Vm.LeftObj.intoDom() : null;
            };
            TestBaseListPageReact.prototype.initButtons = function () {
                return React.createElement("ul", {className: "button-group round"}, this.props.Vm.PageBtnList.map(function (a) { return a.intoDom(); }), this.props.Vm.DataBtnList.map(function (a) { return a.intoDom(); }));
            };
            TestBaseListPageReact.prototype.pSender = function () {
                var searchForm = this.initSearchForm();
                var pager = this.initPager();
                var topPager = React.createElement("div", {className: "topPager"}, pager);
                var bottomPager = React.createElement("div", {className: "bottomPager"}, pager);
                //return <div className="row acsScroll acsMargin3">
                //    <div className="acs-title">{this.props.Vm.Title}</div>
                //       {this.initNavi()}
                //       <div className="main acs-fixed-top">
                //        {searchForm}
                //        <div className="acs-grids">
                //            <div className="button-bar">{this.initButtons() }</div>
                //            <div className="topPager">{pager}</div>
                //            {this.props.Vm.TableObj.intoDom()}
                //            <div className="bottomPager">{pager}</div>
                //        </div>
                //       </div>
                //</div>;
                return React.createElement("div", {className: "Hg-relative Hg-default-top acsScroll"}, this.initNavi(), React.createElement("div", null, searchForm, React.createElement("div", {className: "Hm-grids"}, React.createElement("div", {className: "button-bar"}, this.initButtons()), React.createElement("div", {className: "topPager"}, pager), this.props.Vm.TableObj.intoDom(), React.createElement("div", {className: "bottomPager"}, pager))));
            };
            return TestBaseListPageReact;
        }(BaseListPageReact));
        BaseListPage.TestBaseListPageReact = TestBaseListPageReact;
        var BaseListPageVm = (function (_super) {
            __extends(BaseListPageVm, _super);
            function BaseListPageVm() {
                _super.call(this);
                this.ReactType = TestBaseListPageReact;
                this.Title = "基础例子";
                this.DataBtnList = [];
                this.PageBtnList = [];
                this.SearchObj = new SearchFormDomFile.SearchFormDom.SearchFormDomVm();
                this.LeftObj = new LeftNaviDomFile.LeftNaviDom.LeftNaviDomVm();
                var _newBtn = new buttonFile.ui.ButtonVm();
                _newBtn.DisplayName = "新增";
                _newBtn.Name = "New";
                var _delBtn = new buttonFile.ui.ButtonVm();
                _delBtn.DisplayName = "删除";
                _delBtn.Name = "Del";
                _delBtn.NoEnable = true;
                this.PageBtnList.push(_newBtn);
                var _detailBtn = new buttonFile.ui.ButtonVm();
                _detailBtn.DisplayName = "详情";
                _detailBtn.Name = "Detail";
                _detailBtn.NoEnable = true;
                this.DataBtnList.push(_delBtn);
                this.DataBtnList.push(_detailBtn);
                this.TableObj = new TableDomFile.TableDom.TableDomVm({ ParentListPage: this });
            }
            BaseListPageVm.prototype.ShowDataBtn = function (btns) {
                if (btns == null)
                    btns = [];
                this.DataBtnList.forEach(function (b) {
                    b.NoEnable = true;
                    btns.forEach(function (str) {
                        if (b.Name == str) {
                            b.NoEnable = false;
                        }
                    });
                    b.forceUpdate("");
                });
            };
            return BaseListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        BaseListPage.BaseListPageVm = BaseListPageVm;
        var BaseListPageStates = (function (_super) {
            __extends(BaseListPageStates, _super);
            function BaseListPageStates() {
                _super.apply(this, arguments);
            }
            return BaseListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        BaseListPage.BaseListPageStates = BaseListPageStates;
        var BaseListPageProps = (function (_super) {
            __extends(BaseListPageProps, _super);
            function BaseListPageProps() {
                _super.apply(this, arguments);
            }
            return BaseListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        BaseListPage.BaseListPageProps = BaseListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("BASELISTPAGE", basewedPageFile.Web.BaseWebPageVm, BaseListPageVm);
    })(BaseListPage = exports.BaseListPage || (exports.BaseListPage = {}));
});
