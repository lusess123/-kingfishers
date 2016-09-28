import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import gridRowFile = require("./AppraisalItemSelectorGridRowDom");
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import React = require("react");
import ReactDOM = require("react-dom");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../Data");

export module AppraisalItemSelectorGridFormDom {
    export class AppraisalItemSelectorGridFormDomAction extends domCore.DomAction {
    }

    export class AppraisalItemSelectorGridFormDomReact extends domCore.DomReact<AppraisalItemSelectorGridFormDomProps, AppraisalItemSelectorGridFormDomStates, AppraisalItemSelectorGridFormDomAction> implements domCore.IReact {

        public state = new AppraisalItemSelectorGridFormDomStates();

        public pSender(): React.ReactElement<any> {
            var theader = <thead className="thead-default">
                {this.initHeader() }
            </thead>
            var tbody = this.initBody();
            var table = <table className="table table-striped table-bordered table-hover">{theader}{tbody}</table>;
            return <div className="table-responsive"  onScroll={(e) => { this.fun_Scroll(e); } }>{table}</div>;

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
                <th className={"thCheckAll text-center " + (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-th  " : "") } style={{ left: this.props.Vm.LeftNum }}   >{this.props.Vm.AllCheck.intoDom() }</th>
                <th className="hide"><span>主键</span></th>
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>分类名</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(150) }><span>项目名</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(150) }><span>目标值</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>最大值</span></ThDom>
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

    export interface IAppraisalItemSelectorGridFormDomConfig {
        Data: Array<dataFile.Data.IAppraisalItemData>;
        IsMultiSelect?: boolean;
        UniId: string;
    }

    export class AppraisalItemSelectorGridFormDomVm extends domCore.DomVm {
        public ReactType = AppraisalItemSelectorGridFormDomReact;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowList: gridRowFile.AppraisalItemSelectorGridRowDom.AppraisalItemSelectorGridRowDomVm[];
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public FormData: Array<dataFile.Data.IAppraisalItemData>;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public constructor(config?: IAppraisalItemSelectorGridFormDomConfig) {
            super();
            this.FormData = new Array<dataFile.Data.IAppraisalItemData>();
            this.RowList = new Array<gridRowFile.AppraisalItemSelectorGridRowDom.AppraisalItemSelectorGridRowDomVm>();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            if (config && config.Data) {

                if (config.UniId) {
                    this.UniId = config.UniId;

                }
                this.FormData = config.Data;
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                    var rowConfig: gridRowFile.AppraisalItemSelectorGridRowDom.AppraisalItemSelectorGridRowDomConfig = {
                        RowData: rowData,
                        IsAcsRelative: this.IsAcsRelative,
                        LeftNum: this.LeftNum,
                        RowNumber: rowNumber,
                        IsMultiSelect: config.IsMultiSelect,
                        UniId: this.UniId 
                    };
                    var rowVm = new gridRowFile.AppraisalItemSelectorGridRowDom.AppraisalItemSelectorGridRowDomVm(rowConfig);
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
    export class AppraisalItemSelectorGridFormDomStates extends domCore.DomStates {
    }


    export class AppraisalItemSelectorGridFormDomProps extends domCore.DomProps<AppraisalItemSelectorGridFormDomVm>{
    }



}


