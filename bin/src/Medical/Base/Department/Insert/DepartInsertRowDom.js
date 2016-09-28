var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Event", "./DepartInsertMasterRowDom"], function (require, exports, React, domFile, eventFile, masterRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var DepartInsertRowDom;
    (function (DepartInsertRowDom) {
        var DepartInsertRowDomAction = (function (_super) {
            __extends(DepartInsertRowDomAction, _super);
            function DepartInsertRowDomAction() {
                _super.apply(this, arguments);
            }
            return DepartInsertRowDomAction;
        }(domCore.DomAction));
        DepartInsertRowDom.DepartInsertRowDomAction = DepartInsertRowDomAction;
        var DepartInsertRowDomReact = (function (_super) {
            __extends(DepartInsertRowDomReact, _super);
            function DepartInsertRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DepartInsertRowDomStates();
            }
            DepartInsertRowDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this.props.Vm.MasterRow.intoDom());
            };
            DepartInsertRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            DepartInsertRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DepartInsertRowDomReact;
        }(domCore.DomReact));
        DepartInsertRowDom.DepartInsertRowDomReact = DepartInsertRowDomReact;
        var DepartInsertRowDomVm = (function (_super) {
            __extends(DepartInsertRowDomVm, _super);
            function DepartInsertRowDomVm(config) {
                _super.call(this);
                this.ReactType = DepartInsertRowDomReact;
                this.UniId = eventFile.App.getUniId().toString();
                this.MasterRow = new masterRowFile.DepartInsertMasterRowDom.DepartInsertMasterRowDomVm();
            }
            return DepartInsertRowDomVm;
        }(domCore.DomVm));
        DepartInsertRowDom.DepartInsertRowDomVm = DepartInsertRowDomVm;
        var DepartInsertRowDomStates = (function (_super) {
            __extends(DepartInsertRowDomStates, _super);
            function DepartInsertRowDomStates() {
                _super.apply(this, arguments);
            }
            return DepartInsertRowDomStates;
        }(domCore.DomStates));
        DepartInsertRowDom.DepartInsertRowDomStates = DepartInsertRowDomStates;
        var DepartInsertRowDomProps = (function (_super) {
            __extends(DepartInsertRowDomProps, _super);
            function DepartInsertRowDomProps() {
                _super.apply(this, arguments);
            }
            return DepartInsertRowDomProps;
        }(domCore.DomProps));
        DepartInsertRowDom.DepartInsertRowDomProps = DepartInsertRowDomProps;
    })(DepartInsertRowDom = exports.DepartInsertRowDom || (exports.DepartInsertRowDom = {}));
});
