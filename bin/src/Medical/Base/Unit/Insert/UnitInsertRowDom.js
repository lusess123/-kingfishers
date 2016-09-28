var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./UnitInsertMasterRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var UnitInsertRowDom;
    (function (UnitInsertRowDom) {
        var UnitInsertRowDomAction = (function (_super) {
            __extends(UnitInsertRowDomAction, _super);
            function UnitInsertRowDomAction() {
                _super.apply(this, arguments);
            }
            return UnitInsertRowDomAction;
        }(domCore.DomAction));
        UnitInsertRowDom.UnitInsertRowDomAction = UnitInsertRowDomAction;
        var UnitInsertRowDomReact = (function (_super) {
            __extends(UnitInsertRowDomReact, _super);
            function UnitInsertRowDomReact() {
                _super.apply(this, arguments);
                this.state = new UnitInsertRowDomStates();
            }
            UnitInsertRowDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this.props.Vm.MasterRow.intoDom());
            };
            UnitInsertRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            UnitInsertRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UnitInsertRowDomReact;
        }(domCore.DomReact));
        UnitInsertRowDom.UnitInsertRowDomReact = UnitInsertRowDomReact;
        var UnitInsertRowDomVm = (function (_super) {
            __extends(UnitInsertRowDomVm, _super);
            function UnitInsertRowDomVm(config) {
                _super.call(this);
                this.ReactType = UnitInsertRowDomReact;
                this.UniId = eventFile.App.getUniId().toString();
                this.MasterRow = new masterRowFile.UnitInsertMasterRowDom.UnitInsertMasterRowDomVm();
            }
            return UnitInsertRowDomVm;
        }(domCore.DomVm));
        UnitInsertRowDom.UnitInsertRowDomVm = UnitInsertRowDomVm;
        var UnitInsertRowDomStates = (function (_super) {
            __extends(UnitInsertRowDomStates, _super);
            function UnitInsertRowDomStates() {
                _super.apply(this, arguments);
            }
            return UnitInsertRowDomStates;
        }(domCore.DomStates));
        UnitInsertRowDom.UnitInsertRowDomStates = UnitInsertRowDomStates;
        var UnitInsertRowDomProps = (function (_super) {
            __extends(UnitInsertRowDomProps, _super);
            function UnitInsertRowDomProps() {
                _super.apply(this, arguments);
            }
            return UnitInsertRowDomProps;
        }(domCore.DomProps));
        UnitInsertRowDom.UnitInsertRowDomProps = UnitInsertRowDomProps;
    })(UnitInsertRowDom = exports.UnitInsertRowDom || (exports.UnitInsertRowDom = {}));
});
