var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../05tool/Button", "react"], function (require, exports, domFile, buttonFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var UnitRowButtonDow;
    (function (UnitRowButtonDow) {
        var UnitRowButtonDowAction = (function (_super) {
            __extends(UnitRowButtonDowAction, _super);
            function UnitRowButtonDowAction() {
                _super.apply(this, arguments);
            }
            return UnitRowButtonDowAction;
        }(domCore.DomAction));
        UnitRowButtonDow.UnitRowButtonDowAction = UnitRowButtonDowAction;
        var UnitRowButtonDowReact = (function (_super) {
            __extends(UnitRowButtonDowReact, _super);
            function UnitRowButtonDowReact() {
                _super.apply(this, arguments);
                this.state = new UnitRowButtonDowStates();
            }
            UnitRowButtonDowReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ButtonBar ta1"}, this.props.Vm.BtnList.map(function (btn) {
                    return btn.intoDom();
                })));
            };
            UnitRowButtonDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UnitRowButtonDowReact;
        }(domCore.DomReact));
        UnitRowButtonDow.UnitRowButtonDowReact = UnitRowButtonDowReact;
        var UnitRowButtonDowVm = (function (_super) {
            __extends(UnitRowButtonDowVm, _super);
            function UnitRowButtonDowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = UnitRowButtonDowReact;
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
                        _this.emitAppEvent("medical/base/unit/rowbtnclick", _this.UniId, a.Name, _this.Row.RowData.FID);
                    };
                });
            }
            return UnitRowButtonDowVm;
        }(domCore.DomVm));
        UnitRowButtonDow.UnitRowButtonDowVm = UnitRowButtonDowVm;
        var UnitRowButtonDowStates = (function (_super) {
            __extends(UnitRowButtonDowStates, _super);
            function UnitRowButtonDowStates() {
                _super.apply(this, arguments);
            }
            return UnitRowButtonDowStates;
        }(domCore.DomStates));
        UnitRowButtonDow.UnitRowButtonDowStates = UnitRowButtonDowStates;
        var UnitRowButtonDowProps = (function (_super) {
            __extends(UnitRowButtonDowProps, _super);
            function UnitRowButtonDowProps() {
                _super.apply(this, arguments);
            }
            return UnitRowButtonDowProps;
        }(domCore.DomProps));
        UnitRowButtonDow.UnitRowButtonDowProps = UnitRowButtonDowProps;
    })(UnitRowButtonDow = exports.UnitRowButtonDow || (exports.UnitRowButtonDow = {}));
});
