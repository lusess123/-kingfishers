import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import weekFile = require("./Week");

export module Year {
    export class YearAction extends domCore.DomAction {
    }

    export class YearReact extends domCore.DomReact<YearProps, YearStates, YearAction> implements domCore.IReact {

        public state = new YearStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="Hu-year">{this.props.Vm.Year}</div>
                <ul>
                    {this.props.Vm.WeekList.map((weekVm) => { return weekVm.intoDom() ;})}
                </ul>
            </div>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactYearVm extends domCore.DomVm {
        Year: string;
        WeekList: weekFile.Week.WeekVm[];
    }
    export interface WeekData {
        Date: string;
        Old: ItemData[];
        New: ItemData[];
    }

    export interface ItemData {
        Item: string;
    }
    export interface IYearConfig {

        Year: string;
        Weeks: WeekData[];
    }

    export class YearVm extends domCore.DomVm implements IReactYearVm {
        public ReactType = YearReact;

        public Year: string;
        public WeekList: weekFile.Week.WeekVm[] = [];

        public constructor(config?: IYearConfig) {
            super();

            if (config) {
                this.Year = config.Year;

                config.Weeks.forEach((week) => {

                    this.WeekList.push(new weekFile.Week.WeekVm(week));

                });
            }

        }

    }
    export class YearStates extends domCore.DomStates {
    }


    export class YearProps extends domCore.DomProps<IReactYearVm>{
    }



}



