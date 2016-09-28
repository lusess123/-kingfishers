import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import dataFile = require("./../Data");
import textFile = require("./../../../../02col/01single/Text");
import comboFile = require("./../../../../02col/02Mulite/Combo");
import dateFile = require("./../../../../02col/01single/Date");
import constantData = require("./../../../Common/Data");
import baseColFile = require("./../../../../02col/00core/BaseCol");
export module MemberUpdateMasterRowDom {
    export class MemberUpdateMasterRowDomAction extends domCore.DomAction {
    }

    export class MemberUpdateMasterRowDomReact extends domCore.DomReact<MemberUpdateMasterRowDomProps, MemberUpdateMasterRowDomStates, MemberUpdateMasterRowDomAction> implements domCore.IReact {

        public state = new MemberUpdateMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="panel">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a onClick={() => { this.fun_titleMasterClick(); } }>会员明细<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></a>
                    </h4>
                </div>
                <div className="panel-collapse collapse in">
                    <div className={"content active " + (this.props.Vm.IsMasterHide ? "hide" : "") } >
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">档案编码：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.FileNumber}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">单位名称：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.UnitName}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">姓名：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                    { this.props.Vm.ColVmObjList["Name"].intoDom() }
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
                                            { this.props.Vm.ColVmObjList["Gender"].intoDom() }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">婚姻状况：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                      
                                        { this.props.Vm.ColVmObjList["MaritalStatus"].intoDom() }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">民族：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">                           
                                        { this.props.Vm.ColVmObjList["Nation"].intoDom() }                             
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">会员类型：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        { this.props.Vm.ColVmObjList["MemberType"].intoDom() }

                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">年龄：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">                                        
                                        { this.props.Vm.ColVmObjList["Age"].intoDom() }                                     
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">出生日期：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.ColVmObjList["BirthDate"].intoDom() }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">联系方式：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.ColVmObjList["Phone"].intoDom() }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">身份证：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.ColVmObjList["IDCard"].intoDom() }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">工作单位：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.ColVmObjList["WorkUnit"].intoDom() }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">职业：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.ColVmObjList["Job"].intoDom() }
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
        }
        
        private fun_OnChange(e, fName: string) {
            var _val = e.target["value"];
            this.props.Vm.RowData[fName] = _val;
            this.forceUpdate();
        }

        private fun_titleMasterClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }


        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export interface ITextVmDic {
        [name: string]: textFile.ui.TextVm;
    }
    export interface IMemberUpdateMasterRowDomConfig {
        UniId: string;
        RowData: dataFile.Member.IMemberData;
    }
    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }
    export class MemberUpdateMasterRowDomVm extends domCore.DomVm {
        public ReactType = MemberUpdateMasterRowDomReact;
        public IsMasterHide: boolean;
        public RowData: dataFile.Member.IMemberData = {};
        public ColVmObjList: IColVmDic = {};

        public constructor(config?: IMemberUpdateMasterRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;

                this.initColVm("IDCard", "TextVm", "IDCardLegal");
                this.initColVm("Name", "TextVm", "notNull");
                this.initColVm("Gender", "ComboVm", "notNull");
                this.initColVm("Age", "TextVm", "notNull");
                this.initColVm("BirthDate", "DateVm", "notNull");
                this.initColVm("Nation", "ComboVm", "notNull");
                this.initColVm("MaritalStatus", "ComboVm", "notNull")
                this.initColVm("MemberType", "ComboVm", "notNull");
                this.initColVm("Phone", "TextVm", "MobilePhoneLegal");
                this.initColVm("WorkUnit", "TextVm","notNull");
                this.initColVm("Job", "ComboVm", "Null");
            }
        }
        private initColVm(colName: string, colType: string, legal?: string) {
            var _name = colName.toString()
            var isexcite = false;

            for (var vn in this.ColVmObjList) {
                var _obj = this.ColVmObjList[_name];
                if (_obj) {
                    isexcite = true;
                    _exciteBean = _obj;
                }
            }
            if (!isexcite) {
                var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance<baseColFile.Core.BaseColVm>(colType, baseColFile.Core.BaseColVm);
                _exciteBean.Tag = colName;
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                var _val = this.RowData[colName];
                _exciteBean.dataValue(this.RowData[colName]);
                _exciteBean.setOriValue(this.RowData[colName]);
                _exciteBean.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    return true;
                });
                if (colType == "ComboVm") {
                    this.initCombo(colName, utilFile.Core.Util.Cast<comboFile.ui.ComboVm>(_exciteBean));
                }
                this.ColVmObjList[_name] = _exciteBean;
            }
        }

        private initCombo(colName: string, comboVm: comboFile.ui.ComboVm) {
            var str = this.RowData[colName] == null ? "0" : String(this.RowData[colName]);
            switch (colName) {
                case "Gender":
              
                    comboVm.ItemList = constantData.Data.GenderTypeData;
                    comboVm.dataValue(str)
                    comboVm.setOriValue(str)                 
                    break;
                case "Nation":
                    comboVm.ItemList = constantData.Data.NationTypeData;
                    comboVm.dataValueSet(str)
                    comboVm.setOriValue(str)                 
                    break;
                case "MaritalStatus":
                    comboVm.ItemList = constantData.Data.MaritalTypeData;
                    comboVm.dataValueSet(str)
                    comboVm.setOriValue(str)                 
                    break;
                case "MemberType":
                    comboVm.ItemList = constantData.Data.MemberTypeData;
                    comboVm.dataValueSet(str)
                    comboVm.setOriValue(str)                 
                    break;
                case "Job":
                    comboVm.ItemList = constantData.Data.JobTypeData;
                    comboVm.dataValueSet(str)
                    comboVm.setOriValue(str)                 
                    break;
                case "ExamType":
                    comboVm.ItemList = constantData.Data.ExamTypeData;
                    comboVm.dataValueSet(str)
                    comboVm.setOriValue(str)                 
                    break;
            }
        }

        public toChange() {
            this.IsChange = true;
            for (var n in this.ColVmObjList) {
                this.ColVmObjList[n].IsChange = true;
            }
        }
        public legal(): boolean {
            var _res = true;
            for (var vn in this.ColVmObjList) {
                var _obj = this.ColVmObjList[vn];
                if (_obj) {
                    _res = _res && _obj.legal();
                }
            }
            return _res;
        }   

     
    }
    export class MemberUpdateMasterRowDomStates extends domCore.DomStates {
    }


    export class MemberUpdateMasterRowDomProps extends domCore.DomProps<MemberUpdateMasterRowDomVm>{
    }



}


