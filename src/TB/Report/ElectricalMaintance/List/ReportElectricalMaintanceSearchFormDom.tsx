import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import dateFile = require("./../../../../02col/01single/Date");
import treeSingleFile = require("./../../../../02col/03selector/TreeSelector");

export module ReportElectricalMaintanceSearchFormDom {
    export class ReportElectricalMaintanceSearchFormDomAction extends domCore.DomAction {
    }

    export class ReportElectricalMaintanceSearchFormDomReact extends domCore.DomReact<ReportElectricalMaintanceSearchFormDomProps, ReportElectricalMaintanceSearchFormDomStates, ReportElectricalMaintanceSearchFormDomAction> implements domCore.IReact {

        public state = new ReportElectricalMaintanceSearchFormDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hm-search-panel Hs-fff clearfix">
                <form className="ask-search Hu-dashed-line clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="pull-left Hu-label"><label  className="pull-right">年份：</label></div>
                        <div className="col-md-8">{this.props.Vm.MonthVm.intoDom() }</div>
                    </div>
                </form>
                <div className="col-xs-12 text-center mt10 mb10">
                    <button  className="btn btn-primary btn-sm icon-search fa fa-search" title="搜索" onClick={() => { this.fun_searchBtn(); } }></button>
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

    export interface IReportElectricalMaintanceSearchFormDomConfig {

        UniId: string;
    }

    export class ReportElectricalMaintanceSearchFormDomVm extends domCore.DomVm {
        public ReactType = ReportElectricalMaintanceSearchFormDomReact;
        public SearchSimpleCode: string;
        public SearchName: string;
        public IsHideClearBtn: boolean = true;
        public UniId: string = "";
        public MonthVm: dateFile.ui.DateVm;
        public DepartmentTreeVm: treeSingleFile.ui.TreeSingleSelectorVm;

        public constructor(config?: IReportElectricalMaintanceSearchFormDomConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
            }
            this.MonthVm = new dateFile.ui.DateVm();
            this.DepartmentTreeVm = new treeSingleFile.ui.TreeSingleSelectorVm();
            this.DepartmentTreeVm.RegName = "TBDepartmentCodeTable";

        }

        public loadPageData(pageIndex: number) {
            this.emitAppEvent("TB/Report/Test/Test", this.UniId, pageIndex);
        }

    }
    export class ReportElectricalMaintanceSearchFormDomStates extends domCore.DomStates {
    }


    export class ReportElectricalMaintanceSearchFormDomProps extends domCore.DomProps<ReportElectricalMaintanceSearchFormDomVm>{
    }



}


