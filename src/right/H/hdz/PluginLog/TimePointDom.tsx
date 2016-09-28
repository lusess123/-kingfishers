import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./Data");
import timePointRow = require("./TimePointRowDom");

export module TimePointDom {
    export class TimePointDomAction extends domCore.DomAction {
    }

    export class TimePointDomReact extends domCore.DomReact<TimePointDomProps, TimePointDomStates, TimePointDomAction> implements domCore.IReact {

        public state = new TimePointDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hg-relative">
                {this._initPlugTable()}
            </div>;
        }

        public _initPlugTable(): React.ReactElement<any> {
            return <div className="Hm-plug-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>名称</th><th>文字信息</th><th>时间</th><th>耗时(ms)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.Vm.TimePointRowList.map((a) => { return a.intoDom(); })
                        }
                    </tbody>
                </table>
            </div>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactTimePointDomVm extends domCore.DomVm {
        TimePointRowList: timePointRow.TimePointRowDom.TimePointRowDomVm[];
    }

    export interface ITimePointDomConfig {
        TimePointRowList: dataFile.Pluginlog.TimePointData[];

    }

    export class TimePointDomVm extends domCore.DomVm implements IReactTimePointDomVm {
        public ReactType = TimePointDomReact;

        public TimePointRowList: timePointRow.TimePointRowDom.TimePointRowDomVm[] = [];
        public Row: timePointRow.TimePointRowDom.TimePointRowDomVm;
        public Data: dataFile.Pluginlog.TimePointData[];
        public constructor(config?: ITimePointDomConfig) {
            super();
            if (config.TimePointRowList) {
                this.Data = config.TimePointRowList;

                this.Data.forEach((a) => {
                    var config: timePointRow.TimePointRowDom.ITimePointRowDomConfig = { Name: a.Name, Text: a.Text, Time: a.Time, CostTime: a.CostTime }

                    this.Row = new timePointRow.TimePointRowDom.TimePointRowDomVm(config);

                    this.TimePointRowList.push(this.Row);
                })
            }
        }

        

    }
    export class TimePointDomStates extends domCore.DomStates {
    }


    export class TimePointDomProps extends domCore.DomProps<IReactTimePointDomVm>{
    }



}


