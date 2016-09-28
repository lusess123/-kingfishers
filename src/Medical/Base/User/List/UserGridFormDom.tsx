import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");

import dataFile = require("./../Data");
import gridRowFile = require("./UserGridRowDom");
import rowButtonFile = require("./UserRowButtonDom");

export module UserGridFormDom {
    export class UserGridFormDomAction extends domCore.DomAction { }

    export class UserGridFormDomReact extends domCore.DomReact<UserGridFormDomProps, UserGridFormDomStates, UserGridFormDomAction> implements domCore.IReact {
        public state = new UserGridFormDomStates();

        public pSender(): React.ReactElement<any> {
            var theader = <thead className="thead-default">
                {this.initHeader() }
            </thead>
            var tbody = this.initBody();

            var table = <table className="table table-hover">{theader}{tbody}</table>
            return <div className="Hm-table" onScroll={(e) => { this.fun_Scroll(e); } }>{table}</div>
        }
        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.ScrollAuto(_$obj.scrollLeft());
        }

        private initHeader(): React.ReactElement<any> {
            return <tr className="ACT-HEADER MEMBER">
                <th className={"thCheckAll text-center acsWidth3-5" + (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-th" : "") } style={{ left: this.props.Vm.LeftNum }}>{this.props.Vm.AllCheck.intoDom() }</th>
                <th className="hide"><span>主键</span></th>
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>简码</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(150) }><span>类别</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>职称</span></ThDom>
                <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>最后编辑时间</span></ThDom>
            </tr>
        };

        public initBody(): React.ReactElement<any> { 
            return <tbody>
                {this.props.Vm.RowList.map((row, index) => {
                    return [row.intoDom(), this.props.Vm.RowButtonList[index].intoDom()];
                }) }
            </tbody>;
        };


        private getThDomVM(w?: number) {
            var _ther = new thFile.Web.ThDomVm();
            if (w) {
                _ther.Width = w;
            }
            return _ther;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }

    export interface UserGridFormDomConfig {
        Data: Array<dataFile.User.UserData>;
        UniId: string
    }

    export class UserGridFormDomVm extends domCore.DomVm {
        public ReactType = UserGridFormDomReact;

        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;

        public RowList: gridRowFile.UserGridRowDom.UserGridRowDomVm[];;
        public RowButtonList: rowButtonFile.UserRowButtonDom.UserRowButtonDomVm[];

        public FormData: Array<dataFile.User.UserData>;

        public constructor(config?: UserGridFormDomConfig) {
            super();
            this.FormData = new Array<dataFile.User.UserData>();
            this.RowList = new Array<gridRowFile.UserGridRowDom.UserGridRowDomVm>();
            this.RowButtonList = new Array<rowButtonFile.UserRowButtonDom.UserRowButtonDomVm>();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            if (config && config.Data) {
                this.FormData = config.Data;
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                    var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, RowNumber: rowNumber };
                    var rowVm = new gridRowFile.UserGridRowDom.UserGridRowDomVm(rowConfig);
                    this.RowList.push(rowVm);

                    var rowBtnConfig = { Row: rowVm, UniId: config.UniId }
                    var rowBtnVm = new rowButtonFile.UserRowButtonDom.UserRowButtonDomVm(rowBtnConfig);
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

    export class UserGridFormDomStates extends domCore.DomStates { }

    export class UserGridFormDomProps extends domCore.DomProps<UserGridFormDomVm>{ }
}

