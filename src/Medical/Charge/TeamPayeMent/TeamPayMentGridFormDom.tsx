import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import Data = require("./../../Base/Anomaly/Data");
import row = require("./TeamPayMentRowDom");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
import eventFile = require("./../../../01core/event");
export module TeamPayMentGridFormDom {

    export class TeamPayMentGridFormDomAction extends domCore.DomAction {
    }

    export class TeamPayMentGridFormDomReact extends domCore.DomReact<TeamPayMentGridFormDomProps, TeamPayMentGridFormDomStates, TeamPayMentGridFormDomAction> implements domCore.IReact {

        public state = new TeamPayMentGridFormDomStates();

        public pSender(): React.ReactElement<any> {
            return <table className="table table-striped table-bordered table-hover">
                <thead className="thead-default">
                    <tr>
                        <th>{this.props.Vm.AllCheck.intoDom() }</th>
                        <th>批次</th>
                        <th>体检时间</th>
                        <th>缴费时间</th>
                        <th className="text-right">缴费金额（元）</th>
                        <th>单位</th>
                        <th>状态</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.Vm.rowList ?
                        this.props.Vm.rowList.map((row, index) => {
                            return row.intoDom();
                        }) : null
                    }
                </tbody>
            </table>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();
        }
    }

    export interface IReactTeamPayMentGridFormDomVm extends domCore.DomVm {

    }

    export interface ITeamPayMentGridFormDomConfig {
        Data: Data.Anomaly.ITeamCharge[];
    }

    export class TeamPayMentGridFormDomVm extends domCore.DomVm implements IReactTeamPayMentGridFormDomVm {

        public ReactType = TeamPayMentGridFormDomReact;
        public List: Data.Anomaly.ITeamCharge[];

        public rowList: row.TeamPayMentRowDom.TeamPayMentRowDomVm[];
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public constructor(config?: ITeamPayMentGridFormDomConfig) {
            super();

            this.UniId = eventFile.App.getUniId().toString();

            if (config && config.Data) {
                this.List = config.Data
                this.rowList = new Array<row.TeamPayMentRowDom.TeamPayMentRowDomVm>();
                config.Data.forEach((a, number) => {
                    var rowdata: row.TeamPayMentRowDom.ITeamPayMentRowDomConfig = { data: a, number: number + 1, Unid: this.UniId };
                    rowdata.data = a;
                    var dd = new row.TeamPayMentRowDom.TeamPayMentRowDomVm(rowdata);
                    this.rowList.push(dd);
                })
            }

            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();

            this.AllCheck.ChangeEventFun = (val, col) => {
                this.allselect(val);
                return true;
            }

            this.listenAppEvent("medical/teampayment/Row", this.UniId, () => {
                this.rowList.forEach((a) => {
                    a.IsChange = true;
                })
                //this.IsMulit = true;
                //this.IsChange = true;
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

            this.rowList.forEach((a) => {
                if (val == "1") {
                    a.AllCheck.dataValueSet("true");
                } else if (val == "0") {
                    a.AllCheck.dataValueSet("false");
                }
            })




        }
    }

    export class TeamPayMentGridFormDomStates extends domCore.DomStates { }

    export class TeamPayMentGridFormDomProps extends domCore.DomProps<TeamPayMentGridFormDomVm> { }
}