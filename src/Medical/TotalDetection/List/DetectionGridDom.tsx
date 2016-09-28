import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import thFile = require("./../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import gridRowFile = require("./DetectionGridRowDom");
import rowButtonFile = require("./DetectionRowButtonDom");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../Data");

export module DetectionGridFormDom {
    export class DetectionGridFormDomAction extends domCore.DomAction {
    }

    export class DetectionGridFormDomReact extends domCore.DomReact<DetectionGridFormDomProps, DetectionGridFormDomStates, DetectionGridFormDomAction> implements domCore.IReact {

        public state = new DetectionGridFormDomStates();

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

    export interface IDetectionGridFormDomConfig {
        Data: Array<dataFile.DetectionData.ResultGeneralData>;
        UniId: string;
    }

    export class DetectionGridFormDomVm extends domCore.DomVm {
        public ReactType = DetectionGridFormDomReact;
        public IsAcsRelative: boolean = false;
        //public LeftNum: number = 0;
        //public RowList: gridRowFile.InsertRowDom.InsertRowDomVm[];
        public RowList: gridRowFile.DetectionRowDom.DetectionRowDomVm[];
        public RowButtonList: rowButtonFile.DetectionListRowButtonDom.DetectionListRowButtonDomVm[];
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public FormData: Array<dataFile.DetectionData.DetectionData>;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();

        public constructor(config?: IDetectionGridFormDomConfig) {
            super();
            this.FormData = new Array<dataFile.DetectionData.ResultGeneralData>();
            this.RowList = new Array<gridRowFile.DetectionRowDom.DetectionRowDomVm>();
            this.RowButtonList = new Array<rowButtonFile.DetectionListRowButtonDom.DetectionListRowButtonDomVm>();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            if (config && config.Data) {
                this.FormData = config.Data;
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                    var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, RowNumber: rowNumber };
                    var rowVm = new gridRowFile.DetectionRowDom.DetectionRowDomVm(rowConfig);
                    this.RowList.push(rowVm);



                    var rowBtnConfig = { Row: rowVm, UniId: config.UniId }
                    var rowBtnVm = new rowButtonFile.DetectionListRowButtonDom.DetectionListRowButtonDomVm(rowBtnConfig);
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
    export class DetectionGridFormDomStates extends domCore.DomStates {
    }


    export class DetectionGridFormDomProps extends domCore.DomProps<DetectionGridFormDomVm>{
    }



}


