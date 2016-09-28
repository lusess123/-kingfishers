import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import gridRowFile = require("./GroupGridRowDow");
import rowButtonFile = require("./GroupRowButtonDow");
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import React = require("react");
import ReactDOM = require("react-dom");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../Data");
export module GroupGridFromDow {
    export class GroupGridFromDowAction extends domCore.DomAction {
    }

    export class GroupGridFromDowReact extends domCore.DomReact<GroupGridFromDowProps, GroupGridFromDowStates, GroupGridFromDowAction> implements domCore.IReact {

        public state = new GroupGridFromDowStates();

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
            return <tr>
                <th>单位名称</th>
                <th>批次</th>
                <th>员工姓名</th>
                <th>员工性别</th>
                <th>联系方式</th>
                <th>体检状态</th>
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

    export interface IGroupGridFromDowConfig {
        Data: dataFile.Group.IMember[];
        UniId: string;

    }

    export class GroupGridFromDowVm extends domCore.DomVm {
        public ReactType = GroupGridFromDowReact;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowList: gridRowFile.GroupGridRowDow.GroupGridRowDowVm[];
        public RowButtonList: rowButtonFile.GroupRowButtonDow.GroupRowButtonDowVm[];
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public FormData: Array<dataFile.Group.IMember>;

        public constructor(config?: IGroupGridFromDowConfig) {
            super();
            this.RowButtonList = new Array<rowButtonFile.GroupRowButtonDow.GroupRowButtonDowVm>();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            this.FormData = new Array<dataFile.Group.IMember>();
            this.RowList = [];
            if (config && config.Data) {
                this.FormData = config.Data;
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                    var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, RowNumber: rowNumber };
                    var rowVm = new gridRowFile.GroupGridRowDow.GroupGridRowDowVm(rowConfig);
                    this.RowList.push(rowVm);

                    //var rowBtnConfig = { Row: rowVm, UniId: config.UniId }
                    //var rowBtnVm = new rowButtonFile.GroupRowButtonDow.GroupRowButtonDowVm(rowBtnConfig);
                    //this.RowButtonList.push(rowBtnVm);
                });
            }
        }
        public ScrollAuto(left: number) {
            this.IsAcsRelative = left > 0;
            this.LeftNum = left;
            this.forceUpdate("");
        }

    }
    export class GroupGridFromDowStates extends domCore.DomStates {
    }


    export class GroupGridFromDowProps extends domCore.DomProps<GroupGridFromDowVm>{
    }



}


