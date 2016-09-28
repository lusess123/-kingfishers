import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./../data");


export module DetailAppraisalUserItemRow {
    export class DetailAppraisalUserItemRowAction extends domCore.DomAction { }


    export class DetailAppraisalUserItemRowReact extends domCore.DomReact<DetailAppraisalUserItemRowProps, DetailAppraisalUserItemRowStates, DetailAppraisalUserItemRowAction> implements domCore.IReact {
        public state = new DetailAppraisalUserItemRowStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td>{this.props.Vm.UserName}</td>
                {this.props.Vm.AppraisalItem.map(a => {
                    return <td>{this.GetValue(a.FID, a.UserId, a.ApparaisalId) }</td>
                }) }
                <td>{this.props.Vm.SumValue}</td>
            </tr>
        }
        public GetValue(b: string, c: string,d:string) {
            return this.props.Vm.GetValue(b,c,d);
        }
        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactDetailAppraisalUserItemRowVm extends domCore.DomVm {
        AppraisalItem: dataFile.Data.IAppraisalItemValue[];
        GetValue(b: string, c: string, d: string): string;
        UserName: string;
    }

    export interface IDetailAppraisalUserItemRowConfig {
        DataValue?: dataFile.Data.IAppraisalItemValue[];
        ItemData: dataFile.Data.AppraisalItem;
        UserName: string;
        Unid?: string;

    }

    export class DetailAppraisalUserItemRowVm extends domCore.DomVm implements IReactDetailAppraisalUserItemRowVm {
        public ReactType = DetailAppraisalUserItemRowReact;

        public ItemdData: dataFile.Data.AppraisalItem;
        public UserName: string;
        public AppraisalItem: dataFile.Data.IAppraisalItemValue[];
        public SumValue: number=0.00;
      

        public constructor(config?: IDetailAppraisalUserItemRowConfig) {
            super();
            if (config) {
                this.AppraisalItem = config.DataValue;
                this.UniId = config.Unid;
                this.UserName = config.UserName;
                this.ItemdData = config.ItemData;           
            }

        }
        public GetValue(b: string, c: string, d: string) {
            var value = "待计算";
            this.ItemdData.AppraisalItemValue.map(v => {
                if (v.FID == b && v.UserId == c && v.ApparaisalId == d) {
                    value = v.Result;
                }
            })
            this.SumValue += Number(value);
            return value;
        }
      
    }

    export class DetailAppraisalUserItemRowStates extends domCore.DomStates {

    }

    export class DetailAppraisalUserItemRowProps extends domCore.DomProps<DetailAppraisalUserItemRowVm> { }
}