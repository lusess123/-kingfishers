var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./ExamItemCategoryUpdateMasterRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemCategoryUpdateRowDom;
    (function (ExamItemCategoryUpdateRowDom) {
        var ExamItemCategoryUpdateRowDomAction = (function (_super) {
            __extends(ExamItemCategoryUpdateRowDomAction, _super);
            function ExamItemCategoryUpdateRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryUpdateRowDomAction;
        }(domCore.DomAction));
        ExamItemCategoryUpdateRowDom.ExamItemCategoryUpdateRowDomAction = ExamItemCategoryUpdateRowDomAction;
        var ExamItemCategoryUpdateRowDomReact = (function (_super) {
            __extends(ExamItemCategoryUpdateRowDomReact, _super);
            function ExamItemCategoryUpdateRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemCategoryUpdateRowDomStates();
            }
            ExamItemCategoryUpdateRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title Hu-pointer", onClick: function () { _this.fun_masterTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsMasterHide ? "hide" : ""}, this.props.Vm.MasterRow.intoDom()));
            };
            ExamItemCategoryUpdateRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            ExamItemCategoryUpdateRowDomReact.prototype.fun_masterTitleClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            ExamItemCategoryUpdateRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamItemCategoryUpdateRowDomReact;
        }(domCore.DomReact));
        ExamItemCategoryUpdateRowDom.ExamItemCategoryUpdateRowDomReact = ExamItemCategoryUpdateRowDomReact;
        var ExamItemCategoryUpdateRowDomVm = (function (_super) {
            __extends(ExamItemCategoryUpdateRowDomVm, _super);
            function ExamItemCategoryUpdateRowDomVm(config) {
                _super.call(this);
                this.ReactType = ExamItemCategoryUpdateRowDomReact;
                this.MasterRow = new masterRowFile.ExamItemCategoryUpdateMasterRowDom.ExamItemCategoryUpdateMasterRowDomVm();
                this.DelFidList = [];
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                if (config) {
                    config.MasterConfig.UniId = this.UniId;
                    this.MasterRow = new masterRowFile.ExamItemCategoryUpdateMasterRowDom.ExamItemCategoryUpdateMasterRowDomVm(config.MasterConfig);
                }
                ;
            }
            ExamItemCategoryUpdateRowDomVm.prototype.legal = function () {
                var _isres = this.MasterRow.legal();
                return _isres;
            };
            ExamItemCategoryUpdateRowDomVm.prototype.getData = function () {
                var _data = this.MasterRow.getData();
                return _data;
            };
            return ExamItemCategoryUpdateRowDomVm;
        }(domCore.DomVm));
        ExamItemCategoryUpdateRowDom.ExamItemCategoryUpdateRowDomVm = ExamItemCategoryUpdateRowDomVm;
        var ExamItemCategoryUpdateRowDomStates = (function (_super) {
            __extends(ExamItemCategoryUpdateRowDomStates, _super);
            function ExamItemCategoryUpdateRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryUpdateRowDomStates;
        }(domCore.DomStates));
        ExamItemCategoryUpdateRowDom.ExamItemCategoryUpdateRowDomStates = ExamItemCategoryUpdateRowDomStates;
        var ExamItemCategoryUpdateRowDomProps = (function (_super) {
            __extends(ExamItemCategoryUpdateRowDomProps, _super);
            function ExamItemCategoryUpdateRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryUpdateRowDomProps;
        }(domCore.DomProps));
        ExamItemCategoryUpdateRowDom.ExamItemCategoryUpdateRowDomProps = ExamItemCategoryUpdateRowDomProps;
    })(ExamItemCategoryUpdateRowDom = exports.ExamItemCategoryUpdateRowDom || (exports.ExamItemCategoryUpdateRowDom = {}));
});
