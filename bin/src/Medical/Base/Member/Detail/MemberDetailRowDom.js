var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./MemberDetailMasterRowDom"], function (require, exports, React, domFile, masterRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var MemberDetailRowDom;
    (function (MemberDetailRowDom) {
        var MemberDetailRowDomAction = (function (_super) {
            __extends(MemberDetailRowDomAction, _super);
            function MemberDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return MemberDetailRowDomAction;
        }(domCore.DomAction));
        MemberDetailRowDom.MemberDetailRowDomAction = MemberDetailRowDomAction;
        var MemberDetailRowDomReact = (function (_super) {
            __extends(MemberDetailRowDomReact, _super);
            function MemberDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new MemberDetailRowDomStates();
            }
            MemberDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title Hu-pointer", onClick: function () { _this.fun_itemTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : "Hm-toggle-item"}, this.props.Vm.MasterRow.intoDom()));
            };
            MemberDetailRowDomReact.prototype.fun_rowTitleClick = function () {
                this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
                this.forceUpdate();
            };
            MemberDetailRowDomReact.prototype.fun_itemTitleClick = function () {
                this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
                this.forceUpdate();
            };
            MemberDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MemberDetailRowDomReact;
        }(domCore.DomReact));
        MemberDetailRowDom.MemberDetailRowDomReact = MemberDetailRowDomReact;
        var MemberDetailRowDomVm = (function (_super) {
            __extends(MemberDetailRowDomVm, _super);
            function MemberDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = MemberDetailRowDomReact;
                if (config) {
                    this.MasterRow = new masterRowFile.MemberDetailMasterRowDom.MemberDetailMasterRowDomVm(config.MasterConfig);
                }
            }
            return MemberDetailRowDomVm;
        }(domCore.DomVm));
        MemberDetailRowDom.MemberDetailRowDomVm = MemberDetailRowDomVm;
        var MemberDetailRowDomStates = (function (_super) {
            __extends(MemberDetailRowDomStates, _super);
            function MemberDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return MemberDetailRowDomStates;
        }(domCore.DomStates));
        MemberDetailRowDom.MemberDetailRowDomStates = MemberDetailRowDomStates;
        var MemberDetailRowDomProps = (function (_super) {
            __extends(MemberDetailRowDomProps, _super);
            function MemberDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return MemberDetailRowDomProps;
        }(domCore.DomProps));
        MemberDetailRowDom.MemberDetailRowDomProps = MemberDetailRowDomProps;
    })(MemberDetailRowDom = exports.MemberDetailRowDom || (exports.MemberDetailRowDom = {}));
});
