import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import gridRowFile = require("./AnomalyGridRowDom");
import rowButtonFile = require("./AnomalyRowButtonDom");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../Data");

export module AnomalyGridFormDom {
    export class AnomalyGridFormDomAction extends domCore.DomAction {
    }

    export class AnomalyGridFormDomReact extends domCore.DomReact<AnomalyGridFormDomProps, AnomalyGridFormDomStates, AnomalyGridFormDomAction> implements domCore.IReact {

        public state = new AnomalyGridFormDomStates();

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
                <th className={"thCheckAll text-center acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th  " : "") } style={{ left: this.props.Vm.LeftNum }}   >{this.props.Vm.AllCheck.intoDom() }</th>
                <th className="hide"><span>主键</span></th>
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>简码</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(150) }><span>异常名</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>序号</span></ThDom>
            </tr>
        };

        public initBody(): React.ReactElement<any> {
            return <tbody>
                {
                    this.props.Vm.RowList.map((row, index) => {
                        return [row.intoDom(), this.props.Vm.RowButtonList[index].intoDom()];
                    })
                }</tbody>;
        };

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

    export interface IAnomalyGridFormDomConfig {
        Data: Array<dataFile.Anomaly.IAnomalyData>;
        UniId: string;
    }

    export class AnomalyGridFormDomVm extends domCore.DomVm {
        public ReactType = AnomalyGridFormDomReact;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowList: gridRowFile.AnomalyGridRowDom.AnomalyGridRowDomVm[];
        public RowButtonList: rowButtonFile.AnomalyRowButtonDom.AnomalyRowButtonDomVm[];
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public FormData: Array<dataFile.Anomaly.IAnomalyData>;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();

        public constructor(config?: IAnomalyGridFormDomConfig) {
            super();
            this.FormData = new Array<dataFile.Anomaly.IAnomalyData>();
            this.RowList = new Array<gridRowFile.AnomalyGridRowDom.AnomalyGridRowDomVm>();
            this.RowButtonList = new Array<rowButtonFile.AnomalyRowButtonDom.AnomalyRowButtonDomVm>();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            if (config && config.Data) {
                this.FormData = config.Data;
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                    var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, RowNumber: rowNumber };
                    var rowVm = new gridRowFile.AnomalyGridRowDom.AnomalyGridRowDomVm(rowConfig);
                    this.RowList.push(rowVm);



                    var rowBtnConfig = { Row: rowVm, UniId: config.UniId }
                    var rowBtnVm = new rowButtonFile.AnomalyRowButtonDom.AnomalyRowButtonDomVm(rowBtnConfig);
                    this.RowButtonList.push(rowBtnVm);
                });
            }

        }




        public ScrollAuto(left: number) {
            this.IsAcsRelative = left > 0;
            this.LeftNum = left;
            this.forceUpdate("");
        }

    }
    export class AnomalyGridFormDomStates extends domCore.DomStates {
    }


    export class AnomalyGridFormDomProps extends domCore.DomProps<AnomalyGridFormDomVm>{
    }



}


