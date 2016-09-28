var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./CombinationExamItemInsertMasterRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var CombinationExamItemInsertRowDom;
    (function (CombinationExamItemInsertRowDom) {
        var CombinationExamItemInsertRowDomAction = (function (_super) {
            __extends(CombinationExamItemInsertRowDomAction, _super);
            function CombinationExamItemInsertRowDomAction() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemInsertRowDomAction;
        }(domCore.DomAction));
        CombinationExamItemInsertRowDom.CombinationExamItemInsertRowDomAction = CombinationExamItemInsertRowDomAction;
        var CombinationExamItemInsertRowDomReact = (function (_super) {
            __extends(CombinationExamItemInsertRowDomReact, _super);
            function CombinationExamItemInsertRowDomReact() {
                _super.apply(this, arguments);
                this.state = new CombinationExamItemInsertRowDomStates();
            }
            CombinationExamItemInsertRowDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: ""}, this.props.Vm.MasterRow.intoDom());
            };
            CombinationExamItemInsertRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            CombinationExamItemInsertRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return CombinationExamItemInsertRowDomReact;
        }(domCore.DomReact));
        CombinationExamItemInsertRowDom.CombinationExamItemInsertRowDomReact = CombinationExamItemInsertRowDomReact;
        var CombinationExamItemInsertRowDomVm = (function (_super) {
            __extends(CombinationExamItemInsertRowDomVm, _super);
            function CombinationExamItemInsertRowDomVm(config) {
                _super.call(this);
                this.ReactType = CombinationExamItemInsertRowDomReact;
                this.UniId = eventFile.App.getUniId().toString();
                this.MasterRow = new masterRowFile.CombinationExamItemInsertMasterRowDom.CombinationExamItemInsertMasterRowDomVm();
            }
            return CombinationExamItemInsertRowDomVm;
        }(domCore.DomVm));
        CombinationExamItemInsertRowDom.CombinationExamItemInsertRowDomVm = CombinationExamItemInsertRowDomVm;
        var CombinationExamItemInsertRowDomStates = (function (_super) {
            __extends(CombinationExamItemInsertRowDomStates, _super);
            function CombinationExamItemInsertRowDomStates() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemInsertRowDomStates;
        }(domCore.DomStates));
        CombinationExamItemInsertRowDom.CombinationExamItemInsertRowDomStates = CombinationExamItemInsertRowDomStates;
        var CombinationExamItemInsertRowDomProps = (function (_super) {
            __extends(CombinationExamItemInsertRowDomProps, _super);
            function CombinationExamItemInsertRowDomProps() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemInsertRowDomProps;
        }(domCore.DomProps));
        CombinationExamItemInsertRowDom.CombinationExamItemInsertRowDomProps = CombinationExamItemInsertRowDomProps;
    })(CombinationExamItemInsertRowDom = exports.CombinationExamItemInsertRowDom || (exports.CombinationExamItemInsertRowDom = {}));
});
