import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import baseSearchForm = require("./../../../Common/List/MedicalBaseSearchFormDom");


export module DeptConclusionTplSearchFormDom {
    export class DeptConclusionTplSearchFormDomAction extends baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomAction{
    }

    export class DeptConclusionTplSearchFormDomReact extends baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomReact<DeptConclusionTplSearchFormDomProps, DeptConclusionTplSearchFormDomStates, DeptConclusionTplSearchFormDomAction> implements domCore.IReact {

        public state = new DeptConclusionTplSearchFormDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hm-search-panel">
                <form className="clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="pull-left Hu-label"><label  className="pull-right">名称：</label></div>
                        <div className="pull-left Hu-input"><input placeholder=".." type="text" value={this.props.Vm.SearchName} onChange={(e) => { this.fun_linkText(e,"SearchName"); } }></input></div>
                    </div>
                    <div className="col-xs-12 text-center">

                        <a  className="btn btn-primary btn-sm" onClick={() => { this.fun_searchBtn(); } }>搜索</a>
                        <a  className={"btn btn-sm btn-primary " + (this.props.Vm.IsHideClearBtn ? "hide" : "") } onClick={() => { this.fun_seachClearBtn(); } } >清空</a>

                    </div>
                </form>
            </div>
        }

      

        protected clearSearchVal() {
            this.props.Vm.SearchName = "";
        }

    }

    export interface IDeptConclusionTplSearchFormDomConfig extends baseSearchForm.MedicalBaseSearchFormDom.IMedicalBaseSearchFormDomConfig {

    }

    export class DeptConclusionTplSearchFormDomVm extends baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomVm {
        public ReactType = DeptConclusionTplSearchFormDomReact;
        public SearchName: string = "";

        public constructor(config?: IDeptConclusionTplSearchFormDomConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
            }
        }

    }
    export class DeptConclusionTplSearchFormDomStates extends baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomStates {
    }


    export class DeptConclusionTplSearchFormDomProps extends baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomProps<DeptConclusionTplSearchFormDomVm>{
    }



}


