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


export module ExamItemCategoryDetailMasterRowDom {
    export class ExamItemCategoryDetailMasterRowDomAction extends domCore.DomAction {
    }

    export class ExamItemCategoryDetailMasterRowDomReact extends domCore.DomReact<ExamItemCategoryDetailMasterRowDomProps, ExamItemCategoryDetailMasterRowDomStates, ExamItemCategoryDetailMasterRowDomAction> implements domCore.IReact {

        public state = new ExamItemCategoryDetailMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="1">
                <ul className="tabs">
                    <li className="tab-title active"><a onClick={() => { this.fun_titleClick(); } }>体检项目分类明细<i className={"fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down") }></i></a></li>
                </ul>
                <div className="panel-collapse collapse in">
                    <div className={"content active " + (this.props.Vm.IsFormHide ? "hide" : "") } >
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">代码：</label>
                                </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.Code}</label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">名称：</label>
                                </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="pull-left">
                                        {this.props.Vm.RowData.Name}
                                    </label>
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

    export interface ExamItemCategoryDetailMasterRowDomConfig {

        RowData: dataFile.ExamItemCategory.ExamItemCategoryData;
    }

    export class ExamItemCategoryDetailMasterRowDomVm extends domCore.DomVm {
        public ReactType = ExamItemCategoryDetailMasterRowDomReact;
        public RowData: dataFile.ExamItemCategory.ExamItemCategoryData;
        public IsFormHide: boolean;

        public constructor(config?: ExamItemCategoryDetailMasterRowDomConfig) {
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
    export class ExamItemCategoryDetailMasterRowDomStates extends domCore.DomStates {
    }


    export class ExamItemCategoryDetailMasterRowDomProps extends domCore.DomProps<ExamItemCategoryDetailMasterRowDomVm>{
    }



}


