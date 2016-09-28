var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./UnitUpdateMasterRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var UnitUpdateRowDom;
    (function (UnitUpdateRowDom) {
        var UnitUpdateRowDomAction = (function (_super) {
            __extends(UnitUpdateRowDomAction, _super);
            function UnitUpdateRowDomAction() {
                _super.apply(this, arguments);
            }
            return UnitUpdateRowDomAction;
        }(domCore.DomAction));
        UnitUpdateRowDom.UnitUpdateRowDomAction = UnitUpdateRowDomAction;
        var UnitUpdateRowDomReact = (function (_super) {
            __extends(UnitUpdateRowDomReact, _super);
            function UnitUpdateRowDomReact() {
                _super.apply(this, arguments);
                this.state = new UnitUpdateRowDomStates();
            }
            UnitUpdateRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title acsPointer", onClick: function () { _this.fun_masterTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsMasterHide ? "hide" : "acs-toggle-item"}, this.props.Vm.MasterRow.intoDom()));
            };
            UnitUpdateRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            UnitUpdateRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            UnitUpdateRowDomReact.prototype.fun_masterTitleClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            return UnitUpdateRowDomReact;
        }(domCore.DomReact));
        UnitUpdateRowDom.UnitUpdateRowDomReact = UnitUpdateRowDomReact;
        var UnitUpdateRowDomVm = (function (_super) {
            __extends(UnitUpdateRowDomVm, _super);
            function UnitUpdateRowDomVm(config) {
                _super.call(this);
                this.ReactType = UnitUpdateRowDomReact;
                this.MasterRow = new masterRowFile.UnitUpdateMasterRowDom.UnitUpdateMasterRowDomVm();
                this.DelFidList = [];
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                if (config) {
                    config.MasterConfig.UniId = this.UniId;
                    this.MasterRow = new masterRowFile.UnitUpdateMasterRowDom.UnitUpdateMasterRowDomVm(config.MasterConfig);
                }
                ;
            }
            UnitUpdateRowDomVm.prototype.legal = function () {
                var _isres = this.MasterRow.legal();
                return _isres;
            };
            UnitUpdateRowDomVm.prototype.getData = function () {
                var _data = this.MasterRow.getData();
                return _data;
            };
            return UnitUpdateRowDomVm;
        }(domCore.DomVm));
        UnitUpdateRowDom.UnitUpdateRowDomVm = UnitUpdateRowDomVm;
        var UnitUpdateRowDomStates = (function (_super) {
            __extends(UnitUpdateRowDomStates, _super);
            function UnitUpdateRowDomStates() {
                _super.apply(this, arguments);
            }
            return UnitUpdateRowDomStates;
        }(domCore.DomStates));
        UnitUpdateRowDom.UnitUpdateRowDomStates = UnitUpdateRowDomStates;
        var UnitUpdateRowDomProps = (function (_super) {
            __extends(UnitUpdateRowDomProps, _super);
            function UnitUpdateRowDomProps() {
                _super.apply(this, arguments);
            }
            return UnitUpdateRowDomProps;
        }(domCore.DomProps));
        UnitUpdateRowDom.UnitUpdateRowDomProps = UnitUpdateRowDomProps;
    })(UnitUpdateRowDom = exports.UnitUpdateRowDom || (exports.UnitUpdateRowDom = {}));
});
