import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import pagination = require("./../../../05tool/Pagination");

export module NewOrderTable {
    export class NewOrderTableAction extends domCore.DomAction {
    }

    export class NewOrderTableReact extends domCore.DomReact<NewOrderTableProps, NewOrderTableStates, NewOrderTableAction> implements domCore.IReact {

        public state = new NewOrderTableStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-table">

                {this._initBtnGroup() }

                <div className="table-responsive">{this._initTable() }</div>

                {this._initPager() }
            </div>;
        }


        public _initBtnGroup(): React.ReactElement<any> {
            return <div className="YSm-table-btngroup">
                <a className="btn btn-sm btn-primary" onClick={() => { this.newOpt("hu");}}><i className="fa fa-plus"></i>新增</a>
                <div className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-primary-outline">删除</button>
                    <button type="button" className="btn btn-primary-outline">详情</button>
                    <button type="button" className="btn btn-primary-outline">编辑</button>
                </div>
            </div>;
        }

        public _initTable(): React.ReactElement<any> {
            return <table className="table table-striped table-bordered table-hover">
                <thead className="thead-default">
                    <tr>
                        <th><i className="fa fa-square-o"></i></th>
                        <th>预约套餐</th>
                        <th>预约项目</th>
                        <th>检查科室</th>
                        <th>说明</th>
                        <th>价格</th>
                        <th>折扣</th>
                        <th>最终价格（元）</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>1</span></td>
                        <td>超实惠全家福体检套餐1200元</td>
                        <td>心</td>
                        <td>内科</td>
                        <td></td>
                        <td>500</td>
                        <td>.58</td>
                        <td>290</td>
                        <td>删除</td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>2</span></td>
                        <td>超实惠全家福体检套餐1200元</td>
                        <td>心</td>
                        <td>内科</td>
                        <td></td>
                        <td>500</td>
                        <td>.58</td>
                        <td>290</td>
                        <td>删除</td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>1</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>1</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>1</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>1</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        }


        public _initPager(): React.ReactElement<any> {
            var pagerVm = new pagination.tool.PaginationVm();

            pagerVm.PageNo = 0;
            pagerVm.PageSize = 5;
            pagerVm.TotalCount = 20;
            pagerVm.isPartHidden = true;
            return pagerVm.intoDom();

        }


        public newOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$winPersonalNewPage$" + vals + "$", true);
        }

        public detailOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$wingroupdetail$" + vals + "$", true);
        }

        public updateOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$wingroupupdate$" + vals + "$", false);
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactNewOrderTableVm extends domCore.DomVm {

    }

    export interface INewOrderTableConfig {


    }

    export class NewOrderTableVm extends domCore.DomVm implements IReactNewOrderTableVm {
        public ReactType = NewOrderTableReact;

        


        public constructor(config?: INewOrderTableConfig) {
            super();

        }

    }
    export class NewOrderTableStates extends domCore.DomStates {
    }


    export class NewOrderTableProps extends domCore.DomProps<IReactNewOrderTableVm>{
    }



}


