var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom"], function (require, exports, React, domFile) {
    "use strict";
    var domCore = domFile.Core;
    var UserDetailMaterRowDomVm;
    (function (UserDetailMaterRowDomVm_1) {
        var UserDetailMaterRowDomVmAction = (function (_super) {
            __extends(UserDetailMaterRowDomVmAction, _super);
            function UserDetailMaterRowDomVmAction() {
                _super.apply(this, arguments);
            }
            return UserDetailMaterRowDomVmAction;
        }(domCore.DomAction));
        UserDetailMaterRowDomVm_1.UserDetailMaterRowDomVmAction = UserDetailMaterRowDomVmAction;
        var UserDetailRowDomReact = (function (_super) {
            __extends(UserDetailRowDomReact, _super);
            function UserDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new UserDetailMaterRowDomStates();
            }
            UserDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "1"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleClick(); }}, "用户明细", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsFormHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "简码：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.SimpleCode))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "类别：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.Type))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {for: "right-label", className: "pull-right"}, "职称：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("label", {for: "right-label", className: "pull-left"}, this.props.Vm.RowData.Type)))))));
            };
            UserDetailRowDomReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
                this.forceUpdate();
            };
            UserDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UserDetailRowDomReact;
        }(domCore.DomReact));
        UserDetailMaterRowDomVm_1.UserDetailRowDomReact = UserDetailRowDomReact;
        var UserDetailMaterRowDomVm = (function (_super) {
            __extends(UserDetailMaterRowDomVm, _super);
            function UserDetailMaterRowDomVm(config) {
                _super.call(this);
                this.ReactType = UserDetailRowDomReact;
                if (config) {
                    this.RowData = config.RowData;
                }
            }
            UserDetailMaterRowDomVm.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return UserDetailMaterRowDomVm;
        }(domCore.DomVm));
        UserDetailMaterRowDomVm_1.UserDetailMaterRowDomVm = UserDetailMaterRowDomVm;
        var UserDetailMaterRowDomStates = (function (_super) {
            __extends(UserDetailMaterRowDomStates, _super);
            function UserDetailMaterRowDomStates() {
                _super.apply(this, arguments);
            }
            return UserDetailMaterRowDomStates;
        }(domCore.DomStates));
        UserDetailMaterRowDomVm_1.UserDetailMaterRowDomStates = UserDetailMaterRowDomStates;
        var UserDetailMaterRowDomProps = (function (_super) {
            __extends(UserDetailMaterRowDomProps, _super);
            function UserDetailMaterRowDomProps() {
                _super.apply(this, arguments);
            }
            return UserDetailMaterRowDomProps;
        }(domCore.DomProps));
        UserDetailMaterRowDomVm_1.UserDetailMaterRowDomProps = UserDetailMaterRowDomProps;
    })(UserDetailMaterRowDomVm = exports.UserDetailMaterRowDomVm || (exports.UserDetailMaterRowDomVm = {}));
});
