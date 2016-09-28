import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import gridRowFile = require("./RepairRateStatisticsGirdRowDom");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../Data");

export module RepairRateStatisticsGirdFormDom {
    export class RepairRateStatisticsGirdFormDomAction extends domCore.DomAction {
    }

    export class RepairRateStatisticsGirdFormDomReact extends domCore.DomReact<RepairRateStatisticsGirdFormDomProps, RepairRateStatisticsGirdFormDomStates, RepairRateStatisticsGirdFormDomAction> implements domCore.IReact {

        public state = new RepairRateStatisticsGirdFormDomStates();

        public pSender(): React.ReactElement<any> {
            var theader = <thead className="thead-default">
                {this.initHeader() }
            </thead>
            var tbody = this.initBody();
            var table = <table className="table table-hover">{theader}{tbody}</table>;
            return <div className="Hm-table"  onScroll={(e) => { this.fun_Scroll(e); } }>{table}</div>;
        }

        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.ScrollAuto(_$obj.scrollLeft());
        }

        private initHeader(): React.ReactElement<any> {
            return <tr className="ACT-HEADER MEMBER">

                {this.props.Vm.ColList.map((col) => {
                    return <th><span>{col}</span></th>
                }) }
            </tr>
        };

        public initBody(): React.ReactElement<any> {
            return <tbody>
                {
                    this.props.Vm.RowList.map((row, index) => {
                        return row.intoDom()
                    })
                }</tbody>;
        };

        public initTotal(): React.ReactElement<any> {

            return <tbody>
                {
                    this.props.Vm.RowList.map((row, index) => {
                        return row.intoDom()
                    })
                }
            </tbody>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        private getThDomVM(w?: number) {
            var _ther = new thFile.Web.ThDomVm();
            if (w) {
                _ther.Width = w;
            }
            return _ther;
        }
    }

    export interface IRepairRateStatisticsGirdFormDomConfig {
        DataSet?: any
        UniId: string;
    }

    export class RepairRateStatisticsGirdFormDomVm extends domCore.DomVm {
        public ReactType = RepairRateStatisticsGirdFormDomReact;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowList: gridRowFile.RepairRateStatisticsGirdRowDom.RepairRateStatisticsGirdRowDomVm[];
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public FormData: any;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public ColList: string[] = [];
        public constructor(config?: IRepairRateStatisticsGirdFormDomConfig) {
            super();
            this.FormData = {};
            this.RowList = new Array<gridRowFile.RepairRateStatisticsGirdRowDom.RepairRateStatisticsGirdRowDomVm>();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            if (config && config.DataSet) {
                this.FormData = config.DataSet;
                var oriColList = [];
                for (var col in this.FormData["Table"][0]) {
                    oriColList.push(col);
                    if (col == "createTime") {
                        col = "日期";
                    }
                    if (col == "1day") {
                        col = "当天修复率";
                    }
                    if (col == "2day") {
                        col = "二天修复率";
                    }
                    if (col == "otherday") {
                        col = "三天及以上修复率";
                    }
                    this.ColList.push(col);
                    //this.ColList.map(a => {
                    //    var data: dataFile.ApplianceRepairRate.IRowTotalData = { Name:"",Value:0 };
                    //    data.Name = a;
                    //    data.Value = 0;
                    //    this.dsList.push(data);
                    //})
                    //this.dsList.map(b => {
                    //    this.FormData["Table"].forEach((rowData, index) => {
                    //        if (b.Name = col)
                    //        b.Value = +rowData[b.Name];
                    //    })
                    //})

                }
                this.FormData["Table"].forEach((rowData, index) => {
                    var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                    var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, RowNumber: rowNumber, ColList: oriColList };
                    var rowVm = new gridRowFile.RepairRateStatisticsGirdRowDom.RepairRateStatisticsGirdRowDomVm(rowConfig);
                    this.RowList.push(rowVm);

                });
            }

        }
        public ScrollAuto(left: number) {
            this.IsAcsRelative = left > 0;
            this.LeftNum = left;
            this.forceUpdate("");
        }

    }
    export class RepairRateStatisticsGirdFormDomStates extends domCore.DomStates {
    }


    export class RepairRateStatisticsGirdFormDomProps extends domCore.DomProps<RepairRateStatisticsGirdFormDomVm>{
    }



}


