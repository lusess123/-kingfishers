


import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module SearchFormDom {
    export class SearchFormDomAction extends domCore.DomAction {
    }

    export class SearchFormDomReact extends domCore.DomReact<SearchFormDomProps, SearchFormDomStates, SearchFormDomAction> implements domCore.IReact {

        public state = new SearchFormDomStates();

        protected fun_searchBtn() {

        }

        protected fun_seachClearBtn() {

        }

        public pSender(): React.ReactElement<any> {
            return <div className="Hm-search-panel">
                <form className="clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="pull-left Hu-label"><label  className="pull-right">搜索文本：</label></div>
                        <div className="pull-left Hu-input">
                            <input type="text" placeholder=".."></input>
                        </div>
                    </div>
                    <div className="col-xs-12 text-center">

                        <a  className="btn btn-primary btn-sm" onClick={() => { this.fun_searchBtn(); } }>搜索</a>
                        <a  className={"btn btn-primary btn-sm " + (this.props.Vm.IsHideClearBtn ? "hide" : "") } onClick={() => { this.fun_seachClearBtn(); } } >清空</a>

                    </div>
                </form>
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class SearchFormDomVm extends domCore.DomVm {
        public ReactType = SearchFormDomReact;
        public IsHideClearBtn: boolean;

    }
    export class SearchFormDomStates extends domCore.DomStates {
    }


    export class SearchFormDomProps extends domCore.DomProps<SearchFormDomVm>{
    }



}


