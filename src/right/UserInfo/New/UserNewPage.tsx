import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import userRowFile = require("./UserRow");
export module UserNew {
    export class UserNewAction extends basewedPageFile.Web.BaseWebPageAction {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }
    export class UserNewReact extends basewedPageFile.Web.BaseWebPageReact<UserNewProps, UserNewStates, UserNewAction> implements domCore.IReact {
        public state = new UserNewStates();
        private fun_submitBtn() {
            this.props.Vm.submit();
        }
        public pSender(): React.ReactElement<any> {
            return (
                <div className="Hm-modals">
                    <div>
                        {this.props.Vm.UserRowOList.map((l) => { return l.intoDom(); }) }
                        </div>
                    <div className="text-center"><span className="btn btn-sm btn-primary" onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
                    </div>
            )
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }

    export interface IUserNewVmConfig
    {
        UserRowOList: userRowFile.UserRow.IUserRowVmConfig[];
    }

    export interface IDropDownData {
        CODE_TEXT: string;
        CODE_VALUE: string;
    }

    export interface IDropDownListItem
    {
        User_sexType: IDropDownData[];
        User_CensusType: IDropDownData[];
        User_DegreeType: IDropDownData[];
        User_WorkType: IDropDownData[];
        User_NationalityType: IDropDownData[];
        User_PoliticsStatusType: IDropDownData[];
        User_PositionCodeType: IDropDownData[];


    }

    export class UserNewVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = UserNewReact;
        public UserRowOList: userRowFile.UserRow.UserRowVm[] = [];
        public Title: string = "新增用户";
        constructor(config?: IUserNewVmConfig) {
            super();
            this.Title = "新增用户";
            this.fInit(config);
        }

        private fInit(config?: IUserNewVmConfig):void
        {
            if (config) {
                if (config.UserRowOList) {
                    config.UserRowOList.forEach((r) => {
                        this.UserRowOList.push(new userRowFile.UserRow.UserRowVm(r));
                    });
                }
            }
        }

        public loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/RightCloud/UserDetail/DropDownListItem", {}, (data) => {

                var _data: IDropDownListItem = data;
                this.fInit({
                    UserRowOList: [
                        {
                            UserInsertRow:
                            {
                                User_SexData: _data.User_sexType,
                                User_PositionCodeData: _data.User_PositionCodeType,
                                User_WorkStateData: _data.User_WorkType,
                                User_DegreeData:_data.User_DegreeType,
                                User_NationalityData:_data.User_NationalityType,
                                User_PoliticsStatusData:_data.User_PoliticsStatusType,
                                User_CensusData:_data.User_CensusType
                                
                            }
                        }
                    ]
                });
               
                callback();
            })
        }
        public submit() {
            var postData = [];
            var userInsertRow = this.UserRowOList[0].UserInsertRow;
            var userData = userInsertRow.UserData;
            userData.Gender = userInsertRow.UserSexCombo.vmDataValueGet(); //获取性别
            userData.Birthday = userInsertRow.UserBrithdayDate.vmDataValueGet();//获取出生日期
            userData.POSITIONJOBID = userInsertRow.UserJobCombo.vmDataValueGet(); //获取职位
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
                urlFile.Core.AkPost("/RightCloud/UserDetail/newUserDetail",
                    {
                        users: users
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            var _strs: string = _list.join(",");
                            urlFile.Core.AkUrl.Current().openUrl("$winuserdetail$" + _strs + "$", true);
                            urlFile.Core.AkUrl.Current().openUrl("$userinfo$" + _strs + "$", true);
                            utilFile.Core.Util.Noty("用户添加成功");
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
            }
        }

    }
    export class UserNewStates extends basewedPageFile.Web.BaseWebPageStates { }
    export class UserNewProps extends basewedPageFile.Web.BaseWebPageProps<UserNewVm>{ }
    iocFile.Core.Ioc.Current().RegisterType("USERNEW", basewedPageFile.Web.BaseWebPageVm, UserNewVm);
}