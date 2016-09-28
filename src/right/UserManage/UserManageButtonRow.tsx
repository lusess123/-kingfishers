import domFile = require("./../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import dataFile = require("./Data");

export module UserManageButton {
    export class UserManageButtonRowAction extends domCore.DomAction {
    }

    export class UserManageButtonRowReact extends domCore.DomReact<UserManageButtonRowProps, UserManageButtonRowStates, UserManageButtonRowAction> implements domCore.IReact {

        public state = new UserManageButtonRowStates();

        private fun_OnChange(e, fName: string) {
            var _val = e.target["value"];
            this.props.Vm.ButtonData[fName] = _val;
            this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td></td>
                <td className="hide"></td>
                <td><input type="text" placeholder=".." value={this.props.Vm.ButtonData.FName} onChange={(e) => { this.fun_OnChange(e, "FName"); } }/></td>
                <td><input type="text" placeholder=".." value={this.props.Vm.ButtonData.FKey} onChange={(e) => { this.fun_OnChange(e, "FKey"); } }/></td>
                <td><input type="text" placeholder=".." value={this.props.Vm.ButtonData.FValue} onChange={(e) => { this.fun_OnChange(e, "FValue"); } }/></td>
                <td><input type="text" placeholder=".." value={this.props.Vm.ButtonData.OrderId} onChange={(e) => { this.fun_OnChange(e, "OrderId"); } }/></td>
            </tr>
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class UserManageButtonRowVm extends domCore.DomVm {
        public ReactType = UserManageButtonRowReact;
        public ButtonData: dataFile.UserManager.IUserManagerButtonData;

    }
    export class UserManageButtonRowStates extends domCore.DomStates {
    }


    export class UserManageButtonRowProps extends domCore.DomProps<UserManageButtonRowVm>{
    }
}