import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

export module MedicalBaseSearchFormDom {
    export class MedicalBaseSearchFormDomAction extends domCore.DomAction {
    }

    export class MedicalBaseSearchFormDomReact<P extends MedicalBaseSearchFormDomProps<MedicalBaseSearchFormDomVm>, S extends MedicalBaseSearchFormDomStates, A extends MedicalBaseSearchFormDomAction> extends domCore.DomReact<P, S, A> {


        public pSender(): React.ReactElement<any> {
            return null;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        protected fun_linkText(e, searchCol?: string) {
            var _val = e.target["value"];
            this.props.Vm[searchCol] = _val;
            if (!_val || _val == "") {
                this.props.Vm.IsHideClearBtn = true;
            }
            else {
                this.props.Vm.IsHideClearBtn = false;
            }
            this.forceUpdate();
        }


        protected fun_searchBtn() {
            this.props.Vm.loadPageData(0);
        }

        protected fun_seachClearBtn() {
            this.clearSearchVal();
            this.props.Vm.IsHideClearBtn = true;
            this.props.Vm.loadPageData(0);
        }

        protected clearSearchVal()
        {

        }

    }
  

    export interface IMedicalBaseSearchFormDomConfig {
        UniId: string;

    }

    export class MedicalBaseSearchFormDomVm extends domCore.DomVm {
        public ReactType = MedicalBaseSearchFormDomReact;
        public UniId: string = "";
        public IsHideClearBtn: boolean = true;


        public constructor(config?: IMedicalBaseSearchFormDomConfig) {
            super();

        }

        public loadPageData(pageIndex: number) {
            this.emitAppEvent("loadpagedata", this.UniId, pageIndex);
        }

    }

    export class MedicalBaseSearchFormDomStates extends domCore.DomStates {
    }


    export class MedicalBaseSearchFormDomProps<V extends MedicalBaseSearchFormDomVm> extends domCore.DomProps<V>{
    }


}


