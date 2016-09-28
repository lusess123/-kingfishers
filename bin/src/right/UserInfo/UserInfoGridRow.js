var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./../../01core/Url", "./../../02col/02Mulite/SingleCheckBox", "./RowButtonExpand"], function (require, exports, domFile, React, urlFile, singleCheckFile, expandFile) {
    "use strict";
    var domCore = domFile.Core;
    var UserInfoGridRow;
    (function (UserInfoGridRow) {
        var UserInfoGridRowAction = (function (_super) {
            __extends(UserInfoGridRowAction, _super);
            function UserInfoGridRowAction() {
                _super.apply(this, arguments);
            }
            return UserInfoGridRowAction;
        }(domCore.DomAction));
        UserInfoGridRow.UserInfoGridRowAction = UserInfoGridRowAction;
        var UserInfoGridRowReact = (function (_super) {
            __extends(UserInfoGridRowReact, _super);
            function UserInfoGridRowReact() {
                _super.apply(this, arguments);
                this.state = new UserInfoGridRowStates();
            }
            UserInfoGridRowReact.prototype.fun_linkDetai = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winuserdetail$" + this.props.Vm.RowData.UserID + "$");
            };
            UserInfoGridRowReact.prototype.pSender = function () {
                var gridRow = this.createRow();
                return gridRow;
            };
            ///*{<td>{this.props.Vm.RowData.POSITIONJOBID}</td>}*/
            UserInfoGridRowReact.prototype.createRow = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", null, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber), this.createRowButtonExpand())), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}), this.props.Vm.RowData.UserID)), React.createElement("td", null, React.createElement("a", {onClick: function () { _this.fun_linkDetai(); return false; }}, this.props.Vm.RowData.TrueName)), React.createElement("td", null, this.props.Vm.fun_SexJudge()), React.createElement("td", null, this.props.Vm.RowData.FNumber), React.createElement("td", null, this.props.Vm.RowData.FStatusKindName), React.createElement("td", null, this.props.Vm.RowData.UserName), React.createElement("td", null, this.props.Vm.RowData.UPDATE_TIME));
            };
            UserInfoGridRowReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            UserInfoGridRowReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            return UserInfoGridRowReact;
        }(domCore.DomReact));
        UserInfoGridRow.UserInfoGridRowReact = UserInfoGridRowReact;
        var UserInfoGridRowVm = (function (_super) {
            __extends(UserInfoGridRowVm, _super);
            function UserInfoGridRowVm() {
                _super.apply(this, arguments);
                this.ReactType = UserInfoGridRowReact;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.RowButtonExpand = new expandFile.RowButtonExpand.RowButtonExpandVm();
                this.RowData = { UserID: "", TrueName: "开发用户", Gender: "男", POSITIONJOBID: "医师", FNumber: "038852", FStatusKindId: "在职", FStatusKindName: "", UPDATE_TIME: "", UserName: "" };
            }
            // 判断性别
            UserInfoGridRowVm.prototype.fun_SexJudge = function () {
                var sex = this.RowData.Gender;
                if (sex == "1") {
                    //console.log("女");
                    return "女";
                }
                else if (sex == "0") {
                    //console.log("男");
                    return "男";
                }
                else {
                    //console.log("");
                    return "";
                }
            };
            return UserInfoGridRowVm;
        }(domCore.DomVm));
        UserInfoGridRow.UserInfoGridRowVm = UserInfoGridRowVm;
        var UserInfoGridRowStates = (function (_super) {
            __extends(UserInfoGridRowStates, _super);
            function UserInfoGridRowStates() {
                _super.apply(this, arguments);
            }
            return UserInfoGridRowStates;
        }(domCore.DomStates));
        UserInfoGridRow.UserInfoGridRowStates = UserInfoGridRowStates;
        var UserInfoGridRowProps = (function (_super) {
            __extends(UserInfoGridRowProps, _super);
            function UserInfoGridRowProps() {
                _super.apply(this, arguments);
            }
            return UserInfoGridRowProps;
        }(domCore.DomProps));
        UserInfoGridRow.UserInfoGridRowProps = UserInfoGridRowProps;
    })(UserInfoGridRow = exports.UserInfoGridRow || (exports.UserInfoGridRow = {}));
});
