var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./DepartUpdateMasterRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var DepartUpdateRowDom;
    (function (DepartUpdateRowDom) {
        var DepartUpdateRowDomAction = (function (_super) {
            __extends(DepartUpdateRowDomAction, _super);
            function DepartUpdateRowDomAction() {
                _super.apply(this, arguments);
            }
            return DepartUpdateRowDomAction;
        }(domCore.DomAction));
        DepartUpdateRowDom.DepartUpdateRowDomAction = DepartUpdateRowDomAction;
        var DepartUpdateRowDomReact = (function (_super) {
            __extends(DepartUpdateRowDomReact, _super);
            function DepartUpdateRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DepartUpdateRowDomStates();
            }
            DepartUpdateRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title Hu-pointer", onClick: function () { _this.fun_masterTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsMasterHide ? "hide" : ""}, this.props.Vm.MasterRow.intoDom()));
            };
            DepartUpdateRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            DepartUpdateRowDomReact.prototype.fun_masterTitleClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            DepartUpdateRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DepartUpdateRowDomReact;
        }(domCore.DomReact));
        DepartUpdateRowDom.DepartUpdateRowDomReact = DepartUpdateRowDomReact;
        var DepartUpdateRowDomVm = (function (_super) {
            __extends(DepartUpdateRowDomVm, _super);
            function DepartUpdateRowDomVm(config) {
                _super.call(this);
                this.ReactType = DepartUpdateRowDomReact;
                this.MasterRow = new masterRowFile.DepartUpdateMasterRowDom.DepartUpdateMasterRowDomVm();
                this.DelFidList = [];
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                if (config) {
                    config.MasterConfig.UniId = this.UniId;
                    this.MasterRow = new masterRowFile.DepartUpdateMasterRowDom.DepartUpdateMasterRowDomVm(config.MasterConfig);
                }
                ;
            }
            DepartUpdateRowDomVm.prototype.legal = function () {
                var _isres = this.MasterRow.legal();
                return _isres;
            };
            DepartUpdateRowDomVm.prototype.getData = function () {
                var _data = this.MasterRow.getData();
                return _data;
            };
            return DepartUpdateRowDomVm;
        }(domCore.DomVm));
        DepartUpdateRowDom.DepartUpdateRowDomVm = DepartUpdateRowDomVm;
        var DepartUpdateRowDomStates = (function (_super) {
            __extends(DepartUpdateRowDomStates, _super);
            function DepartUpdateRowDomStates() {
                _super.apply(this, arguments);
            }
            return DepartUpdateRowDomStates;
        }(domCore.DomStates));
        DepartUpdateRowDom.DepartUpdateRowDomStates = DepartUpdateRowDomStates;
        var DepartUpdateRowDomProps = (function (_super) {
            __extends(DepartUpdateRowDomProps, _super);
            function DepartUpdateRowDomProps() {
                _super.apply(this, arguments);
            }
            return DepartUpdateRowDomProps;
        }(domCore.DomProps));
        DepartUpdateRowDom.DepartUpdateRowDomProps = DepartUpdateRowDomProps;
    })(DepartUpdateRowDom = exports.DepartUpdateRowDom || (exports.DepartUpdateRowDom = {}));
});
