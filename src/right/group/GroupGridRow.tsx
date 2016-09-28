import domFile = require("./../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import singleCheckFile = require("./../../02col/02Mulite/SingleCheckBox");
import expandFile = require("./RowButtonExpand");
import groupDataFile = require("./Data");
import groupFile = require("./GroupListPage");

export module GroupGridRow {
    export class GroupGridRowAction extends domCore.DomAction {
    }

    export class GroupGridRowReact extends domCore.DomReact<GroupGridRowProps, GroupGridRowStates, GroupGridRowAction> implements domCore.IReact {

        private fun_linkDetai() {
            urlFile.Core.AkUrl.Current().openUrl("$wingroupdetail$" + this.props.Vm.RowData.GroupID + "$");
        }
        private fun_linkParentMenu() {
            urlFile.Core.AkUrl.Current().openUrl("$wingroupdetail$" + this.props.Vm.RowData.GroupID + "$");
        }
        public pSender(): React.ReactElement<any> {
            return <tr className={this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}>
                <td><span>{this.createSingleCheckBox() }<span>{this.props.Vm.RowNumber}</span>{this.createRowButtonExpand() }</span></td>
                <td className="hide"><span><input placeholder=".." type="hidden"></input>{this.props.Vm.RowData.GroupID}</span></td>
                <td><span><span><a onClick={() => { this.fun_linkDetai(); return false; } }>{this.props.Vm.RowData.FParentFName}</a></span></span></td>
                <td><span><span><a onClick={() => { this.fun_linkParentMenu(); return false; } } >{this.props.Vm.RowData.GroupName}</a></span></span></td>
                <td><span><span>{this.props.Vm.RowData.GroupID}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.FPhone}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.UPDATE_TIME}</span></span></td>
                </tr>
        }


        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }
        private createRowButtonExpand(): React.ReactElement<any> {
            return this.props.Vm.RowButtonExpand.intoDom();
        }
    }
    export class GroupGridRowVm extends domCore.DomVm {
        public ReactType = GroupGridRowReact;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowButtonExpand = new expandFile.RowButtonExpand.RowButtonExpandVm();
        public RowData: groupDataFile.Group.IGroupData = { GroupID: "001001", FParentFName: "", GroupName: "", GroupCode: "001", FPhone: "", FControlUnitName: "", UPDATE_TIME:"dd"};
        public RowNumber: string;
        public GroupObj: groupFile.Right.GroupListPageVm;
    }

    export class GroupGridRowStates extends domCore.DomStates {
    }


    export class GroupGridRowProps extends domCore.DomProps<GroupGridRowVm>{
    }



}


