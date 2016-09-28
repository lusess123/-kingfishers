var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./ExamItemCategoryInsertMasterRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemCategoryInsertRowDom;
    (function (ExamItemCategoryInsertRowDom) {
        var ExamItemCategoryInsertRowDomAction = (function (_super) {
            __extends(ExamItemCategoryInsertRowDomAction, _super);
            function ExamItemCategoryInsertRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryInsertRowDomAction;
        }(domCore.DomAction));
        ExamItemCategoryInsertRowDom.ExamItemCategoryInsertRowDomAction = ExamItemCategoryInsertRowDomAction;
        var ExamItemCategoryInsertRowDomReact = (function (_super) {
            __extends(ExamItemCategoryInsertRowDomReact, _super);
            function ExamItemCategoryInsertRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemCategoryInsertRowDomStates();
            }
            ExamItemCategoryInsertRowDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this.props.Vm.MasterRow.intoDom());
            };
            return ExamItemCategoryInsertRowDomReact;
        }(domCore.DomReact));
        ExamItemCategoryInsertRowDom.ExamItemCategoryInsertRowDomReact = ExamItemCategoryInsertRowDomReact;
        var ExamItemCategoryInsertRowDomVm = (function (_super) {
            __extends(ExamItemCategoryInsertRowDomVm, _super);
            function ExamItemCategoryInsertRowDomVm(config) {
                _super.call(this);
                this.ReactType = ExamItemCategoryInsertRowDomReact;
                this.UniId = eventFile.App.getUniId().toString();
                this.MasterRow = new masterRowFile.ExamItemCategoryInsertMasterRowDom.ExamItemCategoryInsertMasterRowDomVm();
            }
            return ExamItemCategoryInsertRowDomVm;
        }(domCore.DomVm));
        ExamItemCategoryInsertRowDom.ExamItemCategoryInsertRowDomVm = ExamItemCategoryInsertRowDomVm;
        var ExamItemCategoryInsertRowDomStates = (function (_super) {
            __extends(ExamItemCategoryInsertRowDomStates, _super);
            function ExamItemCategoryInsertRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryInsertRowDomStates;
        }(domCore.DomStates));
        ExamItemCategoryInsertRowDom.ExamItemCategoryInsertRowDomStates = ExamItemCategoryInsertRowDomStates;
        var ExamItemCategoryInsertRowDomProps = (function (_super) {
            __extends(ExamItemCategoryInsertRowDomProps, _super);
            function ExamItemCategoryInsertRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryInsertRowDomProps;
        }(domCore.DomProps));
        ExamItemCategoryInsertRowDom.ExamItemCategoryInsertRowDomProps = ExamItemCategoryInsertRowDomProps;
    })(ExamItemCategoryInsertRowDom = exports.ExamItemCategoryInsertRowDom || (exports.ExamItemCategoryInsertRowDom = {}));
});
