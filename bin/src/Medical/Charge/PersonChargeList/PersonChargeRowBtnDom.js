var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var PersonChargeRowBtnDom;
    (function (PersonChargeRowBtnDom) {
        var PersonChargeRowBtnDomAction = (function (_super) {
            __extends(PersonChargeRowBtnDomAction, _super);
            function PersonChargeRowBtnDomAction() {
                _super.apply(this, arguments);
            }
            return PersonChargeRowBtnDomAction;
        }(domCore.DomAction));
        PersonChargeRowBtnDom.PersonChargeRowBtnDomAction = PersonChargeRowBtnDomAction;
        var PersonChargeRowBtnDomReact = (function (_super) {
            __extends(PersonChargeRowBtnDomReact, _super);
            function PersonChargeRowBtnDomReact() {
                _super.apply(this, arguments);
                this.state = new PersonChargeRowBtnDomStates();
            }
            PersonChargeRowBtnDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("span", {className: "YSu-name"}, "收费项目明细"));
            };
            PersonChargeRowBtnDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return PersonChargeRowBtnDomReact;
        }(domCore.DomReact));
        PersonChargeRowBtnDom.PersonChargeRowBtnDomReact = PersonChargeRowBtnDomReact;
        var PersonChargeRowBtnDomVm = (function (_super) {
            __extends(PersonChargeRowBtnDomVm, _super);
            function PersonChargeRowBtnDomVm(config) {
                _super.call(this);
                this.ReactType = PersonChargeRowBtnDomReact;
            }
            return PersonChargeRowBtnDomVm;
        }(domCore.DomVm));
        PersonChargeRowBtnDom.PersonChargeRowBtnDomVm = PersonChargeRowBtnDomVm;
        var PersonChargeRowBtnDomStates = (function (_super) {
            __extends(PersonChargeRowBtnDomStates, _super);
            function PersonChargeRowBtnDomStates() {
                _super.apply(this, arguments);
            }
            return PersonChargeRowBtnDomStates;
        }(domCore.DomStates));
        PersonChargeRowBtnDom.PersonChargeRowBtnDomStates = PersonChargeRowBtnDomStates;
        var PersonChargeRowBtnDomProps = (function (_super) {
            __extends(PersonChargeRowBtnDomProps, _super);
            function PersonChargeRowBtnDomProps() {
                _super.apply(this, arguments);
            }
            return PersonChargeRowBtnDomProps;
        }(domCore.DomProps));
        PersonChargeRowBtnDom.PersonChargeRowBtnDomProps = PersonChargeRowBtnDomProps;
    })(PersonChargeRowBtnDom = exports.PersonChargeRowBtnDom || (exports.PersonChargeRowBtnDom = {}));
});
