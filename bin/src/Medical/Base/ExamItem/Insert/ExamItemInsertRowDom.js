var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./ExamItemInsertMasterRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemInsertRowDom;
    (function (ExamItemInsertRowDom) {
        var ExamItemInsertRowDomAction = (function (_super) {
            __extends(ExamItemInsertRowDomAction, _super);
            function ExamItemInsertRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamItemInsertRowDomAction;
        }(domCore.DomAction));
        ExamItemInsertRowDom.ExamItemInsertRowDomAction = ExamItemInsertRowDomAction;
        var ExamItemInsertRowDomReact = (function (_super) {
            __extends(ExamItemInsertRowDomReact, _super);
            function ExamItemInsertRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemInsertRowDomStates();
            }
            ExamItemInsertRowDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this.props.Vm.MasterRow.intoDom());
            };
            ExamItemInsertRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            ExamItemInsertRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamItemInsertRowDomReact;
        }(domCore.DomReact));
        ExamItemInsertRowDom.ExamItemInsertRowDomReact = ExamItemInsertRowDomReact;
        var ExamItemInsertRowDomVm = (function (_super) {
            __extends(ExamItemInsertRowDomVm, _super);
            function ExamItemInsertRowDomVm(config) {
                _super.call(this);
                this.ReactType = ExamItemInsertRowDomReact;
                this.UniId = eventFile.App.getUniId().toString();
                this.MasterRow = new masterRowFile.ExamItemInsertMasterRowDom.ExamItemInsertMasterRowDomVm();
            }
            return ExamItemInsertRowDomVm;
        }(domCore.DomVm));
        ExamItemInsertRowDom.ExamItemInsertRowDomVm = ExamItemInsertRowDomVm;
        var ExamItemInsertRowDomStates = (function (_super) {
            __extends(ExamItemInsertRowDomStates, _super);
            function ExamItemInsertRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamItemInsertRowDomStates;
        }(domCore.DomStates));
        ExamItemInsertRowDom.ExamItemInsertRowDomStates = ExamItemInsertRowDomStates;
        var ExamItemInsertRowDomProps = (function (_super) {
            __extends(ExamItemInsertRowDomProps, _super);
            function ExamItemInsertRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamItemInsertRowDomProps;
        }(domCore.DomProps));
        ExamItemInsertRowDom.ExamItemInsertRowDomProps = ExamItemInsertRowDomProps;
    })(ExamItemInsertRowDom = exports.ExamItemInsertRowDom || (exports.ExamItemInsertRowDom = {}));
});
