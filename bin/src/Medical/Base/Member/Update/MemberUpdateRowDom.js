var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./MemberUpdateMasterRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var MemberUpdateRowDom;
    (function (MemberUpdateRowDom) {
        var MemberUpdateRowDomAction = (function (_super) {
            __extends(MemberUpdateRowDomAction, _super);
            function MemberUpdateRowDomAction() {
                _super.apply(this, arguments);
            }
            return MemberUpdateRowDomAction;
        }(domCore.DomAction));
        MemberUpdateRowDom.MemberUpdateRowDomAction = MemberUpdateRowDomAction;
        var MemberUpdateRowDomReact = (function (_super) {
            __extends(MemberUpdateRowDomReact, _super);
            function MemberUpdateRowDomReact() {
                _super.apply(this, arguments);
                this.state = new MemberUpdateRowDomStates();
            }
            MemberUpdateRowDomReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: this.props.Vm.IsMasterHide ? "hide" : "acs-toggle-item"}, this.props.Vm.MasterRow.intoDom()));
            };
            MemberUpdateRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            MemberUpdateRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            MemberUpdateRowDomReact.prototype.fun_masterTitleClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            return MemberUpdateRowDomReact;
        }(domCore.DomReact));
        MemberUpdateRowDom.MemberUpdateRowDomReact = MemberUpdateRowDomReact;
        var MemberUpdateRowDomVm = (function (_super) {
            __extends(MemberUpdateRowDomVm, _super);
            function MemberUpdateRowDomVm(config) {
                _super.call(this);
                this.ReactType = MemberUpdateRowDomReact;
                this.MasterRow = new masterRowFile.MemberUpdateMasterRowDom.MemberUpdateMasterRowDomVm();
                this.DelFidList = [];
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                if (config) {
                    config.MasterConfig.UniId = this.UniId;
                    this.MasterRow = new masterRowFile.MemberUpdateMasterRowDom.MemberUpdateMasterRowDomVm(config.MasterConfig);
                }
                ;
            }
            MemberUpdateRowDomVm.prototype.legal = function () {
                var _isres = this.MasterRow.legal();
                return _isres;
            };
            MemberUpdateRowDomVm.prototype.getData = function () {
                var _data = this.MasterRow.RowData;
                return _data;
            };
            return MemberUpdateRowDomVm;
        }(domCore.DomVm));
        MemberUpdateRowDom.MemberUpdateRowDomVm = MemberUpdateRowDomVm;
        var MemberUpdateRowDomStates = (function (_super) {
            __extends(MemberUpdateRowDomStates, _super);
            function MemberUpdateRowDomStates() {
                _super.apply(this, arguments);
            }
            return MemberUpdateRowDomStates;
        }(domCore.DomStates));
        MemberUpdateRowDom.MemberUpdateRowDomStates = MemberUpdateRowDomStates;
        var MemberUpdateRowDomProps = (function (_super) {
            __extends(MemberUpdateRowDomProps, _super);
            function MemberUpdateRowDomProps() {
                _super.apply(this, arguments);
            }
            return MemberUpdateRowDomProps;
        }(domCore.DomProps));
        MemberUpdateRowDom.MemberUpdateRowDomProps = MemberUpdateRowDomProps;
    })(MemberUpdateRowDom = exports.MemberUpdateRowDom || (exports.MemberUpdateRowDom = {}));
});
