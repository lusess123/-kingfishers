import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import gridRowFile = require("./ResultCommonGridRowDow");
import rowButtonFile = require("./ResultCommonRowButtonDow");
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import React = require("react");
import ReactDOM = require("react-dom");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../Data");
export module ResultCommonGridFromDow {
    export class ResultCommonGridFromDowAction extends domCore.DomAction {
    }

    export class ResultCommonGridFromDowReact extends domCore.DomReact<ResultCommonGridFromDowProps, ResultCommonGridFromDowStates, ResultCommonGridFromDowAction> implements domCore.IReact {

        public state = new ResultCommonGridFromDowStates();


        public pSender(): React.ReactElement<any> {
            var theader = <thead className="thead-default">
                {this.initHeader() }
            </thead>
            var tbody = this.initBody();

            var table = <table className="table table-hover">{theader}{tbody}</table>;
            return <div className="Hm-table"  onScroll={(e) => { this.fun_Scroll(e); } }>{table}</div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.ScrollAuto(_$obj.scrollLeft());
        }
        public initHeader(): React.ReactElement<any> {
            return <tr className="ACT-HEADER MEMBER">
                <th className={"thCheckAll acsTextC acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh  " : "") } style={{ left: this.props.Vm.LeftNum }}   >{this.props.Vm.AllCheck.intoDom() }</th>
                <th className="hide"><span>主键</span></th>
                <ThDom children={null} Vm={this.getThDomVM(100) }><span>简码</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>体检项目</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(300) }><span>体检结果</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(100) }><span>序号</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>最后编辑时间</span></ThDom>
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

        private getThDomVM(w?: number) {
            var _ther = new thFile.Web.ThDomVm();
            if (w) {
                _ther.Width = w;
            }
            return _ther;
        }
    }

    export interface IResultCommonGridFromDowConfig {
        Data: Array<dataFile.ResultCommon.IResultCommonData>;
        UniId: string;
    }

    export class ResultCommonGridFromDowVm extends domCore.DomVm {
        public ReactType = ResultCommonGridFromDowReact;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowList: gridRowFile.ResultCommonGridRowDow.ResultCommonGridRowDowVm[];
        public RowButtonList: rowButtonFile.ResultCommonRowButtonDow.ResultCommonRowButtonDowVm[];
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public FormData: Array<dataFile.ResultCommon.IResultCommonData>;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public constructor(config?: IResultCommonGridFromDowConfig) {
            super();
            this.FormData = new Array<dataFile.ResultCommon.IResultCommonData>();
            this.RowList = new Array<gridRowFile.ResultCommonGridRowDow.ResultCommonGridRowDowVm>();
            this.RowButtonList = new Array<rowButtonFile.ResultCommonRowButtonDow.ResultCommonRowButtonDowVm>();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            if (config && config.Data) {
                this.FormData = config.Data;
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                    var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, RowNumber: rowNumber };
                    var rowVm = new gridRowFile.ResultCommonGridRowDow.ResultCommonGridRowDowVm(rowConfig);
                    this.RowList.push(rowVm);



                    var rowBtnConfig = { Row: rowVm, UniId: config.UniId }
                    var rowBtnVm = new rowButtonFile.ResultCommonRowButtonDow.ResultCommonRowButtonDowVm(rowBtnConfig);
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
    export class ResultCommonGridFromDowStates extends domCore.DomStates {
    }


    export class ResultCommonGridFromDowProps extends domCore.DomProps<ResultCommonGridFromDowVm>{
    }



}


