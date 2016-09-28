import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import singleCheckFile = require("./../../02col/02Mulite/SingleCheckBox");
import examDataFile = require("./data");
import textFile = require("./../../02col/01single/Text");
import comboFile = require("./../../02col/02Mulite/Combo");
import dateFile = require("./../../02col/01single/Date"); dateFile;
import dateTimeFile = require("./../../02col/01single/DateTime");

import examFile = require("./examOrderPage");
import data = require("./data");
import constantData = require("./../Common/Data");
import baseColFile = require("./../../02col/00core/BaseCol");

export module ExamInsert {
    export class ExamInsertAction extends domCore.DomAction {
    }

    export class ExamInsertReact extends domCore.DomReact<ExamInsertProps, ExamInsertStates, ExamInsertAction> implements domCore.IReact {

        public state = new ExamInsertStates();
     

        public pSender(): React.ReactElement<any> {
            return   (
                <div>
                    <form className="YSm-form">
                        <div className="form-inline clearfix">
                            <div className={this.props.Vm.IsFileNumberHidden ? "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group" : "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group hide"}>
                                <label className="col-md-5 col-sm-3 form-control-label  text-right required" >档案号：</label>
                                <div className="col-md-7 col-sm-9">
                                    <label className="pull-left">{this.props.Vm.RowData.MemberData.FileNumber}</label>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                                <label className="col-md-5 col-sm-3 form-control-label  text-right required" >身份证号：</label>
                                <div className="col-md-7 col-sm-9">
                                    { this._tDom(this.props.Vm.ColVmObjList["IDCard"])}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                                <label className="col-md-5 col-sm-3 form-control-label text-right required" >姓名：</label>
                                <div className="col-md-7 col-sm-9">
                                    { this._tDom(this.props.Vm.ColVmObjList["Name"]) }
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                                <label className="col-md-5 col-sm-3 form-control-label required text-right" >性别：</label>
                                <div className="col-md-7 col-sm-9">
                                    { this._tDom(this.props.Vm.ColVmObjList["Gender"]) }
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                                <label className="col-md-5 col-sm-3 form-control-label  required text-right" >年龄：</label>
                                <div className="col-md-7 col-sm-9">
                                    { this._tDom(this.props.Vm.ColVmObjList["Age"]) }
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                                <label className="col-md-5 col-sm-3 form-control-label required text-right" >出生日期：</label>
                                <div className="col-md-7 col-sm-9">{this.props.Vm.ColVmObjList["BirthDate"].intoDom() }</div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                                <label className="col-md-5 col-sm-3 form-control-label text-right" >民族：</label>
                                <div className="col-md-7 col-sm-9">
                                    {this.props.Vm.ColVmObjList["Nation"].intoDom() }
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                                <label className="col-md-5 col-sm-3 form-control-label required text-right" >婚否：</label>
                                <div className="col-md-7 col-sm-9">
                                    {
                                        this.props.Vm.ColVmObjList["MaritalStatus"].intoDom()
                                    }
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                                <label className="col-md-5 col-sm-3 form-control-label required text-right" >会员类型：</label>
                                <div className="col-md-7 col-sm-9">
                                    { this.props.Vm.ColVmObjList["MemberType"].intoDom() }
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                                <label className="col-md-5 col-sm-3 form-control-label required text-right" >联系电话：</label>
                                <div className="col-md-7 col-sm-9">
                                    { this.props.Vm.ColVmObjList["Phone"].intoDom() }
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                                <label className="col-md-5 col-sm-3 form-control-label text-right" >工作单位：</label>
                                <div className="col-md-7 col-sm-9">
                                    { this.props.Vm.ColVmObjList["WorkUnit"].intoDom() }
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                                <label className="col-md-5 col-sm-3 form-control-label text-right" >职业：</label>
                                <div className="col-md-7 col-sm-9">
                                    {this.props.Vm.ColVmObjList["Job"].intoDom() }
                                </div>
                            </div>
                        </div>
                    </form>
                    <form className="YSm-form-outline">
                        <div className="form-inline clearfix">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                                <label className="col-md-5 col-sm-3 form-control-label text-right" >体检类型：</label>
                                <div className="col-md-7 col-sm-9">
                                    {this.props.Vm.ColVmObjList["ExamType"].intoDom() }
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
                                <label className="col-md-5 col-sm-3 form-control-label required text-right" >来检时间：</label>
                                <div className="col-md-7 col-sm-9">{this.props.Vm.ColVmObjList["ExamDate"].intoDom() }</div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
       
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }
    export interface ITextVmDic {
        [name: string]: textFile.ui.TextVm;
    }
    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }
    export interface IComVmDic {
        [name: string]: comboFile.ui.ComboVm;
    }
    export interface IExamInsertConfig {
        //data: data.ExamOrder.IExamOrderData
        data?: data.ExamOrder.IMemberReservationData;
        flag?: string

    }
    export interface IExamHistory {
        FamilyMedicalHistory: string;
    }
    export class ExamInsertVm extends domCore.DomVm {
        public ReactType = ExamInsertReact;
        public singeCheckbox = new singleCheckFile.ui.SingleCheckBoxVm();
        public TextVmObjList: ITextVmDic = {};
        public ExamInsertObj: examFile.ExamOrderPage.ExamOrderPageVm;
        //public RowData: data.ExamOrder.IExamOrderData = {};
        public RowData: data.ExamOrder.IMemberReservationData = { MemberData: {}, ReservationData: {} };

        public IsFileNumberHidden: boolean = false;
        public ColVmObjList: IColVmDic = {};
        public flag:string
        public constructor(config?: IExamInsertConfig) {
            super();
            this.flag ="new"
            if (config && config.flag)
            {
              this.flag = config.flag
            }
            if (config && config.data) {
                this.RowData = config.data
                if (this.RowData.MemberData.FileNumber != undefined || this.RowData.MemberData.FileNumber != null || this.RowData.MemberData.FileNumber != "")
                {
                    this.IsFileNumberHidden = true;
                }
            }

            this.initColVm("IDCard", "TextVm", "IDCardLegal");
            this.initColVm("Name", "TextVm", "notNull");
            this.initColVm("Gender", "ComboVm", "notNull");
            this.initColVm("Age", "TextVm", "SeatLegal");
            this.initColVm("BirthDate", "DateVm", "notNull");
            this.initColVm("Nation", "ComboVm", "notNull");
            this.initColVm("MaritalStatus", "ComboVm", "notNull")
            this.initColVm("MemberType", "ComboVm", "notNull");
            this.initColVm("Phone", "TextVm", "MobilePhoneLegal");
            this.initColVm("WorkUnit", "TextVm");
            this.initColVm("Job", "ComboVm");

            this.initColVm("ExamType", "ComboVm","notNull");
            this.initColVm("ExamDate", "DateTimeVm","custom");

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
                _exciteBean.IsMulit = true;
                var _val = "";
                if (colName == "ExamType" || colName == "ExamDate") {
                    _val = this.RowData.ReservationData[colName];
                    _exciteBean.onChangeHandle((val) => {
                        this.RowData.ReservationData[colName] = val;
                        return true;
                    });    
                }
                else
                {
                    _val = this.RowData.MemberData[colName];
                    _exciteBean.onChangeHandle((val) => {
                        this.RowData.MemberData[colName] = val;
                        return true;
                    });
                }
                if (colName == "ExamDate") {
                    var dateTimeT = utilFile.Core.Util.Cast<dateTimeFile.ui.DateTimeVm>(_exciteBean)
                    dateTimeT.IsInAndAfterToday = false;
                    _exciteBean.LegalObj.CustomLegalFun = (col) => {
                        return this.compareSize(colName, _exciteBean.TempDataValue, utilFile.Core.Util.Cast<textFile.ui.TextVm>(_exciteBean));
                    }
                }
                _exciteBean.dataValueSet(_val);
                _exciteBean.setOriValue(_val);
              
                if (colType == "ComboVm") {
                    this.initCombo(colName, utilFile.Core.Util.Cast<comboFile.ui.ComboVm>(_exciteBean));
                }
                this.ColVmObjList[_name] = _exciteBean;
            }
        }
        public FormatDate(strTime) {
            var date = new Date(strTime);
            return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        }
        public compareSize(colName: string, endDate: string, textVm: textFile.ui.TextVm): string {
           if (endDate == undefined || endDate == "") {
               textVm.LegalObj.LegalResult = true;
               textVm.LegalObj.ErrMsg = "来检时间不能为空"
               return "来检时间不能为空！";

           }
           var date = (new Date(endDate));
           var today =(new Date());
           if (date <= today) {
               textVm.LegalObj.LegalResult = true;
               textVm.LegalObj.ErrMsg = "来检时间大于现在时间"
               return "来检时间大于现在时间！";
           }
           else {
               textVm.LegalObj.LegalResult = false;
               textVm.showLegal();
               return "";
           }
        }
        public compareNow(colName: string, endDate: string, textVm: textFile.ui.TextVm): string {
            if (endDate == undefined || endDate == "") {
                textVm.LegalObj.LegalResult = true;
                textVm.LegalObj.ErrMsg = "开始时间不能为空"
                return "开始时间不能为空！";

            }
            var date = new Date(endDate);
            var today =new Date();
            if (date <= today) {
                textVm.LegalObj.LegalResult = true;
                textVm.LegalObj.ErrMsg = "开始时间大于现在"
                return "开始时间大于现在！";
            }
            else {
                textVm.LegalObj.LegalResult = false;
                textVm.showLegal();
                return "";
            }
        }
        private initCombo(colName: string, comboVm: comboFile.ui.ComboVm) {
            if (colName == "ExamType")
            {
                var str = this.RowData.ReservationData[colName] == null ? "0" : String(this.RowData.ReservationData[colName]);
            }
            else {
                var str = this.RowData.MemberData[colName] == null ? "0" : String(this.RowData.MemberData[colName]);
            }
            switch (colName) {
                case "Job":
                    comboVm.ItemList = constantData.Data.JobTypeData;
                    comboVm.dataValueSet(str)
                    comboVm.setOriValue(str)                 
                    break;
                case "Gender":
                    comboVm.ItemList = constantData.Data.GenderTypeData;
                    comboVm.dataValueSet(str)
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

        private fIsChangeRow: boolean = false;

        public getData(isDetailChange?: boolean): data.ExamOrder.IMemberReservationData {
            var _obj: data.ExamOrder.IMemberReservationData = { MemberData: {}, ReservationData: {} };


            for (var vn in this.ColVmObjList) {
                var _colObj = this.ColVmObjList[vn];
                if (_colObj) {
                   // _colObj.getChangeValFun((isChange, val) => {
                     //   if (isChange) {
                            this.fIsChangeRow = true;
                            if (vn == "ExamDate" || vn == "ExamType") {
                                _obj.ReservationData[vn] = _colObj.TempDataValue;
                            }
                            else
                            {
                                _obj.MemberData[vn] = _colObj.TempDataValue;

                            }
                    //    }
                   // });
                }
            }
            if (this.fIsChangeRow || isDetailChange) {

                _obj.MemberData.MemberId = this.RowData.MemberData.MemberId;
            }
            _obj.ReservationData.ReservationId = this.RowData.ReservationData.ReservationId;
            this.fIsChangeRow = false;
            return _obj;
        }




    }
    export class ExamInsertStates extends domCore.DomStates { }
    export class ExamInsertProps extends domCore.DomProps<ExamInsertVm>{ }



}
