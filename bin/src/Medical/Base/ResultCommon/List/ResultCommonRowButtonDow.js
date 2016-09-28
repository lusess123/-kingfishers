var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../05tool/Button", "react"], function (require, exports, domFile, buttonFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var ResultCommonRowButtonDow;
    (function (ResultCommonRowButtonDow) {
        var ResultCommonRowButtonDowAction = (function (_super) {
            __extends(ResultCommonRowButtonDowAction, _super);
            function ResultCommonRowButtonDowAction() {
                _super.apply(this, arguments);
            }
            return ResultCommonRowButtonDowAction;
        }(domCore.DomAction));
        ResultCommonRowButtonDow.ResultCommonRowButtonDowAction = ResultCommonRowButtonDowAction;
        var ResultCommonRowButtonDowReact = (function (_super) {
            __extends(ResultCommonRowButtonDowReact, _super);
            function ResultCommonRowButtonDowReact() {
                _super.apply(this, arguments);
                this.state = new ResultCommonRowButtonDowStates();
            }
            ResultCommonRowButtonDowReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ButtonBar ta1"}, this.props.Vm.BtnList.map(function (btn) {
                    return btn.intoDom();
                })));
            };
            ResultCommonRowButtonDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ResultCommonRowButtonDowReact;
        }(domCore.DomReact));
        ResultCommonRowButtonDow.ResultCommonRowButtonDowReact = ResultCommonRowButtonDowReact;
        var ResultCommonRowButtonDowVm = (function (_super) {
            __extends(ResultCommonRowButtonDowVm, _super);
            function ResultCommonRowButtonDowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ResultCommonRowButtonDowReact;
                this.BtnList = new Array();
                var btnVm1 = new buttonFile.ui.ButtonVm();
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
                        _this.BtnList.forEach(function (btn) {
                            btn.ClickFun = function (a) {
                                _this.emitAppEvent("medical/base/result/rowbtnclick", _this.UniId, a.Name, _this.Row.RowData.FID);
                            };
                        });
                    };
                });
            }
            return ResultCommonRowButtonDowVm;
        }(domCore.DomVm));
        ResultCommonRowButtonDow.ResultCommonRowButtonDowVm = ResultCommonRowButtonDowVm;
        var ResultCommonRowButtonDowStates = (function (_super) {
            __extends(ResultCommonRowButtonDowStates, _super);
            function ResultCommonRowButtonDowStates() {
                _super.apply(this, arguments);
            }
            return ResultCommonRowButtonDowStates;
        }(domCore.DomStates));
        ResultCommonRowButtonDow.ResultCommonRowButtonDowStates = ResultCommonRowButtonDowStates;
        var ResultCommonRowButtonDowProps = (function (_super) {
            __extends(ResultCommonRowButtonDowProps, _super);
            function ResultCommonRowButtonDowProps() {
                _super.apply(this, arguments);
            }
            return ResultCommonRowButtonDowProps;
        }(domCore.DomProps));
        ResultCommonRowButtonDow.ResultCommonRowButtonDowProps = ResultCommonRowButtonDowProps;
    })(ResultCommonRowButtonDow = exports.ResultCommonRowButtonDow || (exports.ResultCommonRowButtonDow = {}));
});
