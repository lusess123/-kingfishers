import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import gridRowFile = require("./CombinationExamItemGridRowDow");
import rowButtonFile = require("./CombinationExamItemRowButtonDow");
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import React = require("react");
import ReactDOM = require("react-dom");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../Data");
export module CombinationExamItemGridFromDow {
    export class CombinationExamItemGridFromDowAction extends domCore.DomAction {
    }

    export class CombinationExamItemGridFromDowReact extends domCore.DomReact<CombinationExamItemGridFromDowProps, CombinationExamItemGridFromDowStates, CombinationExamItemGridFromDowAction> implements domCore.IReact {

        public state = new CombinationExamItemGridFromDowStates();

        public pSender(): React.ReactElement<any> {
            var theader = <thead>
                {this.initHeader() }
            </thead>
            var tbody = this.initBody();
            var table = <table>{theader}{tbody}</table>;
            return <div className="acs-table"  onScroll={(e) => { this.fun_Scroll(e); } }>{table}</div>;

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
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>套餐名称</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(150) }><span>项目名称</span></ThDom>
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

    export interface ICombinationExamItemGridFromDowConfig {
        Data: Array<dataFile.CombinationExamItem.ICombinationExamItemData>;
    }

    export class CombinationExamItemGridFromDowVm extends domCore.DomVm {
        public ReactType = CombinationExamItemGridFromDowReact;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowList: gridRowFile.CombinationExamItemGridRowDow.CombinationExamItemGridRowDowVm[];
        public RowButtonList: rowButtonFile.CombinationExamItemRowButtonDow.CombinationExamItemRowButtonDowVm[];
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public FormData: Array<dataFile.CombinationExamItem.ICombinationExamItemData>;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public constructor(config?: ICombinationExamItemGridFromDowConfig) {
            super();
            super();
            this.FormData = new Array<dataFile.CombinationExamItem.ICombinationExamItemData>();
            this.RowList = new Array<gridRowFile.CombinationExamItemGridRowDow.CombinationExamItemGridRowDowVm>();
            this.RowButtonList = new Array<rowButtonFile.CombinationExamItemRowButtonDow.CombinationExamItemRowButtonDowVm>();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            if (config && config.Data) {
                this.FormData = config.Data;
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                    var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, RowNumber: rowNumber };
                    var rowVm = new gridRowFile.CombinationExamItemGridRowDow.CombinationExamItemGridRowDowVm(rowConfig);
                    this.RowList.push(rowVm);



                    var rowBtnConfig = { Row: rowVm }
                    var rowBtnVm = new rowButtonFile.CombinationExamItemRowButtonDow.CombinationExamItemRowButtonDowVm(rowBtnConfig);
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
    export class CombinationExamItemGridFromDowStates extends domCore.DomStates {
    }


    export class CombinationExamItemGridFromDowProps extends domCore.DomProps<CombinationExamItemGridFromDowVm>{
    }



}


