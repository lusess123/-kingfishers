import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import treeSelectorFile = require("./../../../02col/03selector/TreeSelector");
import comboFile = require("./../../../02col/02Mulite/Combo");
import dateFile = require("./../../../02col/01single/Date");
import dataFile = require("./../data");
import textFile = require("./../../../02col/01single/Text");

export module UserUpdateMaster {
    export class UserUpdateMasterAction extends domCore.DomAction {
    }

    export class UserUpdateMasterReact extends domCore.DomReact<UserUpdateMasterProps, UserUpdateMasterStates, UserUpdateMasterAction> implements domCore.IReact {

        public state = new UserUpdateMasterStates();
        private fun_OnChange(e, fName: string) {
            var _val = e.target["value"];
            this.props.Vm.UserData[fName] = _val;
            this.forceUpdate();
        }
        //用户姓名
        private inputUserName(): React.ReactElement<any> {
            //
            var _vm = this.getInputVm(this.props.Vm.UserData.TrueName, "notNull");
            this.props.Vm.UserNameTextVm = _vm;
            _vm.onChangeHandle((str) => {
                this.props.Vm.UserData.TrueName = str;
                return true;
            });
            return _vm.intoDom();
        }
        //登陆名
        private inputUserlgName(): React.ReactElement<any> {
            var _vm = this.getInputVm(this.props.Vm.UserData.UserName, "notNull");
            this.props.Vm.UserLgNameTextVm = _vm;
            _vm.onChangeHandle((str) => {
                this.props.Vm.UserData.UserName = str;
                return true;
            });
            return _vm.intoDom();
        }
        //出生日期
        private inputUserBrithdayDate(): React.ReactElement<any> {
            var _vm = this.props.Vm.UserBrithdayDate;
            if (!_vm) {
                this.props.Vm.UserBrithdayDate = _vm = this.getDateVm(this.props.Vm.UserData.Birthday, "notNull");
                _vm.onChangeHandle((str) => {
                    this.props.Vm.UserData.Birthday = str;
                    return true;
                })
            }
            return _vm.intoDom();
        }
        //入职日期
        private inputUserEntryDate(): React.ReactElement<any> {
            var _vm = this.props.Vm.UserEntryDate;
            if (!_vm) {
                this.props.Vm.UserEntryDate = _vm = this.getDateVm(this.props.Vm.UserData.EntryDate, "notNull");
                _vm.onChangeHandle((str) => {
                    this.props.Vm.UserData.EntryDate = str;
                    return true;
                })
            }
            return _vm.intoDom();
        }
        //毕业日期
        private inputUserGraduateDate(): React.ReactElement<any> {
            var _vm = this.props.Vm.UserGraduateDate;
            if (!_vm) {
                this.props.Vm.UserGraduateDate = _vm = this.getDateVm(this.props.Vm.UserData.GraduateDate, "notNull");
                _vm.onChangeHandle((str) => {
                    this.props.Vm.UserData.GraduateDate = str;
                    return true;
                })
            }
            return _vm.intoDom();
        }
        //工号
        private inputUserJobNumTextVm(): React.ReactElement<any> {
            var _vm = this.props.Vm.UserJobNumTextVm;
            if (!_vm) {
                this.props.Vm.UserJobNumTextVm = _vm = this.getInputVm(this.props.Vm.UserData.FNumber, "notNull");
                _vm.onChangeHandle((str) => {
                    this.props.Vm.UserData.FNumber = str;
                    return true;
                });
            }

            return _vm.intoDom();
        }

        //获取Input 的值
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
        ///*{<div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
        //                        <div className="pull-left Hu-label">
        //                            <label for="pull-right-label" className="pull-right">职位：</label>
        //                            </div>
        //                        <div className="pull-left Hu-input">
        //                            <label for="pull-right-label" className="pull-left">{this.props.Vm.UserJobCombo.intoDom() }</label>
        //                            </div>
        //                        </div>}*/
        public pSender(): React.ReactElement<any> {
            return (
                <div className="panel">
                    <div className="panel-collapse collapse in">
                        <div className="clearfix" >
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label>用户名：</label></div>
                                <div className="Hu-input">{this.inputUserName() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label>性别：</label></div>
                                <div className="Hu-input">{this.props.Vm.UserSexCombo.intoDom() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label>登陆名：</label></div>
                                <div className="Hu-input"><label className="form-control-label">{this.props.Vm.UserData.UserName}</label></div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label>手机：</label></div>
                                <div className=" Hu-input"><input type="text" className="Hg-width" value={this.props.Vm.UserData.Phone} onChange={(e) => { this.fun_OnChange(e, "Phone") } } /></div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label >Email：</label> </div>
                                <div className="Hu-input"><input type="text" className="Hg-width" value={this.props.Vm.UserData.Email} onChange={(e) => { this.fun_OnChange(e, "Email") } } /></div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label>出生日期：</label></div>
                                <div className="Hu-input">{this.inputUserBrithdayDate() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label>住址：</label></div>
                                <div className="Hu-input"><input type="text" className="Hg-width" value={this.props.Vm.UserData.Address} onChange={(e) => { this.fun_OnChange(e, "Address") } } /></div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label>入职日期：</label></div>
                                <div className="Hu-input">{this.inputUserEntryDate() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label>工号：</label></div>
                                <div className="Hu-input"><label className="form-control-label">{this.props.Vm.UserData.FNumber}</label></div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"> <label>在职状态：</label> </div>
                                <div className=" Hu-input">{this.props.Vm.UserJobStateCombo.intoDom() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label>学历：</label></div>
                                <div className="Hu-input">{this.props.Vm.UserDegreeCombo.intoDom() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label >个性签名：</label> </div>
                                <div className=" Hu-input"><input type="text" className="Hg-width" value={this.props.Vm.UserData.Signatures} onChange={(e) => { this.fun_OnChange(e, "Signatures") } } /></div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label>身份证号：</label></div>
                                <div className="Hu-input"><input type="text" className="Hg-width" value={this.props.Vm.UserData.IDCard} onChange={(e) => { this.fun_OnChange(e, "IDCard") } } /></div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label>年龄：</label></div>
                                <div className=" Hu-input"><input type="text" className="Hg-width" value={this.props.Vm.UserData.Age} onChange={(e) => { this.fun_OnChange(e, "Age") } } /></div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label>民族：</label></div>
                                <div className=" Hu-input">{this.props.Vm.UserNationalityCombo.intoDom() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label>政治面貌：</label></div>
                                <div className="Hu-input">{this.props.Vm.UserPoliticsStatusCombo.intoDom() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label>户口类型：</label></div>
                                <div className="Hu-input"> {this.props.Vm.UserCensusCombo.intoDom() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"> <label>毕业学校：</label></div>
                                <div className="Hu-input"><input type="text" className="Hg-width" value={this.props.Vm.UserData.GraduateSchool} onChange={(e) => { this.fun_OnChange(e, "GraduateSchool") } } /></div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label>专业：</label></div>
                                <div className="Hu-input"><input type="text" className="Hg-width" value={this.props.Vm.UserData.Discipline} onChange={(e) => { this.fun_OnChange(e, "Discipline") } } /></div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label>毕业日期：</label> </div>
                                <div className="Hu-input">{this.inputUserGraduateDate() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"> <label >联系电话：</label></div>
                                <div className="Hu-input"><input type="text" className="Hg-width" value={this.props.Vm.UserData.Tel} onChange={(e) => { this.fun_OnChange(e, "Tel") } } /></div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label"><label>QQ：</label></div>
                                <div className="Hu-input"><input type="text" className="Hg-width" value={this.props.Vm.UserData.QQ} onChange={(e) => { this.fun_OnChange(e, "QQ") } } /></div>
                            </div>
                        </div>
                    </div>
                 </div>
            )

        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }


    }
    export interface IUserUpdateMasterVmConfig {
        User_UpdateMasterData?: dataFile.UserInfo.IUserDetailData;
    }
    export class UserUpdateMasterVm extends domCore.DomVm {
        public ReactType = UserUpdateMasterReact;

        public UserData: dataFile.UserInfo.IUserDetailData;

        public UserNameTextVm: textFile.ui.TextVm;   //姓名
        public UserSexCombo: comboFile.ui.ComboVm;  //性别
        public UserLgNameTextVm: textFile.ui.TextVm; //登陆名
        //public UserPhoneText:string;  //手机
        //public UserEmailText:string;//email
        public UserBrithdayDate: dateFile.ui.DateVm; //出生日期
        //public UserAddressTextVm:string;//住址
        //public ParentSelector: treeSelectorFile.ui.TreeSingleSelectorVm;  //所属部门
        public UserJobCombo: comboFile.ui.ComboVm;  //职位
        public UserEntryDate: dateFile.ui.DateVm; //入职日期
        public UserJobNumTextVm: textFile.ui.TextVm;//工号
        public UserJobStateCombo: comboFile.ui.ComboVm;//在职状态
        public UserDegreeCombo: comboFile.ui.ComboVm; //学历
        //public UserSignaturesText:string;//个性签名
        //public UserIDNumTextVm:string;//身份证号
        //public UserAgeTextVm:string; //年龄
        public UserNationalityCombo: comboFile.ui.ComboVm;//民族
        public UserPoliticsStatusCombo: comboFile.ui.ComboVm;//政治面貌
        public UserCensusCombo: comboFile.ui.ComboVm; //户口类型
        //public UserSchoolText:string;//毕业学校
        //public UserDisciplineText:string;//专业
        public UserGraduateDate: dateFile.ui.DateVm;//毕业日期
        //public UserTelText:string;  //联系电话
        //public UserQQText:string; //QQ
        public dataList: Array<any> = [];
        //public IsMasterHide: boolean;
        // public IsDetailHide: boolean;

        public constructor(config: IUserUpdateMasterVmConfig) {
            super();
            if (config) {
                if (config.User_UpdateMasterData) {
                    var r = config.User_UpdateMasterData.dropDownList;
                    var n = config.User_UpdateMasterData;
                    //性别
                    this.UserSexCombo = new comboFile.ui.ComboVm({
                        ItemList: r.User_sexType.map((n) => {
                            return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                        })
                    });
                    this.UserSexCombo.ItemList.unshift({Value:"",Text:"请选择" });
                    this.UserSexCombo.dataValueSet(config.User_UpdateMasterData.Gender);
                    //工作状态
                    this.UserJobStateCombo = new comboFile.ui.ComboVm({
                        ItemList: r.User_WorkType.map((n) => {
                            return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                        })
                    });
                    this.UserJobStateCombo.ItemList.unshift({ Value: "", Text: "请选择" });
                    this.UserJobStateCombo.dataValueSet(config.User_UpdateMasterData.FStatusKindId);
                    //学历
                    this.UserDegreeCombo = new comboFile.ui.ComboVm({
                        ItemList: r.User_DegreeType.map((n) => {
                            return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                        })
                    });
                    this.UserDegreeCombo.ItemList.unshift({ Value: "", Text: "请选择" });
                    this.UserDegreeCombo.dataValueSet(config.User_UpdateMasterData.DegreeKindId);
                    //民族
                    this.UserNationalityCombo = new comboFile.ui.ComboVm({
                        ItemList: r.User_NationalityType.map((n) => {
                            return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                        })
                    });
                    this.UserNationalityCombo.ItemList.unshift({ Value: "", Text: "请选择" });
                    this.UserNationalityCombo.dataValueSet(config.User_UpdateMasterData.NationalityKindId);
                    //政党
                    this.UserPoliticsStatusCombo = new comboFile.ui.ComboVm({
                        ItemList: r.User_PoliticsStatusType.map((n) => {
                            return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                        })
                    });
                    this.UserPoliticsStatusCombo.ItemList.unshift({ Value: "", Text: "请选择" });
                    this.UserPoliticsStatusCombo.dataValueSet(config.User_UpdateMasterData.PoliticsStatusKindId);
                    //户口类型
                    this.UserCensusCombo = new comboFile.ui.ComboVm({
                        ItemList: r.User_CensusType.map((n) => {
                            return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                        })
                    });
                    this.UserCensusCombo.ItemList.unshift({ Value: "", Text: "请选择" });
                    this.UserCensusCombo.dataValueSet(config.User_UpdateMasterData.CensusKindId);

                    //this.init();
                    ////出生日期
                    //this.UserBrithdayDate = new dateFile.ui.DateVm();
                    ////入职日期
                   // this.UserEntryDate = new dateFile.ui.DateVm();

                    //毕业日期
                    //this.UserGraduateDate = new dateFile.ui.DateVm();
                    this.UserData = {
                        UserID: n.UserID, TrueName: n.TrueName, Gender: "", UserName: n.UserName, Phone: n.Phone, Email: n.Email, Birthday: n.Birthday, Address: n.Address,
                        POSITIONJOBID: "", EntryDate: n.EntryDate, FNumber: n.FNumber, FStatusKindId: "", FStatusKindName: "", DegreeKindId: "",
                        DegreeKindName: "", Signatures: n.Signatures, IDCard: n.IDCard, Age: n.Age, NationalityKindId: "", NationlityKindName: "",
                        PoliticsStatusKindId: "", PoliticsStatusKindName: "", CensusKindId: "", CensusKindName: "", GraduateSchool: n.GraduateSchool,
                        Discipline: n.Discipline, GraduateDate: n.GraduateDate, Tel: n.Tel, QQ: n.QQ, dropDownList: {}
                    };
                }
            }



        }
        public init() {
            this.UserSexCombo.dataValueSet(this.UserData.Gender);
            this.UserBrithdayDate.dataValueSet(this.UserData.Birthday);
            //this.UserJobCombo.dataValueSet(this.UserData.POSITIONJOBID);
            this.UserEntryDate.dataValueSet(this.UserData.EntryDate);
            this.UserJobStateCombo.dataValueSet(this.UserData.FStatusKindId);
            this.UserDegreeCombo.dataValueSet(this.UserData.DegreeKindId);
            this.UserNationalityCombo.dataValueSet(this.UserData.NationalityKindId);
            this.UserPoliticsStatusCombo.dataValueSet(this.UserData.PoliticsStatusKindId);
            this.UserCensusCombo.dataValueSet(this.UserData.CensusKindId);
            this.UserGraduateDate.dataValueSet(this.UserData.GraduateDate);
        }
        public legal(): boolean {
            var userName = this.UserNameTextVm.legal();
            //var lgName = this.UserLgNameTextVm.legal();
            //var jobNum = this.UserJobNumTextVm.legal();
            var _res = userName;
            return _res;
        }
    }


    export class UserUpdateMasterStates extends domCore.DomStates {
    }


    export class UserUpdateMasterProps extends domCore.DomProps<UserUpdateMasterVm>{
    }



}


