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

export module AppraisalItemSearchDom {
    export class AppraisalItemSearchDomAction extends domCore.DomAction {
    }

    export class AppraisalItemSearchDomReact extends domCore.DomReact<AppraisalItemSearchDomProps, AppraisalItemSearchDomStates, AppraisalItemSearchDomAction> implements domCore.IReact {

        public state = new AppraisalItemSearchDomStates();

        //public pSender(): React.ReactElement<any> {
        //    return <div className="Hm-search-panel">
        //        <form className="clearfix">
        //            <div className="large-6 small-12 columns">
        //                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        //                    <div className="pull-left Hu-label"><label  className="pull-right">项目名称：</label></div>
        //                    <div className="pull-left Hu-input"><input className="form-control" placeholder=".." type="text" value={this.props.Vm.SearchName} onChange={(e) => { this.fun_linkName(e); } }></input></div>
        //                </div>
        //            </div>
        //            <div className="col-xs-12 text-center">

        //                <a  className="btn btn-primary btn-sm" onClick={() => { this.fun_searchBtn(); } }>搜索</a>
        //                <a  className={"btn btn-primary btn-sm " + (this.props.Vm.IsHideClearBtn ? "hide" : "") } onClick={() => { this.fun_seachClearBtn(); } } >清空</a>

        //            </div>
        //        </form>
        //    </div>
        //}

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-search">
                <div className="input-group">
                    <input type="text" className="Hg-width YSu-border-blue " placeholder="输入分类名、项目名称查询" value={this.props.Vm.SearchName} onChange={(e) => { this.fun_linkName(e); } }/>
                    <div className="input-group-addon" onClick={() => this.fun_searchBtn() }><i className="fa fa-search" ></i></div>
                </div>
            </div>;
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

    export interface IAppraisalItemSearchDomConfig {
        UniId: string;
    }

    export class AppraisalItemSearchDomVm extends domCore.DomVm {
        public ReactType = AppraisalItemSearchDomReact;
        public SearchName: string;
        public IsHideClearBtn: boolean = true;
        public UniId: string = "";

        public constructor(config?: IAppraisalItemSearchDomConfig) {
            super();
            this.UniId = config.UniId;
        }
        public loadPageData(pageIndex: number) {
            this.emitAppEvent("AppraisalItemSelector/loadpagedata", this.UniId, pageIndex);
        }

    }
    export class AppraisalItemSearchDomStates extends domCore.DomStates {
    }


    export class AppraisalItemSearchDomProps extends domCore.DomProps<AppraisalItemSearchDomVm>{
    }



}


