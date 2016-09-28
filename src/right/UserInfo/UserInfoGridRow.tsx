import domFile = require("./../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import singleCheckFile = require("./../../02col/02Mulite/SingleCheckBox");
import userinfoDataFile = require("./Data");
import expandFile = require("./RowButtonExpand");
import userFile = require("./UserInfoPage");
export module UserInfoGridRow {
    export class UserInfoGridRowAction extends domCore.DomAction {
    }

    export class UserInfoGridRowReact extends domCore.DomReact<UserInfoGridRowProps, UserInfoGridRowStates, UserInfoGridRowAction> implements domCore.IReact {

        public state = new UserInfoGridRowStates();
        private fun_linkDetai() {
            urlFile.Core.AkUrl.Current().openUrl("$winuserdetail$" + this.props.Vm.RowData.UserID + "$");
        }
        public pSender(): React.ReactElement<any> {
            var gridRow = this.createRow();
            return gridRow;
        }
        ///*{<td>{this.props.Vm.RowData.POSITIONJOBID}</td>}*/
        
        public createRow(): React.ReactElement<any> {
            return <tr>
                <td><span>{this.createSingleCheckBox() }<span>{this.props.Vm.RowNumber}</span>{this.createRowButtonExpand() }</span></td>
                <td className="hide"><span><input placeholder=".." type="hidden"></input>{this.props.Vm.RowData.UserID}</span></td>
                <td><a onClick={() => { this.fun_linkDetai(); return false; } }>{this.props.Vm.RowData.TrueName}</a></td>
                <td>{this.props.Vm.fun_SexJudge()}</td>
                <td>{this.props.Vm.RowData.FNumber}</td>
                <td>{this.props.Vm.RowData.FStatusKindName}</td>
                <td>{this.props.Vm.RowData.UserName}</td>
                <td>{this.props.Vm.RowData.UPDATE_TIME}</td>
                </tr>
        }
        
        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }
        private createRowButtonExpand(): React.ReactElement<any> {
            return this.props.Vm.RowButtonExpand.intoDom()
        }
    }
    export class UserInfoGridRowVm extends domCore.DomVm {
        public ReactType = UserInfoGridRowReact;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowButtonExpand = new expandFile.RowButtonExpand.RowButtonExpandVm();
        public RowData: userinfoDataFile.UserInfo.IUserListData = { UserID: "", TrueName: "开发用户", Gender: "男", POSITIONJOBID: "医师", FNumber: "038852", FStatusKindId: "在职", FStatusKindName: "",UPDATE_TIME:"",UserName:"" };
        public RowNumber: string;
        public UserObj: userFile.UserInfo.UserInfoVm;
        public Sex: string;
        // 判断性别
        public fun_SexJudge() {
            var sex = this.RowData.Gender;
            if (sex == "1") {
                //console.log("女");
                return "女";
            } else if (sex == "0") {
                //console.log("男");
                return "男";
            } else {
                //console.log("");
                return "";
            }
        }
    }

    export class UserInfoGridRowStates extends domCore.DomStates {
    }


    export class UserInfoGridRowProps extends domCore.DomProps<UserInfoGridRowVm>{
    }



}


