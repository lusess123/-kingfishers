import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");

export module DepartmentSearchFormDom {
    export class DepartmentSearchFormDomAction extends domCore.DomAction { }

    export class DepartmentSearchFormDomReact extends domCore.DomReact<DepartmentSearchFormDomProps, DepartmentSearchFormDomStates, DepartmentSearchFormDomAction> implements domCore.IReact {
        public state = new DepartmentSearchFormDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hm-search-panel">
                <form className="clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="pull-left Hu-label"><label className="pull-right">简码: </label></div>
                        <div className="pull-left Hu-input"><input className="form-control" placeholder=".." type="text" value={this.props.Vm.SearchSimpleCode} onChange={(e) => { this.fun_SearchCode(e); } }></input></div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="pull-left Hu-label"><label className="pull-right">名称: </label></div>
                        <div className="pull-left Hu-input"><input className="form-control" placeholder=".." type="text" value={this.props.Vm.SearchName} onChange={(e) => { this.fun_SearchName(e); } }></input></div>
                    </div>
                    <div className="col-xs-12 text-center">
                        <a className="btn btn-primary btn-sm" onClick={() => { this.fun_searchBtn(); } }> 搜索</a>
                        <a className={"btn btn-primary btn-sm" + (this.props.Vm.IsHideClearBtn ? " hide" : "") } onClick={() => { this.fun_seachClearBtn(); } }>清空 </a>
                    </div>
                </form>

                </div>
        }

        private fun_SearchCode(e) {
            var _val = e.target["value"];
            this.props.Vm.SearchSimpleCode = _val;
            if (!_val || _val == "") {
                this.props.Vm.IsHideClearBtn = true;
            } else {
                this.props.Vm.IsHideClearBtn = false;
            }

            this.forceUpdate();
        }

        private fun_SearchName(e) {
            var _val = e.target["value"];
            this.props.Vm.SearchName = _val;
            if (!_val || _val == "") {
                this.props.Vm.IsHideClearBtn = true;
            } else {
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

        public fun_searchBtn() {
            this.props.Vm.loadPageData(0);
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }

    export interface DepartmentSearchFormDomConfig {
        UniId: string;
    }

    export class DepartmentSearchFormDomVm extends domCore.DomVm {
        public ReactType = DepartmentSearchFormDomReact;
        public SearchSimpleCode: string;
        public SearchName: string;
        public IsHideClearBtn: boolean = true;
        public UniId: string = "";

        public constructor(config?: DepartmentSearchFormDomConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
            };
        }
        public loadPageData(pageIndex: number) {
            this.emitAppEvent("loadpagedata", this.UniId, pageIndex);
        }
   
    }

    export class DepartmentSearchFormDomStates extends domCore.DomStates { }

    export class DepartmentSearchFormDomProps extends domCore.DomProps<DepartmentSearchFormDomVm>{ }
}