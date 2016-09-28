import domFile = require("./../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import singleCheckFile = require("./../../02col/02Mulite/SingleCheckBox");
import UserManageDataFile = require("./Data");
import expandFile = require("./../../right/menu/RowButtonExpand");
import manageFile = require("./UserManagePage");
export module UserManageGridRow {
    export class UserManageGridRowAction extends domCore.DomAction {
    }

    export class UserManageGridRowReact extends domCore.DomReact<UserManageGridRowProps, UserManageGridRowStates, UserManageGridRowAction> implements domCore.IReact {

        private _showTxt(str: string): string
        {
            if (str.indexOf("<") >= 0 && str.indexOf(">") >= 0) {
                try {
                    return $(str).text();
                }
                catch(r){
                    return str;
                }
            }
            return str;
        }

        public pSender(): React.ReactElement<any> {
            return <tr className={(this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : "")  } >
                <td className={(this.props.Vm.IsAcsRelative ? "  acsRelative  acsTableTr " : "")}   style={{ left: this.props.Vm.LeftNum }} ><span>{this.createSingleCheckBox() }
                    <span>{this.props.Vm.RowNumber}</span>
                    {this.createRowButtonExpand() }</span></td>
                <td className="hide"><span><input placeholder=".." type="hidden"></input></span></td>
                <td><span><span><a onClick={() => {this.fun_link()}}>{this.props.Vm.RowData.NickName}</a></span></span></td>
                <td><span><span>{this.props.Vm.RowData.UserName}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Area}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.UserKindName}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.CreateTime}</span></span></td>
                <td><span><span>{this._showTxt(this.props.Vm.RowData.CreaterName)}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Remark}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.MEID}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.FControlUnitName}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.UPDATE_TIME}</span></span></td>
            </tr>
        }

        private fun_link()
        {
            urlFile.Core.AkUrl.Current().openUrl("$winusermanagedetail$" + this.props.Vm.RowData.UserID + "$");
        }

        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }

        private createRowButtonExpand(): React.ReactElement<any> {
            return this.props.Vm.RowButtonExpand.intoDom();
        }


    }
    export class UserManageGridRowVm extends domCore.DomVm {
        public ReactType = UserManageGridRowReact;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowButtonExpand = new expandFile.RowButtonExpand.RowButtonExpandVm();
        public RowData: UserManageDataFile.UserManager.UserManagerData = { UserID: "16313413163143", NickName: "邵祺", UserName: "邵祺User", Area: "建德十八桥", UserKindId: "1", UserKindName: "系统用户", IsActive: true, Creater: "ataws", Remark: "备注", FControlUnitID: "002", FControlUnitName: "树人", CreaterName: "信使管理员", CreateTime: (new Date()).toTimeString(), MEID: "1231321312", UPDATE_TIME: "dd" };
        public RowNumber: string;
        public MangeObj: manageFile.UserManager.UserManagerPageVm;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        
    }

    export class UserManageGridRowStates extends domCore.DomStates {
    }


    export class UserManageGridRowProps extends domCore.DomProps<UserManageGridRowVm>{
    }



}