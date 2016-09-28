import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

import masterDomFile = require("./MasterDom");
import thFile = require("./../../../09Web/dom/ThDom");


export module Row {
    export class RowAction extends domCore.DomAction {
    }

    export class RowReact extends domCore.DomReact<RowProps, RowStates, RowAction> implements domCore.IReact {

        public state = new RowStates();
        private fun_itemTitleClick() {
            this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
            this.forceUpdate();
        }
        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="Hu-row-title Hu-pointer" onClick={() => { this.fun_itemTitleClick(); } }>{this.props.Vm.Index + 1}
                    <i className={"fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "right" : "down") }></i></div>
                <div className={this.props.Vm.IsItemFormHide ? "hide" : ""}>
                    {this.props.Vm.MasterDomObj.intoDom() }
                    </div>
                </div>
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }
    }
    
    export class RowVm extends domCore.DomVm {
        public ReactType = RowReact;
        public Index: number;
        public IsItemFormHide: boolean;
        public MasterDomObj: masterDomFile.MasterDom.MasterDomVm = new masterDomFile.MasterDom.MasterDomVm();
    }
    export class RowStates extends domCore.DomStates {
    }


    export class RowProps extends domCore.DomProps<RowVm>{
    }



}
