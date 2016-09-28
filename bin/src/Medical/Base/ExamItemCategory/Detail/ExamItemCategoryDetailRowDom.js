var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./ExamItemCategoryDetailMasterRowDom"], function (require, exports, React, domFile, masterRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemCategoryDetailRowDom;
    (function (ExamItemCategoryDetailRowDom) {
        var ExamItemCategoryDetailRowDomAction = (function (_super) {
            __extends(ExamItemCategoryDetailRowDomAction, _super);
            function ExamItemCategoryDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryDetailRowDomAction;
        }(domCore.DomAction));
        ExamItemCategoryDetailRowDom.ExamItemCategoryDetailRowDomAction = ExamItemCategoryDetailRowDomAction;
        var ExamItemCategoryDetailRowDomReact = (function (_super) {
            __extends(ExamItemCategoryDetailRowDomReact, _super);
            function ExamItemCategoryDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemCategoryDetailRowDomStates();
            }
            ExamItemCategoryDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title Hu-pointer", onClick: function () { _this.fun_itemTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : "Hm-toggle-item"}, this.props.Vm.MasterRow.intoDom()));
            };
            ExamItemCategoryDetailRowDomReact.prototype.fun_rowTitleClick = function () {
                this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
                this.forceUpdate();
            };
            ExamItemCategoryDetailRowDomReact.prototype.fun_itemTitleClick = function () {
                this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
                this.forceUpdate();
            };
            ExamItemCategoryDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamItemCategoryDetailRowDomReact;
        }(domCore.DomReact));
        ExamItemCategoryDetailRowDom.ExamItemCategoryDetailRowDomReact = ExamItemCategoryDetailRowDomReact;
        var ExamItemCategoryDetailRowDomVm = (function (_super) {
            __extends(ExamItemCategoryDetailRowDomVm, _super);
            function ExamItemCategoryDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = ExamItemCategoryDetailRowDomReact;
                this.MasterRow = new masterRowFile.ExamItemCategoryDetailMasterRowDom.ExamItemCategoryDetailMasterRowDomVm(config.MasterConfig);
            }
            return ExamItemCategoryDetailRowDomVm;
        }(domCore.DomVm));
        ExamItemCategoryDetailRowDom.ExamItemCategoryDetailRowDomVm = ExamItemCategoryDetailRowDomVm;
        var ExamItemCategoryDetailRowDomStates = (function (_super) {
            __extends(ExamItemCategoryDetailRowDomStates, _super);
            function ExamItemCategoryDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryDetailRowDomStates;
        }(domCore.DomStates));
        ExamItemCategoryDetailRowDom.ExamItemCategoryDetailRowDomStates = ExamItemCategoryDetailRowDomStates;
        var ExamItemCategoryDetailRowDomProps = (function (_super) {
            __extends(ExamItemCategoryDetailRowDomProps, _super);
            function ExamItemCategoryDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryDetailRowDomProps;
        }(domCore.DomProps));
        ExamItemCategoryDetailRowDom.ExamItemCategoryDetailRowDomProps = ExamItemCategoryDetailRowDomProps;
    })(ExamItemCategoryDetailRowDom = exports.ExamItemCategoryDetailRowDom || (exports.ExamItemCategoryDetailRowDom = {}));
});
