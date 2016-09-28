import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import treeSelectorFile = require("./../../../02col/03selector/TreeSelector");
import comboFile = require("./../../../02col/02Mulite/Combo");
import dataFile = require("./../data");
import dateFile = require("./../../../02col/01single/Date");
import textFile = require("./../../../02col/01single/Text");
import userInsertRowFile = require("./UserUpdateMaster");

export module UserUpdateRow {
    export class UserUpdateRowAction extends domCore.DomAction {
    }

    export class UserUpdateRowReact extends domCore.DomReact<UserUpdateRowProps, UserUpdateRowStates, UserUpdateRowAction> implements domCore.IReact {

        public state = new UserUpdateRowStates();

        private fun_detailTitleClick() {
            this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
            this.forceUpdate();
        }
        private fun_masterTitleClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }
        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="Hu-row-title Hu-pointer" onClick={() => { this.fun_masterTitleClick(); } }>{this.props.Vm.Index + 1}
                    <i className={"fa fa-angle-double-" + (this.props.Vm.IsMasterHide ?  "right" : "down") }></i></div>
                <div className={this.props.Vm.IsMasterHide ? "hide" : ""}>
                {this.props.Vm.UserMasterObj.intoDom() }
                    </div>
                </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export interface IUserUpdateRowVmConfig {
        UserUpdatetRow?: userInsertRowFile.UserUpdateMaster.IUserUpdateMasterVmConfig;
    }
    export class UserUpdateRowVm extends domCore.DomVm {
        public ReactType = UserUpdateRowReact;

        public UserData: dataFile.UserInfo.IUserDetailData;
        //public UserMasterObj: userInsertRowFile.UserUpdateMaster.UserUpdateMasterVm = new userInsertRowFile.UserUpdateMaster.UserUpdateMasterVm();
        public UserMasterObj: userInsertRowFile.UserUpdateMaster.UserUpdateMasterVm;
        public UserNameTextVm: textFile.ui.TextVm;   //姓名
        public UserSexCombo: comboFile.ui.ComboVm;  //性别
        //public UserLgNameTextVm: textFile.ui.TextVm; //登陆名
        //public UserPhoneText;  //手机
        //public UserEmailText;//email
        public UserBrithdayDate: dateFile.ui.DateVm; //出生日期
        //public UserAddressTextVm;//住址
        //public ParentSelector: treeSelectorFile.ui.TreeSingleSelectorVm;  //所属部门
        public UserJobCombo: comboFile.ui.ComboVm;  //职位
        public UserEntryDate: dateFile.ui.DateVm; //入职日期
        public UserJobNumTextVm: textFile.ui.TextVm;//工号
        public UserJobStateCombo: comboFile.ui.ComboVm;//在职状态
        public UserDegreeCombo: comboFile.ui.ComboVm; //学历
        //public UserSignaturesText;//个性签名
        //public UserIDNumTextVm;//身份证号
        //public UserAgeTextVm; //年龄
        public UserNationalityCombo: comboFile.ui.ComboVm;//民族
        public UserPoliticsStatusCombo: comboFile.ui.ComboVm;//政治面貌
        public UserCensusCombo: comboFile.ui.ComboVm; //户口类型
        //public UserSchoolText;//毕业学校
        //public UserDisciplineText;//专业
        public UserGraduateDate: dateFile.ui.DateVm;//毕业日期
        //public UserTelText;  //联系电话
        //public UserQQText; //QQ

        public IsMasterHide: boolean;
        public IsDetailHide: boolean;

        public Index: number;


        public constructor(config:IUserUpdateRowVmConfig) {
            super();
            if (config) {
                if (config.UserUpdatetRow) {
                    this.UserMasterObj = new userInsertRowFile.UserUpdateMaster.UserUpdateMasterVm(config.UserUpdatetRow);
                }
            }
            if (config) {
                if (config.UserUpdatetRow) {

                    var r = config.UserUpdatetRow.User_UpdateMasterData.dropDownList;


                    
                    this.UserSexCombo = new comboFile.ui.ComboVm({
                        ItemList:r.User_sexType.map((n) => {
                            return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                        })
                    });


                    this.UserJobStateCombo = new comboFile.ui.ComboVm({
                        ItemList: r.User_WorkType.map((n) => {
                            return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                        })
                    });
                    this.UserDegreeCombo = new comboFile.ui.ComboVm({
                        ItemList: r.User_DegreeType.map((n) => {
                            return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                        })
                    });
                    this.UserNationalityCombo = new comboFile.ui.ComboVm({
                        ItemList: r.User_NationalityType.map((n) => {
                          
                            return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                        })
                    });
                    this.UserPoliticsStatusCombo = new comboFile.ui.ComboVm({
                        ItemList: r.User_PoliticsStatusType.map((n) => {
 
                            return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                        })
                    });
                    this.UserCensusCombo = new comboFile.ui.ComboVm({
                        ItemList: r.User_CensusType.map((n) => {
                    
                            return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                        })
                    });
                }
            }
           
            
            //毕业日期
            this.UserGraduateDate = new dateFile.ui.DateVm();

            this.UserData = {
                UserID: "", TrueName: "", Gender: "", UserName: "", Phone: "", Email: "", Birthday: "",
                Address: "", POSITIONJOBID: "", EntryDate: "", FNumber: "", FStatusKindId: "", FStatusKindName: "",
                DegreeKindId: "", DegreeKindName: "", Signatures: "", IDCard: "", Age: "", NationalityKindId: "",
                NationlityKindName: "", PoliticsStatusKindId: "", PoliticsStatusKindName: "", CensusKindId: "",
                CensusKindName: "", GraduateSchool: "", Discipline: "", GraduateDate: "", Tel: "", QQ: "", dropDownList: {}
            };
            
        }
    }
    export class UserUpdateRowStates extends domCore.DomStates {
    }


    export class UserUpdateRowProps extends domCore.DomProps<UserUpdateRowVm>{
    }



}


