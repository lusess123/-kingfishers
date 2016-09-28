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

import NewOrderTableFile = require("./NewOrderTable");
import NewOrderTable = NewOrderTableFile.NewOrderTable.NewOrderTableReact;
import NewOrderTableVm = NewOrderTableFile.NewOrderTable.NewOrderTableVm;

export module NewOrderPage {
    export class NewOrderPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewOrderPageReact extends basewedPageFile.Web.BaseWebPageReact<NewOrderPageProps, NewOrderPageStates, NewOrderPageAction> implements domCore.IReact {

        public state = new NewOrderPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                {this._initHandle() }
                {this._initForm() }
                {this._initSForm() }
                {this.props.Vm.NewOrderTableObj.intoDom() }
                {this._initBottomBtn() }
            </div>;
        }

        public _initHandle(): React.ReactElement<any> {

            return <div className="YSm-handle clearfix">
                <div className="col-lg-6 col-md-6 YSm-search">
                    <input className="col-lg-11 col-md-10" type="text" placeholder="输入身份证、体检号、档案号查询" />
                    <a className="col-lg-1 col-md-2 btn btn-primary">查询</a>
                </div>
            </div>;
        }

        public _initForm(): React.ReactElement<any> {
            return <form className="YSm-form">
                <div className="row form-inline">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                        <label className="col-md-5 col-sm-3 form-control-label text-right" >体检ID：</label>
                        <div className="col-md-7 col-sm-9"><input className="form-control" type="text"/></div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                        <label className="col-md-5 col-sm-3 form-control-label text-right" >档案号：</label>
                        <div className="col-md-7 col-sm-9"><input className="form-control" type="text"/></div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                        <label className="col-md-5 col-sm-3 form-control-label text-right required" >会员类型：</label>
                        <div className="col-md-7 col-sm-9">
                            <select className="form-control">
                                <option value="非会员">非会员</option>
                                <option value="普通会员">普通会员</option>
                                <option value="VIP会员">VIP会员</option>
                            </select>
                         </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                        <label className="col-md-5 col-sm-3 form-control-label text-right required" >姓名：</label>
                        <div className="col-md-7 col-sm-9"><input className="form-control" type="text"/></div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                        <label className="col-md-5 col-sm-3 form-control-label text-right required" >身份证：</label>
                        <div className="col-md-7 col-sm-9"><input className="form-control" type="text"/></div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                        <label className="col-md-5 col-sm-3 form-control-label text-right required" >年龄：</label>
                        <div className="col-md-7 col-sm-9"><input className="form-control" type="text"/></div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                        <label className="col-md-5 col-sm-3 form-control-label text-right" >出生日期：</label>
                        <div className="col-md-7 col-sm-9"><input className="form-control" type="text"/></div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                        <label className="col-md-5 col-sm-3 form-control-label text-right required" >联系电话：</label>
                        <div className="col-md-7 col-sm-9"><input className="form-control" type="text"/></div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                        <label className="col-md-5 col-sm-3 form-control-label text-right" >民族：</label>
                        <div className="col-md-7 col-sm-9"><input className="form-control" type="text"/></div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                        <label className="col-md-5 col-sm-3 form-control-label text-right" >职务：</label>
                        <div className="col-md-7 col-sm-9"><input className="form-control" type="text"/></div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                        <label className="col-md-5 col-sm-3 form-control-label text-right required" >工作单位：</label>
                        <div className="col-md-7 col-sm-9"><input className="form-control" type="text"/></div>
                    </div>
                </div>
            </form>
        }

        public _initSForm(): React.ReactElement<any> {
            return <form className="YSm-form-outline">
                <div className="row form-inline">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                        <label className="col-md-5 col-sm-3 form-control-label text-right" >体检类型：</label>
                        <div className="col-md-7 col-sm-9">
                            <select className="form-control">
                                <option value="请选择">请选择</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                        <label className="col-md-5 col-sm-3 form-control-label text-right" >来检时间：</label>
                        <div className="col-md-7 col-sm-9"><input className="form-control" type="text"/></div>
                    </div>
                </div>
            </form>;
        }

        public _initHistory(): React.ReactElement<any> {
            return <div className="YSm-medical">
                <a className="btn">个人病史问卷<i className="fa fa-caret-up"></i></a>
                {this._initHistoryTable()}
            </div>;
        }

        public _initHistoryTable(): React.ReactElement<any> {
            return <div className="YSm-medical-content">
                <div className="YSm-item clearfix">
                    <div className="YSu-title pull-left">曾经患过/当前患有的疾病</div>
                    <ul className="pull-left">
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>无</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>高血压</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>冠心病（心绞痛、心肌梗塞）</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>肺气肿</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>肺结核</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>哮喘</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>脑出血</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>脑血栓</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>高脂血症</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>甲状腺疾病</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>肾结石</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>骨质疏松</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>2型糖尿病</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>肥胖</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>慢性胃炎</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>宫颈疾病（女）</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>乳腺增生（女）</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>前列腺增生（男）</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>胃/十二指肠溃疡</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>脂肪肝</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>慢性支气管炎</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>前列腺炎（男）</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>胃癌</li>
                        <li className="col-xl-2 col-lg-2 col-md-2"><input type="checkbox"/>恶性肿瘤（部位）</li>
                        <li className="col-xl-12 col-lg-12 col-md-12">其他<textarea></textarea></li>
                    </ul>
                </div>
            </div>;
        }


        public _initBottomBtn(): React.ReactElement<any> {
            return <div className="col-lg-12 col-md-12 text-center">
                    <a className="btn btn-danger-outline">确认预约</a>
                    <a className="btn btn-danger">开单</a>
            </div>;
        }

        public _initBottom(): React.ReactElement<any> {
            return <div className="col-lg-12 col-md-12 YSm-fixed-bottom clearfix">
                <div className="pull-left">
                    <span>合计检查<b>5</b>项，折扣 <b>7.5</b>, 总费用<strong>62615.00</strong>元</span>
                    <a className="btn btn-danger-outline">抹零</a>
                </div>
                <div className="pull-right">
                    <a className="btn btn-danger-outline">确认预约</a>
                    <a className="btn btn-danger">开单</a>
                </div>
            </div>;
        }
    }

    export interface IReactNewOrderPageVm extends basewedPageFile.Web.BaseWebPageVm {
       NewOrderTableObj: NewOrderTableVm;
    }

    export interface INewOrderPageConfig {


    }
    export class NewOrderPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactNewOrderPageVm {
        public ReactType = NewOrderPageReact;

        public NewOrderTableObj: NewOrderTableVm = new NewOrderTableVm();

        public constructor(config?: INewOrderPageConfig) {
            super();

        }

        private init(config: INewOrderPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class NewOrderPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewOrderPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactNewOrderPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NEWORDERPAGE", basewedPageFile.Web.BaseWebPageVm, NewOrderPageVm);

}

