import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import eventFile = require("./../../../01core/event");
import React = require("react");
import ReactDOM = require("react-dom");
import Data = require("./../../Base/Anomaly/Data");

import row = require("./PersonPaymentRowDom");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");


export module PersonPaymentGridFormDom {

    export class PersonPaymentGridFormDomAction extends domCore.DomAction {
    }

    export class PersonPaymentGridFormDomReact extends domCore.DomReact<PersonPaymentGridFormDomProps, PersonPaymentGridFormDomStates, PersonPaymentGridFormDomAction> implements domCore.IReact {

        public state = new PersonPaymentGridFormDomStates();

        public pSender(): React.ReactElement<any> {
            return <table className="table table-striped table-bordered table-hover">
                <thead className="thead-default">
                    <tr>
                        <th>{this.props.Vm.AllCheck.intoDom() }</th>
                        <th>体检人</th>
                        <th>体检时间</th>
                        <th>缴费时间</th>
                        <th className="text-right">缴费金额（元）</th>
                        <th>单位</th>
                        <th>状态</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.Vm.RowItemList ?
                        this.props.Vm.RowItemList.map((row, index) => {
                            return row.intoDom();
                        }) : null}
                </tbody>
            </table>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();
        }
    }

    export interface IReactPersonPaymentGridFormDomVm extends domCore.DomVm {

    }

    export interface IPersonPaymentGridFormDomConfig {
        Data: Data.Anomaly.IPersonCharge[];
    }

    export class PersonPaymentGridFormDomVm extends domCore.DomVm implements IReactPersonPaymentGridFormDomVm {

        public ReactType = PersonPaymentGridFormDomReact;
        public List: Data.Anomaly.IPersonCharge[];
        public RowItemList: row.PersonPaymentRowDom.PersonPaymentRowDomVm[];
        public row: row.PersonPaymentRowDom.PersonPaymentRowDomVm;
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public constructor(config?: IPersonPaymentGridFormDomConfig) {
            super();

            this.RowItemList = new Array<row.PersonPaymentRowDom.PersonPaymentRowDomVm>();
            if (config) {
                this.List = config.Data
                this.UniId = eventFile.App.getUniId().toString();
                this.List.map((data, number) => {
                    var rowdata: row.PersonPaymentRowDom.IPersonPaymentRowDomConfig = { data: data, number: number + 1, Unid: this.UniId };

                    var rowVm = new row.PersonPaymentRowDom.PersonPaymentRowDomVm(rowdata);
                    this.RowItemList.push(rowVm);
                })
            }

            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();

            this.AllCheck.ChangeEventFun = (val, col) => {
                this.allselect(val);
                return true;
            }


            this.listenAppEvent("medical/personpayment/Row", this.UniId, () => {
                this.IsMulit = true;
                this.IsChange = true;
                this.forceUpdate("");
            });



        }

        public allselect(select: string) {
            var val;

            if (select == "true") {
                val = "1"
            } else if (select == "false") {
                val = "0"
            }
            this.List.forEach((a) => {
                a.isSelect = val;
            })

            this.RowItemList.forEach((a) => {
                if (val == "1") {
                    a.AllCheck.dataValueSet("true");
                } else if (val == "0") {
                    a.AllCheck.dataValueSet("false");
                }
            })

        }
    }


    export class PersonPaymentGridFormDomStates extends domCore.DomStates { }

    export class PersonPaymentGridFormDomProps extends domCore.DomProps<PersonPaymentGridFormDomVm> { }
}