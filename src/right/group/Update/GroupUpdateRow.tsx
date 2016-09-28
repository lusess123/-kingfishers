import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import treeSelectorFile = require("./../../../02col/03selector/TreeSelector");
import comboFile = require("./../../../02col/02Mulite/Combo");
import dataFile = require("./../Data");

import textFile = require("./../../../02col/01single/Text");
import groupInsertRowFile = require("./GroupUpdateMaster");

export module GroupUpdateRow {
    export class GroupUpdateRowAction extends domCore.DomAction {
    }

    export class GroupUpdateRowReact extends domCore.DomReact<GroupUpdateRowProps, GroupUpdateRowStates, GroupUpdateRowAction> implements domCore.IReact {

        public state = new GroupUpdateRowStates();

        private fun_detailTitleClick() {
            this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
            this.forceUpdate();
        }
        private fun_masterTitleClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }
        
        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="Hu-row-title Hu-pointer" onClick={() => { this.fun_masterTitleClick(); } }>{this.props.Vm.Index + 1}
                    <i className={"fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "right" : "down") }></i></div>
                <div className={this.props.Vm.IsMasterHide ? "hide" : ""}>
                {this.props.Vm.GroupMasterObj.intoDom() }

                    </div>
                </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }
    export class GroupUpdateRowVm extends domCore.DomVm {
        public ReactType = GroupUpdateRowReact;

        public ParentSelector: treeSelectorFile.ui.TreeSingleSelectorVm;
        public GroupData: dataFile.Group.IGroupDetailData;

        public GroupMasterObj: groupInsertRowFile.Right.GroupUpdateMasterVm = new groupInsertRowFile.Right.GroupUpdateMasterVm();

        //public FID: string;

        public IsMasterHide: boolean;
        public IsDetailHide: boolean;

        public Index: number;


        public constructor() {
            super();
            this.ParentSelector = new treeSelectorFile.ui.TreeSingleSelectorVm();
            
            this.GroupData = { GroupID: "", FParentFID: "", GroupName: "", GroupCode: "", FPhone: "", GroupDescrible: "", FAddress: "", Fax: "", Post: "", FParentFName:"" };
            
        }
        
    }
    export class GroupUpdateRowStates extends domCore.DomStates {
    }


    export class GroupUpdateRowProps extends domCore.DomProps<GroupUpdateRowVm>{
    }



}


