import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./Data");

export module Week {
    export class WeekAction extends domCore.DomAction {
    }

    export class WeekReact extends domCore.DomReact<WeekProps, WeekStates, WeekAction> implements domCore.IReact {

        public state = new WeekStates();
        //  {this.props.Vm.WeekList.map((a) => { return this.week(a); }) }
        public pSender(): React.ReactElement<any> {
            return <li>
                    <div className="Hu-date">{this.props.Vm.Date }</div>
                    <div className="Hu-line-item ">
                        <div className="Hu-triangle"></div>
                        <div>                            <ol>{ this.fSendItems(this.props.Vm.Old) }</ol>
                        </div>
                        <div>
                            <ol>
                                {
                                    this.fSendItems(this.props.Vm.New)
                                }
                            </ol>
                        </div>
                        <em></em>
                    </div>
                </li>;
        }

        private fSendItems(list: ItemData[]): React.ReactNode
        {
            return list.map((a) => {
                if (a.Item) {
                    return <li>{a.Item}</li>;
                }
                return null;
            });

        }

       
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactWeekVm extends domCore.DomVm {
        Date: string;
        Old: dataFile.Updatelog.ItemData[];
        New: dataFile.Updatelog.ItemData[];
        Item: string;
    }
  
    export interface ItemData {
        Item: string;
    }
    export interface IWeekConfig {
        Date: string;
        Old: ItemData[];
        New: ItemData[];
    
    }

    export class WeekVm extends domCore.DomVm implements IReactWeekVm {
        public ReactType = WeekReact;

        public Date: string;
        public Old: dataFile.Updatelog.ItemData[] = [];
        public New: dataFile.Updatelog.ItemData[] = [];
        public Item: string;

        public constructor(config?: IWeekConfig) {
            super();
            if (config) {
                this.Date = config.Date;
                this.Old = config.Old;
                this.New = config.New;
            }
        }

    }
    export class WeekStates extends domCore.DomStates {
    }


    export class WeekProps extends domCore.DomProps<IReactWeekVm>{
    }



}


