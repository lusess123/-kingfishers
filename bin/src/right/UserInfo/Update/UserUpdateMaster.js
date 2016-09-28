var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/02Mulite/Combo", "./../../../02col/01single/Date", "./../../../02col/01single/Text"], function (require, exports, domFile, React, comboFile, dateFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var UserUpdateMaster;
    (function (UserUpdateMaster) {
        var UserUpdateMasterAction = (function (_super) {
            __extends(UserUpdateMasterAction, _super);
            function UserUpdateMasterAction() {
                _super.apply(this, arguments);
            }
            return UserUpdateMasterAction;
        }(domCore.DomAction));
        UserUpdateMaster.UserUpdateMasterAction = UserUpdateMasterAction;
        var UserUpdateMasterReact = (function (_super) {
            __extends(UserUpdateMasterReact, _super);
            function UserUpdateMasterReact() {
                _super.apply(this, arguments);
                this.state = new UserUpdateMasterStates();
            }
            UserUpdateMasterReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.UserData[fName] = _val;
                this.forceUpdate();
            };
            //用户姓名
            UserUpdateMasterReact.prototype.inputUserName = function () {
                var _this = this;
                //
                var _vm = this.getInputVm(this.props.Vm.UserData.TrueName, "notNull");
                this.props.Vm.UserNameTextVm = _vm;
                _vm.onChangeHandle(function (str) {
                    _this.props.Vm.UserData.TrueName = str;
                    return true;
                });
                return _vm.intoDom();
            };
            //登陆名
            UserUpdateMasterReact.prototype.inputUserlgName = function () {
                var _this = this;
                var _vm = this.getInputVm(this.props.Vm.UserData.UserName, "notNull");
                this.props.Vm.UserLgNameTextVm = _vm;
                _vm.onChangeHandle(function (str) {
                    _this.props.Vm.UserData.UserName = str;
                    return true;
                });
                return _vm.intoDom();
            };
            //出生日期
            UserUpdateMasterReact.prototype.inputUserBrithdayDate = function () {
                var _this = this;
                var _vm = this.props.Vm.UserBrithdayDate;
                if (!_vm) {
                    this.props.Vm.UserBrithdayDate = _vm = this.getDateVm(this.props.Vm.UserData.Birthday, "notNull");
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.UserData.Birthday = str;
                        return true;
                    });
                }
                return _vm.intoDom();
            };
            //入职日期
            UserUpdateMasterReact.prototype.inputUserEntryDate = function () {
                var _this = this;
                var _vm = this.props.Vm.UserEntryDate;
                if (!_vm) {
                    this.props.Vm.UserEntryDate = _vm = this.getDateVm(this.props.Vm.UserData.EntryDate, "notNull");
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.UserData.EntryDate = str;
                        return true;
                    });
                }
                return _vm.intoDom();
            };
            //毕业日期
            UserUpdateMasterReact.prototype.inputUserGraduateDate = function () {
                var _this = this;
                var _vm = this.props.Vm.UserGraduateDate;
                if (!_vm) {
                    this.props.Vm.UserGraduateDate = _vm = this.getDateVm(this.props.Vm.UserData.GraduateDate, "notNull");
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.UserData.GraduateDate = str;
                        return true;
                    });
                }
                return _vm.intoDom();
            };
            //工号
            UserUpdateMasterReact.prototype.inputUserJobNumTextVm = function () {
                var _this = this;
                var _vm = this.props.Vm.UserJobNumTextVm;
                if (!_vm) {
                    this.props.Vm.UserJobNumTextVm = _vm = this.getInputVm(this.props.Vm.UserData.FNumber, "notNull");
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.UserData.FNumber = str;
                        return true;
                    });
                }
                return _vm.intoDom();
            };
            //获取Input 的值
            UserUpdateMasterReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.vmdataValue(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            //获取日期的值
            UserUpdateMasterReact.prototype.getDateVm = function (val, legalKind, fun) {
                var _bean = new dateFile.ui.DateVm();
                _bean.vmdataValue(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            ///*{<div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
            //                        <div className="pull-left Hu-label">
            //                            <label for="pull-right-label" className="pull-right">职位：</label>
            //                            </div>
            //                        <div className="pull-left Hu-input">
            //                            <label for="pull-right-label" className="pull-left">{this.props.Vm.UserJobCombo.intoDom() }</label>
            //                            </div>
            //                        </div>}*/
            UserUpdateMasterReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "clearfix"}, React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "用户名：")), React.createElement("div", {className: "Hu-input"}, this.inputUserName())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "性别：")), React.createElement("div", {className: "Hu-input"}, this.props.Vm.UserSexCombo.intoDom())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "登陆名：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.UserData.UserName))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "手机：")), React.createElement("div", {className: " Hu-input"}, React.createElement("input", {type: "text", className: "Hg-width", value: this.props.Vm.UserData.Phone, onChange: function (e) { _this.fun_OnChange(e, "Phone"); }}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "Email："), " "), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {type: "text", className: "Hg-width", value: this.props.Vm.UserData.Email, onChange: function (e) { _this.fun_OnChange(e, "Email"); }}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "出生日期：")), React.createElement("div", {className: "Hu-input"}, this.inputUserBrithdayDate())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "住址：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {type: "text", className: "Hg-width", value: this.props.Vm.UserData.Address, onChange: function (e) { _this.fun_OnChange(e, "Address"); }}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "入职日期：")), React.createElement("div", {className: "Hu-input"}, this.inputUserEntryDate())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "工号：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.UserData.FNumber))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, " ", React.createElement("label", null, "在职状态："), " "), React.createElement("div", {className: " Hu-input"}, this.props.Vm.UserJobStateCombo.intoDom())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "学历：")), React.createElement("div", {className: "Hu-input"}, this.props.Vm.UserDegreeCombo.intoDom())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "个性签名："), " "), React.createElement("div", {className: " Hu-input"}, React.createElement("input", {type: "text", className: "Hg-width", value: this.props.Vm.UserData.Signatures, onChange: function (e) { _this.fun_OnChange(e, "Signatures"); }}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "身份证号：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {type: "text", className: "Hg-width", value: this.props.Vm.UserData.IDCard, onChange: function (e) { _this.fun_OnChange(e, "IDCard"); }}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "年龄：")), React.createElement("div", {className: " Hu-input"}, React.createElement("input", {type: "text", className: "Hg-width", value: this.props.Vm.UserData.Age, onChange: function (e) { _this.fun_OnChange(e, "Age"); }}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", null, "民族：")), React.createElement("div", {className: " Hu-input"}, this.props.Vm.UserNationalityCombo.intoDom())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "政治面貌：")), React.createElement("div", {className: "Hu-input"}, this.props.Vm.UserPoliticsStatusCombo.intoDom())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "户口类型：")), React.createElement("div", {className: "Hu-input"}, " ", this.props.Vm.UserCensusCombo.intoDom())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, " ", React.createElement("label", null, "毕业学校：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {type: "text", className: "Hg-width", value: this.props.Vm.UserData.GraduateSchool, onChange: function (e) { _this.fun_OnChange(e, "GraduateSchool"); }}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "专业：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {type: "text", className: "Hg-width", value: this.props.Vm.UserData.Discipline, onChange: function (e) { _this.fun_OnChange(e, "Discipline"); }}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "毕业日期："), " "), React.createElement("div", {className: "Hu-input"}, this.inputUserGraduateDate())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, " ", React.createElement("label", null, "联系电话：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {type: "text", className: "Hg-width", value: this.props.Vm.UserData.Tel, onChange: function (e) { _this.fun_OnChange(e, "Tel"); }}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "QQ：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {type: "text", className: "Hg-width", value: this.props.Vm.UserData.QQ, onChange: function (e) { _this.fun_OnChange(e, "QQ"); }})))))));
            };
            UserUpdateMasterReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UserUpdateMasterReact;
        }(domCore.DomReact));
        UserUpdateMaster.UserUpdateMasterReact = UserUpdateMasterReact;
        var UserUpdateMasterVm = (function (_super) {
            __extends(UserUpdateMasterVm, _super);
            //public IsMasterHide: boolean;
            // public IsDetailHide: boolean;
            function UserUpdateMasterVm(config) {
                _super.call(this);
                this.ReactType = UserUpdateMasterReact;
                //public UserTelText:string;  //联系电话
                //public UserQQText:string; //QQ
                this.dataList = [];
                if (config) {
                    if (config.User_UpdateMasterData) {
                        var r = config.User_UpdateMasterData.dropDownList;
                        var n = config.User_UpdateMasterData;
                        //性别
                        this.UserSexCombo = new comboFile.ui.ComboVm({
                            ItemList: r.User_sexType.map(function (n) {
                                return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                            })
                        });
                        this.UserSexCombo.ItemList.unshift({ Value: "", Text: "请选择" });
                        this.UserSexCombo.dataValueSet(config.User_UpdateMasterData.Gender);
                        //工作状态
                        this.UserJobStateCombo = new comboFile.ui.ComboVm({
                            ItemList: r.User_WorkType.map(function (n) {
                                return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                            })
                        });
                        this.UserJobStateCombo.ItemList.unshift({ Value: "", Text: "请选择" });
                        this.UserJobStateCombo.dataValueSet(config.User_UpdateMasterData.FStatusKindId);
                        //学历
                        this.UserDegreeCombo = new comboFile.ui.ComboVm({
                            ItemList: r.User_DegreeType.map(function (n) {
                                return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                            })
                        });
                        this.UserDegreeCombo.ItemList.unshift({ Value: "", Text: "请选择" });
                        this.UserDegreeCombo.dataValueSet(config.User_UpdateMasterData.DegreeKindId);
                        //民族
                        this.UserNationalityCombo = new comboFile.ui.ComboVm({
                            ItemList: r.User_NationalityType.map(function (n) {
                                return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                            })
                        });
                        this.UserNationalityCombo.ItemList.unshift({ Value: "", Text: "请选择" });
                        this.UserNationalityCombo.dataValueSet(config.User_UpdateMasterData.NationalityKindId);
                        //政党
                        this.UserPoliticsStatusCombo = new comboFile.ui.ComboVm({
                            ItemList: r.User_PoliticsStatusType.map(function (n) {
                                return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                            })
                        });
                        this.UserPoliticsStatusCombo.ItemList.unshift({ Value: "", Text: "请选择" });
                        this.UserPoliticsStatusCombo.dataValueSet(config.User_UpdateMasterData.PoliticsStatusKindId);
                        //户口类型
                        this.UserCensusCombo = new comboFile.ui.ComboVm({
                            ItemList: r.User_CensusType.map(function (n) {
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
            UserUpdateMasterVm.prototype.init = function () {
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
            };
            UserUpdateMasterVm.prototype.legal = function () {
                var userName = this.UserNameTextVm.legal();
                //var lgName = this.UserLgNameTextVm.legal();
                //var jobNum = this.UserJobNumTextVm.legal();
                var _res = userName;
                return _res;
            };
            return UserUpdateMasterVm;
        }(domCore.DomVm));
        UserUpdateMaster.UserUpdateMasterVm = UserUpdateMasterVm;
        var UserUpdateMasterStates = (function (_super) {
            __extends(UserUpdateMasterStates, _super);
            function UserUpdateMasterStates() {
                _super.apply(this, arguments);
            }
            return UserUpdateMasterStates;
        }(domCore.DomStates));
        UserUpdateMaster.UserUpdateMasterStates = UserUpdateMasterStates;
        var UserUpdateMasterProps = (function (_super) {
            __extends(UserUpdateMasterProps, _super);
            function UserUpdateMasterProps() {
                _super.apply(this, arguments);
            }
            return UserUpdateMasterProps;
        }(domCore.DomProps));
        UserUpdateMaster.UserUpdateMasterProps = UserUpdateMasterProps;
    })(UserUpdateMaster = exports.UserUpdateMaster || (exports.UserUpdateMaster = {}));
});
