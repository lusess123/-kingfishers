import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import pagination = require("./../../../../05tool/Pagination");

export module PersonalMTable {
    export class PersonalMTableAction extends domCore.DomAction {
    }

    export class PersonalMTableReact extends domCore.DomReact<PersonalMTableProps, PersonalMTableStates, PersonalMTableAction> implements domCore.IReact {

        public state = new PersonalMTableStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="table-responsive">{this._initTable() }</div>

                {this._initPager() }
            </div>;
        }


        public _initTable(): React.ReactElement<any> {
            return <table className="table table-striped table-bordered table-hover">
                <thead className="thead-default">
                    <tr>
                        <th><i className="fa fa-square-o"></i></th>
                        <th>分组名称</th>
                        <th>年龄区间</th>
                        <th>性别</th>
                        <th>婚姻状况</th>
                        <th>职务条件</th>
                        <th>操作</th>
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
                        <td><a className="btn btn-primary-outline">修改</a><a className="btn btn-danger-outline">删除</a></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>2</span></td>
                        <td>阿骨打-完颜洪烈</td>
                        <td>331002199510135210</td>
                        <td>2016/09/21</td>
                        <td>2B喉科全家福套餐</td>
                        <td>生化五项检查，心，肝，胆，胃，甲状腺，颈动脉粥样硬化，骨质疏松以及癌症筛查……</td>
                        <td>2B喉科全家福套餐</td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>3</span></td>
                        <td></td>
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
                        <td></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>3</span></td>
                        <td></td>
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
                        <td></td>
                    </tr>
                </tbody>
            </table>;
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

    export interface IReactPersonalMTableVm extends domCore.DomVm {

    }

    export interface IPersonalMTableConfig {


    }

    export class PersonalMTableVm extends domCore.DomVm implements IReactPersonalMTableVm {
        public ReactType = PersonalMTableReact;

        public constructor(config?: IPersonalMTableConfig) {
            super();

        }

    }
    export class PersonalMTableStates extends domCore.DomStates {
    }


    export class PersonalMTableProps extends domCore.DomProps<IReactPersonalMTableVm>{
    }



}


