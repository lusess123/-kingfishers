import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");

import React = require("react");
import ReactDOM = require("react-dom");

export module ExamPackageSearchDow {
    export class ExamPackageSearchDowAction extends domCore.DomAction {
    }

    export class ExamPackageSearchDowReact extends domCore.DomReact<ExamPackageSearchDowProps, ExamPackageSearchDowStates, ExamPackageSearchDowAction> implements domCore.IReact {

        public state = new ExamPackageSearchDowStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hm-search-panel">
                <form className="clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="pull-left Hu-label"><label  className="pull-right">简码：</label></div>
                        <div className="pull-left Hu-input"><input className="form-control" placeholder=".." type="text" value={this.props.Vm.SearchSimpleCode} onChange={(e) => { this.fun_linkCode(e); } }></input></div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="pull-left Hu-label"><label  className="pull-right">名称：</label></div>
                        <div className="pull-left Hu-input"><input className="form-control" placeholder=".." type="text" value={this.props.Vm.SearchName} onChange={(e) => { this.fun_linkName(e); } }></input></div>
                    </div>
                    <div className="col-xs-12 text-center">
                        <a  className="btn btn-primary btn-sm" onClick={() => { this.fun_searchBtn(); } }>搜索</a>
                        <a  className={"btn btn-primary btn-sm " + (this.props.Vm.IsHideClearBtn ? " hide" : "") } onClick={() => { this.fun_seachClearBtn(); } } >清空</a>
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
            this.forceUpdate();
        }

        private fun_searchBtn() {
            this.props.Vm.loadPageData(0);
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }

    }

    export interface IExamPackageSearchDowConfig {
        UniId: string;
    }

    export class ExamPackageSearchDowVm extends domCore.DomVm {
        public ReactType = ExamPackageSearchDowReact;
        public SearchSimpleCode: string;
        public SearchName: string;
        public IsHideClearBtn: boolean = true;
        public UniId: string = "";

        public constructor(config?: IExamPackageSearchDowConfig) {
            super();
            this.UniId = config.UniId;

        }
        public loadPageData(pageIndex: number) {
            this.emitAppEvent("loadexampackagepagedata", this.UniId, pageIndex);
        }

    }
    export class ExamPackageSearchDowStates extends domCore.DomStates {
    }


    export class ExamPackageSearchDowProps extends domCore.DomProps<ExamPackageSearchDowVm>{
    }



}


