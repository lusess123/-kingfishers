import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import pagination = require("./../../../../05tool/Pagination");

export module PersonalPayTable {
    export class PersonalPayTableAction extends domCore.DomAction {
    }

    export class PersonalPayTableReact extends domCore.DomReact<PersonalPayTableProps, PersonalPayTableStates, PersonalPayTableAction> implements domCore.IReact {

        public state = new PersonalPayTableStates();

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
                <div className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-primary-outline">删除</button>
                </div>
            </div>;
        }

        public _initTable(): React.ReactElement<any> {
            return <table className="table table-striped table-bordered table-hover">
                <thead className="thead-default">
                    <tr>
                        <th><i className="fa fa-square-o"></i></th>
                        <th>体检人</th>
                        <th>体检时间</th>
                        <th>缴费时间</th>
                        <th className="text-right">缴费金额（元）</th>
                        <th>单位</th>
                        <th>状态</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>1</span></td>
                        <td>阿骨打-完颜洪烈</td>
                        <td>331002199510135210</td>
                        <td>2016/09/21</td>
                        <td className="text-right">300</td>
                        <td>浙江省杭州市信使网络科技有限公司</td>
                        <td><span className="label label-warning">待缴费</span></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>1</span></td>
                        <td>阿骨打-完颜洪烈</td>
                        <td>331002199510135210</td>
                        <td>2016/09/21</td>
                        <td className="text-right">500</td>
                        <td>浙江省杭州市信使网络科技有限公司</td>
                        <td><span className="label label-default">已缴费</span></td>
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

    export interface IReactPersonalPayTableVm extends domCore.DomVm {

    }

    export interface IPersonalPayTableConfig {


    }

    export class PersonalPayTableVm extends domCore.DomVm implements IReactPersonalPayTableVm {
        public ReactType = PersonalPayTableReact;

        public constructor(config?: IPersonalPayTableConfig) {
            super();

        }

    }
    export class PersonalPayTableStates extends domCore.DomStates {
    }


    export class PersonalPayTableProps extends domCore.DomProps<IReactPersonalPayTableVm>{
    }



}

