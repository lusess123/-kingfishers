var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./ResultCommonDetailMasterRowDom"], function (require, exports, React, domFile, masterRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var ResultCommonDetailRowDom;
    (function (ResultCommonDetailRowDom) {
        var ResultCommonDetailRowDomAction = (function (_super) {
            __extends(ResultCommonDetailRowDomAction, _super);
            function ResultCommonDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return ResultCommonDetailRowDomAction;
        }(domCore.DomAction));
        ResultCommonDetailRowDom.ResultCommonDetailRowDomAction = ResultCommonDetailRowDomAction;
        var ResultCommonDetailRowDomReact = (function (_super) {
            __extends(ResultCommonDetailRowDomReact, _super);
            function ResultCommonDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ResultCommonDetailRowDomStates();
            }
            ResultCommonDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title Hu-pointer", onClick: function () { _this.fun_itemTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : "Hm-toggle-item"}, this.props.Vm.MasterRow.intoDom()));
            };
            ResultCommonDetailRowDomReact.prototype.fun_rowTitleClick = function () {
                this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
                this.forceUpdate();
            };
            ResultCommonDetailRowDomReact.prototype.fun_itemTitleClick = function () {
                this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
                this.forceUpdate();
            };
            ResultCommonDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ResultCommonDetailRowDomReact;
        }(domCore.DomReact));
        ResultCommonDetailRowDom.ResultCommonDetailRowDomReact = ResultCommonDetailRowDomReact;
        var ResultCommonDetailRowDomVm = (function (_super) {
            __extends(ResultCommonDetailRowDomVm, _super);
            function ResultCommonDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = ResultCommonDetailRowDomReact;
                if (config) {
                    this.MasterRow = new masterRowFile.ResultCommonDetailMasterRowDom.ResultCommonDetailMasterRowDomVm(config.MasterConfig);
                }
            }
            return ResultCommonDetailRowDomVm;
        }(domCore.DomVm));
        ResultCommonDetailRowDom.ResultCommonDetailRowDomVm = ResultCommonDetailRowDomVm;
        var ResultCommonDetailRowDomStates = (function (_super) {
            __extends(ResultCommonDetailRowDomStates, _super);
            function ResultCommonDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return ResultCommonDetailRowDomStates;
        }(domCore.DomStates));
        ResultCommonDetailRowDom.ResultCommonDetailRowDomStates = ResultCommonDetailRowDomStates;
        var ResultCommonDetailRowDomProps = (function (_super) {
            __extends(ResultCommonDetailRowDomProps, _super);
            function ResultCommonDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return ResultCommonDetailRowDomProps;
        }(domCore.DomProps));
        ResultCommonDetailRowDom.ResultCommonDetailRowDomProps = ResultCommonDetailRowDomProps;
    })(ResultCommonDetailRowDom = exports.ResultCommonDetailRowDom || (exports.ResultCommonDetailRowDom = {}));
});
