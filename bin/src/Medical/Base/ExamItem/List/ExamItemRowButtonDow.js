var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../05tool/Button", "react"], function (require, exports, domFile, buttonFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemRowButtonDow;
    (function (ExamItemRowButtonDow) {
        var ExamItemRowButtonDowAction = (function (_super) {
            __extends(ExamItemRowButtonDowAction, _super);
            function ExamItemRowButtonDowAction() {
                _super.apply(this, arguments);
            }
            return ExamItemRowButtonDowAction;
        }(domCore.DomAction));
        ExamItemRowButtonDow.ExamItemRowButtonDowAction = ExamItemRowButtonDowAction;
        var ExamItemRowButtonDowReact = (function (_super) {
            __extends(ExamItemRowButtonDowReact, _super);
            function ExamItemRowButtonDowReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemRowButtonDowStates();
            }
            ExamItemRowButtonDowReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ButtonBar ta1"}, this.props.Vm.BtnList.map(function (btn) {
                    return btn.intoDom();
                })));
            };
            ExamItemRowButtonDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamItemRowButtonDowReact;
        }(domCore.DomReact));
        ExamItemRowButtonDow.ExamItemRowButtonDowReact = ExamItemRowButtonDowReact;
        var ExamItemRowButtonDowVm = (function (_super) {
            __extends(ExamItemRowButtonDowVm, _super);
            function ExamItemRowButtonDowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ExamItemRowButtonDowReact;
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
                    this.UniId = config.UniId;
                    this.Row.RowButtonExpand.ExpandCustomFun = (function (vm) { _this.forceUpdate(""); });
                }
                this.BtnList.forEach(function (btn) {
                    btn.ClickFun = function (a) {
                        _this.emitAppEvent("medical/base/examitem/rowbtnclick", _this.UniId, a.Name, _this.Row.RowData.FID);
                    };
                });
            }
            return ExamItemRowButtonDowVm;
        }(domCore.DomVm));
        ExamItemRowButtonDow.ExamItemRowButtonDowVm = ExamItemRowButtonDowVm;
        var ExamItemRowButtonDowStates = (function (_super) {
            __extends(ExamItemRowButtonDowStates, _super);
            function ExamItemRowButtonDowStates() {
                _super.apply(this, arguments);
            }
            return ExamItemRowButtonDowStates;
        }(domCore.DomStates));
        ExamItemRowButtonDow.ExamItemRowButtonDowStates = ExamItemRowButtonDowStates;
        var ExamItemRowButtonDowProps = (function (_super) {
            __extends(ExamItemRowButtonDowProps, _super);
            function ExamItemRowButtonDowProps() {
                _super.apply(this, arguments);
            }
            return ExamItemRowButtonDowProps;
        }(domCore.DomProps));
        ExamItemRowButtonDow.ExamItemRowButtonDowProps = ExamItemRowButtonDowProps;
    })(ExamItemRowButtonDow = exports.ExamItemRowButtonDow || (exports.ExamItemRowButtonDow = {}));
});
