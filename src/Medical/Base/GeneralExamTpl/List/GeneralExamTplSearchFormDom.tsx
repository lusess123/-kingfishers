import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import baseSearchForm = require("./../../../Common/List/MedicalBaseSearchFormDom");


export module GeneralExamTplSearchFormDom {
    export class GeneralExamTplSearchFormDomAction extends baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomAction{
    }

    export class GeneralExamTplSearchFormDomReact extends baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomReact<GeneralExamTplSearchFormDomProps, GeneralExamTplSearchFormDomStates, GeneralExamTplSearchFormDomAction> implements domCore.IReact {

        public state = new GeneralExamTplSearchFormDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hm-search-panel">
                <form className="clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="pull-left Hu-label"><label  className="pull-right">名称：</label></div>
                        <div className="pull-left Hu-input"><input className="form-control" placeholder=".." type="text" value={this.props.Vm.SearchName} onChange={(e) => { this.fun_linkText(e,"SearchName"); } }></input></div>
                    </div>
                    <div className="col-xs-12 text-center">

                        <a  className="btn btn-sm btn-primary" onClick={() => { this.fun_searchBtn(); } }>搜索</a>
                        <a  className={"btn btn-sm btn-primary " + (this.props.Vm.IsHideClearBtn ? "hide" : "") } onClick={() => { this.fun_seachClearBtn(); } } >清空</a>

                    </div>
                </form>
            </div>
        }

      

        protected clearSearchVal() {
            this.props.Vm.SearchName = "";
        }

    }

    export interface IGeneralExamTplSearchFormDomConfig extends baseSearchForm.MedicalBaseSearchFormDom.IMedicalBaseSearchFormDomConfig {

    }

    export class GeneralExamTplSearchFormDomVm extends baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomVm {
        public ReactType = GeneralExamTplSearchFormDomReact;
        public SearchName: string = "";

        public constructor(config?: IGeneralExamTplSearchFormDomConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
            }
        }

    }
    export class GeneralExamTplSearchFormDomStates extends baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomStates {
    }


    export class GeneralExamTplSearchFormDomProps extends baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomProps<GeneralExamTplSearchFormDomVm>{
    }



}


