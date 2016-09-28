var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Util", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./UserRow"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, userRowFile) {
    "use strict";
    var UserNew;
    (function (UserNew) {
        var UserNewAction = (function (_super) {
            __extends(UserNewAction, _super);
            function UserNewAction() {
                _super.apply(this, arguments);
            }
            return UserNewAction;
        }(basewedPageFile.Web.BaseWebPageAction));
        UserNew.UserNewAction = UserNewAction;
        var UserNewReact = (function (_super) {
            __extends(UserNewReact, _super);
            function UserNewReact() {
                _super.apply(this, arguments);
                this.state = new UserNewStates();
            }
            UserNewReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            UserNewReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "Hm-modals"}, React.createElement("div", null, this.props.Vm.UserRowOList.map(function (l) { return l.intoDom(); })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交"))));
            };
            UserNewReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UserNewReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UserNew.UserNewReact = UserNewReact;
        var UserNewVm = (function (_super) {
            __extends(UserNewVm, _super);
            function UserNewVm(config) {
                _super.call(this);
                this.ReactType = UserNewReact;
                this.UserRowOList = [];
                this.Title = "新增用户";
                this.Title = "新增用户";
                this.fInit(config);
            }
            UserNewVm.prototype.fInit = function (config) {
                var _this = this;
                if (config) {
                    if (config.UserRowOList) {
                        config.UserRowOList.forEach(function (r) {
                            _this.UserRowOList.push(new userRowFile.UserRow.UserRowVm(r));
                        });
                    }
                }
            };
            UserNewVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/UserDetail/DropDownListItem", {}, function (data) {
                    var _data = data;
                    _this.fInit({
                        UserRowOList: [
                            {
                                UserInsertRow: {
                                    User_SexData: _data.User_sexType,
                                    User_PositionCodeData: _data.User_PositionCodeType,
                                    User_WorkStateData: _data.User_WorkType,
                                    User_DegreeData: _data.User_DegreeType,
                                    User_NationalityData: _data.User_NationalityType,
                                    User_PoliticsStatusData: _data.User_PoliticsStatusType,
                                    User_CensusData: _data.User_CensusType
                                }
                            }
                        ]
                    });
                    callback();
                });
            };
            UserNewVm.prototype.submit = function () {
                var postData = [];
                var userInsertRow = this.UserRowOList[0].UserInsertRow;
                var userData = userInsertRow.UserData;
                userData.Gender = userInsertRow.UserSexCombo.vmDataValueGet(); //获取性别
                userData.Birthday = userInsertRow.UserBrithdayDate.vmDataValueGet(); //获取出生日期
                userData.POSITIONJOBID = userInsertRow.UserJobCombo.vmDataValueGet(); //获取职位
                userData.EntryDate = userInsertRow.UserEntryDate.vmDataValueGet(); //入职日期
                userData.FStatusKindId = userInsertRow.UserJobStateCombo.vmDataValueGet(); //在职状态
                userData.DegreeKindId = userInsertRow.UserDegreeCombo.vmDataValueGet(); // 学历
                userData.NationalityKindId = userInsertRow.UserNationalityCombo.vmDataValueGet(); //民族
                userData.PoliticsStatusKindId = userInsertRow.UserPoliticsStatusCombo.vmDataValueGet(); //政治面貌
                userData.CensusKindId = userInsertRow.UserCensusCombo.vmDataValueGet(); //户口类型
                userData.GraduateDate = userInsertRow.UserGraduateDate.vmDataValueGet(); //毕业时间
                postData.push(userData);
                var users = JSON.stringify(postData);
                var _isSuccess = userInsertRow.legal();
                if (_isSuccess) {
                    urlFile.Core.AkPost("/RightCloud/UserDetail/newUserDetail", {
                        users: users
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            var _strs = _list.join(",");
                            urlFile.Core.AkUrl.Current().openUrl("$winuserdetail$" + _strs + "$", true);
                            urlFile.Core.AkUrl.Current().openUrl("$userinfo$" + _strs + "$", true);
                            utilFile.Core.Util.Noty("用户添加成功");
                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }
                    });
                }
            };
            return UserNewVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UserNew.UserNewVm = UserNewVm;
        var UserNewStates = (function (_super) {
            __extends(UserNewStates, _super);
            function UserNewStates() {
                _super.apply(this, arguments);
            }
            return UserNewStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserNew.UserNewStates = UserNewStates;
        var UserNewProps = (function (_super) {
            __extends(UserNewProps, _super);
            function UserNewProps() {
                _super.apply(this, arguments);
            }
            return UserNewProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UserNew.UserNewProps = UserNewProps;
        iocFile.Core.Ioc.Current().RegisterType("USERNEW", basewedPageFile.Web.BaseWebPageVm, UserNewVm);
    })(UserNew = exports.UserNew || (exports.UserNew = {}));
});
