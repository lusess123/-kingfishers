import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");

import userUpdateRowFile = require("./UserUpdateRow");
import userDataFile = require("./../data");

export module UserUpdatePage {
    export class UserUpdatePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class UserUpdatePageReact extends basewedPageFile.Web.BaseWebPageReact<UserUpdatePageProps, UserUpdatePageStates, UserUpdatePageAction> implements domCore.IReact {
 

        public state = new UserUpdatePageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals">                      
                <div className="Hc-modals-list">
                  {this.props.Vm.UserRowList.map((row) => { return row.intoDom(); }) }
                </div>
                <div className="text-center"><span className="btn btn-sm btn-primary" onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
                </div>;
        }

        private fun_submitBtn() {
            this.props.Vm.submit();
        }

    }
    export interface IUserUpdatePageVmConfig {
        UserRowConfigList: userUpdateRowFile.UserUpdateRow.IUserUpdateRowVmConfig[];
        //DropDownListConfig: IDropDownListItem[];
    }

    //export interface IDropDownData {
    //    CODE_TEXT: string;
    //    CODE_VALUE: string;
    //}

    //export interface IDropDownListItem {
    //    User_sexType: IDropDownData[];
    //    User_CensusType: IDropDownData[];
    //    User_DegreeType: IDropDownData[];
    //    User_WorkType: IDropDownData[];
    //    User_NationalityType: IDropDownData[];
    //    User_PoliticsStatusType: IDropDownData[];
    //    User_PositionCodeType: IDropDownData[];

    //}
    export class UserUpdatePageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = UserUpdatePageReact;
        public UserRowList: userUpdateRowFile.UserUpdateRow.UserUpdateRowVm[] = [];
        public Title: string = "编辑用户信息";
        constructor(config?: IUserUpdatePageVmConfig){
            super();
            //this.UserRowList.push(new userUpdateRowFile.UserUpdateRow.UserUpdateRowVm(config));
            this.fInit(config);


        }
        private fInit(config?: IUserUpdatePageVmConfig):void {
            if (config) {
                if (config.UserRowConfigList) {
                    config.UserRowConfigList.forEach((r, l) => {
                        var _row = new userUpdateRowFile.UserUpdateRow.UserUpdateRowVm(r);
                        _row.Index = l;
                        this.UserRowList.push(_row);
                    })
                }
            }
        }
        public submit() {
            var postData = [];
            var userInsertRow = this.UserRowList[0].UserMasterObj;
            var userData = userInsertRow.UserData;
            userData.Gender = userInsertRow.UserSexCombo.dataValueGet(); //获取性别
            userData.Birthday = userInsertRow.UserBrithdayDate.vmDataValueGet();//获取出生日期
            //userData.POSITIONJOBID = userInsertRow.UserJobCombo.vmDataValueGet(); //获取职位
            userData.EntryDate = userInsertRow.UserEntryDate.vmDataValueGet(); //入职日期
            userData.FStatusKindId = userInsertRow.UserJobStateCombo.vmDataValueGet(); //在职状态
            userData.DegreeKindId = userInsertRow.UserDegreeCombo.vmDataValueGet();// 学历
            userData.NationalityKindId = userInsertRow.UserNationalityCombo.vmDataValueGet(); //民族
            userData.PoliticsStatusKindId = userInsertRow.UserPoliticsStatusCombo.vmDataValueGet(); //政治面貌
            userData.CensusKindId = userInsertRow.UserCensusCombo.vmDataValueGet(); //户口类型
            userData.GraduateDate = userInsertRow.UserGraduateDate.vmDataValueGet(); //毕业时间
            postData.push(userData);
            var users = JSON.stringify(postData);
            var _isSuccess = userInsertRow.legal();
            if (_isSuccess) {
                urlFile.Core.AkPost("/RightCloud/UserDetail/updateUseDetail",
                    {
                        users: users
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            var _strs: string = _list.join(",");
                            urlFile.Core.AkUrl.Current().openUrl("$winuserdetail$" + _strs + "$", true);
                            urlFile.Core.AkUrl.Current().openUrl("$userinfo$" + _strs + "$", true);
                            utilFile.Core.Util.Noty("用户修改成功");
                        }
                        else {
                            utilFile.Core.Util.Noty("数据修改失败");
                        }
                    });
            }
        }

        protected loadPage(callback?: () => any) {
            var _keys = this.Param1;
            urlFile.Core.AkPost("/RightCloud/UserDetail/getUserDetail", { fids: _keys }, (data) => {
                var _data: userDataFile.UserInfo.IUserDetailData[] = data.Data;
                if (_data) {
                    this.UserRowList = [];
                    var _config: IUserUpdatePageVmConfig = { UserRowConfigList: [] };
                    _config.UserRowConfigList = _data.map((r, index) => {
                        return ({
                            UserUpdatetRow: {
                                User_UpdateMasterData: {
                                    UserID: r.UserID,
                                    TrueName: r.TrueName, //用户姓名
                                    Gender: r.Gender,//性别
                                    UserName: r.UserName,// 登陆名
                                    Phone: r.Phone,//手机
                                    Email: r.Email,  //邮箱
                                    Birthday: r.Birthday,  //出生日期
                                    Address: r.Address,  //住址
                                    //FDepartmentID: string;  //所属部门
                                    POSITIONJOBID: r.POSITIONJOBID,  //职位
                                    EntryDate: r.EntryDate,  //入职日期
                                    FNumber: r.FNumber,  //工号
                                    FStatusKindId: r.FStatusKindId, //在职状态 ID
                                    FStatusKindName: r.FStatusKindName, //在职状态名称
                                    DegreeKindId: r.DegreeKindId, //学历 ID
                                    DegreeKindName: r.DegreeKindName, //学历名称
                                    Signatures: r.Signatures,  //个性签名
                                    IDCard: r.IDCard,  //身份证号 
                                    Age: r.Age,  //年龄
                                    NationalityKindId: r.NationalityKindId,  //民族 ID
                                    NationlityKindName: r.NationlityKindName, //民族 名称
                                    PoliticsStatusKindId: r.PoliticsStatusKindId, //政治面貌ID
                                    PoliticsStatusKindName: r.PoliticsStatusKindName, //政治面貌 名称
                                    CensusKindId: r.CensusKindId,  //户口类型 ID
                                    CensusKindName: r.CensusKindName, //户口类型名称
                                    GraduateSchool: r.GraduateSchool, //毕业学校
                                    Discipline: r.Discipline,  //专业
                                    GraduateDate: r.GraduateDate, //毕业时间
                                    Tel: r.Tel,  //联系电话
                                    QQ: r.QQ,
                                    dropDownList: r.dropDownList
                                }
                            }
                        }) 
                    });
                    //_data.forEach((r, index) => {
                    //    var _row: userUpdateRowFile.UserUpdateRow.UserUpdateRowVm = new userUpdateRowFile.UserUpdateRow.UserUpdateRowVm(r);
                    //    //debugger;
                    //    //this.fInit({});
                    //    //_row.UserData = r;
                    //    _row.UserData.dropDownList = r.dropDownList;
                    //    _row.UserMasterObj.UserData = r;
                    //    _row.Index = index;
                    //    if (index == 0) {
                    //        _row.IsMasterHide = false;
                    //    } else {
                    //        _row.IsMasterHide = true;
                    //    }
                    //    this.UserRowList.push(_row);
                    //    _row.UserMasterObj.init();
                    //});
                    this.fInit(_config)
                    callback();
                }

            });
        }

    }
    export class UserUpdatePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class UserUpdatePageProps extends basewedPageFile.Web.BaseWebPageProps<UserUpdatePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("USERUPDATE", basewedPageFile.Web.BaseWebPageVm, UserUpdatePageVm);

}

