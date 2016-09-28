var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/02Mulite/SingleCheckBox", "./../../Common/RowButtonExpandDom"], function (require, exports, domFile, React, singleCheckFile, expandFile) {
    "use strict";
    var domCore = domFile.Core;
    var InsertRowDom;
    (function (InsertRowDom) {
        var InsertRowDomAction = (function (_super) {
            __extends(InsertRowDomAction, _super);
            function InsertRowDomAction() {
                _super.apply(this, arguments);
            }
            return InsertRowDomAction;
        }(domCore.DomAction));
        InsertRowDom.InsertRowDomAction = InsertRowDomAction;
        var InsertRowDomReact = (function (_super) {
            __extends(InsertRowDomReact, _super);
            function InsertRowDomReact() {
                _super.apply(this, arguments);
                this.state = new InsertRowDomStates();
            }
            InsertRowDomReact.prototype.pSender = function () {
                var gridRow = this.creatRow();
                return gridRow;
            };
            InsertRowDomReact.prototype.createSingelCheckBox = function () {
                return this.props.Vm.SingleCheckboxVm.intoDom();
            };
            InsertRowDomReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            InsertRowDomReact.prototype.creatRow = function () {
                return (React.createElement("tr", {className: this.props.Vm.SingleCheckboxVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, this.createSingelCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber)), React.createElement("td", null, this.props.Vm.RowData.Name), React.createElement("td", null, this.props.Vm.RowData.IDCard), React.createElement("td", null, this.props.Vm.RowData.ExamCode), React.createElement("td", null, this.props.Vm.RowData.RecordID), React.createElement("td", null, this.props.Vm.RowData.Unit), React.createElement("td", null, this.sendStatus(this.props.Vm.RowData.State))));
            };
            InsertRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            InsertRowDomReact.prototype.sendStatus = function (status) {
                switch (status) {
                    case 1: return React.createElement("span", {className: "label label-default"}, "体检中");
                    case 2: return React.createElement("span", {className: "label label-default"}, "已检未录入");
                    case 3: return React.createElement("span", {className: "label label-default"}, "已录入");
                    default: return null;
                }
            };
            return InsertRowDomReact;
        }(domCore.DomReact));
        InsertRowDom.InsertRowDomReact = InsertRowDomReact;
        var InsertRowDomVm = (function (_super) {
            __extends(InsertRowDomVm, _super);
            //public InsertRowObj: insertTalbFile.InsertTableDom.InsertTableDomVm;
            function InsertRowDomVm(config) {
                _super.call(this);
                this.ReactType = InsertRowDomReact;
                this.SingleCheckboxVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.IsAcsRelative = false;
                this.RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
                if (config) {
                    this.RowData = config.RowData;
                    this.IsAcsRelative = config.IsAcsRelative;
                    this.RowNumber = config.RowNumber;
                }
            }
            return InsertRowDomVm;
        }(domCore.DomVm));
        InsertRowDom.InsertRowDomVm = InsertRowDomVm;
        var InsertRowDomStates = (function (_super) {
            __extends(InsertRowDomStates, _super);
            function InsertRowDomStates() {
                _super.apply(this, arguments);
            }
            return InsertRowDomStates;
        }(domCore.DomStates));
        InsertRowDom.InsertRowDomStates = InsertRowDomStates;
        var InsertRowDomProps = (function (_super) {
            __extends(InsertRowDomProps, _super);
            function InsertRowDomProps() {
                _super.apply(this, arguments);
            }
            return InsertRowDomProps;
        }(domCore.DomProps));
        InsertRowDom.InsertRowDomProps = InsertRowDomProps;
    })(InsertRowDom = exports.InsertRowDom || (exports.InsertRowDom = {}));
});
