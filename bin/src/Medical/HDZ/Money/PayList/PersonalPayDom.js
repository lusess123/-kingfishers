var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./PersonalPayTable"], function (require, exports, domFile, React, PersonalPayTableFile) {
    "use strict";
    var domCore = domFile.Core;
    var PersonalPayDom;
    (function (PersonalPayDom) {
        var PersonalPayDomAction = (function (_super) {
            __extends(PersonalPayDomAction, _super);
            function PersonalPayDomAction() {
                _super.apply(this, arguments);
            }
            return PersonalPayDomAction;
        }(domCore.DomAction));
        PersonalPayDom.PersonalPayDomAction = PersonalPayDomAction;
        var PersonalPayDomReact = (function (_super) {
            __extends(PersonalPayDomReact, _super);
            function PersonalPayDomReact() {
                _super.apply(this, arguments);
                this.state = new PersonalPayDomStates();
            }
            PersonalPayDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initHandle(), this.props.Vm.PersonalPayTableObj.intoDom());
            };
            PersonalPayDomReact.prototype._initHandle = function () {
                return React.createElement("div", {className: "YSm-handle clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 YSm-search"}, React.createElement("input", {className: "col-lg-11 col-md-10", type: "text", placeholder: "输入身份证、体检号、档案号查询"}), React.createElement("a", {className: "col-lg-1 col-md-2 btn btn-primary"}, "查询")));
            };
            PersonalPayDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return PersonalPayDomReact;
        }(domCore.DomReact));
        PersonalPayDom.PersonalPayDomReact = PersonalPayDomReact;
        var PersonalPayDomVm = (function (_super) {
            __extends(PersonalPayDomVm, _super);
            function PersonalPayDomVm(config) {
                _super.call(this);
                this.ReactType = PersonalPayDomReact;
                this.PersonalPayTableObj = new PersonalPayTableFile.PersonalPayTable.PersonalPayTableVm();
            }
            return PersonalPayDomVm;
        }(domCore.DomVm));
        PersonalPayDom.PersonalPayDomVm = PersonalPayDomVm;
        var PersonalPayDomStates = (function (_super) {
            __extends(PersonalPayDomStates, _super);
            function PersonalPayDomStates() {
                _super.apply(this, arguments);
            }
            return PersonalPayDomStates;
        }(domCore.DomStates));
        PersonalPayDom.PersonalPayDomStates = PersonalPayDomStates;
        var PersonalPayDomProps = (function (_super) {
            __extends(PersonalPayDomProps, _super);
            function PersonalPayDomProps() {
                _super.apply(this, arguments);
            }
            return PersonalPayDomProps;
        }(domCore.DomProps));
        PersonalPayDom.PersonalPayDomProps = PersonalPayDomProps;
    })(PersonalPayDom = exports.PersonalPayDom || (exports.PersonalPayDom = {}));
});
