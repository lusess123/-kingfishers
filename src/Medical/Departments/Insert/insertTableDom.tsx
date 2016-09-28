import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import thFile = require("./../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import gridRowFile = require("./insertRowDom");
import rowButtonFile = require("./InsertRowButtonDom");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../Data");

export module InsertGridFormDom {
    export class InsertGridFormDomAction extends domCore.DomAction {
    }

    export class InsertGridFormDomReact extends domCore.DomReact<InsertGridFormDomProps, InsertGridFormDomStates, InsertGridFormDomAction> implements domCore.IReact {

        public state = new InsertGridFormDomStates();

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
                <th className={"thCheckAll text-center acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th  " : "") }>{this.props.Vm.AllCheck.intoDom() }</th>
                <th className="hide"><span>主键</span></th>
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>姓名</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(150) }><span>身份证</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>体检号</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>档案号</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>单位</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>状态</span></ThDom>
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

    export interface IInsertGridFormDomConfig {
        Data: Array<dataFile.Result.IInsertData>;
        UniId: string;
    }

    export class InsertGridFormDomVm extends domCore.DomVm {
        public ReactType = InsertGridFormDomReact;
        public IsAcsRelative: boolean = false;
        //public LeftNum: number = 0;
        public RowList: gridRowFile.InsertRowDom.InsertRowDomVm[];
        public RowButtonList: rowButtonFile.InsertRowButtonDom.AnomalyRowButtonDomVm[];
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public FormData: Array<dataFile.Result.IInsertData>;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();

        public constructor(config?: IInsertGridFormDomConfig) {
            super();
            this.FormData = new Array<dataFile.Result.IInsertData>();
            this.RowList = new Array<gridRowFile.InsertRowDom.InsertRowDomVm>();
            this.RowButtonList = new Array<rowButtonFile.InsertRowButtonDom.AnomalyRowButtonDomVm>();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            if (config && config.Data) {
                this.FormData = config.Data;
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                    var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, RowNumber: rowNumber };
                    var rowVm = new gridRowFile.InsertRowDom.InsertRowDomVm(rowConfig);
                    this.RowList.push(rowVm);



                    var rowBtnConfig = { Row: rowVm, UniId: config.UniId }
                    var rowBtnVm = new rowButtonFile.InsertRowButtonDom.AnomalyRowButtonDomVm(rowBtnConfig);
                    this.RowButtonList.push(rowBtnVm);
                });
            }

        }




        public ScrollAuto(left: number) {
            this.IsAcsRelative = left > 0;
            //this.LeftNum = left;
            this.forceUpdate("");
        }

    }
    export class InsertGridFormDomStates extends domCore.DomStates {
    }


    export class InsertGridFormDomProps extends domCore.DomProps<InsertGridFormDomVm>{
    }



}


