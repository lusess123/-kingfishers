import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

export module InsertSearchFormDom {
    export class InsertSearchFormDomAction extends domCore.DomAction {
    }

    export class InsertSearchFormDomReact extends domCore.DomReact<InsertSearchFormDomProps, InsertSearchFormDomStates, InsertSearchFormDomAction> implements domCore.IReact {

        public state = new InsertSearchFormDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-handle clearfix">
                    <div className="col-lg-8 col-md-8 YSm-search">
                    <input className="col-lg-11 col-md-10 YSu-border-blue " type="text" placeholder="输入体检号查询" value={this.props.Vm.SearchName} onChange={(e) => { this.fun_linkName(e); } } />
                        <a className="col-lg-1 col-md-2 btn btn-primary"onClick={() => { this.fun_searchBtn(); } }>查询</a>
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

    export interface IInsertSearchFormDomConfig {

        UniId: string;
    }

    export class InsertSearchFormDomVm extends domCore.DomVm {
        public ReactType = InsertSearchFormDomReact;
        public SearchSimpleCode: string;
        public SearchName: string;
        public IsHideClearBtn: boolean = true;
        public UniId: string = "";

        public constructor(config?: IInsertSearchFormDomConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
            }
        }

        public loadPageData(pageIndex: number) {
            this.emitAppEvent("medical/base/anomaly/list/Sreach", this.UniId, this.SearchName);
        }

    }
    export class InsertSearchFormDomStates extends domCore.DomStates {
    }


    export class InsertSearchFormDomProps extends domCore.DomProps<InsertSearchFormDomVm>{
    }
}


