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

export module ExamItemDetailMasterRowDom {
    export class ExamItemDetailMasterRowDomAction extends domCore.DomAction {
    }

    export class ExamItemDetailMasterRowDomReact extends domCore.DomReact<ExamItemDetailMasterRowDomProps, ExamItemDetailMasterRowDomStates, ExamItemDetailMasterRowDomAction> implements domCore.IReact {

        public state = new ExamItemDetailMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="1">
                <ul className="tabs">
                    <li className="tab-title active"><a onClick={() => { this.fun_titleClick(); } }>体检项目明细<i className={"fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down") }></i></a></li>
                </ul>
                <div className="panel-collapse collapse in">
                    <div className={"content active " + (this.props.Vm.IsFormHide ? "hide" : "") } >
                        <div className="Hm-form clearfix" >
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
                                    <label for="right-label" className="pull-right">项目代码：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label for="right-label" className="pull-left">
                                        {this.props.Vm.RowData.ItemCode}
                                    </label>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">项目名称：</label>
                                </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.Name}</label>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">所属科室：</label>
                                </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.DepartmentId}</label>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">项目分类：</label>
                                </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.ItemCategory}</label>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">单位：</label>
                                </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.Unit}</label>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">参考上限：</label>
                                </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.UpperLimit}</label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">参考下限：</label>
                                </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.LowerLimit}</label>
                                </div>
                            </div>


                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">价格：</label>
                                </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.Price}</label>
                                </div>
                            </div>


                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">序号：</label>
                                </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.Order}</label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">体检结果类型：</label>
                                </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.ResultClass}</label>
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

    export interface ExamItemDetailMasterRowDomConfig {
        RowData: dataFile.ExamItem.IExamItemData;
    }

    export class ExamItemDetailMasterRowDomVm extends domCore.DomVm {
        public ReactType = ExamItemDetailMasterRowDomReact;
        public RowData: dataFile.ExamItem.IExamItemData;
        public IsFormHide: boolean;

        public constructor(config?: ExamItemDetailMasterRowDomConfig) {
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
    export class ExamItemDetailMasterRowDomStates extends domCore.DomStates {
    }


    export class ExamItemDetailMasterRowDomProps extends domCore.DomProps<ExamItemDetailMasterRowDomVm>{
    }



}


