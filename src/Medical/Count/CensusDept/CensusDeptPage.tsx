import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

import Form = require("./CensusDeptGridFormDom");
import DateTimeFile = require("./../../../02col/01single/DateTime");
import Button = require("./../../../05tool/Button")
import data = require("./Data");

export module CensusDeptPage {
    export class CensusDeptPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class CensusDeptPageReact extends basewedPageFile.Web.BaseWebPageReact<CensusDeptPageProps, CensusDeptPageStates, CensusDeptPageAction> implements domCore.IReact {

        public state = new CensusDeptPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="acsScroll">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Hm-center-content">
                    <div className='text-center col-lg-12'>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-group">
                            <label className="col-md-5 col-sm-3 form-control-label text-right" >开始时间：</label>
                            <div className="col-md-7 col-sm-9">
                                {this.props.Vm.BeginDate.intoDom() }
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 form-group">
                            <label className="col-md-5 col-sm-3 form-control-label text-right" >结束时间：</label>
                            <div className="col-md-7 col-sm-9">
                                {this.props.Vm.EndDate.intoDom() }
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 text-center">
                        <a  className="btn btn-primary btn-sm" onClick={() => { this.props.Vm.fun_searchBtn(); } }>统计</a>
                        <a  className={"btn btn-primary btn-sm " } onClick={() => { this.props.Vm.fun_seachClearBtn(); } } >清空</a>
                    </div>
                    <div className="col-lg-12  acs-grids m-t">
                        <div className="Hm-table">
                            {this._tDom(this.props.Vm.GridFormVm) }
                        </div>
                    </div>
                </div>
            </div>;;
        }
    }

    export interface IReactCensusDeptPageVm extends basewedPageFile.Web.BaseWebPageVm {
        GridFormVm: Form.CensusDeptGridFormDom.CensusDeptGridFormDomVm;
        BeginDate: DateTimeFile.ui.DateTimeVm;
        EndDate: DateTimeFile.ui.DateTimeVm;
        fun_searchBtn: Function;
        fun_seachClearBtn: Function;
    }

    export interface ICensusDeptPageConfig {


    }
    export class CensusDeptPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactCensusDeptPageVm {
        public ReactType = CensusDeptPageReact;
        public Title: string = "CensusDeptPage页面;";
        public GridFormVm: Form.CensusDeptGridFormDom.CensusDeptGridFormDomVm;
        public BeginDate: DateTimeFile.ui.DateTimeVm;
        public EndDate: DateTimeFile.ui.DateTimeVm;
        public datalist: Array<data.CensusDept.censusDeptData>;

        public constructor(config?: ICensusDeptPageConfig) {
            super();
            this.BeginDate = new DateTimeFile.ui.DateTimeVm;
            this.EndDate = new DateTimeFile.ui.DateTimeVm;
            this.init();
        }

        private init(config?: ICensusDeptPageConfig) {

            if (this.datalist) {
                var Fromconfig: Form.CensusDeptGridFormDom.ICensusDeptGridFormDomConfig = { datalist: this.datalist };
                this.GridFormVm = new Form.CensusDeptGridFormDom.CensusDeptGridFormDomVm(Fromconfig);
            } else {
                this.GridFormVm = new Form.CensusDeptGridFormDom.CensusDeptGridFormDomVm;
            }
        }

        public fun_searchBtn() {
            var beginDate = this.BeginDate.dataValue();
            var endDate = this.EndDate.dataValue();

            if (beginDate == "") {
                alert("请选中开始统计时间");
            } else {
                urlFile.Core.AkPost("/MedicalCenter/CensusDepartment/CensusDepartment", { StartTime: this.BeginDate.dataValue(), EndTime: this.EndDate.dataValue() }, (a) => {
                    if (a == 1) {
                        alert("开始时间要小于结束时间");
                    } else {
                        this.datalist = a;
                        this.init();
                        this.GridFormVm.IsChange = true;
                        this.GridFormVm.RowList.forEach((a) => { a.IsChange = true });
                        this.GridFormVm.IsMulit = true;
                        this.forceUpdate("");
                    }
                })
            }
        }

        public fun_seachClearBtn() {
            this.BeginDate.dataValueSet("");
            this.EndDate.dataValueSet("");
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class CensusDeptPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class CensusDeptPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactCensusDeptPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("CENSUSDEPTPAGE", basewedPageFile.Web.BaseWebPageVm, CensusDeptPageVm);

}

