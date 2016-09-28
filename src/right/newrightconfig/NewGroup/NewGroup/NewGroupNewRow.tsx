
import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");

//import menuDetailFile = require("./MenuDetail");
import groupInsertRowFile = require("./NewGroupNewMaster");

import textFile = require("./../../../../02col/01single/Text");

export module NewGroupNewRow {
    export class NewGroupNewRowAction extends domCore.DomAction {
    }

    export class NewGroupNewRowReact extends domCore.DomReact<NewGroupNewRowProps, NewGroupNewRowStates, NewGroupNewRowAction> implements domCore.IReact {

        public state = new NewGroupNewRowStates();

        private fun_detailTitleClick() {
            this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
            this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {
            return (<div>
                {this.props.Vm.GroupMasterObj.intoDom() }
                </div>);
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class NewGroupNewRowVm extends domCore.DomVm {
        public ReactType = NewGroupNewRowReact;
        public IsDetailHide: boolean;

        public GroupMasterObj: groupInsertRowFile.Right.NewGroupNewMasterVm;

        public constructor() {
            super();

            this.GroupMasterObj = new groupInsertRowFile.Right.NewGroupNewMasterVm();
        }

    }
    export class NewGroupNewRowStates extends domCore.DomStates {
    }

    export class NewGroupNewRowProps extends domCore.DomProps<NewGroupNewRowVm>{
    }



}
