import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

import MoneyTableFile = require("./MoneyTable");
import MoneyTable = MoneyTableFile.MoneyTable.MoneyTableReact;
import MoneyTableVm = MoneyTableFile.MoneyTable.MoneyTableVm;

export module MoneyListPage {
    export class MoneyListPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class MoneyListPageReact extends basewedPageFile.Web.BaseWebPageReact<MoneyListPageProps, MoneyListPageStates, MoneyListPageAction> implements domCore.IReact {

        public state = new MoneyListPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                {this._initQuantity() }
                {this._initHandle() }
                {this.props.Vm.MoneyTableObj.intoDom() }
            </div>;
        }

        public _initQuantity(): React.ReactElement<any> {
            return <div className="YSm-quantity clearfix">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
                    <div className="panel panel-danger">
                        <p>今日缴费（元）：</p>
                        <h2>25666</h2>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
                    <div className="panel panel-info">
                        <p>已收费（元）：</p>
                        <h2>5666</h2>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="panel panel-success">
                        <p>未收费（元）：</p>
                        <h2>66</h2>
                    </div>
                </div>
            </div>;
        }

        public _initHandle(): React.ReactElement<any> {

            return <div className="YSm-handle">
                <div className="col-lg-6 col-md-6 YSm-search">
                    <input className="col-lg-11 col-md-10" type="text" placeholder="输入身份证、体检号、档案号查询" />
                    <a className="col-lg-1 col-md-2 btn btn-primary">查询</a>
                </div>
                <a href="#$PayListPage$" className="btn YSu-link">缴费列表</a>
            </div>;
        }




    }

    export interface IReactMoneyListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        MoneyTableObj:  MoneyTableFile.MoneyTable.MoneyTableVm;
    }

    export interface IMoneyListPageConfig {


    }
    export class MoneyListPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactMoneyListPageVm {
        public ReactType = MoneyListPageReact;

        public MoneyTableObj: MoneyTableVm = new MoneyTableFile.MoneyTable.MoneyTableVm();

        public constructor(config?: IMoneyListPageConfig) {
            super();

            this.listenAppEvent("", "Hull-Menu-Toggle", (a) => {
               // alert(a);
                // var _$dom = $(ReactDOM.findDOMNode());
                if (a) {
                    $(".YSm-fixed-bottom").removeClass("col-lg-10").addClass("col-lg-12 Hg-default-left ");
                }
                else {
                    $(".YSm-fixed-bottom").removeClass("col-lg-12 Hg-default-left").addClass("col-lg-10");
                }
            });
        }

        private init(config: IMoneyListPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class MoneyListPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class MoneyListPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactMoneyListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("MONEYLISTPAGE", basewedPageFile.Web.BaseWebPageVm, MoneyListPageVm);

}
