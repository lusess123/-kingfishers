import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import textFile = require("./../../../../02col/01single/Text");
import dataFile = require("./../Data");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");

export module DepartDetailMasterRowDom {
    export class DepartDetailMasterRowDomAction extends domCore.DomAction { }

    export class DepartDetailMasterRowDomReact extends domCore.DomReact<DepartDetailMasterRowDomProps, DepartDetailMasterRowDomStates, DepartDetailMasterRowDomAction> implements domCore.IReact {
        public state = new DepartDetailMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="1">
                <ul className="tabs">
                    <li className="tab-title active"><a onClick={() => { this.fun_titleClick(); } }>科室明细<i className={"fa fa-angle-" + (this.props.Vm.IsFormHide?"up":"down") }></i></a>
                    </li>
                </ul>

                <div className="panel-collapse collapse in">
                    <div className={"content active" + (this.props.Vm.IsFormHide ? "hide" : "") }>
                        <div className="Hm-form clearfix">

                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">名称：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.FName}</label>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">代码：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.FNumber}</label>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">简码：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.SimpleCode}</label>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">类别：</label>
                                </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.DeptType}</label>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">描述：</label>
                                </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.Description}</label>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">备注：</label>
                                </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.Remark}</label>
                                </div>
                            </div>

                         </div>
                    </div>
                </div>
            </div>);
        }

        private fun_titleClick() {
            this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
            this.forceUpdate();
        }
            
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }

    export interface DepartDetailMasterRowDomConfig {
        RowData: dataFile.MRP_Departments.Department;
    }

    export class DepartDetailMasterRowDomVm extends domCore.DomVm {
        public ReactType = DepartDetailMasterRowDomReact;
        public RowData: dataFile.MRP_Departments.Department;
        public IsFormHide: boolean;

        public constructor(config?: DepartDetailMasterRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
            }
        }

        public GetText(List: any, Id: number): string {
            for (var index = 0; index < List.length; index++) {
                if (List[index].Value == Id) {
                    return List[index].Text;
                }
            }
            return ""
        }

    }

    export class DepartDetailMasterRowDomStates extends domCore.DomStates { }

    export class DepartDetailMasterRowDomProps extends domCore.DomProps<DepartDetailMasterRowDomVm> { }
}