import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import pagination = require("./../../../../05tool/Pagination");
import DataFile = require("./../Data");
import constantData = require("./../../../Common/Data");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");

export module EditGroupRow {
    export class EditGroupRowAction extends domCore.DomAction {
    }

    export class EditGroupRowReact extends domCore.DomReact<EditGroupRowProps, EditGroupRowStates, EditGroupRowAction> implements domCore.IReact {

        public state = new EditGroupRowStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td  className={(this.props.Vm.IsAcsRelative ? "  Hf-relative Hf-table-td " : "") }
                    style={{ left: this.props.Vm.LeftNum }} >
                    <span>{this.createSingleCheckBox() }
                        <span>{this.props.Vm.RowNumber}
                        </span>
                    </span>
                </td>
                <td>{this.props.Vm.RowData.Name}</td>
                <td>{this.props.Vm.RowData.BeginDate}</td>
                <td>{this.props.Vm.RowData.PreNumber}</td>
                <td>{this.props.Vm.RowData.RealNumber}</td>
                <td>{this.props.Vm.GetText(constantData.Data.ExamBanlanceKindData, this.props.Vm.RowData.Status) }</td>
                <td>{this.props.Vm.RowData.Fee}</td>
                </tr>
                    
        }
        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

    }

    export interface IReactEditGroupRowVm extends domCore.DomVm {

    }

    export interface IEditGroupRowConfig {

        RowData: DataFile.Group.IBatch
    }

    export class EditGroupRowVm extends domCore.DomVm implements IReactEditGroupRowVm {
        public ReactType = EditGroupRowReact;
        public RowData: DataFile.Group.IBatch;
        public RowNumber: string;
        public LeftNum: number = 0;
        public IsAcsRelative: boolean = false;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();

        public constructor(config?: IEditGroupRowConfig) {
            super();
            if (config)
            {
                this.RowData = config.RowData
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
    export class EditGroupRowStates extends domCore.DomStates {
    }


    export class EditGroupRowProps extends domCore.DomProps<EditGroupRowVm>{
    }
}
