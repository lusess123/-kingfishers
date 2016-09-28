import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import row = require("./CensusDeptRowDom");
import Data = require("./Data");

export module CensusDeptGridFormDom {
    export class CensusDeptGridFormDomAction extends domCore.DomAction {
    }

    export class CensusDeptGridFormDomReact extends domCore.DomReact<CensusDeptGridFormDomProps, CensusDeptGridFormDomStates, CensusDeptGridFormDomAction> implements domCore.IReact {

        public state = new CensusDeptGridFormDomStates();

        public pSender(): React.ReactElement<any> {
            return <table className="table table-hover">
                <thead className='thead-default'>
                <tr className="ACT-HEADER MEMBER">
                    <th>部门</th>
                    <th>人数</th>
                    <th>总价</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.Vm.RowList.length > 0 ? this.props.Vm.RowList.map((a) => {
                        return a.intoDom();
                    }) : null
                }
                </tbody>
            </table>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }



    }

    export interface IReactCensusDeptGridFormDomVm extends domCore.DomVm {
        RowList: Array<row.CensusDeptRowDom.CensusDeptRowDomVm>;

    }

    export interface ICensusDeptGridFormDomConfig {
        datalist: Array<Data.CensusDept.censusDeptData>;

    }

    export class CensusDeptGridFormDomVm extends domCore.DomVm implements IReactCensusDeptGridFormDomVm {
        public ReactType = CensusDeptGridFormDomReact;
        public datalist: Array<Data.CensusDept.censusDeptData>;
        public RowList: Array<row.CensusDeptRowDom.CensusDeptRowDomVm> = [];
        public Row: row.CensusDeptRowDom.CensusDeptRowDomVm;

        public constructor(config?: ICensusDeptGridFormDomConfig) {
            super();
            if (config) {
                if (config.datalist) {
                    this.datalist = config.datalist;
                    this.datalist.forEach((a) => {
                        var rowconfig: row.CensusDeptRowDom.ICensusDeptRowDomConfig = { data: a }
                        this.Row = new row.CensusDeptRowDom.CensusDeptRowDomVm(rowconfig);
                        this.RowList.push(this.Row);
                    })
                }
            }
        }



    }
    export class CensusDeptGridFormDomStates extends domCore.DomStates {
    }


    export class CensusDeptGridFormDomProps extends domCore.DomProps<IReactCensusDeptGridFormDomVm>{
    }



}


