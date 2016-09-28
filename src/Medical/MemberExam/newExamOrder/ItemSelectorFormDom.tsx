import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import pagination = require("./../../../05tool/Pagination");
import React = require("react");
import ReactDOM = require("react-dom");
import buttonFile = require("./../../../05tool/Button");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
import Data = require("./../data");
import selectorData = require("./data");
import rowFile = require("./projGridRowDom");

export module ItemSelectorFormDom {
    export class ItemSelectorFormDomAction extends domCore.DomAction { }
    export class ItemSelectorFormDomReact extends domCore.DomReact<ItemSelectorFormDomProps, ItemSelectorFormDomStates, ItemSelectorFormDomAction> implements domCore.IReact {
        public state = new ItemSelectorFormDomStates();
        public pSender(): React.ReactElement<any> {
            return <div className="YSm-modal-left">
                <div className="YSm-search">
                    <div className="input-group">
                        <input type="text" className="Hg-width YSu-border-blue " placeholder="输入科室、项目查询" value={this.props.Vm.SearchText} onChange={(e) => { this.fun_linkText(e); } }/>
                        <div className="input-group-addon"><i className="fa fa-search" onClick={() => this.searchClick() }></i></div>
                    </div>
                </div>
                <div className="Hm-table table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-default">
                            <tr>
                                <th>选择</th>
                                <th>科室</th>
                                <th>项目</th>
                                <th>价格（元）</th>
                            </tr>
                        </thead>
                        {this.props.Vm.RowList.map((r) => {
                            return r.intoDom()
                        }) }
                    </table>
                    <div className="bottomPager">{this._tDom(this.props.Vm.PaginationVm) }</div>
                </div>
            </div>
        }

        private searchClick()
        {
            this.props.Vm.search(0);
        }

        private fun_linkText(e) {
            var _val = e.target["value"];
            this.props.Vm.SearchText = _val;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }
    export interface IItemSelectorFormDomConfig{
        PagerListData: selectorData.ExamPackageSelectorData.IItemPagerListData;
        UniId: string;

    }
    export class ItemSelectorFormDomVm extends domCore.DomVm {

        public ReactType = ItemSelectorFormDomReact;
        public RowList: rowFile.ProjGridRowDom.ProjGridRowDomVm[] = [];
        public PaginationVm: pagination.tool.PaginationVm;
        public PagerListData: selectorData.ExamPackageSelectorData.IItemPagerListData;
        public SearchText: string;


        public constructor(config?: IItemSelectorFormDomConfig) {
            super();
             if (config)
             {
                 this.UniId = config.UniId;
                 this.init(config);
            }
         
        }

        public init(config?: IItemSelectorFormDomConfig)
        {
            this.PagerListData = config.PagerListData;
            this.PaginationVm = new pagination.tool.PaginationVm();
            var pager = this.PagerListData.Pager;
            this.PaginationVm.PageNo = pager.PageNo;
            this.PaginationVm.PageSize = pager.PageSize;
            this.PaginationVm.TotalCount = pager.TotalCount;
            this.PaginationVm.isPartHidden = true;
            this.PaginationVm.PageClickEvent = (pageIndex) => {
                this.search(pageIndex);
            }
            if (this.PagerListData.ListData) {
                this.RowList = [];
                this.PagerListData.ListData.forEach((data) => {
                    var rowVm = new rowFile.ProjGridRowDom.ProjGridRowDomVm({ RowData: data, UniId: this.UniId });
                    this.RowList.push(rowVm);
                });
            }
        }

        public search(pageIndex:number)
        {
            var _page = { PageNo: pageIndex };

            urlFile.Core.AkPost("/MedicalCenter/PackageSelector/SearchExamItems", {
                searchText: this.SearchText,
                pager: JSON.stringify(_page),
            }, (a) => {
                if (a && a.Data) {
                    var pageConfig: IItemSelectorFormDomConfig = { PagerListData: a.Data, UniId: this.UniId };
                    this.init(pageConfig);
                    this.IsChange = true;
                    this.forceUpdate("");
                   // this.emitAppEvent("pickerContainerClearItem", this.UniId);
                }

            });
        }

    }
    export class ItemSelectorFormDomStates extends domCore.DomStates { }
    export class ItemSelectorFormDomProps extends domCore.DomProps<ItemSelectorFormDomVm>{ }
}