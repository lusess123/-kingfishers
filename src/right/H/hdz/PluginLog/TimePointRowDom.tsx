import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./Data");

export module TimePointRowDom {
    export class TimePointRowDomAction extends domCore.DomAction {
    }

    export class TimePointRowDomReact extends domCore.DomReact<TimePointRowDomProps, TimePointRowDomStates, TimePointRowDomAction> implements domCore.IReact {

        public state = new TimePointRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td>{this.props.Vm.Name}</td>
                <td>{this.props.Vm.Text}</td>
                <td>{this.props.Vm.Time}</td>
                <td>{this.props.Vm.CostTime}</td>
            </tr>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactTimePointRowDomVm extends domCore.DomVm {
        Name: string;
        Text: string;
        Time: string;
        CostTime: string;
    }

    export interface ITimePointRowDomConfig {
        Name: string;
        Text: string;
        Time: string;
        CostTime: string;
    }

    export class TimePointRowDomVm extends domCore.DomVm implements IReactTimePointRowDomVm {
        public ReactType = TimePointRowDomReact;

        public Name: string;
        public Text: string;
        public Time: string;
        public CostTime: string;

        public constructor(config?: ITimePointRowDomConfig) {
            super();
            if (config) {
                if (config.Name) {
                    this.Name = config.Name;
                }
                if (config.Text) {
                    this.Text = config.Text;
                }
                if (config.Time) {
                    this.Time = config.Time;
                }
                if (config.CostTime) {
                    this.CostTime = config.CostTime;
                }
            }
            
        }

    }
    export class TimePointRowDomStates extends domCore.DomStates {
    }


    export class TimePointRowDomProps extends domCore.DomProps<IReactTimePointRowDomVm>{
    }



}


