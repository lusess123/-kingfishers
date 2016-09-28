import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import singleCheckFile = require("./../../02col/02Mulite/SingleCheckBox");
import DataFile = require("./Data");
import expandFile = require("./RowButtonExpand");
import payApplyFile = require("./bdPayApplyPage");
export module bdPayApplyGridRow {
    export class bdPayApplyGridRowAction extends domCore.DomAction {
    }

    export class bdPayApplyGridRowReact extends domCore.DomReact<bdPayApplyGridRowProps, bdPayApplyGridRowStates, bdPayApplyGridRowAction> implements domCore.IReact {

        public state = new bdPayApplyGridRowStates();
        public pSender(): React.ReactElement<any> {
            var gridRow = this.createRow();
            return gridRow;
        }
        
        public createRow(): React.ReactElement<any> {
            return <tr>
                <td><span>{this.createSingleCheckBox() }<span>{this.props.Vm.RowNumber}</span></span></td>
                <td className="hide"><span><input placeholder=".." type="hidden"></input>{this.props.Vm.RowData.FID}</span></td>
                <td><a>{this.props.Vm.RowData.FlowNumber}</a></td>
                <td><span dangerouslySetInnerHTML={{ __html: this.props.Vm.RowData.ApplyUserId }} ></span></td>
                <td>{this.props.Vm.RowData.ApproveStatus}</td>
                <td>{this.props.Vm.RowData.ApproveUserId}</td>
                <td>{this.props.Vm.RowData.ReviewStatus}</td>
                <td>{this.props.Vm.RowData.ReviewUserId}</td>
                <td>{this.props.Vm.RowData.FBankType}</td>
                <td>{this.props.Vm.RowData.FAcceptkind}</td>
                <td>{this.props.Vm.RowData.FDepartmentID}</td>
                <td>{this.props.Vm.RowData.BdPayApplyWfStatus}</td>
                <td>{this.props.Vm.RowData.PrintState}</td>
                <td>{this.props.Vm.RowData.BdPayApplyWfIsEnd}</td>
                <td>{this.props.Vm.RowData.BdPayApplyIsApplyWf}</td>
                <td>{this.props.Vm.RowData.FControlUnitID}</td>
                </tr>
        }

        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }
        //private createRowButtonExpand(): React.ReactElement<any> {
        //    return this.props.Vm.RowButtonExpand.intoDom()
        //}
    }
    
    export class bdPayApplyGridRowVm extends domCore.DomVm {
        public ReactType = bdPayApplyGridRowReact;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowButtonExpand = new expandFile.RowButtonExpand.RowButtonExpandVm();
        public RowData: DataFile.PayApply.IPayApplyData = {
            FID: "", FlowNumber: "", BdPayApplyWfId: "", ApproveStatus: 0,
            ReviewStatus: 0, PayStatus: 0, ApproveUserId: "", PayUserId: "", ReviewUserId: "", PrintState: "",
            BdPayApplyWfStatus: "", BdPayApplyStepName: "", BdPayApplyWfTime: "", BdPayApplyWfIsEnd: "", BdPayApplyIsApplyWf: "", ApplyUserId: "",
            FAcceptkind: "", FBankType: "", FDepartmentID: "", FControlUnitID:""
        };
        public RowNumber: string;
        public BdPayApplyObj: payApplyFile.bdPayApplyPage.bdPayApplyPageVm;
    }

    export class bdPayApplyGridRowStates extends domCore.DomStates {
    }


    export class bdPayApplyGridRowProps extends domCore.DomProps<bdPayApplyGridRowVm>{
    }



}


