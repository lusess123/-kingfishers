var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/02Mulite/SingleCheckBox", "./../../Common/RowButtonExpandDom"], function (require, exports, domFile, React, singleCheckFile, expandFile) {
    "use strict";
    var domCore = domFile.Core;
    var DetectionRowDom;
    (function (DetectionRowDom) {
        var DetectionRowDomAction = (function (_super) {
            __extends(DetectionRowDomAction, _super);
            function DetectionRowDomAction() {
                _super.apply(this, arguments);
            }
            return DetectionRowDomAction;
        }(domCore.DomAction));
        DetectionRowDom.DetectionRowDomAction = DetectionRowDomAction;
        var DetectionRowDomReact = (function (_super) {
            __extends(DetectionRowDomReact, _super);
            function DetectionRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DetectionRowDomStates();
            }
            DetectionRowDomReact.prototype.pSender = function () {
                var gridRow = this.creatRow();
                return gridRow;
            };
            DetectionRowDomReact.prototype.createSingelCheckBox = function () {
                return this.props.Vm.SingleCheckboxVm.intoDom();
            };
            DetectionRowDomReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            DetectionRowDomReact.prototype.creatRow = function () {
                return (React.createElement("tr", {className: this.props.Vm.SingleCheckboxVm.vmDataValueGet() == "true" ? "acs-check-bg  Hs-tr-checked" : ""}, React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, this.createSingelCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber)), React.createElement("td", null, this.props.Vm.RowData.MemberName), React.createElement("td", null, this.props.Vm.RowData.IDCard), React.createElement("td", null, this.props.Vm.RowData.ExamNumber), React.createElement("td", null, this.props.Vm.RowData.FileNumber), React.createElement("td", null, this.props.Vm.RowData.UnitName), React.createElement("td", null, React.createElement("span", {className: this.props.Vm.statusStyle}, this.props.Vm.status()))));
            };
            DetectionRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DetectionRowDomReact;
        }(domCore.DomReact));
        DetectionRowDom.DetectionRowDomReact = DetectionRowDomReact;
        var DetectionRowDomVm = (function (_super) {
            __extends(DetectionRowDomVm, _super);
            function DetectionRowDomVm(config) {
                _super.call(this);
                this.ReactType = DetectionRowDomReact;
                this.SingleCheckboxVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.IsAcsRelative = false;
                this.RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
                if (config) {
                    this.RowData = config.RowData;
                    this.IsAcsRelative = config.IsAcsRelative;
                    this.RowNumber = config.RowNumber;
                }
                var styles = this.RowData.Status;
                if (styles == "2") {
                    this.statusStyle = "statu-span status-a";
                }
                if (styles == "3") {
                    this.statusStyle = "statu-span status-a";
                }
                if (styles == "4") {
                    this.statusStyle = "statu-span status-a";
                }
                if (styles == "5") {
                    this.statusStyle = "statu-span status-b";
                }
                if (styles == "6") {
                    this.statusStyle = "statu-span status-c";
                }
                if (styles == "7") {
                    this.statusStyle = "statu-span status-b";
                }
                if (styles == "8") {
                    this.statusStyle = "statu-span status-a";
                }
            }
            DetectionRowDomVm.prototype.status = function () {
                var status = this.RowData.Status;
                switch (status) {
                    case "2":
                        return "未缴费";
                    case "3":
                        return "未开始";
                    case "4":
                        return "体检中";
                    case "5":
                        return "待总检";
                    case "6":
                        return "已总检";
                    case "7":
                        return "已退款";
                    case "8":
                        return "已审核";
                }
            };
            return DetectionRowDomVm;
        }(domCore.DomVm));
        DetectionRowDom.DetectionRowDomVm = DetectionRowDomVm;
        var DetectionRowDomStates = (function (_super) {
            __extends(DetectionRowDomStates, _super);
            function DetectionRowDomStates() {
                _super.apply(this, arguments);
            }
            return DetectionRowDomStates;
        }(domCore.DomStates));
        DetectionRowDom.DetectionRowDomStates = DetectionRowDomStates;
        var DetectionRowDomProps = (function (_super) {
            __extends(DetectionRowDomProps, _super);
            function DetectionRowDomProps() {
                _super.apply(this, arguments);
            }
            return DetectionRowDomProps;
        }(domCore.DomProps));
        DetectionRowDom.DetectionRowDomProps = DetectionRowDomProps;
    })(DetectionRowDom = exports.DetectionRowDom || (exports.DetectionRowDom = {}));
});
