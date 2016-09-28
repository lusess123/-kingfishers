import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import gridRowFile = require("./MemberGridRowDow");
import rowButtonFile = require("./MemberRowButtonDow");
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import React = require("react");
import ReactDOM = require("react-dom");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../Data");
export module MemberGridFromDow {
    export class MemberGridFromDowAction extends domCore.DomAction {
    }

    export class MemberGridFromDowReact extends domCore.DomReact<MemberGridFromDowProps, MemberGridFromDowStates, MemberGridFromDowAction> implements domCore.IReact {

        public state = new MemberGridFromDowStates();

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
                <ThDom children={null} Vm={this.getThDomVM(100) }><span>档案编码</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(100) }><span>单位ID</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>姓名</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(100)}><span>性别</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>出生日期</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>年龄</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>婚姻状况</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>民族</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>籍贯</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>身份证号</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>工作单位</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>职务</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>职称</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>类型</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>联系地址</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>联系电话</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>既往病史</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>家族病史</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>体检次数</span></ThDom>
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

    export interface IMemberGridFromDowConfig {
        Data: Array<dataFile.Member.IMemberData>;
        UniId: string;
    }

    export class MemberGridFromDowVm extends domCore.DomVm {
        public ReactType = MemberGridFromDowReact;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowList: gridRowFile.MemberGridRowDow.MemberGridRowDowVm[];
        public RowButtonList: rowButtonFile.MemberRowButtonDow.MemberRowButtonDowVm[];
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public FormData: Array<dataFile.Member.IMemberData>;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public constructor(config?: IMemberGridFromDowConfig) {
            super();
            this.FormData = new Array<dataFile.Member.IMemberData>();
            this.RowList = new Array<gridRowFile.MemberGridRowDow.MemberGridRowDowVm>();
            this.RowButtonList = new Array<rowButtonFile.MemberRowButtonDow.MemberRowButtonDowVm>();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            if (config && config.Data) {
                this.FormData = config.Data;
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                    var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, RowNumber: rowNumber };
                    var rowVm = new gridRowFile.MemberGridRowDow.MemberGridRowDowVm(rowConfig);
                    this.RowList.push(rowVm);



                    var rowBtnConfig = { Row: rowVm, UniId: config.UniId }
                    var rowBtnVm = new rowButtonFile.MemberRowButtonDow.MemberRowButtonDowVm(rowBtnConfig);
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
    export class MemberGridFromDowStates extends domCore.DomStates {
    }


    export class MemberGridFromDowProps extends domCore.DomProps<MemberGridFromDowVm>{
    }



}


