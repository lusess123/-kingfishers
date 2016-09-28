var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./ExamItemDetailMasterRowDom"], function (require, exports, React, domFile, masterRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemDetailRowDom;
    (function (ExamItemDetailRowDom) {
        var ExamItemDetailRowDomAction = (function (_super) {
            __extends(ExamItemDetailRowDomAction, _super);
            function ExamItemDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamItemDetailRowDomAction;
        }(domCore.DomAction));
        ExamItemDetailRowDom.ExamItemDetailRowDomAction = ExamItemDetailRowDomAction;
        var ExamItemDetailRowDomReact = (function (_super) {
            __extends(ExamItemDetailRowDomReact, _super);
            function ExamItemDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemDetailRowDomStates();
            }
            ExamItemDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title Hu-pointer", onClick: function () { _this.fun_itemTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : "Hm-toggle-item"}, this.props.Vm.MasterRow.intoDom()));
            };
            ExamItemDetailRowDomReact.prototype.fun_rowTitleClick = function () {
                this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
                this.forceUpdate();
            };
            ExamItemDetailRowDomReact.prototype.fun_itemTitleClick = function () {
                this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
                this.forceUpdate();
            };
            ExamItemDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamItemDetailRowDomReact;
        }(domCore.DomReact));
        ExamItemDetailRowDom.ExamItemDetailRowDomReact = ExamItemDetailRowDomReact;
        var ExamItemDetailRowDomVm = (function (_super) {
            __extends(ExamItemDetailRowDomVm, _super);
            function ExamItemDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = ExamItemDetailRowDomReact;
                if (config) {
                    this.MasterRow = new masterRowFile.ExamItemDetailMasterRowDom.ExamItemDetailMasterRowDomVm(config.MasterConfig);
                }
            }
            return ExamItemDetailRowDomVm;
        }(domCore.DomVm));
        ExamItemDetailRowDom.ExamItemDetailRowDomVm = ExamItemDetailRowDomVm;
        var ExamItemDetailRowDomStates = (function (_super) {
            __extends(ExamItemDetailRowDomStates, _super);
            function ExamItemDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamItemDetailRowDomStates;
        }(domCore.DomStates));
        ExamItemDetailRowDom.ExamItemDetailRowDomStates = ExamItemDetailRowDomStates;
        var ExamItemDetailRowDomProps = (function (_super) {
            __extends(ExamItemDetailRowDomProps, _super);
            function ExamItemDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamItemDetailRowDomProps;
        }(domCore.DomProps));
        ExamItemDetailRowDom.ExamItemDetailRowDomProps = ExamItemDetailRowDomProps;
    })(ExamItemDetailRowDom = exports.ExamItemDetailRowDom || (exports.ExamItemDetailRowDom = {}));
});
