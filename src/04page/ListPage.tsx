import basepage = require("./../03form/Base/BasePage");
import iocFile = require("./../01core/Ioc");
import utilFile = require("./../01core/Util");
import baseForm = require("./../03form/Base/BaseForm");
import Pagination = require("./../05tool/Pagination");
import PageView = require("./../07data/PageView");
import url = require("./../01core/Url");
import post = require("./../01core/post");
import GridFormFile = require("./../03form/Grid/GridForm");
import baceColFile = require("./../02col/00core/baseCol");

import ListNaviDomFile = require("./List/ListNaviDom");
import naviItemFile = require("./List/ListNaviItemDom");
import eventFile = require("./../01core/Event");
import buttonFile = require("./../05tool/Button");

/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {

    export class ListPageAction extends basepage.ui.BasePageAction {

    }
   
    export class ListPageReact extends basepage.ui.BasePageReact<ListPageProps, ListPageStates, ListPageAction> {

        protected pComponentWillMount(): void {
            super.pComponentWillMount();
           // alert("List页面注册变更事件");
        }

        private initPager(): React.ReactElement<any> {
            return this.props.Vm.Pagination ? this.props.Vm.Pagination.intoDom() : null;
        }

        private searchBtn_fun()
        {
            this.props.Vm.search(0);

        }
        private clearBtn_fun() {
           // this.props.Vm.search(0);
            this.props.Vm.SearchForm.RowObjList.forEach((r) => {
                r.ColumnObjList.forEach((col) => {
                    var _val = col.ControlObj.getOriValue();
                    col.ControlObj.dataValueSet(_val);
                   
                });

            });
            this.props.Vm.IsClearBtnHide = true;
            this.props.Vm.search(0);
        }
        private initNavi(): React.ReactElement<any> 
        {
            return <div className="Hm-toggle-menu text-left col-md-3">
                {this._T_(this.props.Vm.NaviDomObj.intoDom()) }
            </div>;
        }

        private initSearchForm(): React.ReactElement<any> {
            return this.props.Vm.SearchForm ? this.props.Vm.SearchForm.intoDom(0,

                <div className="text-center Hm-search-panel btn-group-sm">
                    <div className="btn btn-xs btn-primary"  onClick={() => { this.searchBtn_fun(); } }>搜索</div>
                    <div className={"btn btn-xs btn-primary " + (this.props.Vm.IsClearBtnHide ? "hide" : "")}  onClick={() => { this.clearBtn_fun(); } }>清空</div>
                </div>

            ) : null;
        }

        private buttonSet(b: buttonFile.ui.ButtonVm)
        {
            if (b.Right) {
                // b.NoEnable = false;
                if (b.Right == "Insert") {
                    b.ClickFun = () => { this.props.Vm.insertFun(); };
                    b.IconCss = "plus";
                    b.FaCss = "plus";
                }
                if (b.Right == "Update") {
                    b.ClickFun = () => { this.props.Vm.updateFun(); };
                    b.IconCss = "edit";
                    b.FaCss = "edit";
                }
                if (b.Right == "Delete") {
                    b.ClickFun = () => { this.props.Vm.deleteFun(); };
                    b.IconCss = "trash";
                    b.FaCss = "trash";
                }
                if (b.Right == "Detail") {
                    b.ClickFun = () => { this.props.Vm.detailFun(); };
                    b.IconCss = "table";
                    b.FaCss = "table";
                }
                if (!b.ClickFun) {
                    b.ClickFun = () => {
                        this.props.Vm.buttonCommd(b.Name);
                    };
                }
            }
            b.KindCss = "btn-xs btn-primary";
        }

        private initButtons(): React.ReactElement<any> {

            var _dataButtons = this.props.Vm.ButtonObjList.filter((a) => a.IsData);
            var _pageButtons = this.props.Vm.ButtonObjList.filter((a) => !a.IsData);

            return <div className="Hm-button-bar">
                 <div className="btn-group">
                    {
                        _dataButtons.map(
                    (b) => {
                        this.buttonSet(b);
                        return b.intoDom();
                    }
                        )
                    }
                    </div>
                <div className="btn-group m-l-xl">
                    {
                        _pageButtons.map(
                            (b) => {
                                this.buttonSet(b);
                                return b.intoDom();
                            }
                        )
                    }
                </div>
            </div>;
        }

        private toggleFormType(name:string)
        {
            this.props.Vm.ListFormType = name;
            this.props.Vm.search(0);
        }
        private fun_isShow() {
            this.props.Vm.IsShow = !this.props.Vm.IsShow;
            this.forceUpdate();
        }

        private fMainSender(): React.ReactElement<any> {
            var pager = this.initPager();
            var topPager = <div className="topPager">{pager}</div>;
            var bottomPager = <div className="bottomPager">{pager}</div>;

            return <div className={"Hm-modals Hg-relative Hg-default-top  Hs-fff clearfix" + (this.props.Vm.ishide ? " hide " : "") }>
                <div className="pull-right Hu-toggle">
                    <a><i className=" fa fa-exchange"></i>表单类型</a>  
                    <ul className="dropdown">
                        <li><a className="btn btn-sm"  onClick={() => { this.toggleFormType("Grid"); return false; } }  >
                            <i className=" fa fa-table"></i>表格</a></li>
                        <li><a className="btn btn-sm " onClick={() => { this.toggleFormType("Normal"); return false; } }>
                            <i className="fa fa-align-justify"></i>表单</a></li>
                        </ul>
                     
                </div>
                {this.props.Vm.NaviDomObj ? this.initNavi() : null}
                <div className={"col-md-" + (this.props.Vm.NaviDomObj ? "9 " : "12 ") }>
                    {this.initSearchForm() }
                   
                    <div className="Hm-grids">
                      
                        <div className="Hm-topPager clearfix">{pager}</div>
                        {this.initButtons() }
                        {this.props.Vm.ListForm.intoDom() }
                        <div className="Hm-bottomPager">{pager}</div>
                    </div>
                </div>
            </div>;
        }

        public pSender(): React.ReactElement<any> {

            return this.props.Vm.HeaderVail.IsValid ? this.fMainSender() : this.pSendError();
            
           
        };
  
       

    
    }

    export class ListPageProps extends basepage.ui.BasePageProps<ListPageVm>{


    }

    export interface ISaveEvent {
        (): void
    }

    export class ListPageVm extends basepage.ui.BasePageVm {
        public ReactType = ListPageReact;
        public pRegName = "ListPage";
       
        public SearchForm: baseForm.ui.BaseFormVm;
        public ListForm: baseForm.ui.BaseFormVm;
        
        public RowDataBtnList: Array<string>;
        public Pagination: Pagination.tool.PaginationVm;
        public Xml: string;
        public UniId: string;

        public IsShow:boolean = false;
        public ishide: boolean = false;
        public IsModalShow: boolean = true;
        public ModalTop: number;
        //在选择器的状态下重写此方法
        public SaveEvent: ISaveEvent = null;

        public NaviDomObj: ListNaviDomFile.ListNaviDom.ListNaviDomVm;

        private IsReload: boolean = false;
        public IsClearBtnHide: boolean = true;
        public ListFormType: string = "";
        private fListFormName: string;
        public constructor()
        {
            
            super();
            this.UniId = "listPage" + eventFile.App.getUniId().toString();
            this.listenAppEvent("04page/ListPage", this.UniId, () => {
                this.naviClickTriggle();
            })
        }

        public changehide()
        {
            this.ishide = true;
            this.IsModalShow = false;
            this.forceUpdate("");
        }
        
        public insertFun() {
            url.Core.AkUrl.Current().openUrl("$WINDEFAULT$" + this.Xml + "$Insert", true);
        }

        public naviClickTriggle()
        {
            //alert(
            //    this.NaviDomObj.NaviItemList.map((item) => {
            //        return item.getDataValue();
            //    }).join("-"));

            this.search(0);

        }

        private setNaviDs(ds : post.Post.IDataSet)
        {

        }

        public search(a:number)
        {
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
        }

        public deleteFun(keys?: string[]) {
           // if(key)
            var _keys =  keys? keys: this.getSelectKeysByListForm();
            if (_keys.length > 0) {
                //  var _strs = _keys.join(",");
                // url.Core.AkUrl.Current().openUrl("$WINDEFAULT$" + this.props.Vm.Xml + "$Detail$" + _strs, true);
                if (confirm("是否删除该" + _keys.length + "条记录   ？ ")) {
                    this. deleteRows(this.ListForm.TableName, _keys);
                }

            }
            else {
                utilFile.Core.Util.Noty("请选择要删除的记录");
            }
        }
        public updateFun(keys?: string[]) {
            var _keys = keys ? keys : this.getSelectKeysByListForm();
            if (_keys.length > 0) {
                var _strs = _keys.join(",");
                // if(_strs == )
                url.Core.AkUrl.Current().openUrl("$WINDEFAULT$" + this.Xml + "$Update$" + _strs, true);
            }
            else {
                utilFile.Core.Util.Noty("请选择要编辑的记录");
            }
        }
        public detailFun(keys?: string[]) {
            var _keys = keys ? keys : this.getSelectKeysByListForm();
            if (_keys.length > 0) {
                var _strs = _keys.join(",");
                url.Core.AkUrl.Current().openUrl("$WINDEFAULT$" + this.Xml + "$Detail$" + _strs, true);
            }
            else {
                utilFile.Core.Util.Noty("请选择要查看的记录");
            }
        }

        public buttonCommd(name: string,keys?:string[])
        {
            if (!keys) {
                 keys = this.getSelectKeysByListForm();
            }
            //alert(name + "  /r/n " + $.toJSON(key));
            this.emitAppEvent("pPageButton", this.HookId, { right: name, keys: keys });
           // this.emitAppEvent("buttonCommd", this.UniId, { name: name, key: key });
        }

        public singleButtonClick(right: string, key: string[]) {
            if (!key || key.length == 0) {
                key = this.getSelectKeysByListForm();
            }
            super.singleButtonClick(right,key);
           
        }

        public getSelectKeysByListForm():Array<string> 
        {
            var res: Array<string> = [];
            this.ListForm.RowObjList.forEach((r) => {
                if (r.IsSelect) {
                    res.push(r.KeyColumnObj.ControlObj.vmDataValueGet());
                }
            });
           
            return res;
        }

        protected pRefresh() {
            this.search(0);
        }
        public checkBtns() {
            super.checkBtns();
            //this.ButtonObjList
            var _rightList: Array<string[]> = [];
            var _temp: string[] = null ;
            var _select = this.ListForm.RowObjList.forEach((r) => {
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
            this.ButtonObjList.forEach((bt) => {
                if (bt.IsData) {
                    var _old = bt.NoEnable;
                    bt.NoEnable = true;
                    if (_temp) {
                        _temp.forEach((t) => {
                            if (bt.Right == t) {
                                bt.NoEnable = false;
                                
                            }

                        });
                    }
                    if (_old != bt.NoEnable) {
                        bt.forceUpdate("");;
                    }
                }
            });

            
        }

        protected pSetFormConfig(formConfig: PageView.data.IForm): void
        {
            super.pSetFormConfig(formConfig);

            if (formConfig.Name == this.fListFormName && this.ListFormType!= "") {
                
                formConfig.FormType = this.ListFormType;
            }
        }

      //  public NaviColList: baceColFile.Core.BaseColVm[] = [];
        public create(_pageView: PageView.data.IPageView) {
            this.Xml = _pageView.RegName;
            // if (_pageView.Data) {
            this.fListFormName = _pageView.ListFormName;
           // }
            if (_pageView.Data && _pageView.Data[_pageView.SearchFormName]) {
                var dt = _pageView.Data[_pageView.SearchFormName];
            }
            else
            {
                if (_pageView.Data) {
                    _pageView.Data[_pageView.SearchFormName] = [{}];
                }
            }

            if (!this.IsReload && _pageView.Forms &&  _pageView.Forms[_pageView.ListFormName] && _pageView.Forms[_pageView.ListFormName].NavigationColumns) {
                var _navis = _pageView.Forms[_pageView.ListFormName].NavigationColumns;
                if (_navis != null && _navis.length > 0) {
                    var _config: IListNaviDomConfig = {
                        NaviItemList: [],
                        UniId : this.UniId 
                    };
                    _navis.forEach((navi) => {
                       
                        _config.NaviItemList.push({
                            ColConfig: navi,
                            DataSet: _pageView.Data,
                            UniId : this.UniId 
                        });



                    });

                    this.NaviDomObj = new ListNaviDomFile.ListNaviDom.ListNaviDomVm(_config);
                   // this.NaviDomObj = new navi

                }
              
            }

            super.create(_pageView);

            this.FormObjList.forEach((x) => {
                if (x.Name == _pageView.ListFormName) {
                    this.ListForm = x;
                    x.IsNoAdd = true;
                    x.IsNoDel = true;
                    var _g = utilFile.Core.Util.Cast<GridFormFile.ui.GridFormVm>(x);
                    if (_g) _g.IsOnlyTable = true;
                   // x.
                }
                if (x.Name == _pageView.SearchFormName && !this.IsReload) {
                    this.SearchForm = x;
                    x.HasNoBorder = true;
                    x.IsNoAdd = true;
                    x.IsNoDel = true;
                    x.IsSingleRow = true;
                    //this.SearchForm.NoNeedUpdate = true;
                  
                    if (x.RowObjList && x.RowObjList.length > 0) {
                        x.RowObjList[0].getEmit().addListener("BaseRowVm_change", () => {
                            var _isChange = false;
                            if (x.RowObjList[0].ColumnObjList) {
                                x.RowObjList[0].ColumnObjList.forEach((col) => {
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
                                this.SearchForm.IsChange = true;
                                this.IsClearBtnHide = false;
                                this.forceUpdate("");
                            }
                            else {
                                this.SearchForm.IsChange = true;
                                this.IsClearBtnHide = true;
                                this.forceUpdate("");
                            }
                        });
                        if (x.RowObjList[0].ColumnObjList) {

                            x.RowObjList[0].ColumnObjList.forEach((c) => {
                                c.ColumnNum = 2;
                                c.ColumnConfig.ShowType = 2;
                            });
                        }
                    }
                    
                }
                if (this.SearchForm) {
                    this.SearchForm.IsChange = !this.IsReload;
                }
            });

           
           

            this.fCreatePagination(_pageView);
 
        }
   
        public searchPageData(ds: post.Post.IDataSet, formName: string,a:number)
        {
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
                    this.NaviDomObj.NaviItemList.forEach((n) => {
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
            },
                (p) => {
                    try {
                        var _pageView: PageView.data.IPageView = p;

                        this.reSenderData(_pageView);
                    }
                    catch (ex)
                    {
                        alert(ex);
                    }
                });
        }


        public reSenderData(_pageView: PageView.data.IPageView)

        {
            this.IsReload = true;
            var _d0: Date = new Date();

            this.create(_pageView);
            this.IsChange = true;
            if(this.Pagination)
                this.Pagination.IsChange = true;
            if(this.NaviDomObj)
            this.NaviDomObj.IsChange = false;
            // b.FormObjList[0].IsChange = false;
            this.forceUpdate("");
        }

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

        public fCreatePagination(_pageView: PageView.data.IPageView) {

           
           // console.log(this.ListForm);

            //this.Pagination = new tool.PaginationVm();
            if (_pageView.Data) {
                var _dt = _pageView.Data[_pageView.ListFormName + "_PAGER"];
                if (_dt && _dt.length > 0 ) {
                    this.Pagination = new Pagination.tool.PaginationVm();
                    var _row = _dt[0];
                    this.Pagination.PageNo = parseInt(_row["PageIndex"].toString());
                    this.Pagination.PageSize = parseInt(_row["PageSize"].toString());
                    //this.Pagination.PageSize = _row[""];
                    this.Pagination.TotalCount = parseInt(_row["TotalCount"].toString());
                    // this.state.Pagination.VM.TotalPage = Math.ceil(a.Total / a.Size);
                    //this.Pagination.TotalPage = Math.ceil(this.Pagination.TotalCount / this.Pagination.PageSize);

                    // this.Pagination.TotalPage = _row[""];
                    this.Pagination.PageClickEvent = (a: number) => {
                        this.search(a);
                    };

                } else
                {
                    this.Pagination = null; 
                }
            }
            else
                this.Pagination = null;

        }

    }

    export interface IListNaviDomConfig {

        NaviItemList: naviItemFile.ListNaviItemDom.IListNaviItemDomConfig[];
        UniId?: string;

    }

    export class ListPageStates extends basepage.ui.BasePageStates {
       
       // public 

    }
    iocFile.Core.Ioc.Current().RegisterType("LIST", basepage.ui.BasePageVm, ListPageVm);
}