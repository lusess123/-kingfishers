var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./ExamItemUpdateMasterRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemUpdateRowDom;
    (function (ExamItemUpdateRowDom) {
        var ExamItemUpdateRowDomAction = (function (_super) {
            __extends(ExamItemUpdateRowDomAction, _super);
            function ExamItemUpdateRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamItemUpdateRowDomAction;
        }(domCore.DomAction));
        ExamItemUpdateRowDom.ExamItemUpdateRowDomAction = ExamItemUpdateRowDomAction;
        var ExamItemUpdateRowDomReact = (function (_super) {
            __extends(ExamItemUpdateRowDomReact, _super);
            function ExamItemUpdateRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemUpdateRowDomStates();
            }
            ExamItemUpdateRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title Hu-pointer", onClick: function () { _this.fun_masterTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsMasterHide ? "hide" : ""}, this.props.Vm.MasterRow.intoDom()));
            };
            ExamItemUpdateRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            ExamItemUpdateRowDomReact.prototype.fun_masterTitleClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            ExamItemUpdateRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamItemUpdateRowDomReact;
        }(domCore.DomReact));
        ExamItemUpdateRowDom.ExamItemUpdateRowDomReact = ExamItemUpdateRowDomReact;
        var ExamItemUpdateRowDomVm = (function (_super) {
            __extends(ExamItemUpdateRowDomVm, _super);
            function ExamItemUpdateRowDomVm(config) {
                _super.call(this);
                this.ReactType = ExamItemUpdateRowDomReact;
                this.MasterRow = new masterRowFile.ExamItemUpdateMasterRowDom.ExamItemUpdateMasterRowDomVm();
                this.DelFidList = [];
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                if (config) {
                    config.MasterConfig.UniId = this.UniId;
                    this.MasterRow = new masterRowFile.ExamItemUpdateMasterRowDom.ExamItemUpdateMasterRowDomVm(config.MasterConfig);
                }
                ;
            }
            ExamItemUpdateRowDomVm.prototype.legal = function () {
                var _isres = this.MasterRow.legal();
                return _isres;
            };
            ExamItemUpdateRowDomVm.prototype.getData = function () {
                var _data = this.MasterRow.getData();
                return _data;
            };
            return ExamItemUpdateRowDomVm;
        }(domCore.DomVm));
        ExamItemUpdateRowDom.ExamItemUpdateRowDomVm = ExamItemUpdateRowDomVm;
        var ExamItemUpdateRowDomStates = (function (_super) {
            __extends(ExamItemUpdateRowDomStates, _super);
            function ExamItemUpdateRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamItemUpdateRowDomStates;
        }(domCore.DomStates));
        ExamItemUpdateRowDom.ExamItemUpdateRowDomStates = ExamItemUpdateRowDomStates;
        var ExamItemUpdateRowDomProps = (function (_super) {
            __extends(ExamItemUpdateRowDomProps, _super);
            function ExamItemUpdateRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamItemUpdateRowDomProps;
        }(domCore.DomProps));
        ExamItemUpdateRowDom.ExamItemUpdateRowDomProps = ExamItemUpdateRowDomProps;
    })(ExamItemUpdateRowDom = exports.ExamItemUpdateRowDom || (exports.ExamItemUpdateRowDom = {}));
});
