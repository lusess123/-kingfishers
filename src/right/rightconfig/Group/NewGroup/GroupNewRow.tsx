
import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");

//import menuDetailFile = require("./MenuDetail");
import groupInsertRowFile = require("./GroupNewMaster");

import textFile = require("./../../../../02col/01single/Text");

export module GroupNewRow {
    export class GroupNewRowAction extends domCore.DomAction {
    }

    export class GroupNewRowReact extends domCore.DomReact<GroupNewRowProps, GroupNewRowStates, GroupNewRowAction> implements domCore.IReact {

        public state = new GroupNewRowStates();

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
    export class GroupNewRowVm extends domCore.DomVm {
        public ReactType = GroupNewRowReact;
        public IsDetailHide: boolean;

        public GroupMasterObj: groupInsertRowFile.Right.GroupNewMasterVm;

        public constructor() {
            super();

            this.GroupMasterObj = new groupInsertRowFile.Right.GroupNewMasterVm();
        }

    }
    export class GroupNewRowStates extends domCore.DomStates {
    }

    export class GroupNewRowProps extends domCore.DomProps<GroupNewRowVm>{
    }



}
