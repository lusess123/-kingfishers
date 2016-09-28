var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, React, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamOrderGridFormDom;
    (function (ExamOrderGridFormDom) {
        var ExamOrderGridFormDomAction = (function (_super) {
            __extends(ExamOrderGridFormDomAction, _super);
            function ExamOrderGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return ExamOrderGridFormDomAction;
        }(domCore.DomAction));
        ExamOrderGridFormDom.ExamOrderGridFormDomAction = ExamOrderGridFormDomAction;
        var ExamOrderGridFormDomReact = (function (_super) {
            __extends(ExamOrderGridFormDomReact, _super);
            function ExamOrderGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamOrderGridFormDomStates();
            }
            ExamOrderGridFormDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-striped table-bordered table-hover"}, this.initHeader(), this.initBody()), React.createElement("div", {className: "Hg-height-4"}));
            };
            ExamOrderGridFormDomReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return row.intoDom();
                }));
            };
            ;
            ExamOrderGridFormDomReact.prototype.initHeader = function () {
                return (React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, "套餐名称"), React.createElement("th", null, "项目名称"), React.createElement("th", null, "检查科室"), React.createElement("th", null, "价格"))));
            };
            ExamOrderGridFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamOrderGridFormDomReact;
        }(domCore.DomReact));
        ExamOrderGridFormDom.ExamOrderGridFormDomReact = ExamOrderGridFormDomReact;
        var ExamOrderGridFormDomVm = (function (_super) {
            __extends(ExamOrderGridFormDomVm, _super);
            function ExamOrderGridFormDomVm(config) {
                _super.call(this);
                this.ReactType = ExamOrderGridFormDomReact;
                this.RowList = [];
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            }
            return ExamOrderGridFormDomVm;
        }(domCore.DomVm));
        ExamOrderGridFormDom.ExamOrderGridFormDomVm = ExamOrderGridFormDomVm;
        var ExamOrderGridFormDomStates = (function (_super) {
            __extends(ExamOrderGridFormDomStates, _super);
            function ExamOrderGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return ExamOrderGridFormDomStates;
        }(domCore.DomStates));
        ExamOrderGridFormDom.ExamOrderGridFormDomStates = ExamOrderGridFormDomStates;
        var ExamOrderGridFormDomProps = (function (_super) {
            __extends(ExamOrderGridFormDomProps, _super);
            function ExamOrderGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return ExamOrderGridFormDomProps;
        }(domCore.DomProps));
        ExamOrderGridFormDom.ExamOrderGridFormDomProps = ExamOrderGridFormDomProps;
    })(ExamOrderGridFormDom = exports.ExamOrderGridFormDom || (exports.ExamOrderGridFormDom = {}));
});
