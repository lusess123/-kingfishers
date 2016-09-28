import domFile = require("./../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import singleCheckFile = require("./../../02col/02Mulite/SingleCheckBox");
import expandFile = require("./RowButtonExpand");
import menuDataFile = require("./Data");
import menuFile = require("./MenuListPage");

export module MenuGridRow {
    export class MenuGridRowAction extends domCore.DomAction {
    }

    export class MenuGridRowReact extends domCore.DomReact<MenuGridRowProps, MenuGridRowStates, MenuGridRowAction> implements domCore.IReact {

        private fun_linkDetai()
        {
            urlFile.Core.AkUrl.Current().openUrl("$panelmenudetail$"+this.props.Vm.RowData.FID+"$");
        }
        private fun_linkParentMenu() {
            urlFile.Core.AkUrl.Current().openUrl("$panelmenudetail$" + this.props.Vm.RowData.ParentId + "$");
        }

        public pSender(): React.ReactElement<any> {

            return <tr className={this.props.Vm.SingleCheckVm.vmDataValueGet()=="true"?"acs-check-bg":""}>
                <td  className={(this.props.Vm.IsAcsRelative ? "  Hf-relative Hf-table-td " : "")}   style={{ left: this.props.Vm.LeftNum }} ><span>{this.createSingleCheckBox() }<span>{this.props.Vm.RowNumber}</span>{this.createRowButtonExpand() }</span></td>
                <td className="hide"><span><input placeholder=".." type="hidden"></input></span></td>
                <td><span><span><a onClick={() => { this.fun_linkDetai(); return false; }}>{this.props.Vm.RowData.MenuName}</a></span></span></td>
                <td><span><span><a onClick={() => { this.fun_linkParentMenu(); return false; } } >{this.props.Vm.RowData.ParentName}</a></span></span></td>
                <td><span><span>{this.props.Vm.RowData.Key}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.KeyType}</span></span></td>
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
    export class MenuGridRowVm extends domCore.DomVm {
        public ReactType = MenuGridRowReact;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowButtonExpand = new expandFile.RowButtonExpand.RowButtonExpandVm();
        public RowData: menuDataFile.Menu.IMenuData = { FID: "001001", IconUrl: "", IconName: "", ParentId: "001", MenuKindId: "", MenuName: "业务单", Key: "$$module/BiDa/Statistics/bd_Business_Statistics", ParentName: "必达金融", MenuKindName: "业务模块",UPDATE_TIME:"2015-06-03",KeyType:"mok"};
        public RowNumber: string;
        public MenuObj: menuFile.Right.MenuListPageVm; 

        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
    }

    export class MenuGridRowStates extends domCore.DomStates {
    }


    export class MenuGridRowProps extends domCore.DomProps<MenuGridRowVm>{
    }



}


