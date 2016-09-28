var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../05tool/Button", "react"], function (require, exports, domFile, buttonFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var ExamPackageRowButtonDow;
    (function (ExamPackageRowButtonDow) {
        var ExamPackageRowButtonDowAction = (function (_super) {
            __extends(ExamPackageRowButtonDowAction, _super);
            function ExamPackageRowButtonDowAction() {
                _super.apply(this, arguments);
            }
            return ExamPackageRowButtonDowAction;
        }(domCore.DomAction));
        ExamPackageRowButtonDow.ExamPackageRowButtonDowAction = ExamPackageRowButtonDowAction;
        var ExamPackageRowButtonDowReact = (function (_super) {
            __extends(ExamPackageRowButtonDowReact, _super);
            function ExamPackageRowButtonDowReact() {
                _super.apply(this, arguments);
                this.state = new ExamPackageRowButtonDowStates();
            }
            ExamPackageRowButtonDowReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ButtonBar ta1"}, this.props.Vm.BtnList.map(function (btn) {
                    return btn.intoDom();
                })));
            };
            ExamPackageRowButtonDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamPackageRowButtonDowReact;
        }(domCore.DomReact));
        ExamPackageRowButtonDow.ExamPackageRowButtonDowReact = ExamPackageRowButtonDowReact;
        var ExamPackageRowButtonDowVm = (function (_super) {
            __extends(ExamPackageRowButtonDowVm, _super);
            function ExamPackageRowButtonDowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ExamPackageRowButtonDowReact;
                if (config) {
                    this.Row = config.Row;
                    this.Row.RowButtonExpand.ExpandCustomFun = (function (vm) { _this.forceUpdate(""); });
                    this.UniId = config.UniId;
                }
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
                        _this.emitAppEvent("medical/base/exampackage/rowbtnclick", _this.UniId, a.Name, _this.Row.RowData.FID);
                    };
                });
            }
            return ExamPackageRowButtonDowVm;
        }(domCore.DomVm));
        ExamPackageRowButtonDow.ExamPackageRowButtonDowVm = ExamPackageRowButtonDowVm;
        var ExamPackageRowButtonDowStates = (function (_super) {
            __extends(ExamPackageRowButtonDowStates, _super);
            function ExamPackageRowButtonDowStates() {
                _super.apply(this, arguments);
            }
            return ExamPackageRowButtonDowStates;
        }(domCore.DomStates));
        ExamPackageRowButtonDow.ExamPackageRowButtonDowStates = ExamPackageRowButtonDowStates;
        var ExamPackageRowButtonDowProps = (function (_super) {
            __extends(ExamPackageRowButtonDowProps, _super);
            function ExamPackageRowButtonDowProps() {
                _super.apply(this, arguments);
            }
            return ExamPackageRowButtonDowProps;
        }(domCore.DomProps));
        ExamPackageRowButtonDow.ExamPackageRowButtonDowProps = ExamPackageRowButtonDowProps;
    })(ExamPackageRowButtonDow = exports.ExamPackageRowButtonDow || (exports.ExamPackageRowButtonDow = {}));
});
