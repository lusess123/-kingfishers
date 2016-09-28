import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import pagination = require("./../../../../05tool/Pagination");

export module GroupPayTable {
    export class GroupPayTableAction extends domCore.DomAction {
    }

    export class GroupPayTableReact extends domCore.DomReact<GroupPayTableProps, GroupPayTableStates, GroupPayTableAction> implements domCore.IReact {

        public state = new GroupPayTableStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-table">

                    {this._initBtnGroup() }

                    <div className="table-responsive">{this._initTable() }</div>

                    {this._initPager() }
                </div>;
        }

        public _initBtnGroup(): React.ReactElement<any> {
            return <div className="YSm-table-btngroup">
                <a className="btn btn-sm btn-danger">￥缴费</a>
                <a className="btn btn-sm btn-secondary">团体退款</a>
                <div className="btn-group btn-group-sm">
                    <a className="btn btn-primary-outline">删除</a>
                </div>
            </div>;
        }

        public _initTable(): React.ReactElement<any> {
            return <table className="table table-striped table-bordered table-hover">
                <thead className="thead-default">
                    <tr>
                        <th><i className="fa fa-square-o"></i></th>
                        <th>批次</th>
                        <th>体检时间</th>
                        <th>缴费时间</th>
                        <th className="text-right">缴费金额（元）</th>
                        <th>单位</th>
                        <th>体检状态</th>
                        <th>状态</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>1</span></td>
                        <td>第4000次</td>
                        <td>331002199510135210</td>
                        <td>2016/09/21</td>
                        <td className="text-right">300</td>
                        <td>浙江省杭州市信使网络科技有限公司</td>
                        <td><span className="label label-default">已完成</span></td>
                        <td><span className="label label-warning">待缴费</span></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>1</span></td>
                        <td>第252次</td>
                        <td>331002199510135210</td>
                        <td>2016/09/21</td>
                        <td className="text-right">500</td>
                        <td>浙江省杭州市信使网络科技有限公司</td>
                        <td><span className="label label-danger">未完成</span></td>
                        <td><span className="label label-default">未缴费</span></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>3</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-right"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>3</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-right"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>3</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-right"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>3</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-right"></td>
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


        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactGroupPayTableVm extends domCore.DomVm {

    }

    export interface IGroupPayTableConfig {


    }

    export class GroupPayTableVm extends domCore.DomVm implements IReactGroupPayTableVm {
        public ReactType = GroupPayTableReact;

        public constructor(config?: IGroupPayTableConfig) {
            super();

        }

    }
    export class GroupPayTableStates extends domCore.DomStates {
    }


    export class GroupPayTableProps extends domCore.DomProps<IReactGroupPayTableVm>{
    }



}
