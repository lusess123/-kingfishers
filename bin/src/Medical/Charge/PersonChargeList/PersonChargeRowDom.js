var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var PersonChargeRowDom;
    (function (PersonChargeRowDom) {
        var PersonChargeRowDomAction = (function (_super) {
            __extends(PersonChargeRowDomAction, _super);
            function PersonChargeRowDomAction() {
                _super.apply(this, arguments);
            }
            return PersonChargeRowDomAction;
        }(domCore.DomAction));
        PersonChargeRowDom.PersonChargeRowDomAction = PersonChargeRowDomAction;
        var PersonChargeRowDomReact = (function (_super) {
            __extends(PersonChargeRowDomReact, _super);
            function PersonChargeRowDomReact() {
                _super.apply(this, arguments);
                this.state = new PersonChargeRowDomStates();
            }
            PersonChargeRowDomReact.prototype.pSender = function () {
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.number), React.createElement("td", null, this.props.Vm.Data.ExamItemName), React.createElement("td", {className: "text-right"}, this.props.Vm.Data.ReceivableAmount), React.createElement("td", null, this.props.Vm.Data.discount), React.createElement("td", null, this.props.Vm.Data.ReceiveAmount), React.createElement("td", null, this.SenderStatus(this.props.Vm.Data.ExamStatus)));
            };
            PersonChargeRowDomReact.prototype.SenderStatus = function (num) {
                switch (num) {
                    case "0": return React.createElement("span", {className: "label label-default"}, "未检查");
                    case "1": return React.createElement("span", {className: "label label-default"}, "已检查");
                    case "2": return React.createElement("span", {className: "label label-default"}, "已录入");
                    case "3": return React.createElement("span", {className: "label label-default"}, "已退款");
                    default: return React.createElement("span", null);
                }
            };
            PersonChargeRowDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return PersonChargeRowDomReact;
        }(domCore.DomReact));
        PersonChargeRowDom.PersonChargeRowDomReact = PersonChargeRowDomReact;
        var PersonChargeRowDomVm = (function (_super) {
            __extends(PersonChargeRowDomVm, _super);
            function PersonChargeRowDomVm(config) {
                _super.call(this);
                this.ReactType = PersonChargeRowDomReact;
                if (config) {
                    this.Data = config.Data;
                    this.number = config.RowNumber;
                }
            }
            return PersonChargeRowDomVm;
        }(domCore.DomVm));
        PersonChargeRowDom.PersonChargeRowDomVm = PersonChargeRowDomVm;
        var PersonChargeRowDomStates = (function (_super) {
            __extends(PersonChargeRowDomStates, _super);
            function PersonChargeRowDomStates() {
                _super.apply(this, arguments);
            }
            return PersonChargeRowDomStates;
        }(domCore.DomStates));
        PersonChargeRowDom.PersonChargeRowDomStates = PersonChargeRowDomStates;
        var PersonChargeRowDomProps = (function (_super) {
            __extends(PersonChargeRowDomProps, _super);
            function PersonChargeRowDomProps() {
                _super.apply(this, arguments);
            }
            return PersonChargeRowDomProps;
        }(domCore.DomProps));
        PersonChargeRowDom.PersonChargeRowDomProps = PersonChargeRowDomProps;
    })(PersonChargeRowDom = exports.PersonChargeRowDom || (exports.PersonChargeRowDom = {}));
});
