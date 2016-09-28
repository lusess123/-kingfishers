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
import gridRowFile = require("./DepartGridRowDom");
import rowButtonFile = require("./DepartRowButtonDom");
import dataFile = require("./../Data");

export module DepartGirdFormDom {
    export class DepartGirdFormDomAction extends domCore.DomAction { }

    export class partGirdFormDomReact extends domCore.DomReact<DepartGirdFormDomProps, DepartGirdFormDomStates, DepartGirdFormDomAction> implements domCore.IReact {
        public state = new DepartGirdFormDomStates();
        public pSender(): React.ReactElement<any> {
            var theader = <thead>
                {this.initHeader()}
            </thead>
            var tbody = this.initBody();
            var table = <table className="table table-hover">{theader}{tbody}</table>;

            return <div className="Hm-table" onScroll={(e) => { this.fun_Scroll(e); } }>{table}</div>;

        }
        public fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.ScrollAuto(_$obj.scrollLeft());
        }

        private initHeader(): React.ReactElement<any> {
            return <tr className="ACT-HEADER MEMBER">
                <th className={"thCheckAll text-center acsWidth3-5" + (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-th" : "") }   style={{ left: this.props.Vm.LeftNum }} >{this.props.Vm.AllCheck.intoDom()}</th>
                <th className="hide"><span>主键</span></th>
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>简码</span></ThDom>
                <ThDom children={null}Vm={this.getThDomVM(200) }><span>部门名称</span></ThDom>
                <ThDom children={null}Vm={this.getThDomVM(200) }><span>代码</span></ThDom>
                <ThDom children={null}Vm={this.getThDomVM(200) }><span>类别</span></ThDom>
                <ThDom children={null}Vm={this.getThDomVM(200) }><span>描述</span></ThDom>
                <ThDom children={null}Vm={this.getThDomVM(200) }><span>备注</span></ThDom>
                <ThDom children={null} Vm={this.getThDomVM(200) }><span>最后编辑时间</span></ThDom>
            </tr>
        };

        public initBody(): React.ReactElement<any> {
            return <tbody>
                {
                    this.props.Vm.RowList.map((row, index) => {
                        return [row.intoDom(), this.props.Vm.RowButtonList[index].intoDom()];
                    })
                }
            </tbody>;
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

    export interface DepartGridRowDomConfig {
        Data: Array<dataFile.MRP_Departments.Department>
        UniId: string;
    }

    export class DepartGridFormDomVm extends domCore.DomVm{
        public ReactType = partGirdFormDomReact;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;

        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;

        public RowList: gridRowFile.DepartGirdRow.DepartGirdRowVm[];
        public RowButtonList: rowButtonFile.DepartRowButtonDom.DepartRowButtonDomVm[];

        public FormData: Array<dataFile.MRP_Departments.Department>;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();


        public constructor(config?: DepartGridRowDomConfig) {
            super();
            this.FormData = new Array<dataFile.MRP_Departments.Department>();
            this.RowList = new Array<gridRowFile.DepartGirdRow.DepartGirdRowVm>();
            this.RowButtonList = new Array<rowButtonFile.DepartRowButtonDom.DepartRowButtonDomVm>();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            if (config && config.Data) {
                this.FormData = config.Data;
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                    var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, RowNumber: rowNumber };
                    var rowVm = new gridRowFile.DepartGirdRow.DepartGirdRowVm(rowConfig);
                    this.RowList.push(rowVm);

                    var rowBtnConfig = { Row: rowVm, UniId: config.UniId }
                    var rowBtnVm = new rowButtonFile.DepartRowButtonDom.DepartRowButtonDomVm(rowBtnConfig);
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

    export class DepartGirdFormDomProps extends domCore.DomProps<DepartGridFormDomVm>{ }

    export class DepartGirdFormDomStates extends domCore.DomStates { }
}

