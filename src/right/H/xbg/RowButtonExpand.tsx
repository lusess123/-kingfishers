import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

export module RowButtonExpand {
    export class RowButtonExpandAction extends domCore.DomAction {
    }

    export class RowButtonExpandReact extends domCore.DomReact<RowButtonExpandProps, RowButtonExpandStates, RowButtonExpandAction> implements domCore.IReact {

        public pSender(): React.ReactElement<any> {
            return <span>
                <i ref="expandBtn"
                    className={this.props.Vm.IsExpand ? "fa fa-minus-square Hu-pointer" : "fa fa-plus-square Hu-pointer"}
                    onClick={() => { this.expandClick(); return false; } }
                    ></i>
            </span>
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
    export class RowButtonExpandVm extends domCore.DomVm {
        public ReactType = RowButtonExpandReact;
        public IsExpand: boolean = false;

        public ExpandCustomFun: IExpandCustomFun;


    }
    export class RowButtonExpandStates extends domCore.DomStates {
    }


    export class RowButtonExpandProps extends domCore.DomProps<RowButtonExpandVm>{
    }

    export interface IExpandCustomFun {
        (domVm: domCore.DomVm): void;
    }

}


