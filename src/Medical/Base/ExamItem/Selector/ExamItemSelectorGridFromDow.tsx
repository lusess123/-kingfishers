import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import gridRowFile = require("./ExamItemSelectorGirdRowDom");
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import React = require("react");
import ReactDOM = require("react-dom");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../Data");
export module ExamItemSelectorGridFromDow {
    export class ExamItemSelectorGridFromDowAction extends domCore.DomAction {
    }

    export class ExamItemSelectorGridFromDowReact extends domCore.DomReact<ExamItemSelectorGridFromDowProps, ExamItemSelectorGridFromDowStates, ExamItemSelectorGridFromDowAction> implements domCore.IReact {

        public state = new ExamItemSelectorGridFromDowStates();

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
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>简码</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(150) }><span>项目代码</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(150) }><span>项目名称</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>所属科室</span></ThDom>
            </tr>
        };
        public initBody(): React.ReactElement<any> {
            return <tbody>
                {
                    this.props.Vm.RowList.map((row, index) => {
                        return row.intoDom();
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

    export interface IExamItemSelectorGridFromDowConfig {
        Data: Array<dataFile.ExamItem.IExamItemData>;
        IsMultiSelect?: boolean;
        UniId: string;
    }

    export class ExamItemSelectorGridFromDowVm extends domCore.DomVm {
        public ReactType = ExamItemSelectorGridFromDowReact;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowList: gridRowFile.ExamItemSelectorGirdRow.ExamItemSelectorGirdRowVm[];
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public FormData: Array<dataFile.ExamItem.IExamItemData>;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public constructor(config?: IExamItemSelectorGridFromDowConfig) {
            super();
            this.FormData = new Array<dataFile.ExamItem.IExamItemData>();
            this.RowList = new Array<gridRowFile.ExamItemSelectorGirdRow.ExamItemSelectorGirdRowVm>();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            if (config && config.Data) {

                if (config.UniId) {
                    this.UniId = config.UniId;

                }
                this.FormData = config.Data;
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                    var rowConfig: gridRowFile.ExamItemSelectorGirdRow.ExamItemSelectorGirdRowConfig = {
                        RowData: rowData,
                        IsAcsRelative: this.IsAcsRelative,
                        LeftNum: this.LeftNum,
                        RowNumber: rowNumber,
                        IsMultiSelect: config.IsMultiSelect,
                        UniId: this.UniId 
                    };
                    var rowVm = new gridRowFile.ExamItemSelectorGirdRow.ExamItemSelectorGirdRowVm(rowConfig);
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
    export class ExamItemSelectorGridFromDowStates extends domCore.DomStates {
    }


    export class ExamItemSelectorGridFromDowProps extends domCore.DomProps<ExamItemSelectorGridFromDowVm>{
    }



}


