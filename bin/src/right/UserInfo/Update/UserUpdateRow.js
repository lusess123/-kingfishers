var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/02Mulite/Combo", "./../../../02col/01single/Date", "./UserUpdateMaster"], function (require, exports, domFile, React, comboFile, dateFile, userInsertRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var UserUpdateRow;
    (function (UserUpdateRow) {
        var UserUpdateRowAction = (function (_super) {
            __extends(UserUpdateRowAction, _super);
            function UserUpdateRowAction() {
                _super.apply(this, arguments);
            }
            return UserUpdateRowAction;
        }(domCore.DomAction));
        UserUpdateRow.UserUpdateRowAction = UserUpdateRowAction;
        var UserUpdateRowReact = (function (_super) {
            __extends(UserUpdateRowReact, _super);
            function UserUpdateRowReact() {
                _super.apply(this, arguments);
                this.state = new UserUpdateRowStates();
            }
            UserUpdateRowReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            UserUpdateRowReact.prototype.fun_masterTitleClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            UserUpdateRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "Hu-row-title Hu-pointer", onClick: function () { _this.fun_masterTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "right" : "down")})), React.createElement("div", {className: this.props.Vm.IsMasterHide ? "hide" : ""}, this.props.Vm.UserMasterObj.intoDom()));
            };
            UserUpdateRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UserUpdateRowReact;
        }(domCore.DomReact));
        UserUpdateRow.UserUpdateRowReact = UserUpdateRowReact;
        var UserUpdateRowVm = (function (_super) {
            __extends(UserUpdateRowVm, _super);
            function UserUpdateRowVm(config) {
                _super.call(this);
                this.ReactType = UserUpdateRowReact;
                if (config) {
                    if (config.UserUpdatetRow) {
                        this.UserMasterObj = new userInsertRowFile.UserUpdateMaster.UserUpdateMasterVm(config.UserUpdatetRow);
                    }
                }
                if (config) {
                    if (config.UserUpdatetRow) {
                        var r = config.UserUpdatetRow.User_UpdateMasterData.dropDownList;
                        this.UserSexCombo = new comboFile.ui.ComboVm({
                            ItemList: r.User_sexType.map(function (n) {
                                return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                            })
                        });
                        this.UserJobStateCombo = new comboFile.ui.ComboVm({
                            ItemList: r.User_WorkType.map(function (n) {
                                return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                            })
                        });
                        this.UserDegreeCombo = new comboFile.ui.ComboVm({
                            ItemList: r.User_DegreeType.map(function (n) {
                                return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                            })
                        });
                        this.UserNationalityCombo = new comboFile.ui.ComboVm({
                            ItemList: r.User_NationalityType.map(function (n) {
                                return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                            })
                        });
                        this.UserPoliticsStatusCombo = new comboFile.ui.ComboVm({
                            ItemList: r.User_PoliticsStatusType.map(function (n) {
                                return { Value: n.CODE_VALUE, Text: n.CODE_TEXT };
                            })
                        });
                        this.UserCensusCombo = new comboFile.ui.ComboVm({
                            ItemList: r.User_CensusType.map(function (n) {
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
            return UserUpdateRowVm;
        }(domCore.DomVm));
        UserUpdateRow.UserUpdateRowVm = UserUpdateRowVm;
        var UserUpdateRowStates = (function (_super) {
            __extends(UserUpdateRowStates, _super);
            function UserUpdateRowStates() {
                _super.apply(this, arguments);
            }
            return UserUpdateRowStates;
        }(domCore.DomStates));
        UserUpdateRow.UserUpdateRowStates = UserUpdateRowStates;
        var UserUpdateRowProps = (function (_super) {
            __extends(UserUpdateRowProps, _super);
            function UserUpdateRowProps() {
                _super.apply(this, arguments);
            }
            return UserUpdateRowProps;
        }(domCore.DomProps));
        UserUpdateRow.UserUpdateRowProps = UserUpdateRowProps;
    })(UserUpdateRow = exports.UserUpdateRow || (exports.UserUpdateRow = {}));
});
