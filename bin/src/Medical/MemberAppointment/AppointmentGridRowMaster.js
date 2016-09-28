var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, React, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var AppointmentGridRow;
    (function (AppointmentGridRow) {
        var AppointmentGridRowAction = (function (_super) {
            __extends(AppointmentGridRowAction, _super);
            function AppointmentGridRowAction() {
                _super.apply(this, arguments);
            }
            return AppointmentGridRowAction;
        }(domCore.DomAction));
        AppointmentGridRow.AppointmentGridRowAction = AppointmentGridRowAction;
        var AppointmentGridRowReact = (function (_super) {
            __extends(AppointmentGridRowReact, _super);
            function AppointmentGridRowReact() {
                _super.apply(this, arguments);
                this.state = new AppointmentGridRowStates();
            }
            AppointmentGridRowReact.prototype.pSender = function () {
                var gridRow = this.creatRow();
                return gridRow;
            };
            AppointmentGridRowReact.prototype.createSingelCheckBox = function () {
                return this.props.Vm.SingleCheckboxVm.intoDom();
            };
            AppointmentGridRowReact.prototype.creatRow = function () {
                return (React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}, this.createSingelCheckBox()), React.createElement("span", null, this.props.Vm.RowNumber)), React.createElement("td", null, this.props.Vm.RowData.ReservationNumber), React.createElement("td", null, this.props.Vm.RowData.MemberId), React.createElement("td", null, this.props.Vm.RowData.ExamDate), React.createElement("td", null, this.props.Vm.RowData.ExamPackage), React.createElement("td", null, this.props.Vm.RowData.ExamItem)));
            };
            AppointmentGridRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AppointmentGridRowReact;
        }(domCore.DomReact));
        AppointmentGridRow.AppointmentGridRowReact = AppointmentGridRowReact;
        var AppointmentGridRowVm = (function (_super) {
            __extends(AppointmentGridRowVm, _super);
            function AppointmentGridRowVm(config) {
                _super.call(this);
                this.ReactType = AppointmentGridRowReact;
                this.SingleCheckboxVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.RowData = {
                    FID: "",
                    ReservationNumber: "预约编号",
                    MemberId: "个人ID",
                    ExamDate: "体检时间",
                    ExamPackage: "体检套餐",
                    ExamItem: "体检项目"
                };
            }
            return AppointmentGridRowVm;
        }(domCore.DomVm));
        AppointmentGridRow.AppointmentGridRowVm = AppointmentGridRowVm;
        var AppointmentGridRowStates = (function (_super) {
            __extends(AppointmentGridRowStates, _super);
            function AppointmentGridRowStates() {
                _super.apply(this, arguments);
            }
            return AppointmentGridRowStates;
        }(domCore.DomStates));
        AppointmentGridRow.AppointmentGridRowStates = AppointmentGridRowStates;
        var AppointmentGridRowProps = (function (_super) {
            __extends(AppointmentGridRowProps, _super);
            function AppointmentGridRowProps() {
                _super.apply(this, arguments);
            }
            return AppointmentGridRowProps;
        }(domCore.DomProps));
        AppointmentGridRow.AppointmentGridRowProps = AppointmentGridRowProps;
    })(AppointmentGridRow = exports.AppointmentGridRow || (exports.AppointmentGridRow = {}));
});
