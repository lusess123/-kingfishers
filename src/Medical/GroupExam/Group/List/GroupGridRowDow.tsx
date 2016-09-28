import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import expandFile = require("./../../../Common/RowButtonExpandDom");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import rowDataFlie = require("./../Data");

import React = require("react");
import ReactDOM = require("react-dom");
import DataFile = require("./../Data")
import constantData = require("./../../../Common/Data");

export module GroupGridRowDow {
    export class GroupGridRowDowAction extends domCore.DomAction {
    }

    export class GroupGridRowDowReact extends domCore.DomReact<GroupGridRowDowProps, GroupGridRowDowStates, GroupGridRowDowAction> implements domCore.IReact {

        public state = new GroupGridRowDowStates();
        public pSender(): React.ReactElement<any> {
            return <tr>
                <td>{this.props.Vm.RowData.GroupName}</td>
                <td>{this.props.Vm.RowData.BatchName}</td>
                <td>{this.props.Vm.RowData.Name}</td>
                <td>{this.props.Vm.GetText(constantData.Data.GenderTypeData, this.props.Vm.RowData.Gender)}</td>
                <td>{this.props.Vm.RowData.Phone}</td>
                <td>{this.props.Vm.GetText(constantData.Data.ExamStatusData, this.props.Vm.RowData.Status) }</td>
            </tr>
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }

        private createRowButtonExpand(): React.ReactElement<any> {
            return this.props.Vm.RowButtonExpand.intoDom();
        }

    }
      
    export interface IGroupGridRowDowConfig {
        RowData: DataFile.Group.IMember;
        IsAcsRelative: boolean;
        LeftNum: number;
        RowNumber: string;
    }
    
    export class GroupGridRowDowVm extends domCore.DomVm {
        public ReactType = GroupGridRowDowReact;
        public RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowNumber: string;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowData: DataFile.Group.IMember;
        public constructor(config?: IGroupGridRowDowConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.LeftNum = config.LeftNum;
                this.RowNumber = config.RowNumber
            }
        }
        public GetText(List: any, Id: string): string {
            for (var index = 0; index < List.length; index++) {
                if (List[index].Value == Id) {
                    return List[index].Text;
                }
            }
            return ""
        }

    }
    export class GroupGridRowDowStates extends domCore.DomStates {
    }


    export class GroupGridRowDowProps extends domCore.DomProps<GroupGridRowDowVm>{
    }



}


