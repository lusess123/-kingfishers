var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./ResultCommonUpdateMasterRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var ResultCommonUpdateRowDom;
    (function (ResultCommonUpdateRowDom) {
        var ResultCommonUpdateRowDomAction = (function (_super) {
            __extends(ResultCommonUpdateRowDomAction, _super);
            function ResultCommonUpdateRowDomAction() {
                _super.apply(this, arguments);
            }
            return ResultCommonUpdateRowDomAction;
        }(domCore.DomAction));
        ResultCommonUpdateRowDom.ResultCommonUpdateRowDomAction = ResultCommonUpdateRowDomAction;
        var ResultCommonUpdateRowDomReact = (function (_super) {
            __extends(ResultCommonUpdateRowDomReact, _super);
            function ResultCommonUpdateRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ResultCommonUpdateRowDomStates();
            }
            ResultCommonUpdateRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title acsPointer", onClick: function () { _this.fun_masterTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsMasterHide ? "hide" : "acs-toggle-item"}, this.props.Vm.MasterRow.intoDom()));
            };
            ResultCommonUpdateRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ResultCommonUpdateRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            ResultCommonUpdateRowDomReact.prototype.fun_masterTitleClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            return ResultCommonUpdateRowDomReact;
        }(domCore.DomReact));
        ResultCommonUpdateRowDom.ResultCommonUpdateRowDomReact = ResultCommonUpdateRowDomReact;
        var ResultCommonUpdateRowDomVm = (function (_super) {
            __extends(ResultCommonUpdateRowDomVm, _super);
            function ResultCommonUpdateRowDomVm(config) {
                _super.call(this);
                this.ReactType = ResultCommonUpdateRowDomReact;
                this.MasterRow = new masterRowFile.ResultCommonUpdateMasterRowDom.ResultCommonUpdateMasterRowDomVm();
                this.DelFidList = [];
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                if (config) {
                    config.MasterConfig.UniId = this.UniId;
                    this.MasterRow = new masterRowFile.ResultCommonUpdateMasterRowDom.ResultCommonUpdateMasterRowDomVm(config.MasterConfig);
                }
                ;
            }
            ResultCommonUpdateRowDomVm.prototype.legal = function () {
                var _isres = this.MasterRow.legal();
                return _isres;
            };
            ResultCommonUpdateRowDomVm.prototype.getData = function () {
                var _data = this.MasterRow.getData();
                return _data;
            };
            return ResultCommonUpdateRowDomVm;
        }(domCore.DomVm));
        ResultCommonUpdateRowDom.ResultCommonUpdateRowDomVm = ResultCommonUpdateRowDomVm;
        var ResultCommonUpdateRowDomStates = (function (_super) {
            __extends(ResultCommonUpdateRowDomStates, _super);
            function ResultCommonUpdateRowDomStates() {
                _super.apply(this, arguments);
            }
            return ResultCommonUpdateRowDomStates;
        }(domCore.DomStates));
        ResultCommonUpdateRowDom.ResultCommonUpdateRowDomStates = ResultCommonUpdateRowDomStates;
        var ResultCommonUpdateRowDomProps = (function (_super) {
            __extends(ResultCommonUpdateRowDomProps, _super);
            function ResultCommonUpdateRowDomProps() {
                _super.apply(this, arguments);
            }
            return ResultCommonUpdateRowDomProps;
        }(domCore.DomProps));
        ResultCommonUpdateRowDom.ResultCommonUpdateRowDomProps = ResultCommonUpdateRowDomProps;
    })(ResultCommonUpdateRowDom = exports.ResultCommonUpdateRowDom || (exports.ResultCommonUpdateRowDom = {}));
});
