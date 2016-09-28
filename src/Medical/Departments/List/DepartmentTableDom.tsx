import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import pagination = require("./../../../05tool/Pagination");
import React = require("react");
import ReactDOM = require("react-dom");
import buttonFile = require("./../../../05tool/Button");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../data");
import dptListPageFile = require("./DepartmentEntryPage");
import dptGridRowFile = require("./DepartmentGridRowDom");
export module DepartmentGridDom {
    export class DepartmentGridDomAction extends domCore.DomAction { }
    export class DepartmentGridDomReact extends domCore.DomReact<DepartmentGridDomProps, DepartmentGridDomStates, DepartmentGridDomAction> implements domCore.IReact {
        public state = new DepartmentGridDomStates();
        public pSender(): React.ReactElement<any> {
            var header = this.initHeader();
            var body = this.initBody();
            return (
                <div className="YSm-table">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered table-hover">
                            {header}
                            {body}
                        </table>
                    </div>

                </div>
            )
        }
        public initHeader(): React.ReactElement<any> {
            return (
                <thead className="thead-default">
                    <tr>
                        <th>检查项目</th>
                        <th>阳性标记</th>
                        <th>结果</th>
                        <th>单位</th>
                        <th>超标指示</th>
                        <th>上限</th>
                        <th>下限</th>
                        <th>弃检标记</th>
                        <th>附件</th>
                    </tr>
                </thead>
            )
        }
        public initBody(): React.ReactElement<any> {
            return (
                <tbody>
                    {this.props.Vm.RowList.map((data, index) => {
                        return data.intoDom()
                    }) }
                </tbody>
            )
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }

    //export interface IDepartListData {
    //    List: Array<dataFile.Result.IResultData>;
    //}
    export interface IDepartmentTableConfig {
        //  ExamItemData: dataFile.Result.IExamItemData[];
        ListData: dataFile.Result.IMemberExamItemData[];
    }

    export class DepartmentGridDomVm extends domCore.DomVm {
        public ReactType = DepartmentGridDomReact;
        public RowList: Array<dptGridRowFile.DepartmentGridRowDom.DepartmentGridRowDomVm>

        public ListData: dataFile.Result.IMemberExamItemData[] = [];
        // public DepartmentGridDomObj: dptListPageFile.DepartmentEntryPage.DepartmentEntryPageVm;


        public constructor(config?: IDepartmentTableConfig) {
            super();
            this.RowList = new Array<dptGridRowFile.DepartmentGridRowDom.DepartmentGridRowDomVm>();

            if (config) {
                this.ListData = config.ListData;
                this.init();
            }
        }

        public init() {
            this.ListData.forEach((rowdata, index) => {
                var rowConfig = { ExamItemData: rowdata };
                var rowVm = new dptGridRowFile.DepartmentGridRowDom.DepartmentGridRowDomVm(rowConfig);
                this.RowList.push(rowVm);
            });
        }

    }
    export class DepartmentGridDomStates extends domCore.DomStates { }
    export class DepartmentGridDomProps extends domCore.DomProps<DepartmentGridDomVm>{ }
}