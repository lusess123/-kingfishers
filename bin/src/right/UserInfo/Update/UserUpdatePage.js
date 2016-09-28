var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Util", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./UserUpdateRow"], function (require, exports, React, iocFile, utilFile, urlFile, basewedPageFile, userUpdateRowFile) {
    "use strict";
    var UserUpdatePage;
    (function (UserUpdatePage) {
        var UserUpdatePageAction = (function (_super) {
            __extends(UserUpdatePageAction, _super);
            function UserUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return UserUpdatePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserUpdatePage.UserUpdatePageAction = UserUpdatePageAction;
        var UserUpdatePageReact = (function (_super) {
            __extends(UserUpdatePageReact, _super);
            function UserUpdatePageReact() {
                _super.apply(this, arguments);
                this.state = new UserUpdatePageStates();
            }
            UserUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("div", {className: "Hc-modals-list"}, this.props.Vm.UserRowList.map(function (row) { return row.intoDom(); })), React.createElement("div", {className: "text-center"}, React.createElement("span", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_submitBtn(); }}, "提交")));
            };
            UserUpdatePageReact.prototype.fun_submitBtn = function () {
                this.props.Vm.submit();
            };
            return UserUpdatePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UserUpdatePage.UserUpdatePageReact = UserUpdatePageReact;
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
        var UserUpdatePageVm = (function (_super) {
            __extends(UserUpdatePageVm, _super);
            function UserUpdatePageVm(config) {
                _super.call(this);
                this.ReactType = UserUpdatePageReact;
                this.UserRowList = [];
                this.Title = "编辑用户信息";
                //this.UserRowList.push(new userUpdateRowFile.UserUpdateRow.UserUpdateRowVm(config));
                this.fInit(config);
            }
            UserUpdatePageVm.prototype.fInit = function (config) {
                var _this = this;
                if (config) {
                    if (config.UserRowConfigList) {
                        config.UserRowConfigList.forEach(function (r, l) {
                            var _row = new userUpdateRowFile.UserUpdateRow.UserUpdateRowVm(r);
                            _row.Index = l;
                            _this.UserRowList.push(_row);
                        });
                    }
                }
            };
            UserUpdatePageVm.prototype.submit = function () {
                var postData = [];
                var userInsertRow = this.UserRowList[0].UserMasterObj;
                var userData = userInsertRow.UserData;
                userData.Gender = userInsertRow.UserSexCombo.dataValueGet(); //获取性别
                userData.Birthday = userInsertRow.UserBrithdayDate.vmDataValueGet(); //获取出生日期
                //userData.POSITIONJOBID = userInsertRow.UserJobCombo.vmDataValueGet(); //获取职位
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
                    urlFile.Core.AkPost("/RightCloud/UserDetail/updateUseDetail", {
                        users: users
                    }, function (a) {
                        if (a.Content == "ok") {
                            var _list = a.Data;
                            var _strs = _list.join(",");
                            urlFile.Core.AkUrl.Current().openUrl("$winuserdetail$" + _strs + "$", true);
                            urlFile.Core.AkUrl.Current().openUrl("$userinfo$" + _strs + "$", true);
                            utilFile.Core.Util.Noty("用户修改成功");
                        }
                        else {
                            utilFile.Core.Util.Noty("数据修改失败");
                        }
                    });
                }
            };
            UserUpdatePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                var _keys = this.Param1;
                urlFile.Core.AkPost("/RightCloud/UserDetail/getUserDetail", { fids: _keys }, function (data) {
                    var _data = data.Data;
                    if (_data) {
                        _this.UserRowList = [];
                        var _config = { UserRowConfigList: [] };
                        _config.UserRowConfigList = _data.map(function (r, index) {
                            return ({
                                UserUpdatetRow: {
                                    User_UpdateMasterData: {
                                        UserID: r.UserID,
                                        TrueName: r.TrueName,
                                        Gender: r.Gender,
                                        UserName: r.UserName,
                                        Phone: r.Phone,
                                        Email: r.Email,
                                        Birthday: r.Birthday,
                                        Address: r.Address,
                                        //FDepartmentID: string;  //所属部门
                                        POSITIONJOBID: r.POSITIONJOBID,
                                        EntryDate: r.EntryDate,
                                        FNumber: r.FNumber,
                                        FStatusKindId: r.FStatusKindId,
                                        FStatusKindName: r.FStatusKindName,
                                        DegreeKindId: r.DegreeKindId,
                                        DegreeKindName: r.DegreeKindName,
                                        Signatures: r.Signatures,
                                        IDCard: r.IDCard,
                                        Age: r.Age,
                                        NationalityKindId: r.NationalityKindId,
                                        NationlityKindName: r.NationlityKindName,
                                        PoliticsStatusKindId: r.PoliticsStatusKindId,
                                        PoliticsStatusKindName: r.PoliticsStatusKindName,
                                        CensusKindId: r.CensusKindId,
                                        CensusKindName: r.CensusKindName,
                                        GraduateSchool: r.GraduateSchool,
                                        Discipline: r.Discipline,
                                        GraduateDate: r.GraduateDate,
                                        Tel: r.Tel,
                                        QQ: r.QQ,
                                        dropDownList: r.dropDownList
                                    }
                                }
                            });
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
                        _this.fInit(_config);
                        callback();
                    }
                });
            };
            return UserUpdatePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UserUpdatePage.UserUpdatePageVm = UserUpdatePageVm;
        var UserUpdatePageStates = (function (_super) {
            __extends(UserUpdatePageStates, _super);
            function UserUpdatePageStates() {
                _super.apply(this, arguments);
            }
            return UserUpdatePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserUpdatePage.UserUpdatePageStates = UserUpdatePageStates;
        var UserUpdatePageProps = (function (_super) {
            __extends(UserUpdatePageProps, _super);
            function UserUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return UserUpdatePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UserUpdatePage.UserUpdatePageProps = UserUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("USERUPDATE", basewedPageFile.Web.BaseWebPageVm, UserUpdatePageVm);
    })(UserUpdatePage = exports.UserUpdatePage || (exports.UserUpdatePage = {}));
});
