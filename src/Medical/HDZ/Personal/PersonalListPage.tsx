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

import PersonalTableFile = require("./PersonalTable");
import PersonalTable = PersonalTableFile.PersonalTable.PersonalTableReact;
import PersonalTableVm = PersonalTableFile.PersonalTable.PersonalTableVm;


export module PersonalListPage {
    export class PersonalListPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class PersonalListPageReact extends basewedPageFile.Web.BaseWebPageReact<PersonalListPageProps, PersonalListPageStates, PersonalListPageAction> implements domCore.IReact {

        public state = new PersonalListPageStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                {this._initQuantity() }
                {this._initHandle() }
                {this.props.Vm.PersonalTableObj.intoDom()}
            </div>;
        }

        public _initQuantity(): React.ReactElement<any> {
            return <div className="YSm-quantity clearfix">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
                    <div className="panel panel-danger">
                        <p>总预约量：</p>
                        <h2>25666</h2>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
                    <div className="panel panel-info">
                        <p>今日预约量：</p>
                        <h2>5666</h2>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className="panel panel-success">
                        <p>我的预约量：</p>
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
                <a className="btn btn-primary" href="#$NewOrderPage$"><i className="fa fa-plus"></i>新增预约</a>
                <a href="" className="YSu-link">历史数据查询</a>
            </div>;
        }
        






    }
    export interface IPersonalListPageConfig {


    }
    export class PersonalListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = PersonalListPageReact;

        public PersonalTableObj: PersonalTableVm = new PersonalTableVm();


        public constructor(config?: IPersonalListPageConfig) {
            super();

        }

        private init(config: IPersonalListPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class PersonalListPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class PersonalListPageProps extends basewedPageFile.Web.BaseWebPageProps<PersonalListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("PERSONALLISTPAGE", basewedPageFile.Web.BaseWebPageVm, PersonalListPageVm);

}
