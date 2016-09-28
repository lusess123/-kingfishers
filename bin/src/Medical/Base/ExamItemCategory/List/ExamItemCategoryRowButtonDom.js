var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../05tool/Button"], function (require, exports, React, domFile, buttonFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemCategoryRowButtonDom;
    (function (ExamItemCategoryRowButtonDom) {
        var ExamItemCategoryRowButtonDomAction = (function (_super) {
            __extends(ExamItemCategoryRowButtonDomAction, _super);
            function ExamItemCategoryRowButtonDomAction() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryRowButtonDomAction;
        }(domCore.DomAction));
        ExamItemCategoryRowButtonDom.ExamItemCategoryRowButtonDomAction = ExamItemCategoryRowButtonDomAction;
        var ExamItemCategoryRowButtonDomReact = (function (_super) {
            __extends(ExamItemCategoryRowButtonDomReact, _super);
            function ExamItemCategoryRowButtonDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemCategoryRowButtonDomStates();
            }
            ExamItemCategoryRowButtonDomReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ButtonBar ta1"}, this.props.Vm.BtnList.map(function (a) {
                    return a.intoDom();
                })));
            };
            ExamItemCategoryRowButtonDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamItemCategoryRowButtonDomReact;
        }(domCore.DomReact));
        ExamItemCategoryRowButtonDom.ExamItemCategoryRowButtonDomReact = ExamItemCategoryRowButtonDomReact;
        var EExamItemCategoryRowButtonDomVm = (function (_super) {
            __extends(EExamItemCategoryRowButtonDomVm, _super);
            function EExamItemCategoryRowButtonDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ExamItemCategoryRowButtonDomReact;
                this.BtnList = new Array();
                var btnVm1 = new buttonFile.ui.ButtonVm();
                btnVm1.DisplayName = "删除";
                btnVm1.IsNoBg = true;
                btnVm1.IconCss = "trash";
                btnVm1.Name = "del";
                var btnVm2 = new buttonFile.ui.ButtonVm();
                btnVm2.DisplayName = "详情";
                btnVm2.IsNoBg = true;
                btnVm2.IconCss = "table";
                btnVm2.Name = "view";
                var btnVm3 = new buttonFile.ui.ButtonVm();
                btnVm3.DisplayName = "编辑";
                btnVm3.IsNoBg = true;
                btnVm3.IconCss = "edit";
                btnVm3.Name = "update";
                this.BtnList.push(btnVm1);
                this.BtnList.push(btnVm2);
                this.BtnList.push(btnVm3);
                if (config) {
                    this.Row = config.Row;
                    this.Row.RowButtonExpand.ExpandCustomFun = (function (vm) { _this.forceUpdate(""); });
                }
                this.BtnList.forEach(function (btn) {
                    btn.ClickFun = function (a) {
                        _this.emitAppEvent("medical/base/user/rowbtnclick", _this.UniId, a.Name, _this.Row.RowData.FID);
                    };
                });
            }
            return EExamItemCategoryRowButtonDomVm;
        }(domCore.DomVm));
        ExamItemCategoryRowButtonDom.EExamItemCategoryRowButtonDomVm = EExamItemCategoryRowButtonDomVm;
        var ExamItemCategoryRowButtonDomStates = (function (_super) {
            __extends(ExamItemCategoryRowButtonDomStates, _super);
            function ExamItemCategoryRowButtonDomStates() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryRowButtonDomStates;
        }(domCore.DomStates));
        ExamItemCategoryRowButtonDom.ExamItemCategoryRowButtonDomStates = ExamItemCategoryRowButtonDomStates;
        var ExamItemCategoryRowButtonDomProps = (function (_super) {
            __extends(ExamItemCategoryRowButtonDomProps, _super);
            function ExamItemCategoryRowButtonDomProps() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryRowButtonDomProps;
        }(domCore.DomProps));
        ExamItemCategoryRowButtonDom.ExamItemCategoryRowButtonDomProps = ExamItemCategoryRowButtonDomProps;
    })(ExamItemCategoryRowButtonDom = exports.ExamItemCategoryRowButtonDom || (exports.ExamItemCategoryRowButtonDom = {}));
});
