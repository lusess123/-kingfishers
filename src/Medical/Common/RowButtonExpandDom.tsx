import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module RowButtonExpandDom {
    export class RowButtonExpandDomAction extends domCore.DomAction {
    }

    export class RowButtonExpandDomReact extends domCore.DomReact<RowButtonExpandDomProps, RowButtonExpandDomStates, RowButtonExpandDomAction> implements domCore.IReact {

        public state = new RowButtonExpandDomStates();

        public pSender(): React.ReactElement<any> {
            return <span>
                <i ref="expandBtn"
                    className={this.props.Vm.IsExpand ? "fa fa-minus-square acsPointer" : "fa fa-plus-square acsPointer"}
                    onClick={() => { this.expandClick(); return false; } }
                    ></i>
            </span>
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        private expandClick() {
            var _vm = this.props.Vm;
            _vm.IsExpand = _vm.IsExpand = !_vm.IsExpand;
            this.forceUpdate();
            if (_vm.ExpandCustomFun) {
                _vm.ExpandCustomFun(_vm);
            }
        }

    }

    export interface IRowButtonExpandDomConfig {


    }

    export class RowButtonExpandDomVm extends domCore.DomVm {
        public ReactType = RowButtonExpandDomReact;
        public IsExpand: boolean = false;

        public ExpandCustomFun: IExpandCustomFun;


        public constructor(config?: IRowButtonExpandDomConfig) {
            super();

        }

    }
    export class RowButtonExpandDomStates extends domCore.DomStates {
    }


    export class RowButtonExpandDomProps extends domCore.DomProps<RowButtonExpandDomVm>{
    }

    export interface IExpandCustomFun {
        (domVm: domCore.DomVm): void;
    }

}


