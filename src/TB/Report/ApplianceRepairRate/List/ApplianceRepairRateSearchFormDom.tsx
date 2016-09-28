import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import dateFile = require("./../../../../02col/01single/Date");
import SingleFile = require("./../../../../02col/03selector/selector");

export module ApplianceRepairRateGirdFormDom {
    export class ApplianceRepairRateGirdFormDomAction extends domCore.DomAction {
    }

    export class ApplianceRepairRateGirdFormDomReact extends domCore.DomReact<ApplianceRepairRateGirdFormDomProps, ApplianceRepairRateGirdFormDomStates, ApplianceRepairRateGirdFormDomAction> implements domCore.IReact {

        public state = new ApplianceRepairRateGirdFormDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hm-search-panel">
                <form className="clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="pull-left Hu-label"><label  className="pull-right">月份：</label>{this.props.Vm.MonthVm.intoDom() }</div>
                        <div className="pull-left Hu-input"></div>
                    </div>
                    <div className="col-xs-12 text-center">

                        <a  className="btn btn-primary btn-sm" onClick={() => { this.fun_searchBtn(); } }>搜索</a>
                        <a  className={"btn btn-primary btn-sm " + (this.props.Vm.IsHideClearBtn ? "hide" : "") } onClick={() => { this.fun_seachClearBtn(); } } >清空</a>

                    </div>
                </form>
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

    export interface IApplianceRepairRateGirdFormDomConfig {

        UniId: string;
    }

    export class ApplianceRepairRateGirdFormDomVm extends domCore.DomVm {
        public ReactType = ApplianceRepairRateGirdFormDomReact;
        public SearchSimpleCode: string;
        public SearchName: string;
        public IsHideClearBtn: boolean = true;
        public UniId: string = "";
        public MonthVm: dateFile.ui.DateVm;
        public BrandVm: SingleFile.ui.SelectorVm;

        public constructor(config?: IApplianceRepairRateGirdFormDomConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
            }
            this.MonthVm = new dateFile.ui.DateVm();
            this.BrandVm = new SingleFile.ui.SelectorVm();
            this.BrandVm.RegName = "TBBrandCodeTable";

        }

        public loadPageData(pageIndex: number) {
            this.emitAppEvent("TB/Report/Test/Test", this.UniId, pageIndex);
        }

    }
    export class ApplianceRepairRateGirdFormDomStates extends domCore.DomStates {
    }


    export class ApplianceRepairRateGirdFormDomProps extends domCore.DomProps<ApplianceRepairRateGirdFormDomVm>{
    }



}


