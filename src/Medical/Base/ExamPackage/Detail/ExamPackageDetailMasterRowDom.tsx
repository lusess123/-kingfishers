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

export module ExamPackageDetailMasterRowDom {
    export class ExamPackageDetailMasterRowDomAction extends domCore.DomAction {
    }

    export class ExamPackageDetailMasterRowDomReact extends domCore.DomReact<ExamPackageDetailMasterRowDomProps, ExamPackageDetailMasterRowDomStates, ExamPackageDetailMasterRowDomAction> implements domCore.IReact {

        public state = new ExamPackageDetailMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="panel">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a onClick={() => { this.fun_titleClick(); } }>体检套餐明细<i className={"fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down") }></i></a>
                    </h4>
                </div>
                <div className="panel-collapse collapse in">
                    <div className={"content active " + (this.props.Vm.IsFormHide ? "hide" : "") } >
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">
                                        简码：
                                    </label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.SimpleCode}</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">
                                        名称：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.Name}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">
                                        团体价格：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.GroupPrice}</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">
                                        个人价格：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                    {this.props.Vm.RowData.IndividualPrice}</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">
                                    年龄上限：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.AgeUpperLimit}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">
                                        年龄下限：
                                    </label>
                                </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="left">
                                        {this.props.Vm.RowData.AgeLowerLimit}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">
                                        适用性别：
                                    </label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.GetGenderText(this.props.Vm.RowData.Gender)}</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">
                                        备注：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.Remark}</label>
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

    export interface IExamPackageDetailMasterRowDomConfig {
        RowData: dataFile.ExamPackage.IExamPackageData;

    }

    export class ExamPackageDetailMasterRowDomVm extends domCore.DomVm {
        public ReactType = ExamPackageDetailMasterRowDomReact;
        public RowData: dataFile.ExamPackage.IExamPackageData;
        public IsFormHide: boolean;


        public constructor(config?: IExamPackageDetailMasterRowDomConfig) {
            super();
            if (config)
            {
                this.RowData = config.RowData;
            }

        }
        public GetGenderText(Id: number): string {
            var List = dataFile.ExamPackage.ExamPackageGenderData;
            for (var index = 0; index < List.length; index++) {
                if (List[index].Value == Id) {
                    return List[index].Text;
                }
            }
            return ""
        }

    }
    export class ExamPackageDetailMasterRowDomStates extends domCore.DomStates {
    }


    export class ExamPackageDetailMasterRowDomProps extends domCore.DomProps<ExamPackageDetailMasterRowDomVm>{
    }



}


