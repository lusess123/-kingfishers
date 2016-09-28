import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import dateFile = require("./../../../../02col/01single/Date");
import SingleFile = require("./../../../../02col/03selector/selector");

export module ReportElectricalFaultCategorySearchFormDom {
    export class ReportElectricalFaultCategorySearchFormDomAction extends domCore.DomAction {
    }

    export class ReportElectricalFaultCategorySearchFormDomReact extends domCore.DomReact<ReportElectricalFaultCategorySearchFormDomProps, ReportElectricalFaultCategorySearchFormDomStates, ReportElectricalFaultCategorySearchFormDomAction> implements domCore.IReact {

        public state = new ReportElectricalFaultCategorySearchFormDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hm-search-panel Hs-fff clearfix">
                <form className="ask-search Hu-dashed-line clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="pull-left Hu-label"><label  className="pull-right">电器：</label></div>
                        <div className="col-md-8">{this.props.Vm.BrandVm.intoDom() }</div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="pull-left Hu-label"><label  className="pull-right">年份：</label></div>
                        <div className="col-md-8">{this.props.Vm.MonthVm.intoDom() }</div>
                    </div>
                </form>
                <div className="col-xs-12 text-center mt10 mb10">
                    <button  className="btn btn-primary btn-sm icon-search fa fa-search" title="搜索"onClick={() => { this.fun_searchBtn(); } }></button>
                    <button  className="btn Hs-btn-trash btn-sm icon-trash fa fa-trash-o" title="清空" onClick={() => { this.fun_seachClearBtn(); } } ></button>
                </div>
            </div>
        }

        private fun_linkCode(e) {
            var _val = e.target["value"];
            this.props.Vm.SearchSimpleCode = _val;
            if (!_val || _val == "") {
                this.props.Vm.IsHideClearBtn = true;
            }
            else {
                this.props.Vm.IsHideClearBtn = false;
            }
            this.forceUpdate();
        }

        private fun_linkName(e) {
            var _val = e.target["value"];
            this.props.Vm.SearchName = _val;
            if (!_val || _val == "") {
                this.props.Vm.IsHideClearBtn = true;
            }
            else {
                this.props.Vm.IsHideClearBtn = false;
            }
            this.forceUpdate();
        }

        private fun_seachClearBtn() {
            this.props.Vm.SearchSimpleCode = "";
            this.props.Vm.SearchName = "";
            this.props.Vm.IsHideClearBtn = true;
            this.props.Vm.loadPageData(0);
        }

        private fun_searchBtn() {
            this.props.Vm.loadPageData(0);
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReportElectricalFaultCategorySearchFormDomConfig {

        UniId: string;
    }

    export class ReportElectricalFaultCategorySearchFormDomVm extends domCore.DomVm {
        public ReactType = ReportElectricalFaultCategorySearchFormDomReact;
        public SearchSimpleCode: string;
        public SearchName: string;
        public IsHideClearBtn: boolean = true;
        public UniId: string = "";
        public MonthVm: dateFile.ui.DateVm;
        public BrandVm: SingleFile.ui.SelectorVm;

        public constructor(config?: IReportElectricalFaultCategorySearchFormDomConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
            }
            this.MonthVm = new dateFile.ui.DateVm();
            this.BrandVm = new SingleFile.ui.SelectorVm();
            this.BrandVm.RegName = "InvoivingFaultCategoryCodeTableB";

        }

        public loadPageData(pageIndex: number) {
            this.emitAppEvent("TB/Report/Test/Test", this.UniId, pageIndex);
        }

    }
    export class ReportElectricalFaultCategorySearchFormDomStates extends domCore.DomStates {
    }


    export class ReportElectricalFaultCategorySearchFormDomProps extends domCore.DomProps<ReportElectricalFaultCategorySearchFormDomVm>{
    }



}


