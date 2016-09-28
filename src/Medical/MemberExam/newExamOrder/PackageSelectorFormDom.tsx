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
import dataFile = require("./../data");
import selectorData = require("./data");
import rowFile = require("./mealGridRowDom");

export module PackageSelectorFormDom {
    export class PackageSelectorFormDomAction extends domCore.DomAction { }
    export class PackageSelectorFormDomReact extends domCore.DomReact<PackageSelectorFormDomProps, PackageSelectorFormDomStates, PackageSelectorFormDomAction> implements domCore.IReact {
        public state = new PackageSelectorFormDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="clearfix">
                <div className="col-lg-8 col-md-8 YSm-modal-left">
                    <div className="YSm-search">
                        <div className="input-group">
                            <input type="text" className="Hg-width" placeholder="输入套餐名、简码查询" value={this.props.Vm.SearchText} onChange={(e) => { this.fun_linkText(e); } }/>
                            <div className="input-group-addon"><i className="fa fa-search" onClick={() => this.searchClick() }></i></div>
                        </div>
                    </div>
                    <div className="Hm-table table-responsive">
                        <table className="table table-striped table-bordered table-hover">
                            <thead className="thead-default">
                                <tr>
                                    <th>选择</th>
                                    <th>套餐</th>
                                    <th>套餐描述</th>
                                    <th>个人价格（元）</th>
                                    <th>团体价格（元）</th>
                                    <th>套餐项目</th>
                                </tr>
                            </thead>
                            {this.props.Vm.RowList.map((r) => {
                                return r.intoDom()
                            }) }
                        </table>
                        <div className="bottomPager">{this._tDom(this.props.Vm.PaginationVm) }</div>
                    </div>

                </div>
                <div className="col-lg-4 col-md-4 YSm-modal-right">
                    <p className="YSu-title">套餐项目</p>
                    <ul className="nav nav-pills">
                        {
                            this.props.Vm.PackageItemList.map((item) => {
                                return <li className="nav-item"><a className="nav-link">{item.Name}</a></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        }

        private searchClick() {
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
    export interface IPackageSelectorFormDomConfig {
        PagerListData: selectorData.ExamPackageSelectorData.IPackagePagerListData;
        UniId: string;
        IsGroup?: boolean;
    }
    export class PackageSelectorFormDomVm extends domCore.DomVm {

        public ReactType = PackageSelectorFormDomReact;
        public RowList: rowFile.MealGridRowDom.MealGridRowDomVm[] = [];
        public PaginationVm: pagination.tool.PaginationVm;
        public PagerListData: selectorData.ExamPackageSelectorData.IPackagePagerListData;
        public SearchText: string;
        public PackageItemList: dataFile.ExamOrder.IExamItemData[] = [];


        public constructor(config?: IPackageSelectorFormDomConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
                this.init(config);
            }
            this.listenAppEvent("memberexam-packageselector", this.UniId, (packageId: string) => {
                urlFile.Core.AkPost("/MedicalCenter/PackageSelector/FetchPackageExamItems", { packageId: packageId }, (data) => {
                    var _data = data.Data;
                    if (_data) {
                        this.PackageItemList = _data;
                        this.forceUpdate("");
                    }
                });
            });
        }

        public init(config?: IPackageSelectorFormDomConfig) {
            this.PagerListData = config.PagerListData;
            this.PaginationVm = new pagination.tool.PaginationVm();
            var pager = this.PagerListData.Pager;
            this.PaginationVm.PageNo = pager.PageNo;
            this.PaginationVm.PageSize = pager.PageSize;
            this.PaginationVm.TotalCount = pager.TotalCount;
            this.PaginationVm.isPartHidden = true;
            this.PaginationVm.IsPageSizeHidden = true;
            this.PaginationVm.PageClickEvent = (pageIndex) => {
                this.search(pageIndex);
            }
            if (this.PagerListData.ListData) {
                this.RowList = [];
                this.PagerListData.ListData.forEach((data) => {
                    var rowVm = new rowFile.MealGridRowDom.MealGridRowDomVm({ RowData: data, UniId: this.UniId, IsGroup: config.IsGroup });
                    this.RowList.push(rowVm);
                });
            }
        }

        public search(pageIndex: number) {
            var _page = { PageNo: pageIndex };

            urlFile.Core.AkPost("/MedicalCenter/PackageSelector/SearchExamPackages", {
                searchText: this.SearchText,
                pager: JSON.stringify(_page),
            }, (a) => {
                if (a && a.Data) {
                    var pageConfig: IPackageSelectorFormDomConfig = { PagerListData: a.Data, UniId: this.UniId };
                    this.init(pageConfig);
                    this.IsChange = true;
                    this.forceUpdate("");
                }

            });
        }
    }
    export class PackageSelectorFormDomStates extends domCore.DomStates { }
    export class PackageSelectorFormDomProps extends domCore.DomProps<PackageSelectorFormDomVm>{ }
}