import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import pagination = require("./../../../05tool/Pagination");

export module MoneyTable {
    export class MoneyTableAction extends domCore.DomAction {
    }

    export class MoneyTableReact extends domCore.DomReact<MoneyTableProps, MoneyTableStates, MoneyTableAction> implements domCore.IReact {

        public state = new MoneyTableStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-table">
                <div className="YSm-table-title"><i className="fa fa-star Hs-red"></i><b>缴费号：123456789</b></div>

                {this._initBtnGroup() }

                <div className="table-responsive">{this._initTable() }</div>

                {this._initPager() }

                {this._initNote() }

                {this._initBottom()}
            </div>;
        }

        public _initBtnGroup(): React.ReactElement<any> {
            return <div className="YSm-table-btngroup">
                <span className="YSu-name">收费项目明细</span>
                <div className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-primary-outline">退项</button>
                    <button type="button" className="btn btn-primary-outline">取消</button>
                </div>
            </div>;
        }

        public _initTable(): React.ReactElement<any> {
            return <table className="table table-striped table-bordered table-hover">
                <thead className="thead-default">
                    <tr>
                        <th><i className="fa fa-square-o"></i></th>
                        <th>体检项目</th>
                        <th>价格</th>
                        <th>折扣</th>
                        <th className="text-right">最终价格</th>
                        <th>状态</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>1</span></td>
                        <td>阿骨打-完颜洪烈</td>
                        <td>331002199510135210</td>
                        <td>2016/09/21</td>
                        <td className="text-right">2B喉科全家福套餐</td>
                        <td>生化五项检查，心，肝，胆，胃，甲状腺，颈动脉粥样硬化，骨质疏松以及癌症筛查……</td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>2</span></td>
                        <td>阿骨打-完颜洪烈</td>
                        <td>331002199510135210</td>
                        <td>2016/09/21</td>
                        <td className="text-right">2B喉科全家福套餐</td>
                        <td>生化五项检查，心，肝，胆，胃，甲状腺，颈动脉粥样硬化，骨质疏松以及癌症筛查……</td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>3</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-right"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>3</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-right"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>3</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-right"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-square-o"></i><span>3</span></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-right"></td>
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

        public _initNote(): React.ReactElement<any> {
           return <div className="YSm-bill">
               <div className="form-group  form-inline clearfix">
                   <label className="form-control-label pull-left">是否需要发票：</label>
                   <div className="form-control-label pull-left">
                        <div className="radio pull-left"><label><input type="radio" value=""/>是</label></div>
                        <div className="radio pull-left"><label><input type="radio" value=""/>否</label></div>
                   </div>
                </div>
                <form className="clearfix">
                   <div className="col-lg-3 col-md-3 form-group  form-inline clearfix">
                       <label className="col-md-5 col-sm-3 form-control-label  text-right">发票金额：</label>
                       <div className="col-md-7 col-sm-9"><input type="text" className="form-control" /></div>
                   </div>
                   <div className="col-lg-3 col-md-3 form-group  form-inline clearfix">
                       <label className="col-md-5 col-sm-3 form-control-label  text-right">发票类型：</label>
                       <div className="col-md-7 col-sm-9"><input type="text" className="form-control" /></div>
                   </div>
                   <div className="col-lg-3 col-md-3 form-group  form-inline clearfix">
                       <label className="col-md-5 col-sm-3 form-control-label  text-right">发票号：</label>
                       <div className="col-md-7 col-sm-9"><input type="text" className="form-control" /></div>
                   </div>
                   <div className="col-lg-3 col-md-3 form-group  form-inline clearfix">
                       <label className="col-md-5 col-sm-3 form-control-label  text-right">发票抬头：</label>
                       <div className="col-md-7 col-sm-9"><input type="text" className="form-control" /></div>
                   </div>
               </form>
            </div>
        }

        public _initBottom(): React.ReactElement<any> {
            return <div className="YSm-fixed-bottom clearfix">
                <div className="pull-left">
                    <span>收费金额<b>89</b>元，缴纳费用 <b>100</b>元，应找零<b>11</b>元</span>
                </div>
                <div className="pull-right">
                    <a className="btn btn-danger">确认收费</a>
                </div>
            </div>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactMoneyTableVm extends domCore.DomVm {

    }

    export interface IMoneyTableConfig {


    }

    export class MoneyTableVm extends domCore.DomVm implements IReactMoneyTableVm {
        public ReactType = MoneyTableReact;

        public constructor(config?: IMoneyTableConfig) {
            super();
          //  alert(123);
          

        }

    }
    export class MoneyTableStates extends domCore.DomStates {
    }


    export class MoneyTableProps extends domCore.DomProps<IReactMoneyTableVm>{
    }



}


