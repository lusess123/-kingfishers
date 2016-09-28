import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import gridRowFile = require("./ExamPackageGridRowDow");
import rowButtonFile = require("./ExamPackageRowButtonDow");
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import React = require("react");
import ReactDOM = require("react-dom");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../Data");
export module ExamPackageGridFromDow {
    export class ExamPackageGridFromDowAction extends domCore.DomAction {
    }

    export class ExamPackageGridFromDowReact extends domCore.DomReact<ExamPackageGridFromDowProps, ExamPackageGridFromDowStates, ExamPackageGridFromDowAction> implements domCore.IReact {

        public state = new ExamPackageGridFromDowStates();

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
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>简码</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(150) }><span>名称</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>团体价格</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>个人价格</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>年龄上限</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>年龄下限</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>适用性别</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>备注</span></ThDom>
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

    export interface IExamPackageGridFromDowConfig {
        Data: Array<dataFile.ExamPackage.IExamPackageData>;
        UniId: string;
    }

    export class ExamPackageGridFromDowVm extends domCore.DomVm {
        public ReactType = ExamPackageGridFromDowReact;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowList: gridRowFile.ExamPackageGridRowDow.ExamPackageGridRowDowVm[];
        public RowButtonList: rowButtonFile.ExamPackageRowButtonDow.ExamPackageRowButtonDowVm[];
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public FormData: Array<dataFile.ExamPackage.IExamPackageData>;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public constructor(config?: IExamPackageGridFromDowConfig) {
            super();
            super();
            this.FormData = new Array<dataFile.ExamPackage.IExamPackageData>();
            this.RowList = new Array<gridRowFile.ExamPackageGridRowDow.ExamPackageGridRowDowVm>();
            this.RowButtonList = new Array<rowButtonFile.ExamPackageRowButtonDow.ExamPackageRowButtonDowVm>();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            if (config && config.Data) {
                this.FormData = config.Data;
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                    var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, RowNumber: rowNumber };
                    var rowVm = new gridRowFile.ExamPackageGridRowDow.ExamPackageGridRowDowVm(rowConfig);
                    this.RowList.push(rowVm);



                    var rowBtnConfig = { Row: rowVm, UniId: config.UniId  }
                    var rowBtnVm = new rowButtonFile.ExamPackageRowButtonDow.ExamPackageRowButtonDowVm(rowBtnConfig);
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
    export class ExamPackageGridFromDowStates extends domCore.DomStates {
    }


    export class ExamPackageGridFromDowProps extends domCore.DomProps<ExamPackageGridFromDowVm>{
    }



}


