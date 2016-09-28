import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");

import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");

import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import pagination = require("./../../../05tool/Pagination");
import LeftNaviDomFile = require("./LeftNaviDom");
import SearchFormDomFile = require("./SearchFormDom");
import buttonFile = require("./../../../05tool/Button");
import TableDomFile = require("./TableDom");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module BaseListPage {
    export class BaseListPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class BaseListPageReact<P extends BaseListPageProps, S extends BaseListPageStates, A extends BaseListPageAction> extends basewedPageFile.Web.BaseWebPageReact<P, S, A>{
    }

    export class TestBaseListPageReact extends BaseListPageReact<BaseListPageProps,  BaseListPageStates, BaseListPageAction>
    {

        private initPager(): React.ReactElement<any> {
            var pagerVm = this.props.Vm.Pager;
            if (!pagerVm) {
                pagerVm = new pagination.tool.PaginationVm();
                this.props.Vm.Pager = pagerVm;
                //var pager = this.props.Vm.ListData.Pager;
                pagerVm.PageNo = 10;
                pagerVm.PageSize = 50;
                pagerVm.TotalCount = 5000;

                pagerVm.PageClickEvent = (pageIndex) => {
                    //this.props.Vm.loadPageData(pageIndex);
                    pagerVm.PageNo = pageIndex;
                    pagerVm.IsChange = true;
                    this.props.Vm.IsChange = true;
                    this.forceUpdate();
                }
            }
            return pagerVm.intoDom();

        }

       

        protected fun_searchBtn() {

        }

        protected fun_seachClearBtn() {

        }

        private initSearchForm(): React.ReactElement<any> {
            return this.props.Vm.SearchObj ? this.props.Vm.SearchObj.intoDom() : null;
        }
        private initNavi(): React.ReactElement<any> {
            return this.props.Vm.LeftObj ? this.props.Vm.LeftObj.intoDom() : null;
        }

        private initButtons(): React.ReactElement<any> {

            return <ul className="button-group round">
                {this.props.Vm.PageBtnList.map(a => { return a.intoDom() }) }
                {this.props.Vm.DataBtnList.map(a => { return a.intoDom() }) }
            </ul>;
        }

        public pSender(): React.ReactElement<any> {

            var searchForm = this.initSearchForm();
            var pager = this.initPager();
            var topPager = <div className="topPager">{pager}</div>;
            var bottomPager = <div className="bottomPager">{pager}</div>;
           


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
            return <div className="Hg-relative Hg-default-top acsScroll">             
                {this.initNavi() }
                <div>
                    {searchForm}
                    <div className="Hm-grids">
                        <div className="button-bar">{this.initButtons() }</div>
                        <div className="topPager">{pager}</div>
                        {this.props.Vm.TableObj.intoDom() }
                        <div className="bottomPager">{pager}</div>
                    </div>
                </div>
            </div>;
        }
    }
    export class BaseListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = TestBaseListPageReact;
        public Title: string = "基础例子";
        public Pager: pagination.tool.PaginationVm;

        public LeftObj: LeftNaviDomFile.LeftNaviDom.LeftNaviDomVm;
        public SearchObj: SearchFormDomFile.SearchFormDom.SearchFormDomVm;
        public TableObj: TableDomFile.TableDom.TableDomVm;

        public DataBtnList: buttonFile.ui.ButtonVm[] = [];
        public PageBtnList: buttonFile.ui.ButtonVm[] = [];

        public constructor() {
            super();
            this.SearchObj = new SearchFormDomFile.SearchFormDom.SearchFormDomVm();
            this.LeftObj = new LeftNaviDomFile.LeftNaviDom.LeftNaviDomVm();
           

            var _newBtn: buttonFile.ui.ButtonVm = new buttonFile.ui.ButtonVm();
            _newBtn.DisplayName = "新增";
            _newBtn.Name = "New";
            var _delBtn: buttonFile.ui.ButtonVm = new buttonFile.ui.ButtonVm();
            _delBtn.DisplayName = "删除";
            _delBtn.Name = "Del";
            _delBtn.NoEnable = true;
            this.PageBtnList.push(_newBtn);

            var _detailBtn: buttonFile.ui.ButtonVm = new buttonFile.ui.ButtonVm();
            _detailBtn.DisplayName = "详情";
            _detailBtn.Name = "Detail";
            _detailBtn.NoEnable = true;

            this.DataBtnList.push(_delBtn);
            this.DataBtnList.push(_detailBtn);
            this.TableObj = new TableDomFile.TableDom.TableDomVm({ ParentListPage:this });
        }

        public ShowDataBtn(btns:string[])
        {
            if (btns == null) btns = [];
            this.DataBtnList.forEach((b) => {
                b.NoEnable = true;
                btns.forEach((str) => {
                   
                    if (b.Name == str) {
                        b.NoEnable = false;
                    }
                    
                    
                })
                b.forceUpdate("");
            });
        }


    }
    export class BaseListPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class BaseListPageProps extends basewedPageFile.Web.BaseWebPageProps<BaseListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("BASELISTPAGE", basewedPageFile.Web.BaseWebPageVm, BaseListPageVm);

}

