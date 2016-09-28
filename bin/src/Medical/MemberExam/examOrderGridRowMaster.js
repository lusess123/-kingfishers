var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, React, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamOrderGridRow;
    (function (ExamOrderGridRow) {
        var ExamOrderGridRowAction = (function (_super) {
            __extends(ExamOrderGridRowAction, _super);
            function ExamOrderGridRowAction() {
                _super.apply(this, arguments);
            }
            return ExamOrderGridRowAction;
        }(domCore.DomAction));
        ExamOrderGridRow.ExamOrderGridRowAction = ExamOrderGridRowAction;
        var ExamOrderGridRowReact = (function (_super) {
            __extends(ExamOrderGridRowReact, _super);
            function ExamOrderGridRowReact() {
                _super.apply(this, arguments);
                this.state = new ExamOrderGridRowStates();
            }
            ExamOrderGridRowReact.prototype.pSender = function () {
                var gridRow = this.creatRow();
                return gridRow;
            };
            ExamOrderGridRowReact.prototype.createSingelCheckBox = function () {
                return this.props.Vm.SingleCheckboxVm.intoDom();
            };
            ExamOrderGridRowReact.prototype.creatRow = function () {
                return (React.createElement("tr", null, React.createElement("td", null, this.props.Vm.RowData.PackageName), React.createElement("td", null, this.props.Vm.RowData.Name), React.createElement("td", null, this.props.Vm.RowData.DepartmentName), React.createElement("td", {className: "text-right"}, this.props.Vm.RowData.Price)));
            };
            ExamOrderGridRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamOrderGridRowReact;
        }(domCore.DomReact));
        ExamOrderGridRow.ExamOrderGridRowReact = ExamOrderGridRowReact;
        var ExamOrderGridRowVm = (function (_super) {
            __extends(ExamOrderGridRowVm, _super);
            function ExamOrderGridRowVm(config) {
                _super.call(this);
                this.ReactType = ExamOrderGridRowReact;
                this.SingleCheckboxVm = new singleCheckFile.ui.SingleCheckBoxVm();
                if (config) {
                    this.RowData = config.RowData;
                }
            }
            return ExamOrderGridRowVm;
        }(domCore.DomVm));
        ExamOrderGridRow.ExamOrderGridRowVm = ExamOrderGridRowVm;
        var ExamOrderGridRowStates = (function (_super) {
            __extends(ExamOrderGridRowStates, _super);
            function ExamOrderGridRowStates() {
                _super.apply(this, arguments);
            }
            return ExamOrderGridRowStates;
        }(domCore.DomStates));
        ExamOrderGridRow.ExamOrderGridRowStates = ExamOrderGridRowStates;
        var ExamOrderGridRowProps = (function (_super) {
            __extends(ExamOrderGridRowProps, _super);
            function ExamOrderGridRowProps() {
                _super.apply(this, arguments);
            }
            return ExamOrderGridRowProps;
        }(domCore.DomProps));
        ExamOrderGridRow.ExamOrderGridRowProps = ExamOrderGridRowProps;
    })(ExamOrderGridRow = exports.ExamOrderGridRow || (exports.ExamOrderGridRow = {}));
});
