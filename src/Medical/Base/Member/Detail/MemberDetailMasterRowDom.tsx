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

export module MemberDetailMasterRowDom {
    export class MemberDetailMasterRowDomAction extends domCore.DomAction {
    }

    export class MemberDetailMasterRowDomReact extends domCore.DomReact<MemberDetailMasterRowDomProps, MemberDetailMasterRowDomStates, MemberDetailMasterRowDomAction> implements domCore.IReact {

        public state = new MemberDetailMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="panel">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a onClick={() => { this.fun_titleClick(); } }>个人明细<i className={"fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down") }></i></a>
                   </h4>
               </div>
                <div className="panel-collapse collapse in">
                    <div className={"content active " + (this.props.Vm.IsFormHide ? "hide" : "") } >
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">档案编码：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">{this.props.Vm.RowData.FileNumber}</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">单位名称：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.UnitId}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">姓名：</label>
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
                                        性别：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.GetText(constantData.Data.GenderTypeData, this.props.Vm.RowData.Gender) }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">出生日期：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.BirthDate}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">年龄：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.Age}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">婚姻状况：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.GetText(constantData.Data.MaritalTypeData, this.props.Vm.RowData.MaritalStatus) }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">民族：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.GetText(constantData.Data.NationTypeData, this.props.Vm.RowData.Nation) }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">籍贯：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.NativePlace}
                                    </label>
                                </div>
                            </div>      

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">身份证：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.IDCard}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">工作单位：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.WorkUnit}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">职务：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.GetText(constantData.Data.JobTypeData,this.props.Vm.RowData.Job)}
                                    </label>
                                </div>
                            </div>    
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">职称：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.GetText(constantData.Data.JobTitleTypeData, this.props.Vm.RowData.JobTitle) }
                                    </label>
                                </div>
                            </div>    
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">类型：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.GetText(constantData.Data.MemberTypeData, this.props.Vm.RowData.MemberType) }
                                    </label>
                                </div>
                            </div>    
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">联系地址：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.Address}
                                    </label>
                                </div>
                            </div>    
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">联系电话：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.Phone}
                                    </label>
                                </div>
                            </div>    

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">既往病史：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.PastMedicalHistory}
                                    </label>
                                </div>
                            </div>  
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">家族病史：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.FamilyMedicalHistory}
                                    </label>
                                </div>
                            </div>  
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">体检次数：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.ExamCount}
                                    </label>
                                </div>
                            </div>  
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">备注：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.Remark}
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

    export interface IMemberDetailMasterRowDomConfig {
        RowData: dataFile.Member.IMemberData;

    }

    export class MemberDetailMasterRowDomVm extends domCore.DomVm {
        public ReactType = MemberDetailMasterRowDomReact;
        public RowData: dataFile.Member.IMemberData;
        public IsFormHide: boolean;


        public constructor(config?: IMemberDetailMasterRowDomConfig) {
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
    export class MemberDetailMasterRowDomStates extends domCore.DomStates {
    }


    export class MemberDetailMasterRowDomProps extends domCore.DomProps<MemberDetailMasterRowDomVm>{
    }



}


