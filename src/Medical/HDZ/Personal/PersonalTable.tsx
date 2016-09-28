import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import pagination = require("./../../../05tool/Pagination");

export module PersonalTable {
    export class PersonalTableAction extends domCore.DomAction {
    }

    export class PersonalTableReact extends domCore.DomReact<PersonalTableProps, PersonalTableStates, PersonalTableAction> implements domCore.IReact {

        public state = new PersonalTableStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-table">

                {this._initBtnGroup() }

                <div className="table-responsive">{this._initTable() }</div>

                {this._initPager()}
            </div>;
        }


        public _initBtnGroup(): React.ReactElement<any> {
            return <div className="YSm-table-btngroup">
                <a className="btn btn-sm btn-primary">登记</a>
                <div className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-primary-outline">删除</button>
                    <button type="button" className="btn btn-primary-outline">编辑</button>
                </div>
            </div>;
        }

        public _initTable(): React.ReactElement<any> {
            return <table className="table table-striped table-bordered table-hover">
                <thead className="thead-default">
                    <tr>
                        <th><i className="fa fa-square-o"></i></th>
                        <th>预约人</th>
                        <th>身份证</th>
                        <th>来检时间</th>
                        <th>预约套餐</th>
                        <th>预约项目</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>1</span></td>
                        <td>阿骨打-完颜洪烈</td>
                        <td>331002199510135210</td>
                        <td>2016/09/21</td>
                        <td>2B喉科全家福套餐</td>
                        <td>生化五项检查，心，肝，胆，胃，甲状腺，颈动脉粥样硬化，骨质疏松以及癌症筛查……</td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>2</span></td>
                        <td>阿骨打-完颜洪烈</td>
                        <td>331002199510135210</td>
                        <td>2016/09/21</td>
                        <td>2B喉科全家福套餐</td>
                        <td>生化五项检查，心，肝，胆，胃，甲状腺，颈动脉粥样硬化，骨质疏松以及癌症筛查……</td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>3</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>3</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>3</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>3</span></td>
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

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IPersonalTableConfig {


    }

    export class PersonalTableVm extends domCore.DomVm {
        public ReactType = PersonalTableReact;



        public constructor(config?: IPersonalTableConfig) {
            super();

        }

    }
    export class PersonalTableStates extends domCore.DomStates {
    }


    export class PersonalTableProps extends domCore.DomProps<PersonalTableVm>{
    }



}