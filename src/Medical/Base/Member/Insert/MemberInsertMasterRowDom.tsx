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
import constantData = require("./../../../Common/Data")

export module MemberInsertMasterRowDom {
    export class MemberInsertMasterRowDomAction extends domCore.DomAction {
    }

    export class MemberInsertMasterRowDomReact extends domCore.DomReact<MemberInsertMasterRowDomProps, MemberInsertMasterRowDomStates, MemberInsertMasterRowDomAction> implements domCore.IReact {

        public state = new MemberInsertMasterRowDomStates();

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
                                        {this.props.Vm.TextVmObjList["FileNumber"].intoDom() }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">单位名称：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.TextVmObjList["UnitId"].intoDom() }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">姓名：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.TextVmObjList["Name"].intoDom() }
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

                                        {
                                            this.props.Vm.SexTypeCombo.intoDom()
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">婚姻状况：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {
                                            this.props.Vm.MaritalCombo.intoDom()
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">民族：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {
                                            this.props.Vm.NationCombo.intoDom()
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">会员类型：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {
                                            this.props.Vm.TypeCombo.intoDom()
                                        }

                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">年龄：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {
                                            this.props.Vm.TextVmObjList["Age"].intoDom()
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">出生日期：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {
                                            this.inputUserBrithdayDate()
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">籍贯：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {
                                            this.props.Vm.TextVmObjList["NativePlace"].intoDom()
                                        }
                                    </label>
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">身份证：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {
                                            this.inputIDCard()
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">工作单位：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {
                                            this.props.Vm.TextVmObjList["WorkUnit"].intoDom()
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">职务：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {
                                            this.props.Vm.JobCombo.intoDom()
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">职称：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {
                                            this.props.Vm.JobTitleCombo.intoDom()
                                        }
                                    </label>
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">联系地址：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {
                                            this.props.Vm.TextVmObjList["Address"].intoDom()
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">联系电话：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {
                                            this.props.Vm.TextVmObjList["Phone"].intoDom()
                                        }
                                    </label>
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">既往病史：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {
                                            this.props.Vm.TextVmObjList["PastMedicalHistory"].intoDom()
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">家族病史：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {
                                            this.props.Vm.TextVmObjList["FamilyMedicalHistory"].intoDom()
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">体检次数：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {
                                            this.props.Vm.TextVmObjList["ExamCount"].intoDom()
                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">备注：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        <textarea placeholder=".."  value={this.props.Vm.RowData.Remark} onChange={(e) => { this.fun_OnChange(e, "Remark"); } }></textarea>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
        }
        private inputUserBrithdayDate(): React.ReactElement<any> {
            var _vm = this.props.Vm.BrithdayDate;
            if (!_vm) {
                this.props.Vm.BrithdayDate = _vm = this.getDateVm(this.props.Vm.RowData.BirthDate, "notNull");
                _vm.onChangeHandle((str) => {
                    this.props.Vm.RowData.BirthDate = str;
                    return true;
                })

            }
            return _vm.intoDom();
        }
        private inputIDCard(): React.ReactElement<any> {
            var _vm = this.props.Vm.IDCardVm;
            if (!_vm) {
                this.props.Vm.IDCardVm = _vm = this.getInputVm(this.props.Vm.RowData.IDCard, "custom");
                _vm.onChangeHandle((str) => {
                    this.props.Vm.RowData.IDCard = str;
                    return true;
                });

                _vm.LegalObj.CustomLegalFun = (col) => {
                    return this.props.Vm.CheckID(_vm.TempDataValue, _vm);
                }
            }
            return _vm.intoDom();
        }
        private getInputVm(val: string, legalKind: string, fun?: Function): textFile.ui.TextVm {
            var _bean = new textFile.ui.TextVm();
            _bean.vmdataValue(val);
            _bean.LegalObj.Kind = legalKind;
            return _bean;
        }
        //获取日期的值
        private getDateVm(val: string, legalKind: string, fun?: Function): dateFile.ui.DateVm {
            let _bean = new dateFile.ui.DateVm();
            _bean.vmdataValue(val);
            _bean.LegalObj.Kind = legalKind;
            return _bean;
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
    export interface IMemberInsertMasterRowDomConfig {


    }

    export class MemberInsertMasterRowDomVm extends domCore.DomVm {
        public ReactType = MemberInsertMasterRowDomReact;
        public IsMasterHide: boolean;
        public RowData: dataFile.Member.IMemberData = {};
        public TextVmObjList: ITextVmDic = {};
        public BrithdayDate: dateFile.ui.DateVm; //出生日期
        public SexTypeCombo: comboFile.ui.ComboVm;
        public MaritalCombo: comboFile.ui.ComboVm;
        public NationCombo: comboFile.ui.ComboVm;
        public TypeCombo: comboFile.ui.ComboVm;
        public JobCombo: comboFile.ui.ComboVm;
        public JobTitleCombo: comboFile.ui.ComboVm;

        public IDCardVm: textFile.ui.TextVm

        public constructor(config?: IMemberInsertMasterRowDomConfig) {
            super();
            //this.BrithdayDate = new dateFile.ui.DateVm();
            //this.SexTypeCombo = new comboFile.ui.ComboVm();
            //var List = constantData.Data.GenderTypeData;
            //var itemList = [];
            //for (var index = 0; index < List.length; index++) {
            //    itemList.push(List[index])
            //}
            //this.SexTypeCombo.ItemList = itemList;
            //this.RowData.Gender =0
            //this.SexTypeCombo.onChangeHandle((str) => {
            //    this.RowData.Gender = Number(str);
            //    return true;
            //})
            //this.BrithdayDate.onChangeHandle((str) => {
            //        this.RowData.BirthDate = str;
            //        return true;
            //})

            //this.MaritalCombo = new comboFile.ui.ComboVm();
            //var List = constantData.Data.MaritalTypeData;
            //var itemList = [];
            //for (var index = 0; index < List.length; index++) {
            //    itemList.push(List[index])
            //}
            //this.MaritalCombo.ItemList = itemList;
            //this.RowData.MaritalStatus = 0;
            //this.MaritalCombo.onChangeHandle((str) => {
            //    this.RowData.MaritalStatus =Number(str);
            //    return true;
            //})


            //this.NationCombo = new comboFile.ui.ComboVm();
            //var List = constantData.Data.NationTypeData;
            //var itemList = [];
            //for (var index = 0; index < List.length; index++) {
            //    itemList.push(List[index])
            //}
            //this.NationCombo.ItemList = itemList;
            //this.RowData.Nation = 0;
            //this.NationCombo.onChangeHandle((str) => {
            //    this.RowData.Nation = Number(str);
            //    return true;
            //})

            //this.TypeCombo = new comboFile.ui.ComboVm();
            //var List = constantData.Data.MemberTypeData;
            //var itemList = [];
            //for (var index = 0; index < List.length; index++) {
            //    itemList.push(List[index])
            //}
            //this.TypeCombo.ItemList = itemList;
            //this.RowData.Type  =0;
            //this.TypeCombo.onChangeHandle((str) => {
            //    this.RowData.Type =Number(str);
            //    return true;
            //})  

            //this.JobCombo = new comboFile.ui.ComboVm();
            //var List = constantData.Data.JobTypeData;
            //var itemList = [];
            //for (var index = 0; index < List.length; index++) {
            //    itemList.push(List[index])
            //}
            //this.JobCombo.ItemList = itemList;
            //this.RowData.Job = 0;
            //this.JobCombo.onChangeHandle((str) => {
            //    this.RowData.Job = Number(str);
            //    return true;
            //})

            //this.JobTitleCombo = new comboFile.ui.ComboVm();
            //var List = constantData.Data.JobTitleTypeData;
            //var itemList = [];
            //for (var index = 0; index < List.length; index++) {
            //    itemList.push(List[index])
            //}
            //this.JobTitleCombo.ItemList = itemList;
            //this.RowData.JobTitle = 0;
            //this.JobTitleCombo.onChangeHandle((str) => {
            //    this.RowData.JobTitle =Number (str);
            //    return true;
            //})
            this.initTextVm("FileNumber", "notNull");
            this.initTextVm("UnitId");
            this.initTextVm("Name", "notNull");
            this.initTextVm("BirthDate", "notNull");
            this.initTextVm("Age");
            this.initTextVm("NativePlace", "notNull");
            this.initTextVm("IDCard","IDCardLegal");
            this.initTextVm("WorkUnit");
            this.initTextVm("Address");
            this.initTextVm("Phone", "MobilePhoneLegal");
            this.initTextVm("PastMedicalHistory");
            this.initTextVm("FamilyMedicalHistory");
            this.initTextVm("ExamCount","SeatLegalNull");

        }
        public CheckID(ID: string, textVm: textFile.ui.TextVm): string{
            var _reg = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/gi;
            if (!_reg.test(ID)) {
                textVm.LegalObj.LegalResult = false;
                textVm.LegalObj.ErrMsg = "身份证号码格式不正确"
                return "身份证号码格式不正确！";
            } else {
                textVm.LegalObj.LegalResult = true;
                textVm.showLegal();
                return "";
                //urlFile.Core.AkPost("/MedicalCenter/Member/ChkMembersList", { fids: ID }, (data) => {
                //    var _data = data.Data;
                //    if (_data[0].FID == null) {
                //        textVm.LegalObj.LegalResult = true;
                //        textVm.showLegal();
                //    } else {
                //        textVm.LegalObj.LegalResult = false;
                //        textVm.LegalObj.ErrMsg = "该会员信息已经存在";
                //        return "该会员信息已经存在！";
                //    }
                //});

            }
        }    
        public legal(): boolean {
            var l1 = this.TextVmObjList["FileNumber"].legal();
            var l2 = this.TextVmObjList["Name"].legal();
            var l3 = this.BrithdayDate.legal();
            var l4 = this.TextVmObjList["NativePlace"].legal();
            var l5 = this.IDCardVm.legal();
            var l6 = this.TextVmObjList["Phone"].legal();
            var l7 = this.TextVmObjList["ExamCount"].legal();
            var _res = l1 && l2 && l3 && l4 && l5 　&& l6 && l7;
            return _res;
        } 
        private initTextVm(colName: string, legal?: string) {
            var _name = colName.toString()
            var isexcite = false;

            for (var vn in this.TextVmObjList) {
                var _obj = this.TextVmObjList[_name];
                if (_obj) {
                    isexcite = true;
                    _exciteBean = _obj;
                }
            }
            if (!isexcite) {
                var _exciteBean: textFile.ui.TextVm = new textFile.ui.TextVm;
                _exciteBean.Tag = colName;
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    return true;
                });
                this.TextVmObjList[_name] = _exciteBean;
            }
        }
        public toChange() {
            this.IsChange = true;
            for (var n in this.TextVmObjList) {
                this.TextVmObjList[n].IsChange = true;
            }
        }          
    }
    export class MemberInsertMasterRowDomStates extends domCore.DomStates {
    }


    export class MemberInsertMasterRowDomProps extends domCore.DomProps<MemberInsertMasterRowDomVm>{
    }



}


