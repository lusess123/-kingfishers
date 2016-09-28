var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./CombinationExamItemUpdateMasterRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var CombinationExamItemUpdateRowDom;
    (function (CombinationExamItemUpdateRowDom) {
        var CombinationExamItemUpdateRowDomAction = (function (_super) {
            __extends(CombinationExamItemUpdateRowDomAction, _super);
            function CombinationExamItemUpdateRowDomAction() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemUpdateRowDomAction;
        }(domCore.DomAction));
        CombinationExamItemUpdateRowDom.CombinationExamItemUpdateRowDomAction = CombinationExamItemUpdateRowDomAction;
        var CombinationExamItemUpdateRowDomReact = (function (_super) {
            __extends(CombinationExamItemUpdateRowDomReact, _super);
            function CombinationExamItemUpdateRowDomReact() {
                _super.apply(this, arguments);
                this.state = new CombinationExamItemUpdateRowDomStates();
            }
            CombinationExamItemUpdateRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title acsPointer", onClick: function () { _this.fun_masterTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsMasterHide ? "hide" : "acs-toggle-item"}, this.props.Vm.MasterRow.intoDom()));
            };
            CombinationExamItemUpdateRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            CombinationExamItemUpdateRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            CombinationExamItemUpdateRowDomReact.prototype.fun_masterTitleClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            return CombinationExamItemUpdateRowDomReact;
        }(domCore.DomReact));
        CombinationExamItemUpdateRowDom.CombinationExamItemUpdateRowDomReact = CombinationExamItemUpdateRowDomReact;
        var CombinationExamItemUpdateRowDomVm = (function (_super) {
            __extends(CombinationExamItemUpdateRowDomVm, _super);
            function CombinationExamItemUpdateRowDomVm(config) {
                _super.call(this);
                this.ReactType = CombinationExamItemUpdateRowDomReact;
                this.MasterRow = new masterRowFile.CombinationExamItemUpdateMasterRowDom.CombinationExamItemUpdateMasterRowDomVm();
                this.DelFidList = [];
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                if (config) {
                    config.MasterConfig.UniId = this.UniId;
                    this.MasterRow = new masterRowFile.CombinationExamItemUpdateMasterRowDom.CombinationExamItemUpdateMasterRowDomVm(config.MasterConfig);
                }
                ;
            }
            return CombinationExamItemUpdateRowDomVm;
        }(domCore.DomVm));
        CombinationExamItemUpdateRowDom.CombinationExamItemUpdateRowDomVm = CombinationExamItemUpdateRowDomVm;
        var CombinationExamItemUpdateRowDomStates = (function (_super) {
            __extends(CombinationExamItemUpdateRowDomStates, _super);
            function CombinationExamItemUpdateRowDomStates() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemUpdateRowDomStates;
        }(domCore.DomStates));
        CombinationExamItemUpdateRowDom.CombinationExamItemUpdateRowDomStates = CombinationExamItemUpdateRowDomStates;
        var CombinationExamItemUpdateRowDomProps = (function (_super) {
            __extends(CombinationExamItemUpdateRowDomProps, _super);
            function CombinationExamItemUpdateRowDomProps() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemUpdateRowDomProps;
        }(domCore.DomProps));
        CombinationExamItemUpdateRowDom.CombinationExamItemUpdateRowDomProps = CombinationExamItemUpdateRowDomProps;
    })(CombinationExamItemUpdateRowDom = exports.CombinationExamItemUpdateRowDom || (exports.CombinationExamItemUpdateRowDom = {}));
});
