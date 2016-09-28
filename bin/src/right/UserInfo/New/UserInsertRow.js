var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../01core/Url", "./../../../02col/02Mulite/Combo", "./../../../02col/01single/Date", "./../../../02col/01single/Text"], function (require, exports, domFile, React, urlFile, comboFile, dateFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var UserInsertRow;
    (function (UserInsertRow) {
        var UserInsertRowAction = (function (_super) {
            __extends(UserInsertRowAction, _super);
            function UserInsertRowAction() {
                _super.apply(this, arguments);
            }
            return UserInsertRowAction;
        }(domCore.DomAction));
        UserInsertRow.UserInsertRowAction = UserInsertRowAction;
        var UserInsertRowReact = (function (_super) {
            __extends(UserInsertRowReact, _super);
            function UserInsertRowReact() {
                _super.apply(this, arguments);
                this.state = new UserInsertRowStates();
            }
            UserInsertRowReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.UserData[fName] = _val;
                this.forceUpdate();
            };
            //用户姓名
            UserInsertRowReact.prototype.inputUserName = function () {
                var _this = this;
                if (!this.props.Vm.UserNameTextVm) {
                    this.props.Vm.UserNameTextVm = this.getInputVm(this.props.Vm.UserData.TrueName, "notNull");
                    // this.props.Vm.UserNameTextVm = _vm;
                    this.props.Vm.UserNameTextVm.onChangeHandle(function (str) {
                        _this.props.Vm.UserData.TrueName = str;
                        return true;
                    });
                    this.props.Vm.UserNameTextVm.LegalObj.CustomLegalFun = function (col) {
                        return _this.props.Vm.legalLength(_this.props.Vm.UserData.TrueName, 100, _this.props.Vm.UserNameTextVm);
                    };
                }
                return this.props.Vm.UserNameTextVm.intoDom();
            };
            //地址
            UserInsertRowReact.prototype.inputUserAddress = function () {
                var _this = this;
                if (!this.props.Vm.UserAddressTextVm) {
                    this.props.Vm.UserAddressTextVm = this.getInputVm(this.props.Vm.UserData.Phone, "custom");
                    this.props.Vm.UserAddressTextVm.onChangeHandle(function (str) {
                        _this.props.Vm.UserData.Phone = str;
                        return true;
                    });
                    this.props.Vm.UserAddressTextVm.LegalObj.CustomLegalFun = function (col) {
                        return _this.props.Vm.legalLength(_this.props.Vm.UserData.Phone, 50, _this.props.Vm.UserAddressTextVm);
                    };
                }
                return this.props.Vm.UserAddressTextVm.intoDom();
            };
            //手机
            UserInsertRowReact.prototype.inputPhoneNum = function () {
                var _this = this;
                if (!this.props.Vm.UserPhoneTextVM) {
                    var _vm = this.getInputVm(this.props.Vm.UserData.Phone, "mobile");
                    this.props.Vm.UserPhoneTextVM = _vm;
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.UserData.UserName = str;
                        return true;
                    });
                    _vm.LegalObj.CustomLegalFun = function (col) {
                        return _this.props.Vm.legalLength(_this.props.Vm.UserData.Phone, 50, _this.props.Vm.UserNameTextVm);
                    };
                }
                return this.props.Vm.UserPhoneTextVM.intoDom();
            };
            //登陆名
            UserInsertRowReact.prototype.inputUserlgName = function () {
                var _this = this;
                if (!this.props.Vm.UserLgNameTextVm) {
                    var _vm = this.getInputVm(this.props.Vm.UserData.UserName, "custom");
                    this.props.Vm.UserLgNameTextVm = _vm;
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.UserData.UserName = str;
                        return true;
                    });
                    _vm.LegalObj.CustomLegalFun = function (col) {
                        return _this.props.Vm.legalUnique("UserName", _vm);
                    };
                }
                return this.props.Vm.UserLgNameTextVm.intoDom();
            };
            //工号
            UserInsertRowReact.prototype.inputUserJobNumTextVm = function () {
                var _this = this;
                var _vm = this.props.Vm.UserJobNumTextVm;
                if (!_vm) {
                    this.props.Vm.UserJobNumTextVm = _vm = this.getInputVm(this.props.Vm.UserData.FNumber, "custom");
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.UserData.FNumber = str;
                        return true;
                    });
                    _vm.LegalObj.CustomLegalFun = function (col) {
                        return _this.props.Vm.legalUnique("UserNum", _vm);
                    };
                }
                return _vm.intoDom();
            };
            //出生日期
            UserInsertRowReact.prototype.inputUserBrithdayDate = function () {
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
            UserInsertRowReact.prototype.inputUserEntryDate = function () {
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
            UserInsertRowReact.prototype.inputUserGraduateDate = function () {
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
            //获取Input 的值
            UserInsertRowReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.vmdataValue(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            //获取日期的值
            UserInsertRowReact.prototype.getDateVm = function (val, legalKind, fun) {
                var _bean = new dateFile.ui.DateVm();
                _bean.vmdataValue(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            UserInsertRowReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "1"}, React.createElement("div", {className: "tabs-content"}, React.createElement("div", {className: "clearfix"}, React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label", className: "required"}, "用户名：")), React.createElement("div", {className: " Hu-input"}, this.inputUserName())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "性别：")), React.createElement("div", {className: " Hu-input"}, this.props.Vm.UserSexCombo.intoDom())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label", className: "required"}, "登陆名：")), React.createElement("div", {className: " Hu-input"}, this.inputUserlgName())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "手机：")), React.createElement("div", {className: " Hu-input"}, this.inputPhoneNum())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, " ", React.createElement("label", {for: " Hu-input"}, "Email：")), React.createElement("div", {className: " Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.UserData.Email, onChange: function (e) { _this.fun_OnChange(e, "Email"); }}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "出生日期：")), React.createElement("div", {className: " Hu-input"}, this.inputUserBrithdayDate())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "住址：")), React.createElement("div", {className: " Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.UserData.Address, onChange: function (e) { _this.fun_OnChange(e, "Address"); }}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label", className: ""}, "入职日期：")), React.createElement("div", {className: " Hu-input"}, this.inputUserEntryDate())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label", className: "required"}, "工号：")), React.createElement("div", {className: " Hu-input"}, this.inputUserJobNumTextVm())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "在职状态：")), React.createElement("div", {className: " Hu-input"}, this.props.Vm.UserJobStateCombo.intoDom())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "学历：")), React.createElement("div", {className: " Hu-input"}, this.props.Vm.UserDegreeCombo.intoDom())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "个性签名：")), React.createElement("div", {className: " Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.UserData.Signatures, onChange: function (e) { _this.fun_OnChange(e, "Signatures"); }}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "身份证号：")), React.createElement("div", {className: " Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.UserData.IDCard, onChange: function (e) { _this.fun_OnChange(e, "IDCard"); }}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "年龄：")), React.createElement("div", {className: " Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.UserData.Age, onChange: function (e) { _this.fun_OnChange(e, "Age"); }}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12s Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "民族：")), React.createElement("div", {className: " Hu-input"}, this.props.Vm.UserNationalityCombo.intoDom())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "政治面貌："), " "), React.createElement("div", {className: " Hu-input"}, this.props.Vm.UserPoliticsStatusCombo.intoDom())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "户口类型："), " "), React.createElement("div", {className: " Hu-input"}, this.props.Vm.UserCensusCombo.intoDom())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "毕业学校：")), React.createElement("div", {className: " Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.UserData.GraduateSchool, onChange: function (e) { _this.fun_OnChange(e, "GraduateSchool"); }}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "专业：")), React.createElement("div", {className: " Hu-input"}, " ", React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.UserData.Discipline, onChange: function (e) { _this.fun_OnChange(e, "Discipline"); }}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "毕业日期：")), React.createElement("div", {className: " Hu-input"}, this.inputUserGraduateDate())), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "联系电话：")), React.createElement("div", {className: " Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.UserData.Tel, onChange: function (e) { _this.fun_OnChange(e, "Tel"); }}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "QQ：")), React.createElement("div", {className: " Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.UserData.QQ, onChange: function (e) { _this.fun_OnChange(e, "QQ"); }})))))));
            };
            UserInsertRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UserInsertRowReact;
        }(domCore.DomReact));
        UserInsertRow.UserInsertRowReact = UserInsertRowReact;
        var UserInsertRowVm = (function (_super) {
            __extends(UserInsertRowVm, _super);
            //public UserTelText: string;  //联系电话
            //public UserQQText: string; //QQ
            function UserInsertRowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = UserInsertRowReact;
                //性别选择框
                this.UserSexCombo = new comboFile.ui.ComboVm();
                var itemList = [];
                if (config) {
                    if (config.User_SexData) {
                        this.UserSexCombo.ItemList = [];
                        this.UserSexCombo.ItemList.push({ Value: "", Text: "请选择" });
                        config.User_SexData.forEach(function (r) {
                            _this.UserSexCombo.ItemList.push({ Value: r.CODE_VALUE, Text: r.CODE_TEXT });
                        });
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
                        config.User_PositionCodeData.forEach(function (r) {
                            _this.UserJobCombo.ItemList.push({ Value: r.CODE_VALUE, Text: r.CODE_TEXT });
                        });
                    }
                }
                //在职状态
                this.UserJobStateCombo = new comboFile.ui.ComboVm();
                if (config) {
                    if (config.User_WorkStateData) {
                        this.UserJobStateCombo.ItemList = [];
                        this.UserJobStateCombo.ItemList.push({ Value: "", Text: "请选择" });
                        config.User_WorkStateData.forEach(function (r) {
                            _this.UserJobStateCombo.ItemList.push({ Value: r.CODE_VALUE, Text: r.CODE_TEXT });
                        });
                    }
                }
                //学历
                this.UserDegreeCombo = new comboFile.ui.ComboVm();
                if (config) {
                    if (config.User_DegreeData) {
                        this.UserDegreeCombo.ItemList = [];
                        this.UserDegreeCombo.ItemList.push({ Value: "", Text: "请选择" });
                        config.User_DegreeData.forEach(function (r) {
                            _this.UserDegreeCombo.ItemList.push({ Value: r.CODE_VALUE, Text: r.CODE_TEXT });
                        });
                    }
                }
                //民族
                this.UserNationalityCombo = new comboFile.ui.ComboVm();
                if (config) {
                    if (config.User_NationalityData) {
                        this.UserNationalityCombo.ItemList = [];
                        this.UserNationalityCombo.ItemList.push({ Value: "", Text: "请选择" });
                        config.User_NationalityData.forEach(function (r) {
                            _this.UserNationalityCombo.ItemList.push({ Value: r.CODE_VALUE, Text: r.CODE_TEXT });
                        });
                    }
                }
                //政治面貌
                this.UserPoliticsStatusCombo = new comboFile.ui.ComboVm();
                if (config) {
                    if (config.User_PoliticsStatusData) {
                        this.UserPoliticsStatusCombo.ItemList = [];
                        this.UserPoliticsStatusCombo.ItemList.push({ Value: "", Text: "请选择" });
                        config.User_PoliticsStatusData.forEach(function (r) {
                            _this.UserPoliticsStatusCombo.ItemList.push({ Value: r.CODE_VALUE, Text: r.CODE_TEXT });
                        });
                    }
                }
                //户口类型
                this.UserCensusCombo = new comboFile.ui.ComboVm();
                if (config) {
                    if (config.User_CensusData) {
                        this.UserCensusCombo.ItemList = [];
                        this.UserCensusCombo.ItemList.push({ Value: "", Text: "请选择" });
                        config.User_CensusData.forEach(function (r) {
                            _this.UserCensusCombo.ItemList.push({ Value: r.CODE_VALUE, Text: r.CODE_TEXT });
                        });
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
            UserInsertRowVm.prototype.getUserName = function () {
                return this.UserLgNameTextVm.TempDataValue;
            };
            //获取用户工号
            UserInsertRowVm.prototype.getUserNum = function () {
                return this.UserJobNumTextVm.TempDataValue;
            };
            //验证长度
            UserInsertRowVm.prototype.legalLength = function (vals, length, textVm) {
                if (vals.length > length) {
                    textVm.LegalObj.LegalResult = false;
                    textVm.LegalObj.ErrMsg = "长度不能超过" + length.toString();
                    return "长度不能超过" + length.toString();
                }
                else {
                    textVm.LegalObj.LegalResult = true;
                    textVm.showLegal();
                    return "";
                }
            };
            //验证工号和登陆名唯一性
            UserInsertRowVm.prototype.legalUnique = function (vals, textVm) {
                var _userName = this.getUserName();
                var _userNum = this.getUserNum();
                urlFile.Core.AkPost("/RightCloud/UserDetail/boolExist", { userName: _userName, userNum: _userNum }, function (a) {
                    if (a.Content == "ok") {
                        //var _data = a.Data;
                        textVm.LegalObj.LegalResult = true;
                        textVm.showLegal();
                    }
                    else {
                        textVm.LegalObj.LegalResult = false;
                        textVm.LegalObj.ErrMsg = a.ActionType;
                        textVm.showLegal();
                    }
                });
                return "正在验证当中";
            };
            UserInsertRowVm.prototype.legal = function () {
                var userName = this.UserNameTextVm.legal();
                //var lgName = this.UserLgNameTextVm.legal();
                //var jobNum= this.UserJobNumTextVm.legal();
                var _res = userName;
                return _res;
            };
            return UserInsertRowVm;
        }(domCore.DomVm));
        UserInsertRow.UserInsertRowVm = UserInsertRowVm;
        var UserInsertRowStates = (function (_super) {
            __extends(UserInsertRowStates, _super);
            function UserInsertRowStates() {
                _super.apply(this, arguments);
            }
            return UserInsertRowStates;
        }(domCore.DomStates));
        UserInsertRow.UserInsertRowStates = UserInsertRowStates;
        var UserInsertRowProps = (function (_super) {
            __extends(UserInsertRowProps, _super);
            function UserInsertRowProps() {
                _super.apply(this, arguments);
            }
            return UserInsertRowProps;
        }(domCore.DomProps));
        UserInsertRow.UserInsertRowProps = UserInsertRowProps;
    })(UserInsertRow = exports.UserInsertRow || (exports.UserInsertRow = {}));
});
