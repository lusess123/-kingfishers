import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import gridRowFile = require("./CensusDoctorGridRowDom");
import rowButtonFile = require("./CensusDoctorRowButtonDom");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../Data");

export module CensusDoctorGridFormDom {
    export class CensusDoctorGridFormDomAction extends domCore.DomAction {
    }

    export class CensusDoctorGridFormDomReact extends domCore.DomReact<CensusDoctorGridFormDomProps, CensusDoctorGridFormDomStates, CensusDoctorGridFormDomAction> implements domCore.IReact {

        public state = new CensusDoctorGridFormDomStates();

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
                <ThDom children={null} Vm={this.getThDomVM(10) }><span>序号</span></ThDom>
                <th className="hide"><span>主键</span></th>
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>体检医生</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(150) }><span>所属部门</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>类别</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>体检人</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>体检时间</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>录入时间</span></ThDom>
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

    export interface ICensusDoctorGridFormDomConfig {
        Data: Array<dataFile.CensusDoctor.ICensusDoctorData>;
        UniId: string;
    }

    export class CensusDoctorGridFormDomVm extends domCore.DomVm {
        public ReactType = CensusDoctorGridFormDomReact;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowList: gridRowFile.CensusDoctorGridRowDom.CensusDoctorGridRowDomVm[];
        public RowButtonList: rowButtonFile.CensusDoctorRowButtonDom.CensusDoctorRowButtonDomVm[];
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public FormData: Array<dataFile.CensusDoctor.ICensusDoctorData>;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();

        public constructor(config?: ICensusDoctorGridFormDomConfig) {
            super();
            this.FormData = new Array<dataFile.CensusDoctor.ICensusDoctorData>();
            this.RowList = new Array<gridRowFile.CensusDoctorGridRowDom.CensusDoctorGridRowDomVm>();
            this.RowButtonList = new Array<rowButtonFile.CensusDoctorRowButtonDom.CensusDoctorRowButtonDomVm>();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            if (config && config.Data) {
                this.FormData = config.Data;
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                    var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, RowNumber: rowNumber };
                    var rowVm = new gridRowFile.CensusDoctorGridRowDom.CensusDoctorGridRowDomVm(rowConfig);
                    this.RowList.push(rowVm);



                    var rowBtnConfig = { Row: rowVm, UniId: config.UniId }
                    var rowBtnVm = new rowButtonFile.CensusDoctorRowButtonDom.CensusDoctorRowButtonDomVm(rowBtnConfig);
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
    export class CensusDoctorGridFormDomStates extends domCore.DomStates {
    }


    export class CensusDoctorGridFormDomProps extends domCore.DomProps<CensusDoctorGridFormDomVm>{
    }



}


