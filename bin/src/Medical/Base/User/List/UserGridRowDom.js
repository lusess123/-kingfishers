var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Url", "./../../../../02col/02Mulite/SingleCheckBox", "./../../../Common/RowButtonExpandDom"], function (require, exports, React, domFile, urlFile, singleCheckFile, expandFile) {
    "use strict";
    var domCore = domFile.Core;
    var UserGridRowDom;
    (function (UserGridRowDom) {
        var UserGridRowDomAction = (function (_super) {
            __extends(UserGridRowDomAction, _super);
            function UserGridRowDomAction() {
                _super.apply(this, arguments);
            }
            return UserGridRowDomAction;
        }(domCore.DomAction));
        UserGridRowDom.UserGridRowDomAction = UserGridRowDomAction;
        var UserGridRowDomReact = (function (_super) {
            __extends(UserGridRowDomReact, _super);
            function UserGridRowDomReact() {
                _super.apply(this, arguments);
                this.state = new UserGridRowDomState;
            }
            UserGridRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-td" : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber), this.createRowButtonExpand())), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, React.createElement("a", {onClick: function () { _this.fun_linkDetai(); return false; }}, this.props.Vm.RowData.SimpleCode)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Type))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.JobTitle))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.UPDATE_TIME))));
            };
            UserGridRowDomReact.prototype.fun_linkDetai = function () {
                urlFile.Core.AkUrl.Current().openUrl("$panelUserDetailPage$" + this.props.Vm.RowData.FID + "$");
            };
            UserGridRowDomReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            UserGridRowDomReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            UserGridRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UserGridRowDomReact;
        }(domCore.DomReact));
        UserGridRowDom.UserGridRowDomReact = UserGridRowDomReact;
        var UserGridRowDomVm = (function (_super) {
            __extends(UserGridRowDomVm, _super);
            function UserGridRowDomVm(config) {
                _super.call(this);
                this.ReactType = UserGridRowDomReact;
                this.LeftNum = 0;
                this.IsAcsRelative = false;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
                if (config) {
                    this.RowData = config.RowData;
                    this.IsAcsRelative = config.IsAcsRelative;
                    this.LeftNum = config.LeftNum;
                    this.RowNumber = config.RowNumber;
                }
            }
            return UserGridRowDomVm;
        }(domCore.DomVm));
        UserGridRowDom.UserGridRowDomVm = UserGridRowDomVm;
        var UserGridRowDomState = (function (_super) {
            __extends(UserGridRowDomState, _super);
            function UserGridRowDomState() {
                _super.apply(this, arguments);
            }
            return UserGridRowDomState;
        }(domCore.DomStates));
        UserGridRowDom.UserGridRowDomState = UserGridRowDomState;
        var UserGridRowDomProps = (function (_super) {
            __extends(UserGridRowDomProps, _super);
            function UserGridRowDomProps() {
                _super.apply(this, arguments);
            }
            return UserGridRowDomProps;
        }(domCore.DomProps));
        UserGridRowDom.UserGridRowDomProps = UserGridRowDomProps;
    })(UserGridRowDom = exports.UserGridRowDom || (exports.UserGridRowDom = {}));
});
