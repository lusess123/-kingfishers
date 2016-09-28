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
export module UserInsertRow {
    export class UserInsertRowAction extends domCore.DomAction {
    }
    export class UserInsertRowReact extends domCore.DomReact<UserInsertRowProps, UserInsertRowStates, UserInsertRowAction> implements domCore.IReact {
        public state = new UserInsertRowStates();

        private fun_OnChange(e, fName: string) {
            var _val = e.target["value"];
            this.props.Vm.UserData[fName] = _val;
            this.forceUpdate();
        }
        //用户姓名
        private inputUserName(): React.ReactElement<any> {
            if (!this.props.Vm.UserNameTextVm) {
                this.props.Vm.UserNameTextVm = this.getInputVm(this.props.Vm.UserData.TrueName, "notNull");
                // this.props.Vm.UserNameTextVm = _vm;
                this.props.Vm.UserNameTextVm.onChangeHandle((str) => {
                    this.props.Vm.UserData.TrueName = str;
                    return true;
                });
                this.props.Vm.UserNameTextVm.LegalObj.CustomLegalFun = (col) => {
                    return this.props.Vm.legalLength(this.props.Vm.UserData.TrueName, 100, this.props.Vm.UserNameTextVm);
                }

            }
            return this.props.Vm.UserNameTextVm.intoDom();
        }
        //地址
        private inputUserAddress(): React.ReactElement<any> {
            if (!this.props.Vm.UserAddressTextVm)
            {
                this.props.Vm.UserAddressTextVm = this.getInputVm(this.props.Vm.UserData.Phone, "custom");
                this.props.Vm.UserAddressTextVm.onChangeHandle((str) => {
                    this.props.Vm.UserData.Phone = str;
                    return true;
                });
                this.props.Vm.UserAddressTextVm.LegalObj.CustomLegalFun = (col) => {
                    return this.props.Vm.legalLength(this.props.Vm.UserData.Phone, 50, this.props.Vm.UserAddressTextVm);
                }
            }
            return this.props.Vm.UserAddressTextVm.intoDom();
        }


        //手机
        private inputPhoneNum(): React.ReactElement<any> {
            if (!this.props.Vm.UserPhoneTextVM) {
                var _vm = this.getInputVm(this.props.Vm.UserData.Phone, "mobile");
                this.props.Vm.UserPhoneTextVM = _vm;
                _vm.onChangeHandle((str) => {
                    this.props.Vm.UserData.UserName = str;
                    return true;
                });
                _vm.LegalObj.CustomLegalFun = (col) => {
                return this.props.Vm.legalLength(this.props.Vm.UserData.Phone, 50, this.props.Vm.UserNameTextVm);
                }
            }
            return this.props.Vm.UserPhoneTextVM.intoDom();
        }
        //登陆名
        private inputUserlgName(): React.ReactElement<any> {
            if (!this.props.Vm.UserLgNameTextVm) {
                var _vm = this.getInputVm(this.props.Vm.UserData.UserName, "custom");
                this.props.Vm.UserLgNameTextVm = _vm;
                _vm.onChangeHandle((str) => {
                    this.props.Vm.UserData.UserName = str;
                    return true;
                });
                _vm.LegalObj.CustomLegalFun = (col) => {
                    return this.props.Vm.legalUnique("UserName", _vm);
                }
            }
            return this.props.Vm.UserLgNameTextVm.intoDom();
        }
        //工号
        private inputUserJobNumTextVm(): React.ReactElement<any> {
            var _vm = this.props.Vm.UserJobNumTextVm;
            if (!_vm) {
                this.props.Vm.UserJobNumTextVm = _vm = this.getInputVm(this.props.Vm.UserData.FNumber, "custom");
                _vm.onChangeHandle((str) => {
                    this.props.Vm.UserData.FNumber = str;
                    return true;
                });
                _vm.LegalObj.CustomLegalFun = (col) => {
                    return this.props.Vm.legalUnique("UserNum", _vm);
                }
            }
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
        public pSender(): React.ReactElement<any> {
            return (
                <div className="1">
                    <div className="tabs-content">
                        <div className="clearfix" >
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label" className="required">用户名：</label></div>
                                <div className=" Hu-input">{this.inputUserName() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label">性别：</label></div>
                                <div className=" Hu-input">{this.props.Vm.UserSexCombo.intoDom() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label" className="required">登陆名：</label></div>
                                <div className=" Hu-input">{this.inputUserlgName() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label" >手机：</label></div>
                                <div className=" Hu-input">{this.inputPhoneNum() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"> <label for=" Hu-input" >Email：</label></div>
                                <div className=" Hu-input"><input className="Hg-width" type="text" value={this.props.Vm.UserData.Email} onChange={(e) => { this.fun_OnChange(e, "Email") } } /></div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label">出生日期：</label></div>
                                <div className=" Hu-input">{this.inputUserBrithdayDate() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label">住址：</label></div>
                                <div className=" Hu-input"><input className="Hg-width" type="text" value={this.props.Vm.UserData.Address} onChange={(e) => { this.fun_OnChange(e, "Address") } } /></div>
                            </div>
                            {/*<div className="large-4 small-12 columns acs-dashed-line">
                                <div className="columns acs-label">
                                    <label for="right-label" className="right">职位：</label>
                                    </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="left">{this.props.Vm.UserJobCombo.intoDom() }</label>
                                    </div>
                                </div>*/}
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label" className="">入职日期：</label></div>
                                <div className=" Hu-input">{this.inputUserEntryDate() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label" className="required">工号：</label></div>
                                <div className=" Hu-input">{this.inputUserJobNumTextVm() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label">在职状态：</label></div>
                                <div className=" Hu-input">{this.props.Vm.UserJobStateCombo.intoDom() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label">学历：</label></div>
                                <div className=" Hu-input">{this.props.Vm.UserDegreeCombo.intoDom() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label">个性签名：</label></div>
                                <div className=" Hu-input"><input className="Hg-width" type="text" value={this.props.Vm.UserData.Signatures} onChange={(e) => { this.fun_OnChange(e, "Signatures") } } />
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label">身份证号：</label></div>
                                <div className=" Hu-input"><input className="Hg-width" type="text" value={this.props.Vm.UserData.IDCard} onChange={(e) => { this.fun_OnChange(e, "IDCard") } } />
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label">年龄：</label></div>
                                <div className=" Hu-input"><input className="Hg-width" type="text" value={this.props.Vm.UserData.Age} onChange={(e) => { this.fun_OnChange(e, "Age") } } /></div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12s Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label">民族：</label></div>
                                <div className=" Hu-input">{this.props.Vm.UserNationalityCombo.intoDom() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label">政治面貌：</label> </div>
                                <div className=" Hu-input">{this.props.Vm.UserPoliticsStatusCombo.intoDom() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label">户口类型：</label> </div>
                                <div className=" Hu-input">{this.props.Vm.UserCensusCombo.intoDom() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label">毕业学校：</label></div>
                                <div className=" Hu-input"><input className="Hg-width" type="text" value={this.props.Vm.UserData.GraduateSchool} onChange={(e) => { this.fun_OnChange(e, "GraduateSchool") } } /></div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label" >专业：</label></div>
                                <div className=" Hu-input"> <input className="Hg-width" type="text" value={this.props.Vm.UserData.Discipline} onChange={(e) => { this.fun_OnChange(e, "Discipline") } } /></div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label" >毕业日期：</label></div>
                                <div className=" Hu-input">{this.inputUserGraduateDate() }</div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label">联系电话：</label></div>
                                <div className=" Hu-input"><input className="Hg-width" type="text" value={this.props.Vm.UserData.Tel} onChange={(e) => { this.fun_OnChange(e, "Tel") } } /></div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className=" Hu-label"><label for="right-label">QQ：</label></div>
                                <div className=" Hu-input"><input className="Hg-width" type="text" value={this.props.Vm.UserData.QQ} onChange={(e) => { this.fun_OnChange(e, "QQ") } } /></div>
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

    export interface IUserInsertRowVmConfig {
        User_SexData?: dataFile.UserInfo.IDropDownData[];  //性别
        User_PositionCodeData?: dataFile.UserInfo.IDropDownData[];  //职位
        User_WorkStateData?: dataFile.UserInfo.IDropDownData[];  //在职状态 
        User_DegreeData?: dataFile.UserInfo.IDropDownData[];  //学历
        User_NationalityData?: dataFile.UserInfo.IDropDownData[]; //民族
        User_PoliticsStatusData?: dataFile.UserInfo.IDropDownData[];  //政治面貌
        User_CensusData?: dataFile.UserInfo.IDropDownData[];  //户口类型
    }

    export class UserInsertRowVm extends domCore.DomVm {
        public ReactType = UserInsertRowReact;

        public UserData: dataFile.UserInfo.IUserDetailData;

        public UserNameTextVm: textFile.ui.TextVm;   //姓名
        public UserSexCombo: comboFile.ui.ComboVm;  //性别
        public UserLgNameTextVm: textFile.ui.TextVm; //登陆名
        public UserPhoneTextVM: textFile.ui.TextVm;  //手机
        //public UserEmailText:string;//email
        public UserBrithdayDate: dateFile.ui.DateVm; //出生日期
        public UserAddressTextVm: textFile.ui.TextVm;//住址
        //public ParentSelector: treeSelectorFile.ui.TreeSingleSelectorVm;  //所属部门
        public UserJobCombo: comboFile.ui.ComboVm;  //职位
        public UserEntryDate: dateFile.ui.DateVm; //入职日期
        public UserJobNumTextVm: textFile.ui.TextVm;//工号
        public UserJobStateCombo: comboFile.ui.ComboVm;//在职状态
        public UserDegreeCombo: comboFile.ui.ComboVm; //学历
        //public UserSignaturesText: string;//个性签名
        //public UserIDNumTextVm: string;//身份证号
        //public UserAgeTextVm: string; //年龄
        public UserNationalityCombo: comboFile.ui.ComboVm;//民族
        public UserPoliticsStatusCombo: comboFile.ui.ComboVm;//政治面貌
        public UserCensusCombo: comboFile.ui.ComboVm; //户口类型
        //public UserSchoolText: string;//毕业学校
        //public UserDisciplineText: string;//专业
        public UserGraduateDate: dateFile.ui.DateVm;//毕业日期
        //public UserTelText: string;  //联系电话
        //public UserQQText: string; //QQ

        public constructor(config: IUserInsertRowVmConfig) {
            super();
            //性别选择框
            this.UserSexCombo = new comboFile.ui.ComboVm();
            var itemList = [];
            if (config) {
                if (config.User_SexData) {
                    this.UserSexCombo.ItemList = [];
                    this.UserSexCombo.ItemList.push({ Value: "", Text: "请选择" });
                    config.User_SexData.forEach((r) => {
                        this.UserSexCombo.ItemList.push({ Value: r.CODE_VALUE, Text: r.CODE_TEXT });
                    })
                }
            }
            //出生日期
            this.UserBrithdayDate = new dateFile.ui.DateVm();
            //入职日期
            this.UserEntryDate = new dateFile.ui.DateVm();
            //职位选择
            this.UserJobCombo = new comboFile.ui.ComboVm();
            if (config) {
                if (config.User_PositionCodeData) {
                    this.UserJobCombo.ItemList = [];
                    this.UserJobCombo.ItemList.push({ Value: "", Text: "请选择" });
                    config.User_PositionCodeData.forEach((r) => {
                        this.UserJobCombo.ItemList.push({ Value: r.CODE_VALUE, Text: r.CODE_TEXT });
                    })
                }
            }
            //在职状态
            this.UserJobStateCombo = new comboFile.ui.ComboVm();
            if (config) {
                if (config.User_WorkStateData) {
                    this.UserJobStateCombo.ItemList = [];
                    this.UserJobStateCombo.ItemList.push({ Value: "", Text: "请选择" });
                    config.User_WorkStateData.forEach((r) => {
                        this.UserJobStateCombo.ItemList.push({ Value: r.CODE_VALUE, Text: r.CODE_TEXT });
                    })
                }
            }
            //学历
            this.UserDegreeCombo = new comboFile.ui.ComboVm();
            if (config) {
                if (config.User_DegreeData) {
                    this.UserDegreeCombo.ItemList = [];
                    this.UserDegreeCombo.ItemList.push({ Value: "", Text: "请选择" });
                    config.User_DegreeData.forEach((r) => {
                        this.UserDegreeCombo.ItemList.push({ Value: r.CODE_VALUE, Text: r.CODE_TEXT });
                    })
                }
            }
            //民族
            this.UserNationalityCombo = new comboFile.ui.ComboVm();
            if (config) {
                if (config.User_NationalityData) {
                    this.UserNationalityCombo.ItemList = [];
                    this.UserNationalityCombo.ItemList.push({ Value: "", Text: "请选择" });
                    config.User_NationalityData.forEach((r) => {
                        this.UserNationalityCombo.ItemList.push({ Value: r.CODE_VALUE, Text: r.CODE_TEXT });
                    })
                }
            }
            //政治面貌
            this.UserPoliticsStatusCombo = new comboFile.ui.ComboVm();
            if (config) {
                if (config.User_PoliticsStatusData) {
                    this.UserPoliticsStatusCombo.ItemList = [];
                    this.UserPoliticsStatusCombo.ItemList.push({ Value: "", Text: "请选择" });
                    config.User_PoliticsStatusData.forEach((r) => {
                        this.UserPoliticsStatusCombo.ItemList.push({ Value: r.CODE_VALUE, Text: r.CODE_TEXT });
                    })
                }
            }

            //户口类型
            this.UserCensusCombo = new comboFile.ui.ComboVm();
            if (config) {
                if (config.User_CensusData) {
                    this.UserCensusCombo.ItemList = [];
                    this.UserCensusCombo.ItemList.push({ Value: "", Text: "请选择" });
                    config.User_CensusData.forEach((r) => {
                        this.UserCensusCombo.ItemList.push({ Value: r.CODE_VALUE, Text: r.CODE_TEXT });
                    })
                }
            }

            //毕业日期
            this.UserGraduateDate = new dateFile.ui.DateVm();

            this.UserData = {
                UserID: "", TrueName: "", Gender: "", UserName: "",
                Phone: "", Email: "", Birthday: "", Address: "", POSITIONJOBID: "", EntryDate: "",
                FNumber: "", FStatusKindId: "", FStatusKindName: "", DegreeKindId: "", DegreeKindName: "",
                Signatures: "", IDCard: "", Age: "", NationalityKindId: "", NationlityKindName: "", PoliticsStatusKindId: "",
                PoliticsStatusKindName: "", CensusKindId: "", CensusKindName: "", GraduateSchool: "", Discipline: "", GraduateDate: "", Tel: "", QQ: "", dropDownList: {}
            };

        }
        //获取用户名
        private getUserName(): string {
            return this.UserLgNameTextVm.TempDataValue;
        }
        //获取用户工号
        private getUserNum(): string {
            return this.UserJobNumTextVm.TempDataValue;
        }

        //验证长度
        public legalLength(vals: string, length: number, textVm: textFile.ui.TextVm): string {

            if (vals.length > length) {
                textVm.LegalObj.LegalResult = false;
                textVm.LegalObj.ErrMsg = "长度不能超过" + length.toString();
                return "长度不能超过" + length.toString();
            } else {
                textVm.LegalObj.LegalResult = true;
                textVm.showLegal();
                return "";
            }


        }

        //验证工号和登陆名唯一性
        public legalUnique(vals: string, textVm: textFile.ui.TextVm): string {
            var _userName = this.getUserName();
            var _userNum = this.getUserNum();
            urlFile.Core.AkPost("/RightCloud/UserDetail/boolExist", { userName: _userName, userNum: _userNum }, (a) => {
                if (a.Content == "ok") {
                    //var _data = a.Data;
                    textVm.LegalObj.LegalResult = true;
                    textVm.showLegal();
                } else {
                    textVm.LegalObj.LegalResult = false;
                    textVm.LegalObj.ErrMsg = a.ActionType;
                    textVm.showLegal();
                }
            });
            return "正在验证当中";
        }
        public legal(): boolean {
            var userName = this.UserNameTextVm.legal();
            //var lgName = this.UserLgNameTextVm.legal();
            //var jobNum= this.UserJobNumTextVm.legal();
            var _res = userName;
            return _res;
        }
    }
    export class UserInsertRowStates extends domCore.DomStates {
    }


    export class UserInsertRowProps extends domCore.DomProps<UserInsertRowVm>{
    }
}