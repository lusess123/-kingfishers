import domFile = require("./../../../01core/0Dom"); import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
//import expandFile = require("./../Menu/RowButtonExpand");
import dataFile = require("./Data");
import roleFile = require("./xbgTestPage");
import expandFile = require("./RowButtonExpand");

export module RoleGridRow {
    export class RoleGridRowAction extends domCore.DomAction {
    }

    export class RoleGridRowReact extends domCore.DomReact<RoleGridRowProps, RoleGridRowStates, RoleGridRowAction> implements domCore.IReact {

        public pSender(): React.ReactElement<any> {

            return <tr className={this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}>
                <td><span>{this.createSingleCheckBox() }<span>{this.props.Vm.RowNumber}</span>{this.createRowButtonExpand() }</span></td>
                <td className="hide"><span><input placeholder=".." type="hidden"></input></span></td>
                <td><span><span>{this.props.Vm.RowData.RoleName}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.RoleSign}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.FControlUnitName}</span></span></td>
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
    export class RoleGridRowVm extends domCore.DomVm {
        public ReactType = RoleGridRowReact;
        public RowButtonExpand = new expandFile.RowButtonExpand.RowButtonExpandVm();
        public RowData: any;
        public RowNumber: string;
        public RoleObj: roleFile.xbgTestPage.xbgTestPageVm;
        public SingleCheckVm=new singleCheckFile.ui.SingleCheckBoxVm();

        public constructor() {
            super();
            this.RowData = { RoleSign: "BiDaSalesManRole", RoleName: "业务员", FControlUnitName: "必达", UPDATE_TIME: "dd" };

        }
    }



    export class RoleGridRowStates extends domCore.DomStates {
    }


    export class RoleGridRowProps extends domCore.DomProps<RoleGridRowVm>{
    }



}