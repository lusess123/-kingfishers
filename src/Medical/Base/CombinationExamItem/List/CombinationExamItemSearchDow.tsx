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

export module CombinationExamItemSearchDow {
    export class CombinationExamItemSearchDowAction extends domCore.DomAction {
    }

    export class CombinationExamItemSearchDowReact extends domCore.DomReact<CombinationExamItemSearchDowProps, CombinationExamItemSearchDowStates, CombinationExamItemSearchDowAction> implements domCore.IReact {

        public state = new CombinationExamItemSearchDowStates();

        public pSender(): React.ReactElement<any> {
            return <div className="acsTextC acs-search-panel">
                <form className="clearfix">
                    <div className="large-6 small-12 columns">
                        <div className="row">
                            <div className="small-3 columns"><label  className="right">体检套餐：</label></div>
                            <div className="small-9 columns"><input placeholder=".." type="text" value={this.props.Vm.SearchSimpleCode} onChange={(e) => { this.fun_linkCode(e); } }></input></div>
                        </div>
                        <div className="row">
                            <div className="small-3 columns"><label  className="right">体检项目：</label></div>
                            <div className="small-9 columns"><input placeholder=".." type="text" value={this.props.Vm.SearchName} onChange={(e) => { this.fun_linkName(e); } }></input></div>
                        </div>
                    </div>
                    <div className="small-12 columns">

                        <a  className="button tiny" onClick={() => { this.fun_searchBtn(); } }>搜索</a>
                        <a  className={"button tiny " + (this.props.Vm.IsHideClearBtn ? "hide" : "") } onClick={() => { this.fun_seachClearBtn(); } } >清空</a>

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

    export interface ICombinationExamItemSearchDowConfig {
        UniId: string;
    }

    export class CombinationExamItemSearchDowVm extends domCore.DomVm {
        public ReactType = CombinationExamItemSearchDowReact;
        public SearchSimpleCode: string;
        public SearchName: string;
        public IsHideClearBtn: boolean = true;
        public UniId: string = "";

        public constructor(config?: ICombinationExamItemSearchDowConfig) {
            super();

        }
        public loadPageData(pageIndex: number) {
            this.emitAppEvent("loadpagedata", this.UniId, pageIndex);
        }

    }
    export class CombinationExamItemSearchDowStates extends domCore.DomStates {
    }


    export class CombinationExamItemSearchDowProps extends domCore.DomProps<CombinationExamItemSearchDowVm>{
    }



}


