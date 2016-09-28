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
import constantData = require("./../../../Common/Data")

export module UnitDetailMasterRowDom {
    export class UnitDetailMasterRowDomAction extends domCore.DomAction {
    }

    export class UnitDetailMasterRowDomReact extends domCore.DomReact<UnitDetailMasterRowDomProps, UnitDetailMasterRowDomStates, UnitDetailMasterRowDomAction> implements domCore.IReact {

        public state = new UnitDetailMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="panel">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a onClick={() => { this.fun_titleClick(); } }>单位明细<i className={"fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down") }></i></a>
                   </h4>
               </div>
                <div className="panel-collapse collapse in">
                    <div className={"content active " + (this.props.Vm.IsFormHide ? "hide" : "") } >
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">单位编码：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">{this.props.Vm.RowData.Code}</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">单位名称：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.Name}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">单位联系人：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.ContactPerson}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">
                                        联系电话：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.Phone}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">传真：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.Fax}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">邮箱：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.Email}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">单位类型：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.GetText(constantData.Data.UnitTypeData, this.props.Vm.RowData.Type)}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">单位地址：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.Address}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">单位简介：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.Description}
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

    export interface IUnitDetailMasterRowDomConfig {
        RowData: dataFile.Unit.IUnitData;

    }

    export class UnitDetailMasterRowDomVm extends domCore.DomVm {
        public ReactType = UnitDetailMasterRowDomReact;
        public RowData: dataFile.Unit.IUnitData;
        public IsFormHide: boolean;


        public constructor(config?: IUnitDetailMasterRowDomConfig) {
            super();
            if (config)
            {
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
    export class UnitDetailMasterRowDomStates extends domCore.DomStates {
    }


    export class UnitDetailMasterRowDomProps extends domCore.DomProps<UnitDetailMasterRowDomVm>{
    }



}


