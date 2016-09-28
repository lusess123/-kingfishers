import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import Data = require("./../Data");
import expandFile = require("./../../../Common/RowButtonExpandDom");
import radioFile = require("./../../../../02col/01single/Radio");


export module ExamItemSelectorGirdRow {
    export class ExamItemSelectorGirdRowAction extends domCore.DomAction { }

    export class ExamItemSelectorGirdRowReact extends domCore.DomReact<ExamItemSelectorGirdRowProps, ExamItemSelectorGirdRowStates, ExamItemSelectorGirdRowAction> implements domCore.IReact {
        public state = new ExamItemSelectorGirdRowStates();

        public pSender(): React.ReactElement<any> {
            return <tr
                onClick ={() => { this.trClick_fun(); } }
                className={(this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" || this.props.Vm.RowData.IsSelect) ? " Hu-tr-bottom-none Hs-check-bg " : ""}>
                <td className={(this.props.Vm.IsAcsRelative ? "acsRelative  acsTableTr" : "") } style={{ left: this.props.Vm.LeftNum }}>
                    <span>{this.createSingleCheckBox()}
                        <span>{this.props.Vm.RowNumber}
                        </span>
                    </span>
                </td>
                <td className="hide"><span><input placeholder=".." type="hidden"></input></span></td>
                <td><span><span>{this.props.Vm.RowData.SimpleCode}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.ItemCode}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Name}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.DepartmentId}</span></span></td>
            </tr>
        }
        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.IsMultiSelect ? this.props.Vm.SingleCheckVm.intoDom() : this.props.Vm.RadioVm.intoDom();
        }

        public createRowButtonExpand(): React.ReactElement<any> {
            return this.props.Vm.RowButtonExpand.intoDom();
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }

        private trClick_fun()
        {
            this.props.Vm.clickItem();
        }  

    }

    export interface ExamItemSelectorGirdRowConfig {
        RowData: Data.ExamItem.IExamItemData;
        IsAcsRelative: boolean;
        LeftNum: number;
        RowNumber: string;
        IsMultiSelect?: boolean;
        UniId: string;
    }

    export interface IPickItem {
        Key: string;
        Text: string;
        IsSelect?: boolean;
    }

    export class ExamItemSelectorGirdRowVm extends domCore.DomVm {
        public ReactType = ExamItemSelectorGirdRowReact;

        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RadioVm = new radioFile.ui.RadioVm();
        public IsAcsRelative: boolean = false;
        public RowData: Data.ExamItem.IExamItemData;
        public RowNumber: string;
        public LeftNum: number = 0;
        public IsMultiSelect: boolean = true;

        public RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();

        public constructor(config?: ExamItemSelectorGirdRowConfig) {
            super();
            if (config) {

                if (config.UniId) {
                    this.UniId = config.UniId;
                }
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.LeftNum = config.LeftNum;
                this.RowNumber = config.RowNumber;
                if (config.IsMultiSelect != undefined ||config.IsMultiSelect!=null)
                {
                    this.IsMultiSelect = config.IsMultiSelect;
                }


                this.listenAppEvent("PickDom-SetSelect", this.UniId, (keys: string[]) => {
                    if (keys.indexOf(this.RowData.FID) >= 0) {
                        this.RowData.IsSelect = true;
                        this.forceUpdate("");
                        //alert(this.RowData.FID +  " 选中");

                    }
                   // alert();
                });

                this.listenAppEvent("pickerContainerDelItem", this.UniId, (k:string) => {
                    var _index: number = -1;

                    if (k == this.RowData.FID) {
                        this.RowData.IsSelect = false;
                        this.SingleCheckVm.dataValueSet("false");
                    }
                    this.forceUpdate("");
                   // alert();
                    // this.emitAppEvent("pickerContainerDelItemForce", this.UniId);
                })
            }
        }


        public clickItem()
        {

            var item: IPickItem =
                {
                    Key: this.RowData.FID,
                    Text: this.RowData.Name,
                    IsSelect: this.RowData.IsSelect 
                    
                };
          //  this.RowData.FID 
            if (!item.IsSelect) {
                this.RowData.IsSelect = true;
                this.SingleCheckVm.dataValueSet("true");
               // item.IsSelect = true;
                this.forceUpdate("");
                this.emitAppEvent("pickerContainerAddItem", this.UniId, { Text: item.Text, Key: item.Key });
            } else {
              //  item.IsSelect = false;
                //this.forceUpdate("");
                this.RowData.IsSelect = false;
                this.SingleCheckVm.dataValueSet("false");
                this.forceUpdate("");
                this.emitAppEvent("pickerContainerDelItem", this.UniId, item.Key);
            }
        }

    }

    export class ExamItemSelectorGirdRowStates extends domCore.DomStates { }

    export class ExamItemSelectorGirdRowProps extends domCore.DomProps<ExamItemSelectorGirdRowVm>{ }
}