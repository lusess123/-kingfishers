var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./PersonChargeRowDom"], function (require, exports, domFile, React, Row) {
    "use strict";
    var domCore = domFile.Core;
    var PersonChargeGridFormDom;
    (function (PersonChargeGridFormDom) {
        var PersonChargeGridFormDomAction = (function (_super) {
            __extends(PersonChargeGridFormDomAction, _super);
            function PersonChargeGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return PersonChargeGridFormDomAction;
        }(domCore.DomAction));
        PersonChargeGridFormDom.PersonChargeGridFormDomAction = PersonChargeGridFormDomAction;
        var PersonChargeGridFormDomReact = (function (_super) {
            __extends(PersonChargeGridFormDomReact, _super);
            function PersonChargeGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new PersonChargeGridFormDomStates();
            }
            PersonChargeGridFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, "序号"), React.createElement("th", null, "体检项目"), React.createElement("th", null, "价格"), React.createElement("th", null, "折扣"), React.createElement("th", {className: "text-right"}, "最终价格"), React.createElement("th", null, "状态"))), React.createElement("tbody", null, this.props.Vm.DataList ? this.props.Vm.DataList.map(function (a, index) {
                    var data = { Data: a, RowNumber: index + 1 };
                    _this.props.Vm.row = new Row.PersonChargeRowDom.PersonChargeRowDomVm(data);
                    return _this.props.Vm.row.intoDom();
                }) : null));
            };
            PersonChargeGridFormDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return PersonChargeGridFormDomReact;
        }(domCore.DomReact));
        PersonChargeGridFormDom.PersonChargeGridFormDomReact = PersonChargeGridFormDomReact;
        var PersonChargeGridFormDomVm = (function (_super) {
            __extends(PersonChargeGridFormDomVm, _super);
            function PersonChargeGridFormDomVm(config) {
                _super.call(this);
                this.ReactType = PersonChargeGridFormDomReact;
                if (config) {
                    this.DataList = config.Data;
                }
            }
            return PersonChargeGridFormDomVm;
        }(domCore.DomVm));
        PersonChargeGridFormDom.PersonChargeGridFormDomVm = PersonChargeGridFormDomVm;
        var PersonChargeGridFormDomStates = (function (_super) {
            __extends(PersonChargeGridFormDomStates, _super);
            function PersonChargeGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return PersonChargeGridFormDomStates;
        }(domCore.DomStates));
        PersonChargeGridFormDom.PersonChargeGridFormDomStates = PersonChargeGridFormDomStates;
        var PersonChargeGridFormDomProps = (function (_super) {
            __extends(PersonChargeGridFormDomProps, _super);
            function PersonChargeGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return PersonChargeGridFormDomProps;
        }(domCore.DomProps));
        PersonChargeGridFormDom.PersonChargeGridFormDomProps = PersonChargeGridFormDomProps;
    })(PersonChargeGridFormDom = exports.PersonChargeGridFormDom || (exports.PersonChargeGridFormDom = {}));
});
